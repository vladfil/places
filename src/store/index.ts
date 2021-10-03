import {useReducer} from 'react'
import reducer, {State, ActionTypes} from './reducer'

// @TODO - add type for dispatch
interface Payload {
  auth?: boolean
  token?: string
  user?: {
    date: string
    email: string
    name: string
    _id: string
  }
  toast?: {
    isOpen: boolean
    message?: string
    type?: 'info' | 'warning' | 'success' | 'error'
  }
}

type Action = {
  payload: Payload
  type: ActionTypes
}

export type Dispatch = (a: Action) => void

function useStore(): [State, Dispatch] {
  const [state, dispatch] = useReducer(reducer, {auth: false})

  return [state, dispatch]
}

export default useStore
