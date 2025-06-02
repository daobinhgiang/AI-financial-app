import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
// import NavigationSidebar from './components/Navbar/Navbar'
import Dashboard from './pages/Dashboard'
import Analytics from './pages/Analytics'
import Wallet from './pages/Wallet'
import Upload from './pages/Upload'
import Account from './pages/Account'
import Settings from './pages/Settings'
import { ThemeProvider } from './context/ThemeContext'
import './App.css'
import RootLayout from './layout/RootLayout'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/account" element={<Account />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    )
  )

  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
