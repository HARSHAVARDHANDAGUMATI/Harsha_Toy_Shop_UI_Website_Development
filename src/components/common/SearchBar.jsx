import { FiSearch } from 'react-icons/fi'
import Input from './Input'

const SearchBar = ({ value, onChange, placeholder = 'Search toys, kits, and play ideas...' }) => (
  <Input
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    icon={<FiSearch size={18} />}
    aria-label="Search products"
  />
)

export default SearchBar
