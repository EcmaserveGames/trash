import { useContext } from 'preact/hooks'
import { GameContext } from './GameContext'

export function useGameContext() {
  return useContext(GameContext)
}
