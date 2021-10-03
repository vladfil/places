import {createContext, useContext} from 'react'
import {ContextType} from 'utils/types'

export const Context = createContext<ContextType>({
  state: {auth: false},
  dispatch: () => {},
})

export const useAppContext = () => {
  const {state, dispatch} = useContext(Context)
  return {state, dispatch}
}
