import { h } from 'preact'
import { useContext } from 'preact/hooks'
import * as Proto from '../../proto/types'
import { GameContext } from '../GameContext'
import { CardHolder } from './CardHolder'
import { CardInHand } from './CardInHand'
import { RenderCard } from './RenderCard'

interface Props {
  tableau: Proto.ecmaserve.trash.IPlayerTableau
}

export function PlayerTableau({ tableau }: Props) {
  const context = useContext(GameContext)
  return (
    <div>
      <div>A Player Tableau for {tableau.playerId}</div>
      <CardHolder>
        {tableau.cardInHand && <CardInHand card={tableau.cardInHand} />}
      </CardHolder>
      <div style={{ display: 'flex', width: '100%', flexWrap: 'wrap' }}>
        {tableau.slot1 && tableau.slot1.isRequired && (
          <RenderCard
            faceDown={tableau.slot1.faceDown}
            card={tableau.slot1.current}
            onClick={() =>
              context.gameClient?.replaceCard(
                Proto.ecmaserve.trash.SlotNumber.slot1
              )
            }
          />
        )}
        {tableau.slot2 && tableau.slot2.isRequired && (
          <RenderCard
            faceDown={tableau.slot2.faceDown}
            card={tableau.slot2.current}
            onClick={() =>
              context.gameClient?.replaceCard(
                Proto.ecmaserve.trash.SlotNumber.slot2
              )
            }
          />
        )}
        {tableau.slot3 && tableau.slot3.isRequired && (
          <RenderCard
            faceDown={tableau.slot3.faceDown}
            card={tableau.slot3.current}
            onClick={() =>
              context.gameClient?.replaceCard(
                Proto.ecmaserve.trash.SlotNumber.slot3
              )
            }
          />
        )}
        {tableau.slot4 && tableau.slot4.isRequired && (
          <RenderCard
            faceDown={tableau.slot4.faceDown}
            card={tableau.slot4.current}
            onClick={() =>
              context.gameClient?.replaceCard(
                Proto.ecmaserve.trash.SlotNumber.slot4
              )
            }
          />
        )}
        {tableau.slot5 && tableau.slot5.isRequired && (
          <RenderCard
            faceDown={tableau.slot5.faceDown}
            card={tableau.slot5.current}
            onClick={() =>
              context.gameClient?.replaceCard(
                Proto.ecmaserve.trash.SlotNumber.slot5
              )
            }
          />
        )}
        {tableau.slot6 && tableau.slot6.isRequired && (
          <RenderCard
            faceDown={tableau.slot6.faceDown}
            card={tableau.slot6.current}
            onClick={() =>
              context.gameClient?.replaceCard(
                Proto.ecmaserve.trash.SlotNumber.slot6
              )
            }
          />
        )}
        {tableau.slot7 && tableau.slot7.isRequired && (
          <RenderCard
            faceDown={tableau.slot7.faceDown}
            card={tableau.slot7.current}
            onClick={() =>
              context.gameClient?.replaceCard(
                Proto.ecmaserve.trash.SlotNumber.slot7
              )
            }
          />
        )}
        {tableau.slot8 && tableau.slot8.isRequired && (
          <RenderCard
            faceDown={tableau.slot8.faceDown}
            card={tableau.slot8.current}
            onClick={() =>
              context.gameClient?.replaceCard(
                Proto.ecmaserve.trash.SlotNumber.slot8
              )
            }
          />
        )}
        {tableau.slot9 && tableau.slot9.isRequired && (
          <RenderCard
            faceDown={tableau.slot9.faceDown}
            card={tableau.slot9.current}
            onClick={() =>
              context.gameClient?.replaceCard(
                Proto.ecmaserve.trash.SlotNumber.slot9
              )
            }
          />
        )}
        {tableau.slot10 && tableau.slot10.isRequired && (
          <RenderCard
            faceDown={tableau.slot10.faceDown}
            card={tableau.slot10.current}
            onClick={() =>
              context.gameClient?.replaceCard(
                Proto.ecmaserve.trash.SlotNumber.slot10
              )
            }
          />
        )}
      </div>
    </div>
  )
}
