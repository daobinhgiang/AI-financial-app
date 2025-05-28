"use client"

import React from "react"
import { Link, useLocation } from "react-router-dom"
import { LayoutDashboard, BarChart3, Wallet, Upload, User, Settings, Shield, HelpCircle, Moon, Sun, LucideIcon } from "lucide-react"
import { Button } from "../components/ui/button"
import { Switch } from "../components/ui/switch"
import Separator from "../components/ui/separator"
import { useTheme } from "../context/ThemeContext"
import OinkitLogo from "../assets/Oinkit_logo.png"

interface NavItem {
  icon: LucideIcon;
  label: string;
  path: string;
}

export default function NavigationSidebar() {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const mainNavItems: NavItem[] = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/" },
    { icon: BarChart3, label: "Analytics", path: "/analytics" },
    { icon: Wallet, label: "My Wallet", path: "/wallet" },
    { icon: Upload, label: "Upload Receipts", path: "/upload" },
    { icon: User, label: "My Account", path: "/account" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ]

  const secondaryNavItems: NavItem[] = [
    { icon: Shield, label: "Security", path: "/security" },
    { icon: HelpCircle, label: "IT Help Desk", path: "/help" },
  ]

  return (
    <div className="w-64 h-screen bg-gray-50 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-pink-100 dark:bg-pink-900 rounded-full flex items-center justify-center overflow-hidden">
            <img src={OinkitLogo} alt="OinKit Logo" className="w-8 h-8 object-contain" />
          </div>
          <div>
            <h1 className="font-bold text-gray-900 dark:text-white text-lg">OinKit</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">Budget Tracker 2.0</p>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 p-4">
        <div className="space-y-1">
          {mainNavItems.map((item, index) => {
            const Icon = item.icon
            const isActive = location.pathname === item.path
            return (
              <Link key={index} to={item.path}>
                <Button
                  variant={isActive ? "secondary" : "ghost"}
                  className={`w-full justify-start gap-3 h-12 ${
                    isActive
                      ? "bg-pink-50 dark:bg-pink-900/50 text-pink-700 dark:text-pink-300 hover:bg-pink-100 dark:hover:bg-pink-900/70"
                      : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {item.label}
                </Button>
              </Link>
            )
          })}
        </div>

        <Separator className="my-6" />

        {/* Secondary Navigation */}
        <div className="space-y-1">
          {secondaryNavItems.map((item, index) => {
            const Icon = item.icon
            const isActive = location.pathname === item.path
            return (
              <Link key={index} to={item.path}>
                <Button
                  variant="ghost"
                  className={`w-full justify-start gap-3 h-12 ${
                    isActive
                      ? "bg-pink-50 dark:bg-pink-900/50 text-pink-700 dark:text-pink-300 hover:bg-pink-100 dark:hover:bg-pink-900/70"
                      : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {item.label}
                </Button>
              </Link>
            )
          })}
        </div>

        {/* Dark Mode Toggle */}
        <div className="mt-6">
          <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
            <div className="flex items-center gap-3">
              {theme === 'dark' ? (
                <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              ) : (
                <Sun className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              )}
              <span className="text-gray-600 dark:text-gray-300">Dark Mode</span>
            </div>
            <Switch 
              checked={theme === 'dark'} 
              onCheckedChange={toggleTheme} 
              className="data-[state=checked]:bg-pink-600"
            />
          </div>
        </div>
      </nav> 
    </div>
  )
}
