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

type StoreAction = {
  payload: Payload
  type: ActionTypes
}

export type Dispatch = (a: StoreAction) => void

// Reducer types
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
  user?: User
  toast?: Toast
}
