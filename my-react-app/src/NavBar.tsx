"use client"

import { useState } from "react"
import { LayoutDashboard, BarChart3, Wallet, Upload, User, Settings, Shield, HelpCircle, Moon, Sun } from "lucide-react"
    import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"

export default function NavigationSidebar() {
  const [darkMode, setDarkMode] = useState(false)

  const mainNavItems = [
    { icon: LayoutDashboard, label: "Dashboard", active: true },
    { icon: BarChart3, label: "Analytics", active: false },
    { icon: Wallet, label: "My Wallet", active: false },
    { icon: Upload, label: "Upload Receipts", active: false },
    { icon: User, label: "My Account", active: false },
    { icon: Settings, label: "Settings", active: false },
  ]

  const secondaryNavItems = [
    { icon: Shield, label: "Security", active: false },
    { icon: HelpCircle, label: "IT Help Desk", active: false },
  ]

  return (
    <div className="w-64 h-screen bg-gray-50 border-r border-gray-200 flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
            <span className="text-pink-600 font-bold text-lg">🐷</span>
          </div>
          <div>
            <h1 className="font-bold text-gray-900 text-lg">OinKit</h1>
            <p className="text-sm text-gray-500">Budget Tracker 2.0</p>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 p-4">
        <div className="space-y-1">
          {mainNavItems.map((item, index) => {
            const Icon = item.icon
            return (
              <Button
                key={index}
                variant={item.active ? "secondary" : "ghost"}
                className={`w-full justify-start gap-3 h-12 ${
                  item.active
                    ? "bg-pink-50 text-pink-700 hover:bg-pink-100"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                <Icon className="w-5 h-5" />
                {item.label}
              </Button>
            )
          })}
        </div>

        <Separator className="my-6" />

        {/* Secondary Navigation */}
        <div className="space-y-1">
          {secondaryNavItems.map((item, index) => {
            const Icon = item.icon
            return (
              <Button
                key={index}
                variant="ghost"
                className="w-full justify-start gap-3 h-12 text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              >
                <Icon className="w-5 h-5" />
                {item.label}
              </Button>
            )
          })}
        </div>

        {/* Dark Mode Toggle */}
        <div className="mt-6">
          <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-100">
            <div className="flex items-center gap-3">
              {darkMode ? <Moon className="w-5 h-5 text-gray-600" /> : <Sun className="w-5 h-5 text-gray-600" />}
              <span className="text-gray-600">Dark Mode</span>
            </div>
            <Switch checked={darkMode} onCheckedChange={setDarkMode} className="data-[state=checked]:bg-pink-600" />
          </div>
        </div>
      </nav>
    </div>
  )
}
