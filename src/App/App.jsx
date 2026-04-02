import { BrowserRouter } from 'react-router-dom'
import AppProviders from './providers'
import AppRoutes from './routes'

const AppShell = () => (
  <BrowserRouter>
    <AppProviders>
      <AppRoutes />
    </AppProviders>
  </BrowserRouter>
)

export default AppShell
