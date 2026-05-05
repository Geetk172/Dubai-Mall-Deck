import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState, useEffect } from 'react'

// VIDEO WITH EXACT TIMESTAMPS
const HERO_VIDEO = {
  id: 'oOoDvZRM1Lk',
  start: 0,
  end: 20,
}

export const Hero = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 text-white"
    >
      {/* 🎥 Background Video */}
      <div className="absolute inset-0 z-0">
        <iframe
          src={`https://www.youtube.com/embed/${HERO_VIDEO.id}?start=${HERO_VIDEO.start}&end=${HERO_VIDEO.end}&autoplay=1&mute=1&loop=1&playlist=${HERO_VIDEO.id}&controls=0&modestbranding=1&playsinline=1`}
          className="absolute inset-0 w-full h-full opacity-40 scale-110 pointer-events-none"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Dubai Mall Hero"
        />

        {/* 🌑 Strong Overlay */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      </div>

      {/* ✨ Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 max-w-6xl mx-auto py-20"
      >
        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-gold font-semibold tracking-wide mb-6 text-sm md:text-base"
        >
          WORLD'S PREMIER DESTINATION
        </motion.p>

        {/* Main Title */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-6 text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.8)]"
        >
          The Dubai Mall Experience
        </motion.h1>

        {/* Subtitle Text */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Where luxury, scale, and unforgettable experiences come together
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollTo('why')}
            className="px-8 py-3 md:px-10 md:py-4 bg-gold text-black font-semibold rounded-full hover:bg-gold/90 transition-all duration-300 shadow-lg shadow-gold/20"
          >
            Explore Now
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollTo('contact')}
            className="px-8 py-3 md:px-10 md:py-4 border border-white/30 text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            Partnership Inquiries
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16 pt-16 border-t border-white/10"
        >
          {[
            { value: '100M+', label: 'Annual Visitors' },
            { value: '1,200+', label: 'Brands' },
            { value: '200+', label: 'Dining' },
            { value: '5.9M', label: 'Sq Ft' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold mb-2">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* ⬇️ Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer z-10"
        onClick={() => scrollTo('why')}
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-xs text-gray-400 font-medium">
            SCROLL TO EXPLORE
          </p>
          <ChevronDown size={20} className="text-gold animate-bounce" />
        </div>
      </motion.div>
    </section>
  )
}