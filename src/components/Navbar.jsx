import { Menu, X, Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return false
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/70 dark:bg-slate-950/70 border-b border-gray-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          <a href="#top" className="font-semibold tracking-tight text-gray-900 dark:text-slate-100">Ahmad Chikal</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700 dark:text-slate-300">
            {links.map(l => (
              <a key={l.href} href={l.href} className="hover:text-gray-900 dark:hover:text-white transition-colors">{l.label}</a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setDark(v => !v)}
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-gray-300 dark:border-slate-700 text-gray-700 dark:text-slate-200"
              aria-label="Toggle theme"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-gray-300 dark:border-slate-700 text-gray-700 dark:text-slate-200" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-200 dark:border-slate-800">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2 text-gray-700 dark:text-slate-300">
            {links.map(l => (
              <a key={l.href} href={l.href} className="py-2" onClick={() => setOpen(false)}>{l.label}</a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
