export const setLocalStorage = (key: string, value: any) => {
  if (typeof value === 'object') {
    window.localStorage.setItem(key, JSON.stringify(value))
  } else {
    window.localStorage.setItem(key, value)
  }
}

export const getLocalStorage = (key: string) => {
  const value: string | null = window.localStorage.getItem(key)

  if (!value) return

  try {
    return JSON.parse(value)
  } catch (error) {
    return value
  }
}

export const deleteLocalStorage = (key: string) =>
  window.localStorage.getItem(key)
