import type { Chapter, Fact, NavItem, SocialLink } from '../types.ts'

/** 改这里就能换名字、简介、导航和社交链接。 */
export const profile = {
  name: '晒太阳',
  siteName: '晒太阳的小世界',
  logo: '♡ 晒太阳的小世界',
  greetingName: '晒太阳',
  subtitle: '欢迎来到我的小世界 ♡',
  intro: '一个安放代码、想法和日常的小地方。',
  shortBio:
    '我是一个大四计算机专业的学生，目前正在从前端开发向全栈开发探索。喜欢折腾新技术，也喜欢尝试不同的可能性。希望在这里记录自己的学习、项目、想法，还有生活中那些值得分享的小事。',
  year: 2026,
  interests: ['音乐', '美食', '摄影', '自媒体', '代码'],
}

export const navItems: NavItem[] = [
  { to: '/', label: '首页', end: true },
  { to: '/about', label: '关于' },
  { to: '/projects', label: '项目' },
  { to: '/blog', label: '博客' },
  { to: '/moments', label: '日常' },
]

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/sty163370-sudo', icon: 'github' },
  { label: '推特', href: 'https://x.com/StyLucky628', icon: 'x' },
  { label: '邮箱', href: 'mailto:sty163370@gmail.com', icon: 'mail' },
]

export const facts: Fact[] = [
  { label: '在学', text: '大四计算机，从前端走向全栈。' },
  { label: '在做', text: '主要用 React、TypeScript。' },
  { label: '喜欢', text: '音乐、美食、拍照，也喜欢分享。' },
]

export const chapters: Chapter[] = [
  {
    title: '关于我',
    body: '我是一个大四计算机专业的学生，目前正在从前端开发向全栈开发探索。喜欢折腾新技术，也喜欢尝试不同的可能性。希望在这里记录自己的学习、项目、想法，还有生活中那些值得分享的小事。',
  },
  {
    title: '计算机专业',
    body: '一个正在努力升级打怪的计算机学生。从最初接触前端，到现在慢慢探索后端、AI 和更多技术方向。比起只停留在理论上，我更喜欢亲手做点东西，把想法变成真正能运行的产品。',
  },
  {
    title: '前端 & Coding',
    body: '目前主要使用 React、TypeScript，正在学习更多全栈开发相关的知识。喜欢研究页面背后的实现，也喜欢打磨界面的细节。对我来说，写代码不只是完成需求，也是一种创造。',
  },
  {
    title: '音乐爱好者',
    body: '一个人待着的时候，耳机基本不会闲着。喜欢的歌手有柳爽、薛之谦……听歌的范围也很广，不太局限于某种风格。个人是 QQ 音乐党～',
  },
  {
    title: '美食探索家',
    body: '喜欢吃，探索不同的美食。面食、火锅、炒菜、汉堡都很喜欢。对我来说，吃到好吃的东西是一件很简单但很幸福的事。',
  },
  {
    title: '摄影 & 随便走走',
    body: '喜欢一个人出去走走，看看周围的风景，拍拍照片。记录一些平常容易忽略的小瞬间，也很享受照片带来的小小成就感。',
  },
  {
    title: '自媒体 & 分享',
    body: '喜欢在网上记录生活、发表自己的看法。无论是技术学习、生活感悟，还是突然冒出来的一些想法，都想找个地方分享出来。偶尔收到一些评论和共鸣，也会觉得很开心。',
  },
  {
    title: '关于朋友',
    body: '喜欢认识不同的人，听听不同的故事，也愿意分享自己的经历。世界很大，能遇见一些有趣的人，本身就是一件很不错的事情。',
  },
]
