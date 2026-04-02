import { Link } from 'react-router-dom'
import { PROMO_BANNERS } from '../../utils/constants'

const Offers = () => (
  <section className="grid gap-4 lg:grid-cols-2">
    {PROMO_BANNERS.map((banner) => (
      <article
        key={banner.title}
        className={`overflow-hidden rounded-[2.5rem] bg-gradient-to-br ${banner.accent} p-[1px] shadow-[0_18px_60px_rgba(15,23,42,0.1)]`}
      >
        <div className="rounded-[2.45rem] bg-white/85 p-6 backdrop-blur dark:bg-slate-950/70">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-orange-500">Offers & Badges</p>
          <h2 className="mt-3 text-3xl font-black text-slate-900 dark:text-white">{banner.title}</h2>
          <p className="mt-3 max-w-md text-slate-500 dark:text-slate-300">{banner.copy}</p>
          <Link
            to="/products"
            className="mt-6 inline-flex rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 dark:bg-white dark:text-slate-950"
          >
            Explore offers
          </Link>
        </div>
      </article>
    ))}
  </section>
)

export default Offers
