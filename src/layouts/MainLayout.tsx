import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { DoroMascot } from '../components/DoroMascot.tsx'
import { Footer } from '../components/Footer.tsx'
import { Navbar } from '../components/Navbar.tsx'

export function MainLayout() {
  const location = useLocation()
  const reduce = useReducedMotion()

  useEffect(() => {
    if (location.hash) return
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname, location.hash])

  return (
    <div className="relative min-h-screen">
      <div aria-hidden className="bg-scene pointer-events-none fixed inset-0 z-0" />
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-paper focus:px-4 focus:py-2 focus:text-ink"
      >
        跳到正文
      </a>
      <div className="relative z-10">
        <Navbar />
        <AnimatePresence mode="wait" initial={false}>
          <motion.main
            id="content"
            key={location.pathname}
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.32, ease: 'easeOut' }}
            className="min-h-[70vh]"
          >
            <Outlet />
          </motion.main>
        </AnimatePresence>
        <Footer />
      </div>
      <DoroMascot />
    </div>
  )
}
