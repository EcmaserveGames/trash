import { useContext } from 'preact/hooks'
import { GameContext } from '../GameContext'
import { useIdentity } from '../Identity/Context'

export function useMyTableau() {
  const context = useContext(GameContext)
  const identity = useIdentity()
  return context.gameState?.tableaus?.find((t) => t.playerId === identity.sub)
}
