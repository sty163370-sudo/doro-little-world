import { useState } from 'react'
import doroHero from '../assets/doro/doro-hero.png'
import { pickQuote } from '../data/quotes.ts'
import { cn } from '../lib/cn.ts'

type DoroFigureProps = {
  imgClassName?: string
  frameClassName?: string
}

export function DoroFigure({ imgClassName, frameClassName }: DoroFigureProps) {
  const [quote, setQuote] = useState<string | null>(null)

  return (
    <>
      <button
        type="button"
        className="relative z-10 block w-full cursor-pointer"
        aria-label="点一下 DORO，听一句问候"
        onClick={() => setQuote((current) => pickQuote(current ?? ''))}
      >
        <img
          src={doroHero}
          alt=""
          width={777}
          height={723}
          className={imgClassName}
        />
      </button>
      {quote ? (
        <p
          role="status"
          className={cn(
            'pointer-events-none z-30 mx-auto max-w-56 rounded-card bg-paper px-4 py-2 text-center font-hand text-[1.5rem] leading-snug text-ink shadow-soft ring-1 ring-sakura',
            frameClassName,
          )}
        >
          {quote}
        </p>
      ) : null}
    </>
  )
}
