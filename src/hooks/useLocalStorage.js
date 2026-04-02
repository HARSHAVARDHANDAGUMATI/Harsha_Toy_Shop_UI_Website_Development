import { useEffect, useState } from 'react'

const readStoredValue = (key, initialValue) => {
  if (typeof window === 'undefined') {
    return initialValue
  }

  try {
    const item = window.localStorage.getItem(key)
    return item ? JSON.parse(item) : initialValue
  } catch {
    return initialValue
  }
}

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => readStoredValue(key, initialValue))

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue))
    } catch {
      // Ignore write failures and keep UI responsive.
    }
  }, [key, storedValue])

  return [storedValue, setStoredValue]
}
