import type { ReactNode } from 'react'
import { BowStamp } from './Decorations.tsx'

type SectionTitleProps = {
  index: string
  eyebrow: string
  title: string
  action?: ReactNode
}

export function SectionTitle({ index, eyebrow, title, action }: SectionTitleProps) {
  return (
    <div className="mb-7 flex flex-wrap items-end justify-between gap-3">
      <div>
        <p className="font-hand text-[1.7rem] text-berry">
          <span className="mr-2">{index}</span>
          {eyebrow}
        </p>
        <h2 className="mt-1 flex items-center gap-2 font-display text-3xl font-medium tracking-tight text-ink md:text-4xl">
          {title}
          <BowStamp className="h-7 w-10" />
        </h2>
      </div>
      {action}
    </div>
  )
}
