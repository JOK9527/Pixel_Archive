# Phase 15：发布准备与部署检查

> 本文是 2026-06-12 的部署前历史记录。当前站点已部署到 Cloudflare Workers Static Assets，日常操作以 [`docs/27_部署与日常更新操作指南.md`](../27_部署与日常更新操作指南.md) 为准。
>
> 本地状态：已完成  
> 外部部署：等待 Git remote、Cloudflare Pages 项目与正式站点 URL  
> 执行日期：2026-06-12

## 1. 启动条件复核

| Collection | 数量 | 条件 |
| --- | ---: | --- |
| Projects | 3 | 满足 |
| Notes | 5 | 满足 |
| Archive | 5 | 满足 |
| Lab | 2 | 满足 |

## 2. 已完成

- 新增 `/topics/` 分类与标签聚合入口。
- 新增 `/topics/category/[slug]/` 与 `/topics/tag/[slug]/` 静态聚合页。
- Projects 可解析 Related Notes / Archive。
- Notes 可反向解析 Related Projects / Archive。
- 新增 `/rss.xml`，由公开 Notes 自动生成。
- 新增 `/sitemap.xml`，覆盖一级页面、项目、笔记与 Topics。
- 新增 `/robots.txt`。
- BaseLayout 补齐 description、robots、Open Graph、Twitter Card 与 RSS discovery。
- 配置 `PUBLIC_SITE_URL` 后自动输出 canonical、绝对 OG URL、绝对 RSS 链接和 sitemap URL。
- 新增基础 OG SVG。

## 3. Pagefind 决策

当前不启用 Pagefind：

- 本阶段约束为不新增依赖。
- 现有内容量可以先通过 Topics、Related records 与 RSS 完成发现。
- 不自建搜索后端，不接入外部搜索服务。

内容继续增长后，可在单独 Phase 中引入 Pagefind，并把索引构建放入生产构建命令。

## 4. Cloudflare Pages 配置

| 配置项 | 值 |
| --- | --- |
| Framework preset | Astro |
| Production branch | `main` |
| Build command | `npm run build` |
| Build output | `dist` |
| Root directory | `/` |
| Environment variable | `PUBLIC_SITE_URL=https://正式站点地址` |

## 5. 当前外部阻塞

仓库当前没有 Git remote，也没有已确认的 Cloudflare Pages 项目 URL，因此不能：

- 推送到 GitHub。
- 创建或验证 Cloudflare Pages preview。
- 写入真实 canonical 域名。
- 验证公开网络上的 RSS、sitemap 与 OG 抓取。

这些状态不能用占位域名伪装为已完成。代码已经为真实 URL 留出唯一环境变量入口。

## 6. 正式发布检查

```txt
1. 确认所有公开内容与截图通过隐私复核
2. 配置 Git remote 并推送 main
3. 创建 Cloudflare Pages 项目
4. 配置 PUBLIC_SITE_URL
5. 执行 npm run build
6. 验证 /404、/rss.xml、/sitemap.xml、/robots.txt
7. 检查 canonical 与 og:url 使用正式域名
8. 检查桌面、390px、浅色和暗色
9. 检查浏览器控制台 0 error / 0 warning
10. 再绑定正式域名
```
