# Pixel Archive

Pixel Archive 是一个以极简阅读体验为基础、以像素组件为识别符号、以复古终端和存档隐喻为氛围的个人档案馆。

## 当前阶段

Phase 3：页面空壳与路由。

当前已完成 Astro 项目骨架、基础布局、浅色 / 暗色主题、Archive Terminal 首页，以及 Projects、Notes、Archive、Lab、About 和 404 页面空壳。Content Collections 和占位内容将在后续阶段接入。

## 技术栈

- Astro
- TypeScript
- MDX
- 原生 CSS
- CSS Variables
- Astro Content Collections（后续阶段）

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

## 目录

```txt
docs/                    项目计划、规范与参考文档
src/components/layout/   Header、Footer 与主题切换
src/components/home/     首页终端、菜单、存档槽与状态栏
src/components/ui/       通用视觉组件
src/data/                站点和导航配置
src/layouts/             页面基础布局
src/pages/               Astro 页面路由
src/styles/              主题、全局和 Markdown 样式
```

## 下一步

完成 Phase 3 验收后，进入 Phase 4：Content Collections 与占位内容。
