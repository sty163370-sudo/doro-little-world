import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { BlogCard } from '../../components/BlogCard.tsx'
import { SectionTitle } from '../../components/SectionTitle.tsx'
import { posts } from '../../data/posts.ts'
import { textLink } from '../../lib/styles.ts'

export function LatestPosts() {
  const [featured, ...rest] = posts

  return (
    <section id="blog" className="scroll-mt-28 px-5 py-4 pb-16 sm:px-8 md:pb-20">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          index="03"
          eyebrow="笔记本里"
          title="最新文章"
          action={
            <Link to="/blog" className={textLink}>
              去看文章
              <ArrowRight className="h-4 w-4" />
            </Link>
          }
        />
        {featured ? (
          <div className="grid gap-5 lg:grid-cols-2">
            <BlogCard post={featured} featured />
            <div className="grid gap-5">
              {rest.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}
