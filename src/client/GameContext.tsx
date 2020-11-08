import { createContext } from 'preact'
import { ecmaserve } from '../proto/types'

interface GameContext {
  startAGame(): Promise<void>
  gameState?: ecmaserve.trash.IState
}

export const GameContext = createContext<GameContext>({
  startAGame: () => Promise.resolve(),
})
