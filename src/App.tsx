import {QueryClientProvider} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
import {ThemeProvider, createTheme} from '@mui/material'

import {Context} from 'store/context'
import {Routes} from './components/Routes/Routes'
import useStore from 'store'
import {queryClient} from 'react-query/queryClient'

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
    <Context.Provider value={{state, dispatch}}>
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
