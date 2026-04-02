import { Link, useNavigate } from 'react-router-dom'
import { FiShoppingBag } from 'react-icons/fi'
import Button from '../components/common/Button'
import CartItem from '../components/cart/CartItem'
import CartSummary from '../components/cart/CartSummary'
import { useCart } from '../context/CartContext'
import { useToast } from '../hooks/useToast'

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, subtotal, savings, totalItems, clearCart } = useCart()
  const toast = useToast()
  const navigate = useNavigate()

  if (!cartItems.length) {
    return (
      <section className="rounded-[1.8rem] border border-dashed border-slate-300 bg-white/80 px-4 py-14 text-center dark:border-white/10 dark:bg-white/5 sm:rounded-[2.5rem] sm:px-6 sm:py-20">
        <FiShoppingBag className="mx-auto mb-4 text-5xl text-orange-500" />
        <h1 className="text-[2rem] font-black text-slate-900 dark:text-white sm:text-4xl">Your cart is empty</h1>
        <p className="mx-auto mt-4 max-w-xl text-slate-500 dark:text-slate-300">
          Add a few toys to your cart and the summary, totals, and playful checkout flow will show up here.
        </p>
        <Button as={Link} to="/products" variant="accent" className="mt-6">
          Start shopping
        </Button>
      </section>
    )
  }

  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_360px] lg:gap-8">
      <section className="space-y-5">
        <div className="rounded-[1.8rem] border border-white/60 bg-white/85 p-4 backdrop-blur dark:border-white/10 dark:bg-white/5 sm:rounded-[2.5rem] sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-orange-500">Cart Page</p>
          <h1 className="mt-2 text-[2rem] font-black text-slate-900 dark:text-white sm:text-4xl">Ready for checkout</h1>
          <p className="mt-3 text-slate-500 dark:text-slate-300">
            Update quantities, remove items, and keep track of savings with a tidy production-style cart experience.
          </p>
        </div>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onUpdateQuantity={updateQuantity}
            onRemove={(productId) => {
              removeFromCart(productId)
              toast.message('Item removed from cart')
            }}
          />
        ))}
      </section>
      <CartSummary
        subtotal={subtotal}
        savings={savings}
        totalItems={totalItems}
        onCheckout={() => navigate('/checkout')}
        onClearCart={() => {
          clearCart()
          toast.message('Cart cleared')
        }}
      />
    </div>
  )
}

export default Cart
