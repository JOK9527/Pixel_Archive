# 25_Phase24_详情页环境像素色带系统执行计划

版本：v1.0  
项目：Pixel Archive  
建议位置：`docs/phases/25_Phase24_详情页环境像素色带系统执行计划.md`  
适用阶段：Phase 23 栏目色彩与封面托底系统确认后  
状态：待执行  
关键词：详情页环境视觉、Ambient Pixel Band、程序化 SVG、像素几何色带、低透明背景、阅读安全区

---

## 0. 项目源复读与本阶段定位

书写本计划前已重新阅读并对齐以下项目源与既有阶段文档：

```txt
00_项目开发计划书.md
01_规范总览指南.md
20_Phase11-15_后续开发计划.md
21_Phase16-20_信息架构交互与像素封面系统计划.md
22_Phase21-22_排版系统与视觉识别校准计划.md
23_Phase22_PixelCoverSystem_完整方案.md
24_Phase23_栏目色彩与封面托底系统方案.md
```

Pixel Archive 的核心定位仍然是：

```txt
以极简阅读体验为底层
以像素组件为识别符号
以复古终端 / 存档隐喻为氛围
长期沉淀项目、笔记、阶段存档和实验内容的个人档案馆
```

项目不是：

```txt
传统简历页
普通博客模板
后台管理系统
完整游戏化网页
复杂动态应用
全站复古操作系统仿站
```

当前技术路线保持：

```txt
Astro
TypeScript
MDX
Astro Content Collections
原生 CSS
CSS Variables
静态优先
内容优先
依赖克制
```

本阶段必须继续遵守：

```txt
不新增第三方 UI 框架
不新增复杂动画库
不引入 Canvas 作为首选实现
不新增数据库、后端、CMS
不改变 Content Collections schema
不改变页面路由
不改变 Projects / Notes / Archive / Lab 的内容职责
不牺牲正文阅读体验和信息清晰度
```

---

## 1. 本阶段为什么存在

当前视觉系统已经完成多轮讨论和阶段方案：

```txt
Phase 10：全站视觉再校准
Phase 22：Pixel Cover System
Phase 23：栏目色彩与封面托底系统
```

这些阶段主要解决：

```txt
页面主色
封面配色
热力图色阶
像素封面系统
页面信息结构
排版与侧边索引
```

但详情页仍存在一个独立问题：

```txt
宽屏下正文左右空白较多。
如果强行塞入信息，会破坏极简阅读体验。
如果完全留白，页面会略显空。
```

参考外部博客案例后，本项目确认可以借鉴其“左右空白使用低信息量环境图形”的思路，但不能照搬现代博客的柔滑彩带。Pixel Archive 应将其转译为：

```txt
低透明
几何化
像素化
不具象
不抢正文
可程序化生成
可随栏目变化
可长期维护
```

因此，本阶段新增一套：

> **Ambient Pixel Band System / 详情页环境像素色带系统**

它不是封面系统，不是页面布局重构，也不是全站背景替换，而是详情页的低强度氛围层。

---

## 2. 与既有阶段的关系

### 2.1 不替代 Phase 22 Pixel Cover System

Phase 22 的 Pixel Cover System 用于 Projects / Notes / Archive / Lab 的封面、预览图、状态条、热力条和卡片内部视觉识别。

本阶段只处理：

```txt
内容详情页背景远层的环境像素色带
```

不得把 Ambient Pixel Band 变成新的封面系统，也不得替换已有 PixelCover 组件。

### 2.2 不替代 Phase 23 栏目色彩系统

Phase 23 已经定义：

```txt
Projects：蓝
Notes：红
Archive：绿
Lab：紫
页面大标题统一黛蓝 / 墨蓝，不随栏目变色
主色用于栏目识别，不用于大面积背景
底纹不等于主色浅色版
```

本阶段必须继承这些颜色 token，不重新定义全站配色。

Ambient Pixel Band 可以使用渐变与辅助色，但必须从现有栏目 token、托底色、峰值色逻辑中派生，不得临时硬编码一套完全无关的颜色。

### 2.3 不重复 Phase 21–22 的排版问题

