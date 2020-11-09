import { Mechanic } from '@ecmaservegames/host'
import { dealCard, shuffleFullDeck, tableauToSpotArray } from '../helpers'
import { IActions, ICardSpot, IState, UserContext } from '../types'

const isNotTrash = (cardSpot: ICardSpot) =>
  !cardSpot.isRequired || !cardSpot.faceDown

export const Discard = new Mechanic<IActions, IState, UserContext>('discard')
  .forActions('discard')
  .use(({ gameState, user }) => {
    gameState.tableaus = gameState.tableaus || []
    const tableau = gameState.tableaus?.find((x) => x.playerId === user.sub)
    if (!tableau || !tableau.cardInHand) return

    const card = tableau.cardInHand
    tableau.cardInHand = null

    // Add to the discard pile
    gameState.discardPile = gameState.discardPile || { cards: [] }
    gameState.discardPile.cards = gameState.discardPile?.cards || []
    gameState.discardPile.cards.unshift(card)

    // Next Players Turn
    const index = gameState.tableaus?.indexOf(tableau)
    const nextPlayerTableau =
      gameState.tableaus[index + 1] || gameState.tableaus[0]
    gameState.currentPlayerId = nextPlayerTableau.playerId

    // Check if the current player has an empty tableau
    const roundOver = tableauToSpotArray(nextPlayerTableau).every(isNotTrash)

    // Finalize Round
    if (roundOver) {
      // Iterate and drop the last required slot if player has all thery cards face  up
      for (let tableau of gameState.tableaus) {
        const slots = tableauToSpotArray(tableau).reverse()
        const wentOut = slots.every(isNotTrash)
        if (wentOut) {
          const lastSlot = slots.find((x) => x.isRequired)
          if (!lastSlot) {
            // I THINK THIS IS GAME OVER?
            return
          }
          lastSlot.isRequired = false
          lastSlot.current = null
        }
      }
      // Redeal all cards
      const startingDeck = shuffleFullDeck(gameState)
      gameState.tableaus?.forEach((tableau) => {
        tableauToSpotArray(tableau)
          .filter((x) => x.isRequired)
          .forEach((slot) => {
            const card = startingDeck.shift()
            if (!slot || !card) return
            dealCard(card, slot)
          })
      })
      gameState.discardPile = { cards: [] }
      const startingDiscardCard = startingDeck.shift()
      if (startingDiscardCard) {
        gameState.discardPile?.cards?.push(startingDiscardCard)
      }
      gameState.drawPile = {
        cards: startingDeck,
      }
    }
  })
