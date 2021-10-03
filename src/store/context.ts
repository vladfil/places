import {createContext, useContext} from 'react'
import {State} from './reducer'
import {Dispatch} from './'

type ContextType = {
  state: State
  dispatch: Dispatch
}

export const Context = createContext<ContextType>({
  state: {auth: false},
  dispatch: () => {},
})

export const useAppContext = () => {
  const {state, dispatch} = useContext(Context)
  return {state, dispatch}
}
