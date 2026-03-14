'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './hero-section.module.css'

const PKG_CMDS: Record<string, string> = {
  npm: 'npx clawhub@latest install sonoscli',
  pnpm: 'pnpm dlx clawhub@latest install sonoscli',
  bun: 'bunx clawhub@latest install sonoscli',
}

export function HeroSection() {
  const [pkg, setPkg] = useState('npm')
  const [copied, setCopied] = useState(false)

  function handleCopy() {
    navigator.clipboard.writeText(PKG_CMDS[pkg]).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    })
  }

  return (
    <section className={styles.hero}>
      <div className={styles.vertical}>智能体技能市场</div>

      <div className={styles.tag}>
        ✓ 已收录超过 23,000 个技能
      </div>

      <h1 className={styles.heading}>
        为智能体铸造的<br />
        <span className={styles.accent}>技能宝库</span>
      </h1>

      <p className={styles.desc}>
        上传 AgentSkills 技能包，像 npm 一样管理版本，<br />
        通过向量搜索让每个技能触手可及。<br />
        没有壁垒，唯有真知。
      </p>

      <div className={styles.actions}>
        <Link href="/auth/login" className={styles.btnInk}>发布技能</Link>
        <Link href="/explore" className={styles.btnOutline}>浏览技能库</Link>
      </div>

      <div className={styles.installBox}>
        <div className={styles.installLabel}>
          <span>一行命令，安装任意技能</span>
          <div className={styles.pkgTabs}>
            {Object.keys(PKG_CMDS).map(key => (
              <button
                key={key}
                className={key === pkg ? styles.pkgActive : styles.pkgTab}
                onClick={() => setPkg(key)}
              >
                {key}
              </button>
            ))}
          </div>
        </div>
        <div className={styles.installCmd}>
          <span className={styles.prompt}>$</span>
          <span className={styles.cmdText}>{PKG_CMDS[pkg]}</span>
          <button className={styles.copyBtn} onClick={handleCopy} title="复制">
            {copied ? '✓' : '⎘'}
          </button>
        </div>
      </div>
    </section>
  )
}
