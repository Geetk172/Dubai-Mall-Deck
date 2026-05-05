import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

const videos = [
  {
    id: '1',
    title: 'Location & World',
    description: 'Dubai’s most iconic destination',
    videoId: 'weHez4xgH_Y',
    start: 920,
    end: 940,
  },
  {
    id: '2',
    title: 'Crowd & Social Proof',
    description: 'Experience the global energy',
    videoId: 'CwnnepeJXdw',
    start: 10,
    end: 22,
  },
  {
    id: '3',
    title: 'Retail & Luxury',
    description: 'Premium brands and elegance',
    videoId: 'SdcXJLXAM7E',
    start: 129,
    end: 158,
  },
  {
    id: '4',
    title: 'Dining & Lifestyle',
    description: 'Curated culinary experiences',
    videoId: 'RBkJxcVfx04',
    start: 20,
    end: 60,
  },
]

export const VideoSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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
    <section className="py-24 bg-black relative overflow-hidden text-white">

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
            Discover
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Visual Stories
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10"
        >
          {videos.map((video) => (
            <motion.div
              key={video.id}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="group cursor-pointer"
            >
              {/* Video Card */}
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-md transition-all duration-300 group-hover:border-gold/50 group-hover:shadow-lg group-hover:shadow-gold/10">
                
                {/* Video */}
                <iframe
                  src={`https://www.youtube.com/embed/${video.videoId}?start=${video.start}&end=${video.end}&controls=0&rel=0&modestbranding=1&playsinline=1&mute=1`}
                  className="w-full h-full scale-105 group-hover:scale-110 transition-transform duration-500"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title={video.title}
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-70 transition duration-300" />

                {/* Play button */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-14 h-14 bg-gold/90 rounded-full flex items-center justify-center shadow-lg shadow-gold/30"
                  >
                    <Play size={24} className="text-black ml-1" fill="black" />
                  </motion.div>
                </motion.div>
              </div>

              {/* Text */}
              <div className="mt-4">
                <h3 className="text-lg font-semibold group-hover:text-gold transition">
                  {video.title}
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  {video.description}
                </p>
              </div>

              {/* Bottom line */}
              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                className="h-[2px] bg-gold mt-2"
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}