import { useState } from 'react'
import { FiEye, FiEyeOff, FiLock, FiMail } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import Button from '../common/Button'
import Input from '../common/Input'
import { useAuth } from '../../hooks/useAuth'
import { useToast } from '../../hooks/useToast'
import { getPasswordStrength } from '../../utils/passwordStrength'

const LoginForm = () => {
  const [values, setValues] = useState({ email: '', password: '' })
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { login } = useAuth()
  const toast = useToast()

  const strength = getPasswordStrength(values.password)

  const handleChange = (field) => (event) => {
    setError('')
    setValues((current) => ({ ...current, [field]: event.target.value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!values.email || !values.password) {
      setError('Please fill in both email and password.')
      return
    }

    try {
      login(values)
      toast.success('Welcome back to ToySpark Shop')
      navigate('/')
    } catch (submitError) {
      setError(submitError.message)
    }
  }

  const passwordGlow =
    strength.tone === 'weak'
      ? 'border-red-300 shadow-[0_0_0_1px_rgba(239,68,68,0.14),0_0_28px_rgba(239,68,68,0.28)]'
      : strength.tone === 'strong'
        ? 'border-emerald-300 shadow-[0_0_0_1px_rgba(16,185,129,0.14),0_0_28px_rgba(16,185,129,0.26)]'
        : ''

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
      <Input
        label="Email address"
        type="email"
        placeholder="demo@toyshop.com"
        value={values.email}
        onChange={handleChange('email')}
        icon={<FiMail size={18} />}
      />
      <div className="space-y-2">
        <Input
          label="Password"
          type={showPassword ? 'text' : 'password'}
          placeholder="Enter your password"
          value={values.password}
          onChange={handleChange('password')}
          icon={<FiLock size={18} />}
          className={passwordGlow}
          trailing={
            <button
              type="button"
              onClick={() => setShowPassword((current) => !current)}
              className="text-slate-400 transition hover:text-orange-500"
            >
              {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
            </button>
          }
        />
        <p
          className={`text-xs font-semibold ${
            strength.tone === 'weak'
              ? 'text-red-500'
              : strength.tone === 'strong'
                ? 'text-emerald-500'
                : 'text-slate-400'
          }`}
        >
          {strength.label}
        </p>
      </div>
      {error ? <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-500 dark:bg-red-500/10">{error}</p> : null}
      <Button variant="accent" className="w-full" type="submit">
        Login
      </Button>
    </form>
  )
}

export default LoginForm
