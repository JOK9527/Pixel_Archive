# 23_Phase22_PixelCoverSystem_完整方案

版本：v1.0  
项目：Pixel Archive  
建议位置：`docs/phases/23_Phase22_PixelCoverSystem_完整方案.md`  
性质：Phase 22 的专项落地方案 / 可执行设计系统文档  
关键词：像素封面系统、文字资产、语义色带、热力条、程序化生成、长期维护

---

## 0. 项目源复读与本方案定位

在输出本方案前，已重新对齐 Pixel Archive 项目源与既有阶段文档。当前项目定位为：

```txt
Pixel Archive 是一个以极简阅读体验为底层、以像素组件为识别符号、以复古终端 / 存档隐喻为氛围的个人档案馆。
```

项目不是传统简历页，也不是普通博客模板，而是长期存放和展示以下内容的个人档案站：

```txt
项目作品
技术笔记
开发日志
阶段性存档
视觉 / 像素 / Minecraft / 图像实验内容
```

既有页面范围固定为：

```txt
Home / Projects / Notes / Archive / Lab / About / 404
```

既有核心内容类型为：

```txt
Projects
Notes
Archive
Lab
```

既有技术路线为：

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
无后端
无 CMS
无数据库
```

本方案必须遵守以下边界：

```txt
不新增第三方 UI 框架
不新增复杂动画库
不把网站做成后台管理系统
不把封面系统做成每次都要手工制图的资产负担
不让视觉装饰牺牲阅读体验和信息清晰度
不让 references 或生图预览覆盖项目强规范
```

本方案不是“几个视觉处理建议”，而是一套可持续扩展的 **Pixel Cover System**。它的目标是把 Projects / Notes / Archive / Lab 中重复出现的封面、预览图、像素图形和状态条统一成一套可程序化生成、可维护、可解释的视觉系统。

---

## 1. 为什么需要 Pixel Cover System

当前项目中已经出现多种像素图形：

```txt
Projects 封面里的矩阵 / 马赛克图
Notes 右侧预览图
Archive 时间轴卡片与节点
Lab 实验卡里的矩阵图
Home 的终端网格与状态图形
```

现有问题主要是：

```txt
1. 图形有像素感，但缺少稳定规则。
2. 不同页面的图形关系近似，却无法明确区分内容类型。
3. 马赛克 / 网格图案看起来像装饰，用户看不出语义。
4. 如果每个项目单独设计封面，会造成长期维护负担。
5. 图形和文字、metadata、状态之间没有统一映射。
6. Notes / Projects / Lab 的预览区域容易被随机图案占据，削弱信息清晰度。
```

因此需要从“临时图形装饰”升级为“封面系统”。

---

## 2. 总设计原则

Pixel Cover System 的核心原则是：

```txt
文字是第一视觉资产。
色带是第二视觉资产。
热力条是第三视觉资产。
像素点块只做辅助纹理和内容差异。
```

换句话说：

```txt
图形负责识别气质；
文字负责解释含义；
颜色负责分类；
色带负责状态；
热力条负责密度、节奏和进度；
不要让用户解码每一个像素块。
```

系统比例建议：

```txt
70% typographic layout       文字排版和核心信息
20% semantic color band      语义色带、状态条、进度条
10% pixel texture / heatmap  点块纹理、热力条、角标
```

封面系统要保持：

```txt
可读
可解释
可复用
可自动生成
可被数据驱动
可在不同内容类型中保持统一但不单调
```

---

## 3. 系统命名

建议正式命名为：

```txt
Pixel Cover System
```

中文名：

```txt
像素封面系统
```

如果需要更准确描述实现方式，可称为：

```txt
Typographic Pixel Cover System
文字主导的像素封面系统
```

内部组件名建议：

```txt
PixelCover
PixelCoverBand
PixelHeatStrip
PixelCornerMark
PixelMetaBar
PixelCoverPreview
```

---

## 4. 四类内容的封面策略

Pixel Cover System 不同内容类型使用不同模板，但共享同一套底层结构。

### 4.1 Projects：Project Code Cover

用途：展示项目、工具、作品、长期构建中的系统。

主视觉：

```txt
大号项目代号 / 缩写
```

示例：

```txt
PA
SL
OCR
GOT
PX
```

推荐结构：

```txt
PROJECT CODE
PA
Pixel Archive Website
STACK
ASTRO / MDX / WEB
[status band]
WIP > 62%
[heat strip]
```

信息职责：

| 区域 | 信息 |
|---|---|
| 主代号 | 项目识别，如 PA / SL / OCR |
| 项目名称 | 清晰项目名 |
| 技术栈 | 3–5 个核心技术，不列太多 |
| 状态色带 | WIP / Done / Prototype / Paused + 进度 |
| 热力条 | 模块复杂度 / 技术密度 / 当前开发活跃度 |

Projects 的重点是：

```txt
大字号识别
项目状态明确
技术栈一眼可见
不要用无意义马赛克占据主视觉
```

---

### 4.2 Notes：Terminal Record Cover

用途：展示文章、学习笔记、开发日志、知识卡片。

主视觉：

```txt
记录编号 / 终端记录名
```

示例：

```txt
N241
201.record
LOG-052
NOTE-017
```

推荐结构：

```txt
NOTE / LOG / ARTICLE
N241
Responsive Layout Breakpoints
> reading notes...
#layout  #responsive  #css
[metadata band]
2026.06.12 / CSS / LOG
[heat strip]
```

信息职责：

| 区域 | 信息 |
|---|---|
| 记录编号 | 便于索引和视觉识别 |
| 标题 | 笔记标题，不能被图案抢夺 |
| 终端条 | 体现阅读 / 记录 / 命令行气质 |
| 标签 | 快速定位内容主题 |
| 热力条 | 文章密度、阅读节奏、更新活跃度 |

Notes 的重点是：

```txt
阅读入口清楚
封面不喧宾夺主
不要把长文页面变成视觉图表页
Notes 列表中封面可以缩小或只在精选卡片中出现
```

---

### 4.3 Archive：Save Point Cover

用途：展示阶段节点、版本记录、项目存档点、里程碑。

主视觉：

```txt
日期 / 阶段编号
```

示例：

```txt
2026.06.12
PHASE-19
SAVE POINT #0452
```

推荐结构：

```txt
SAVE POINT
2026.06.12
PHASE-19
Grid System Refinement
[MILESTONE]
[timeline band]
P15 — P16 — P17 — P18 — P19 — P20
[heat strip]
```

信息职责：

| 区域 | 信息 |
|---|---|
| 日期块 | Archive 最重要信息 |
| Phase 标签 | 阶段归属 |
| 事件标题 | 里程碑说明 |
| 时间色带 | 这个节点在阶段中的位置 |
| 热力条 | 阶段活跃度 / 节点密度 / 变化强度 |

Archive 的重点是：

```txt
时间优先
阶段清楚
事件不要太碎
热力条只做时间节奏辅助
```

---

### 4.4 Lab：Experiment Sheet Cover

用途：展示视觉实验、组件实验、小工具、界面研究和像素实验。

主视觉：

```txt
实验编号 / 实验代号
```

示例：

```txt
L-017
PUC
PCS
LAB-UI
```

推荐结构：

```txt
EXPERIMENT CODE
L-017
Pixel UI Component Study
STUDY THEME
Interactive Data Matrix Exploration
[matrix snapshot]
STATUS > TESTING | 42%
[heat strip / experiment matrix]
```

信息职责：

| 区域 | 信息 |
|---|---|
| 实验编号 | 实验识别 |
| 实验标题 | 研究主题 |
| 研究主题 | 比标题更细的实验方向 |
| 矩阵快照 | 实验结构或观察维度 |
| 状态带 | DONE / TESTING / PROTOTYPE / PAUSED |
| 热力矩阵 | 实验活跃度 / 数据维度 / 模块关注度 |

Lab 的重点是：

```txt
允许比其他类型更强像素风
允许更实验的矩阵图
但仍然必须读得懂标题、状态和入口
```

---

## 5. 统一封面结构

所有封面都应遵循同一套基本结构。

```txt
┌──────────────────────────────┐
│ A. Type Label / Record Class │
│                              │
│ B. Dominant Field            │
│    大号代号 / 编号 / 日期      │
│                              │
│ C. Secondary Field           │
│    标题 / 主题 / 技术栈        │
│                              │
│ D. Separator / Terminal Line │
│                              │
│ E. Semantic Band             │
│    状态 / 进度 / 时间 / 标签   │
│                              │
│ F. Heat Strip / Pixel Texture│
└──────────────────────────────┘
```

固定原则：

```txt
A 类型标识永远在顶部或左上。
B 主视觉必须是最大文字。
C 次级信息不能超过两行。
D 分隔线保持低对比。
E 色带承担状态和类型识别。
F 热力条承担密度、节奏和可生成差异。
```

---

## 6. 语义色带系统

色带是 Pixel Cover System 的核心元素之一。

### 6.1 色带职责

色带用于表达：

```txt
内容类型
状态
进度
时间位置
阅读节奏
实验强度
```

色带不用于表达正文内容，也不用于替代标题和标签。

### 6.2 内容类型与色带方向

| 内容类型 | 色带位置 | 主色 | 信息重点 |
|---|---|---|---|
| Projects | 底部横向色带 | Green | 状态 + 进度 |
| Notes | 中部终端条或底部条 | Orange / Red | 阅读节奏 + 标签 |
| Archive | 左侧竖带 + 底部时间带 | Teal | 时间 + 阶段 |
| Lab | 底部紫色状态带 | Purple | 实验状态 + 进度 |

### 6.3 色带纹理

色带纹理可由像素方块生成。

```txt
实心色块：已激活 / 完成 / 重点
浅色块：低强度 / 次级信息
空白块：未激活 / 留白 / 空槽
高亮块：当前阶段 / 异常峰值 / 重点节点
```

纹理应当有节奏，而不是随机噪点。

---

## 7. Pixel Heat Strip 热力条系统

### 7.1 定义

`PixelHeatStrip` 是一组规则化方块，用来表达密度、节奏、活跃度或进度。

它不是严肃数据图表，而是：

```txt
有语义的像素纹理
```

### 7.2 使用位置

| 内容类型 | 热力条形式 | 语义 |
|---|---|---|
| Projects | 1–2 行横向 progress heat strip | 模块完成度 / 技术密度 |
| Notes | 1 行或 2 行 terminal pulse strip | 阅读节奏 / 标签密度 |
| Archive | 时间轴下方 heat strip | 阶段活跃度 / 节点密度 |
| Lab | 3–5 行 matrix heatmap | 实验维度 / 数据活跃度 |

### 7.3 热力条生成参数

建议输入字段：

```ts
type PixelHeatInput = {
  seed: string;
  variant: 'progress' | 'pulse' | 'timeline' | 'matrix';
  density?: 'low' | 'medium' | 'high';
  progress?: number; // 0–100
  intensity?: number; // 0–1
  accent?: 'green' | 'orange' | 'teal' | 'purple' | 'blue' | 'neutral';
};
```

### 7.4 热力条视觉规则

```txt
格子数量固定，不随内容任意变化。
颜色深浅表示强弱，不表示精确数值。
空白格用于制造呼吸感。
高亮格用于标记重点或当前节点。
每个模板最多使用 2 个主色阶 + 1 个高亮色。
```

### 7.5 热力条不要做什么

```txt
不要铺满整张卡片。
不要让用户必须读懂每个格子。
不要让四类内容使用完全相同热力图。
不要用高饱和颜色制造噪声。
不要取代标题、状态和标签。
```

---

## 8. 程序化生成原则

Pixel Cover System 必须可持续化，因此默认不依赖手工封面资产。

### 8.1 默认生成流程

```txt
content frontmatter
        ↓
