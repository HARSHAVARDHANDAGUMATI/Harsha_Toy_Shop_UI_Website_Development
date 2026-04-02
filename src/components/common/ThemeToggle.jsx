import { FiMoon, FiSun } from 'react-icons/fi'
import { useTheme } from '../../context/ThemeContext'

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:-translate-y-0.5 hover:border-orange-300 hover:text-orange-500 dark:border-white/10 dark:bg-white/5 dark:text-white"
      aria-label="Toggle theme"
    >
      {isDarkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
    </button>
  )
}

export default ThemeToggle
