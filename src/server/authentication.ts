import jwt_decode from 'jwt-decode'
import { UserContext } from './types'

export interface Handshake {
  authorization: string
}
export interface HandshakeConfirm {
  type: 'HandshakeConfirm'
  status: 'OK'
}
type HandshakeRequest = string | Handshake

function isHandShake(
  evt: MessageEvent<any>
): evt is MessageEvent<HandshakeRequest> {
  if (typeof evt.data === 'string') {
    const parsed = JSON.parse(evt.data)
    return !!parsed?.authorization
  }
  return false
}

export function isHandShakeResponse(data: any): data is HandshakeConfirm {
  if (typeof data === 'string' && data.startsWith('{') && data.endsWith('}')) {
    const parsed = JSON.parse(data)
    return parsed.type === 'HandshakeConfirm'
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
      const [protocol, ...values] = handshake.authorization.split(' ')
      if (protocol === 'Anon') {
        ctx.state.user = AnonAuthenticate(values.join(' '))
      }
      if (protocol === 'Bearer') {
        ctx.state.user = BearerAuthenticate(values.join(' '))
      }
      if (ctx.state.user) {
        socket.send(
          JSON.stringify({
            type: 'HandshakeConfirm',
            status: 'OK',
          })
        )
      }
    }
    if (!ctx.state.user) {
      // Discard unauthenticated message & close socket
      socket.close()
    }
  })
  await next()
}
