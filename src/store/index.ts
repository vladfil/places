import {useReducer} from 'react'
import reducer from './reducer'

function useStore() {
  const [state, dispatch] = useReducer(reducer, {})

  return [state, dispatch]
}

export default useStore