normalizeCoverMeta()
        ↓
selectCoverTemplate()
        ↓
generateCoverCode()
        ↓
generateHeatStrip(seed)
        ↓
render <PixelCover />
```

### 8.2 元数据字段建议

可在不同 collection 中增加或派生以下字段。

```ts
type CoverVariant =
  | 'project-code'
  | 'terminal-record'
  | 'save-point'
  | 'experiment-sheet';

type CoverAccent =
  | 'green'
  | 'orange'
  | 'teal'
  | 'purple'
  | 'blue'
  | 'neutral';

type CoverMeta = {
  variant?: CoverVariant;
  code?: string;
  accent?: CoverAccent;
  progress?: number;
  density?: 'low' | 'medium' | 'high';
  seed?: string;
  showHeat?: boolean;
};
```

### 8.3 最小 frontmatter 增量

为了避免一次性破坏 Content Collections schema，建议先使用可选字段。

Projects：

```yaml
cover:
  variant: project-code
  code: PA
  accent: green
  progress: 62
  density: medium
```

Notes：

```yaml
cover:
  variant: terminal-record
  code: N241
  accent: orange
  density: medium
```

Archive：

```yaml
cover:
  variant: save-point
  code: '2026.06.12'
  accent: teal
  progress: 80
```

Lab：

```yaml
cover:
  variant: experiment-sheet
  code: L-017
  accent: purple
  progress: 42
  density: high
