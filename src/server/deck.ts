import { CardFaceValue, CardSuite, ICard } from "./types";

function createDeck() {
    const deck: ICard[] = [];
    for (let suite in CardSuite) {
        const suiteIndex = Number(suite);
        if (!isNaN(suiteIndex)) {
            for(let value in CardFaceValue) {
                const faceValueIndex = Number(value);
                if (!isNaN(faceValueIndex)) {
                    deck.push({ value: faceValueIndex, suite: suiteIndex })
                }
            }
        }
    }
    return deck;
}

export const deck = createDeck();