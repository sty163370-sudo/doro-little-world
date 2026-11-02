import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

const themeKey = 'doro-theme'
const nightColor = '#241820'
const dayColor = '#fff5f3'

function applyTheme(night: boolean) {
  document.documentElement.dataset.theme = night ? 'night' : 'day'
  localStorage.setItem(themeKey, night ? 'night' : 'day')
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', night ? nightColor : dayColor)
}

export function ThemeToggle() {
  const [night, setNight] = useState(() => document.documentElement.dataset.theme === 'night')

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    function onChange() {
      if (localStorage.getItem(themeKey)) return
      const next = media.matches
      document.documentElement.dataset.theme = next ? 'night' : 'day'
      setNight(next)
    }
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  function toggle() {
    const next = document.documentElement.dataset.theme !== 'night'
    applyTheme(next)
    setNight(next)
  }

  const Icon = night ? Sun : Moon

  return (
    <button
      type="button"
      className="btn-motion flex h-10 w-10 items-center justify-center rounded-full text-berry hover:bg-blush"
      aria-pressed={night}
      aria-label={night ? '切换到日间模式' : '切换到粉色夜间模式'}
      onClick={toggle}
    >
      <Icon className="h-5 w-5" aria-hidden />
    </button>
  )
}
