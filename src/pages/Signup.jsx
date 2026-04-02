import { Link } from 'react-router-dom'
import SignupForm from '../components/auth/SignupForm'

const Signup = () => (
  <section className="grid gap-5 rounded-[1.8rem] border border-white/60 bg-white/85 p-4 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur dark:border-white/10 dark:bg-white/5 sm:gap-8 sm:rounded-[2.5rem] sm:p-6 lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
    <div className="overflow-hidden rounded-[1.8rem] bg-[linear-gradient(135deg,#0ea5e9,_#38bdf8_35%,_#22c55e)] p-5 text-white sm:rounded-[2.5rem] sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/75">Signup</p>
      <h1 className="mt-3 text-[2rem] font-black leading-tight sm:text-4xl">Create your ToySpark account in style.</h1>
      <p className="mt-4 max-w-md text-sm leading-6 text-white/85 sm:text-base sm:leading-7">
        Build a strong password, save favorites, and unlock a smooth shopping flow with bright, animated UI.
      </p>
      <div className="mt-6 grid gap-3 sm:mt-8 sm:gap-4">
        <div className="rounded-[1.4rem] bg-white/10 p-4 backdrop-blur sm:rounded-[1.8rem] sm:p-5">
          Professional folder structure with reusable forms and shared components.
        </div>
        <div className="rounded-[1.4rem] bg-slate-950/15 p-4 backdrop-blur sm:rounded-[1.8rem] sm:p-5">
          Real-time password strength checks with clear validation feedback.
        </div>
      </div>
    </div>
    <div className="space-y-5 sm:space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-orange-500">Start Exploring</p>
        <h2 className="mt-2 text-[2rem] font-black text-slate-900 dark:text-white sm:text-3xl">Create your account</h2>
      </div>
      <SignupForm />
      <p className="text-sm text-slate-500 dark:text-slate-300">
        Already have an account?{' '}
        <Link to="/login" className="font-semibold text-orange-500">
          Log in
        </Link>
      </p>
    </div>
  </section>
)

export default Signup
