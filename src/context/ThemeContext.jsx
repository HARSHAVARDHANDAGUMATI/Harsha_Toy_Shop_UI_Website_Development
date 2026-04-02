import { createContext, useContext, useLayoutEffect } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { STORAGE_KEYS } from '../utils/constants'

export const ThemeContext = createContext(null)

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorage(STORAGE_KEYS.theme, 'light')

  useLayoutEffect(() => {
    const root = document.documentElement
    const body = document.body
    const isDark = theme === 'dark'

    root.dataset.theme = theme
    root.classList.remove('light', 'dark')
    body.classList.remove('light', 'dark')
    root.classList.add(isDark ? 'dark' : 'light')
    body.classList.add(isDark ? 'dark' : 'light')
    root.style.colorScheme = isDark ? 'dark' : 'light'
    body.style.colorScheme = isDark ? 'dark' : 'light'
  }, [theme])

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, isDarkMode: theme === 'dark', toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
