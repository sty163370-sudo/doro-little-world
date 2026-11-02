import type { Project } from '../types.ts'

/** 新增项目时往这个数组里加一项即可。github 先留空，有地址后再填。 */
export const projects: Project[] = [
  {
    id: 'doros-little-world',
    name: 'DORO 的小世界',
    kicker: '这个站',
    summary: '你现在待着的房间。用来长期放项目、学习笔记和日常碎片。',
    details:
      '我想要一个能一直往里加东西的站点，而不是又一个深色的开发者模板。页面、笔记和小互动都住在这里，粉色是故意的。',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind'],
    theme: 'sakura',
    icon: 'heart',
    github: 'https://github.com/sty163370-sudo',
  },
]
