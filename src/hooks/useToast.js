import toast from 'react-hot-toast'

export const useToast = () => ({
  success: (message) => toast.success(message),
  error: (message) => toast.error(message),
  message: (message) => toast(message),
})
