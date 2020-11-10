import { createContext } from 'preact'
import { ecmaserve } from '../proto/types'
import { GameClient } from './Client'

interface GameContext {
  gameId?: string
  openANewGameSession(): Promise<void>
  gameClient?: GameClient
  gameState?: ecmaserve.trash.IState
  setIdentityToken(identityToken: string): void
  getIdentityToken(): string | undefined
}

export const GameContext = createContext<GameContext>({
  openANewGameSession: () => Promise.resolve(),
  setIdentityToken: () => {},
  getIdentityToken: () => undefined,
})
