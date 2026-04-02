import Button from '../common/Button'
import { formatCurrency } from '../../utils/formatCurrency'

const CartSummary = ({ subtotal, savings, totalItems, onCheckout, onClearCart }) => {
  const shipping = subtotal > 4000 ? 0 : 399
  const total = subtotal + shipping

  return (
    <aside className="space-y-5 rounded-[1.6rem] border border-white/60 bg-white/90 p-4 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur dark:border-white/10 dark:bg-white/5 sm:rounded-[2rem] sm:p-6 lg:sticky lg:top-28">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-orange-500">Cart Summary</p>
        <h2 className="mt-2 text-2xl font-black text-slate-900 dark:text-white">Order overview</h2>
      </div>
      <div className="space-y-4 text-sm text-slate-500 dark:text-slate-300">
        <div className="flex items-center justify-between">
          <span>Items ({totalItems})</span>
          <span className="font-semibold text-slate-900 dark:text-white">{formatCurrency(subtotal)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Savings</span>
          <span className="font-semibold text-emerald-500">{formatCurrency(savings)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Shipping</span>
          <span className="font-semibold text-slate-900 dark:text-white">
            {shipping === 0 ? 'Free' : formatCurrency(shipping / 83)}
          </span>
        </div>
        <div className="border-t border-dashed border-slate-200 pt-4 dark:border-white/10">
          <div className="flex items-center justify-between">
            <span className="text-base font-semibold text-slate-900 dark:text-white">Total</span>
            <span className="text-2xl font-black text-slate-900 dark:text-white">
              {formatCurrency(total / 83)}
            </span>
          </div>
        </div>
      </div>
      <div className="space-y-3">
        <Button variant="accent" className="w-full" onClick={onCheckout}>
          Continue to checkout
        </Button>
        <Button variant="secondary" className="w-full" onClick={onClearCart}>
          Clear cart
        </Button>
      </div>
    </aside>
  )
}

export default CartSummary
