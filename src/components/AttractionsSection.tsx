import { motion } from 'framer-motion'

const ENTERTAINMENT_VIDEO = {
  id: 'jWd4VXKVDJU',
  start: 246,
  end: 276,
}

const attractions = [
  {
    icon: '🌊',
    title: 'Dubai Aquarium',
    description: '10M liters with 33K aquatic animals',
  },
  {
    icon: '🎮',
    title: 'VR Park',
    description: '7,000 sq ft of virtual reality',
  },
  {
    icon: '⛸️',
    title: 'Olympic Ice Rink',
    description: 'International competitions venue',
  },
  {
    icon: '🎪',
    title: 'KidZania',
    description: 'Interactive edutainment city',
  },
]

export const AttractionsSection = () => {
  return (
    <section id="attractions" className="py-24 bg-black relative overflow-hidden text-white">

      {/* Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[120px] -z-10" />

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
            Entertainment
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 drop-shadow-[0_2px_20px_rgba(0,0,0,0.6)]">
            World-Class Attractions
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto">
            Beyond shopping — a destination for unforgettable experiences
          </p>
        </motion.div>

        {/* FEATURE VIDEO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-md shadow-xl shadow-black/40 group">

            <iframe
              src={`https://www.youtube.com/embed/${ENTERTAINMENT_VIDEO.id}?start=${ENTERTAINMENT_VIDEO.start}&end=${ENTERTAINMENT_VIDEO.end}&autoplay=1&mute=1&loop=1&playlist=${ENTERTAINMENT_VIDEO.id}&controls=0&modestbranding=1&playsinline=1`}
              className="w-full h-full scale-105 group-hover:scale-110 transition-transform duration-500"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Attractions"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90 group-hover:opacity-70 transition" />
          </div>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {attractions.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="relative p-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md transition-all duration-300 group-hover:border-gold/50 group-hover:shadow-lg group-hover:shadow-gold/10">

                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gold/5 blur-2xl rounded-2xl" />

                {/* Icon */}
                <div className="text-5xl mb-5 transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-2 group-hover:text-gold transition">
                  {item.title}
                </h3>

                {/* Desc */}
                <p className="text-gray-400 text-sm">
                  {item.description}
                </p>

                {/* Bottom line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  className="h-[2px] bg-gold mt-3"
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}