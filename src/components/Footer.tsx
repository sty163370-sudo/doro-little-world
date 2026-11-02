import { Link } from 'react-router-dom'
import { navItems, profile } from '../data/profile.ts'
import { SocialLinks } from './SocialLinks.tsx'

export function Footer() {
  return (
    <footer className="relative z-10 px-4 pt-8 pb-28 sm:px-6">
      <div className="mx-auto max-w-6xl rounded-card bg-paper px-6 py-8 shadow-soft ring-1 ring-sakura/70 sm:px-8 sm:pr-36">
        <div className="grid gap-8 md:grid-cols-[1.3fr_0.7fr] md:items-end">
          <div>
            <p className="font-hand text-[1.85rem] text-berry">写到这里</p>
            <p className="mt-1 font-display text-3xl text-ink">{profile.siteName}</p>
            <p className="mt-3 max-w-md text-pretty leading-relaxed text-muted">
              诗、美、浪漫、爱。这才是我们生活的意义。
            </p>
          </div>
          <div>
            <p className="font-hand text-[1.6rem] text-berry">再去看看</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="inline-flex rounded-full bg-blush px-3.5 py-1.5 font-display text-sm text-berry hover:bg-sakura/50"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <SocialLinks className="mt-4" />
          </div>
        </div>
        <p className="mt-8 border-t border-sakura/60 pt-4 text-sm text-muted">
          © {profile.year} {profile.name}
          <span className="mx-2 text-sakura">·</span>
          {profile.intro}
        </p>
      </div>
    </footer>
  )
}