```

### 8.4 自动 fallback

如果内容没有填写 `cover`，系统应自动生成默认封面。

```txt
code：由标题首字母 / slug / 日期派生
accent：由内容类型决定
progress：由 status 或默认值决定
density：由 tags / tech 数量估计
seed：优先 slug，其次 title
```

---

## 9. 代号生成规则

代号是封面主视觉的核心。

### 9.1 Projects

优先级：

```txt
1. frontmatter.cover.code
2. 项目名称首字母缩写
3. slug 中关键词缩写
4. fallback: PX
```

示例：

```txt
Pixel Archive Website → PA
ScholarLens AI → SL
GLM-OCR Toolkit → GOT / OCR
Servo Test Platform → STP
```

### 9.2 Notes

优先级：

```txt
1. frontmatter.cover.code
2. N + hash/序号
3. 201.record 风格编号
```

示例：

```txt
N241
N-0217
201.record
LOG-052
```

### 9.3 Archive

优先级：

```txt
1. 日期 YYYY.MM.DD
2. Phase 编号
3. Save Point 编号
```

示例：

```txt
2026.06.12
PHASE-19
SP-0452
```

### 9.4 Lab

优先级：

```txt
1. frontmatter.cover.code
2. L- + 实验序号
3. 三字母主题缩写
```

示例：

```txt
L-017
PUC
PCS
LAB-UI
```

---

## 10. 颜色规则

### 10.1 内容类型颜色

建议基础映射：

| 内容类型 | 主色 | 用途 |
|---|---|---|
| Projects | green | 项目、工具、构建、WIP |
| Notes | orange / red | 记录、日志、阅读节奏 |
| Archive | teal | 时间、归档、阶段 |
| Lab | purple | 实验、研究、探索 |

### 10.2 色彩使用比例

```txt
大面积背景：低饱和纸色 / surface
主文字：墨蓝 / 深色
内容类型色：用于代号、色带、角标、状态
高亮色：只出现在少数热力点、active 状态或异常峰值
```

### 10.3 禁止事项

```txt
不要让所有卡片都使用同一种绿色。
不要重新把紫色变成全站默认边框色。
不要使用全屏高饱和渐变。
不要让热力条颜色超过三类。
不要在 Notes 正文阅读区域使用过强像素色。
```

---

## 11. 字体与文字资产

Pixel Archive 的像素感不应主要依赖手绘资产，而应来自文字排版。

### 11.1 字体策略

```txt
大号代号：粗重、块状、可略带像素感
metadata：等宽字体
中文正文：保持可读字体
英文 UI 标签：可更像素化 / 更终端化
```

### 11.2 文字层级

```txt
Cover Type Label：小号，系统语言
Dominant Code：最大，视觉焦点
Title / Topic：中等，信息说明
Meta / Tags：小号，辅助识别
Status Band：小号但高对比
```

### 11.3 中英混排规则

```txt
UI 标签 / 系统状态 / 操作入口：英文
正文标题 / 摘要 / 内容说明：中文或按内容本身语言
技术标签 / slug / tech stack：英文小写
```

示例：

```txt
PROJECT CODE
Pixel Archive Website
ASTRO / MDX / WEB
WIP > 62%
```

而不是在同一层级随机混用中文和英文。

---

## 12. 组件设计建议

### 12.1 组件分层

```txt
src/components/cover/
├─ PixelCover.astro
├─ PixelCoverBand.astro
├─ PixelHeatStrip.astro
├─ PixelCornerMark.astro
├─ PixelMetaBar.astro
└─ cover-utils.ts
```

### 12.2 PixelCover props

```ts
type PixelCoverProps = {
  kind: 'project' | 'note' | 'archive' | 'lab';
  variant?: CoverVariant;
  code: string;
  label?: string;
  title: string;
  subtitle?: string;
  meta?: string[];
  tags?: string[];
  status?: string;
  progress?: number;
  date?: string;
  accent?: CoverAccent;
  density?: 'low' | 'medium' | 'high';
  seed?: string;
  compact?: boolean;
};
```

### 12.3 组件职责

| 组件 | 职责 |
|---|---|
| `PixelCover` | 总容器，选择布局变体 |
| `PixelCoverBand` | 渲染语义色带与状态条 |
| `PixelHeatStrip` | 渲染热力条 / 矩阵 / 时间条 |
| `PixelCornerMark` | 渲染角标与像素归属标记 |
| `PixelMetaBar` | 渲染日期、状态、标签、路径 |
| `cover-utils.ts` | 代号生成、hash、density、accent 映射 |

---

## 13. 页面使用策略

### 13.1 Home

Home 可使用封面系统的缩略组件，但不应让封面系统替代 Archive Terminal。

使用位置：

```txt
Save Slots
Featured teaser
Status preview
```

### 13.2 Projects

Projects 是封面系统的主场。

使用位置：

```txt
Featured Project card
Project list card
Project detail header
```

Featured 项目可使用完整 `PixelCover`。普通项目可使用 compact 版。

### 13.3 Notes

Notes 必须保证阅读效率。

建议：

```txt
Notes 列表默认以文字为主。
仅精选笔记或宽屏模式显示 compact PixelCover。
移动端隐藏右侧封面或下移。
详情页顶部可使用轻量 terminal record header。
```

### 13.4 Archive

Archive 使用 Save Point Cover，但不能让时间线失去主导。

建议：

```txt
时间线卡片内只显示轻量 save point cover 元素。
Archive index 可显示小型 heat strip 或 year.month 活跃度。
```

### 13.5 Lab

Lab 可以使用最完整的实验封面。

建议：

```txt
Lab card 使用 experiment-sheet。
Lab 详情页顶部使用更大的 experiment cover。
Lab 可展示 heat matrix。
```

---

## 14. 响应式规则

### 14.1 桌面端

```txt
Featured Projects：完整封面
Projects list：完整或中等封面
Notes list：文字为主 + 可选右侧 compact cover
Archive：时间线卡片内轻量封面元素
Lab：完整封面
```

### 14.2 平板端

```txt
封面高度降低
右侧说明减少
热力条保留但不显示图例
```

### 14.3 移动端

```txt
封面不得撑宽页面
Notes 右侧封面隐藏或放到标题下方
热力条行数减少
大号代号字号降低
色带保留
不得出现横向滚动
```

---

## 15. 算法建议

### 15.1 seed hash

生成稳定图案时，不使用随机数，应使用 `seed` 派生。

```ts
function hashSeed(seed: string): number {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  }
  return hash;
}
```

### 15.2 热力条生成伪代码

```ts
function generateHeatCells(input: PixelHeatInput) {
  const hash = hashSeed(input.seed);
  const total = input.variant === 'matrix' ? 48 : 32;
  const activeRatio = input.density === 'high' ? 0.7 : input.density === 'medium' ? 0.48 : 0.28;

  return Array.from({ length: total }).map((_, index) => {
    const value = pseudoRandom(hash, index);
    const active = value < activeRatio;
    const highlighted = active && value < 0.08;
    const completed = input.progress ? index / total < input.progress / 100 : active;

    return {
      active,
      highlighted,
      completed,
      level: highlighted ? 3 : completed ? 2 : active ? 1 : 0,
    };
  });
}
```

### 15.3 进度映射

```txt
Projects：progress 来自 frontmatter 或 status 映射。
Notes：progress 不表示完成度，可表示阅读节奏 / 内容密度。
Archive：progress 表示阶段位置。
Lab：progress 表示实验完成度或测试进展。
```

---

## 16. 数据模型与字段边界

本方案可能涉及 Content Collections schema 的轻量扩展。执行时必须遵守数据模型规范。

建议将 `cover` 作为可选对象，不破坏现有内容。

```ts
cover: z.object({
  variant: z.enum(['project-code', 'terminal-record', 'save-point', 'experiment-sheet']).optional(),
  code: z.string().optional(),
  accent: z.enum(['green', 'orange', 'teal', 'purple', 'blue', 'neutral']).optional(),
  progress: z.number().min(0).max(100).optional(),
  density: z.enum(['low', 'medium', 'high']).optional(),
  seed: z.string().optional(),
  showHeat: z.boolean().optional(),
}).optional()
```

若当前阶段不想修改 schema，可先在 helper 中派生：

```txt
getProjectItems() → coverMeta
getNoteItems() → coverMeta
getArchiveItems() → coverMeta
getLabItems() → coverMeta
```

但最终应与 schema 对齐，避免 helper 输出和 frontmatter 不一致。

---

## 17. 与 Phase 21 / Phase 22 的关系

本方案属于 Phase 22 的专项落地内容。

它依赖 Phase 21 的成果：

```txt
统一页面栅格
统一间距系统
统一 card rhythm
统一 text measure
稳定 sidebar / main content 关系
```

如果 Phase 21 尚未完成，封面系统不得先大面积铺开，否则会继续出现：

```txt
右侧预览溢出
卡片内部节奏混乱
封面和正文不对齐
Notes 列表可读性下降
```

Phase 22 的合理执行顺序：

```txt
1. 先稳定排版系统。
2. 再实现 PixelCover 组件。
3. 再把 Projects / Lab 接入完整封面。
4. 再决定 Notes 是否使用 compact cover。
5. 最后处理 Archive 的 save point cover 与时间线关系。
```

---

## 18. 实施步骤建议

### Step 1：只做组件原型

```txt
新增 PixelCover 组件族。
不改页面数据。
用 mock props 在临时预览页展示四类封面。
```

建议临时页面：

```txt
/design/pixel-cover-system
```

或仅在本地开发时使用，不进入公开导航。

### Step 2：接入 Projects / Lab

```txt
Projects Featured 卡片接入 project-code。
Lab 卡片接入 experiment-sheet。
先不要接入 Notes 列表。
```

### Step 3：接入 Archive

```txt
Archive 卡片接入 save-point 的轻量版本。
保留时间线主结构。
```

### Step 4：评估 Notes

```txt
Notes 列表优先阅读。
只在宽屏或精选笔记中显示 compact terminal-record。
移动端隐藏。
```

### Step 5：schema / helper 对齐

```txt
确认 cover 字段是否进入 schema。
确认 helper 输出与组件 props 一致。
补充类型定义。
```

---

## 19. 验收标准

### 19.1 设计验收

```txt
四类内容的封面一眼能区分。
封面主要信息来自文字，而不是不可读马赛克。
色带可表达内容类型和状态。
热力条能增加像素感和节奏感，但不喧宾夺主。
Projects / Notes / Archive / Lab 保持同一视觉系统。
不需要为每条内容手工制作封面图片。
```

### 19.2 信息验收

```txt
用户不需要图例也能看懂主要信息。
标题、日期、状态、标签可读。
封面图形不能替代关键 metadata。
Notes 的阅读效率不能下降。
Archive 的时间线逻辑不能被封面干扰。
```

### 19.3 技术验收

```txt
npm run build 通过。
无新增依赖。
无横向滚动。
移动端封面不溢出。
暗色模式可读。
Content Collections schema 与 helper 输出一致。
组件 props 类型明确。
```

### 19.4 长期维护验收

```txt
新增一个 project 不需要手工画封面。
新增一篇 note 不需要手工设计图。
cover 字段缺省时能自动生成可接受封面。
同一个 slug 每次生成结果稳定。
可通过 metadata 控制差异，而不是改 CSS 硬编码。
```

---

## 20. 禁止事项

```txt
禁止把 PixelCover 做成随机马赛克组件。
禁止每个项目单独手工画封面作为默认流程。
禁止让热力图承担全部语义。
禁止让封面破坏 Notes 阅读体验。
禁止新增 canvas / SVG 复杂生成依赖，除非后续单独讨论。
禁止用封面系统替代内容分类、标签、状态和日期。
禁止为了像素风牺牲中文正文可读性。
```

---

## 21. 给 Agent 的执行指令摘要

可复制给 Agent：

```md
请实现 Pixel Archive 的 Pixel Cover System 原型。

