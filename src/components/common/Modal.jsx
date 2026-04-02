import { AnimatePresence } from 'framer-motion'
import { createPortal } from 'react-dom'

const Modal = ({ isOpen, onClose, children }) => {
  if (typeof document === 'undefined') {
    return null
  }

  return createPortal(
    <AnimatePresence>
      {isOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 px-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <div
            className="max-h-[90vh] w-full max-w-4xl overflow-auto rounded-[2rem] bg-white p-6 shadow-2xl dark:bg-slate-900"
            onClick={(event) => event.stopPropagation()}
          >
            {children}
          </div>
        </div>
      ) : null}
    </AnimatePresence>,
    document.body,
  )
}

export default Modal
