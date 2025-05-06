'use client'

import { useState, useRef, useEffect } from 'react'
import { useTheme } from './ThemeProvider'
import { MdComputer, MdLightMode, MdDarkMode } from 'react-icons/md'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const getIconColor = () => {
    switch (theme) {
      case 'light':
        return 'text-yellow-500'
      case 'dark':
        return 'text-blue-400'
      default:
        return 'text-gray-600 dark:text-gray-300'
    }
  }

  const options = [
    { value: 'system', label: 'System', icon: <MdComputer className="w-5 h-5" /> },
    { value: 'light', label: 'Light', icon: <MdLightMode className="w-5 h-5" /> },
    { value: 'dark', label: 'Dark', icon: <MdDarkMode className="w-5 h-5" /> }
  ]

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-800 transition-colors"
        aria-label="Change theme"
      >
        <span className={getIconColor()}>
          {options.find(opt => opt.value === theme)?.icon}
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-lg bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 py-1">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                setTheme(option.value as 'system' | 'light' | 'dark')
                setIsOpen(false)
              }}
              className={`w-full px-4 py-2 text-left flex items-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                theme === option.value ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              {option.icon}
              <span>{option.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}