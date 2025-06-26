'use client'

import React, { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Shield, Package, Truck, Globe, Zap, Star, CheckCircle } from 'lucide-react'

export default function WarehouseSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const solutions = [
    {
      icon: Shield,
      title: "Advanced Security Systems",
      description: "AI-powered monitoring with biometric access control",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Package,
      title: "Smart Inventory Management", 
      description: "Real-time tracking with IoT sensors and automated alerts",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Truck,
      title: "Automated Logistics",
      description: "Robotic systems for efficient loading and distribution",
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: Globe,
      title: "Global Network Integration",
      description: "Seamless connectivity across international hubs",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Zap,
      title: "Lightning Fast Processing",
      description: "Sub-second response times for all operations",
      color: "from-yellow-500 to-orange-500",
    }
  ]

  return (
    <section ref={ref} className="relative py-32 bg-gradient-to-br from-gray-50 via-white to-yellow-50 overflow-hidden">
      {/* Simple Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Minimal Floating Orbs with fixed positions */}
        {[
          { width: 120, height: 100, left: 20, top: 15, delay: 0 },
          { width: 80, height: 80, left: 80, top: 70, delay: 1 },
          { width: 100, height: 120, left: 60, top: 10, delay: 2 },
          { width: 90, height: 90, left: 10, top: 80, delay: 3 },
          { width: 110, height: 95, left: 40, top: 50, delay: 4 }
        ].map((orb, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full bg-gradient-to-br from-yellow-400/10 to-orange-500/10 blur-xl"
            style={{
              width: `${orb.width}px`,
              height: `${orb.height}px`,
              left: `${orb.left}%`,
              top: `${orb.top}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              delay: orb.delay,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Slide from Left */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Enhanced Badge */}
            <motion.div
              className="inline-flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider flex items-center space-x-2"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(255, 193, 7, 0.4)',
                    '0 0 40px rgba(255, 193, 7, 0.8)',
                    '0 0 20px rgba(255, 193, 7, 0.4)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Star className="h-4 w-4" />
                <span>Premium Storage</span>
              </motion.div>
              
              <motion.div
                className="bg-white/70 backdrop-blur-md border border-gray-200/50 rounded-full px-4 py-2 flex items-center space-x-2"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-gray-700">Live Status</span>
              </motion.div>
            </motion.div>

            {/* Main Title */}
            <motion.h2
              className="text-6xl md:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <span className="block bg-gradient-to-r from-gray-900 via-yellow-600 to-gray-900 bg-clip-text text-transparent">
                We'll keep your
              </span>
              <span className="block bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                items damage free
              </span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              className="text-2xl text-gray-600 font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <span className="font-semibold text-yellow-600">Warehouse Storage</span> - 
              Advanced protection protocols ensuring 100% cargo integrity
            </motion.p>

            {/* Solutions Grid */}
            <motion.div
              className="grid gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
            >
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  className="group relative bg-white/60 backdrop-blur-md border border-gray-200/50 rounded-2xl p-6 hover:bg-white/80 transition-all duration-500"
                  whileHover={{ scale: 1.02, y: -5 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
                >
                  {/* Background Gradient on Hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${solution.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
                  />
                  
                  <div className="relative flex items-start space-x-4">
                    <motion.div
                      className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center shadow-lg`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <solution.icon className="h-7 w-7 text-white" />
                    </motion.div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors">
                        {solution.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {solution.description}
                      </p>
                    </div>

                    {/* Check Icon */}
                    <motion.div
                      className="flex-shrink-0"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                    >
                      <CheckCircle className="h-6 w-6 text-green-500" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <motion.button
                className="group relative bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black px-10 py-5 rounded-full font-bold text-lg flex items-center space-x-3 overflow-hidden"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                <Zap className="h-6 w-6 group-hover:rotate-12 transition-transform" />
                <span className="relative">Explore Solutions</span>
                <motion.div
                  className="w-2 h-2 bg-black rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - Simple Visual Display */}
          <motion.div
            className="relative h-[600px]"
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            {/* Main Visual Container with GIF */}
            <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-50 to-yellow-50 relative">
              {/* Background GIF */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="https://milkywayglobal.com/wp-content/uploads/2024/08/source.gif"
                  alt="Logistics Animation"
                  className="w-full h-full object-cover rounded-3xl"
                />
                
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-orange-500/10 rounded-3xl" />
              </div>

              {/* Minimal Corner Badge */}
              <div className="absolute bottom-6 right-6">
                <motion.div
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-lg font-bold text-sm shadow-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 1, delay: 1.2 }}
                >
                  SEALİVE
                </motion.div>
              </div>
            </div>

            {/* Floating Stats */}
            <motion.div
              className="absolute -top-12 -left-12 bg-white/90 backdrop-blur-md border border-gray-200/50 rounded-2xl p-4 shadow-lg"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div className="text-center">
                <motion.div
                  className="text-3xl font-bold text-yellow-600"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  24/7
                </motion.div>
                <div className="text-sm text-gray-600 font-medium">Monitoring</div>
              </div>
            </motion.div>

            {/* Security Badge */}
            <motion.div
              className="absolute -bottom-8 -right-8 bg-green-500 text-white rounded-full w-20 h-20 flex items-center justify-center shadow-lg"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <Shield className="h-8 w-8" />
            </motion.div>

            {/* Capacity Info */}
            <motion.div
              className="absolute top-4 right-4 bg-black/70 text-white rounded-xl p-3 backdrop-blur-sm"
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <div className="text-xs text-gray-300">Container Count</div>
              <motion.div
                className="text-xl font-bold text-yellow-400"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                1,247
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 