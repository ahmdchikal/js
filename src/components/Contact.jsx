import { Mail, MapPin, Github, Linkedin, Instagram, Facebook } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <motion.div className="grid md:grid-cols-2 gap-6" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.5 }}>
      <div className="rounded-xl border border-gray-200 dark:border-slate-800 p-5 bg-white dark:bg-slate-900/60 transition-transform hover:-translate-y-1">
        <h3 className="font-medium text-gray-900 dark:text-white">Hubungi</h3>
        <p className="mt-2 text-sm text-gray-700 dark:text-slate-300">Terbuka untuk peluang kerja, magang, atau kolaborasi.</p>
        <div className="mt-4 space-y-2 text-sm text-gray-700 dark:text-slate-300">
          <p className="flex items-center gap-2"><Mail size={16}/> Ahmadchikal69@gmail.com</p>
          <div className="flex items-center gap-3 mt-2">
            <a href="https://github.com/ahmdchikal" target="_blank" rel="noreferrer" className="text-gray-700 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/ahmad-chikal-91327427a/" target="_blank" rel="noreferrer" className="text-gray-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400">
              <Linkedin size={18} />
            </a>
            <a href="https://www.instagram.com/ahmd_chikal/" target="_blank" rel="noreferrer" className="text-gray-700 dark:text-slate-300 hover:text-pink-600 dark:hover:text-pink-400">
              <Instagram size={18} />
            </a>
            <a href="https://www.facebook.com/ahmad.chikal.37/" target="_blank" rel="noreferrer" className="text-gray-700 dark:text-slate-300 hover:text-blue-700 dark:hover:text-blue-400">
              <Facebook size={18} />
            </a>
          </div>
          <p className="flex items-center gap-2"><MapPin size={16}/>Lampung, Indonesia</p>
        </div>
      </div>
      <form className="rounded-xl border border-gray-200 dark:border-slate-800 p-5 bg-white dark:bg-slate-900/60">
        <div className="grid grid-cols-1 gap-4">
          <input type="text" placeholder="Nama" className="w-full rounded-lg border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm text-gray-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-gray-900/10 dark:focus:ring-white/10 transition-transform hover:-translate-y-0.5" />
          <input type="email" placeholder="Email" className="w-full rounded-lg border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm text-gray-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-gray-900/10 dark:focus:ring-white/10 transition-transform hover:-translate-y-0.5" />
          <textarea placeholder="Pesan" rows="4" className="w-full rounded-lg border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm text-gray-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-gray-900/10 dark:focus:ring-white/10 transition-transform hover:-translate-y-0.5" />
          <button type="submit" className="px-4 py-2 rounded-lg bg-gray-900 text-white text-sm dark:bg-white dark:text-slate-900 transition-transform hover:scale-[1.02] active:scale-[0.99]">Kirim</button>
        </div>
      </form>
    </motion.div>
  )
}
