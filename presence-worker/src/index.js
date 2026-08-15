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
    this.broadcastCount();

    return new Response(null, { status: 101, webSocket: client });
  }

  webSocketMessage(socket, message) {
    if (message === "ping") {
      socket.send("pong");
    }
  }

  webSocketClose(socket) {
    this.broadcastCount(socket);
  }

  webSocketError(socket) {
    this.broadcastCount(socket);
  }

  broadcastCount(excludedSocket = null) {
    const sockets = this.ctx.getWebSockets().filter(socket => socket !== excludedSocket);
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
