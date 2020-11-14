import { createContext } from 'preact'
import { ecmaserve } from '../proto/types'
import { GameClient } from './Client'

export interface GameContext {
  openANewGameSession(): Promise<string | undefined>
  connectToGame(gameId: string): void
  gameClient?: GameClient
  gameState?: ecmaserve.trash.IState
}

export const GameContext = createContext<GameContext>({
  openANewGameSession: () => Promise.resolve(undefined),
  connectToGame: () => {},
})
