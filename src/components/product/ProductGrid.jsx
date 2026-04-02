import ProductCard from './ProductCard'
import Skeleton from '../common/Skeleton'

const ProductGrid = ({ products, loading, onQuickView, emptyState }) => {
  if (loading) {
    return (
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }, (_, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-[2rem] border border-white/60 bg-white/90 p-4 dark:border-white/10 dark:bg-white/5"
          >
            <Skeleton className="mb-4 h-56 w-full" />
            <Skeleton className="mb-3 h-4 w-24" />
            <Skeleton className="mb-3 h-7 w-2/3" />
            <Skeleton className="mb-4 h-4 w-full" />
            <Skeleton className="h-11 w-full" />
          </div>
        ))}
      </div>
    )
  }

  if (!products.length) {
    return emptyState
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onQuickView={onQuickView} />
      ))}
    </div>
  )
}

export default ProductGrid
