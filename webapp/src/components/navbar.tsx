'use client'

import { useEffect, useState, useCallback } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import type { User } from '@supabase/supabase-js'
import { useTheme } from '@/contexts/theme-context'
import styles from './navbar.module.css'

export function Navbar() {
  const [user, setUser] = useState<User | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter()
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const supabase = createClient()

    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [])

  const handleSignOut = useCallback(async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    setUser(null)
    setMenuOpen(false)
    router.refresh()
  }, [router])

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>
        <div className={styles.seal}>技</div>
        <span className={styles.title}>技栈阁</span>
      </Link>

      <div className={styles.links}>
        <Link href="/">首页</Link>
        <Link href="/explore">探索技能</Link>
        <Link href="/docs">文档</Link>
      </div>

      <div className={styles.right}>
        <button
          type="button"
          className={styles.themeToggle}
          onClick={toggleTheme}
          title={theme === 'ink' ? '切换为北欧简约风' : '切换为水墨风'}
          aria-label={theme === 'ink' ? '切换为北欧简约风' : '切换为水墨风'}
        >
          <span className={theme === 'ink' ? styles.themeActive : ''}>水墨</span>
          <span className={styles.themeDivider}>/</span>
          <span className={theme === 'nordic' ? styles.themeActive : ''}>北欧</span>
        </button>
        {user ? (
          <div className={styles.userWrap}>
            <button
              className={styles.avatar}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {user.email?.charAt(0).toUpperCase()}
            </button>
            {menuOpen && (
              <div className={styles.menu}>
                <div className={styles.menuEmail}>{user.email}</div>
                <div className={styles.menuDivider} />
                <button onClick={handleSignOut} className={styles.menuItem}>
                  退出登录
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link href="/auth/login" className={styles.loginBtn}>
            登录
          </Link>
        )}
      </div>
    </nav>
  )
}
