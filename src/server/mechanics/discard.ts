import { Mechanic } from "@ecmaservegames/host";
import { dealCard, shuffleFullDeck, tableauToSpotArray } from "../helpers";
import { IActions, IState, UserContext } from "../types";

export const Discard = new Mechanic<IActions, IState, UserContext>('discard')
    .forActions('discard')
    .use(({ gameState, user }) => {
        gameState.tableaus = gameState.tableaus || [];
        const tableau = gameState.tableaus?.find(x => x.playerId === user.sub);
        if (!tableau || !tableau.cardInHand) return;

        const card = tableau.cardInHand;
        tableau.cardInHand = null;

        // Add to the discard pile
        gameState.discardPile = gameState.discardPile || { cards: [] };
        gameState.discardPile.cards = gameState.discardPile?.cards || [];
        gameState.discardPile.cards.unshift(card)

        // Next Players Turn
        const index = gameState.tableaus?.indexOf(tableau);
        const nextPlayerTableau = gameState.tableaus[index + 1] || gameState.tableaus[0]
        gameState.currentPlayerId = nextPlayerTableau.playerId

        // Check if the current player has an empty tableau
        const roundOver = tableauToSpotArray(nextPlayerTableau).every(t => t.isRequired && !t.faceDown);
        
        // Finalize Round
        if (roundOver) {
            // Iterate and drop the last required slot if player has all thery cards face  up
            for(let tableau of gameState.tableaus) {
                const slots = tableauToSpotArray(tableau).reverse();
                const wentOut = slots.every(t => t.isRequired && !t.faceDown);
                if (wentOut) {
                    const lastSlot = slots.find(x => x.isRequired);
                    if (!lastSlot) {
                        // I THINK THIS IS GAME OVER?
                        return;
                    }
                    lastSlot.isRequired = true;
                    lastSlot.current = null;
                }
            }
            // Redeal all cards
            const startingDeck = shuffleFullDeck(gameState);
            gameState.tableaus?.forEach(tableau => {
                tableauToSpotArray(tableau)
                    .filter(x => x.isRequired)
                    .forEach(slot => {
                        const card = startingDeck.shift();
                        if (!slot || !card) return;
                        dealCard(card, slot);
                    })
            })
        }
    })
