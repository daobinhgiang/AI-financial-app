import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'

const RootLayout = () => {
  return (
    <div className="flex min-h-screen w-full">
      <Navbar />
      <main className="flex-1 ml-64 min-h-screen w-full">
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout;