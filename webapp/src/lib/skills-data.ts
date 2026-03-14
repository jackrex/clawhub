export interface SkillVersion {
  v: string
  date: string
}

export interface Skill {
  id: string
  name: string
  slug: string
  icon: string
  summary: string
  desc: string
  author: string
  stars: number
  downloads: number
  highlighted: boolean
  tags: string[]
  versions: SkillVersion[]
}

export const SKILLS_DATA: Skill[] = [
  {
    id: 'slack',
    name: 'Slack 集成',
    slug: '/slack',
    icon: '💬',
    summary: '通过 Slack 工具控制工作空间 — 回复消息、置顶内容、管理频道和私信。',
    desc: '完整的 Slack API 集成，支持发送/接收消息、管理频道、设置提醒等功能。\n\n## 功能特性\n- 发送和接收消息\n- 管理频道和私信\n- 置顶和取消置顶消息\n- 设置和管理提醒\n- 自定义机器人回复',
    author: 'steipete',
    stars: 88,
    downloads: 26700,
    highlighted: true,
    tags: ['通讯', '工作流', 'API'],
    versions: [{ v: '2.1.0', date: '2026-03-10' }, { v: '2.0.0', date: '2026-02-15' }, { v: '1.3.2', date: '2026-01-20' }],
  },
  {
    id: 'calendar',
    name: '日历同步',
    slug: '/caldav-calendar',
    icon: '📅',
    summary: '同步和查询 CalDAV 日历 — iCloud、Google、Fastmail、Nextcloud 等全平台支持。',
    desc: '基于 vdirsyncer + khal 实现的 CalDAV 日历同步工具。\n\n## 支持平台\n- iCloud Calendar\n- Google Calendar\n- Fastmail\n- Nextcloud\n- 其他 CalDAV 兼容服务',
    author: 'Asleep123',
    stars: 171,
    downloads: 18900,
    highlighted: true,
    tags: ['日历', '同步', '效率'],
    versions: [{ v: '1.4.0', date: '2026-03-08' }, { v: '1.3.0', date: '2026-02-01' }],
  },
  {
    id: 'trello',
    name: 'Trello 看板',
    slug: '/trello',
    icon: '📋',
    summary: '通过 REST API 管理 Trello 看板、列表和卡片，轻松融入 AI 工作流。',
    desc: 'Trello 看板管理技能，支持看板、列表、卡片的完整 CRUD 操作。',
    author: 'steipete',
    stars: 101,
    downloads: 24800,
    highlighted: true,
    tags: ['项目管理', '看板', 'API'],
    versions: [{ v: '1.2.0', date: '2026-03-05' }, { v: '1.1.0', date: '2026-01-12' }],
  },
  {
    id: 'answer-overflow',
    name: 'Answer Overflow',
    slug: '/answer-overflow',
    icon: '🔎',
    summary: '搜索已索引的 Discord 社区讨论，发现编程问题的解决方案和社区问答。',
    desc: '从已索引的 Discord 讨论中搜索答案。',
    author: 'overflow',
    stars: 52,
    downloads: 12300,
    highlighted: true,
    tags: ['搜索', '社区', 'Discord'],
    versions: [{ v: '1.0.3', date: '2026-02-20' }],
  },
  {
    id: 'self-improving',
    name: '自我进化代理',
    slug: '/self-improving-agent',
    icon: '⚡',
    summary: '捕获学习过程、错误和修正以实现持续自我改进，让 AI 越用越聪明。',
    desc: '自我改进代理技能，通过持续学习和错误修正来提升 AI 的表现。\n\n## 核心能力\n- 自动记录操作失败和成功的经验\n- 从用户纠正中学习\n- 持续优化决策质量',
    author: 'pskoett',
    stars: 2000,
    downloads: 209000,
    highlighted: false,
    tags: ['AI', '学习', '代理'],
    versions: [{ v: '15.0.0', date: '2026-03-12' }, { v: '14.2.0', date: '2026-02-28' }, { v: '14.0.0', date: '2026-01-15' }],
  },
  {
    id: 'summarize',
    name: '智能摘要',
    slug: '/summarize',
    icon: '📝',
    summary: '使用 summarize CLI 对 URL 或文件进行摘要 — 支持网页、PDF、音频、YouTube。',
    desc: '多格式内容摘要工具，支持网页、PDF、音频文件和 YouTube 视频的自动摘要。',
    author: 'steipete',
    stars: 588,
    downloads: 155000,
    highlighted: false,
    tags: ['摘要', 'NLP', '工具'],
    versions: [{ v: '3.1.0', date: '2026-03-11' }],
  },
  {
    id: 'weather',
    name: '天气预报',
    slug: '/weather',
    icon: '🌐',
    summary: '获取当前天气和预报信息，无需 API 密钥，开箱即用。',
    desc: '天气查询技能，无需任何 API 密钥即可获取实时天气和未来预报。',
    author: 'steipete',
    stars: 284,
    downloads: 92200,
    highlighted: false,
    tags: ['天气', 'API', '工具'],
    versions: [{ v: '2.0.0', date: '2026-03-01' }],
  },
  {
    id: 'gog',
    name: 'Google 办公套件',
    slug: '/gog',
    icon: '📧',
    summary: 'Google Workspace CLI — 集成 Gmail、日历、Drive、通讯录、表格和文档。',
    desc: 'Google Workspace 全家桶集成，一个技能覆盖所有 Google 办公产品。',
    author: 'steipete',
    stars: 724,
    downloads: 112000,
    highlighted: false,
    tags: ['Google', '邮件', '办公'],
    versions: [{ v: '4.2.0', date: '2026-03-09' }],
  },
  {
    id: 'github',
    name: 'GitHub 集成',
    slug: '/github',
    icon: '🐙',
    summary: '通过 gh CLI 与 GitHub 交互 — Issues、PR、CI Runs 和高级查询。',
    desc: 'GitHub 完整集成，覆盖 Issues、Pull Requests、CI/CD 和高级搜索。',
    author: 'steipete',
    stars: 349,
    downloads: 107000,
    highlighted: false,
    tags: ['GitHub', '代码', 'CI/CD'],
    versions: [{ v: '5.0.0', date: '2026-03-07' }],
  },
  {
    id: 'ontology',
    name: '知识图谱',
    slug: '/ontology',
    icon: '🧠',
    summary: '类型化知识图谱 — 结构化代理记忆和可组合技能。',
    desc: '知识图谱技能，为 AI 代理提供结构化的长期记忆和可组合的技能体系。',
    author: 'oswalpalash',
    stars: 263,
    downloads: 103000,
    highlighted: false,
    tags: ['知识图谱', '记忆', 'AI'],
    versions: [{ v: '2.3.0', date: '2026-03-06' }],
  },
  {
    id: 'find-skills',
    name: '技能发现',
    slug: '/find-skills',
    icon: '🔍',
    summary: '帮助用户发现和安装 Agent 技能 — 智能推荐最匹配的技能包。',
    desc: '技能发现助手，通过语义搜索和智能推荐帮助用户找到最合适的技能包。',
    author: 'JimLiuxinghai',
    stars: 836,
    downloads: 203000,
    highlighted: false,
    tags: ['搜索', '推荐', '元技能'],
    versions: [{ v: '1.5.0', date: '2026-03-04' }],
  },
  {
    id: 'proactive',
    name: '主动代理',
    slug: '/proactive-agent',
    icon: '🚀',
    summary: '将 AI 代理从被动执行者转变为主动合作伙伴，预判需求并持续改进。',
    desc: '主动代理技能，让 AI 代理主动预判用户需求并提供建议。',
    author: 'ivcode',
    stars: 445,
    downloads: 88000,
    highlighted: false,
    tags: ['代理', 'AI', '自动化'],
    versions: [{ v: '3.0.0', date: '2026-03-02' }],
  },
]

export function formatNumber(n: number): string {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M'
  if (n >= 1000) return (n / 1000).toFixed(n >= 10000 ? 0 : 1) + 'k'
  return n.toString()
}

export function getSkillById(id: string): Skill | undefined {
  return SKILLS_DATA.find(s => s.id === id)
}
