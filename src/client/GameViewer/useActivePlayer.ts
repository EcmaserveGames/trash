import { useContext } from 'preact/hooks'
import { GameContext } from '../GameContext'

export function useActivePlayer() {
  const context = useContext(GameContext)
  return {
    activePlayer: context.gameState?.currentPlayerId || '',
    isMe: context.gameState?.currentPlayerId === context.getIdentityToken(),
  }
}
