import { Mechanic } from '@ecmaservegames/host'
import shuffle from 'shuffle-array'
import { dealCard, shuffleFullDeck, tableauToSpotArray } from '../helpers'
import { IActions, ICard, IState, UserContext } from '../types'

export const Start = new Mechanic<IActions, IState, UserContext>('start')
  .forActions('start')
  .use(({ gameState }) => {
    gameState.gameStarted = true
    const startingDeck = shuffleFullDeck(gameState)
    // Deal All Cards to players
    gameState.tableaus?.forEach((tableau) => {
      tableauToSpotArray(tableau).forEach((slot) => {
        const card = startingDeck.shift()
        if (!slot || !card) return
        dealCard(card, slot)
      })
    })
    // Create a Discard & Draw Pile
    const discards: ICard[] = []
    const card = startingDeck.shift()
    if (card) {
      discards.push(card)
    }
    gameState.discardPile = {
      cards: discards,
    }
    gameState.drawPile = {
      cards: startingDeck,
    }
    // Randomize the starting player
    const tableaus = gameState.tableaus || []
    shuffle(tableaus)
    gameState.tableaus = tableaus
    gameState.currentPlayerId = tableaus[0].playerId
  })
