import type { ReactNode } from 'react'
import { BowStamp } from './Decorations.tsx'

type PageHeaderProps = {
  kicker: string
  title: string
  description: string
  children?: ReactNode
}

export function PageHeader({ kicker, title, description, children }: PageHeaderProps) {
  return (
    <header className="mx-auto max-w-6xl px-5 pt-10 pb-6 sm:px-8 md:pt-14">
      <p className="font-hand text-[1.85rem] text-berry">{kicker}</p>
      <h1 className="mt-1 flex items-center gap-2 font-display text-4xl font-medium tracking-tight text-balance text-ink md:text-5xl">
        {title}
        <BowStamp className="h-8 w-12 shrink-0" />
      </h1>
      <p className="mt-3 max-w-xl text-pretty text-muted">{description}</p>
      {children ? <div className="mt-6">{children}</div> : null}
    </header>
  )
}
