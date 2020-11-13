import { createContext } from 'preact'
import { ecmaserve } from '../proto/types'
import { GameClient } from './Client'

export interface Identity {
  idToken?: string
  sub: string
  name: string
}

interface GameContext {
  gameId?: string
  openANewGameSession(): Promise<void>
  gameClient?: GameClient
  gameState?: ecmaserve.trash.IState
  setIdentity(identityToken: Identity): void
  getIdentity(): Identity | undefined
}

export const GameContext = createContext<GameContext>({
  openANewGameSession: () => Promise.resolve(),
  setIdentity: () => {},
  getIdentity: () => undefined,
})
