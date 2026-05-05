import { motion } from 'framer-motion'

const footerLinks = [
  {
    title: 'The Dubai Mall',
    items: [
      { text: 'Financial Centre Road', href: '#' },
      { text: 'Downtown Dubai', href: '#' },
      { text: 'Dubai, UAE', href: '#' },
      { text: 'P.O. Box 123456', href: '#' },
    ],
  },
  {
    title: 'Business',
    items: [
      { text: 'Retail Leasing', href: 'mailto:leasing@thedubaimall.com' },
      { text: 'Sponsorships', href: 'mailto:sponsorship@thedubaimall.com' },
      { text: 'Events', href: 'mailto:events@thedubaimall.com' },
      { text: 'Partnerships', href: 'mailto:partnerships@thedubaimall.com' },
    ],
  },
  {
    title: 'Explore',
    items: [
      { text: 'Why Dubai Mall', href: '#why' },
      { text: 'Luxury', href: '#luxury' },
      { text: 'Attractions', href: '#attractions' },
      { text: 'Events', href: '#events' },
    ],
  },
  {
    title: 'Connect',
    items: [
      { text: 'Instagram', href: 'https://instagram.com' },
      { text: 'LinkedIn', href: 'https://linkedin.com' },
      { text: 'Twitter', href: 'https://twitter.com' },
      { text: 'Facebook', href: 'https://facebook.com' },
    ],
  },
]

const socialLinks = [
  { label: 'IG', href: 'https://instagram.com' },
  { label: 'LI', href: 'https://linkedin.com' },
  { label: 'TW', href: 'https://twitter.com' },
  { label: 'FB', href: 'https://facebook.com' },
]

export const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold/5 rounded-full blur-3xl -z-10" />

      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="text-3xl font-bold tracking-tight mb-6">
              <span className="text-gold">DUBAI</span>
              <span className="text-white ml-2 font-light">MALL</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              The world's most visited shopping destination. Where luxury meets experience.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-xs font-bold text-gray-400 hover:text-gold hover:border-gold/50 transition-all duration-300"
                >
                  {social.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Columns */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="lg:col-span-1"
            >
              <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-xs">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.items.map((item, i) => (
                  <motion.li key={i}>
                    <motion.a
                      href={item.href}
                      whileHover={{ x: 5, color: '#D4AF37' }}
                      target={item.href.startsWith('http') ? '_blank' : '_self'}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="text-gray-400 hover:text-gold transition-colors text-sm block"
                    >
                      {item.text}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12"
        />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          {/* Copyright */}
          <p className="text-gray-500 text-xs tracking-wide">
            &copy; 2024 The Dubai Mall. All rights reserved.
          </p>

          {/* Center - Phone */}
          <motion.a
            href="tel:+97143627500"
            whileHover={{ color: '#D4AF37', scale: 1.05 }}
            className="text-gray-400 hover:text-gold transition-colors text-sm font-medium"
          >
            +971 4 362 7500
          </motion.a>

          {/* Right - Legal */}
          <p className="text-gray-600 text-xs tracking-wide">
            Sales Presentation Deck
          </p>
        </motion.div>
      </div>
    </footer>
  )
}