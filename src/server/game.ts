import { GameServer } from '@ecmaservegames/host'
import path from 'path'
import { PlayInTurnOrder, ReplacingCards } from '../rules'
import { deck } from './deck'
import { CardDraw, Discard, Join, Start } from './mechanics'
import { IActions, IState, UserContext } from './types'
import send from 'koa-send'

export function createGame() {
  const game = new GameServer()
    .useAuthentication<UserContext>(async function customAuth(ctx, next) {
      ctx.state.user = {
        sub: 'player-1',
      }
      await next()
    })
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
    .useRules(PlayInTurnOrder, ReplacingCards)
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
