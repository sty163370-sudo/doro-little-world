import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { PageHeader } from '../components/PageHeader.tsx'
import { ProjectCard } from '../components/ProjectCard.tsx'
import { projects } from '../data/projects.ts'
import { usePageTitle } from '../hooks/usePageTitle.ts'

export function Projects() {
  usePageTitle('项目')
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const id = decodeURIComponent(location.hash.slice(1))
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, [location.hash])

  return (
    <>
      <PageHeader
        kicker="架子"
        title="项目"
        description="课上的试验、自己练手的东西，还有这个小房间。"
      />
      <div
        className={
          projects.length > 1
            ? 'mx-auto grid max-w-6xl gap-5 px-5 pb-8 sm:px-8 md:grid-cols-2 lg:grid-cols-3'
            : 'mx-auto grid max-w-md gap-5 px-5 pb-8 sm:px-8'
        }
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} expanded />
        ))}
      </div>
    </>
  )
}
