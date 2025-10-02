'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="bg-primary text-white shadow-lg">
      {/* Top Contact Bar */}
      <div className="bg-primary-foreground text-primary py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-accent" />
              <span>(212) 555-0123</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-accent" />
              <span>info@nycconstructionpros.com</span>
            </div>
          </div>
          <div className="text-sm">
            <span className="text-accent font-semibold">Free Estimates</span> | Licensed & Insured
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="bg-accent p-2 rounded-lg">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-accent font-bold text-lg">NYC</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold">NYC BUILDERS</span>
              <span className="text-sm text-accent">Construction Professionals</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className="hover:text-accent transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="hover:text-accent transition-colors duration-200 font-medium"
            >
              Services
            </Link>
            <Link
              href="/projects"
              className="hover:text-accent transition-colors duration-200 font-medium"
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="hover:text-accent transition-colors duration-200 font-medium"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="hover:text-accent transition-colors duration-200 font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-dark transition-colors duration-200"
            >
              Get Free Quote
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 hover:bg-primary-light rounded-lg transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-primary-light border-t border-primary-dark">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="/"
              className="text-white hover:text-accent transition-colors duration-200 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-white hover:text-accent transition-colors duration-200 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/projects"
              className="text-white hover:text-accent transition-colors duration-200 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-accent transition-colors duration-200 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-accent transition-colors duration-200 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="bg-accent text-white px-6 py-3 rounded-lg font-semibold text-center mt-4 hover:bg-accent-dark transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Free Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}