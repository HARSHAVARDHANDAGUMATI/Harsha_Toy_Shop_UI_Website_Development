import ProductCard from './ProductCard'

const RecommendedToys = ({ products, onQuickView }) => {
  if (!products.length) {
    return null
  }

  return (
    <section className="space-y-5">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-orange-500">Recommended Toys</p>
        <h2 className="mt-2 text-2xl font-black text-slate-900 dark:text-white">You may also love these playful picks</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onQuickView={onQuickView} />
        ))}
      </div>
    </section>
  )
}

export default RecommendedToys