本阶段不解决：

```txt
sidebar 宽度
hero 到主内容间距
卡片内部节奏
中英混排
正文 measure
```

这些属于 Phase 21–22 排版系统范围。若实现中发现详情页布局已有问题，只记录，不在本阶段顺手改。

---

## 3. 本阶段目标

### 3.1 核心目标

实现一个可复用的 `AmbientPixelBand` 视觉组件，用于内容详情页的低透明环境装饰。

它应满足：

```txt
1. 程序化生成，不依赖手工图片资产。
2. 使用 SVG / CSS Variables / TypeScript helper 实现。
3. 只在详情页启用，列表页默认不启用。
4. 色带最大宽度受控，不遮挡正文主列。
5. 色带具有几何折带和像素颗粒感，而不是散点图。
6. 支持多种走向，不只固定左下到右上。
7. 同一内容 slug 生成结果稳定。
8. 移动端默认隐藏或极弱化。
9. 暗色模式可读，不变廉价霓虹。
10. 不影响点击、滚动、TOC 和正文阅读。
```

### 3.2 设计目标

从当前预览中，较理想的方向是：

```txt
一条主色带为主
左右空白分布
局部越过远背景但不压正文
低透明渐变
几何折面
边缘或局部带有像素网点 / 方块颗粒
颜色柔和、舒缓、透气
```

应避免：

```txt
满屏多条色带
高饱和大色块
完全水平或过于机械的条带
像散点图一样随机撒点
具象化成飘带、建筑、物品、卷轴等明确物体
压住正文、表格、代码块或目录
强烈影响阅读注意力
```

---

## 4. 执行范围

## 4.1 本阶段允许修改

允许修改或新增：

```txt
src/components/visual/AmbientPixelBand.astro
src/lib/ambientBand.ts
src/styles/ambient-band.css
全局 CSS token 中与 ambient band 相关的变量
详情页 Layout 中的背景层挂载点
notes / projects / lab 详情页的组件调用
必要的文档记录
```

如果项目当前实际目录命名不同，Agent 可以按现有项目结构选择最贴近的位置，但必须保持模块化，不得把全部逻辑散落进页面文件。

## 4.2 本阶段禁止修改

禁止修改：

```txt
Content Collections schema
已有内容 frontmatter
路由结构
Header / Footer 导航结构
Projects / Notes / Lab 列表页主体布局
Archive 页面结构
PixelCover 现有信息结构
站点真实文案和真实内容
基础排版 scale
第三方依赖
```

禁止把本阶段扩展成：

```txt
全站背景系统重做
首页视觉重做
列表页装饰重做
完整动画系统
页面切换动效
新的内容分类系统
```

---

## 5. 推荐实现方案

## 5.1 总体架构

推荐结构：

```txt
src/components/visual/AmbientPixelBand.astro
src/lib/ambientBand.ts
src/styles/ambient-band.css
```

职责：

```txt
AmbientPixelBand.astro：负责接收 props、渲染 SVG 容器和图形层。
ambientBand.ts：负责 seed、variant、控制点、像素点、路径数据生成。
ambient-band.css：负责位置、尺寸、透明度、响应式、暗色模式、reduced-motion。
```

如果当前项目已存在类似 `src/components/ui/`、`src/components/common/`、`src/styles/global.css` 等组织方式，Agent 可在不破坏既有结构的前提下调整文件位置。

## 5.2 组件 API 建议

建议组件接口：

```astro
<AmbientPixelBand
  section="notes"
  seed={entry.slug}
  variant="auto"
  intensity="low"
  placement="article-detail"
/>
```

建议 props：

| prop | 类型 | 说明 |
|---|---|---|
| `section` | `projects \| notes \| lab \| archive` | 颜色 token 来源 |
| `seed` | `string` | 用于稳定生成 variant 和局部像素 |
| `variant` | `auto \| diagonal-up \| diagonal-down \| side-arc \| corner-sweep \| low-cross \| gutter-split` | 色带走向 |
| `intensity` | `low \| medium` | 视觉强度，默认 low |
| `placement` | `article-detail \| project-detail \| lab-detail` | 页面上下文 |

