import { Route, Routes } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import Home from '../pages/Home'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'
import ProductDetails from '../pages/ProductDetails'
import ProductListing from '../pages/ProductListing'
import Signup from '../pages/Signup'
import Wishlist from '../pages/Wishlist'

const AppRoutes = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductListing />} />
      <Route path="/products/:slug" element={<ProductDetails />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>
)

export default AppRoutes
