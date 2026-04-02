import { SORT_OPTIONS } from '../../utils/constants'

const ProductSort = ({ total, value, onChange }) => (
  <div className="flex flex-col gap-4 rounded-[1.6rem] border border-white/60 bg-white/85 p-4 backdrop-blur dark:border-white/10 dark:bg-white/5 sm:rounded-[2rem] sm:p-5 md:flex-row md:items-center md:justify-between">
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-orange-500">Collection Results</p>
      <h3 className="mt-1 text-base font-black text-slate-900 dark:text-white sm:text-lg">{total} toys ready to explore</h3>
    </div>
    <label className="flex flex-col items-start gap-2 text-sm font-semibold text-slate-500 dark:text-slate-300 sm:flex-row sm:items-center sm:gap-3">
      Sort by
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 outline-none transition focus:border-orange-300 dark:border-white/10 dark:bg-slate-900 dark:text-white sm:w-auto"
        style={{ colorScheme: 'light' }}
      >
        {SORT_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  </div>
)

export default ProductSort
