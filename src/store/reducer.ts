export enum ActionTypes {
  UPDATE_ALL = 'UPDATE_ALL',
}

export type Action = {
  type: ActionTypes
  payload: any
}

export interface State {
  auth: boolean
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

function reducer(state: State, {type, payload}: Action): State {
  switch (type) {
    case ActionTypes.UPDATE_ALL:
      return {...state, ...payload}

    default:
      return state
  }
}

export default reducer
