import { h } from 'preact'
import { useContext } from 'preact/hooks'
import { GameContext } from '../GameContext'
import { GameSession } from '../GameSession'
import { CreateGame } from './CreateGame'

export function MicrosoftTeamsApp() {
  const context = useContext(GameContext)
  if (context.gameState) {
    return <GameSession />
  } else {
    return <CreateGame />
  }
}
