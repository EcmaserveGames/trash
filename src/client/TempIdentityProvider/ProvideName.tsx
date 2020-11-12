import { h } from 'preact'
import { useContext, useState } from 'preact/hooks'
import { GameContext } from '../GameContext'

function generateIdentity(input: string) {
  return `Anon ${input}`
}

export function ProvideName() {
  const context = useContext(GameContext)
  const [name, setName] = useState<string>('')
  return (
    <div>
      <h3>Provide Your Name</h3>
      <form
        onSubmit={(evt) => {
          context.setAuthentication(name)
          evt.preventDefault()
          evt.stopPropagation()
          return false
        }}
      >
        <input
          value={name}
          onInput={({ target }) => {
            const { value } = target as HTMLInputElement
            const id = generateIdentity(value)
            console.log('should be set to', id, value)
            setName(id)
          }}
        />
        <button type="submit">Go</button>
      </form>
    </div>
  )
}
