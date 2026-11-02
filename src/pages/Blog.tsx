import { Search, X } from 'lucide-react'
import { useMemo, useState } from 'react'
import { BlogCard } from '../components/BlogCard.tsx'
import { DoroFigure } from '../components/DoroFigure.tsx'
import { PageHeader } from '../components/PageHeader.tsx'
import { posts } from '../data/posts.ts'
import { usePageTitle } from '../hooks/usePageTitle.ts'
import { cn } from '../lib/cn.ts'
import { postCategories, type PostCategory } from '../types.ts'

const filters: Array<PostCategory | '全部'> = ['全部', ...postCategories]

export function Blog() {
  usePageTitle('博客')
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<PostCategory | '全部'>('全部')

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase()
    return posts.filter((post) => {
      const matchesCategory = category === '全部' || post.category === category
      if (!matchesCategory) return false
      if (!needle) return true
      const haystack = [post.title, post.excerpt, post.category, ...post.tags]
        .join(' ')
        .toLowerCase()
      return haystack.includes(needle)
    })
  }, [category, query])

  return (
    <>
      <PageHeader
        kicker="成长笔记"
        title="博客"
        description="记录我在代码学习和生活上的成长，我会在这里发布我的学习笔记、行业感想、自身成长、文学创作。"
      >
        <div className="flex flex-col gap-4">
          <label className="relative block max-w-md">
            <span className="sr-only">搜索文章</span>
            <Search
              className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-berry"
              aria-hidden
            />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="搜索文章"
              className="w-full rounded-full bg-paper py-3 pr-11 pl-11 text-ink shadow-soft ring-1 ring-sakura placeholder:text-muted/80"
            />
            {query ? (
              <button
                type="button"
                className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full p-1 text-muted hover:bg-blush hover:text-ink"
                aria-label="清除搜索"
                onClick={() => setQuery('')}
              >
                <X className="h-4 w-4" />
              </button>
            ) : null}
          </label>
          <div className="flex flex-wrap gap-2" role="group" aria-label="按分类筛选">
            {filters.map((item) => {
              const active = item === category
              return (
                <button
                  key={item}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setCategory(item)}
                  className={cn(
                    'btn-motion rounded-full px-4 py-1.5 font-display text-sm',
                    active
                      ? 'bg-pop text-white'
                      : 'bg-paper text-ink ring-1 ring-sakura hover:bg-blush',
                  )}
                >
                  {item}
                </button>
              )
            })}
          </div>
        </div>
      </PageHeader>

      <div className="mx-auto max-w-6xl px-5 pb-8 sm:px-8">
        {visible.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2">
            {visible.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="mx-auto flex max-w-sm flex-col items-center py-8 text-center">
            <DoroFigure imgClassName="mx-auto w-40" frameClassName="mt-3" />
            <p className="font-hand text-[2rem] text-berry">
              {query.trim() ? '没有找到这篇' : '还空着'}
            </p>
            <p className="text-sm text-muted">
              {query.trim()
                ? '换个词试试，或者看看全部笔记。'
                : `${category}的文章之后会放在这里。`}
            </p>
          </div>
        )}
      </div>
    </>
  )
}
