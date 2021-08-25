enum ActionTypes {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
}

type Action = {
  type: ActionTypes
  payload: any
}

type State = {
  auth?: boolean
}

function reducer(state: State, action: Action): State {
  return state
}

export default reducer
