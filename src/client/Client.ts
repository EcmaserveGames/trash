import { GameResponse } from '@ecmaservegames/host'
import { ecmaservegames } from '@ecmaservegames/host/proto'
import { blobToBuffer } from './blobToBuffer'
import * as Proto from '../proto/types'
import { IActions } from '../server/types'

const socketProtocol = location.protocol === 'https:' ? 'wss' : 'ws'

const createAction = Proto.ecmaserve.trash.Actions.create

interface ActionRejection extends Error {
  reasons?: ecmaservegames.host.IRuleResult[]
}

function buffersAreEqual(buf1: Uint8Array, buf2: Uint8Array) {
  if (buf1.byteLength != buf2.byteLength) return false
  var dv1 = new Int8Array(buf1)
  var dv2 = new Int8Array(buf2)
  for (var i = 0; i != buf1.byteLength; i++) {
    if (dv1[i] != dv2[i]) return false
  }
  return true
}

export class GameClient {
  actionSocket: WebSocket
  stateSocket: WebSocket
  waitingMessages: Uint8Array[] = []
  identity?: string

  constructor(game: GameResponse, identityToken?: string) {
    this.identity = identityToken
    this.actionSocket = new WebSocket(
      `${socketProtocol}://${location.host}${game.relativePathActionsSocket}`
    )

    this.stateSocket = new WebSocket(
      `${socketProtocol}://${location.host}${game.relativePathStateSocket}`
    )

    // TODO: SETUP RECONNECT LOGIC
    // Writing custom clients is less than ideal
  }

  static create(game: GameResponse, identityToken?: string) {
    return new GameClient(game, identityToken)
  }

  destroy() {
    this.actionSocket.close()
    this.stateSocket.close()
  }

  onStateUpdate(callback: (state: Proto.ecmaserve.trash.IState) => void) {
    // TODO create references to clear listeners, potential memory leak
    this.stateSocket.addEventListener('message', async (event) => {
      if (event.data instanceof Blob) {
        const buffer = await blobToBuffer(event.data)
        const gameState = Proto.ecmaserve.trash.State.decode(
          new Uint8Array(buffer)
        )
        callback(gameState)
      }
    })
  }

  async joinGame() {
    await Promise.all([
      this.__whenOpen(this.actionSocket),
      this.__whenOpen(this.stateSocket),
    ])
    // Send your identity in handshake
    this.actionSocket.send(JSON.stringify({ identity: this.identity }))
    this.stateSocket.send(JSON.stringify({ identity: this.identity }))
    // Create the message
    const message = createAction({
      join: {},
    })
    await this.__sendAction(message)
    console.log('Welcome to the game 🃏')
  }

  async startPlaying() {
    const message = createAction({
      start: {},
    })
    await this.__sendAction(message)
    console.log('the game is now started!')
  }

  drawFromDiscard() {
    return this.drawCard({
      draw: {
        source: Proto.ecmaserve.trash.CardSource.discard,
      },
    })
  }

  drawFromDrawPile() {
    return this.drawCard({
      draw: {
        source: Proto.ecmaserve.trash.CardSource.draw,
      },
    })
  }

  async drawCard(action: Proto.ecmaserve.trash.IActions) {
    const message = createAction(action)
    await this.__sendAction(message)
    console.log('Drew a card')
  }

  async replaceCard(slot: Proto.ecmaserve.trash.SlotNumber) {
    const message = createAction({
      replace: {
        slot,
      },
    })
    await this.__sendAction(message)
    console.log('Replaced a card')
  }

  async discard() {
    const message = createAction({
      discard: {},
    })
    await this.__sendAction(message)
    console.log('Discarded current card')
  }

  private __whenOpen(socket: WebSocket) {
    if (socket.readyState === WebSocket.OPEN) {
      return Promise.resolve()
    }
    return new Promise((resolve, reject) => {
      if (socket.readyState === WebSocket.OPEN) {
        return resolve()
      }
      socket.addEventListener(
        'open',
        () => {
          resolve()
        },
        { once: true }
      )
      socket.addEventListener('error', () => reject, { once: true })
      socket.addEventListener('close', () => reject, { once: true })
    })
  }

  private async __sendAction(message: IActions) {
    const buffer = Proto.ecmaserve.trash.Actions.encode(message).finish()

    return new Promise((resolve, reject) => {
      const otherListeners: [
        'message' | 'close' | 'error' | 'open',
        any /** GET TS OUT OF MY WAY, EVENT LSITENER METHOD IS NOT OVERLAPPING */
      ][] = []

      // RESPONSE TIMEOUT HANDLER
      const timeout = setTimeout(() => {
        otherListeners.forEach(([type, listener]) => {
          this.actionSocket.removeEventListener(type, listener)
        })
        reject(
          new Error(
            'HostActionResponseError: did not get a response from the server in time'
          )
        )
      }, 5000)

      const onMessage = async (evt: MessageEvent<Blob>) => {
        clearTimeout(timeout)

        const responseResultBuffer = await blobToBuffer(evt.data)
        const message = ecmaservegames.host.ActionResponse.decode(
          new Uint8Array(responseResultBuffer)
        )
        if (!message.action?.value) {
          return
        }
        if (!buffersAreEqual(message.action?.value, buffer)) {
          return
        }

        const error: ActionRejection = new Error('Action was rejected.')
        error.name = 'ActionRejected'
        error.reasons = message.ruleResults
        message.accepted ? resolve(true) : reject(error)
      }
      this.actionSocket.addEventListener('message', onMessage, { once: true })
      otherListeners.push(['message', onMessage])

      // REJECT ON ERRORS
      // This may need to restart the socket potentially
      const onError = () => {
        clearTimeout(timeout)
        // Assume it was a success for now?
        // Need to have the host provide a commonjs type module for this
        reject(new Error('HostActionResponseError: error sending'))
      }
      this.actionSocket.addEventListener('error', onError, { once: true })
      otherListeners.push(['error', onError])

      // FINALLY JUST SEND IT
      this.actionSocket.send(buffer)
    })
  }
}
