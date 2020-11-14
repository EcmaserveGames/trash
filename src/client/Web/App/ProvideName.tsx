import { h } from 'preact'
import { useState } from 'preact/hooks'
import { useIdentity } from '../../Identity/Context'
import { PrimaryButton } from '../../Shared/Button'
import { Input } from '../../Shared/Input'
import { Panel } from '../../Shared/Panel'

function generateAuthorizationHeader(input: string) {
  return `Anon ${input}`
}

export function ProvideName() {
  const identity = useIdentity()
  const [name, setName] = useState<string>('')
  return (
    <Panel header="New User?">
      <form
        onSubmit={(evt) => {
          if (name) {
            identity.setIdentity({
              name,
              sub: name,
              authentication: generateAuthorizationHeader(name),
            })
          }
          evt.stopPropagation()
          return false
        }}
      >
        <Input
          label="Please provide your name."
          value={name}
          onInput={({ target }) => {
            const { value } = target as HTMLInputElement
            setName(value)
          }}
        />
        <p>
          <PrimaryButton type="submit">Save</PrimaryButton>
        </p>
      </form>
    </Panel>
  )
}
