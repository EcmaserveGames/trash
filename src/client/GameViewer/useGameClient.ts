import { useContext } from 'preact/hooks'
import { GameContext } from '../GameContext'

export function useGameClient() {
  const context = useContext(GameContext)
  return context.gameClient
}
