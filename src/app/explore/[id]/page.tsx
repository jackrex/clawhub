'use client'

import { use, useState } from 'react'
import Link from 'next/link'
import { getSkillById, formatNumber } from '@/lib/skills-data'
import { notFound } from 'next/navigation'
import styles from './page.module.css'

const PKG_CMDS = (slug: string) => ({
  npm: `npx clawhub@latest install ${slug}`,
  pnpm: `pnpm dlx clawhub@latest install ${slug}`,
  bun: `bunx clawhub@latest install ${slug}`,
})

export default function SkillDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const skill = getSkillById(id)
  const [copied, setCopied] = useState(false)
  const [pkg, setPkg] = useState<'npm' | 'pnpm' | 'bun'>('npm')

  if (!skill) return notFound()

  const slug = skill.slug.replace('/', '')
  const cmds = PKG_CMDS(slug)

  function handleCopy() {
    navigator.clipboard.writeText(cmds[pkg]).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    })
  }

  const readmeLines = skill.desc.split('\n').map((line, i) => {
    if (line.startsWith('## ')) return <h3 key={i} className={styles.readmeH3}>{line.replace('## ', '')}</h3>
    if (line.startsWith('- ')) return <li key={i} className={styles.readmeLi}>{line.replace('- ', '')}</li>
    if (line.trim() === '') return null
    return <p key={i} className={styles.readmeP}>{line}</p>
  })

  return (
    <div className={styles.page}>
      <Link href="/explore" className={styles.back}>← 返回</Link>

      <div className={styles.header}>
        <div className={styles.main}>
          <h1 className={styles.title}>
            <span className={styles.titleIcon}>{skill.icon}</span>
            {skill.name}
            {skill.highlighted && <span className={styles.badge}>精选</span>}
          </h1>
          <div className={styles.slug}>{skill.slug}</div>
          <div className={styles.desc}>{skill.summary}</div>
          <div className={styles.author}>
            <div className={styles.authorAvatar}>
              {skill.author.charAt(0).toUpperCase()}
            </div>
            <span>作者 <strong>@{skill.author}</strong></span>
          </div>
        </div>

        <div className={styles.sidebar}>
          {/* Install box */}
          <div className={styles.installCard}>
            <div className={styles.installLabel}>安装</div>
            <div className={styles.pkgTabs}>
              {(['npm', 'pnpm', 'bun'] as const).map(p => (
                <button
                  key={p}
                  className={p === pkg ? styles.pkgActive : styles.pkgTab}
                  onClick={() => setPkg(p)}
                >
                  {p}
                </button>
              ))}
            </div>
            <div className={styles.installCmd}>
              <span className={styles.prompt}>$</span>
              <span className={styles.cmdText}>{cmds[pkg]}</span>
              <button className={styles.copyBtn} onClick={handleCopy}>
                {copied ? '✓' : '⎘'}
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className={styles.statsGrid}>
            <div className={styles.statBox}>
              <div className={styles.statVal}>{formatNumber(skill.downloads)}</div>
              <div className={styles.statLabel}>下载</div>
            </div>
            <div className={styles.statBox}>
              <div className={styles.statVal}>{formatNumber(skill.stars)}</div>
              <div className={styles.statLabel}>收藏</div>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className={styles.body}>
        <h2 className={styles.bodyTitle}>说明文档</h2>
        <div className={styles.readme}>{readmeLines}</div>

        {skill.tags.length > 0 && (
          <div className={styles.tagsSection}>
            <div className={styles.tagsLabel}>标签</div>
            <div className={styles.tags}>
              {skill.tags.map(tag => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
          </div>
        )}

        <div className={styles.versionsSection}>
          <h3 className={styles.versionsTitle}>版本历史</h3>
          {skill.versions.map(v => (
            <div key={v.v} className={styles.versionRow}>
              <span className={styles.versionNum}>v{v.v}</span>
              <span className={styles.versionDate}>{v.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
