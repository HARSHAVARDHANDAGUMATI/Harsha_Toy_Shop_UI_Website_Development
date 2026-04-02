import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { FiHeart, FiShoppingBag, FiStar } from 'react-icons/fi'
import Button from '../components/common/Button'
import Badge from '../components/common/Badge'
import Loader from '../components/common/Loader'
import ProductArtwork from '../components/common/ProductArtwork'
import QuickViewModal from '../components/product/QuickViewModal'
import RecommendedToys from '../components/product/RecommendedToys'
import RecentlyViewed from '../components/product/RecentlyViewed'
import { useCart } from '../context/CartContext'
import { useRecentViews } from '../context/RecentViewContext'
import { useWishlist } from '../context/WishlistContext'
import { useToast } from '../hooks/useToast'
import { fetchProductBySlug, fetchRecommendations } from '../utils/fakeApi'
import { formatCurrency } from '../utils/formatCurrency'

const ProductDetails = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState(null)
  const [recommendations, setRecommendations] = useState([])
  const [loading, setLoading] = useState(true)
  const [quickViewProduct, setQuickViewProduct] = useState(null)
  const { addToCart } = useCart()
  const { toggleWishlist, isWishlisted } = useWishlist()
  const { addRecentlyViewed, recentlyViewed } = useRecentViews()
  const toast = useToast()

  useEffect(() => {
    let mounted = true

    const loadProduct = async () => {
      try {
        const productData = await fetchProductBySlug(slug)
        const related = await fetchRecommendations(productData)

        if (!mounted) {
          return
        }

        setProduct(productData)
        setRecommendations(related)
        addRecentlyViewed(productData)
      } catch {
        navigate('/missing')
      } finally {
        if (mounted) {
          setLoading(false)
        }
      }
    }

    loadProduct()

    return () => {
      mounted = false
    }
  }, [addRecentlyViewed, navigate, slug])

  if (loading) {
    return <Loader label="Loading product details..." />
  }

  if (!product) {
    return null
  }

  return (
    <div className="space-y-10">
      <section className="grid gap-8 rounded-[2.5rem] border border-white/60 bg-white/85 p-6 backdrop-blur dark:border-white/10 dark:bg-white/5 lg:grid-cols-[1fr_0.95fr]">
        <ProductArtwork product={product} className="min-h-[480px]" />
        <div className="space-y-6">
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
            <h1 className="mt-2 text-4xl font-black text-slate-900 dark:text-white">{product.name}</h1>
            <p className="mt-4 text-lg leading-8 text-slate-500 dark:text-slate-300">{product.description}</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-4xl font-black text-slate-900 dark:text-white">
              {formatCurrency(product.price)}
            </span>
            <span className="text-lg text-slate-400 line-through">{formatCurrency(product.originalPrice)}</span>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-[1.8rem] bg-slate-100 p-4 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">Material</p>
              <p className="mt-2 text-sm font-semibold text-slate-700 dark:text-white">{product.material}</p>
            </div>
            <div className="rounded-[1.8rem] bg-slate-100 p-4 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">Safety</p>
              <p className="mt-2 text-sm font-semibold text-slate-700 dark:text-white">{product.safety}</p>
            </div>
            <div className="rounded-[1.8rem] bg-slate-100 p-4 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">Dimensions</p>
              <p className="mt-2 text-sm font-semibold text-slate-700 dark:text-white">{product.dimensions}</p>
            </div>
            <div className="rounded-[1.8rem] bg-slate-100 p-4 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">Offer</p>
              <p className="mt-2 text-sm font-semibold text-slate-700 dark:text-white">{product.offer}</p>
            </div>
          </div>
          <ul className="space-y-3">
            {product.highlights.map((item) => (
              <li key={item} className="rounded-[1.5rem] bg-orange-50 px-4 py-3 text-sm font-semibold text-slate-700 dark:bg-orange-500/10 dark:text-slate-100">
                {item}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3">
            <Button
              variant="accent"
              onClick={() => {
                addToCart(product)
                toast.success(`${product.name} added to cart`)
              }}
            >
              <FiShoppingBag size={16} />
              Add to cart
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                toggleWishlist(product)
                toast.message(
                  isWishlisted(product.id)
                    ? `${product.name} removed from wishlist`
                    : `${product.name} saved to wishlist`,
                )
              }}
            >
              <FiHeart size={16} />
              {isWishlisted(product.id) ? 'Remove from wishlist' : 'Save to wishlist'}
            </Button>
            <Button as={Link} to="/products" variant="ghost">
              Back to catalog
            </Button>
          </div>
        </div>
      </section>
      <RecommendedToys products={recommendations} onQuickView={setQuickViewProduct} />
      <RecentlyViewed products={recentlyViewed.filter((item) => item.id !== product.id)} />
      <QuickViewModal
        product={quickViewProduct}
        isOpen={Boolean(quickViewProduct)}
        onClose={() => setQuickViewProduct(null)}
      />
    </div>
  )
}

export default ProductDetails
