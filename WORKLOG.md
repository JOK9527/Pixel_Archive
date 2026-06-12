# WORKLOG

## 2026-06-12 / Phase 21.5

### Archive timeline alignment

- Added one inherited timeline-offset baseline for the axis, nodes, and card indentation.
- Moved save-point nodes onto the card top edge instead of the first metadata row.
- Aligned month labels with the top of each month group and normalized year/month spacing.
- Extended the dashed timeline through the complete record group.
- Reduced the shared timeline offset on narrow screens without changing Archive filtering.

### Verification

- `npm run build`: passed; 51 static pages generated.
- All 5 Archive nodes resolve to 0px axis-center and card-top alignment deltas.
- Mobile dark theme: `milestone` filtering still returns 3 records with 0 actual horizontal scroll.
- Browser console: 0 errors, 0 warnings.

## 2026-06-12 / Phase 21.4

### Text measure and detail-title calibration

- Added a shared display-title measure alongside narrow, reading, and wide text measures.
- Bound Markdown headings and body content to explicit readable widths.
- Reduced the Notes detail title ceiling from 5.2rem to 4.5rem and set a 3rem mobile ceiling.
- Applied balanced display measures to Note, Project, and Lab detail titles.
- Limited detail summaries, About copy, Note lists, and the Home terminal message independently from their containers.

### Verification

- `npm run build`: passed; 51 static pages generated.
- All 5 Note details resolve to a 72px desktop title ceiling and 736px reading measure.
- The longest mixed-language Note title resolves to 46.8px at 390px with 0 actual horizontal scroll.
- Existing TOC heading links remain intact across all Note details.
- Mobile dark theme and browser console: 0 errors, 0 warnings.

## 2026-06-12 / Phase 21.3

### Card internal rhythm

- Rebuilt Note metadata as a primary identity/date row plus a quieter updated row.
- Standardized Project, Note, Archive, and Lab card spacing with the shared token scale.
- Limited card description measures and strengthened action-row separation.
- Grouped Lab tags, date, and action into a stable bottom footer.
- Kept card data inputs, links, filtering metadata, and routes unchanged.

### Verification

- `npm run build`: passed; 51 static pages generated.
- Notes: all 5 cards expose separate primary and updated metadata rows.
- Projects and Lab: action rows resolve to a consistent 25px visual bottom inset.
- Project `ai-tool` filtering still returns 2 records after the component changes.
- Mobile dark theme: Projects and Lab retained 0 actual horizontal scroll.
- Browser console: 0 errors, 0 warnings.

## 2026-06-12 / Phase 21.2

### Page grid and sidebar calibration

- Increased the shared page container to 1216px while staying inside the planned 1120–1240px range.
- Added shared 240px sidebar and responsive column-gap tokens.
- Mapped Projects, Notes, Archive, Lab, and About to the same desktop content grid.
- Increased index and profile-rail padding and gave taxonomy groups clearer internal separation.
- Preserved the existing 54rem single-column mobile collapse.

### Verification

- `npm run build`: passed; 51 static pages generated.
- Projects, Notes, Archive, Lab, and About resolve to the same 240px + 918px grid at 1440px.
- All five pages collapse to a 370px single column at the 390px viewport.
- Mobile dark theme: actual horizontal scroll remained 0.
- Browser console: 0 errors, 0 warnings.

## 2026-06-12 / Phase 21.1

### Spacing token and section-gap audit

- Added a shared 4px-based `--space-0` through `--space-9` scale.
- Added narrow, reading, and wide text measure tokens while preserving the existing reading-width alias.
- Mapped the global page shell and shared section header to the spacing scale.
- Standardized child-page header-to-content spacing at 64px desktop and 48px mobile.
- Kept sidebar, card, timeline, route, content model, and color behavior unchanged for later steps.

### Verification

- `npm run build`: passed; 51 static pages generated.
- Projects desktop: shared header-to-content gap resolves to 64px at 1440px.
- Projects mobile dark theme: shared gap resolves to 48px at 390px.
- Decorative pixel corners are clipped at the site shell; actual horizontal scroll is 0.
- Browser console: 0 errors, 0 warnings.

## 2026-06-12 / Phase 20

### Side assistance and restrained motion

- Added reusable `SideRail`, `OnThisPage`, and `ReadingProgress` components.
- Replaced the NoteLayout inline TOC with an active section index and native scroll-based reading progress.
- Added Lab type/status taxonomy indexing through the existing `SectionIndex` behavior.
- Added a low-contrast About archive profile rail; it hides below 52rem to protect mobile reading width.
- Added a 1–2px slow Home grid drift and a short theme-surface transition window.
- Kept existing Project, Notes, and Archive indexes unchanged because they already satisfy the page mapping.
- Extended the existing global `prefers-reduced-motion` rule to cover all new motion.

### Verification

