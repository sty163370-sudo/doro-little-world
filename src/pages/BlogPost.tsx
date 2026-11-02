import { ArrowLeft } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { getPost } from '../data/posts.ts'
import { usePageTitle } from '../hooks/usePageTitle.ts'
import { formatDate } from '../lib/format.ts'
import { textLink } from '../lib/styles.ts'
import { NotFound } from './NotFound.tsx'

export function BlogPost() {
  const { slug } = useParams()
  const post = slug ? getPost(slug) : undefined
  usePageTitle(post?.title ?? '未找到')

  if (!post) return <NotFound />

  return (
    <article className="mx-auto max-w-2xl px-5 pt-10 pb-8 sm:px-8 md:pt-14">
      <Link to="/blog" className={textLink}>
        <ArrowLeft className="h-4 w-4" />
        回到笔记
      </Link>
      <p className="mt-8 font-hand text-[1.8rem] text-berry">{post.category}</p>
      <h1 className="mt-1 font-display text-4xl leading-tight font-medium text-balance text-ink md:text-5xl">
        {post.title}
      </h1>
      <p className="mt-3 text-sm text-muted">
        {formatDate(post.date)} · {post.readingMinutes} 分钟阅读
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full bg-blush px-3 py-1 text-xs font-bold text-berry"
          >
            #{tag}
          </li>
        ))}
      </ul>
      <div className="mt-8 space-y-5 text-lg leading-8 text-ink">
        {post.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      {post.code ? (
        <figure className="mt-8 overflow-hidden rounded-[24px] shadow-soft ring-1 ring-sakura/80">
          <figcaption className="bg-blush px-4 py-2 font-hand text-[1.45rem] text-berry">
            {post.code.filename}
          </figcaption>
          <pre className="overflow-x-auto bg-[#4a3942] px-4 py-4 text-sm leading-6 text-[#fff1f5]">
            <code>{post.code.content}</code>
          </pre>
        </figure>
      ) : null}
    </article>
  )
}
