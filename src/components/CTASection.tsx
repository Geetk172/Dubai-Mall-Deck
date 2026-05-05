import { motion } from 'framer-motion'

const CTA_VIDEO = {
  id: 'weHez4xgH_Y',
  start: 1350,
  end: 1416,
}

const partnerTypes = [
  {
    icon: '🏪',
    title: 'Retail Leasing',
    description: 'Luxury, flagship & pop-up spaces',
    email: 'leasing@thedubaimall.com',
  },
  {
    icon: '🤝',
    title: 'Sponsorship',
    description: 'Brand partnerships & activations',
    email: 'sponsorship@thedubaimall.com',
  },
  {
    icon: '🎪',
    title: 'Event Booking',
    description: 'Concerts, launches & corporate',
    email: 'events@thedubaimall.com',
  },
]

export const CTASection = () => {
  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden text-white">

      {/* Background Video */}
      <div className="absolute inset-0 opacity-10">
        <iframe
          src={`https://www.youtube.com/embed/${CTA_VIDEO.id}?start=${CTA_VIDEO.start}&end=${CTA_VIDEO.end}&autoplay=1&mute=1&loop=1&playlist=${CTA_VIDEO.id}&controls=0&modestbranding=1&playsinline=1`}
          className="w-full h-full pointer-events-none"
          allow="autoplay"
          title="CTA"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/90" />

      {/* Soft Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-gold/10 blur-[120px] rounded-full" />

      <div className="max-w-5xl mx-auto px-6 md:px-10 relative z-10 text-center">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">
            Let’s Build Together
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Partner With The Future of Retail
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto">
            Join global brands creating unforgettable experiences at the world’s most visited destination.
          </p>
        </motion.div>

        {/* PARTNER OPTIONS */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {partnerTypes.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              onClick={() => window.location.href = `mailto:${item.email}`}
              className="cursor-pointer"
            >
              <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md transition-all duration-300 hover:border-gold/50 hover:bg-white/[0.04]">

                <div className="text-4xl mb-4">{item.icon}</div>

                <h3 className="font-semibold mb-2 group-hover:text-gold">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-400">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MAIN CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-14"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = 'mailto:leasing@thedubaimall.com'}
            className="px-10 py-4 bg-gold text-black font-semibold rounded-full shadow-md shadow-gold/20 hover:shadow-gold/40 transition"
          >
            Start Partnership
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = 'mailto:info@thedubaimall.com'}
            className="px-10 py-4 border border-white text-white rounded-full hover:bg-white/10 transition"
          >
            Download Deck
          </motion.button>
        </motion.div>

        {/* CONTACT */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-sm text-gray-400 border-t border-white/10 pt-8"
        >
          <p className="mb-3">Direct Contact</p>

          <p className="text-2xl font-semibold text-gold mb-4">
            +971 4 362 7500
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-xs">
            <a href="mailto:leasing@thedubaimall.com" className="hover:text-gold">
              leasing@thedubaimall.com
            </a>
            <a href="mailto:events@thedubaimall.com" className="hover:text-gold">
              events@thedubaimall.com
            </a>
            <a href="mailto:sponsorship@thedubaimall.com" className="hover:text-gold">
              sponsorship@thedubaimall.com
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}