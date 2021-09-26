import {useReducer} from 'react'
import reducer, {State} from './reducer'

// @TODO - add type for dispatch
function useStore(): [State, any] {
  const [state, dispatch] = useReducer(reducer, {})

  return [state, dispatch]
}

export default useStore