`archive` 先保留类型，但本阶段不强制接入 Archive，因为当前 Archive 暂无详情页。

---

## 6. 程序化生成规则

## 6.1 稳定随机

同一篇文章每次构建应得到稳定结果。不要使用运行时 `Math.random()` 直接生成最终布局。

推荐使用 deterministic seed：

```ts
export function createSeededRandom(seed: string) {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return () => {
    h += h << 13;
    h ^= h >>> 7;
    h += h << 3;
    h ^= h >>> 17;
    h += h << 5;
    return ((h >>> 0) % 10000) / 10000;
  };
}
```

Agent 可以替换为更简洁的 hash 函数，但必须满足：

```txt
同 seed 稳定
不同 slug 有差异
不引入依赖
```

## 6.2 Variant 不要单一方向

至少提供 5 种走向：

```txt
diagonal-up：左下 → 右上
diagonal-down：左上 → 右下
side-arc：右侧弧形折带
corner-sweep：从角落切入
low-cross：页面下方横向穿过
gutter-split：左右空白各一段，不穿过正文
```

本阶段不要求一次实现 16 种，但需要避免所有页面都长得一样。

`variant="auto"` 时，可以根据 seed 在安全 variant 中选择。

## 6.3 几何带由折线骨架生成

色带不应只是单根线，也不应只是随机点块。

基本结构：

```txt
中心折线
上下边界
半透明 polygon 主带
局部折面 facet
边缘像素 mask
少量散布 square node
```

SVG 示例结构：

```svg
<svg class="ambient-band__svg" viewBox="0 0 560 240" aria-hidden="true">
  <defs>
    <linearGradient id="ambientGradient" ... />
    <pattern id="pixelPattern" width="8" height="8" patternUnits="userSpaceOnUse">...</pattern>
    <mask id="pixelMask">...</mask>
  </defs>

  <polygon class="ambient-band__base" points="..." fill="url(#ambientGradient)" />
  <polygon class="ambient-band__pixel" points="..." fill="url(#ambientGradient)" mask="url(#pixelMask)" />
  <polygon class="ambient-band__facet" points="..." />
  <rect class="ambient-band__node" x="..." y="..." width="4" height="4" />
</svg>
```

## 6.4 像素感来源

像素感来自：

```txt
1. 边缘 pixel mask
2. 少量 square nodes
3. 局部网格颗粒
4. 几何折面硬边
```

像素感不应来自：

```txt
满屏随机散点
大量无规则小方块
低质量噪声纹理
```

---

## 7. 位置与宽度规则

## 7.1 层级

建议层级：

```txt
body / page background
AmbientPixelBand 远背景层
页面网格 / 纸感背景
article layout / TOC / content
正文内容
```

CSS：

```css
.ambient-band {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
}

.article-layout,
.article-main,
.article-toc {
  position: relative;
  z-index: 2;
}
```

## 7.2 最大宽度

为避免影响正文，建议控制单条色带 SVG 的宽度：

```css
.ambient-band__svg {
  width: clamp(280px, 32vw, 560px);
  max-width: 560px;
}
```

如果实际页面宽度更窄，可由 Agent 判断调整为：

```css
width: clamp(240px, 30vw, 520px);
```

原则是：

```txt
色带应主要占据左右空白和远背景。
不得成为正文的主要背景。
不得在表格、代码块、正文段落下形成明显干扰。
```

## 7.3 放置区域

建议默认：

```txt
右上空白：一条主色带，靠近 hero 下方但不压标题。
左下空白：一条很淡的辅助段，可选。
```

本阶段每页最多：

```txt
1 条主色带 + 1 条低透明辅助带
```

不允许出现四五条色带同屏穿插。

## 7.4 响应式

移动端默认隐藏：

```css
@media (max-width: 760px) {
  .ambient-band {
    display: none;
  }
}
```

如果 Agent 判断某些移动端视口仍可保留极淡背景，只能在不影响正文的情况下使用，但第一版建议隐藏。

---

## 8. 色彩规则

## 8.1 继承 Phase 23

栏目主色继续遵循：

