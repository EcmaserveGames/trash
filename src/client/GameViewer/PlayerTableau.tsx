import { h } from 'preact'
import * as Proto from '../../proto/types'
import { CardInHand } from './CardInHand'
import { RenderCard } from './RenderCard'
import { useGameClient } from './useGameClient'
import { useMyTableau } from './useMyTableau'
import { cardIsPlayable } from './cardIsPlayable'

const SlotNumber = Proto.ecmaserve.trash.SlotNumber

function mapToStyle(
  slotNumber: Proto.ecmaserve.trash.SlotNumber,
  card?: Proto.ecmaserve.trash.ICard | null
) {
  return card && cardIsPlayable(slotNumber, card)
    ? {
        cursor: 'pointer',
        boxShadow: '0 0 2rem 0 rgba(0, 255, 255, .9)',
      }
    : {}
}

export function PlayerTableau() {
  const gameClient = useGameClient()
  const tableau = useMyTableau()
  if (!tableau) {
    return null
  }

  return (
    <div className="player-tableau">
      {tableau.cardInHand && <CardInHand card={tableau.cardInHand} />}
      <div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {tableau.slot1 && tableau.slot1.isRequired && (
            <RenderCard
              style={mapToStyle(SlotNumber.slot1, tableau.cardInHand)}
              faceDown={tableau.slot1.faceDown}
              card={tableau.slot1.current}
              onClick={() =>
                gameClient?.replaceCard(Proto.ecmaserve.trash.SlotNumber.slot1)
              }
            />
          )}
          {tableau.slot2 && tableau.slot2.isRequired && (
            <RenderCard
              style={mapToStyle(SlotNumber.slot2, tableau.cardInHand)}
              faceDown={tableau.slot2.faceDown}
              card={tableau.slot2.current}
              onClick={() =>
                gameClient?.replaceCard(Proto.ecmaserve.trash.SlotNumber.slot2)
              }
            />
          )}
          {tableau.slot3 && tableau.slot3.isRequired && (
            <RenderCard
              style={mapToStyle(SlotNumber.slot3, tableau.cardInHand)}
              faceDown={tableau.slot3.faceDown}
              card={tableau.slot3.current}
              onClick={() =>
                gameClient?.replaceCard(Proto.ecmaserve.trash.SlotNumber.slot3)
              }
            />
          )}
          {tableau.slot4 && tableau.slot4.isRequired && (
            <RenderCard
              style={mapToStyle(SlotNumber.slot4, tableau.cardInHand)}
              faceDown={tableau.slot4.faceDown}
              card={tableau.slot4.current}
              onClick={() =>
                gameClient?.replaceCard(Proto.ecmaserve.trash.SlotNumber.slot4)
              }
            />
          )}
          {tableau.slot5 && tableau.slot5.isRequired && (
            <RenderCard
              style={mapToStyle(SlotNumber.slot5, tableau.cardInHand)}
              faceDown={tableau.slot5.faceDown}
              card={tableau.slot5.current}
              onClick={() =>
                gameClient?.replaceCard(Proto.ecmaserve.trash.SlotNumber.slot5)
              }
            />
          )}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {tableau.slot6 && tableau.slot6.isRequired && (
            <RenderCard
              style={mapToStyle(SlotNumber.slot6, tableau.cardInHand)}
              faceDown={tableau.slot6.faceDown}
              card={tableau.slot6.current}
              onClick={() =>
                gameClient?.replaceCard(Proto.ecmaserve.trash.SlotNumber.slot6)
              }
            />
          )}
          {tableau.slot7 && tableau.slot7.isRequired && (
            <RenderCard
              style={mapToStyle(SlotNumber.slot7, tableau.cardInHand)}
              faceDown={tableau.slot7.faceDown}
              card={tableau.slot7.current}
              onClick={() =>
                gameClient?.replaceCard(Proto.ecmaserve.trash.SlotNumber.slot7)
              }
            />
          )}
          {tableau.slot8 && tableau.slot8.isRequired && (
            <RenderCard
              style={mapToStyle(SlotNumber.slot8, tableau.cardInHand)}
              faceDown={tableau.slot8.faceDown}
              card={tableau.slot8.current}
              onClick={() =>
                gameClient?.replaceCard(Proto.ecmaserve.trash.SlotNumber.slot8)
              }
            />
          )}
          {tableau.slot9 && tableau.slot9.isRequired && (
            <RenderCard
              style={mapToStyle(SlotNumber.slot9, tableau.cardInHand)}
              faceDown={tableau.slot9.faceDown}
              card={tableau.slot9.current}
              onClick={() =>
                gameClient?.replaceCard(Proto.ecmaserve.trash.SlotNumber.slot9)
              }
            />
          )}
          {tableau.slot10 && tableau.slot10.isRequired && (
            <RenderCard
              style={mapToStyle(SlotNumber.slot10, tableau.cardInHand)}
              faceDown={tableau.slot10.faceDown}
              card={tableau.slot10.current}
              onClick={() =>
                gameClient?.replaceCard(Proto.ecmaserve.trash.SlotNumber.slot10)
              }
            />
          )}
        </div>
      </div>
    </div>
  )
}
