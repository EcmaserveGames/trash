import { GameServer } from '@ecmaservegames/host'
import path from 'path'
import { OnlyOneCardInHand, PlayInTurnOrder, ReplacingCards } from '../rules'
import { deck } from './deck'
import { CardDraw, Discard, Join, Start } from './mechanics'
import { IActions, IState, UserContext } from './types'
import send from 'koa-send'
import { authenticate } from './authentication'

export function createGame(port: number) {
  const game = new GameServer({ port })
    .useAuthentication<UserContext>(authenticate)
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
      router.get('/', (ctx: any) => {
        ctx.redirect('/app/')
        ctx.status = 301
      })
      router.get('/app/(.*)', (ctx: any) => {
        const routePath = ctx.path.replace(/\/app\/game\/.+|\/app\/|\/app/, '/')
        return (send as any)(ctx, routePath, {
          index: 'index.html',
          root: path.resolve(__dirname, '../client'),
        })
      })
      router.get('/msteams/(.*)', (ctx: any) => {
        const routePath = ctx.path.replace(
          /\/msteams\/game\/.+|\/msteams\/|\/msteams/,
          '/'
        )
        return (send as any)(ctx, routePath, {
          index: 'index.html',
          root: path.resolve(__dirname, '../msteams'),
        })
      })
    })
  return game
}
