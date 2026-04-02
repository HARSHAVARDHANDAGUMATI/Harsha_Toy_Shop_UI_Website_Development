import { getProductGradient, getProductInitials } from '../../utils/productVisuals'

const ProductArtwork = ({ product, className = '', compact = false }) => {
  if (product.image) {
    return (
      <div className={`relative overflow-hidden rounded-[1.6rem] sm:rounded-[2rem] ${className}`}>
        <img 
          src={product.image} 
          alt={product.name} 
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/15 to-white/5" />
        <div className="relative flex h-full min-h-[180px] flex-col justify-between p-4 text-white drop-shadow-md sm:min-h-[220px] sm:p-6">
          <div className="flex items-start justify-between">
            {compact ? <span /> : (
              <span className="rounded-full border border-white/35 bg-slate-950/35 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white shadow-lg backdrop-blur-md sm:px-3 sm:text-xs sm:tracking-[0.24em]">
                {product.category}
              </span>
            )}
            <span className="rounded-full bg-slate-950/45 px-2.5 py-1 text-[10px] font-medium text-white shadow-lg backdrop-blur-md sm:px-3 sm:text-xs">
              {product.ageGroup}
            </span>
          </div>
          <div className="space-y-2">
            <p className={`${compact ? 'max-w-[12rem] text-[11px] sm:max-w-[14rem] sm:text-xs' : 'max-w-[15rem] text-xs sm:max-w-[18rem] sm:text-sm'} font-semibold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]`}>
              {product.offer}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden rounded-[1.6rem] sm:rounded-[2rem] ${className}`}
      style={{ backgroundImage: getProductGradient(product.colors) }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.32),_transparent_45%)]" />
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/15 blur-2xl" />
      <div className="absolute -bottom-10 -left-4 h-32 w-32 rounded-full bg-slate-950/15 blur-2xl" />
      <div className="relative flex h-full min-h-[180px] flex-col justify-between p-4 text-white sm:min-h-[220px] sm:p-6">
        <div className="flex items-start justify-between">
          {compact ? <span /> : (
            <span className="rounded-full border border-white/30 bg-white/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] sm:px-3 sm:text-xs sm:tracking-[0.24em]">
              {product.category}
            </span>
          )}
          <span className="rounded-full bg-slate-950/20 px-2.5 py-1 text-[10px] font-medium sm:px-3 sm:text-xs">
            {product.ageGroup}
          </span>
        </div>
        <div className="space-y-2">
          <div
            className={`inline-flex items-center justify-center rounded-[1.2rem] border border-white/20 bg-white/10 font-black tracking-[0.22em] text-white/95 shadow-2xl backdrop-blur-sm ${
              compact ? 'h-12 w-12 text-base sm:h-16 sm:w-16 sm:text-xl' : 'h-16 w-16 text-2xl sm:h-20 sm:w-20 sm:text-3xl'
            }`}
          >
            {getProductInitials(product.name)}
          </div>
          <p className={`${compact ? 'max-w-[12rem] text-[11px] sm:max-w-[14rem] sm:text-xs' : 'max-w-[15rem] text-xs sm:max-w-[18rem] sm:text-sm'} text-white/85`}>
            {product.offer}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductArtwork
