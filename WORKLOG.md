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
