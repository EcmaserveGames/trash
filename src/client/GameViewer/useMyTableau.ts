import { useContext } from 'preact/hooks'
import { GameContext } from '../GameContext'

export function useMyTableau() {
  const context = useContext(GameContext)
  return context.gameState?.tableaus?.find(
    (t) => t.playerId === context.getIdentity()?.sub
  )
}
