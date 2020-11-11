import { Mechanic } from '@ecmaservegames/host'
import { IActions, IState, UserContext } from '../types'

export const Join = new Mechanic<IActions, IState, UserContext>('join')
  .forActions('join')
  .use(({ gameState, user }) => {
    gameState.tableaus = gameState.tableaus || []
    const isInGameAlready = gameState.tableaus.find(
      (t) => t.playerId === user.sub
    )
    if (isInGameAlready) return
    gameState.tableaus.push({
      playerId: user.sub,
      slot1: {
        isRequired: true,
      },
      slot2: {
        isRequired: true,
      },
      slot3: {
        isRequired: true,
      },
      slot4: {
        isRequired: true,
      },
      slot5: {
        isRequired: true,
      },
      slot6: {
        isRequired: true,
      },
      slot7: {
        isRequired: true,
      },
      slot8: {
        isRequired: true,
      },
      slot9: {
        isRequired: true,
      },
      slot10: {
        isRequired: true,
      },
    })
  })
