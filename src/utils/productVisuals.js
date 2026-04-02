export const getProductGradient = (colors = []) => {
  const [primary = '#f97316', secondary = '#fb7185', accent = '#312e81'] = colors
  return `linear-gradient(135deg, ${primary}, ${secondary} 55%, ${accent})`
}

export const getProductInitials = (name = '') =>
  name
    .split(' ')
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
