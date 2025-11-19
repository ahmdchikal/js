import { motion } from 'framer-motion'

const skills = [
  {
    group: 'Web Development',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS']
  },
  {
    group: 'Data Processing',
    items: ['Python (Pandas/Numpy)', 'SQL', 'Excel/Google Sheets']
  },
  {
    group: 'IT Support',
    items: ['Troubleshooting', 'Networking Basics', 'Hardware/Software']
  },
  {
    group: 'Desain 3D',
    items: ['Blender', 'Basic Modeling & Rendering']
  }
]

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.06 } })
}

export default function Skills() {
  return (
    <motion.div 
      className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-100px' }}
    >
      {skills.map((s, idx) => (
        <motion.div
          key={s.group}
          custom={idx}
          variants={itemVariants}
          className="rounded-xl border border-gray-200 dark:border-slate-800 p-5 bg-white dark:bg-slate-900/60 transition-transform hover:-translate-y-1"
        >
          <h3 className="font-medium text-gray-900 dark:text-white mb-2">{s.group}</h3>
          <ul className="text-sm text-gray-700 dark:text-slate-300 space-y-1">
            {s.items.map((i) => (
              <li key={i}>• {i}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.div>
  )
}
