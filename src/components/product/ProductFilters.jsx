import { CATEGORIES, AGE_GROUPS } from '../../utils/constants'

const FilterSection = ({ title, items, active, onSelect }) => (
  <div className="space-y-3">
    <h3 className="text-sm font-black uppercase tracking-[0.2em] text-slate-900 dark:text-white">
      {title}
    </h3>
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => onSelect(item)}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
            active === item
              ? 'bg-slate-950 text-white dark:bg-white dark:text-slate-950'
              : 'bg-slate-100 text-slate-600 hover:bg-orange-100 hover:text-orange-600 dark:bg-white/10 dark:text-slate-200'
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  </div>
)

const ProductFilters = ({
  selectedCategory,
  setSelectedCategory,
  selectedAgeGroup,
  setSelectedAgeGroup,
  showDiscountsOnly,
  setShowDiscountsOnly,
}) => (
  <div className="space-y-5 rounded-[1.6rem] border border-white/60 bg-white/85 p-4 shadow-[0_18px_50px_rgba(15,23,42,0.07)] backdrop-blur dark:border-white/10 dark:bg-white/5 sm:space-y-6 sm:rounded-[2rem] sm:p-6">
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-orange-500">Filter Shelf</p>
      <h2 className="mt-2 text-xl font-black text-slate-900 dark:text-white sm:text-2xl">Find the perfect playtime fit</h2>
    </div>
    <FilterSection
      title="Categories"
      items={CATEGORIES}
      active={selectedCategory}
      onSelect={setSelectedCategory}
    />
    <FilterSection
      title="Age Group"
      items={AGE_GROUPS}
      active={selectedAgeGroup}
      onSelect={setSelectedAgeGroup}
    />
    <label className="flex items-center justify-between rounded-3xl bg-orange-50 px-4 py-4 text-sm font-semibold text-slate-700 dark:bg-orange-500/10 dark:text-slate-100">
      Show only discounted toys
      <input
        type="checkbox"
        checked={showDiscountsOnly}
        onChange={(event) => setShowDiscountsOnly(event.target.checked)}
        className="h-5 w-5 rounded border-orange-300 text-orange-500 focus:ring-orange-500"
      />
    </label>
  </div>
)

export default ProductFilters
