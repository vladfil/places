import React from 'react'
import useStore from 'store'
import Context from 'store/context'

function App() {
  const [state, dispatch] = useStore()

  return (
    <Context.Provider value={[state, dispatch]}>
      <h1>Hello world</h1>
    </Context.Provider>
  )
}

export default App
