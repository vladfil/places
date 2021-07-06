import {useReducer} from 'react'
import reducer from './reducer'

function useStore() {
  const [state, dispatch] = useReducer<React.Reducer<any, any>>(reducer, {})

  return [state, dispatch]
}

export default useStore
