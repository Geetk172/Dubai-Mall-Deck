import { motion } from 'framer-motion'

const DINING_VIDEO = {
  id: 'RBkJxcVfx04',
  start: 20,
  end: 60,
}

const diningFeatures = [
  { icon: '⭐', text: 'Michelin-starred restaurants' },
  { icon: '🍽️', text: 'International cuisine selection' },
  { icon: '☕', text: 'Premium cafés & lounges' },
  { icon: '🍰', text: 'Artisan bakeries & desserts' },
]

export const DiningSection = () => {
  return (
    <section id="dining" className="py-24 bg-black relative overflow-hidden text-white">

      {/* Soft Glow */}
      <div className="absolute top-1/2 left-0 w-[350px] h-[350px] bg-gold/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* VIDEO (LEFT) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-md shadow-xl shadow-black/40">

              <iframe
                src={`https://www.youtube.com/embed/${DINING_VIDEO.id}?start=${DINING_VIDEO.start}&end=${DINING_VIDEO.end}&autoplay=1&mute=1&loop=1&playlist=${DINING_VIDEO.id}&controls=0&modestbranding=1&playsinline=1`}
                className="w-full h-full scale-105"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Dining"
              />

              {/* Soft overlay */}
              <div className="absolute inset-0 bg-black/25" />
            </div>

            {/* subtle floating glow */}
            <motion.div
              animate={{ opacity: [0.15, 0.4, 0.15] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-8 -right-8 w-32 h-32 bg-gold/20 rounded-full blur-3xl"
            />
          </motion.div>

          {/* CONTENT (RIGHT) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">
              Culinary Experience
            </p>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              A World of Taste
            </h2>

            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Discover exceptional dining experiences crafted by world-renowned chefs across 200+ premium outlets.
            </p>

            <p className="text-gray-400 mb-10">
              From refined tasting menus to casual indulgence, every moment is designed to delight.
            </p>

            {/* FEATURES */}
            <div className="space-y-5 mb-10">
              {diningFeatures.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 text-gray-300 group cursor-pointer"
                >
                  <span className="text-xl transition-transform group-hover:scale-110">
                    {item.icon}
                  </span>

                  <span className="group-hover:text-gold transition">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gold text-black font-semibold rounded-full shadow-md shadow-gold/20 hover:shadow-gold/40 transition"
            >
              Explore Dining
            </motion.button>
          </motion.div>

        </div>
      </div>
    </section>
  )
}