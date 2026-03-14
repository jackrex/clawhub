import type { Skill } from '@/lib/skills-data'
import { formatNumber } from '@/lib/skills-data'
import styles from './skill-card.module.css'

export function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <div className={styles.iconWrap}>{skill.icon}</div>
        {skill.highlighted && <span className={styles.badge}>精选</span>}
      </div>
      <h3 className={styles.name}>{skill.name}</h3>
      <div className={styles.desc}>{skill.summary}</div>
      <div className={styles.meta}>
        <span className={styles.author}>@{skill.author}</span>
        <div className={styles.stats}>
          <span>⭐ {formatNumber(skill.stars)}</span>
          <span>↓ {formatNumber(skill.downloads)}</span>
        </div>
      </div>
    </div>
  )
}
