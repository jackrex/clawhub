# 将 webapp 部署到 Vercel

本项目的 Web 应用（Next.js）位于 `webapp/` 目录。按以下步骤即可部署到 Vercel。

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
3. **重要**：在项目设置中，将 **Root Directory** 设置为 `webapp`（点击 Edit 后填入 `webapp` 并保存）。
4. 在 **Environment Variables** 中添加（Supabase 在本地/.env.local 中已有的两个变量）：
   - `NEXT_PUBLIC_SUPABASE_URL`：你的 Supabase 项目 URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`：你的 Supabase 匿名/公钥
5. 点击 **Deploy**，等待构建完成。

部署完成后会得到类似 `https://xxx.vercel.app` 的地址。

---

## 方式二：通过 Vercel CLI

### 1. 安装并登录 Vercel CLI

```bash
npm i -g vercel
vercel login
```

### 2. 在 webapp 目录下部署

**必须**在 `webapp` 目录下执行，这样 Vercel 才会以 Next.js 项目识别：

```bash
cd webapp
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
cd webapp
vercel --prod
```

---

## 注意事项

- **Root Directory**：若在网页端从仓库根目录导入，务必把 Root Directory 设为 `webapp`，否则会找不到 Next.js 项目。
- **环境变量**：未配置 `NEXT_PUBLIC_SUPABASE_*` 时，与 Supabase 相关的功能会报错，务必在 Vercel 中配置。
- **分支**：Vercel 默认会为每次 push 生成预览部署，生产域一般绑定 `main`（或你在设置里指定的生产分支）。
