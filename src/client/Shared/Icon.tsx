import { baseStyle, iconStyle } from 'msteams-ui-icons-core'
import { h } from 'preact'
import { classes } from 'typestyle'

export interface IconProps extends preact.JSX.HTMLAttributes<HTMLElement> {
  iconType?: string
  iconWeight?: number
}

export function Icon(props: IconProps) {
  const { iconWeight, iconType, className, children, ...rest } = props
  const classNames = classes(
    baseStyle(props.iconWeight),
    iconStyle(props.iconType),
    className
  )

  return (
    <i aria-hidden={true} className={classNames} {...rest}>
      {children}
    </i>
  )
}
