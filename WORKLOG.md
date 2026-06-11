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
