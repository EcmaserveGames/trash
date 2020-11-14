import { h } from 'preact'
import * as Proto from '../../proto/types'
import { RenderCard } from './RenderCard'
import { useActivePlayer } from './useActivePlayer'

interface Props {
  tableau: Proto.ecmaserve.trash.IPlayerTableau
}

const smallCardStyle = {
  fontSize: '.5em',
  width: '4.25vh',
  height: '6vh',
  margin: '.25vh',
  boxShadow: '0px 0px 2px 0px rgba(0,0,0,.35',
}

export function PlayerTableauViewer({ tableau }: Props) {
  const { activePlayer } = useActivePlayer()
  const isActivePlayer = activePlayer === tableau.playerId
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        margin: '1vh 2vw',
      }}
    >
      <div style={{ margin: '5px', lineHeight: '2em' }}>
        {tableau.playerId}{' '}
        {isActivePlayer && <span style={{ color: 'green' }}>🟢</span>}
      </div>
      <div>
        <div style={{ display: 'flex' }}>
          {tableau.slot1 && tableau.slot1.isRequired && (
            <RenderCard
              style={smallCardStyle}
              faceDown={tableau.slot1.faceDown}
              card={tableau.slot1.current}
            />
          )}
          {tableau.slot2 && tableau.slot2.isRequired && (
            <RenderCard
              style={smallCardStyle}
              faceDown={tableau.slot2.faceDown}
              card={tableau.slot2.current}
            />
          )}
          {tableau.slot3 && tableau.slot3.isRequired && (
            <RenderCard
              style={smallCardStyle}
              faceDown={tableau.slot3.faceDown}
              card={tableau.slot3.current}
            />
          )}
          {tableau.slot4 && tableau.slot4.isRequired && (
            <RenderCard
              style={smallCardStyle}
              faceDown={tableau.slot4.faceDown}
              card={tableau.slot4.current}
            />
          )}
          {tableau.slot5 && tableau.slot5.isRequired && (
            <RenderCard
              style={smallCardStyle}
              faceDown={tableau.slot5.faceDown}
              card={tableau.slot5.current}
            />
          )}
        </div>
        <div style={{ display: 'flex' }}>
          {tableau.slot6 && tableau.slot6.isRequired && (
            <RenderCard
              style={smallCardStyle}
              faceDown={tableau.slot6.faceDown}
              card={tableau.slot6.current}
            />
          )}
          {tableau.slot7 && tableau.slot7.isRequired && (
            <RenderCard
              style={smallCardStyle}
              faceDown={tableau.slot7.faceDown}
              card={tableau.slot7.current}
            />
          )}
          {tableau.slot8 && tableau.slot8.isRequired && (
            <RenderCard
              style={smallCardStyle}
              faceDown={tableau.slot8.faceDown}
              card={tableau.slot8.current}
            />
          )}
          {tableau.slot9 && tableau.slot9.isRequired && (
            <RenderCard
              style={smallCardStyle}
              faceDown={tableau.slot9.faceDown}
              card={tableau.slot9.current}
            />
          )}
          {tableau.slot10 && tableau.slot10.isRequired && (
            <RenderCard
              style={smallCardStyle}
              faceDown={tableau.slot10.faceDown}
              card={tableau.slot10.current}
            />
          )}
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {tableau.cardInHand && <RenderCard card={tableau.cardInHand} />}
      </div>
    </div>
  )
}
