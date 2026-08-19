const json = (data, status = 200) => new Response(JSON.stringify(data), {
  status,
  headers: {
    "content-type": "application/json; charset=utf-8",
    "access-control-allow-origin": "*",
    "cache-control": "no-store"
  }
});

export default {
  fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/health") {
      return json({ ok: true });
    }

    if (url.pathname !== "/presence") {
      return json({ error: "Not found" }, 404);
    }

    const room = env.PRESENCE.getByName("dul-global");
    return room.fetch(request);
  }
};

export class PresenceRoom {
  constructor(ctx) {
    this.ctx = ctx;
  }

  fetch(request) {
    if (request.headers.get("Upgrade")?.toLowerCase() !== "websocket") {
      return json({ error: "WebSocket upgrade required" }, 426);
    }

    const pair = new WebSocketPair();
    const [client, server] = Object.values(pair);
    this.ctx.acceptWebSocket(server);
    server.serializeAttachment({ verified: false, lastSeen: Date.now() });
    this.scheduleCleanup();

    return new Response(null, { status: 101, webSocket: client });
  }

  webSocketMessage(socket, message) {
    let attachment = socket.deserializeAttachment() || {};

    if (!attachment.verified) {
      try {
        const hello = JSON.parse(message);
        if (hello.type !== "hello" || hello.version !== 2) throw new Error("Unsupported client");
      } catch {
        socket.close(1008, "Please refresh Toby Web");
        return;
      }

      attachment = { verified: true, lastSeen: Date.now() };
      socket.serializeAttachment(attachment);
      this.broadcastCount();
      return;
    }

    if (message === "ping") {
      socket.serializeAttachment({ verified: true, lastSeen: Date.now() });
      socket.send("pong");
    }
  }

  webSocketClose(socket) {
    this.broadcastCount(socket);
  }

  webSocketError(socket) {
    this.broadcastCount(socket);
  }

  async alarm() {
    const staleBefore = Date.now() - 6 * 60 * 1000;

    for (const socket of this.ctx.getWebSockets()) {
      const attachment = socket.deserializeAttachment() || {};
      if (!attachment.verified || !attachment.lastSeen || attachment.lastSeen < staleBefore) {
        try {
          socket.close(1001, "Presence connection expired");
        } catch {
          // The socket is already closing.
        }
      }
    }

    this.broadcastCount();
    if (this.ctx.getWebSockets().length) this.scheduleCleanup();
  }

  scheduleCleanup() {
    this.ctx.storage.setAlarm(Date.now() + 60 * 1000);
  }

  broadcastCount(excludedSocket = null) {
    const sockets = this.ctx.getWebSockets().filter(socket => {
      if (socket === excludedSocket) return false;
      const attachment = socket.deserializeAttachment() || {};
      return attachment.verified === true;
    });
    const payload = JSON.stringify({ type: "presence", count: sockets.length });

    for (const socket of sockets) {
      try {
        socket.send(payload);
      } catch {
        // A closing socket will disappear from getWebSockets automatically.
      }
    }
  }
}
