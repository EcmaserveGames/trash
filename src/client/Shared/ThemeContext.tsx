import {
  getContext,
  IContext as StylesContext,
  IThemeConfig,
  ThemeStyle,
} from 'msteams-ui-styles-core'
import { h, createContext, Component } from 'preact'

interface ThemeContext {
  setTheme(theme: ThemeStyle): void
  styles: StylesContext
}

const defaultTheme: IThemeConfig = {
  style: ThemeStyle.Light,
  baseFontSize: 16,
}

export const ThemeContext = createContext<ThemeContext>({
  styles: getContext(defaultTheme),
  setTheme: () => {},
})

interface Props {
  styles?: ThemeStyle
}

type State = Pick<ThemeContext, 'styles'>

export class ThemeContextProvider extends Component<Props, State> {
  state: State
  constructor(props: Props) {
    super(props)
    this.state = {
      styles: getContext({
        ...defaultTheme,
        style:
          this.props.styles ||
          Number(localStorage.getItem('THEME_STYLE')) ||
          defaultTheme.style,
      }),
    }
  }

  public render() {
    return (
      <ThemeContext.Provider
        value={{
          styles: this.state.styles,
          setTheme: this.setTheme,
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    )
  }

  private setTheme = (theme: ThemeStyle) => {
    localStorage.setItem('THEME_STYLE', `${theme}`)
  }
}
