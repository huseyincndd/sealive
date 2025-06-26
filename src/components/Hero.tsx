'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react'
import { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [progress, setProgress] = useState(0)

  const SLIDE_DURATION = 5000 // 5 seconds per slide
  const PROGRESS_INTERVAL = 50 // Update progress every 50ms

  const slides = [
    {
      id: 1,
      image: 'https://villaqrmenu.b-cdn.net/sealive/A%C3%A7%C4%B1k%20Kargo%20ve%20Sar%C4%B1%20Zemin.png',
      title: 'Fast and reliable',
      subtitle: 'Next-Gen Logistics',
      description: 'Experience the future of freight forwarding with AI-powered solutions',
    },
    {
      id: 2,
      image: 'https://globefarer.qodeinteractive.com/wp-content/uploads/2021/10/cargo-home-slider-img-2-new.jpg', 
      title: 'Package safety',
      subtitle: 'Smart Protection',
      description: 'Advanced security systems protecting your cargo 24/7 worldwide',
    },
    {
      id: 3,
      image: 'https://globefarer.qodeinteractive.com/wp-content/uploads/2021/10/cargo-home-slider-img-3-new.jpg',
      title: 'Always on time',
      subtitle: 'Precision Delivery',
      description: 'Real-time tracking and predictive logistics for guaranteed delivery',
    }
  ]

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => {
      const next = (prev + 1) % slides.length
      setProgress(0)
      return next
    })
  }, [slides.length])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => {
      const previous = (prev - 1 + slides.length) % slides.length
      setProgress(0)
      return previous
    })
  }, [slides.length])

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index)
    setProgress(0)
  }, [])

  const toggleAutoplay = () => {
    setIsPlaying(!isPlaying)
  }

  // Progress bar and auto-slide with precise timing
  useEffect(() => {
    if (!isPlaying) return

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + (PROGRESS_INTERVAL / SLIDE_DURATION) * 100
        
        if (newProgress >= 100) {
          setCurrentSlide((currentSlide) => (currentSlide + 1) % slides.length)
          return 0
        }
        
        return newProgress
      })
    }, PROGRESS_INTERVAL)

    return () => clearInterval(progressTimer)
  }, [isPlaying, slides.length])

  // Reset progress when slide changes manually
  useEffect(() => {
    setProgress(0)
  }, [currentSlide])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide()
      if (e.key === 'ArrowRight') nextSlide()
      if (e.key === ' ') {
        e.preventDefault()
        toggleAutoplay()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [nextSlide, prevSlide])

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>

      {/* Main Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-left text-white"
              >
                {/* Subtitle */}
                <motion.p
                  className="text-yellow-400 text-xl font-semibold mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {slides[currentSlide].subtitle}
                </motion.p>

                {/* Title */}
                <motion.h1
                  className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {slides[currentSlide].title}
                </motion.h1>

                {/* Description */}
                <motion.p
                  className="text-xl text-gray-200 mb-8 max-w-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {slides[currentSlide].description}
                </motion.p>

                {/* CTA Button */}
                <motion.button
                  className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-bold text-lg transition-colors duration-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Play/Pause Button */}
      <button
        onClick={toggleAutoplay}
        className="absolute top-6 right-6 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
        aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
      >
        {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
      </button>

      {/* Slide Indicators with Progress */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative w-12 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              {index === currentSlide && isPlaying && (
                <div 
                  className="absolute top-0 left-0 h-full bg-yellow-500 rounded-full transition-all duration-100 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-8 right-8 z-20 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
        <div className="text-white text-sm font-medium">
          <span className="text-yellow-400 font-bold">{String(currentSlide + 1).padStart(2, '0')}</span>
          <span className="text-white/60 mx-1">/</span>
          <span className="text-white/60">{String(slides.length).padStart(2, '0')}</span>
        </div>
      </div>
    </section>
  )
} 