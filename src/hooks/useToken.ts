export const setToken = (token: string) =>
  window.localStorage.setItem('token', token)

export const deleteToken = () => window.localStorage.removeItem('token')

export const useToken = () => window.localStorage.getItem('token')
