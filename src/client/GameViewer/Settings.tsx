import { iconTypes } from 'msteams-ui-icons-core'
import { h } from 'preact'
import { useState } from 'preact/hooks'
import { SecondaryButton } from '../Shared/Button'
import { Dialog } from '../Shared/Dialog'
import { Icon } from '../Shared/Icon'
import { IconButton } from '../Shared/IconButton'
import { Panel } from '../Shared/Panel'
import { Surface } from '../Shared/Surface'
import { useTheme } from '../Shared/useTheme'

export function Settings() {
  const [menuVisible, setMenuVisible] = useState(false)
  const theme = useTheme()
  return (
    <div
      style={{
        position: 'absolute',
        right: '0',
        top: '0',
        zIndex: 10,
      }}
    >
      {!menuVisible && (
        <div style={{ padding: `${theme.spacing.base}` }}>
          <IconButton
            iconType={iconTypes.Settings}
            onClick={() => setMenuVisible(true)}
          />
        </div>
      )}
      {menuVisible && (
        <Surface
          style={{
            width: '480px',
            height: '100vh',
          }}
        >
          <Panel
            header={
              <h3>
                Settings{' '}
                <IconButton
                  iconType={iconTypes.ChevronRight}
                  onClick={() => setMenuVisible(false)}
                />
              </h3>
            }
          >
            Coming Soon..
          </Panel>
        </Surface>
      )}
    </div>
  )
}
