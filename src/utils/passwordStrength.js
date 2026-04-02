export const getPasswordStrength = (password) => {
  const checks = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /\d/.test(password),
    symbol: /[^A-Za-z0-9]/.test(password),
  }

  const score = Object.values(checks).filter(Boolean).length

  if (!password) {
    return { score: 0, label: 'Start typing', tone: 'neutral', checks }
  }

  if (score <= 2) {
    return { score, label: 'Weak password', tone: 'weak', checks }
  }

  if (score === 3 || score === 4) {
    return { score, label: 'Decent password', tone: 'medium', checks }
  }

  return { score, label: 'Strong password', tone: 'strong', checks }
}
