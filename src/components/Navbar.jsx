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

  // Time state (live clock)
  const [time, setTime] = useState('')
  const [dateStr, setDateStr] = useState('')
  const [weekday, setWeekday] = useState('')

  // Weather state for Bandar Lampung
  const [weather, setWeather] = useState(null)
  const [weatherError, setWeatherError] = useState(null)

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

  // Live clock: update every second
  useEffect(() => {
    function updateClock() {
      const now = new Date()
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }))
      setDateStr(now.toLocaleDateString())
      setWeekday(now.toLocaleDateString(undefined, { weekday: 'long' }))
    }

    updateClock()
    const id = setInterval(updateClock, 1000)
    return () => clearInterval(id)
  }, [])

  // Fetch weather for Bandar Lampung. Tries OpenWeather (requires API key),
  // falls back to Open-Meteo (no API key) when unavailable.
  useEffect(() => {
    let mounted = true
    const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY
    const controller = new AbortController()

    async function fetchOpenMeteo() {
      try {
        // Coordinates for Bandar Lampung
        const lat = -5.4296
        const lon = 105.2613
        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&temperature_unit=celsius`,
          { signal: controller.signal }
        )
        if (!res.ok) throw new Error(`Open-Meteo HTTP ${res.status}`)
        const data = await res.json()
        if (!mounted) return
        if (data.current_weather) {
          setWeather({ temp: Math.round(data.current_weather.temperature), desc: 'Current' })
          setWeatherError(null)
        } else {
          throw new Error('No current weather from Open-Meteo')
        }
      } catch (err) {
        if (err.name === 'AbortError') return
        setWeather(null)
        setWeatherError(err.message)
      }
    }

    async function fetchOpenWeather() {
      try {
        setWeatherError(null)
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=Bandar Lampung,id&units=metric&appid=${apiKey}`,
          { signal: controller.signal }
        )
        if (!res.ok) throw new Error(`OpenWeather HTTP ${res.status}`)
        const data = await res.json()
        if (!mounted) return
        setWeather({ temp: Math.round(data.main.temp), desc: data.weather?.[0]?.main || '' })
      } catch (err) {
        if (err.name === 'AbortError') return
        // On failure, try Open-Meteo fallback
        await fetchOpenMeteo()
      }
    }

    // If API key present, prefer OpenWeather
    if (apiKey) {
      fetchOpenWeather()
    } else {
      // no key: use Open-Meteo directly
      fetchOpenMeteo()
    }

    const interval = setInterval(() => {
      if (apiKey) fetchOpenWeather()
      else fetchOpenMeteo()
    }, 10 * 60 * 1000)

    return () => {
      mounted = false
      controller.abort()
      clearInterval(interval)
    }
  }, [])

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
            <div className="hidden md:flex flex-col items-end mr-3">
              <div className="text-sm text-gray-700 dark:text-slate-300">{time} · {weekday}</div>
              <div className="text-xs text-gray-500 dark:text-slate-400">
                {dateStr} · {weather ? `${weather.temp}°C ${weather.desc}` : (weatherError ? weatherError : '—')}
              </div>
            </div>
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
