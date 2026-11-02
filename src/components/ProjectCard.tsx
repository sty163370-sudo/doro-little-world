import { ArrowRight, Bot, Heart, LayoutTemplate } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Project, ProjectIcon, ProjectTheme } from '../types.ts'
import { cn } from '../lib/cn.ts'
import { liftCard, textLink } from '../lib/styles.ts'
import { GithubMark } from './GithubMark.tsx'

const icons: Record<ProjectIcon, LucideIcon> = {
  heart: Heart,
  layout: LayoutTemplate,
  bot: Bot,
}

const covers: Record<ProjectTheme, string> = {
  sakura: 'bg-gradient-to-br from-blush via-sakura to-lilac',
  lilac: 'bg-gradient-to-br from-lilac via-blush to-paper',
  peach: 'bg-gradient-to-br from-peach via-sakura/80 to-lilac',
}

type ProjectCardProps = {
  project: Project
  expanded?: boolean
}

export function ProjectCard({ project, expanded = false }: ProjectCardProps) {
  const Icon = icons[project.icon]

  return (
    <article
      id={project.id}
      className={cn(liftCard, 'flex h-full scroll-mt-28 flex-col overflow-hidden')}
    >
      <div className={cn('relative h-40', covers[project.theme])}>
        <div
          aria-hidden
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              'radial-gradient(rgb(255 253 252 / 0.7) 1.2px, transparent 1.2px)',
            backgroundSize: '14px 14px',
          }}
        />
        <p className="absolute top-4 left-4 rounded-full bg-paper/85 px-3 py-1 font-hand text-xl text-berry">
          {project.kicker}
        </p>
        <Icon className="absolute right-5 bottom-4 h-14 w-14 text-berry/35" strokeWidth={1.4} />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl text-ink">{project.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{project.summary}</p>
        {expanded ? (
          <p className="mt-3 text-sm leading-relaxed text-ink">{project.details}</p>
        ) : null}
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <li
              key={item}
              className="rounded-full bg-blush px-2.5 py-1 text-xs font-semibold text-berry"
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex items-center gap-4">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className={textLink}
            >
              <GithubMark className="h-4 w-4" />
              GitHub
            </a>
          ) : (
            <span className="inline-flex items-center gap-1 text-sm text-muted">
              <GithubMark className="h-4 w-4" />
              GitHub
            </span>
          )}
          {expanded ? null : (
            <Link to={`/projects#${project.id}`} className={textLink}>
              详情
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>
    </article>
  )
}
