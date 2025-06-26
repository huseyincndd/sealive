'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

export default function TestimonialSection() {
  return (
    <section className="relative py-32 bg-slate-900 overflow-hidden">
      {/* Simple Background Pattern */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 193, 7, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 193, 7, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side - Logo/Brand */}
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              {/* SEALİVE Logo */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-6xl md:text-8xl font-bold text-white mb-4">
                  <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
                    SEALİVE
                  </span>
                </h2>
                
                {/* Simple Logo Element */}
                <motion.div
                  className="flex justify-center lg:justify-start space-x-2 mt-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="w-8 h-8 bg-yellow-500 transform rotate-45" />
                  <div className="w-6 h-6 bg-yellow-400 transform rotate-12 mt-1" />
                  <div className="w-4 h-4 bg-orange-500 transform -rotate-12 mt-2" />
                </motion.div>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                className="hidden lg:block"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                viewport={{ once: true }}
              >
                <div className="w-24 h-1 bg-yellow-500 mb-6"></div>
                <p className="text-gray-400 text-lg">
                  Global Logistics Excellence Since 2024
                </p>
              </motion.div>
            </motion.div>

            {/* Right Side - Testimonial */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              {/* Quote Icon */}
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Quote className="h-16 w-16 text-yellow-500/30" />
              </motion.div>

              {/* Testimonial Text */}
              <motion.blockquote
                className="text-3xl md:text-4xl font-light text-white leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 1 }}
                viewport={{ once: true }}
              >
                Eos no dico graeci sea, debet nihil omnium quodsi quot dolores percipit.
              </motion.blockquote>

              {/* Client Info */}
              <motion.div
                className="flex items-center space-x-4 pt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">GM</span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-slate-900" />
                </motion.div>
                
                <div>
                  <div className="text-yellow-500 text-sm font-semibold uppercase tracking-wider">
                    Satisfied Client
                  </div>
                  <div className="text-white text-xl font-bold">George Moreno</div>
                  <div className="text-gray-400 text-sm">CEO, Global Trade Corp</div>
                </div>
              </motion.div>

              {/* Rating Stars */}
              <motion.div
                className="flex space-x-1 pt-4"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                viewport={{ once: true }}
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-6 h-6 text-yellow-500"
                    initial={{ opacity: 0, rotate: -180 }}
                    whileInView={{ opacity: 1, rotate: 0 }}
                    transition={{ delay: 0.9 + i * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Yellow Line */}
      <motion.div
        className="absolute bottom-0 left-0 h-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500"
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        transition={{ delay: 1, duration: 2 }}
        viewport={{ once: true }}
      />
    </section>
  )
} 