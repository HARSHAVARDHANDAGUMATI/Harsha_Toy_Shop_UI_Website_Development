import { Link } from 'react-router-dom'
import ProductArtwork from '../common/ProductArtwork'

const RecentlyViewed = ({ products }) => {
  if (!products.length) {
    return null
  }

  return (
    <section className="space-y-5">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-orange-500">Recently Viewed</p>
        <h2 className="mt-2 text-2xl font-black text-slate-900 dark:text-white">Come back to your latest discoveries</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.slug}`}
            className="overflow-hidden rounded-[2rem] border border-white/60 bg-white/90 p-4 transition hover:-translate-y-1 dark:border-white/10 dark:bg-white/5"
          >
            <ProductArtwork product={product} compact className="mb-4 min-h-[180px]" />
            <h3 className="text-lg font-black text-slate-900 dark:text-white">{product.name}</h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-300">{product.category}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default RecentlyViewed
