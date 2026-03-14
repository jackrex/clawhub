'use client'

import { useState } from 'react'
import { login, signup } from '@/app/auth/actions'
import styles from './page.module.css'

export default function LoginPage() {
  const [isRegister, setIsRegister] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(formData: FormData) {
    setLoading(true)
    setError(null)
    const action = isRegister ? signup : login
    const result = await action(formData)
    if (result?.error) {
      setError(result.error)
    }
    setLoading(false)
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.seal}>技</div>
        <h1 className={styles.title}>{isRegister ? '注册' : '登录'}</h1>
        <p className={styles.subtitle}>
          {isRegister ? '创建账号开始分享你的技能' : '登录后即可发布和收藏技能'}
        </p>

        {error && <div className={styles.error}>{error}</div>}

        <form action={handleSubmit}>
          <div className={styles.field}>
            <label htmlFor="email">邮箱</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="your@email.com"
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="password">密码</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              minLength={6}
              placeholder="至少6位字符"
            />
          </div>
          <button type="submit" className={styles.submitBtn} disabled={loading}>
            {loading ? '处理中...' : isRegister ? '注册' : '登录'}
          </button>
        </form>

        <div className={styles.toggle}>
          {isRegister ? '已有账号？' : '还没有账号？'}
          <button onClick={() => { setIsRegister(!isRegister); setError(null) }}>
            {isRegister ? '去登录' : '去注册'}
          </button>
        </div>
      </div>
    </div>
  )
}
