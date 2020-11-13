import { h } from 'preact'
import { useContext, useState } from 'preact/hooks'
import { GameContext } from '../GameContext'

function generateIdentity(input: string) {
  return {
    name: input,
    sub: input,
  }
}

export function ProvideName() {
  const context = useContext(GameContext)
  const [name, setName] = useState<string>('')
  return (
    <div>
      <h3>Provide Your Name</h3>
      <form
        onSubmit={(evt) => {
          const identity = generateIdentity(name)
          context.setIdentity(identity)
          evt.preventDefault()
          evt.stopPropagation()
          return false
        }}
      >
        <input
          value={name}
          onInput={({ target }) => {
            const { value } = target as HTMLInputElement
            setName(value)
          }}
        />
        <button type="submit">Go</button>
      </form>
    </div>
  )
}
