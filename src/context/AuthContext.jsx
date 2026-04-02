import { createContext, useContext } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { STORAGE_KEYS } from '../utils/constants'

export const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage(STORAGE_KEYS.auth, null)

  const login = ({ email, password }) => {
    const savedUser = user ?? {
      fullName: 'Playroom Explorer',
      email: 'demo@toyshop.com',
      password: 'ToyShop@123',
    }

    if (email !== savedUser.email || password !== savedUser.password) {
      throw new Error('Invalid email or password')
    }

    const nextUser = { ...savedUser, password: undefined, isAuthenticated: true }
    setUser(nextUser)
    return nextUser
  }

  const signup = ({ fullName, email, password }) => {
    const nextUser = { fullName, email, password, isAuthenticated: true }
    setUser(nextUser)
    return nextUser
  }

  const logout = () => {
    setUser((currentUser) =>
      currentUser
        ? {
            fullName: currentUser.fullName,
            email: currentUser.email,
            password: currentUser.password ?? 'ToyShop@123',
            isAuthenticated: false,
          }
        : null,
    )
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: Boolean(user?.isAuthenticated),
        login,
        signup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)
