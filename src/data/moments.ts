import type { MomentEntry, MomentShelf } from '../types.ts'

/** 生活记录按板块放。照片有本地图片时，把路径写进 image，例如 /images/moments/walk.jpg。 */
export const shelves: MomentShelf[] = [
  {
    id: 'photos',
    label: '照片',
    hint: '出去走走时留下的画面。',
    icon: 'camera',
  },
  {
    id: 'music',
    label: '音乐',
    hint: '一个人待着时，耳机里的歌。',
    icon: 'music',
  },
  {
    id: 'food',
    label: '美食',
    hint: '吃到好吃的，就记一笔。',
    icon: 'food',
  },
  {
    id: 'mood',
    label: '情绪',
    hint: '不想解释太长的心情。',
    icon: 'mood',
  },
  {
    id: 'days',
    label: '日常',
    hint: '平常的一小段，也值得留下。',
    icon: 'days',
  },
]

export const momentEntries: MomentEntry[] = [
  {
    id: 'photo-lake',
    shelf: 'photos',
    date: '2026-10-28',
    title: '湖面',
    note: '',
    image: '/images/moments/lake.jpg',
  },
  {
    id: 'photo-fireworks',
    shelf: 'photos',
    date: '2026-10-28',
    title: '烟花',
    note: '',
    image: '/images/moments/fireworks.jpg',
  },
  {
    id: 'photo-concert',
    shelf: 'photos',
    date: '2026-10-28',
    title: '为赴死浪漫而活',
    note: '',
    image: '/images/moments/concert.jpg',
  },
  {
    id: 'photo-night-river',
    shelf: 'photos',
    date: '2026-10-28',
    title: '夜色',
    note: '',
    image: '/images/moments/night-river.jpg',
  },
  {
    id: 'photo-mountains',
    shelf: 'photos',
    date: '2026-10-28',
    title: '云和山',
    note: '',
    image: '/images/moments/mountains.jpg',
  },
  {
    id: 'photo-cat',
    shelf: 'photos',
    date: '2026-10-28',
    title: '草丛里',
    note: '',
    image: '/images/moments/cat.jpg',
  },
  {
    id: 'music-liu',
    shelf: 'music',
    date: '2026-10-26',
    title: '柳爽',
    note: '从高中的漠河舞厅认识他，后面就深入了解他，不管是听歌，还是看他的公众号，都很喜欢。无数个深夜里，我的耳机里都在放他的歌曲。现在，我想送给自己一句歌词：喜欢的话，浪漫又和平。',
    image: '/images/moments/liu-shuang.jpg',
  },
  {
    id: 'music-xue',
    shelf: 'music',
    date: '2026-10-21',
    title: '薛之谦',
    note: '从小学认识他，然后就听他的歌，21岁的生日还和朋友一起去看了他的演唱会，很开心~',
    image: '/images/moments/xue-zhiqian.jpg',
  },
  {
    id: 'food-hotpot',
    shelf: 'food',
    date: '2026-10-31',
    title: '火锅',
    note: '最近很喜欢吃火锅，热气腾腾的一顿饭，总能让心情变好。吃饱了就很开心。',
    image: '/images/moments/hotpot.jpg',
  },
  {
    id: 'food-noodles',
    shelf: 'food',
    date: '2026-10-31',
    title: '面',
    note: '对面食真的没有抵抗力。汤面、拌面都喜欢，有时候甚至可以一天吃两顿面。',
    image: '/images/moments/noodles.jpg',
  },
  {
    id: 'mood-soft',
    shelf: 'mood',
    date: '2026-10-27',
    title: '想慢一点',
    note: '没什么大事。只是今天不想赶。',
  },
  {
    id: 'mood-share',
    shelf: 'mood',
    date: '2026-10-19',
    title: '想说出来',
    note: '写下来，偶尔收到一点共鸣，会觉得开心。',
  },
  {
    id: 'day-code',
    shelf: 'days',
    date: '2026-10-25',
    title: '打磨一个小细节',
    note: '写代码不只是把需求做完，也像在做一点自己的东西。',
  },
  {
    id: 'day-walk',
    shelf: 'days',
    date: '2026-10-12',
    title: '出门随便走走',
    note: '看看周围，拍几张照片，再回家。',
  },
]

export function entriesFor(shelf: MomentShelf['id']) {
  return momentEntries.filter((entry) => entry.shelf === shelf)
}
