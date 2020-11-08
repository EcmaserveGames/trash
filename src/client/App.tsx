import { h, createContext, ComponentChildren } from 'preact'

const GameContext = createContext('hi world2')

function MyComponent(props: { children?: ComponentChildren }) {
  return (
    <GameContext.Consumer>{(value) => <div>{value}</div>}</GameContext.Consumer>
  )
}

export function App() {
  return <MyComponent />
}
