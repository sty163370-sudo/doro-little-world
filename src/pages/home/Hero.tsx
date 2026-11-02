import { motion, useReducedMotion } from 'framer-motion'
import { BookOpen, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { HeartStamp, SparkleStamp, StarStamp } from '../../components/Decorations.tsx'
import { DoroFigure } from '../../components/DoroFigure.tsx'
import { profile } from '../../data/profile.ts'
import { btnPrimary, btnSecondary } from '../../lib/styles.ts'

const stickerTones = ['bg-blush', 'bg-lilac', 'bg-peach', 'bg-paper', 'bg-blush']

export function Hero() {
  const reduce = useReducedMotion()

  function explore() {
    document.getElementById('about')?.scrollIntoView({
      behavior: reduce ? 'auto' : 'smooth',
    })
  }

  return (
    <section className="relative overflow-hidden">
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-8 px-5 pt-12 pb-8 sm:px-8 md:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-4 lg:pt-20 lg:pb-12">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          <p className="font-hand text-[1.8rem] text-berry sm:text-[2rem]">
            互联网上的一个小角落
          </p>
          <h1 className="mt-2 font-display text-[2.75rem] leading-[1.15] tracking-tight text-balance text-ink sm:text-6xl lg:text-7xl">
            你好，我是 <span className="text-berry">{profile.greetingName}</span>！
          </h1>
          <p className="mt-4 font-hand text-[2rem] text-berry sm:text-[2.4rem]">
            {profile.subtitle}
          </p>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-pretty text-muted">
            {profile.intro}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button type="button" className={`${btnPrimary} w-full sm:w-auto`} onClick={explore}>
              走进我的世界
              <Sparkles className="h-4 w-4" aria-hidden />
            </button>
            <Link to="/blog" className={`${btnSecondary} w-full sm:w-auto`}>
              去看博客
              <BookOpen className="h-4 w-4 text-berry" aria-hidden />
            </Link>
          </div>
          <ul className="mt-8 flex flex-wrap gap-2" aria-label="最近喜欢的事">
            {profile.interests.map((interest, index) => (
              <li
                key={interest}
                className={`rounded-full px-3.5 py-1 font-hand text-[1.45rem] text-ink ring-1 ring-edge ${stickerTones[index % stickerTones.length]}`}
              >
                {interest}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-md"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: reduce ? 0 : 0.08, ease: 'easeOut' }}
        >
          <SparkleStamp className="pointer-events-none float-slow absolute -top-1 right-6 z-20 h-9 w-9 text-glow-lilac" />
          <HeartStamp className="pointer-events-none float-slow float-delay absolute top-16 -left-1 z-20 h-8 w-8 text-glow-petal" />
          <StarStamp className="pointer-events-none absolute right-0 bottom-24 z-20 h-6 w-6 text-glow-sakura" />
          <div aria-hidden className="doro-lamp pointer-events-none absolute inset-[8%] rounded-full" />
          <DoroFigure
            imgClassName={`w-full drop-shadow-[0_18px_24px_rgba(179,78,116,0.22)] ${reduce ? '' : 'doro-float'}`}
            frameClassName="absolute top-8 right-6 left-6"
          />
          <svg
            viewBox="0 0 240 70"
            aria-hidden
            className="pointer-events-none absolute bottom-6 left-1/2 z-0 w-56 -translate-x-1/2"
          >
            <ellipse cx="120" cy="42" rx="92" ry="16" fill="var(--color-glow-lilac)" />
            <ellipse cx="78" cy="36" rx="36" ry="14" fill="var(--color-glow-blush)" />
            <ellipse cx="164" cy="34" rx="40" ry="16" fill="var(--color-glow-sakura)" opacity="0.9" />
          </svg>
          <p className="pointer-events-none absolute bottom-3 left-2 z-20 rotate-[-8deg] font-hand text-[1.8rem] text-berry sm:left-0">
            嗨，我是晒太阳
          </p>
        </motion.div>
      </div>

      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden
        className="relative z-10 -mt-2 block h-12 w-full text-cream md:h-16"
      >
        <path
          fill="currentColor"
          d="M0 36c160 36 320-28 520-12 180 14 300 44 470 22 150-20 280-36 450-6v40H0Z"
        />
      </svg>
    </section>
  )
}
