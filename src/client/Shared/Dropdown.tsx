import { dropdown } from 'msteams-ui-styles-core'
import { h } from 'preact'
import { useRef, useState } from 'preact/hooks'
import { classes } from 'typestyle'
import { useTheme } from './useTheme'
import { iconTypes, iconWeights } from 'msteams-ui-icons-core'
import { DropdownItem } from './DropdownItem'
import { Icon } from './Icon'

export interface IDropdownItemProps {
  id?: string
  text?: string
  render?: () => string | preact.JSX.Element
  onClick: () => void
}

interface Props extends preact.JSX.HTMLAttributes<HTMLButtonElement> {
  label?: string
  mainButtonText?: string
  items: IDropdownItemProps[]
}

export function Dropdown(props: Props) {
  const ref = useRef<HTMLDivElement>()
  const buttonRef = useRef<HTMLButtonElement>()
  const theme = useTheme()
  const styles = dropdown(theme)

  const [isExpanded, setExpanded] = useState(false)

  const { id, className, style, label, mainButtonText, items, ...rest } = props
  return (
    <div
      id={`dropdown-${id}`}
      ref={ref}
      className={classes(styles.container, className)}
      style={style}
    >
      {label ? (
        <label className={styles.label} htmlFor={`dropdown-${id}`}>
          {label}
        </label>
      ) : null}
      <button
        ref={buttonRef}
        role="combobox"
        onMouseDown={(e) => e.preventDefault()}
        aria-controls={`dropdown-container-${id}`}
        aria-expanded={isExpanded}
        className={styles.mainButton.container}
        onClick={() => setExpanded(true)}
        {...rest}
      >
        {mainButtonText ? (
          <span className={styles.mainButton.text}>{mainButtonText}</span>
        ) : null}
        <Icon
          className={styles.mainButton.icon}
          iconType={iconTypes.ChevronDown}
          iconWeight={iconWeights.Light}
        />
      </button>
      <div
        id={`dropdown-container-${id}`}
        role="listbox"
        aria-hidden={!isExpanded}
        style={{ display: isExpanded ? 'auto' : 'none' }}
        className={`${styles.itemContainer} ${isExpanded && styles.showItems}`}
      >
        {items.map((item, idx) => (
          <DropdownItem
            key={idx}
            role="option"
            tabIndex={-1}
            text={item.text}
            render={item.render}
            onClick={item.onClick}
          >
            {item.text}
          </DropdownItem>
        ))}
      </div>
    </div>
  )
}
