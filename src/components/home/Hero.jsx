import { Link } from 'react-router-dom'
import { FiArrowRight, FiShoppingBag } from 'react-icons/fi'
import Button from '../common/Button'
import { HERO_HIGHLIGHTS, HOME_METRICS } from '../../utils/constants'

const Hero = () => (
  <section className="grid gap-6 rounded-[2rem] border border-orange-100/80 bg-white/88 p-4 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 sm:gap-10 sm:rounded-[2.5rem] sm:p-6 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
    <div className="space-y-6 sm:space-y-8">
      <div className="space-y-4 sm:space-y-5">
        <span className="inline-flex rounded-full bg-orange-100 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.24em] text-orange-600 dark:bg-orange-500/15 dark:text-orange-200 sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.32em]">
          Modern Toy Shop UI
        </span>
        <div className="space-y-3 sm:space-y-4">
          <h1 className="max-w-2xl text-[2.6rem] font-black leading-[0.98] text-slate-900 dark:text-white sm:text-5xl sm:leading-[1.05] lg:text-6xl">
            Big imagination starts with bright little discoveries.
          </h1>
          <p className="max-w-xl text-base leading-7 text-slate-500 dark:text-slate-300 sm:text-lg sm:leading-8">
            Explore colorful toys, joyful categories, gift-ready bundles, and a polished shopping flow
            built for modern families.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button as={Link} to="/products" variant="accent" size="lg" className="w-full sm:w-auto">
            <FiShoppingBag size={18} />
            Shop toys
          </Button>
          <Button as={Link} to="/wishlist" variant="secondary" size="lg" className="w-full sm:w-auto">
            Curated wishlist
            <FiArrowRight size={16} />
          </Button>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
        {HOME_METRICS.map((item) => (
          <div
            key={item.label}
            className="rounded-[1.4rem] border border-orange-100 bg-white px-4 py-4 text-slate-900 shadow-[0_18px_40px_rgba(251,146,60,0.08)] dark:border-white/10 dark:bg-slate-900/70 dark:text-white dark:shadow-none sm:rounded-[1.8rem] sm:px-5 sm:py-5"
          >
            <p className="text-2xl font-black sm:text-3xl">{item.value}</p>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-300">{item.label}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        {HERO_HIGHLIGHTS.map((item) => (
          <div
            key={item}
            className="rounded-[1.4rem] border border-orange-100 bg-gradient-to-br from-orange-50 to-amber-50 px-4 py-4 text-sm font-semibold text-slate-700 dark:border-white/10 dark:bg-slate-800/85 dark:bg-none dark:text-slate-100 sm:rounded-[1.8rem]"
          >
            {item}
          </div>
        ))}
      </div>
    </div>

    <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#fb923c,_#f472b6_45%,_#38bdf8)] p-5 text-white shadow-[0_24px_80px_rgba(249,115,22,0.3)] sm:rounded-[2.5rem] sm:p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.25),_transparent_36%)]" />
      <div className="relative flex h-full flex-col justify-between gap-5 sm:gap-8">
        <div className="space-y-2 sm:space-y-3">
          <p className="text-xs font-black uppercase tracking-[0.32em] text-white/80">This Week&apos;s Spark</p>
          <h2 className="text-2xl font-black leading-tight sm:text-3xl">
            Playroom picks that look joyful on every screen size.
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
          <div className="rounded-[1.5rem] border border-white/20 bg-white/10 p-4 backdrop-blur sm:rounded-[2rem] sm:p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/75">Responsive</p>
            <p className="mt-2 text-base font-bold sm:text-lg">Desktop cards, mobile-first layouts, and cozy spacing.</p>
          </div>
          <div className="rounded-[1.5rem] border border-white/20 bg-slate-950/15 p-4 backdrop-blur sm:rounded-[2rem] sm:p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/75">Interactive</p>
            <p className="mt-2 text-base font-bold sm:text-lg">Quick view, wishlists, dark mode, and playful motion.</p>
          </div>
        </div>
        <div className="rounded-[1.5rem] bg-slate-950/15 p-4 backdrop-blur sm:rounded-[2rem] sm:p-5">
          <p className="text-sm font-semibold text-white/80">Bonus-ready build</p>
          <p className="mt-2 text-base font-bold sm:text-lg">
            Includes fake API loading states, recently viewed items, and recommendations.
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default Hero
