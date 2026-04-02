import { createContext, useContext } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { STORAGE_KEYS } from '../utils/constants'

export const WishlistContext = createContext(null)

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useLocalStorage(STORAGE_KEYS.wishlist, [])

  const toggleWishlist = (product) => {
    setWishlistItems((currentItems) => {
      const exists = currentItems.some((item) => item.id === product.id)

      return exists
        ? currentItems.filter((item) => item.id !== product.id)
        : [...currentItems, product]
    })
  }

  const isWishlisted = (productId) => wishlistItems.some((item) => item.id === productId)

  return (
    <WishlistContext.Provider value={{ wishlistItems, toggleWishlist, isWishlisted }}>
      {children}
    </WishlistContext.Provider>
  )
}

export const useWishlist = () => useContext(WishlistContext)