- `npm run build`: passed; 51 static pages generated.
- Notes detail: 5 heading links detected; reading progress reaches 100% at page end and the last section becomes current.
- Lab index: type/status groups match current content; `done` reports 2 matched records.
- Desktop: Notes detail, Lab, and About inspected at 1440px.
- Mobile dark theme: Notes detail inspected at 390px; actual horizontal scroll remained `0`.
- Reduced motion: cursor blink, status pulse, and Home grid drift all resolve to `0.01ms`.
- Browser console: 0 errors, 0 warnings.
- Screenshots: `output/playwright/phase20-note-desktop.png`, `phase20-lab-desktop.png`, `phase20-about-desktop.png`, and `phase20-note-mobile-dark.png`; retained locally and not committed.
- No dependency, route, Content Collections schema, backend, CMS, or database changes.

### Next

- Configure the Git remote, Cloudflare Pages project, and production origin when deployment details are available.

## 2026-06-12 / Phase 19

### Semantic pixel cover system

- Added deterministic `PixelCover`, `PixelMatrix`, `PixelBars`, and `PixelStatusMark` UI primitives.
- Added five metadata-driven variants: `file-matrix`, `terminal-strip`, `save-chip`, `timeline-fragment`, and `experiment-grid`.
- Mapped Project and Lab types to stable templates; seed, tags, and status determine blocks and bars without runtime randomness.
- Replaced the ProjectCard slug-specific placeholder, Project detail visual, LabCard placeholder, and Home Save Slot screen with the shared system.
- Preserved real cover images and retained stronger height and surface hierarchy for featured Projects.

### Verification

- `npm run build`: passed; 51 static pages generated.
- Determinism: Project cover signatures were identical before and after reload.
- Desktop: Projects, Lab, and Home inspected at 1440px.
- Mobile dark theme: Projects inspected at 390px; actual horizontal scroll remained `0`.
- Browser console: 0 errors, 0 warnings.
- Screenshots: `output/playwright/phase19-projects-desktop.png`, `phase19-lab-desktop.png`, `phase19-home-desktop.png`, and `phase19-projects-mobile-dark.png`; retained locally and not committed.
- No dependency, route, Content Collections schema, backend, CMS, or database changes.

### Next

- Phase 20: side rails, long-page reading aids, and restrained motion.

## 2026-06-12 / Phase 18

### Archive indexing

- 新增 `groupArchiveEntries()` 纯分组函数，页面只读取一次 Archive collection。
- 新增 `getArchiveTaxonomy()`，按 year.month 与固定 type 生成索引。
- ArchiveTimeline 为每个节点输出可筛选 metadata，原有年份、月份、断续时间线和存档卡片结构保持不变。
- Archive 页面接入通用 `SectionIndex`，显示总数、当前匹配数和筛选状态。
- 未扩展 Archive type 枚举，继续遵守 `save-point / milestone / project-log` 稳定接口。

### Verification

- `npm run build`：通过，生成 51 个静态页面。
- `milestone` 筛选：正确显示 3 条记录。
- 时间顺序：`2026-06-12` 在前，`2026-06-11` 节点保持原顺序。
- 桌面 1440px：侧边索引与时间线并列正常。
- 移动端 390px：索引折叠到顶部，实际不可横向滚动。
- 暗色主题：独立检查通过。
- 浏览器控制台：0 error，0 warning。
- 截图：`output/playwright/phase18-archive-desktop.png`、`phase18-archive-mobile-dark.png`，本地保留且不提交。
- 未新增依赖；Content Collections schema 未修改。

### Next

- Phase 19：确定性的语义化像素封面组件族。

## 2026-06-12 / Phase 17

### Lab experiment detail pages

- `LabItem.href` 改为 helper 统一生成的稳定字段，LabCard 自动成为整卡链接。
- 新增 `/lab/[slug]` 静态详情路由与 `LabLayout`。
- 将 `pixel-ui-placeholder` 重命名为 `pixel-ui-component-study`，避免占位语义继续进入公开 URL。
- 两份实验正文补齐目的、当前方案、图形说明、结论与下一步。
- LabCard 增加明确的 `OPEN EXPERIMENT` 文本入口，并保留键盘 focus。

### Verification

- `npm run build`：通过，生成 51 个静态页面。
- `/lab/pixel-ui-component-study/` 与 `/lab/project-cover-system/`：均可访问。
- Lab 列表整卡链接、详情返回 `/lab/`：正常。
- 桌面 1440px 与移动端 390px：布局正常，移动端不可横向滚动。
- 暗色主题：第二个详情页独立检查通过。
- 浏览器控制台：0 error，0 warning。
- 截图：`output/playwright/phase17-lab-detail-desktop.png`、`phase17-lab-detail-mobile-dark.png`，本地保留且不提交。
- 未新增依赖；Content Collections schema 未修改。

### Next

- Phase 18：Archive 年月索引、类型筛选与时间线管理增强。

## 2026-06-12 / Phase 16

### Projects / Notes taxonomy indexes

