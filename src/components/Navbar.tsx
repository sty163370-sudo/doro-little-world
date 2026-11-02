import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { navItems, profile } from '../data/profile.ts'
import { cn } from '../lib/cn.ts'

export function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="sticky top-0 z-40">
      <div className="relative mx-auto max-w-6xl px-4 pt-3 sm:px-6">
        <div className="flex items-center justify-between gap-3 rounded-full bg-paper/80 px-4 py-2.5 shadow-soft ring-1 ring-white/80 backdrop-blur-md sm:px-5">
          <NavLink
            to="/"
            end
            className="font-display text-lg text-berry sm:text-xl"
            onClick={() => setOpen(false)}
          >
            {profile.logo}
          </NavLink>

          <nav className="hidden items-center gap-1 md:flex" aria-label="主导航">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  cn(
                    'rounded-full px-3.5 py-1.5 font-display text-[15px] transition-colors',
                    isActive ? 'bg-blush text-berry' : 'text-ink hover:bg-blush/80',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink hover:bg-blush md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? '关闭菜单' : '打开菜单'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open ? (
          <nav
            id="mobile-nav"
            aria-label="移动端导航"
            className="absolute right-4 left-4 mt-2 rounded-[28px] bg-paper p-3 shadow-soft ring-1 ring-sakura/70 md:hidden"
          >
            <ul className="flex flex-col">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.end}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        'block rounded-2xl px-4 py-3 font-display text-lg',
                        isActive ? 'bg-blush text-berry' : 'text-ink hover:bg-blush/70',
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </div>
    </header>
  )
}
