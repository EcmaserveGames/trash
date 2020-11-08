import { h, Component } from 'preact'
import { useContext } from 'preact/hooks'
import { GameContext } from './GameContext'
import { GameSession } from './GameSession'
import { Lobby } from './Lobby'

export function App() {
  const context = useContext(GameContext)
  if (context.gameState) {
    return <GameSession />
  } else {
    return <Lobby />
  }
}
