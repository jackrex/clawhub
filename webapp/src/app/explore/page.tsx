'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { SKILLS_DATA, formatNumber } from '@/lib/skills-data'
import type { Skill } from '@/lib/skills-data'
import styles from './page.module.css'

type SortKey = 'downloads' | 'stars' | 'name' | 'newest'

const PER_PAGE = 8

export default function ExplorePage() {
  const [query, setQuery] = useState('')
  const [filterHighlighted, setFilterHighlighted] = useState(false)
  const [sortBy, setSortBy] = useState<SortKey>('downloads')
  const [page, setPage] = useState(1)

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim()
    let list = SKILLS_DATA.filter(s => {
      if (filterHighlighted && !s.highlighted) return false
      if (q && !s.name.toLowerCase().includes(q)
            && !s.slug.toLowerCase().includes(q)
            && !s.summary.toLowerCase().includes(q)
            && !s.tags.some(t => t.toLowerCase().includes(q))) {
        return false
      }
      return true
    })

    list.sort((a, b) => {
      switch (sortBy) {
        case 'downloads': return b.downloads - a.downloads
        case 'stars': return b.stars - a.stars
        case 'name': return a.name.localeCompare(b.name, 'zh')
        default: return 0
      }
    })

    return list
  }, [query, filterHighlighted, sortBy])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE))
  const currentPage = Math.min(page, totalPages)
  const pageItems = filtered.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE)

  function handleFilterChange(highlighted: boolean) {
    setFilterHighlighted(highlighted)
    setPage(1)
  }

  function handleSearch(value: string) {
    setQuery(value)
    setPage(1)
  }

  return (
    <div className={styles.wrapper}>
      {/* Header */}
      <div className={styles.header}>
        <h1 className={styles.heading}>技能库</h1>
        <p className={styles.sub}>浏览和搜索所有可用技能</p>

        <div className={styles.toolbar}>
          <div className={styles.searchBox}>
            <span className={styles.searchIcon}>🔍</span>
            <input
              type="text"
              placeholder="按名称、slug 或描述搜索..."
              value={query}
              onChange={e => handleSearch(e.target.value)}
              className={styles.searchInput}
            />
          </div>

          <div className={styles.filterGroup}>
            <button
              className={`${styles.filterBtn} ${!filterHighlighted ? styles.filterActive : ''}`}
              onClick={() => handleFilterChange(false)}
            >
              全部
            </button>
            <button
              className={`${styles.filterBtn} ${filterHighlighted ? styles.filterActive : ''}`}
              onClick={() => handleFilterChange(true)}
            >
              精选
            </button>
          </div>

          <select
            className={styles.sortSelect}
            value={sortBy}
            onChange={e => setSortBy(e.target.value as SortKey)}
          >
            <option value="downloads">下载量</option>
            <option value="stars">星标数</option>
            <option value="name">名称</option>
            <option value="newest">最新</option>
          </select>
        </div>
      </div>

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.count}>
          共找到 <strong>{filtered.length}</strong> 个技能
        </div>

        {pageItems.length > 0 ? (
          <div className={styles.list}>
            {pageItems.map(skill => (
              <SkillRow key={skill.id} skill={skill} />
            ))}
          </div>
        ) : (
          <div className={styles.empty}>没有找到匹配的技能</div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className={styles.pagination}>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
              <button
                key={p}
                className={`${styles.pageBtn} ${p === currentPage ? styles.pageBtnActive : ''}`}
                onClick={() => { setPage(p); window.scrollTo(0, 200) }}
              >
                {p}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function SkillRow({ skill }: { skill: Skill }) {
  return (
    <Link href={`/explore/${skill.id}`} className={styles.row}>
      <div className={styles.rowIcon}>{skill.icon}</div>
      <div className={styles.rowInfo}>
        <h3 className={styles.rowName}>
          {skill.name}
          {skill.highlighted && <span className={styles.rowBadge}>精选</span>}
        </h3>
        <div className={styles.rowDesc}>{skill.summary}</div>
      </div>
      <div className={styles.rowMeta}>
        <span className={styles.rowAuthor}>@{skill.author}</span>
        <span>⭐ {formatNumber(skill.stars)}</span>
        <span>↓ {formatNumber(skill.downloads)}</span>
      </div>
    </Link>
  )
}
