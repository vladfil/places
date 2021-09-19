import useStore from 'store'
import Context from 'store/context'
import {Routes} from './components/Routes/Routes'
import {QueryClient, QueryClientProvider} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
import {ThemeProvider} from '@mui/material'
import {createTheme, useTheme} from '@mui/material'

const queryClient = new QueryClient()
const theme = createTheme({
  palette: {
    primary: {
      main: '#0052cc',
    },
    secondary: {
      main: '#edf2ff',
    },
  },
})

function App() {
  const [state, dispatch] = useStore()

  return (
    <Context.Provider value={[state, dispatch]}>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Routes />
          <ReactQueryDevtools initialIsOpen />
        </QueryClientProvider>
      </ThemeProvider>
    </Context.Provider>
  )
}

export default App
