'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg">
          <div className="flex flex-col p-4 space-y-4">
            <Link
              href="#about"
              onClick={() => setIsOpen(false)}
              className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition"
            >
              About
            </Link>
            <Link
              href="#skills"
              onClick={() => setIsOpen(false)}
              className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition"
            >
              Skills
            </Link>
            <Link
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  )
} 