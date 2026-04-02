import products from '../data/products.json'

const delay = (ms) => new Promise((resolve) => {
  window.setTimeout(resolve, ms)
})

export const fetchProducts = async () => {
  await delay(700)
  return products
}

export const fetchFeaturedProducts = async () => {
  await delay(500)
  return products.filter((product) => product.isFeatured)
}

export const fetchProductBySlug = async (slug) => {
  await delay(450)
  const product = products.find((item) => item.slug === slug)

  if (!product) {
    throw new Error('Product not found')
  }

  return product
}

export const fetchRecommendations = async (product) => {
  await delay(350)

  return products
    .filter(
      (item) =>
        item.id !== product.id &&
        (item.category === product.category || item.ageGroup === product.ageGroup),
    )
    .slice(0, 4)
}
