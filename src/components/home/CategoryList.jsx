import { Link } from 'react-router-dom'

const CategoryList = ({ categories }) => (
  <section className="space-y-5">
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-orange-500">Shop by Category</p>
      <h2 className="mt-2 text-2xl font-black text-slate-900 dark:text-white">Browse joyful collections fast</h2>
    </div>
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {categories.map((category) => (
        <Link
          key={category.name}
          to={`/products?category=${encodeURIComponent(category.name)}`}
          className="group rounded-[2rem] border border-white/60 bg-white/85 p-6 transition hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-white/5"
        >
          <div className={`mb-4 inline-flex rounded-2xl px-4 py-3 text-2xl ${category.swatch}`}>
            {category.icon}
          </div>
          <h3 className="text-xl font-black text-slate-900 transition group-hover:text-orange-500 dark:text-white">
            {category.name}
          </h3>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-300">{category.copy}</p>
          <p className="mt-4 text-sm font-semibold text-orange-500">{category.count} products</p>
        </Link>
      ))}
    </div>
  </section>
)

export default CategoryList
