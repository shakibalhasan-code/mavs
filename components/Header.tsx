'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const menuVariants = {
    closed: { x: '100%' },
    open: { x: 0 },
  }

  return (
    <header className="bg-canada-red text-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="https://static.wixstatic.com/media/10ebe1_68b2f0ffecf24743ae54f7d8614fd47b~mv2.jpg/v1/fill/w_410,h_446,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/10ebe1_68b2f0ffecf24743ae54f7d8614fd47b~mv2.jpg"
              alt="Mavs Academy Logo"
              className="h-12 w-auto"
            />
            <span className="font-bold text-xl">Mavs Academy</span>
          </Link>
          <nav className="hidden md:flex space-x-10">
            <Link href="/" className="text-base font-medium hover:text-gray-200 transition-colors">
              Home
            </Link>
            <Link href="#courses" className="text-base font-medium hover:text-gray-200 transition-colors">
              Courses
            </Link>
            <Link href="/about" className="text-base font-medium hover:text-gray-200 transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-base font-medium hover:text-gray-200 transition-colors">
              Contact
            </Link>
          </nav>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-white hover:text-gray-200 transition-colors"
            >
              <span className="sr-only">Open menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-0 right-0 bottom-0 w-64 bg-white shadow-xl z-50"
          >
            <div className="p-5">
              <div className="flex justify-between items-center mb-8">
                <Link href="/" className="flex items-center space-x-2">
                  <img
                    src="https://static.wixstatic.com/media/10ebe1_68b2f0ffecf24743ae54f7d8614fd47b~mv2.jpg/v1/fill/w_410,h_446,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/10ebe1_68b2f0ffecf24743ae54f7d8614fd47b~mv2.jpg"
                    alt="Mavs Academy Logo"
                    className="h-12 w-auto"
                  />
                  <span className="font-bold text-xl text-gray-900">Mavs Academy</span>
                </Link>
                <button
                  onClick={toggleMenu}
                  className="p-2 rounded-md text-gray-500 hover:text-gray-900 transition-colors"
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <nav className="flex flex-col space-y-4">
                <Link href="/" className="text-base font-medium text-gray-900 hover:text-canada-red transition-colors">
                  Home
                </Link>
                <Link href="#courses" className="text-base font-medium text-gray-900 hover:text-canada-red transition-colors">
                  Courses
                </Link>
                <Link href="/about" className="text-base font-medium text-gray-900 hover:text-canada-red transition-colors">
                  About
                </Link>
                <Link href="#contact" className="text-base font-medium text-gray-900 hover:text-canada-red transition-colors">
                  Contact
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header

