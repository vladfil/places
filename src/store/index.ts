import {useReducer} from 'react'
import reducer from './reducer'
import {State, Dispatch} from 'utils/types'

function useStore(): [State, Dispatch] {
  const [state, dispatch] = useReducer(reducer, {auth: false})

  return [state, dispatch]
}

export default useStore
