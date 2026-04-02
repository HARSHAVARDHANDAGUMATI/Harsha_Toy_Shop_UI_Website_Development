import clsx from 'clsx'

const variants = {
  primary:
    'bg-slate-950 text-white shadow-[0_18px_40px_rgba(15,23,42,0.22)] hover:-translate-y-0.5 hover:bg-slate-800',
  secondary:
    'border border-slate-200 bg-white text-slate-900 hover:-translate-y-0.5 hover:border-orange-300 hover:text-orange-600 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-orange-400',
  ghost:
    'bg-transparent text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10',
  accent:
    'bg-gradient-to-r from-orange-400 via-pink-400 to-fuchsia-500 text-white shadow-[0_18px_40px_rgba(236,72,153,0.25)] hover:-translate-y-0.5',
}

const Button = ({
  as: As = 'button',
  children,
  className,
  variant = 'primary',
  size = 'md',
  ...props
}) => (
  <As
    className={clsx(
      'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-300 disabled:cursor-not-allowed disabled:opacity-60',
      size === 'sm' && 'px-4 py-2 text-sm',
      size === 'md' && 'px-5 py-3 text-sm',
      size === 'lg' && 'px-6 py-3.5 text-base',
      variants[variant],
      className,
    )}
    {...props}
  >
    {children}
  </As>
)

export default Button
