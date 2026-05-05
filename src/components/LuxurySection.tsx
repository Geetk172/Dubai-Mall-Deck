import { motion } from 'framer-motion'

const brands = [
  'HERMÈS', 'CHANEL', 'DIOR', 'LOUIS VUITTON',
  'GUCCI', 'PRADA', 'CARTIER', 'ROLEX',
  'BURBERRY', 'FENDI', 'VALENTINO', 'BALENCIAGA'
]

const LUXURY_VIDEO = {
  id: 'SdcXJLXAM7E',
  start: 129,
  end: 158,
}

export const LuxurySection = () => {
  return (
    <section id="luxury" className="py-24 bg-black relative overflow-hidden text-white">

      {/* Glow */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">
              Luxury Redefined
            </p>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-[0_2px_20px_rgba(0,0,0,0.6)]">
              Where Prestige Meets Experience
            </h2>

            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              Home to the world’s most exclusive luxury brands, curated for a truly premium audience.
            </p>

            <p className="text-gray-400 mb-10">
              Fashion Avenue delivers a refined retail journey across 230,000 sq ft of elegance and global prestige.
            </p>

            {/* BRANDS */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {brands.map((brand, i) => (
                <motion.div
                  key={brand}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                  whileHover={{ y: -4 }}
                  className="text-sm font-semibold text-gray-500 tracking-wide cursor-pointer transition hover:text-gold"
                >
                  {brand}
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gold text-black font-semibold rounded-full shadow-md shadow-gold/20 hover:shadow-gold/40 transition"
            >
              Explore Premium Leasing
            </motion.button>
          </motion.div>

          {/* RIGHT VIDEO */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-md shadow-xl shadow-black/40">

              <iframe
                src={`https://www.youtube.com/embed/${LUXURY_VIDEO.id}?start=${LUXURY_VIDEO.start}&end=${LUXURY_VIDEO.end}&autoplay=1&mute=1&loop=1&playlist=${LUXURY_VIDEO.id}&controls=0&modestbranding=1&playsinline=1`}
                className="w-full h-full scale-105"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Luxury Experience"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Floating glow */}
            <motion.div
              animate={{ y: [0, -20, 0], opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-10 -right-10 w-40 h-40 bg-gold/20 rounded-full blur-3xl"
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}