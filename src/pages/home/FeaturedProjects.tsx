import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ProjectCard } from '../../components/ProjectCard.tsx'
import { SectionTitle } from '../../components/SectionTitle.tsx'
import { projects } from '../../data/projects.ts'
import { textLink } from '../../lib/styles.ts'

export function FeaturedProjects() {
  return (
    <section id="projects" className="scroll-mt-28 px-5 py-4 pb-16 sm:px-8 md:pb-20">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          index="02"
          eyebrow="架子上的东西"
          title="精选项目"
          action={
            <Link to="/projects" className={textLink}>
              查看全部
              <ArrowRight className="h-4 w-4" />
            </Link>
          }
        />
        <div
          className={
            projects.length > 1
              ? 'grid gap-5 md:grid-cols-2 lg:grid-cols-3'
              : 'grid max-w-md gap-5'
          }
        >
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
