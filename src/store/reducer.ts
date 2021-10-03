import {State, Action, ActionTypes} from 'utils/types'

function reducer(state: State, {type, payload}: Action): State {
  switch (type) {
    case ActionTypes.UPDATE_ALL:
      return {...state, ...payload}

    default:
      return state
  }
}

export default reducer
