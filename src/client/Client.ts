import { GameResponse } from '@ecmaservegames/host'
import { blobToBuffer } from './blobToBuffer'
import * as Proto from '../proto/types'
import { GameSocket } from './GameSocket'
import { ActionsSocket } from './ActionsSocket'
import { isHandShakeResponse } from '../server/authentication'

const socketProtocol = location.protocol === 'https:' ? 'wss' : 'ws'

export class GameClient {
  actionSocket: ActionsSocket<Proto.ecmaserve.trash.IActions>
  stateSocket: GameSocket
  authorization?: string

  constructor(game: GameResponse, authorization?: string) {
    this.authorization = authorization
    const initializationMessage = JSON.stringify({ authorization })
    this.actionSocket = new ActionsSocket(
      `${socketProtocol}://${location.host}${game.relativePathActionsSocket}`,
      Proto.ecmaserve.trash.Actions,
      {
        initializationMessage,
        isInitializedCallback: (message) => !!isHandShakeResponse(message),
      }
    )

    this.stateSocket = new GameSocket(
      `${socketProtocol}://${location.host}${game.relativePathStateSocket}`,
      {
        initializationMessage,
        isInitializedCallback: (message) => !!isHandShakeResponse(message),
      }
    )
  }

  static create(game: GameResponse, authorization?: string) {
    return new GameClient(game, authorization)
  }

  destroy() {
    return Promise.all([this.actionSocket.close(), this.stateSocket.close()])
  }

  onStateUpdate(callback: (state: Proto.ecmaserve.trash.IState) => void) {
    this.stateSocket.onMessage(async (event) => {
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
    await this.actionSocket.act({
      join: {},
    })
    console.log('Welcome to the game 🃏')
  }

  async startPlaying() {
    await this.actionSocket.act({
      start: {},
    })
    console.log('the game is now started!')
  }

  drawFromDiscard() {
    return this.actionSocket.act({
      draw: {
        source: Proto.ecmaserve.trash.CardSource.discard,
      },
    })
  }

  drawFromDrawPile() {
    return this.actionSocket.act({
      draw: {
        source: Proto.ecmaserve.trash.CardSource.draw,
      },
    })
  }

  async replaceCard(slot: Proto.ecmaserve.trash.SlotNumber) {
    await this.actionSocket.act({
      replace: {
        slot,
      },
    })
    console.log('Replaced a card')
  }

  async discard() {
    await this.actionSocket.act({
      discard: {},
    })
    console.log('Discarded current card')
  }
}
