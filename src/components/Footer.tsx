import { profile } from '../data/profile.ts'
import { SocialLinks } from './SocialLinks.tsx'

export function Footer() {
  return (
    <footer className="relative z-10 px-4 pt-6 pb-28 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 rounded-[32px] bg-blush/80 px-6 py-7 ring-1 ring-white/80 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:pr-36">
        <div>
          <p className="font-display text-2xl text-ink">诗 美 浪漫 爱 这才是我们生活的意义♡</p>
          <p className="mt-1 text-sm text-muted">
            © {profile.year} {profile.name}
          </p>
        </div>
        <SocialLinks />
      </div>
    </footer>
  )
}
