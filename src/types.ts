export type ProjectIcon = 'heart' | 'layout' | 'bot'
export type ProjectTheme = 'sakura' | 'lilac' | 'peach'

export type Project = {
  id: string
  name: string
  summary: string
  details: string
  stack: string[]
  theme: ProjectTheme
  icon: ProjectIcon
  kicker: string
  github: string
}

export type PostCategory = '前端' | 'AI' | '随想'

export type PostCode = {
  filename: string
  content: string
}

export type Post = {
  slug: string
  title: string
  excerpt: string
  category: PostCategory
  tags: string[]
  date: string
  readingMinutes: number
  paragraphs: string[]
  code?: PostCode
}

export type MomentShelfId = 'photos' | 'music' | 'food' | 'mood' | 'days'

export type MomentShelfIcon = 'camera' | 'music' | 'food' | 'mood' | 'days'

export type MomentShelf = {
  id: MomentShelfId
  label: string
  hint: string
  icon: MomentShelfIcon
}

export type MomentEntry = {
  id: string
  shelf: MomentShelfId
  date: string
  title: string
  note: string
  detail?: string
  image?: string
}

export type SocialIcon = 'github' | 'x' | 'mail'

export type SocialLink = {
  label: string
  href: string
  icon: SocialIcon
}

export type NavItem = {
  to: string
  label: string
  end?: boolean
}

export type Chapter = {
  title: string
  body: string
}

export type Fact = {
  label: string
  text: string
}
