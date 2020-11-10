import { GameServer } from '@ecmaservegames/host'
import path from 'path'
import { OnlyOneCardInHand, PlayInTurnOrder, ReplacingCards } from '../rules'
import { deck } from './deck'
import { CardDraw, Discard, Join, Start } from './mechanics'
import { IActions, IState, UserContext } from './types'
import send from 'koa-send'
import { naiveAuth } from './naiveAuth'

export function createGame() {
  const game = new GameServer()
    .useAuthentication<UserContext>(naiveAuth)
    .useState<IState>(
      path.resolve(__dirname, '../proto/state.proto'),
      'ecmaserve.trash',
      {
        deck: {
          cards: deck,
        },
      }
    )
    .useActions<IActions>(
      path.resolve(__dirname, '../proto/actions.proto'),
      'ecmaserve.trash'
    )
    .useRules(PlayInTurnOrder, ReplacingCards, OnlyOneCardInHand)
    .useMechanics(Join, Start, CardDraw, Discard)
    .addRoutes((router) => {
      router.get('/', (ctx) => {
        ctx.redirect('/app/')
        ctx.status = 301
      })
      router.get('/app/(.*)', (ctx) =>
        (send as any)(ctx, ctx.path.replace(/\/app\//, '/'), {
          index: 'index.html',
          root: path.resolve(__dirname, '../client'),
        })
      )
    })
  return game
}
