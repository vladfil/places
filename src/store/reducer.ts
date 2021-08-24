enum ActionTypes {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
}

type Action = {
  type: ActionTypes
  payload: any
}

type State = {}

function reducer(state: State, action: Action): State {
  return state
}

export default reducer
