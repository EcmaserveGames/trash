interface Handshake {
  identity: string
}
type HandshakeResponse = string | Handshake

function isHandShake(
  evt: MessageEvent<any>
): evt is MessageEvent<HandshakeResponse> {
  if (typeof evt.data === 'string') {
    const parsed = JSON.parse(evt.data)
    return !!parsed?.identity
  }
  return false
}

export async function naiveAuth(ctx: any, next: Function) {
  const socket: WebSocket = ctx.websocket
  socket.addEventListener(
    'message',
    (evt) => {
      if (isHandShake(evt) && typeof evt.data === 'string') {
        const handshake: Handshake = JSON.parse(evt.data)
        ctx.state.user = { sub: handshake.identity }
        return false
      } else if (!ctx.state.user) {
        // Discard unauthenticated message & close socket
        socket.close()
        return false
      }
      return true
    },
    true
  )
  await next()
}
