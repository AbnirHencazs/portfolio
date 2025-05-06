'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import MobileMenu from './MobileMenu'
import ThemeToggle from './ThemeToggle'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            href="#"
            className="text-xl font-bold text-blue-600 dark:text-blue-400"
          >
            Portfolio
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#about"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition"
            >
              About
            </Link>
            <Link
              href="#skills"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition"
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition"
            >
              Contact
            </Link>
            <ThemeToggle />
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  )
} 