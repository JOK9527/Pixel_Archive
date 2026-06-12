# Pixel Archive

> Phase 21–22 local development completed on 2026-06-12. Public deployment still waits for a Git remote, Cloudflare Pages project, and confirmed production URL.

Pixel Archive 是一个以极简阅读体验为基础、以像素组件为识别符号、以复古终端和存档隐喻为氛围的个人档案馆。

## 当前阶段

Phase 21：全站 spacing scale、页面栅格、Sidebar 比例、卡片节奏、正文 measure 与 Archive 时间线对齐已完成本地验收。

Phase 22：中英文职责、跨页坐标网格、像素 UI 标签、四模板 metadata 封面系统和静置动效上限已完成本地验收。

当前已在第一阶段结构基线上完成纸白 / 黛蓝 / 亚丁绿 / 朱红 / 琥珀 / 藕荷紫语义色阶，并完成像素语法、首页档案终端、Project 抽象封面、状态系统和栏目识别。页面能力、内容系统、路由与技术栈保持不变。

当前内容基线为 3 个 Projects、5 篇 Notes、5 个 Archive 节点和 2 个 Lab 实验。`/topics/`、`/rss.xml`、`/sitemap.xml` 与 `/robots.txt` 已生成。

Projects 可按 type / status / year.month / tech 浏览，Notes 可按 category / year.month 浏览。筛选使用原生客户端脚本，静态 HTML 默认保留全部内容。

Lab 卡片均为明确的详情入口，当前提供 `/lab/pixel-ui-component-study/` 与 `/lab/project-cover-system/` 两条静态实验记录。

Archive 保留原时间线与存档点结构，同时可按 year.month 和固定类型筛选，并显示当前匹配数量。

正式部署前复制 `.env.example` 的配置方式，在 Cloudflare Pages 中设置：

```bash
PUBLIC_SITE_URL=https://your-production-origin.example
```

该变量用于 canonical、Open Graph、RSS 和 sitemap 的绝对 URL。不要提交本地 `.env`。

## 技术栈

- Astro
- TypeScript
- MDX
- 原生 CSS
- CSS Variables
- Astro Content Collections

## 本地运行

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
npm run preview
```

构建产物输出到 `dist/`。该目录由构建生成，不提交到 Git。

## Cloudflare Pages

推荐通过 Cloudflare Pages 连接 GitHub 仓库：

| 配置项 | 值 |
|---|---|
| Framework preset | Astro |
| Production branch | `main` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | `/` |

第一阶段不需要环境变量、后端服务、数据库或 Cloudflare Workers。正式站点 URL、域名、RSS、搜索和高级 SEO 留到后续阶段。

部署前运行：

```bash
npm install
npm run build
git status
```

确认 `.env`、`node_modules/`、`.astro/` 和 `dist/` 未被 Git 跟踪后，再推送 `main` 分支。

## 目录

```txt
docs/                    项目计划、规范与参考文档
src/components/layout/   Header、Footer 与主题切换
src/components/home/     首页终端、菜单、存档槽与状态栏
src/components/project/  项目卡片、网格、状态、技术栈与链接
src/components/notes/    笔记列表、元信息、类型标识与正文容器
src/components/archive/  存档时间线与存档点
src/components/lab/      实验卡片、网格与类型标识
src/components/ui/       通用视觉组件
src/content/             Markdown / MDX 内容文件
src/content.config.ts    Content Collections schema 与 loaders
src/data/                站点和导航配置
src/layouts/             页面基础布局与项目详情布局
src/lib/content/         Content Collections 读取与数据整理
src/lib/visual/          确定性视觉模型与业务类型映射
src/pages/               Astro 页面路由
src/styles/              主题、全局和 Markdown 样式
```

## 下一步

Phase 21–22 已完成。下一步进入正式部署准备；当前仍缺少 Git remote、Cloudflare Pages 项目和确认后的生产域名。
