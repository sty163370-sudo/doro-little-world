import { Camera, Heart, Music, NotebookPen, UtensilsCrossed } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { PageHeader } from '../components/PageHeader.tsx'
import { entriesFor, shelves } from '../data/moments.ts'
import { usePageTitle } from '../hooks/usePageTitle.ts'
import { formatDate } from '../lib/format.ts'
import { cn } from '../lib/cn.ts'
import { liftCard } from '../lib/styles.ts'
import type { MomentEntry, MomentShelf, MomentShelfIcon } from '../types.ts'

const shelfIcons: Record<MomentShelfIcon, LucideIcon> = {
  camera: Camera,
  music: Music,
  food: UtensilsCrossed,
  mood: Heart,
  days: NotebookPen,
}

export function Moments() {
  usePageTitle('日常')
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const id = decodeURIComponent(hash.slice(1))
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [hash])

  return (
    <>
      <PageHeader
        kicker="分开来记"
        title="日常"
        description="照片、音乐、美食、情绪，还有那些平常的小事。想记的时候，放进对应的格子里。"
      >
        <nav className="flex flex-wrap gap-2" aria-label="生活板块">
          {shelves.map((shelf) => (
            <a
              key={shelf.id}
              href={`#shelf-${shelf.id}`}
              className="rounded-full bg-paper px-4 py-1.5 font-display text-sm text-ink ring-1 ring-sakura hover:bg-blush"
            >
              {shelf.label}
            </a>
          ))}
        </nav>
      </PageHeader>

      <div className="mx-auto flex max-w-6xl flex-col gap-14 px-5 pb-10 sm:px-8">
        {shelves.map((shelf) => (
          <ShelfSection key={shelf.id} shelf={shelf} entries={entriesFor(shelf.id)} />
        ))}
      </div>
    </>
  )
}

function ShelfSection({ shelf, entries }: { shelf: MomentShelf; entries: MomentEntry[] }) {
  const Icon = shelfIcons[shelf.icon]

  return (
    <section id={`shelf-${shelf.id}`} className="scroll-mt-28">
      <div className="mb-5 flex items-end gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blush text-berry">
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <div>
          <h2 className="font-display text-3xl text-ink">{shelf.label}</h2>
          <p className="font-hand text-[1.45rem] text-berry">{shelf.hint}</p>
        </div>
      </div>
      <ShelfBody shelf={shelf.id} entries={entries} />
    </section>
  )
}

function ShelfBody({ shelf, entries }: { shelf: MomentShelf['id']; entries: MomentEntry[] }) {
  if (shelf === 'photos') return <PhotoWall entries={entries} />
  if (shelf === 'music') return <MusicList entries={entries} />
  if (shelf === 'food') return <FoodGrid entries={entries} />
  if (shelf === 'mood') return <MoodNotes entries={entries} />
  return <DayList entries={entries} />
}

function PhotoWall({ entries }: { entries: MomentEntry[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {entries.map((entry) => (
        <figure key={entry.id} className={cn(liftCard, 'p-3 pb-5')}>
          <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[20px] bg-gradient-to-br from-blush via-lilac to-peach">
            {entry.image ? (
              <img src={entry.image} alt={entry.title} className="h-full w-full object-cover" />
            ) : (
              <Camera className="h-10 w-10 text-berry/50" aria-hidden />
            )}
          </div>
          <figcaption className="px-2 pt-3 text-center">
            <p className="font-hand text-[1.7rem] text-ink">{entry.title}</p>
            {entry.note ? (
              <p className="mt-1 text-sm leading-relaxed text-muted">{entry.note}</p>
            ) : null}
          </figcaption>
        </figure>
      ))}
    </div>
  )
}

function MusicList({ entries }: { entries: MomentEntry[] }) {
  return (
    <ul className="grid gap-4">
      {entries.map((entry) => (
        <li key={entry.id} className={cn(liftCard, 'flex items-start gap-4 px-4 py-4 sm:px-5')}>
          {entry.image ? (
            <img
              src={entry.image}
              alt={entry.title}
              className="h-20 w-20 shrink-0 rounded-2xl object-cover"
            />
          ) : (
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-lilac text-berry">
              <Music className="h-6 w-6" aria-hidden />
            </span>
          )}
          <div>
            <h3 className="font-display text-2xl text-ink">{entry.title}</h3>
            {entry.detail ? <p className="text-sm font-semibold text-berry">{entry.detail}</p> : null}
            <p className="mt-1 text-sm leading-relaxed text-muted">{entry.note}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

function FoodGrid({ entries }: { entries: MomentEntry[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {entries.map((entry) => (
        <article key={entry.id} className={cn(liftCard, 'overflow-hidden')}>
          {entry.image ? (
            <div className="aspect-[4/3] overflow-hidden">
              <img src={entry.image} alt={entry.title} className="h-full w-full object-cover" />
            </div>
          ) : (
            <div className="bg-gradient-to-br from-peach to-blush px-5 py-6">
              <h3 className="font-hand text-[2.2rem] text-ink">{entry.title}</h3>
            </div>
          )}
          <div className="px-5 py-4">
            {entry.image ? <h3 className="font-hand text-[2.2rem] text-ink">{entry.title}</h3> : null}
            <p className={cn('text-sm text-muted', entry.image && 'mt-1')}>{formatDate(entry.date)}</p>
            <p className="mt-2 leading-relaxed text-ink">{entry.note}</p>
          </div>
        </article>
      ))}
    </div>
  )
}

const moodTones: Record<string, { card: string; mark: string }> = {
  'mood-joy': { card: 'bg-peach', mark: 'bg-[#ef9b6a]' },
  'mood-anxiety': { card: 'bg-[#fff3d8]', mark: 'bg-[#e2b15a]' },
  'mood-fear': { card: 'bg-[#efe6f8]', mark: 'bg-[#8d6aa3]' },
  'mood-pride': { card: 'bg-blush', mark: 'bg-berry' },
  'mood-low': { card: 'bg-[#f3eef1]', mark: 'bg-[#b7a6ae]' },
}

function MoodNotes({ entries }: { entries: MomentEntry[] }) {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      {entries.map((entry) => {
        const tone = moodTones[entry.id] ?? { card: 'bg-blush', mark: 'bg-berry' }
        return (
          <li
            key={entry.id}
            className={cn('flex min-h-36 flex-col rounded-[24px] px-4 py-5 ring-1 ring-white', tone.card)}
          >
            <span className={cn('h-1.5 w-7 rounded-full', tone.mark)} aria-hidden />
            <h3 className="mt-4 font-display text-2xl text-ink">{entry.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{entry.note}</p>
          </li>
        )
      })}
    </ul>
  )
}

function DayList({ entries }: { entries: MomentEntry[] }) {
  return (
    <ol>
      {entries.map((entry) => (
        <li key={entry.id} className="border-b border-sakura/70 py-4 last:border-b-0">
          <div className="grid gap-1 sm:grid-cols-[9rem_1fr] sm:gap-6">
            <time className="font-hand text-[1.45rem] text-berry">{formatDate(entry.date)}</time>
            <div>
              <h3 className="font-display text-xl text-ink">{entry.title}</h3>
              <p className="mt-1 leading-relaxed text-muted">{entry.note}</p>
            </div>
          </div>
        </li>
      ))}
    </ol>
  )
}
