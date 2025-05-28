import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavigationSidebar from './components/NavBar'
import Dashboard from './pages/Dashboard'
import Analytics from './pages/Analytics'
import Wallet from './pages/Wallet'
import Upload from './pages/Upload'
import Account from './pages/Account'
import Settings from './pages/Settings'
import { ThemeProvider } from './context/ThemeContext'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
          <NavigationSidebar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/wallet" element={<Wallet />} />
              <Route path="/upload" element={<Upload />} />
              <Route path="/account" element={<Account />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
