import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiHeart } from 'react-icons/fi'
import Button from '../components/common/Button'
import ProductCard from '../components/product/ProductCard'
import QuickViewModal from '../components/product/QuickViewModal'
import { useWishlist } from '../context/WishlistContext'

const Wishlist = () => {
  const { wishlistItems } = useWishlist()
  const [quickViewProduct, setQuickViewProduct] = useState(null)

  if (!wishlistItems.length) {
    return (
      <section className="rounded-[2.5rem] border border-dashed border-slate-300 bg-white/80 px-6 py-20 text-center dark:border-white/10 dark:bg-white/5">
        <FiHeart className="mx-auto mb-4 text-5xl text-pink-500" />
        <h1 className="text-4xl font-black text-slate-900 dark:text-white">Wishlist is waiting for favorites</h1>
        <p className="mx-auto mt-4 max-w-xl text-slate-500 dark:text-slate-300">
          Save products you love and come back to them anytime with local storage persistence.
        </p>
        <Button as={Link} to="/products" variant="accent" className="mt-6">
          Explore toys
        </Button>
      </section>
    )
  }

  return (
    <div className="space-y-6">
      <section className="rounded-[2.5rem] border border-white/60 bg-white/85 p-6 backdrop-blur dark:border-white/10 dark:bg-white/5">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-pink-500">Wishlist</p>
        <h1 className="mt-2 text-4xl font-black text-slate-900 dark:text-white">Saved for later</h1>
        <p className="mt-3 text-slate-500 dark:text-slate-300">
          Your favorite finds, gift ideas, and comeback picks all in one polished list.
        </p>
      </section>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {wishlistItems.map((product) => (
          <ProductCard key={product.id} product={product} onQuickView={setQuickViewProduct} />
        ))}
      </div>
      <QuickViewModal
        product={quickViewProduct}
        isOpen={Boolean(quickViewProduct)}
        onClose={() => setQuickViewProduct(null)}
      />
    </div>
  )
}

export default Wishlist
