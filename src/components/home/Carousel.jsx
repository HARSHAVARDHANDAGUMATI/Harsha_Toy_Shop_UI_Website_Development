import { useEffect, useState } from 'react'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import ProductArtwork from '../common/ProductArtwork'

const Carousel = ({ products }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (!products.length) {
      return undefined
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % products.length)
    }, 3600)

    return () => window.clearInterval(timer)
  }, [products])

  if (!products.length) {
    return null
  }

  const activeProduct = products[activeIndex]

  return (
    <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="overflow-hidden rounded-[2.5rem] border border-orange-100/80 bg-white/90 p-6 backdrop-blur dark:border-white/10 dark:bg-white/5">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-orange-500">Featured Slider</p>
            <h2 className="mt-2 text-2xl font-black text-slate-900 dark:text-white">Spotlight toys with colorful motion</h2>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setActiveIndex((current) => (current - 1 + products.length) % products.length)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-orange-50 text-slate-600 transition hover:bg-orange-100 hover:text-orange-600 dark:bg-white/10 dark:text-white"
            >
              <FiArrowLeft />
            </button>
            <button
              type="button"
              onClick={() => setActiveIndex((current) => (current + 1) % products.length)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-orange-50 text-slate-600 transition hover:bg-orange-100 hover:text-orange-600 dark:bg-white/10 dark:text-white"
            >
              <FiArrowRight />
            </button>
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <ProductArtwork product={activeProduct} className="min-h-[360px]" />
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
              {activeProduct.category}
            </p>
            <h3 className="text-3xl font-black text-slate-900 dark:text-white">{activeProduct.name}</h3>
            <p className="text-slate-500 dark:text-slate-300">{activeProduct.description}</p>
            <Link
              to={`/products/${activeProduct.slug}`}
              className="inline-flex rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 dark:bg-white dark:text-slate-950"
            >
              View product
            </Link>
          </div>
        </div>
      </div>
      <div className="grid gap-4">
        {products.map((product, index) => (
          <button
            key={product.id}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`rounded-[2rem] border p-5 text-left transition ${
              activeIndex === index
                ? 'border-orange-300 bg-orange-50 shadow-[0_18px_50px_rgba(249,115,22,0.15)] dark:border-orange-400/40 dark:bg-orange-500/10'
                : 'border-orange-100/80 bg-white/90 hover:-translate-y-1 dark:border-white/10 dark:bg-white/5'
            }`}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">{product.badge}</p>
            <h4 className="mt-2 text-lg font-black text-slate-900 dark:text-white">{product.name}</h4>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-300">{product.offer}</p>
          </button>
        ))}
      </div>
    </section>
  )
}

export default Carousel
