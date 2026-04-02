import clsx from 'clsx'

const Input = ({
  label,
  hint,
  error,
  icon,
  trailing,
  className,
  containerClassName,
  ...props
}) => (
  <label className={clsx('block space-y-2', containerClassName)}>
    {label ? (
      <span className="flex items-center justify-between text-sm font-semibold text-slate-700 dark:text-slate-200">
        {label}
        {hint ? <span className="text-xs font-medium text-slate-400">{hint}</span> : null}
      </span>
    ) : null}
    <div
      className={clsx(
        'group flex items-center gap-3 rounded-3xl border bg-white px-4 py-3 shadow-sm transition duration-300',
        'border-slate-200 focus-within:-translate-y-0.5 focus-within:border-orange-300 focus-within:shadow-[0_18px_40px_rgba(249,115,22,0.12)]',
        'dark:border-white/10 dark:bg-white/5 dark:focus-within:border-orange-400',
        error &&
          'border-red-300 shadow-[0_0_0_1px_rgba(239,68,68,0.15),0_0_24px_rgba(239,68,68,0.25)] dark:border-red-400/70',
        className,
      )}
    >
      {icon ? <span className="text-slate-400 transition group-focus-within:text-orange-500">{icon}</span> : null}
      <input
        className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400 dark:text-white"
        {...props}
      />
      {trailing}
    </div>
    {error ? <p className="text-xs font-medium text-red-500">{error}</p> : null}
  </label>
)

export default Input
