import { iconButton } from 'msteams-ui-styles-core'
import { h } from 'preact'
import { classes } from 'typestyle'
import { Icon } from './Icon'
import { useTheme } from './useTheme'

interface Props extends preact.JSX.HTMLAttributes<HTMLButtonElement> {
  iconType?: string
  iconWeight?: number
}

export function IconButton(props: Props) {
  const theme = useTheme()
  const styles = iconButton(theme)
  const { iconType, iconWeight, className, children, ...rest } = props
  return (
    <button
      role="button"
      onMouseDown={(e) => e.preventDefault()}
      className={classes(styles, className)}
      {...rest}
    >
      <Icon iconType={iconType} iconWeight={iconWeight} />
      {children}
    </button>
  )
}
