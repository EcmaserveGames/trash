import { useContext } from 'preact/hooks'
import { GameContext } from '../GameContext'
import { useIdentity } from '../Identity/Context'

export function useActivePlayer() {
  const context = useContext(GameContext)
  const identity = useIdentity()
  return {
    activePlayer: context.gameState?.currentPlayerId || '',
    isMe: context.gameState?.currentPlayerId === identity.sub,
  }
}
