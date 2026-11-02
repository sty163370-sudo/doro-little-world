import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import avatar from '../../assets/avatar/avatar.jpg'
import { SectionTitle } from '../../components/SectionTitle.tsx'
import { WashiTape } from '../../components/Decorations.tsx'
import { facts, profile } from '../../data/profile.ts'
import { journalCard, textLink } from '../../lib/styles.ts'
import { cn } from '../../lib/cn.ts'

const noteTones = ['bg-blush', 'bg-lilac', 'bg-peach']
const noteTilts = ['md:-rotate-1', 'md:rotate-1', 'md:-rotate-1']

export function AboutPreview() {
  return (
    <section id="about" className="scroll-mt-28 px-5 pt-4 pb-16 sm:px-8 md:pb-20">
      <div className="mx-auto max-w-6xl">
        <SectionTitle index="01" eyebrow="小小的自我介绍" title="关于我" />
        <article className={cn(journalCard, 'relative px-5 py-7 sm:px-8 sm:py-9')}>
          <WashiTape className="absolute -top-3 left-10 -rotate-6" />
          <div className="grid items-center gap-8 md:grid-cols-[1.25fr_0.75fr]">
            <div>
              <p className="text-lg leading-relaxed text-pretty text-ink">{profile.shortBio}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {profile.interests.map((interest) => (
                  <li
                    key={interest}
                    className="rounded-full bg-blush px-3 py-1 text-sm font-semibold text-berry"
                  >
                    {interest}
                  </li>
                ))}
              </ul>
              <Link to="/about" className={cn(textLink, 'mt-6')}>
                更多关于我
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="flex flex-col gap-3">
              <div className="mx-auto w-36 rounded-card bg-paper p-2 shadow-soft ring-1 ring-sakura md:mx-0">
                <img
                  src={avatar}
                  alt="晒太阳的头像"
                  className="aspect-square w-full rounded-media object-cover object-[center_28%]"
                />
              </div>
              <ul className="space-y-3">
                {facts.map((fact, index) => (
                  <li
                    key={fact.label}
                    className={cn(
                      'rounded-tile px-4 py-3',
                      noteTones[index % noteTones.length],
                      noteTilts[index % noteTilts.length],
                    )}
                  >
                    <p className="font-hand text-[1.45rem] text-berry">{fact.label}</p>
                    <p className="text-sm leading-relaxed text-ink">{fact.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
