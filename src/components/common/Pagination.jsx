import Button from './Button'

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) {
    return null
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Button
        variant="secondary"
        size="sm"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </Button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          type="button"
          onClick={() => onPageChange(index + 1)}
          className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition ${
            currentPage === index + 1
              ? 'bg-slate-950 text-white dark:bg-white dark:text-slate-950'
              : 'bg-white text-slate-700 hover:bg-orange-100 dark:bg-white/5 dark:text-white'
          }`}
        >
          {index + 1}
        </button>
      ))}
      <Button
        variant="secondary"
        size="sm"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </Button>
    </div>
  )
}

export default Pagination
