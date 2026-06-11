# Pixel Archive

Pixel Archive 是一个以极简阅读体验为基础、以像素组件为识别符号、以复古终端和存档隐喻为氛围的个人档案馆。

## 当前阶段

Phase 7：Archive、Lab、About 与 404 完善。

当前已完成第一阶段的全部页面能力：Archive Terminal 首页、Projects、Notes、Archive 时间线、Lab 实验网格、About、404，以及四类 Content Collections。

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
src/pages/               Astro 页面路由
src/styles/              主题、全局和 Markdown 样式
```

## 下一步

完成 Phase 7 验收后，进入 Phase 8：部署准备。
