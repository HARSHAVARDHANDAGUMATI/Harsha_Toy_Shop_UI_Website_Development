import ProductCard from '../product/ProductCard'

const FeaturedToys = ({ products, onQuickView }) => (
  <section className="space-y-5">
    <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-orange-500">Featured Toys</p>
        <h2 className="mt-2 text-2xl font-black text-slate-900 dark:text-white">Trending gifts and playful best sellers</h2>
      </div>
      <p className="max-w-xl text-sm text-slate-500 dark:text-slate-300">
        A curated mix of kid-favorite picks, colorful bundles, and gift-ready toys with polished
        visuals, discounts, and quick actions.
      </p>
    </div>
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onQuickView={onQuickView} />
      ))}
    </div>
  </section>
)

export default FeaturedToys
