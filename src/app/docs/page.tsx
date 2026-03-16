import Link from 'next/link'
import styles from './page.module.css'

export const metadata = {
  title: '文档 — 技栈阁',
  description: 'ClawHub / 技栈阁产品文档：产品定位、部署指南、品牌与域名、文档结构。',
}

export default function DocsPage() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.heading}>文档</h1>
        <p className={styles.sub}>
          产品结论、品牌与域名、部署说明，以及后续文档入口。如有更新会在此页或子页中补充。
        </p>
      </header>

      <div className={styles.content}>
        {/* 产品定位 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>一、产品定位</h2>
          <p className={styles.paragraph}>
            <strong>ClawHub（技栈阁）</strong> 是 AI 智能体的技能包（AgentSkills）注册中心 / 市场。
          </p>
          <ul className={styles.list}>
            <li>核心能力：发布与版本管理（类似 npm）、语义/向量搜索、一键安装（如 <code className={styles.code}>npx clawhub@latest install &lt;pkg&gt;</code>）。</li>
            <li>目标用户：全球开发者与 AI 应用构建者。</li>
            <li>官网风格：北欧极简、英文为主、国际化。</li>
          </ul>
        </section>

        {/* 快速开始 / 部署 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>二、快速开始与部署</h2>
          <p className={styles.paragraph}>
            本 Web 应用为 Next.js 项目，部署在 Vercel。简要步骤：
          </p>
          <ol className={styles.list}>
            <li>将代码推送到 GitHub，在 Vercel 导入仓库。</li>
            <li>在 Environment Variables 中配置 <code className={styles.code}>NEXT_PUBLIC_SUPABASE_URL</code> 与 <code className={styles.code}>NEXT_PUBLIC_SUPABASE_ANON_KEY</code>。</li>
            <li>执行 Deploy，获得 <code className={styles.code}>https://xxx.vercel.app</code> 地址。</li>
          </ol>
          <p className={styles.paragraph}>
            详细说明见仓库内 <code className={styles.code}>docs/DEPLOY-VERCEL.md</code>。
          </p>
        </section>

        {/* 品牌与域名 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>三、品牌与域名</h2>
          <p className={styles.paragraph}>
            产品名：<strong>ClawHub</strong>（与 CLI 工具名一致）。首选主站域名建议：
          </p>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>项目</th>
                  <th>结论</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>首选域名</td>
                  <td><strong>useclawhub.com</strong>（已确认可注册）</td>
                </tr>
                <tr>
                  <td>备选</td>
                  <td>clawhub.space、clawhub.plus 等</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className={styles.paragraph}>
            更多域名与注册商对比见 <code className={styles.code}>docs/PRODUCT-DOC.md</code>。
          </p>
        </section>

        {/* 文档目录建议 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>四、文档目录（规划）</h2>
          <p className={styles.paragraph}>
            后续可在本站或仓库中拆分为以下文档，便于统一沟通与评审：
          </p>
          <ul className={styles.list}>
            <li><strong>产品总览</strong> — 本文档（总览 + 域名与注册商结论）</li>
            <li><strong>官网文案</strong> — Hero、功能说明、FAQ、Footer 等</li>
            <li><strong>文档站文案与结构</strong> — 文档站关键页面与导航</li>
            <li><strong>品牌与命名规范</strong> — ClawHub 大小写、缩写、前缀等</li>
          </ul>
        </section>

        {/* 需要补充的功能 */}
        <section className={styles.todoSection}>
          <h2 className={styles.todoTitle}>需要补充的功能与内容</h2>
          <ul className={styles.todoList}>
            <li><strong>文档子页面</strong>：将「部署」「产品/品牌」「CLI 使用」拆成独立路由（如 <code className={styles.code}>/docs/deploy</code>、<code className={styles.code}>/docs/product</code>、<code className={styles.code}>/docs/cli</code>），便于深链接与 SEO。</li>
            <li><strong>侧边栏导航</strong>：文档区增加左侧或顶部锚点导航，方便长文档内跳转。</li>
            <li><strong>CLI 文档</strong>：安装、发布、搜索、安装技能包等命令说明与示例。</li>
            <li><strong>API / 开发者文档</strong>：若提供开放 API，需补充认证、限流与接口说明。</li>
            <li><strong>官网文案与 FAQ</strong>：首页 Hero、功能区块、常见问题（见 PRODUCT-DOC 第五节）。</li>
            <li><strong>关于页</strong>：Footer 已链到 <code className={styles.code}>/about</code>，需实现关于我们 / 开源协议页。</li>
            <li><strong>搜索与筛选</strong>：探索页若数据量增大，可加强语义/向量搜索与筛选能力。</li>
            <li><strong>多语言</strong>：产品定位为国际化，可增加 i18n 与英文文档入口。</li>
          </ul>
        </section>
      </div>
    </div>
  )
}
