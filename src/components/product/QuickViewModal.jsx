import { Link } from 'react-router-dom'
import { FiHeart, FiShoppingBag, FiStar, FiX } from 'react-icons/fi'
import Modal from '../common/Modal'
import Button from '../common/Button'
import Badge from '../common/Badge'
import ProductArtwork from '../common/ProductArtwork'
import { formatCurrency } from '../../utils/formatCurrency'
import { useCart } from '../../context/CartContext'
import { useWishlist } from '../../context/WishlistContext'
import { useToast } from '../../hooks/useToast'

const QuickViewModal = ({ product, isOpen, onClose }) => {
  const { addToCart } = useCart()
  const { isWishlisted, toggleWishlist } = useWishlist()
  const toast = useToast()

  if (!product) {
    return null
  }

  const handleAddToCart = () => {
    addToCart(product)
    toast.success(`${product.name} added to cart`)
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex justify-end">
        <button
          type="button"
          onClick={onClose}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-slate-200 dark:bg-white/10 dark:text-white"
        >
          <FiX size={18} />
        </button>
      </div>
      <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
        <ProductArtwork product={product} className="min-h-[420px]" />
        <div className="space-y-5">
          <div className="flex flex-wrap items-center gap-3">
            <Badge tone="warm">{product.badge}</Badge>
            <Badge tone="cool">{product.ageGroup}</Badge>
            <div className="flex items-center gap-1 text-sm font-semibold text-amber-500">
              <FiStar className="fill-current" />
              {product.rating} ({product.reviews} reviews)
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-orange-500">{product.category}</p>
            <h2 className="mt-2 text-3xl font-black text-slate-900 dark:text-white">{product.name}</h2>
          </div>
          <p className="text-base leading-7 text-slate-500 dark:text-slate-300">{product.description}</p>
          <div className="flex items-center gap-3">
            <span className="text-3xl font-black text-slate-900 dark:text-white">{formatCurrency(product.price)}</span>
            <span className="text-lg text-slate-400 line-through">{formatCurrency(product.originalPrice)}</span>
          </div>
          <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
            {product.highlights.map((item) => (
              <li key={item} className="rounded-2xl bg-slate-100 px-4 py-3 dark:bg-white/5">
                {item}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3">
            <Button variant="accent" onClick={handleAddToCart}>
              <FiShoppingBag size={16} />
              Add to cart
            </Button>
            <Button variant="secondary" onClick={() => toggleWishlist(product)}>
              <FiHeart size={16} />
              {isWishlisted(product.id) ? 'Saved' : 'Save'}
            </Button>
            <Button as={Link} to={`/products/${product.slug}`} variant="ghost" onClick={onClose}>
              Full details
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default QuickViewModal
