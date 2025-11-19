import { motion } from 'framer-motion'

export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h2>
          {subtitle && <p className="mt-2 text-gray-600 dark:text-slate-400 max-w-2xl">{subtitle}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  )
}
