import Link from 'next/link'
import styles from './footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>技栈阁 &copy; 2026 &middot; 开源项目 (MIT)</div>
        <div className={styles.links}>
          <Link href="https://github.com" target="_blank">GitHub</Link>
          <Link href="/docs">文档</Link>
          <Link href="/about">关于</Link>
        </div>
      </div>
    </footer>
  )
}
