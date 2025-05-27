import { useState } from 'react'
import NavigationSidebar from './components/NavBar'
import './App.css'

function App() {
  return (
    <div className="flex">
      <NavigationSidebar />
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold">Welcome to OinKit</h1>
        <p className="mt-4 text-gray-600">Your personal finance companion</p>
      </main>
    </div>
  )
}

export default App
