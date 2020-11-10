/// Deny a draw if there is already a card in hand
import { Rule } from '@ecmaservegames/host'
import { getCurrentPlayersTableau } from '../server/helpers'
import { IActions, IState, UserContext } from '../server/types'

export const OnlyOneCardInHand = new Rule<IActions, IState, UserContext>(
  'oneCardInHand'
)
  .forActions('draw')
  .use(({ gameState }) => {
    return !getCurrentPlayersTableau(gameState)?.cardInHand
  })
