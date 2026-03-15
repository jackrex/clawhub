# 将项目部署到 Vercel

本项目的 Web 应用（Next.js）位于仓库根目录。按以下步骤即可部署到 Vercel。

## 方式一：通过 Vercel 网站（推荐）

### 1. 推送代码到 GitHub

确保项目已推送到 GitHub（或 GitLab / Bitbucket）。

```bash
git add .
git commit -m "chore: add Vercel config"
git push origin main
```

### 2. 在 Vercel 导入项目

1. 打开 [vercel.com](https://vercel.com)，登录后点击 **Add New → Project**。
2. 从 Git 导入你的仓库（如 `clawhub`）。
3. 在 **Environment Variables** 中添加（Supabase 在本地 `.env.local` 中已有的两个变量）：
   - `NEXT_PUBLIC_SUPABASE_URL`：你的 Supabase 项目 URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`：你的 Supabase 匿名/公钥
4. 点击 **Deploy**，等待构建完成。

部署完成后会得到类似 `https://xxx.vercel.app` 的地址。

---

## 方式二：通过 Vercel CLI

### 1. 安装并登录 Vercel CLI

```bash
npm i -g vercel
vercel login
```

### 2. 在项目根目录部署

在仓库根目录执行即可，Vercel 会自动识别 Next.js 项目：

```bash
vercel
```

首次会提示链接到已有项目或创建新项目；按提示选择即可。

### 3. 配置环境变量

在 [Vercel Dashboard](https://vercel.com/dashboard) 中进入该项目 → **Settings → Environment Variables**，添加：

| 变量名 | 说明 |
|--------|------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase 项目 URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key |

添加后可在 **Deployments** 中触发一次 **Redeploy** 使新变量生效。

### 4. 生产环境部署

```bash
vercel --prod
```

---

## 注意事项

- **根目录**：Next.js 应用已在仓库根目录，无需设置 Root Directory。
- **环境变量**：未配置 `NEXT_PUBLIC_SUPABASE_*` 时，与 Supabase 相关的功能会报错，务必在 Vercel 中配置。
- **分支**：Vercel 默认会为每次 push 生成预览部署，生产域一般绑定 `main`（或你在设置里指定的生产分支）。
