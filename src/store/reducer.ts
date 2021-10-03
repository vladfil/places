import {deleteLocalStorage} from 'utils/localStorage'
import {State, Action, ActionTypes} from 'utils/types'

function reducer(state: State, {type, payload}: Action): State {
  switch (type) {
    case ActionTypes.UPDATE_ALL:
      return {...state, ...payload}

    case ActionTypes.LOG_OUT:
      deleteLocalStorage('token')
      deleteLocalStorage('user')

      return {auth: false}

    default:
      return state
  }
}

export default reducer
