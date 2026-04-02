import { useEffect, useMemo, useState } from 'react'
import { FiCpu, FiGift, FiMusic, FiTruck } from 'react-icons/fi'
import Carousel from '../components/home/Carousel'
import CategoryList from '../components/home/CategoryList'
import FeaturedToys from '../components/home/FeaturedToys'
import Hero from '../components/home/Hero'
import Offers from '../components/home/Offers'
import Loader from '../components/common/Loader'
import QuickViewModal from '../components/product/QuickViewModal'
import { fetchFeaturedProducts, fetchProducts } from '../utils/fakeApi'

const categoryConfig = [
  { name: 'Vehicles', icon: <FiTruck />, copy: 'Race-ready fun, launchers, and speedy sets.', swatch: 'bg-orange-100 text-orange-500' },
  { name: 'Creative', icon: <FiGift />, copy: 'Bright kits for making, crafting, and storytelling.', swatch: 'bg-pink-100 text-pink-500' },
  { name: 'STEM', icon: <FiCpu />, copy: 'Smart builds and logic toys that teach through play.', swatch: 'bg-sky-100 text-sky-500' },
  { name: 'Music', icon: <FiMusic />, copy: 'Playful instruments and rhythm makers for tiny artists.', swatch: 'bg-emerald-100 text-emerald-500' },
]

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([])
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [quickViewProduct, setQuickViewProduct] = useState(null)

  useEffect(() => {
    let mounted = true

    const loadData = async () => {
      const [featured, allProducts] = await Promise.all([fetchFeaturedProducts(), fetchProducts()])
      if (!mounted) {
        return
      }

      setFeaturedProducts(featured)
      setProducts(allProducts)
      setLoading(false)
    }

    loadData()

    return () => {
      mounted = false
    }
  }, [])

  const categories = useMemo(
    () =>
      categoryConfig.map((category) => ({
        ...category,
        count: products.filter((product) => product.category === category.name).length,
      })),
    [products],
  )

  if (loading) {
    return <Loader />
  }

  return (
    <div className="space-y-10">
      <Hero />
      <Carousel products={featuredProducts.slice(0, 4)} />
      <CategoryList categories={categories} />
      <Offers />
      <FeaturedToys products={featuredProducts.slice(0, 4)} onQuickView={setQuickViewProduct} />
      <QuickViewModal
        product={quickViewProduct}
        isOpen={Boolean(quickViewProduct)}
        onClose={() => setQuickViewProduct(null)}
      />
    </div>
  )
}

export default Home