- 为 Project schema 和输出模型增加稳定 `type` 枚举，并同步三条公开项目内容。
- 新增 `getYearMonth()`、`getProjectTaxonomy()`、`getNoteTaxonomy()` 与 taxonomy value 归一化 helper。
- 新增通用 `SectionIndex`，支持低干扰侧边索引、移动端横向 chips、计数和当前筛选状态。
- Projects 支持 type / status / year.month / tech 单维筛选，Notes 支持 category / year.month 单维筛选。
- 筛选使用原生 JS 与 `hidden`，无 JS 时静态内容仍全部可读。
- 修复脚本在记录 DOM 解析前初始化的问题，并为移动端像素角标保留安全距。

### Verification

- `npm run build`：通过，生成 49 个静态页面。
- Projects 1440px：索引布局正常，`ai-tool` 筛选显示 2 条并隐藏空的 Featured 区域。
- Notes 390px：category 筛选显示正确，横向 chips 可内部滚动，实际页面不可横向滚动。
- 暗色主题：Notes 移动端独立检查通过。
- 浏览器控制台：0 error，0 warning。
- 截图：`output/playwright/phase16-projects-desktop.png`、`phase16-notes-mobile-dark.png`，本地保留且不提交。
- 未新增依赖、路由、后端、CMS 或数据库。

### Next

- Phase 17：Lab 详情路由、卡片链接化与实验正文结构。

## 2026-06-12 / Phase 12-13 completion audit

### Metadata corrections

- Added optional `updatedDate` support to Project content and timeline output.
- Added verified update dates to all three public Projects.
- Added explicit highlights, current state, next checkpoint, and public-link status to every Project.
- Added `updated` metadata to every published Note.

## 2026-06-12 / Phase 15

### Discovery and publishing readiness

- Added category and tag aggregation pages for Projects, Notes, and Lab records.
- Added bidirectional related-record discovery between Notes, Projects, and Archive.
- Added dependency-free RSS, sitemap, and robots endpoints.
- Added canonical-ready Open Graph and Twitter metadata with a default social preview.
- Added `PUBLIC_SITE_URL` as the single production-origin setting.
- Deferred Pagefind to avoid adding a dependency at the current content scale.
- Documented Cloudflare Pages settings and the missing remote / production URL blocker.

## 2026-06-12 / Phase 14

### Archive, Lab, and About expansion

- Expanded Archive from one save point to five verified milestones and project logs.
- Converted the pixel UI placeholder into a completed component study.
- Added the completed abstract Project Cover System experiment.
- Rewrote About as a minimal public introduction with focus, privacy boundary, and internal content map.
- Added no identity, contact, private repository, or unreviewed external links.

## 2026-06-12 / Phase 13

### Notes and long-form reading

- Expanded published Notes from one entry to five verified articles and logs.
- Added heading-based table of contents, Notes archive return path, and newer / older navigation.
- Added long-form styles for figure captions and dependency-free formula blocks.
- Covered headings, lists, quotes, code, inline code, tables, images, captions, and responsive reading layouts.
- Connected the new Notes back to relevant Projects through existing schema fields.

## 2026-06-12 / Phase 12

### Initial real project entries

- Added verified public entries for Pixel Archive, ScholarLens AI, and GLM-OCR Tool.
- Kept Pixel Archive as the single featured project and removed its duplicate from the regular grid.
- Added project-specific abstract cover variants instead of a shared `PA` placeholder.
- Added a project visual record, explicit timeline state, and resolved related Notes / Archive links to project details.
- Kept screenshots behind a documented privacy-review placeholder.

## 2026-06-12 / Phase 11

### Real content inventory and public boundaries

- Audited existing Projects, Notes, Archive, Lab, and About material.
- Approved Pixel Archive, ScholarLens AI, and GLM-OCR Tool for limited public project entries.
- Defined redaction rules for secrets, local paths, private links, identity details, screenshots, and unverified metrics.
- Planned truthful initial Notes, Archive save points, Lab experiments, and About scope for Phases 12-14.
- Recorded the decisions in `docs/phases/21_Phase11_真实内容清点与公开边界.md`.

## 2026-06-11

### 阶段

Phase 0：项目初始化

### 修改文件

- `package.json`
- `astro.config.mjs`
- `tsconfig.json`
- `.gitignore`
- `src/env.d.ts`
- `src/pages/index.astro`
- `README.md`
- `WORKLOG.md`

### 完成内容

- 建立 Astro 项目基础配置。
- 启用 TypeScript 严格配置。
- 配置 MDX 集成。
- 建立最小首页和基础 `src` 目录。
- 补充本地运行与构建说明。

### 遇到的问题

- 初始化前 npm registry 查询在受限网络环境中超时。
- Astro 首次构建尝试写入沙箱外的遥测配置目录；使用 `ASTRO_TELEMETRY_DISABLED=1` 完成当前环境验收。

### 构建结果

- `npm install`：依赖安装完成并生成 `package-lock.json`。
- `npm run build`：通过，生成 1 个静态页面。
- `npm run dev -- --host 127.0.0.1`：成功启动并监听 `http://127.0.0.1:4321/`。

### 下一步建议

- 等待 Phase 0 验收后进入 Phase 1：基础架构与视觉系统。

## 2026-06-11 / Phase 1

