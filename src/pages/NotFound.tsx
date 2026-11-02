import { Link } from 'react-router-dom'
import doroHero from '../assets/doro/doro-hero.png'
import { usePageTitle } from '../hooks/usePageTitle.ts'
import { btnPrimary } from '../lib/styles.ts'

export function NotFound() {
  usePageTitle('未找到')

  return (
    <div className="mx-auto flex max-w-md flex-col items-center px-5 py-16 text-center sm:py-24">
      <img
        src={doroHero}
        alt=""
        width={777}
        height={723}
        className="w-48"
      />
      <h1 className="font-display text-4xl text-ink">这一页走丢了</h1>
      <p className="mt-2 text-muted">DORO 在桌子底下找过了，不在这里。</p>
      <Link to="/" className={`${btnPrimary} mt-6`}>
        回首页
      </Link>
    </div>
  )
}
