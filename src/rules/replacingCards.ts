import { Rule } from "@ecmaservegames/host";
import { getCurrentPlayersTableau, mapFromSlotNumberToPlayerSlot } from "../server/helpers";
import { CardFaceValue, IActions, IState, UserContext } from "../server/types";

export const ReplacingCards = new Rule<IActions, IState, UserContext>('replacingCards')
    .forActions('replace')
    .use(({ actions, gameState, mutate }) => {
        if (!actions.replace || !actions.replace.slot) return false;
        const tableau = getCurrentPlayersTableau(gameState);
        if (!tableau?.cardInHand) return false;

        const { cardInHand } = tableau;
        
        // Can actually replace the desired slot
        const slot = mapFromSlotNumberToPlayerSlot(tableau, actions.replace.slot)
        if (!slot) return false;
        const canReplace = slot?.isRequired || false;

        // Wild
        const isWild = cardInHand.value === CardFaceValue.Jack;
        const isNaturallyPlayable = Number(cardInHand.value) === Number(actions.replace.slot);

        mutate((state) => {
            const tableau = getCurrentPlayersTableau(state) || {};
            if (!tableau.cardInHand) return;
            const slot = mapFromSlotNumberToPlayerSlot(tableau, actions.replace?.slot || 0)
            if (!slot) return;

            const revealedCard = slot.current;
            slot.faceDown = false;
            slot.current = tableau.cardInHand;
            tableau.cardInHand = revealedCard;
        })
        

        return canReplace && (isNaturallyPlayable || isWild);
    })