### 阶段

Phase 1：基础架构与视觉系统

### 修改文件

- `src/components/layout/Header.astro`
- `src/components/layout/Footer.astro`
- `src/components/layout/ThemeToggle.astro`
- `src/data/navigation.ts`
- `src/data/site.ts`
- `src/layouts/BaseLayout.astro`
- `src/styles/theme.css`
- `src/styles/global.css`
- `src/styles/markdown.css`
- `src/pages/index.astro`
- `README.md`
- `WORKLOG.md`

### 完成内容

- 建立浅色 / 暗色主题变量和全局样式基础。
- 建立 BaseLayout、Header、Footer 与 ThemeToggle。
- 将导航和站点信息集中到 `src/data/`。
- 为 Markdown 正文建立独立样式作用域。
- 将首页接入统一布局，不提前实现 Phase 2 的 Archive Terminal。

### 新增 / 删除依赖

- 无。

### 构建与验收结果

- `npm run build`：通过，生成 1 个静态页面。
- 桌面和 390px 窄屏布局：通过。
- 浅色 / 暗色主题切换：通过。
- 主题刷新保持：通过。
- 浏览器控制台：0 错误，0 警告。

### 已知问题

- Projects、Notes、Archive、Lab、About 导航目标页将在 Phase 3 创建，本阶段尚未提供对应路由。

### 下一步建议

- 进入 Phase 2，实现 ArchiveTerminal、HomeMenu、SaveSlots 和 StatusBar。

## 2026-06-11 / Phase 2

### 阶段

Phase 2：首页初版

### 修改文件

- `src/components/home/ArchiveTerminal.astro`
- `src/components/home/HomeMenu.astro`
- `src/components/home/SaveSlots.astro`
- `src/components/home/SaveSlot.astro`
- `src/components/home/StatusBar.astro`
- `src/components/ui/StatusPill.astro`
- `src/pages/index.astro`
- `src/styles/global.css`
- `README.md`
- `WORKLOG.md`

### 完成内容

- 实现首页 Archive Terminal 核心入口。
- 实现游戏菜单式 HomeMenu。
- 实现三个 Save Slots 和轻微 hover 反馈。
- 实现首页 Status Bar 和低频状态动画。
- 使用页面静态数据向首页组件传递菜单、槽位和状态信息。
- 保持首页无真实图片、无个人简历文案、无 Content Collections 读取。

### 新增 / 删除依赖

- 无。

### 构建与验收结果

- `npm run build`：通过，生成 1 个静态页面。
- 桌面端首页视觉：通过。
- 390px 窄屏：通过，无横向溢出。
- 浅色 / 暗色主题：通过。
- 浏览器控制台：0 错误，0 警告。

### 已知问题

- Projects、Notes、Archive、Lab、About 页面将在 Phase 3 创建；当前首页入口会指向尚未实现的阶段目标路由。

### 下一步建议

- 进入 Phase 3，建立全部一级页面空壳与 404 路由。

## 2026-06-11 / Phase 3

### 阶段

Phase 3：页面空壳与路由

### 修改文件

- `src/components/ui/SectionHeader.astro`
- `src/components/ui/EmptyState.astro`
- `src/pages/projects/index.astro`
- `src/pages/notes/index.astro`
- `src/pages/archive.astro`
- `src/pages/lab.astro`
- `src/pages/about.astro`
- `src/pages/404.astro`
- `README.md`
- `WORKLOG.md`

### 完成内容

- 创建 Projects、Notes、Archive、Lab 和 About 一级页面。
- 创建自定义 404 页面并接入未知路径。
- 建立可复用的 SectionHeader 和 EmptyState。
- 为不同页面提供符合规范的标题、简介和空状态文案。
- 保持页面空壳边界，不提前实现列表、详情、时间线或内容读取。

### 新增 / 删除依赖

- 无。

### 构建与验收结果

- `npm run build`：通过，生成 7 个静态页面。
- `/projects/`、`/notes/`、`/archive/`、`/lab/`、`/about/`：返回 200。
- 未知路径：返回 404 并显示自定义 lost archive 页面。
- 390px 窄屏页面：通过，无横向溢出。
- 页面标题和导航激活状态：通过。

### 已知问题

- 页面当前仅为规范空壳；真实列表和内容读取将在后续阶段实现。

### 下一步建议

- 进入 Phase 4，建立四个 Content Collections、schema 和规范占位内容。

## 2026-06-11 / Phase 4

### 阶段

Phase 4：Content Collections 与占位内容

### 修改文件

- `src/content.config.ts`
- `src/content/projects/pixel-archive.mdx`
- `src/content/notes/2026-06-11-content-system-note.mdx`
- `src/content/archive/2026-06-started-pixel-archive.md`
- `src/content/lab/pixel-ui-placeholder.mdx`
- Content Collections 路径相关规范文档
- `README.md`
- `WORKLOG.md`

### 完成内容

