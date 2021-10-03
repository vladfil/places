export const setLocalStorage = (key, value) => {
  if (typeof value === 'object') {
    window.localStorage.setItem(key, JSON.stringify(value))
  } else {
    window.localStorage.setItem(key, value)
  }
}

export const getLocalStorage = key => {
  const value = window.localStorage.getItem(key)

  try {
    return JSON.parse(value)
  } catch (error) {
    return value
  }
}

export const deleteLocalStorage = key => window.localStorage.getItem(key)
