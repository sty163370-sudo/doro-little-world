import doroHero from '../assets/doro/doro-hero.png'
import { PageHeader } from '../components/PageHeader.tsx'
import { SocialLinks } from '../components/SocialLinks.tsx'
import { WashiTape } from '../components/Decorations.tsx'
import { chapters, profile } from '../data/profile.ts'
import { usePageTitle } from '../hooks/usePageTitle.ts'
import { journalCard } from '../lib/styles.ts'
import { cn } from '../lib/cn.ts'

export function About() {
  usePageTitle('关于')

  return (
    <>
      <PageHeader
        kicker="手账的几页"
        title="关于我"
        description="大四计算机学生。这里记下学习、项目，和生活里值得分享的小事。"
      />
      <div className="mx-auto grid max-w-6xl items-start gap-8 px-5 pb-8 sm:px-8 lg:grid-cols-[0.82fr_1.18fr]">
        <aside className="relative mx-auto w-full max-w-sm lg:sticky lg:top-28">
          <WashiTape className="absolute top-0 left-8 z-10 -rotate-6" />
          <div className={cn(journalCard, 'px-4 pt-8 pb-5')}>
            <img
              src={doroHero}
              alt="粉色头发、戴着玫瑰和紫色蝴蝶结的可爱 DORO"
              width={777}
              height={723}
              className="doro-mask mx-auto w-full max-w-[280px]"
            />
            <p className="text-center font-hand text-[1.8rem] text-ink">晒太阳和 DORO</p>
            <p className="mt-1 text-center text-sm text-muted">计算机 · 前端 · 生活</p>
            <ul className="mt-4 flex flex-wrap justify-center gap-2">
              {profile.interests.map((interest) => (
                <li
                  key={interest}
                  className="rounded-full bg-blush px-3 py-1 text-sm font-semibold text-berry"
                >
                  {interest}
                </li>
              ))}
            </ul>
            <SocialLinks className="mt-5 justify-center" />
          </div>
        </aside>

        <div className="grid gap-4">
          {chapters.map((chapter) => (
            <article key={chapter.title} className={cn(journalCard, 'px-5 py-5 sm:px-6')}>
              <h2 className="font-display text-2xl text-ink">{chapter.title}</h2>
              <p className="mt-2 leading-relaxed text-pretty text-muted">{chapter.body}</p>
            </article>
          ))}
        </div>
      </div>
    </>
  )
}
