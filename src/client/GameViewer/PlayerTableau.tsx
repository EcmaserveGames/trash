import { h } from 'preact'
import * as Proto from '../../proto/types'
import { RenderCard } from './RenderCard'

interface Props {
  tableau: Proto.ecmaserve.trash.IPlayerTableau
}

export function PlayerTableau({ tableau }: Props) {
  return (
    <div>
      <div>A Player Tableau for {tableau.playerId}</div>
      <div style={{ display: 'flex', width: '100%', flexWrap: 'wrap' }}>
        {tableau.slot1 && tableau.slot1.isRequired && (
          <RenderCard
            faceDown={tableau.slot1.faceDown}
            card={tableau.slot1.current}
          />
        )}
        {tableau.slot2 && tableau.slot2.isRequired && (
          <RenderCard
            faceDown={tableau.slot2.faceDown}
            card={tableau.slot2.current}
          />
        )}
        {tableau.slot3 && tableau.slot3.isRequired && (
          <RenderCard
            faceDown={tableau.slot3.faceDown}
            card={tableau.slot3.current}
          />
        )}
        {tableau.slot4 && tableau.slot4.isRequired && (
          <RenderCard
            faceDown={tableau.slot4.faceDown}
            card={tableau.slot4.current}
          />
        )}
        {tableau.slot5 && tableau.slot5.isRequired && (
          <RenderCard
            faceDown={tableau.slot5.faceDown}
            card={tableau.slot5.current}
          />
        )}
        {tableau.slot6 && tableau.slot6.isRequired && (
          <RenderCard
            faceDown={tableau.slot6.faceDown}
            card={tableau.slot6.current}
          />
        )}
        {tableau.slot7 && tableau.slot7.isRequired && (
          <RenderCard
            faceDown={tableau.slot7.faceDown}
            card={tableau.slot7.current}
          />
        )}
        {tableau.slot8 && tableau.slot8.isRequired && (
          <RenderCard
            faceDown={tableau.slot8.faceDown}
            card={tableau.slot8.current}
          />
        )}
        {tableau.slot9 && tableau.slot9.isRequired && (
          <RenderCard
            faceDown={tableau.slot9.faceDown}
            card={tableau.slot9.current}
          />
        )}
        {tableau.slot10 && tableau.slot10.isRequired && (
          <RenderCard
            faceDown={tableau.slot10.faceDown}
            card={tableau.slot10.current}
          />
        )}
      </div>
    </div>
  )
}
