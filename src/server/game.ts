import { GameServer } from '@ecmaservegames/host';
import path from 'path';
import { PlayInTurnOrder, ReplacingCards } from '../rules';
import { deck } from './deck';
import { CardDraw, Discard, Join, Start } from './mechanics';
import { IActions, IState, UserContext } from './types';

export function createGame()
{
    const game = new GameServer()
        .useAuthentication<UserContext>(ctx => {
            ctx.state.user = {
                sub: 'player-1'
            }
        })
        .useState<IState>(
            path.resolve(__dirname, '../proto/state.proto'),
            'ecmaserve.trash',
            {
                deck: {
                    cards: deck
                }
            })
        .useActions<IActions>(
            path.resolve(__dirname, '../proto/actions.proto'),
            'ecmaserve.trash'
        )
        .useRules(
            PlayInTurnOrder,
            ReplacingCards
        )
        .useMechanics(
            Join,
            Start,
            CardDraw,
            Discard
        )
    return game
}