- 定义 projects、notes、archive 和 lab 四个 collection。
- 使用固定枚举校验 Project status、Note type、Archive type、Lab type / status。
- 校验日期格式、标签命名和可选图片路径前缀。
- 为每个 collection 添加一条明确标注用途的占位内容。
- 使用 slug 形式填写关联字段，不编造真实成果或个人信息。

### 技术兼容性调整

- Astro 6 已移除 legacy `src/content/config.ts`。
- 项目改用 `src/content.config.ts` 和 `astro/loaders` 的 glob loader。
- 已同步更新规范文档中的旧配置路径引用。

### 新增 / 删除依赖

- 无。

### 构建与验收结果

- `npx astro sync`：通过，四个 collection 完成同步。
- `npm run build`：通过，Content Collections schema 校验成功。
- 内容文件命名、日期、tags、status / type 枚举：通过。

### 已知问题

- 页面尚未读取和展示 collection 内容；Projects 展示将在 Phase 5 实现。

### 下一步建议

- 进入 Phase 5，实现 Projects 内容 helper、列表、卡片和详情页。

## 2026-06-11 / Phase 5

### 阶段

Phase 5：Projects 列表与详情

### 修改文件

- `src/lib/content/projects.ts`
- `src/components/project/ProjectCard.astro`
- `src/components/project/ProjectGrid.astro`
- `src/components/project/FeaturedProjects.astro`
- `src/components/project/ProjectStatus.astro`
- `src/components/project/ProjectTechStack.astro`
- `src/components/project/ProjectLinks.astro`
- `src/layouts/ProjectLayout.astro`
- `src/pages/projects/index.astro`
- `src/pages/projects/[slug].astro`
- `src/content/projects/pixel-archive.mdx`
- `README.md`
- `WORKLOG.md`

### 完成内容

- 建立 Projects 内容 helper，统一输出 slug、href、状态、技术栈和链接字段。
- 实现全部项目与 Featured Projects 读取、筛选和稳定排序。
- 实现项目卡片、项目网格、状态映射、技术栈和外部链接组件。
- Projects 页面接入 collection 内容，并保留无内容时的档案空状态。
- 实现 `/projects/{slug}/` 静态详情路由和 ProjectLayout。
- 缺少 cover 时使用纯 CSS 档案占位，不依赖虚构图片。
- 更新 Pixel Archive 占位项目正文，用于验收 MDX 渲染链路。

### 新增 / 删除依赖

- 无。

### 构建与验收结果

- `npx astro sync`：通过。
- `npm run build`：通过，生成 8 个静态页面。
- `/projects/` 与 `/projects/pixel-archive/`：可访问。
- Featured、status、techStack、tags 和 MDX 正文：显示正常。
- 390px 窄屏：列表与详情均无横向溢出。
- 浏览器控制台：0 错误，0 警告。

### 已知问题

- 当前仅有一个规范占位项目，尚未接入真实项目内容和封面。
- Projects 暂不包含搜索、复杂筛选、GitHub API 或截图画廊，符合 Phase 5 边界。

### 下一步建议

- 进入 Phase 6，实现 Notes 内容 helper、列表、类型标识和文章详情页。

## 2026-06-11 / Phase 6

### 阶段

Phase 6：Notes 列表与文章页

### 修改文件

- `src/lib/content/notes.ts`
- `src/components/notes/NoteCard.astro`
- `src/components/notes/NoteList.astro`
- `src/components/notes/NoteMeta.astro`
- `src/components/notes/NoteTypeBadge.astro`
- `src/components/notes/MarkdownContent.astro`
- `src/layouts/NoteLayout.astro`
- `src/pages/notes/index.astro`
- `src/pages/notes/[slug].astro`
- `src/content/notes/2026-06-11-content-system-note.mdx`
- `public/images/notes/2026-06-11-content-system-note/content-flow.svg`
- `src/styles/markdown.css`
- `README.md`
- `WORKLOG.md`

### 完成内容

- 建立 Notes 内容 helper，统一生成 slug、href 并按日期降序排列。
- `getPublishedNotes` 默认过滤 `draft: true` 内容。
- 实现 NoteCard、NoteList、NoteMeta 和 NoteTypeBadge。
- Notes 页面接入已发布内容，并保留无内容时的自然空状态。
- 实现 `/notes/{slug}/` 静态文章路由和 NoteLayout。
- 完善 Markdown 标题、列表、代码块、表格、图片和引用基础样式。
- 补充一篇规范占位笔记及仓库内 SVG 示意图，用于验证完整阅读链路。

### 新增 / 删除依赖

- 无。

### 构建与验收结果

- `npx astro sync`：通过。
- `npm run build`：通过，生成 9 个静态页面。
- Notes 列表和 `/notes/2026-06-11-content-system-note/`：可访问。
- 代码块与 SVG 图片：显示正常。
- 正文使用系统无衬线字体，不使用像素字体。
- 390px 窄屏：无横向溢出，代码块可滚动。
- 浅色 / 暗色主题：正文、代码块和页面背景可读。
- 浏览器控制台：0 错误，0 警告。

### 已知问题

