import { HeroSection } from '@/components/hero-section'
import { StatsStrip } from '@/components/stats-strip'
import { SkillsSection } from '@/components/skills-section'
import { SKILLS_DATA } from '@/lib/skills-data'

export default function HomePage() {
  const featured = SKILLS_DATA.filter(s => s.highlighted)
  const popular = [...SKILLS_DATA].sort((a, b) => b.downloads - a.downloads).slice(0, 6)

  return (
    <>
      <HeroSection />
      <StatsStrip />
      <SkillsSection
        title="精选推荐"
        subtitle="经过社区审核，品质有保障"
        skills={featured}
        showViewAll
      />
      <SkillsSection
        title="热门技能"
        subtitle="下载最多的高质量技能"
        skills={popular}
      />
    </>
  )
}
