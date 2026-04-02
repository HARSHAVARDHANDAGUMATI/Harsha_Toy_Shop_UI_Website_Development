import { startTransition, useDeferredValue, useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { FiAlertCircle } from 'react-icons/fi'
import Pagination from '../components/common/Pagination'
import SearchBar from '../components/common/SearchBar'
import QuickViewModal from '../components/product/QuickViewModal'
import ProductFilters from '../components/product/ProductFilters'
import ProductGrid from '../components/product/ProductGrid'
import ProductSort from '../components/product/ProductSort'
import { fetchProducts } from '../utils/fakeApi'

const ITEMS_PER_PAGE = 6

const ProductListing = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [allProducts, setAllProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') ?? '')
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') ?? 'All')
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('All')
  const [showDiscountsOnly, setShowDiscountsOnly] = useState(false)
  const [sortBy, setSortBy] = useState('featured')
  const [currentPage, setCurrentPage] = useState(1)
  const [quickViewProduct, setQuickViewProduct] = useState(null)

  useEffect(() => {
    let mounted = true

    fetchProducts().then((products) => {
      if (mounted) {
        setAllProducts(products)
        setLoading(false)
      }
    })

    return () => {
      mounted = false
    }
  }, [])

  useEffect(() => {
    const nextParams = new URLSearchParams()
    if (searchQuery) {
      nextParams.set('search', searchQuery)
    }
    if (selectedCategory !== 'All') {
      nextParams.set('category', selectedCategory)
    }
    setSearchParams(nextParams, { replace: true })
  }, [searchQuery, selectedCategory, setSearchParams])

  const deferredQuery = useDeferredValue(searchQuery)

  const filteredProducts = useMemo(() => {
    const query = deferredQuery.trim().toLowerCase()

    return [...allProducts]
      .filter((product) => (selectedCategory === 'All' ? true : product.category === selectedCategory))
      .filter((product) => (selectedAgeGroup === 'All' ? true : product.ageGroup === selectedAgeGroup))
      .filter((product) => (!showDiscountsOnly ? true : product.originalPrice > product.price))
      .filter((product) =>
        query
          ? [product.name, product.category, product.description, ...product.tags]
              .join(' ')
              .toLowerCase()
              .includes(query)
          : true,
      )
      .sort((first, second) => {
        switch (sortBy) {
          case 'price-low':
            return first.price - second.price
          case 'price-high':
            return second.price - first.price
          case 'rating':
            return second.rating - first.rating
          case 'newest':
            return Number(second.isNew) - Number(first.isNew)
          default:
            return Number(second.isFeatured) - Number(first.isFeatured)
        }
      })
  }, [allProducts, deferredQuery, selectedAgeGroup, selectedCategory, showDiscountsOnly, sortBy])

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)
  const safePage = Math.min(currentPage, Math.max(totalPages, 1))
  const paginatedProducts = filteredProducts.slice(
    (safePage - 1) * ITEMS_PER_PAGE,
    safePage * ITEMS_PER_PAGE,
  )

  return (
    <div className="grid gap-5 xl:grid-cols-[320px_1fr] xl:gap-8">
      <div className="space-y-6">
        <ProductFilters
          selectedCategory={selectedCategory}
          setSelectedCategory={(value) => {
            setSelectedCategory(value)
            setCurrentPage(1)
          }}
          selectedAgeGroup={selectedAgeGroup}
          setSelectedAgeGroup={(value) => {
            setSelectedAgeGroup(value)
            setCurrentPage(1)
          }}
          showDiscountsOnly={showDiscountsOnly}
          setShowDiscountsOnly={(value) => {
            setShowDiscountsOnly(value)
            setCurrentPage(1)
          }}
        />
      </div>
      <div className="space-y-6">
        <section className="rounded-[1.8rem] border border-white/60 bg-white/85 p-4 backdrop-blur dark:border-white/10 dark:bg-white/5 sm:rounded-[2.5rem] sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-orange-500">Product Listing</p>
          <div className="mt-3 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="text-[2rem] font-black leading-tight text-slate-900 dark:text-white sm:text-4xl">Colorful toys for every age and mood</h1>
              <p className="mt-3 max-w-2xl text-slate-500 dark:text-slate-300">
                Search in real time, filter by age group, sort by value, and explore a polished catalog
                with discounts, quick view, and responsive cards.
              </p>
            </div>
            <div className="w-full max-w-xl">
              <SearchBar
                value={searchQuery}
                onChange={(event) =>
                    startTransition(() => {
                      setSearchQuery(event.target.value)
                      setCurrentPage(1)
                    })
                }
              />
            </div>
          </div>
        </section>
        <ProductSort
          total={filteredProducts.length}
          value={sortBy}
          onChange={(value) => {
            setSortBy(value)
            setCurrentPage(1)
          }}
        />
        <ProductGrid
          products={paginatedProducts}
          loading={loading}
          onQuickView={setQuickViewProduct}
          emptyState={
            <div className="rounded-[1.6rem] border border-dashed border-slate-300 bg-white/80 px-4 py-10 text-center dark:border-white/10 dark:bg-white/5 sm:rounded-[2rem] sm:px-6 sm:py-12">
              <FiAlertCircle className="mx-auto mb-4 text-4xl text-orange-500" />
              <h3 className="text-2xl font-black text-slate-900 dark:text-white">No toys matched your search</h3>
              <p className="mt-3 text-slate-500 dark:text-slate-300">
                Try a different keyword, age group, or category to discover more playful picks.
              </p>
            </div>
          }
        />
        <Pagination currentPage={safePage} totalPages={totalPages} onPageChange={setCurrentPage} />
      </div>
      <QuickViewModal
        product={quickViewProduct}
        isOpen={Boolean(quickViewProduct)}
        onClose={() => setQuickViewProduct(null)}
      />
    </div>
  )
}

export default ProductListing
