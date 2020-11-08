import { createContext } from 'preact'
import { IState } from './types'

interface GameContext {
  gameState: IState
}

export const GameContext = createContext<GameContext>({ gameState: {} })
