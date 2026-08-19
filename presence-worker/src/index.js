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
    server.serializeAttachment({ verified: false, version: 0, lastSeen: Date.now() });
    this.scheduleCleanup();

    return new Response(null, { status: 101, webSocket: client });
  }

  webSocketMessage(socket, message) {
    let attachment = socket.deserializeAttachment() || {};

    if (!attachment.verified) {
      try {
        const hello = JSON.parse(message);
        if (
          hello.type !== "hello" ||
          hello.version !== 3 ||
          typeof hello.clientId !== "string" ||
          !/^[a-zA-Z0-9-]{8,80}$/.test(hello.clientId)
        ) throw new Error("Unsupported client");

        for (const existingSocket of this.ctx.getWebSockets()) {
          if (existingSocket === socket) continue;
          const existing = existingSocket.deserializeAttachment() || {};
          if (existing.clientId === hello.clientId) {
            existingSocket.close(1000, "Replaced by a newer connection");
          }
        }

        attachment = {
          verified: true,
          version: 3,
          clientId: hello.clientId,
          lastSeen: Date.now()
        };
      } catch {
        socket.close(1008, "Please refresh Toby Web");
        return;
      }

      socket.serializeAttachment(attachment);
      this.broadcastCount();
      return;
    }

    if (message === "ping") {
      socket.serializeAttachment({ ...attachment, lastSeen: Date.now() });
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
      if (
        !attachment.verified ||
        attachment.version !== 3 ||
        !attachment.clientId ||
        !attachment.lastSeen ||
        attachment.lastSeen < staleBefore
      ) {
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
      return attachment.verified === true && attachment.version === 3 && Boolean(attachment.clientId);
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
