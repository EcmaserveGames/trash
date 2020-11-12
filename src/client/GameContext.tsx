import { createContext } from 'preact'
import { ecmaserve } from '../proto/types'
import { GameClient } from './Client'

interface GameContext {
  gameId?: string
  openANewGameSession(): Promise<void>
  gameClient?: GameClient
  gameState?: ecmaserve.trash.IState
  setAuthentication(identityToken: string): void
  getAuthentication(): string | undefined
}

export const GameContext = createContext<GameContext>({
  openANewGameSession: () => Promise.resolve(),
  setAuthentication: () => {},
  getAuthentication: () => undefined,
})
