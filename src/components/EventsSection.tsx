import { motion } from 'framer-motion'

const EVENTS_VIDEO = {
  id: 'ge05TAkzx5M',
  start: 45,
  end: 65,
}

const eventStats = [
  { num: '500+', label: 'Annual Events' },
  { num: '50M+', label: 'Impressions' },
  { num: '24/7', label: 'Coverage' },
  { num: 'Global', label: 'Reach' },
]

export const EventsSection = () => {
  return (
    <section id="events" className="py-24 bg-black relative overflow-hidden text-white">

      {/* Glow */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[120px] -z-10" />

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
            Events & Activations
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Your Global Stage
          </h2>
        </motion.div>

        {/* Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Host Unforgettable Moments
            </h3>

            <p className="text-gray-300 mb-10 text-lg leading-relaxed">
              From global launches to live entertainment, create experiences that capture attention and reach millions worldwide.
            </p>

            {/* STATS (clean horizontal style) */}
            <div className="grid grid-cols-2 gap-6">
              {eventStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="border-l-2 border-gold pl-4"
                >
                  <div className="text-2xl md:text-3xl font-bold text-gold">
                    {stat.num}
                  </div>
                  <div className="text-xs uppercase text-gray-400 tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 px-10 py-4 bg-gold text-black font-semibold rounded-full shadow-md shadow-gold/20 hover:shadow-gold/40 transition"
            >
              Book Your Event
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
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-md shadow-xl shadow-black/40 group">

              <iframe
                src={`https://www.youtube.com/embed/${EVENTS_VIDEO.id}?start=${EVENTS_VIDEO.start}&end=${EVENTS_VIDEO.end}&autoplay=1&mute=1&loop=1&playlist=${EVENTS_VIDEO.id}&controls=0&modestbranding=1&playsinline=1`}
                className="w-full h-full scale-105 group-hover:scale-110 transition-transform duration-500"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Events"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90 group-hover:opacity-70 transition" />
            </div>

            {/* subtle glow pulse */}
            <motion.div
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-8 -right-8 w-32 h-32 bg-gold/20 rounded-full blur-3xl"
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}