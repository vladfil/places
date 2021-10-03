import {useReducer} from 'react'
import reducer from './reducer'
import {State, Dispatch, User} from 'utils/types'
import {getLocalStorage} from 'utils/localStorage'

function useStore(): [State, Dispatch] {
  const state: State = {auth: false}
  const user: User = getLocalStorage('user')
  const token: string = getLocalStorage('token')

  if (user && token) {
    state.user = user
    state.token = token
    state.auth = true
  }

  const [st, dispatch] = useReducer(reducer, state)

  return [st, dispatch]
}

export default useStore
