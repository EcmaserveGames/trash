import { Mechanic } from "@ecmaservegames/host";
import { IActions, IState, CardSource, UserContext } from "../types";
import shuffle from 'shuffle-array';

export const CardDraw = new Mechanic<IActions, IState, UserContext>('draw')
    .forActions('draw')
    .use(({ actions, gameState }) => {
        if(actions.draw?.source === CardSource.discard) {
            const card = gameState.discardPile?.cards?.shift();
            if (!card) {
                return;
            }
            const currentPlayerId = gameState.currentPlayerId;
            const tableau = gameState.tableaus?.find(x => x.playerId === currentPlayerId);
            if (tableau) {
                tableau.cardInHand = card;
            }
            return;
        }

        if(actions.draw?.source === CardSource.draw) {
            if (!gameState.drawPile?.cards?.length) {
                // Shuffle the Discard Pile
                const discard = gameState.drawPile?.cards || [];
                shuffle(discard);
                const newDrawPile = discard.splice(0, discard.length);
                gameState.drawPile = gameState.drawPile || {};
                gameState.drawPile.cards = gameState.drawPile.cards || [];
                gameState.drawPile.cards = gameState.drawPile.cards.concat(newDrawPile);
            }
            const card = gameState.drawPile?.cards?.shift();
            if (!card) {
                return;
            }
            const currentPlayerId = gameState.currentPlayerId;
            const tableau = gameState.tableaus?.find(x => x.playerId === currentPlayerId);
            if (tableau) {
                tableau.cardInHand = card;
            }
            return;
        }
    })
