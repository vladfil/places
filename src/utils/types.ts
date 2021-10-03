// Common types
export type Obj = {
  [x: string]: any
}

export type User = {
  date: string
  email: string
  name: string
  _id: string
}

export type Toast = {
  isOpen: boolean
  message?: string
  type?: 'info' | 'warning' | 'success' | 'error'
}

export type LogInResponse = {
  user: User
  token: string
}

// Context types
export interface State {
  auth: boolean
  token?: string
  user?: User
  toast?: Toast
}

export type Dispatch = (a: Action) => void

export type ContextType = {
  state: State
  dispatch: Dispatch
}

export interface Payload {
  auth?: boolean
  token?: string
  user?: User
  toast?: Toast
}

export enum ActionTypes {
  UPDATE_ALL = 'UPDATE_ALL',
  LOG_OUT = 'LOG_OUT',
}

export type Action = {
  payload?: Payload
  type: ActionTypes
}
