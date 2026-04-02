import { useMemo, useState } from 'react'
import { FiCheck, FiEye, FiEyeOff, FiLock, FiMail, FiUser } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import Button from '../common/Button'
import Input from '../common/Input'
import { useAuth } from '../../hooks/useAuth'
import { useToast } from '../../hooks/useToast'
import { PASSWORD_RULES } from '../../utils/constants'
import { getPasswordStrength } from '../../utils/passwordStrength'

const SignupForm = () => {
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { signup } = useAuth()
  const toast = useToast()

  const strength = useMemo(() => getPasswordStrength(values.password), [values.password])

  const handleChange = (field) => (event) => {
    setError('')
    setValues((current) => ({ ...current, [field]: event.target.value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!values.fullName || !values.email || !values.password || !values.confirmPassword) {
      setError('Please complete all fields.')
      return
    }

    if (strength.tone !== 'strong') {
      setError('Please choose a stronger password before signing up.')
      return
    }

    if (values.password !== values.confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    signup(values)
    toast.success('Account created successfully')
    navigate('/')
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
        label="Full name"
        placeholder="Harsha"
        value={values.fullName}
        onChange={handleChange('fullName')}
        icon={<FiUser size={18} />}
      />
      <Input
        label="Email address"
        type="email"
        placeholder="you@example.com"
        value={values.email}
        onChange={handleChange('email')}
        icon={<FiMail size={18} />}
      />
      <Input
        label="Create password"
        type={showPassword ? 'text' : 'password'}
        placeholder="Create a strong password"
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
      <div className="grid gap-2 rounded-[1.4rem] bg-slate-100/80 p-4 dark:bg-white/5 sm:rounded-[1.8rem]">
        <p
          className={`text-sm font-bold ${
            strength.tone === 'weak'
              ? 'text-red-500'
              : strength.tone === 'strong'
                ? 'text-emerald-500'
                : 'text-slate-500 dark:text-slate-300'
          }`}
        >
          {strength.label}
        </p>
        {PASSWORD_RULES.map((rule) => (
          <div key={rule.key} className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-300">
            <span
              className={`inline-flex h-5 w-5 items-center justify-center rounded-full ${
                strength.checks[rule.key]
                  ? 'bg-emerald-500 text-white'
                  : 'bg-slate-200 text-slate-400 dark:bg-white/10'
              }`}
            >
              <FiCheck size={12} />
            </span>
            {rule.label}
          </div>
        ))}
      </div>
      <Input
        label="Confirm password"
        type={showConfirmPassword ? 'text' : 'password'}
        placeholder="Re-enter password"
        value={values.confirmPassword}
        onChange={handleChange('confirmPassword')}
        icon={<FiLock size={18} />}
        trailing={
          <button
            type="button"
            onClick={() => setShowConfirmPassword((current) => !current)}
            className="text-slate-400 transition hover:text-orange-500"
          >
            {showConfirmPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
          </button>
        }
      />
      {error ? <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-500 dark:bg-red-500/10">{error}</p> : null}
      <Button variant="accent" className="w-full" type="submit">
        Create account
      </Button>
    </form>
  )
}

export default SignupForm
