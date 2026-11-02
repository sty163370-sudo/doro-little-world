import { Mail } from 'lucide-react'
import { socialLinks } from '../data/profile.ts'
import { cn } from '../lib/cn.ts'
import { GithubMark, XMark } from './GithubMark.tsx'

type SocialLinksProps = {
  className?: string
}

export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <ul className={cn('flex items-center gap-2', className)}>
      {socialLinks.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
            aria-label={link.label}
            className="btn-motion flex h-11 w-11 items-center justify-center rounded-full bg-paper text-berry shadow-soft ring-1 ring-sakura hover:bg-blush"
          >
            {link.icon === 'github' ? (
              <GithubMark className="h-4 w-4" />
            ) : link.icon === 'x' ? (
              <XMark className="h-3.5 w-3.5" />
            ) : (
              <Mail className="h-4 w-4" />
            )}
          </a>
        </li>
      ))}
    </ul>
  )
}
