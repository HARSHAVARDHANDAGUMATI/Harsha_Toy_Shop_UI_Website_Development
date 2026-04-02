import { Link } from 'react-router-dom'
import Button from '../components/common/Button'

const NotFound = () => (
  <div className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center gap-6 px-6 text-center">
    <span className="rounded-full bg-orange-100 px-4 py-2 text-xs font-black uppercase tracking-[0.32em] text-orange-600 dark:bg-orange-500/15 dark:text-orange-200">
      404
    </span>
    <h1 className="text-5xl font-black text-slate-900 dark:text-white">This toy wandered off the shelf.</h1>
    <p className="text-lg text-slate-500 dark:text-slate-300">
      The page you are looking for could not be found. Head back to the storefront and keep exploring.
    </p>
    <Button as={Link} to="/" variant="accent">
      Back to home
    </Button>
  </div>
)

export default NotFound
