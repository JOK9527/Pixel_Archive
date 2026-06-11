# WORKLOG

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
