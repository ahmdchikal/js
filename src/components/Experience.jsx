import { motion } from 'framer-motion'

const experiences = [
  {
    role: 'Magang IT Support',
    company: 'Kantor Kementrian Agama Kota Bandar Lampung',
    period: '2023',
    points: [
      'Membantu troubleshooting hardware & software',
      'Mendukung kebutuhan jaringan dasar',
      'Melayani tiket dan dokumentasi'
    ]
  },
  {
    role: 'Asisten Praktikum (Kampus)',
    company: 'Universitas Teknokrat Indonesia',
    period: '2022',
    points: [
      'Membimbing praktikum pemrograman dasar',
      'Mereview tugas dan membantu problem solving',
      'Koordinasi tim asisten'
    ]
  }
]

const variants = {
  hidden: { opacity: 0, y: 12 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08 } })
}

export default function Experience() {
  return (
    <div className="space-y-4">
      {experiences.map((e, idx) => (
        <motion.div
          key={e.role}
          custom={idx}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={variants}
          className="rounded-xl border border-gray-200 dark:border-slate-800 p-5 bg-white dark:bg-slate-900/60 transition-transform hover:-translate-y-1"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white">{e.role}</h3>
              <p className="text-sm text-gray-600 dark:text-slate-400">{e.company}</p>
            </div>
            <span className="text-sm text-gray-500 dark:text-slate-400">{e.period}</span>
          </div>
          <ul className="mt-3 text-sm text-gray-700 dark:text-slate-300 list-disc pl-5 space-y-1">
            {e.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  )
}