```txt
Projects：蓝
Notes：红
Archive：绿
Lab：紫
```

但是 Ambient Pixel Band 不应把栏目主色大面积铺满。它应该使用：

```txt
栏目主色的低透明版本
托底色
中和色
少量峰值色
```

## 8.2 建议 token

可新增 ambient 专用 token：

```css
:root {
  --ambient-opacity-low: 0.16;
  --ambient-opacity-medium: 0.24;
  --ambient-pixel-opacity: 0.28;
}

[data-section="notes"] {
  --ambient-a: #A9D9D3;
  --ambient-b: #CFE4C9;
  --ambient-c: #F3B06D;
  --ambient-hot: #ED5126;
}

[data-section="projects"] {
  --ambient-a: #9EC8E2;
  --ambient-b: #BFD8E6;
  --ambient-c: #E6C77E;
  --ambient-hot: #E86D3C;
}

[data-section="archive"] {
  --ambient-a: #A8D5BA;
  --ambient-b: #D7E5C1;
  --ambient-c: #8DBFA7;
  --ambient-hot: #D8943A;
}

[data-section="lab"] {
  --ambient-a: #C7B6E4;
  --ambient-b: #AFCFE3;
  --ambient-c: #E8C6B8;
  --ambient-hot: #ED6A3A;
}
```

Agent 可以根据项目现有 token 命名做调整，但不得直接散落硬编码颜色。

## 8.3 Notes 特别约束

Notes 当前 active 色为红。环境色带不能做成大面积红色。

Notes 推荐：

```txt
青绿 / 浅蓝绿作为主体托底
暖橙作为渐变高光
朱红只做少量像素节点或局部峰值
```

原因：

```txt
红色已经承担导航 active、TOC active、标签重点。
背景再大面积用红会晃眼。
```

---

## 9. 暗色模式

暗色模式不能直接提高饱和度。

建议：

```txt
降低明度对比
降低 opacity
让色带更像暗处信号层，而不是霓虹灯
```

CSS 示例：

```css
[data-theme="dark"] {
  --ambient-opacity-low: 0.10;
  --ambient-opacity-medium: 0.16;
  --ambient-pixel-opacity: 0.20;
}
```

暗色模式验收时重点检查：

```txt
不廉价
不刺眼
不抢正文
不影响代码块阅读
```

---

## 10. 动效边界

第一版不强制做滚动动效。

允许 Agent 预留结构，但不建议直接做复杂动画。

若实现轻微动效，仅允许：

```txt
随滚动轻微 translateY / translateX
范围 8–24px
持续平滑
不可闪烁
不可快速流动
不可跟随鼠标大幅变化
```

必须支持：

```css
@media (prefers-reduced-motion: reduce) {
  .ambient-band__svg {
    transform: none !important;
    transition: none !important;
  }
}
```

本阶段推荐先完成静态版本，动效作为可选增强。

---

## 11. Agent 自主判断空间

本阶段允许 Agent 在以下范围内自主判断：

```txt
1. 选择最终文件位置，只要符合项目现有模块结构。
2. 在 4–6 个 variant 中选择首批实现数量。
3. 调整 SVG viewBox、控制点、最大宽度和透明度，使其适配真实页面。
4. 在继承 Phase 23 token 的基础上微调 ambient 色值。
5. 判断每个详情页是否只放一条主色带，或加一条更淡辅助带。
6. 判断是否先只接入 Notes 详情页，再扩展 Projects / Lab 详情页。
7. 判断是否暂缓暗色或滚动动效，但必须记录原因。
```

但这个自主判断空间仅限于 Ambient Pixel Band 当前开发内容。

Agent 不得借本阶段顺手修改：

```txt
页面排版
列表页结构
TOC 信息结构
内容分类
封面系统结构
导航
schema
路由
全站配色
```

如果发现这些问题，应记录为后续事项，不在本阶段执行。

---

## 12. 推荐执行步骤

### Step 0：读取项目源

开始开发前，Agent 必须读取：

```txt
docs/00_项目开发计划书.md
docs/01_规范总览指南.md
docs/phases/23_Phase22_PixelCoverSystem_完整方案.md
docs/phases/24_Phase23_栏目色彩与封面托底系统方案.md
```

