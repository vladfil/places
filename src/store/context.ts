import {createContext} from 'react'
import {State} from './reducer'

type ContextType = {
  state: State
  dispatch: any
}

export const Context = createContext<ContextType>({
  state: {},
  dispatch: () => {},
})