必须先阅读：
- docs/00_项目开发计划书.md
- docs/01_规范总览指南.md
- docs/standards/03_视觉风格规范.md
- docs/standards/05_模块化架构规范.md
- docs/standards/06_组件设计规范.md
- docs/standards/09_验收与测试规范.md
- docs/standards/15_数据模型与内部接口规范.md
- docs/phases/22_Phase21-22_排版系统与视觉识别校准计划.md
- docs/phases/23_Phase22_PixelCoverSystem_完整方案.md

本轮目标：
建立一套可持续的像素封面系统，不是做几张装饰图。

执行边界：
- 不新增依赖。
- 不使用外部 UI 框架。
- 不修改路由，除非为本地预览页单独说明。
- 不大规模重构页面。
- 不让 Notes 列表出现右侧封面溢出。
- 不让封面取代标题、状态、标签、日期等真实信息。

实现内容：
1. 新增 PixelCover 组件族。
2. 实现 project-code / terminal-record / save-point / experiment-sheet 四种 variant。
3. 实现 PixelCoverBand。
4. 实现 PixelHeatStrip，基于 seed 稳定生成。
5. 实现 PixelCornerMark。
6. 先用 mock 数据建立预览页或组件 demo。
7. 再试接 Projects Featured 与 Lab 卡片。
8. 输出截图、修改文件、构建结果和已知问题。

验收：
- npm run build 通过。
- 四类封面可区分。
- 封面文字信息清楚。
- 热力条不是随机马赛克。
- 新增内容不需要手工制图。
- 移动端不溢出。
```

---

## 22. 总结

Pixel Cover System 的本质不是“给卡片加一点像素图案”，而是为 Pixel Archive 建立一套长期可维护的内容视觉识别系统。

它应当满足：

```txt
以文字为主视觉
以色带表达状态
以热力条表达密度与节奏
以角标强化像素归属
以 metadata 保证信息清晰
以程序化生成降低维护成本
```

最终目标：

> 每一条内容都可以自动获得一个有 Pixel Archive 气质、信息可读、风格统一但仍有差异的封面，而不需要每次单独制作视觉资产。
