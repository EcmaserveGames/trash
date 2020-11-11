import { h } from 'preact'
import * as Proto from '../../proto/types'

interface Props {
  style?: {
    [key: string]: any
  }
  cardBackStyle?: {
    [key: string]: any
  }
  faceDown?: boolean | null
  card?: Proto.ecmaserve.trash.ICard | null
  onClick?: () => void
}

const cardStyle = {
  backgroundColor: '#FFF',
  boxSizing: 'border-box',
  width: '8.5vh',
  height: '12vh',
  margin: '.5vh',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0px 0px 3px 1px rgba(0,0,0,.5',
  borderRadius: '.25rem',
  transition: 'box-shadow 0.3s ease-in-out',
}

function isRed(card?: Proto.ecmaserve.trash.ICard | null) {
  return (
    card?.suite === Proto.ecmaserve.trash.Suite.HEARTS ||
    card?.suite === Proto.ecmaserve.trash.Suite.DIAMONDS
  )
}

function RenderSuite({
  suite,
}: {
  suite?: Proto.ecmaserve.trash.Suite | null
}) {
  if (suite === Proto.ecmaserve.trash.Suite.CLUBS) {
    return <div>♣</div>
  }
  if (suite === Proto.ecmaserve.trash.Suite.HEARTS) {
    return <div>♥</div>
  }
  if (suite === Proto.ecmaserve.trash.Suite.SPADES) {
    return <div>♠</div>
  }
  if (suite === Proto.ecmaserve.trash.Suite.DIAMONDS) {
    return <div>♦</div>
  }
  return null
}

function RenderValue({
  value,
}: {
  value?: Proto.ecmaserve.trash.FaceValue | null
}) {
  if (value && value > 1 && value <= 10) {
    return <div>{value}</div>
  }
  if (value && value === Proto.ecmaserve.trash.FaceValue.Ace) {
    return <div>A</div>
  }
  if (value && value === Proto.ecmaserve.trash.FaceValue.Jack) {
    return <div>J</div>
  }
  if (value && value === Proto.ecmaserve.trash.FaceValue.Queen) {
    return <div>Q</div>
  }
  if (value && value === Proto.ecmaserve.trash.FaceValue.King) {
    return <div>K</div>
  }
  return null
}

export function RenderCard({ faceDown, card, style, onClick }: Props) {
  if (faceDown) {
    const faceDownStyle = {
      backgroundColor: 'crimson',
      color: 'white',
      fontWeight: 'bold',
      border: '.25rem solid darkred',
    }
    return (
      <div
        style={{ ...cardStyle, ...faceDownStyle, ...style }}
        onClick={onClick}
      >
        <div>?</div>
      </div>
    )
  }
  const suiteStyle = {
    color: isRed(card) ? 'red' : 'black',
  }

  return (
    <div style={{ ...cardStyle, ...suiteStyle, ...style }} onClick={onClick}>
      <div style={{ position: 'absolute', top: '.1rem', left: '.5rem' }}>
        <RenderValue value={card?.value} />
        <RenderSuite suite={card?.suite} />
      </div>
      <div style={{ fontWeight: 'bold' }}>
        <RenderValue value={card?.value} />
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: '.1rem',
          right: '.5rem',
          transform: 'rotate(180deg)',
        }}
      >
        <RenderValue value={card?.value} />
        <RenderSuite suite={card?.suite} />
      </div>
    </div>
  )
}
