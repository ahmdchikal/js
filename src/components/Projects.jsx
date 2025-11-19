import { motion } from 'framer-motion'
import project1 from '../assets/sistem-absensi.png'
import project2 from '../assets/project-desainweb.png'
import project3 from '../assets/project-3.svg'

const projects = [
  {
    title: 'Sistem Absensi Siswa',
    desc: 'Aplikasi web sederhana untuk manajemen data siswa menggunakan React di sisi frontend.',
    tags: ['React', 'Tailwind', 'node.js', 'Java', 'MySQL', ],
    image: project1,
    demo: 'https://sman16bandarlampung-absensi.com/'
  },
  {
    title: 'Desain Web Responsif',
    desc: 'Explorasi Kampus dan visi&misi .',
    tags: ['CSS', 'bootstrap' ],
    image: project2,
    
  },
  {
    title: 'Modeling 3D Sederhana',
    desc: 'Koleksi karya desain 3D di Blender (modeling & rendering dasar).',
    tags: ['Blender', '3D'],
    image: project3,
    
  }
]

const card = {
  hidden: { opacity: 0, y: 12 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.07 } })
}

export default function Projects() {
  return (
    <motion.div 
      className="grid md:grid-cols-3 gap-4"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-100px' }}
    >
      {projects.map((p, idx) => (
        <motion.div
          key={p.title}
          custom={idx}
          variants={card}
          className="rounded-xl border border-gray-200 dark:border-slate-800 p-5 bg-white dark:bg-slate-900/60 transition-transform hover:-translate-y-1"
        >
          {/* optional image at top */}
          {p.image && (
            <div className="w-full h-40 overflow-hidden rounded-md mb-4 bg-gray-50 dark:bg-slate-800">
              <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
            </div>
          )}

          <h3 className="font-medium text-gray-900 dark:text-white">{p.title}</h3>
          <p className="mt-2 text-sm text-gray-700 dark:text-slate-300">{p.desc}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span key={t} className="text-xs px-2 py-1 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-slate-300 transition-colors hover:bg-gray-200 dark:hover:bg-slate-700">{t}</span>
            ))}
          </div>

          {/* actions: demo link */}
          <div className="mt-4 flex items-center justify-between">
            <div>
              {p.demo && (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  Live demo ↗
                </a>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
