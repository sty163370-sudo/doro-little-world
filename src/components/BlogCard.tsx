import { Link } from 'react-router-dom'
import type { Post, PostCategory } from '../types.ts'
import { formatDate } from '../lib/format.ts'
import { cn } from '../lib/cn.ts'
import { liftCard } from '../lib/styles.ts'

const categoryTone: Record<PostCategory, string> = {
  前端: 'bg-blush text-berry',
  AI: 'bg-lilac text-ink',
  随想: 'bg-peach text-berry',
}

type BlogCardProps = {
  post: Post
  featured?: boolean
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className={cn(
        liftCard,
        'flex h-full flex-col p-5 sm:p-6',
        featured && 'sm:p-8',
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <span
          className={cn(
            'rounded-full px-3 py-1 text-xs font-bold tracking-wide',
            categoryTone[post.category],
          )}
        >
          {post.category}
        </span>
        {featured ? <span className="font-hand text-2xl text-berry">最新</span> : null}
      </div>
      <h3
        className={cn(
          'mt-4 font-display text-ink',
          featured ? 'text-3xl leading-tight' : 'text-xl',
        )}
      >
        {post.title}
      </h3>
      <p className={cn('mt-2 leading-relaxed text-muted', featured ? '' : 'line-clamp-3')}>
        {post.excerpt}
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <li key={tag} className="text-xs font-semibold text-berry">
            #{tag}
          </li>
        ))}
      </ul>
      <p className="mt-auto pt-5 text-sm text-muted">
        {formatDate(post.date)} · {post.readingMinutes} 分钟阅读
      </p>
    </Link>
  )
}
