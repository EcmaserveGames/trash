import { Rule } from '@ecmaservegames/host'
import { IActions, IState, UserContext } from '../server/types'

export const PlayInTurnOrder = new Rule<IActions, IState, UserContext>(
  'playInTurnOrder'
)
  .forActions('draw', 'replace', 'discard')
  .use(({ user, gameState }) => {
    return user.sub === gameState.currentPlayerId
  })
