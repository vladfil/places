export enum ActionTypes {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
  UPDATE_ALL = 'UPDATE_ALL',
  UPDATE_TOAST = 'UPDATE_TOAST',
}

export type Action = {
  type: ActionTypes
  payload: any
}

export type State = {
  auth?: boolean
  toast?: {
    isOpen: boolean
    message?: string
    type?: 'info' | 'warning' | 'success' | 'error'
  }
}

function reducer(state: State, {type, payload}: Action): State {
  switch (type) {
    case ActionTypes.UPDATE_ALL:
      return {...payload}

    case ActionTypes.UPDATE_TOAST:
      return {...state, toast: payload}

    default:
      return state
  }
}

export default reducer
