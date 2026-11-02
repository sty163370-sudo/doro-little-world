import { ArrowRight, Camera, Heart, Music, NotebookPen, UtensilsCrossed } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SectionTitle } from '../../components/SectionTitle.tsx'
import { shelves } from '../../data/moments.ts'
import { cn } from '../../lib/cn.ts'
import { liftCard, textLink } from '../../lib/styles.ts'
import type { MomentShelfIcon } from '../../types.ts'

const shelfIcons: Record<MomentShelfIcon, LucideIcon> = {
  camera: Camera,
  music: Music,
  food: UtensilsCrossed,
  mood: Heart,
  days: NotebookPen,
}

const shelfTones: Record<MomentShelfIcon, string> = {
  camera: 'bg-blush',
  music: 'bg-lilac',
  food: 'bg-peach',
  mood: 'bg-sakura/70',
  days: 'bg-paper',
}

export function RecentMoments() {
  return (
    <section id="moments" className="scroll-mt-28 px-5 py-4 pb-8 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          index="04"
          eyebrow="分开来记"
          title="生活板块"
          action={
            <Link to="/moments" className={textLink}>
              去看看
              <ArrowRight className="h-4 w-4" />
            </Link>
          }
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {shelves.map((shelf) => {
            const Icon = shelfIcons[shelf.icon]
            return (
              <Link
                key={shelf.id}
                to={`/moments#shelf-${shelf.id}`}
                className={cn(liftCard, 'block p-4')}
              >
                <span
                  className={cn(
                    'flex h-11 w-11 items-center justify-center rounded-tile text-berry ring-1 ring-edge',
                    shelfTones[shelf.icon],
                  )}
                >
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-4 font-display text-xl text-ink">{shelf.label}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{shelf.hint}</p>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
