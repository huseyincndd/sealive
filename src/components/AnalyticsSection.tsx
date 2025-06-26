'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { TrendingUp, BarChart3, Users, Star, Quote } from 'lucide-react'
import Image from 'next/image'

export default function AnalyticsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const features = [
    {
      icon: TrendingUp,
      title: "Real-time Analytics",
      description: "Live tracking and performance metrics",
    },
    {
      icon: BarChart3,
      title: "Smart Routing",
      description: "AI-optimized delivery paths",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Seamless workflow management",
    },
  ]

  return (
    <section ref={ref} className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Side - Hanging Container Animation */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: -100 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative h-[600px] flex items-center justify-center">
              {/* Hanging Container with Rope Animation */}
              <motion.div
                className="relative"
                initial={{ y: -300, rotate: -5 }}
                animate={isInView ? { y: 0, rotate: 0 } : {}}
                transition={{ 
                  duration: 2.5, 
                  delay: 0.8, 
                  ease: "easeOut",
                  type: "spring",
                  damping: 8,
                  stiffness: 50
                }}
              >
                {/* Gentle Swaying Animation for Hanging Effect */}
                <motion.div
                  animate={{
                    rotate: [-1, 1, -1],
                    y: [0, -5, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Image
                    src="https://villaqrmenu.b-cdn.net/sealive/SEALIVE%20Konteynerin%20Kald%C4%B1r%C4%B1lmas%C4%B1-Photoroom.png"
                    alt="Hanging SEALİVE Container"
                    width={500}
                    height={500}
                    className="object-contain drop-shadow-2xl"
                  />
                </motion.div>
              </motion.div>
            </div>

            {/* Badge */}
            <motion.div
              className="absolute -top-6 -left-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-full font-bold text-sm"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 2.1 }}
            >
              Container Lifting
            </motion.div>
          </motion.div>

          {/* Right Content - Slide from Right */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            {/* Section Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Railway
                <span className="block text-yellow-500">cargo</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Advanced analytics and real-time monitoring for optimal cargo management and delivery performance.
              </p>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              className="grid gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="group bg-gray-50 hover:bg-white p-6 rounded-2xl transition-all duration-500 border hover:border-yellow-200 hover:shadow-lg"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-start space-x-4">
                    <motion.div
                      className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <feature.icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Testimonial */}
            <motion.div
              className="bg-gradient-to-br from-gray-50 to-yellow-50 p-8 rounded-2xl border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <div className="flex items-start space-x-4">
                <Quote className="h-8 w-8 text-yellow-500 flex-shrink-0 mt-2" />
                <div>
                  <p className="text-gray-700 italic text-lg leading-relaxed mb-4">
                    "SEALİVE has revolutionized our logistics operations with their cutting-edge technology and exceptional service quality."
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">GM</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">George Moreno</div>
                      <div className="text-sm text-gray-600">Logistics Director</div>
                    </div>
                    <div className="flex space-x-1 ml-auto">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 