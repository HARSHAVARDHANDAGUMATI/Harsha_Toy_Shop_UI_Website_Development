import { Toaster } from 'react-hot-toast'
import { AuthProvider } from '../context/AuthContext'
import { CartProvider } from '../context/CartContext'
import { RecentViewProvider } from '../context/RecentViewContext'
import { ThemeProvider } from '../context/ThemeContext'
import { WishlistProvider } from '../context/WishlistContext'

const AppProviders = ({ children }) => (
  <ThemeProvider>
    <AuthProvider>
      <WishlistProvider>
        <CartProvider>
          <RecentViewProvider>
            {children}
            <Toaster
              position="top-right"
              toastOptions={{
                className: '!rounded-2xl !bg-slate-950 !px-4 !py-3 !text-sm !text-white',
              }}
            />
          </RecentViewProvider>
        </CartProvider>
      </WishlistProvider>
    </AuthProvider>
  </ThemeProvider>
)

export default AppProviders
