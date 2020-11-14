import { h } from 'preact'
import { Surface } from '../Shared/Surface'
import Router from 'preact-router'
import { App } from '../Web/App'
import { GameLobby } from '../Web/GameLobby'
import { setRouteBase } from '../Web/getRouteBase'

export function MicrosoftTeamsApp() {
  setRouteBase('/msteams/')
  return (
    <Surface style={{ minWidth: '100vw', minHeight: '100vh', padding: '16px' }}>
      <Router>
        <App path="/msteams/" />
        <GameLobby path="/msteams/game/:gameId" />
      </Router>
    </Surface>
  )
}
