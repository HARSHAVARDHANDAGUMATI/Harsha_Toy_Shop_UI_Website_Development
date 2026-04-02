const Badge = ({ children, tone = 'warm', className = '' }) => {
  const tones = {
    warm: 'bg-orange-100 text-orange-700 dark:bg-orange-500/15 dark:text-orange-200',
    cool: 'bg-sky-100 text-sky-700 dark:bg-sky-500/15 dark:text-sky-200',
    success: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-200',
    neutral: 'bg-slate-100 text-slate-600 dark:bg-white/10 dark:text-slate-200',
  }

  return (
    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${tones[tone]} ${className}`}>
      {children}
    </span>
  )
}

export default Badge
