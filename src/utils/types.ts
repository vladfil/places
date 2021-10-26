// Common types
export type Obj = {
  [x: string]: any
}

export type User = {
  user_registered: string
  user_email: string
  display_name: string
  ID: number
}

export type Toast = {
  isOpen: boolean
  message?: string
  type?: 'info' | 'warning' | 'success' | 'error'
}

export interface UserResponse {
  user: User
  token: string
  status: number
}

export interface WpQueryResponse {
  wp_query: {
    max_num_pages: number
    posts: Post[]
  }
}

export interface PostResponse {
  post: Post
  user: User
}

export type Post = {
  ID: number
  post_author: number
  post_date: Date
  post_content: string
  post_title: string
  post_excerpt: string
  post_type: 'publish' | 'draft'
  post_name: string
}

export interface Response<T = any> {
  code: string
  message: string
  data: T
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
