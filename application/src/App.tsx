import { ThemeProvider } from 'styled-components'
import { TransactionsProvider } from './contexts/TransactionsContext'
import { Home } from './pages/Home'
import { GlobalTheme } from './styles/global'
import { defaultTheme } from './styles/theme'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TransactionsProvider>
        <Home/>
        <GlobalTheme/>
      </TransactionsProvider>
    </ThemeProvider>
  )
}

