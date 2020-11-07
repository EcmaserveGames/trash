import shuffle from "shuffle-array";
import { SlotNumber, ICard, ICardSpot, IPlayerTableau, IState } from "./types";

export function tableauToSpotArray(tableau?: IPlayerTableau) {
    tableau = tableau || {}
    return [
        tableau.slot1,
        tableau.slot2,
        tableau.slot3,
        tableau.slot4,
        tableau.slot5,
        tableau.slot6,
        tableau.slot7,
        tableau.slot8,
        tableau.slot9,
        tableau.slot10,
    ].map(x => x || {})
}

export function shuffleFullDeck(gameState: IState) {
    const startingDeck = (gameState.deck?.cards || []).concat([]);
    shuffle(startingDeck);
    return startingDeck;
}


export function dealCard(card: ICard, slot:ICardSpot) {
    if (!slot.isRequired) {
        throw new Error('accidentally dealt to a completed slot');
    }
    slot.faceDown = true;
    slot.current = card
}

export function getCurrentPlayersTableau(state: IState) {
    state.tableaus = state.tableaus || [];
    return state.tableaus.find(x => x.playerId === state.currentPlayerId);
}

export function mapFromSlotNumberToPlayerSlot(tableau: IPlayerTableau, slot: number) {
    switch(slot) {
        case SlotNumber.slot1:
            return tableau.slot1;
        case SlotNumber.slot2:
            return tableau.slot2;
        case SlotNumber.slot3:
            return tableau.slot3;
        case SlotNumber.slot4:
            return tableau.slot4;
        case SlotNumber.slot5:
            return tableau.slot5;
        case SlotNumber.slot6:
            return tableau.slot6;
        case SlotNumber.slot7:
            return tableau.slot7;
        case SlotNumber.slot8:
            return tableau.slot8;
        case SlotNumber.slot9:
            return tableau.slot9;
        case SlotNumber.slot10:
            return tableau.slot10;
        default:
            throw new Error('Inelgible slot ' + slot)
    }
}