- 当前只包含一篇规范占位笔记。
- 全文搜索、复杂 TOC、评论、复杂公式和增强代码高亮不属于本阶段。

### 下一步建议

- 进入 Phase 7，完善 Archive、Lab、About 和 404 页面。

## 2026-06-11 / Phase 7

### 阶段

Phase 7：Archive / Lab / About / 404 Polish

### 修改文件

- `src/lib/content/archive.ts`
- `src/lib/content/lab.ts`
- `src/components/archive/ArchiveTimeline.astro`
- `src/components/archive/ArchiveEntry.astro`
- `src/components/lab/LabCard.astro`
- `src/components/lab/LabGrid.astro`
- `src/components/lab/LabTypeBadge.astro`
- `src/components/ui/EmptyState.astro`
- `src/pages/archive.astro`
- `src/pages/lab.astro`
- `src/pages/about.astro`
- `src/pages/404.astro`
- Archive 与 Lab 占位内容
- `README.md`
- `WORKLOG.md`

### 完成内容

- 建立 Archive helper，按日期降序并按年份、月份输出时间线分组。
- 实现 ArchiveTimeline 与 ArchiveEntry，并接入项目或笔记关联链接。
- 建立 Lab helper，实现 LabCard、LabGrid 和 LabTypeBadge。
- Lab 缺少 cover 时使用纯 CSS 像素屏幕占位。
- About 页面改为极短站点说明，不展示虚构联系方式。
- 404 增加失联信号视觉，保持 lost archive / save file not found 气质。
- EmptyState 增加统一档案角标细节。

### 新增 / 删除依赖

- 无。

### 构建与验收结果

- `npx astro sync`：通过。
- `npm run build`：通过，生成 9 个静态页面。
- Archive：显示 1 个存档点，关联 `/projects/pixel-archive/` 正确。
- Lab：显示 1 个实验槽位，缺少 cover 时不崩。
- About：文案克制，无虚构联系入口。
- 404：标题、说明和返回首页动作正常。
- 四个页面 390px 窄屏：无横向溢出。
- 浏览器控制台：0 错误，0 警告。

### 已知问题

- Archive 和 Lab 当前只含规范占位内容。
- Archive 详情页、Lab 详情页、大量真实内容和复杂彩蛋不属于本阶段。

### 下一步建议

- 进入 Phase 8，补充部署说明并检查 GitHub / Cloudflare Pages 准备状态。

## 2026-06-11 / Phase 8

### 阶段

Phase 8：部署准备

### 修改文件

- `README.md`
- `WORKLOG.md`

### 完成内容

- 核对 `package.json`，确认存在 `dev`、`build` 和 `preview` 脚本。
- 核对 `.gitignore`，确认忽略 `node_modules/`、`dist/`、`.astro/`、`.env*` 和本地缓存。
- 确认 `package-lock.json` 保留在仓库中。
- 在 README 中补充 Cloudflare Pages 构建参数和部署前检查命令。
- 明确第一阶段无需环境变量、后端、数据库、Workers、统计或域名绑定。

### Cloudflare Pages 建议配置

```txt
Framework preset: Astro
Production branch: main
Build command: npm run build
Build output directory: dist
Root directory: /
```

### 新增 / 删除依赖

- 无。

### 构建与验收结果

- `npm run build`：通过，静态输出目录为 `dist/`。
- `dist/`、`node_modules/`、`.astro/`：未被 Git 跟踪。
- `.env` / `.env.local`：不存在且已被忽略。
- `package-lock.json`：已被 Git 跟踪。
- README：包含安装、开发、构建、预览和 Cloudflare Pages 配置。

### 已知问题

- 当前仓库尚未配置 Git remote，因此本阶段未执行 push。
- 尚未创建 Cloudflare Pages 项目，也未进行线上部署或域名绑定。

### 下一步建议

- 进入 Phase 9，执行第一阶段全站构建、路由、主题、移动端、内容和模块边界整体验收。

## 2026-06-11 / Phase 9

### 阶段

Phase 9：第一阶段整体验收与提交

### 验收范围

- Astro 构建与 Content Collections 同步
- 首页与全部一级页面
- Projects / Notes 动态详情页
- Archive / Lab 内容展示
- 404 与静态资源
- 浅色 / 暗色主题
- 390px 移动端基础布局
- 内容命名、schema 与发布规则
- 模块依赖和组件边界
- README、WORKLOG、Git 忽略规则与依赖

### 构建与路由结果

- `npx astro sync`：通过。
- `npm run build`：通过，生成 9 个静态页面。
- 首页、5 个一级内容页、2 个详情页和 404：全部可访问。
- 内容示意图：可访问。
- 构建产物内检查 11 个内部链接与资源引用：0 失败。

### 内容与架构结果

- `src/content/` 仅包含 projects、notes、archive、lab 四个目录。
- 四个 collection schema、枚举和 glob loader 正常。
- Projects、Notes、Archive、Lab 均通过 `src/lib/content/` 读取和整理。
- 业务组件未直接调用 `getCollection`。
- UI 组件未依赖 Content Collections。
- Notes 默认过滤 draft，正文使用普通阅读字体。
- 图片路径、slug、tags、状态和类型字段符合规范。

