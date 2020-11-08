import { h, Component } from 'preact'
import { GameContext } from './GameContext'
import { GameStateProvider } from './GameStateProvider'

interface State {}

export class App extends Component<{}, State> {
  render() {
    return (
      <GameStateProvider>
        <GameContext.Consumer>
          {(value) => {
            if (value.gameState) {
              return <div>In The Game</div>
            } else {
              return (
                <div>
                  <h1>Welcome To Trash</h1>
                  <button onClick={value.startAGame}>Start A Game</button>
                </div>
              )
            }
          }}
        </GameContext.Consumer>
      </GameStateProvider>
    )
  }
}
