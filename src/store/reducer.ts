export enum ActionTypes {
  UPDATE_ALL = 'UPDATE_ALL',
  UPDATE_TOAST = 'UPDATE_TOAST',
  UPDATE_TOKEN = 'UPDATE_TOKEN',
}

export type Action = {
  type: ActionTypes
  payload: any
}

export type State = {
  auth?: boolean
  token?: string
  toast?: {
    isOpen: boolean
    message?: string
    type?: 'info' | 'warning' | 'success' | 'error'
  }
}

function reducer(state: State, {type, payload}: Action): State {
  switch (type) {
    case ActionTypes.UPDATE_ALL:
      return {...state, ...payload}

    case ActionTypes.UPDATE_TOAST:
      return {...state, toast: payload}

    case ActionTypes.UPDATE_TOKEN:
      return {...state, token: payload}

    default:
      return state
  }
}

export default reducer
