"use client"

import React from "react"
import { Link, useLocation } from "react-router-dom"
import { LayoutDashboard, BarChart3, Wallet, Upload, User, Settings, Shield, HelpCircle, Moon, Sun, LucideIcon } from "lucide-react"
import { Button } from "../ui/button"
import { Switch } from "../ui/switch"
import Separator from "../ui/separator"
import { useTheme } from "../../context/ThemeContext"
import OinkitLogo from "../../assets/Oinkit_logo.png"
import "./NavBar.css"

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
    <div className="navbar-container">
      {/* Header */}
      <div className="navbar-header">
        <div className="logo-container">
          <div className="logo-image-container">
            <img src={OinkitLogo} alt="OinKit Logo" className="logo-image" />
          </div>
          <div>
            <h1 className="logo-title">OinKit</h1>
            <p className="logo-subtitle">Budget Tracker 2.0</p>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="nav-content">
        <div className="nav-items">
          {mainNavItems.map((item, index) => {
            const Icon = item.icon
            const isActive = location.pathname === item.path
            return (
              <Link key={index} to={item.path}>
                <Button
                  variant={isActive ? "secondary" : "ghost"}
                  className={`nav-button ${isActive ? 'active' : ''}`}
                >
                  <Icon className="nav-icon" />
                  {item.label}
                </Button>
              </Link>
            )
          })}
        </div>

        <Separator className="my-6" />

        {/* Secondary Navigation */}
        <div className="nav-items">
          {secondaryNavItems.map((item, index) => {
            const Icon = item.icon
            const isActive = location.pathname === item.path
            return (
              <Link key={index} to={item.path}>
                <Button
                  variant="ghost"
                  className={`nav-button ${isActive ? 'active' : ''}`}
                >
                  <Icon className="nav-icon" />
                  {item.label}
                </Button>
              </Link>
            )
          })}
        </div>

        {/* Dark Mode Toggle */}
        <div className="theme-toggle">
          <div className="theme-toggle-container">
            <div className="theme-toggle-content">
              {theme === 'dark' ? (
                <Moon className="theme-icon" />
              ) : (
                <Sun className="theme-icon" />
              )}
              <span className="theme-text">Dark Mode</span>
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
