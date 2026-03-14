import type { Skill } from '@/lib/skills-data'
import { SkillCard } from './skill-card'
import styles from './skills-section.module.css'
import Link from 'next/link'

interface Props {
  title: string
  subtitle: string
  skills: Skill[]
  showViewAll?: boolean
}

export function SkillsSection({ title, subtitle, skills, showViewAll }: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.head}>
        <div>
          <h2 className={styles.title}>
            <span className={styles.line} />
            {title}
          </h2>
          <div className={styles.sub}>{subtitle}</div>
        </div>
        {showViewAll && (
          <Link href="/explore" className={styles.viewAll}>查看全部 →</Link>
        )}
      </div>
      <div className={styles.grid}>
        {skills.map(skill => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </section>
  )
}
