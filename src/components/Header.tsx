'use client'

import { motion } from 'framer-motion'
import { Ship, Menu, X, ArrowRight, Zap } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { name: 'Services', href: '#services', icon: '🚢' },
    { name: 'Tracking', href: '#tracking', icon: '📍' },
    { name: 'About', href: '#about', icon: '🌍' },
    { name: 'Contact', href: '#contact', icon: '💬' },
  ]

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      className="fixed w-full top-6 z-50 px-6"
    >
      <div className="container mx-auto">
        <motion.div
          className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden"
          style={{
            transform: `translateY(${scrollY * 0.01}px)`,
          }}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
        >
          {/* Simple Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-orange-500/5 to-yellow-400/10" />

          <div className="relative px-8 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <motion.div 
                className="flex items-center space-x-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="relative"
                  animate={{
                    rotateY: scrollY * 0.2,
                  }}
                >
                  <div className="relative w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Ship className="h-6 w-6 text-white" />
                  </div>
                </motion.div>
                
                <div>
                  <motion.span 
                    className="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 bg-clip-text text-transparent"
                  >
                    SEALİVE
                  </motion.span>
                  <div className="text-xs text-gray-600 font-medium">
                    Next-Gen Logistics
                  </div>
                </div>
              </motion.div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-2">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="group relative px-6 py-3 rounded-2xl transition-all duration-300"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative flex items-center space-x-2">
                      <span className="text-lg">{item.icon}</span>
                      <span className="text-gray-700 group-hover:text-gray-900 font-medium transition-colors">
                        {item.name}
                      </span>
                    </div>
                  </motion.a>
                ))}
              </nav>

              {/* CTA Button */}
              <motion.button
                className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <Zap className="h-4 w-4 group-hover:rotate-12 transition-transform" />
                <span>Get Quote</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                className="md:hidden relative w-10 h-10 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-xl flex items-center justify-center"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  animate={{ rotate: isMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMenuOpen ? (
                    <X className="h-5 w-5 text-gray-700" />
                  ) : (
                    <Menu className="h-5 w-5 text-gray-700" />
                  )}
                </motion.div>
              </motion.button>
            </div>

            {/* Mobile Menu */}
            <motion.nav
              className="md:hidden overflow-hidden"
              initial={false}
              animate={{
                height: isMenuOpen ? 'auto' : 0,
                opacity: isMenuOpen ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="pt-6 pb-4 space-y-2">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-yellow-400/10 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                      opacity: isMenuOpen ? 1 : 0, 
                      x: isMenuOpen ? 0 : -20 
                    }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-gray-700 font-medium">{item.name}</span>
                  </motion.a>
                ))}
                
                <motion.button
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-xl font-semibold mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: isMenuOpen ? 1 : 0, 
                    y: isMenuOpen ? 0 : 20 
                  }}
                  transition={{ delay: 0.4 }}
                >
                  <Zap className="h-4 w-4" />
                  <span>Get Quote</span>
                </motion.button>
              </div>
            </motion.nav>
          </div>
        </motion.div>
      </div>
    </motion.header>
  )
} 