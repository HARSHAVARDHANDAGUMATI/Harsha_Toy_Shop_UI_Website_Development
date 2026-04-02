import { FiMinus, FiPlus, FiTrash2 } from 'react-icons/fi'
import ProductArtwork from '../common/ProductArtwork'
import { formatCurrency } from '../../utils/formatCurrency'

const CartItem = ({ item, onUpdateQuantity, onRemove }) => (
  <div className="grid gap-5 rounded-[2rem] border border-white/60 bg-white/90 p-5 shadow-sm dark:border-white/10 dark:bg-white/5 md:grid-cols-[180px_1fr]">
    <ProductArtwork product={item} compact className="min-h-[180px]" />
    <div className="flex flex-col justify-between gap-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-500">{item.category}</p>
          <h3 className="mt-2 text-2xl font-black text-slate-900 dark:text-white">{item.name}</h3>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-300">{item.offer}</p>
        </div>
        <button
          type="button"
          onClick={() => onRemove(item.id)}
          className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-red-500 transition hover:bg-red-100 dark:bg-red-500/10"
        >
          <FiTrash2 size={16} />
          Remove
        </button>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center rounded-full bg-slate-100 p-2 dark:bg-white/10">
          <button
            type="button"
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-600 transition hover:bg-white dark:text-white"
          >
            <FiMinus size={16} />
          </button>
          <span className="min-w-12 text-center text-sm font-black text-slate-900 dark:text-white">
            {item.quantity}
          </span>
          <button
            type="button"
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-600 transition hover:bg-white dark:text-white"
          >
            <FiPlus size={16} />
          </button>
        </div>
        <div className="text-right">
          <p className="text-sm text-slate-400">{formatCurrency(item.price)} each</p>
          <p className="text-2xl font-black text-slate-900 dark:text-white">
            {formatCurrency(item.price * item.quantity)}
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default CartItem
