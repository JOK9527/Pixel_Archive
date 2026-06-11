# Pixel Archive

Pixel Archive 是一个以极简阅读体验为基础、以像素组件为识别符号、以复古终端和存档隐喻为氛围的个人档案馆。

## 当前阶段

Phase 1：基础架构与视觉系统。

当前已完成 Astro 项目骨架、基础布局、集中导航配置、浅色 / 暗色主题变量和主题切换。首页终端、页面路由和 Content Collections 将按后续阶段继续实现。

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
src/data/                站点和导航配置
src/layouts/             页面基础布局
src/pages/               Astro 页面路由
src/styles/              主题、全局和 Markdown 样式
```

## 下一步

完成 Phase 1 验收后，进入 Phase 2：首页初版。
