import jwt_decode from 'jwt-decode'
import { UserContext } from './types'

export interface Handshake {
  authorization: string
}
type HandshakeResponse = string | Handshake

function isHandShake(
  evt: MessageEvent<any>
): evt is MessageEvent<HandshakeResponse> {
  if (typeof evt.data === 'string') {
    const parsed = JSON.parse(evt.data)
    return !!parsed?.authorization
  }
  return false
}

function AnonAuthenticate(value: string): UserContext {
  return {
    sub: value,
    name: value,
  }
}

function BearerAuthenticate(idToken: string) {
  const token = jwt_decode(idToken) as Record<string, string> | undefined
  if (token) {
    return token
  }
}

export async function authenticate(ctx: any, next: Function) {
  const socket: WebSocket = ctx.websocket
  socket.addEventListener('message', async (evt) => {
    if (isHandShake(evt) && typeof evt.data === 'string') {
      const handshake: Handshake = JSON.parse(evt.data)
      const [protocol, value] = handshake.authorization.split(' ')
      if (protocol === 'Anon') {
        ctx.state.user = AnonAuthenticate(value)
      }
      if (protocol === 'Bearer') {
        ctx.state.user = await BearerAuthenticate(value)
      }
    }
    if (!ctx.state.user) {
      // Discard unauthenticated message & close socket
      socket.close()
    }
  })
  await next()
}
