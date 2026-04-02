import { createContext, useCallback, useContext } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { STORAGE_KEYS } from '../utils/constants'

const RecentViewContext = createContext(null)

export const RecentViewProvider = ({ children }) => {
  const [recentlyViewed, setRecentlyViewed] = useLocalStorage(STORAGE_KEYS.recentlyViewed, [])

  const addRecentlyViewed = useCallback((product) => {
    setRecentlyViewed((items) => {
      const nextItems = [product, ...items.filter((item) => item.id !== product.id)]
      return nextItems.slice(0, 6)
    })
  }, [setRecentlyViewed])

  return (
    <RecentViewContext.Provider value={{ recentlyViewed, addRecentlyViewed }}>
      {children}
    </RecentViewContext.Provider>
  )
}

export const useRecentViews = () => useContext(RecentViewContext)
