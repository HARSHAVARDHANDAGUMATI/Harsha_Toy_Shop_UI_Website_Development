import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiCheckCircle, FiCreditCard, FiDollarSign, FiSmartphone } from 'react-icons/fi'
import Button from '../components/common/Button'
import Input from '../components/common/Input'
import { useCart } from '../context/CartContext'
import { formatCurrency } from '../utils/formatCurrency'

const paymentMethods = [
  {
    id: 'upi',
    title: 'UPI',
    copy: 'Pay instantly with any UPI ID.',
    icon: <FiSmartphone size={18} />,
  },
  {
    id: 'card',
    title: 'Credit / Debit Card',
    copy: 'Use a secure card payment flow.',
    icon: <FiCreditCard size={18} />,
  },
  {
    id: 'cod',
    title: 'Cash on Delivery',
    copy: 'Pay when your order reaches you.',
    icon: <FiDollarSign size={18} />,
  },
]

const Checkout = () => {
  const { cartItems, subtotal, savings, totalItems, clearCart } = useCart()
  const [paymentMethod, setPaymentMethod] = useState('upi')
  const [submitted, setSubmitted] = useState(false)
  const [values, setValues] = useState({
    upiId: '',
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  })
  const [error, setError] = useState('')

  const shipping = subtotal > 4000 ? 0 : 399
  const total = subtotal + shipping

  const selectedMethod = useMemo(
    () => paymentMethods.find((method) => method.id === paymentMethod),
    [paymentMethod],
  )

  const handleChange = (field) => (event) => {
    setError('')
    setValues((current) => ({ ...current, [field]: event.target.value }))
  }

  const validate = () => {
    if (paymentMethod === 'upi' && !values.upiId.trim()) {
      return 'Please enter your UPI ID.'
    }

    if (
      paymentMethod === 'card' &&
      (!values.cardName.trim() ||
        !values.cardNumber.trim() ||
        !values.expiry.trim() ||
        !values.cvv.trim())
    ) {
      return 'Please fill in all card details.'
    }

    return ''
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const validationError = validate()

    if (validationError) {
      setError(validationError)
      return
    }

    setSubmitted(true)
    clearCart()
  }

  if (!cartItems.length && !submitted) {
    return (
      <section className="rounded-[1.8rem] border border-dashed border-slate-300 bg-white/80 px-4 py-14 text-center dark:border-white/10 dark:bg-white/5 sm:rounded-[2.5rem] sm:px-6 sm:py-20">
        <h1 className="text-[2rem] font-black text-slate-900 dark:text-white sm:text-4xl">Your cart is empty</h1>
        <p className="mx-auto mt-4 max-w-xl text-slate-500 dark:text-slate-300">
          Add items to the cart first, then continue to checkout to choose a payment method.
        </p>
        <Button as={Link} to="/products" variant="accent" className="mt-6">
          Browse products
        </Button>
      </section>
    )
  }

  if (submitted) {
    return (
      <section className="mx-auto max-w-3xl rounded-[1.8rem] border border-emerald-200 bg-white/90 p-5 text-center shadow-[0_20px_80px_rgba(16,185,129,0.14)] dark:border-emerald-500/20 dark:bg-white/5 sm:rounded-[2.5rem] sm:p-10">
        <FiCheckCircle className="mx-auto text-6xl text-emerald-500" />
        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.32em] text-emerald-500">
          Payment Success
        </p>
        <h1 className="mt-3 text-[2rem] font-black text-slate-900 dark:text-white sm:text-4xl">
          Your order is confirmed
        </h1>
        <p className="mt-4 text-slate-500 dark:text-slate-300">
          Payment via {selectedMethod?.title ?? 'selected method'} was successful. Your toy order is
          being prepared and you will receive delivery updates soon.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button as={Link} to="/" variant="accent" className="w-full sm:w-auto">
            Back to home
          </Button>
          <Button as={Link} to="/products" variant="secondary" className="w-full sm:w-auto">
            Continue shopping
          </Button>
        </div>
      </section>
    )
  }

  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_360px] lg:gap-8">
      <section className="space-y-5 rounded-[1.8rem] border border-white/60 bg-white/85 p-4 backdrop-blur dark:border-white/10 dark:bg-white/5 sm:space-y-6 sm:rounded-[2.5rem] sm:p-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-orange-500">Checkout</p>
          <h1 className="mt-2 text-[2rem] font-black text-slate-900 dark:text-white sm:text-4xl">
            Choose your payment method
          </h1>
          <p className="mt-3 text-slate-500 dark:text-slate-300">
            Complete your order with UPI, card payment, or cash on delivery.
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-3 md:gap-4">
          {paymentMethods.map((method) => (
            <button
              key={method.id}
              type="button"
              onClick={() => {
                setPaymentMethod(method.id)
                setError('')
              }}
              className={`rounded-[1.6rem] border p-4 text-left transition sm:rounded-[2rem] sm:p-5 ${
                paymentMethod === method.id
                  ? 'border-orange-300 bg-orange-50 shadow-[0_16px_40px_rgba(249,115,22,0.12)] dark:border-orange-400/40 dark:bg-orange-500/10'
                  : 'border-slate-200 bg-white hover:-translate-y-1 dark:border-white/10 dark:bg-slate-900/40'
              }`}
            >
              <div className="inline-flex rounded-2xl bg-slate-100 p-3 text-slate-700 dark:bg-white/10 dark:text-white">
                {method.icon}
              </div>
              <h2 className="mt-4 text-lg font-black text-slate-900 dark:text-white">{method.title}</h2>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-300">{method.copy}</p>
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 rounded-[1.6rem] bg-slate-50/90 p-4 dark:bg-slate-900/50 sm:rounded-[2rem] sm:p-5">
          {paymentMethod === 'upi' ? (
            <Input
              label="UPI ID"
              placeholder="yourname@upi"
              value={values.upiId}
              onChange={handleChange('upiId')}
            />
          ) : null}

          {paymentMethod === 'card' ? (
            <div className="grid gap-4 md:grid-cols-2">
              <Input
                label="Cardholder Name"
                placeholder="Harsha"
                value={values.cardName}
                onChange={handleChange('cardName')}
                containerClassName="md:col-span-2"
              />
              <Input
                label="Card Number"
                placeholder="1234 5678 9012 3456"
                value={values.cardNumber}
                onChange={handleChange('cardNumber')}
                containerClassName="md:col-span-2"
              />
              <Input
                label="Expiry"
                placeholder="MM/YY"
                value={values.expiry}
                onChange={handleChange('expiry')}
              />
              <Input
                label="CVV"
                placeholder="123"
                value={values.cvv}
                onChange={handleChange('cvv')}
              />
            </div>
          ) : null}

          {paymentMethod === 'cod' ? (
            <div className="rounded-[1.8rem] border border-orange-100 bg-white px-4 py-4 text-sm font-semibold text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-100">
              Cash on delivery selected. Payment will be collected when the order arrives.
            </div>
          ) : null}

          {error ? (
            <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-500 dark:bg-red-500/10">
              {error}
            </p>
          ) : null}

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button type="submit" variant="accent" className="w-full sm:w-auto">
              Pay now
            </Button>
            <Button as={Link} to="/cart" variant="secondary" className="w-full sm:w-auto">
              Back to cart
            </Button>
          </div>
        </form>
      </section>

      <aside className="h-fit space-y-5 rounded-[1.6rem] border border-white/60 bg-white/90 p-4 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur dark:border-white/10 dark:bg-white/5 sm:rounded-[2rem] sm:p-6 lg:sticky lg:top-28">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-orange-500">Payment Summary</p>
          <h2 className="mt-2 text-2xl font-black text-slate-900 dark:text-white">Order overview</h2>
        </div>
        <div className="space-y-4 text-sm text-slate-500 dark:text-slate-300">
          <div className="flex items-center justify-between">
            <span>Items ({totalItems})</span>
            <span className="font-semibold text-slate-900 dark:text-white">{formatCurrency(subtotal)}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Savings</span>
            <span className="font-semibold text-emerald-500">{formatCurrency(savings)}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Shipping</span>
            <span className="font-semibold text-slate-900 dark:text-white">
              {shipping === 0 ? 'Free' : formatCurrency(shipping / 83)}
            </span>
          </div>
          <div className="border-t border-dashed border-slate-200 pt-4 dark:border-white/10">
            <div className="flex items-center justify-between">
              <span className="text-base font-semibold text-slate-900 dark:text-white">Total</span>
              <span className="text-2xl font-black text-slate-900 dark:text-white">
                {formatCurrency(total / 83)}
              </span>
            </div>
          </div>
        </div>
      </aside>
    </div>
  )
}

export default Checkout
