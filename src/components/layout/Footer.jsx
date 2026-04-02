import { Link } from 'react-router-dom'

const Footer = () => (
  <footer className="border-t border-slate-200/70 bg-white/70 py-10 backdrop-blur dark:border-white/10 dark:bg-slate-950/70 sm:py-12">
    <div className="mx-auto grid max-w-7xl gap-8 px-3 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-orange-500">ToySpark Shop</p>
        <h3 className="text-2xl font-black text-slate-900 dark:text-white">
          A bright, kid-friendly storefront built for playful browsing.
        </h3>
        <p className="max-w-md text-sm text-slate-500 dark:text-slate-300">
          Explore thoughtful gifts, STEM favorites, colorful roleplay kits, and delightful carts
          with a modern interface that feels joyful across every screen.
        </p>
      </div>
      <div>
        <h4 className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-slate-900 dark:text-white">
          Explore
        </h4>
        <div className="space-y-3 text-sm text-slate-500 dark:text-slate-300">
          <Link to="/" className="block transition hover:text-orange-500">
            Home
          </Link>
          <Link to="/products" className="block transition hover:text-orange-500">
            Product Listing
          </Link>
          <Link to="/wishlist" className="block transition hover:text-orange-500">
            Wishlist
          </Link>
          <Link to="/cart" className="block transition hover:text-orange-500">
            Cart
          </Link>
        </div>
      </div>
      <div>
        <h4 className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-slate-900 dark:text-white">
          Promise
        </h4>
        <div className="space-y-3 text-sm text-slate-500 dark:text-slate-300">
          <p>Responsive layouts for desktop, tablet, and mobile.</p>
          <p>Local storage persistence for cart, wishlist, theme, and user state.</p>
          <p>Reusable components for a cleaner production-style GitHub project.</p>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
