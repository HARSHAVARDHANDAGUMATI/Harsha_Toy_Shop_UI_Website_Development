import { Component } from 'react'
import Button from './Button'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center gap-4 px-6 text-center">
          <h1 className="text-3xl font-black text-slate-900 dark:text-white">Something playful slipped.</h1>
          <p className="text-slate-500 dark:text-slate-300">
            Refresh the page to continue exploring the toy shop experience.
          </p>
          <Button onClick={() => window.location.reload()}>Refresh</Button>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