并快速检查当前实际项目文件：

```txt
src/layouts/
src/components/
src/styles/
src/pages/
src/content/
```

### Step 1：确认详情页挂载点

确认当前项目中：

```txt
projects/[slug]
notes/[slug]
lab/[slug]
```

的 layout 或 template 位置。

只选择一个公共 layout 挂载优先。如果没有公共 layout，再分别接入。

### Step 2：建立组件和 helper

新增或修改：

```txt
AmbientPixelBand.astro
ambientBand.ts
ambient-band.css
```

第一版至少支持：

```txt
section
seed
variant=auto
intensity=low
```

### Step 3：实现 4–6 个 variant

建议优先：

```txt
diagonal-up
diagonal-down
side-arc
corner-sweep
low-cross
gutter-split
```

每个 variant 都必须通过最大宽度和位置约束，不允许直接铺满全屏。

### Step 4：接入 Notes 详情页

优先接入 Notes，因为当前讨论和截图主要围绕 Notes 详情页。

接入后检查：

```txt
标题区不被遮挡
TOC 不被遮挡
表格和代码块不被遮挡
正文阅读不被影响
色带不会显得像散点图
```

### Step 5：扩展到 Projects / Lab 详情页

如果 Notes 详情页效果稳定，再接入 Projects / Lab。

Archive 暂不接入，除非当前项目已经有 Archive 详情页。

### Step 6：暗色模式校准

检查暗色模式下：

```txt
opacity 是否过高
颜色是否廉价霓虹
是否干扰正文和代码块
```

必要时单独设置暗色 ambient token。

### Step 7：验收与记录

更新：

```txt
WORKLOG.md
```

如项目已有阶段日志或 README 记录习惯，也同步简短记录。

不要把本阶段产物沉淀进长期 standards，除非用户确认视觉方向稳定。

---

## 13. 验收标准

### 13.1 构建验收

必须通过：

```bash
npm run build
```

且无新增依赖。

### 13.2 路由验收

检查：

```txt
/projects/[slug]
/notes/[slug]
/lab/[slug]
```

如果某类详情页当前不存在，则记录，不强行新建。

### 13.3 视觉验收

至少检查：

```txt
亮色模式 notes 详情页
暗色模式 notes 详情页
宽屏桌面
普通桌面
窄屏 / 移动端
```

重点：

```txt
色带不遮挡正文
色带不遮挡 TOC
色带不遮挡表格 / 代码块
色带不影响链接点击
色带不显得像散点图
色带不是具象物体
色带不在同屏出现过多条
```

### 13.4 可维护性验收

检查：

```txt
颜色来自 token
variant 来自 helper
组件可复用
没有硬编码到单个页面
seed 结果稳定
移动端策略明确
```

### 13.5 回退验收

必须能通过一个开关关闭：

```txt
组件不接入详情页
或 CSS class display: none
```

关闭后页面应回到原有详情页，不影响内容和路由。

---

## 14. 建议 Agent 汇报格式

完成后汇报：

```txt
1. 读取了哪些项目源文档
2. 新增 / 修改了哪些文件
3. AmbientPixelBand 当前支持哪些 props
4. 当前实现了哪些 variant
5. 接入了哪些详情页
6. 未接入哪些页面及原因
7. npm run build 结果
8. 亮色 / 暗色 / 移动端检查结果
9. 是否新增依赖
10. 后续可选增强
```

---

## 15. 本阶段完成后的理想状态

完成后，Pixel Archive 的详情页应达到：

```txt
内容仍然清楚、克制、可阅读
宽屏两侧空白不再完全空置
页面具有更明显但不过度的像素几何氛围
不同栏目可以通过环境色带形成轻微差异
每篇内容的色带可以稳定变化但不随机失控
不需要为每篇文章手工制作背景资产
```

这套系统应当像网站的“环境信号层”，而不是新的主视觉。

一句话总结：

> **列表页负责管理，详情页负责阅读与氛围；Ambient Pixel Band 只在详情页做低透明、可程序化、可回退的像素几何环境增强。**
