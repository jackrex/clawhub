import styles from './stats-strip.module.css'

const STATS = [
  { value: '23,253', label: '技能总数' },
  { value: '1.2M', label: '总安装量' },
  { value: '4,800+', label: '贡献者' },
  { value: 'MIT', label: '开源协议' },
]

export function StatsStrip() {
  return (
    <div className={styles.strip}>
      <div className={styles.grid}>
        {STATS.map((stat) => (
          <div key={stat.label} className={styles.cell}>
            <div className={styles.number}>{stat.value}</div>
            <div className={styles.label}>{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
