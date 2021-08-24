import useStore from 'store'
import Context from 'store/context'
import {Routes} from './components/Routes/Routes'

function App() {
  const [state, dispatch] = useStore()

  return (
    <Context.Provider value={[state, dispatch]}>
      <Routes />
    </Context.Provider>
  )
}

export default App
