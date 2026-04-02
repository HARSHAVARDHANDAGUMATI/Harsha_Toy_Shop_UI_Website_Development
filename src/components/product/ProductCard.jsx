import { Link } from 'react-router-dom'
import { FiEye, FiHeart, FiShoppingBag, FiStar } from 'react-icons/fi'
import Button from '../common/Button'
import Badge from '../common/Badge'
import ProductArtwork from '../common/ProductArtwork'
import { formatCurrency } from '../../utils/formatCurrency'
import { useCart } from '../../context/CartContext'
import { useWishlist } from '../../context/WishlistContext'
import { useToast } from '../../hooks/useToast'

const ProductCard = ({ product, onQuickView }) => {
  const { addToCart } = useCart()
  const { isWishlisted, toggleWishlist } = useWishlist()
  const toast = useToast()
  const wishlisted = isWishlisted(product.id)

  const handleAddToCart = () => {
    addToCart(product)
    toast.success(`${product.name} added to cart`)
  }

  const handleToggleWishlist = () => {
    toggleWishlist(product)
    toast.message(wishlisted ? `${product.name} removed from wishlist` : `${product.name} saved to wishlist`)
  }

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/60 bg-white/90 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(249,115,22,0.18)] dark:border-white/10 dark:bg-white/5 sm:rounded-[2rem]">
      <div className="relative p-3 sm:p-4">
        <ProductArtwork product={product} compact className="min-h-[180px] sm:min-h-[220px]" />
        <div className="absolute left-4 top-4 z-10 sm:left-7 sm:top-7">
          <Badge tone="warm">{product.badge}</Badge>
        </div>
        <button
          type="button"
          onClick={handleToggleWishlist}
          className={`absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur transition sm:right-7 sm:top-7 sm:h-11 sm:w-11 ${
            wishlisted
              ? 'border-pink-300 bg-pink-500 text-white'
              : 'border-white/30 bg-white/15 text-white hover:bg-white/25'
          }`}
        >
          <FiHeart size={16} />
        </button>
      </div>
      <div className="flex flex-1 flex-col space-y-3 px-4 pb-4 sm:space-y-4 sm:px-5 sm:pb-5">
        <div className="min-h-[150px] space-y-2 sm:min-h-[168px]">
          <div className="flex items-center justify-between gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              {product.category}
            </p>
            <div className="flex items-center gap-1 text-sm font-semibold text-amber-500">
              <FiStar className="fill-current" />
              <span>{product.rating}</span>
            </div>
          </div>
          <Link
            to={`/products/${product.slug}`}
            className="line-clamp-2 block min-h-[56px] text-[1.7rem] font-black leading-tight text-slate-900 transition group-hover:text-orange-500 dark:text-white sm:min-h-[64px] sm:text-xl"
          >
            {product.name}
          </Link>
          <p className="line-clamp-2 min-h-[52px] text-sm text-slate-500 dark:text-slate-300 sm:min-h-[56px]">
            {product.description}
          </p>
        </div>
        <div className="mt-auto flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <span className="text-lg font-black text-slate-900 dark:text-white">
              {formatCurrency(product.price)}
            </span>
            <span className="text-sm text-slate-400 line-through">
              {formatCurrency(product.originalPrice)}
            </span>
          </div>
          <Button variant="accent" className="w-full justify-center" onClick={handleAddToCart}>
            <FiShoppingBag size={16} />
            Add to cart
          </Button>
          <Button
            variant="secondary"
            className="w-full justify-center"
            onClick={() => onQuickView(product)}
          >
            <FiEye size={16} />
            Quick view
          </Button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