### 视觉与体验结果

- 首页保持 Archive Terminal 入口，不是简历首页。
- Projects、Notes、Archive、Lab、About 和 404 视觉方向一致。
- 390px 首页、Projects、Notes、Archive、Lab、About 和 404 无横向溢出。
- 暗色主题背景与文字变量正确。
- 主题切换、导航、返回链接和主要卡片可用。
- 浏览器控制台：0 错误，0 警告。

### 依赖与部署结果

- 运行依赖仅为 Astro 与 `@astrojs/mdx`。
- 无 Tailwind、UI 框架、CMS、数据库或后端依赖。
- `dist/`、`node_modules/`、`.astro/` 和 `.env*` 未被 Git 跟踪。
- Cloudflare Pages 构建参数已记录在 README。

### 最终问题清单

- 阻塞问题：无。
- 当前内容仍以规范占位内容为主，真实内容迁移属于 Phase 10。
- Git remote 尚未配置，因此未执行 push。
- Cloudflare Pages 尚未实际连接，线上环境需在推送 GitHub 后验证。
- 正式域名、搜索、RSS、sitemap、Open Graph 和高级 SEO 属于后续增强阶段。

### 第一阶段结论

Pixel Archive 第一阶段基础版本满足构建、页面、内容、视觉、模块、移动端和部署准备要求，可以提交并进入真实内容迁移阶段。

### 下一步建议

- Phase 10：迁移真实 Projects、Notes、Archive 和图片内容。

## 2026-06-11 / Phase 10

### 阶段

Phase 10：视觉系统再校准

### 完成内容

- 重建浅色与暗色语义 token，新增 raised surface、status、pixel mark 等角色，暗色模式改为独立的低亮度墨黑 / 石灰层级。
- 将紫色从普通结构边框降级为 active、focus、链接和少量像素角标使用的强调色。
- 新增 `pixel-corners`、`pixel-ruler`、`pixel-dots` 和 `status-block` 基础视觉语法。
- 统一 Archive Terminal、Save Slots、Project、Note、Archive、Lab、Empty State 等组件的中性边框、表面和状态反馈。
- 为 Project 与 Lab 建立差异化 CSS 像素封面图形，不新增图片或第三方依赖。
- 为首页增加低对比网格、刻度与坐标标记，增强留白秩序，不增加实质内容。
- 保持 Notes 正文区域克制，像素装饰不进入连续阅读段落。
- 修复 390px 首页装饰伪元素造成的 6px 横向溢出。

### 边界

- 未新增功能、路由、内容集合、真实内容或数据字段。
- 未新增 Tailwind、UI 框架、动画库、CMS、数据库或 API。
- 运行依赖保持 Astro 与 `@astrojs/mdx`。

### 构建与验收结果

- `npm run build`：通过，生成 9 个静态页面。
- `npm run dev`：正常启动，Astro 6.4.6 ready。
- 桌面端 9 个页面：加载正常，无横向溢出。
- 390 × 844 移动端 9 个页面：无横向溢出。
- 浅色 / 暗色主题：切换正常，刷新后暗色状态保持。
- 浏览器控制台：0 error，0 warning。
- 首页、Projects、Lab、Notes 正文和移动端截图：人工检查通过。
- 源码差异空白检查：通过；两份阶段文档保留 Markdown 双空格硬换行。

### 已知问题

- 当前公开内容仍以规范占位内容为主，真实内容迁移不属于本阶段。
- Git remote 与 Cloudflare Pages 尚未连接，本阶段未执行 push 或线上验收。

### 下一步建议

- 进入 Phase 11：小规模迁移真实 Projects、Notes、Archive 与图片内容。

## 2026-06-11 / Phase 10 视觉返工

### 返工原因

第一次 Phase 10 虽通过构建与路由验收，但视觉变化不够明显：色彩仍接近普通米色网页，像素语言主要停留在小方块，首页场域与 ProjectCard 封面完成度不足。因此撤销“视觉验收完成”结论，重新执行视觉系统返工。

### 色彩重建

- 浅色重建为旧纸背景、纸面表层、石灰中性色、茶灰边界、苔绿状态和少量灰紫强调。
- 暗色重建为墨黑背景、炭黑面板、暗石灰边界、暗苔绿状态和低亮度灰紫强调。
- 新增 `surface-deep`、`text-faint`、`stone`、`tea`、warning / danger soft、grid 等语义 token。
- 紫色不再承担普通边框和 WIP 状态；仅保留导航 active、focus、链接和少量数据标记。

### 像素系统重建

- 重写 `pixel-corner`：使用块状阶梯角标，不再使用完整强调色 L 形边框。
- 建立 `pixel-mark`、`pixel-grid`、`pixel-divider`、`pixel-dots` 和块状 `status-block` 语法。
- StatusPill 与 ProjectStatus 改为三段像素信号，不再仅靠文字或单个小方块表达状态。
- Save Slot 改为存档芯片、端口网格和数据轨组合。
- Archive 时间线改为断续像素轴，ArchiveEntry 与 LabCard 接入统一角标和网格。

