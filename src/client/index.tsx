import 'whatwg-fetch'
import { h, render } from 'preact'
import { App } from './App'
import { GameStateProvider } from './GameStateProvider'

render(
  <GameStateProvider>
    <App />
  </GameStateProvider>,
  document.body
)
