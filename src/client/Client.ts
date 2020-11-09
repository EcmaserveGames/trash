import { GameResponse } from '@ecmaservegames/host'
import { blobToBuffer } from './blobToBuffer'
import * as Proto from '../proto/types'
import { IActions } from '../server/types'

const createAction = Proto.ecmaserve.trash.Actions.create

export class GameClient {
  actionSocket: WebSocket
  stateSocket: WebSocket
  waitingMessages: Uint8Array[] = []

  constructor(game: GameResponse) {
    this.actionSocket = new WebSocket(
      `ws://${location.host}${game.relativePathActionsSocket}`
    )

    this.stateSocket = new WebSocket(
      `ws://${location.host}${game.relativePathStateSocket}`
    )

    // TODO: SETUP RECONNECT LOGIC
    // Writing custom clients is less than ideal
  }

  static create(game: GameResponse) {
    return new GameClient(game)
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
    await this.__whenOpen(this.actionSocket)
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

      // RESOLVE ON RESPONSE
      const onMessage = (evt: MessageEvent<Blob>) => {
        console.log('Action Response: ', evt.data)
        clearTimeout(timeout)
        // Assume it was a success for now?
        // Need to have the host provide a commonjs type module for this
        resolve()
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
