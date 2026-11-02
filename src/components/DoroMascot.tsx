import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useId, useState } from 'react'
import avatar from '../assets/avatar/avatar.jpg'
import { doroQuotes } from '../data/quotes.ts'

function pickQuote(current: string) {
  const pool = doroQuotes.filter((quote) => quote !== current)
  const source = pool.length > 0 ? pool : doroQuotes
  return source[Math.floor(Math.random() * source.length)] ?? ''
}

export function DoroMascot() {
  const reduce = useReducedMotion()
  const quoteId = useId()
  const [quote, setQuote] = useState<string | null>(null)

  useEffect(() => {
    if (!quote) return
    function onPointerDown(event: PointerEvent) {
      const target = event.target
      if (!(target instanceof Element)) return
      if (target.closest('[data-doro-mascot]')) return
      setQuote(null)
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') setQuote(null)
    }
    window.addEventListener('pointerdown', onPointerDown)
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('pointerdown', onPointerDown)
      window.removeEventListener('keydown', onKey)
    }
  }, [quote])

  return (
    <div
      data-doro-mascot
      className="fixed right-3 bottom-3 z-50 flex flex-col items-end sm:right-5 sm:bottom-5"
    >
      <AnimatePresence>
        {quote ? (
          <motion.p
            id={quoteId}
            role="status"
            initial={reduce ? false : { opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? undefined : { opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.22 }}
            className="relative mb-2 max-w-64 rounded-[22px] rounded-br-md bg-paper px-4 py-3 font-hand text-[1.55rem] text-ink shadow-soft ring-1 ring-sakura"
          >
            {quote}
          </motion.p>
        ) : null}
      </AnimatePresence>

      <button
        type="button"
        aria-expanded={quote !== null}
        aria-describedby={quote ? quoteId : undefined}
        aria-label="晒太阳有一张小纸条，点一下换一句。"
        onClick={() => setQuote((current) => pickQuote(current ?? ''))}
        className={`relative rounded-full ${reduce ? '' : 'doro-float'}`}
      >
        <span
          aria-hidden
          className="absolute -top-1 -left-1 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-blush font-hand text-lg text-berry shadow-sm ring-1 ring-white"
        >
          ♡
        </span>
        <img
          src={avatar}
          alt=""
          className="h-[5.5rem] w-[5.5rem] rounded-full object-cover object-[center_28%] ring-2 ring-white shadow-soft sm:h-24 sm:w-24"
        />
      </button>
    </div>
  )
}
