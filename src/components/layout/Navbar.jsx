import { NavLink, Link, useNavigate } from 'react-router-dom'
import { FiHeart, FiMenu, FiSearch, FiShoppingBag, FiUser, FiX } from 'react-icons/fi'
import { useState } from 'react'
import { useCart } from '../../context/CartContext'
import { useWishlist } from '../../context/WishlistContext'
import { useAuth } from '../../hooks/useAuth'
import ThemeToggle from '../common/ThemeToggle'
import Button from '../common/Button'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Shop', to: '/products' },
  { label: 'Wishlist', to: '/wishlist' },
  { label: 'Cart', to: '/cart' },
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [query, setQuery] = useState('')
  const { totalItems } = useCart()
  const { wishlistItems } = useWishlist()
  const { isAuthenticated, logout } = useAuth()
  const navigate = useNavigate()

  const handleSearchSubmit = (event) => {
    event.preventDefault()
    navigate(`/products?search=${encodeURIComponent(query)}`)
    setMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-40 border-b border-orange-100/80 bg-white/85 shadow-[0_14px_40px_rgba(251,146,60,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/70 dark:shadow-none">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-3 py-3 sm:px-6 sm:py-4 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-2.5 sm:gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 via-pink-400 to-fuchsia-500 text-base font-black text-white shadow-lg sm:h-12 sm:w-12 sm:text-lg">
            TS
          </div>
          <div className="min-w-0">
            <p className="hidden text-[10px] font-semibold uppercase tracking-[0.28em] text-orange-500 sm:block sm:text-xs sm:tracking-[0.32em]">
              Playful Picks
            </p>
            <p className="truncate text-base font-black text-slate-900 dark:text-white sm:text-lg">
              ToySpark Shop
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? 'bg-orange-100 text-orange-600 dark:bg-orange-500/15 dark:text-orange-200'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-200 dark:hover:bg-white/10'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden min-w-[280px] flex-1 lg:block lg:max-w-md">
          <form onSubmit={handleSearchSubmit}>
            <div className="flex items-center gap-3 rounded-full border border-orange-100 bg-orange-50/70 px-4 py-3 dark:border-white/10 dark:bg-white/5">
              <FiSearch className="text-slate-400" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search building kits, plush, STEM..."
                className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400 dark:text-white"
              />
            </div>
          </form>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <NavLink
            to="/wishlist"
            className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-orange-100 bg-white text-slate-700 transition hover:-translate-y-0.5 hover:border-pink-300 hover:text-pink-500 dark:border-white/10 dark:bg-white/5 dark:text-white"
          >
            <FiHeart size={18} />
            {wishlistItems.length ? (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-pink-500 px-1 text-[10px] font-bold text-white">
                {wishlistItems.length}
              </span>
            ) : null}
          </NavLink>
          <NavLink
            to="/cart"
            className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-orange-100 bg-white text-slate-700 transition hover:-translate-y-0.5 hover:border-orange-300 hover:text-orange-500 dark:border-white/10 dark:bg-white/5 dark:text-white"
          >
            <FiShoppingBag size={18} />
            {totalItems ? (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-orange-500 px-1 text-[10px] font-bold text-white">
                {totalItems}
              </span>
            ) : null}
          </NavLink>
          {isAuthenticated ? (
            <Button variant="secondary" onClick={logout}>
              Sign out
            </Button>
          ) : (
            <Button as={NavLink} to="/login" variant="accent">
              <FiUser size={16} />
              Account
            </Button>
          )}
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <Link
            to="/cart"
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-orange-100 bg-white text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-white"
          >
            <FiShoppingBag size={17} />
            {totalItems ? (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-orange-500 px-1 text-[10px] font-bold text-white">
                {totalItems}
              </span>
            ) : null}
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-orange-100 bg-white text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-white"
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="border-t border-orange-100 bg-white/95 px-3 py-4 dark:border-white/10 dark:bg-slate-950/95 lg:hidden">
          <form onSubmit={handleSearchSubmit} className="mb-4">
            <div className="flex items-center gap-3 rounded-full border border-orange-100 bg-orange-50/70 px-4 py-3 dark:border-white/10 dark:bg-white/5">
              <FiSearch className="text-slate-400" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search toys..."
                className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400 dark:text-white"
              />
            </div>
          </form>
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10"
              >
                {link.label}
              </NavLink>
            ))}
            <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
              {isAuthenticated ? (
                <Button variant="secondary" onClick={logout} className="w-full sm:flex-1">
                  Sign out
                </Button>
              ) : (
                <Button
                  as={NavLink}
                  to="/login"
                  variant="accent"
                  className="w-full sm:flex-1"
                  onClick={() => setMenuOpen(false)}
                >
                  Account
                </Button>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}

export default Navbar
