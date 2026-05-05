import { motion } from 'framer-motion'

const features = [
  {
    icon: '🏆',
    title: 'Unrivaled Destination',
    description: 'The world\'s most visited mall with 100M+ annual visitors.',
  },
  {
    icon: '✨',
    title: 'Luxury Excellence',
    description: 'Highest concentration of luxury brands in the Middle East.',
  },
  {
    icon: '🎭',
    title: 'Entertainment',
    description: 'World-class attractions including Aquarium and VR Park.',
  },
  {
    icon: '📍',
    title: 'Perfect Location',
    description: 'Heart of Downtown Dubai with direct Burj Khalifa access.',
  },
  {
    icon: '🎯',
    title: 'Proven ROI',
    description: 'Industry-leading foot traffic and brand success rates.',
  },
  {
    icon: '🚀',
    title: 'Future Forward',
    description: 'Smart mall technology and omnichannel retail innovation.',
  },
]

export const WhySection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  }

  return (
    <section id="why" className="py-24 bg-black relative overflow-hidden text-white">
      
      {/* 🌌 Background Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">
            Why Choose Us
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 drop-shadow-[0_2px_20px_rgba(0,0,0,0.6)]">
            The Standard of Excellence
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto text-base md:text-lg">
            Why the world’s most prestigious brands choose The Dubai Mall
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative bg-white/[0.02] border border-white/10 p-8 rounded-2xl backdrop-blur-md transition-all duration-300 group-hover:border-gold/50 group-hover:shadow-lg group-hover:shadow-gold/10">
                
                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gold/5 blur-2xl" />

                {/* Icon */}
                <div className="text-5xl mb-6 transform transition duration-300 group-hover:scale-110">
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-gold transition">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                  {feature.description}
                </p>

                {/* Bottom line animation */}
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-gold to-transparent"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}