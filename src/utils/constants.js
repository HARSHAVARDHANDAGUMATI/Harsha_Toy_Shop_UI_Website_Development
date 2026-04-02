export const STORAGE_KEYS = {
  cart: 'toyshop-cart',
  wishlist: 'toyshop-wishlist',
  theme: 'toyshop-theme',
  auth: 'toyshop-auth',
  recentlyViewed: 'toyshop-recently-viewed',
}

export const CATEGORIES = [
  'All',
  'Vehicles',
  'Soft Toys',
  'STEM',
  'Creative',
  'Pretend Play',
  'Puzzles',
  'Dolls',
  'Outdoor',
  'Music',
  'Electronics',
]

export const AGE_GROUPS = ['All', '3+', '4+', '5+', '6+', '7+', '8+', '9+', '10+']

export const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured First' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
  { value: 'newest', label: 'Newest Arrivals' },
]

export const HOME_METRICS = [
  { label: 'Happy Families', value: '12K+' },
  { label: 'Curated Toys', value: '350+' },
  { label: 'Same Day Dispatch', value: '24h' },
]

export const HERO_HIGHLIGHTS = [
  'Handpicked toys for curious kids',
  'Bright deals, safe materials, fast delivery',
  'Designed for playrooms, gifting, and joyful browsing',
]

export const FEATURE_STRIPS = [
  {
    title: 'Creative Corners',
    subtitle: 'Craft, build, and imagine with vibrant kits.',
    category: 'Creative',
  },
  {
    title: 'Smart Play',
    subtitle: 'STEM favorites packed with learning moments.',
    category: 'STEM',
  },
  {
    title: 'Tiny Explorers',
    subtitle: 'Soft, safe, and delightful picks for younger kids.',
    category: 'Soft Toys',
  },
]

export const PROMO_BANNERS = [
  {
    title: 'Spring Toy Parade',
    copy: 'Save up to 25% on colorful best sellers this week.',
    accent: 'from-amber-300 via-orange-300 to-rose-300',
  },
  {
    title: 'Build & Discover',
    copy: 'Grab STEM kits with bonus activity cards.',
    accent: 'from-cyan-300 via-sky-300 to-indigo-300',
  },
]

export const PASSWORD_RULES = [
  { key: 'length', label: 'At least 8 characters' },
  { key: 'uppercase', label: 'One uppercase letter' },
  { key: 'lowercase', label: 'One lowercase letter' },
  { key: 'number', label: 'One number' },
  { key: 'symbol', label: 'One special character' },
]
