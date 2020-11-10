import 'whatwg-fetch'
import { h, render } from 'preact'
import { App } from './App'
import { GameStateProvider } from './GameStateProvider'

render(
  <GameStateProvider gameId={location.hash.substr(1) || undefined}>
    <App />
  </GameStateProvider>,
  document.body
)
