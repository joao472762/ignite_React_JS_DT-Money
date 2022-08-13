import { ThemeProvider } from 'styled-components'
import { Home } from './pages/Home'
import { GlobalTheme } from './styles/global'
import { defaultTheme } from './styles/theme'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Home/>
      <GlobalTheme/>
    </ThemeProvider>
  )
}

