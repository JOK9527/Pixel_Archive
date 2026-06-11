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
