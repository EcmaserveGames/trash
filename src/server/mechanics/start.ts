import { Mechanic } from "@ecmaservegames/host";
import { dealCard, shuffleFullDeck, tableauToSpotArray } from "../helpers";
import { IActions, IState, UserContext } from "../types";


export const Start = new Mechanic<IActions, IState, UserContext>('start')
    .forActions('start')
    .use(({ gameState }) => {
        gameState.gameStarted = true;
        const startingDeck = shuffleFullDeck(gameState);
        gameState.tableaus?.forEach(tableau => {
            tableauToSpotArray(tableau).forEach(slot => {
                const card = startingDeck.shift();
                if (!slot || !card) return;
                dealCard(card, slot);
            })
        })
    })
