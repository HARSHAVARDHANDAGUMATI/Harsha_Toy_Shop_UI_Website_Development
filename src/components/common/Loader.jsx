const Loader = ({ label = 'Loading playful picks...' }) => (
  <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
    <div className="flex items-center gap-3">
      <span className="h-4 w-4 animate-bounce rounded-full bg-orange-400 [animation-delay:-0.3s]" />
      <span className="h-4 w-4 animate-bounce rounded-full bg-pink-400 [animation-delay:-0.15s]" />
      <span className="h-4 w-4 animate-bounce rounded-full bg-sky-400" />
    </div>
    <p className="text-sm font-medium text-slate-500 dark:text-slate-300">{label}</p>
  </div>
)

export default Loader