### 首页返工

- 首页增加左右 archive ruler、坐标段、顶部数据刻度和局部点阵背景。
- ArchiveTerminal 增加左侧索引轨、底部 memory map 数据条、内部网格和低调块状角标。
- 右下角紫色几何 L 形线框替换为石灰 / 苔绿块状坐标标记。
- 保持原有信息量和路由，不增加个人介绍、复杂插图或功能。

### Projects 重点返工

- 无图封面重建为存档芯片、端口、文件栈、终端数据轨和坐标索引组成的抽象像素封面。
- Featured Project 使用更高封面、更强纸面反差和独立芯片层级；普通 Project 保持较紧凑结构。
- WIP 改用茶橙 soft 背景和三段像素信号，不再使用紫色状态框。
- 封面由完整结构承担视觉，不再依赖几个随机色块。

### Before / After

- Before：浅色接近普通米白网页；After：旧纸底、石灰面、茶灰边界层级可直接辨识。
- Before：暗色像浅色反相；After：墨黑 / 炭黑 / 暗石灰形成独立低亮度档案终端。
- Before：像素感来自角落小方块；After：角标、网格、分隔、状态信号、芯片和文件栈形成统一语法。
- Before：首页留白主要是空白与普通网格；After：archive ruler、索引轨、坐标和 memory map 建立空间秩序。
- Before：Project 封面像临时占位；After：具备完整抽象像素档案设备结构。

### 验收结果

- `npm run build`：通过，生成 9 个静态页面。
- 桌面 1280 × 900 与移动端 390 × 844：9 个路由均无横向滚动。
- 暗色主题：独立检查通过，刷新后保持 `dark`。
- 浏览器控制台：0 error，0 warning。
- 人工检查：首页、Projects、Notes、Archive、Lab、About、暗色首页和移动端首页视觉通过。
- 验收截图：`output/playwright/01_home_light_full.png` 等 8 张，保留在本地且不提交。
- 未新增依赖、功能、路由或 Content Collections schema。

### 下一步建议

- Phase 10 返工验收通过后，再进入 Phase 11 真实内容小规模填充。

## 2026-06-11 / Phase 19 全站配色与视觉层级

### 阶段

Phase 19 文档执行：在不改变页面结构、路由、内容模型和组件功能的前提下，落地全站配色 token、栏目识别与表面层级。

### 颜色替换

- 页面主背景由灰黄 `#ddd5c4` 改为梨花白 `#f8f5f0`，加入月白与浅琥珀的极淡冷暖纸面变化。
- 标题从近黑统一改为黛蓝 `#2a3c5c`；正文改为墨蓝 `#243747`。
- 亚丁绿负责品牌、online、building、Done；朱红负责 active、箭头、LOAD 动作和标题像素点。
- 琥珀负责 locked、index ready、Archive 年份和时间节点；藕荷紫仅负责 Lab、Mode Quiet 与空槽。
- 暗色重建为墨青黑背景、蓝灰卡片和暖纸白标题，不使用纯黑或亮紫边框。

### Token 与组件

- `theme.css` 新增 primitive、surface、heading、primary、accent、warm、violet、栏目和四类 pixel shadow token。
- `BaseLayout` 按当前路径输出 `data-section`，为 Home / Projects / Notes / Archive / Lab / About / Error 提供栏目变量。
- Header、ArchiveTerminal、StatusBar、SaveSlot、ProjectCard、NoteCard、ArchiveEntry、LabCard、SectionHeader 和 About 完成语义色映射。
- `03_视觉风格规范.md` 与 `06_组件设计规范.md` 已同步稳定 token 和组件颜色职责。

### Before / After

- Before：整页灰黄、标题近黑、卡片与背景层级接近；After：明亮纸白背景、黛蓝标题、白色卡片和柔和阴影形成清晰层级。
- Before：绿、紫、茶橙整体偏灰；After：绿 / 朱红 / 琥珀 / 紫各有明确且小面积的职责。
- Before：暗色偏橄榄黑，组件层级较平；After：墨青黑背景与蓝灰 surface 形成独立暗色系统。
- Before：各栏目主要依赖相同绿色小标签；After：Notes 黛蓝、Archive 琥珀、Lab 紫、About 蓝绿形成轻微栏目识别。

### 验收结果

- `npm run build`：通过，生成 9 个静态页面。
- Playwright 检查 9 个路由，1440px 与 390px 均无横向溢出。
- 浏览器控制台：0 error，0 warning。
- 暗色主题：切换正常，刷新后保持 `dark`。
- 人工检查 Home、Projects、Notes、Archive、Lab、About、暗色首页和移动端明暗截图通过。
- 截图位于 `output/playwright/phase19-*.png`，本地保留且不提交。
- 未新增依赖、路由、Content Collections schema、功能或复杂视觉资产。

### 下一步建议

- 视觉基线稳定后进入 Phase 11，开始小规模迁移真实内容。
