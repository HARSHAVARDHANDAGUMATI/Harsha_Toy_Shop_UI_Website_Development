import { Outlet } from 'react-router-dom'
import ErrorBoundary from '../common/ErrorBoundary'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = () => (
  <ErrorBoundary>
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(251,146,60,0.16),_transparent_24%),radial-gradient(circle_at_top_right,_rgba(56,189,248,0.16),_transparent_20%),linear-gradient(180deg,_#fffdf8_0%,_#fff7ed_22%,_#ffffff_56%,_#f8fbff_100%)] text-slate-900 transition-colors duration-300 dark:bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.18),_transparent_22%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.2),_transparent_20%),linear-gradient(180deg,_#020617_0%,_#0f172a_52%,_#111827_100%)] dark:text-white">
      <Navbar />
      <main className="mx-auto max-w-7xl px-3 py-5 sm:px-6 sm:py-8 lg:px-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  </ErrorBoundary>
)

export default Layout
