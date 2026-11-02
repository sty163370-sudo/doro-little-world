import { usePageTitle } from '../hooks/usePageTitle.ts'
import { AboutPreview } from './home/AboutPreview.tsx'
import { FeaturedProjects } from './home/FeaturedProjects.tsx'
import { Hero } from './home/Hero.tsx'
import { LatestPosts } from './home/LatestPosts.tsx'
import { RecentMoments } from './home/RecentMoments.tsx'

export function Home() {
  usePageTitle()

  return (
    <>
      <Hero />
      <AboutPreview />
      <FeaturedProjects />
      <LatestPosts />
      <RecentMoments />
    </>
  )
}
