# 26_Phase24B_环境像素色带样例库与二次开发计划

版本：v1.0
项目：Pixel Archive
建议位置：`docs/phases/26_Phase24B_环境像素色带样例库与二次开发计划.md`
状态：Phase 24 回退后的返工计划
用途：在不影响真实页面的前提下，重新建立 Ambient Pixel Band 的设计规范、程序化生成方式、样例库与验收流程。

---

## 0. 项目源对齐

本计划基于当前 Pixel Archive 项目源和近期回退结果制定。

Pixel Archive 的核心定位仍然是：

```txt
极简阅读体验为底层
像素组件为识别符号
复古终端 / 存档隐喻为氛围
个人档案馆
长期可维护
不牺牲阅读体验和信息清晰度
```

当前技术边界仍然是：

```txt
Astro
TypeScript
MDX
Astro Content Collections
原生 CSS
CSS Variables
静态优先
依赖克制
不使用复杂动画库
不使用第三方 UI 框架
```

文档体系边界：

```txt
本文件是阶段计划，应放入 docs/phases/
不是长期强规范
不新增 docs/standards/ 文件
如后续 Ambient Pixel Band 稳定，再把最终规则摘要沉淀进 03_视觉风格规范.md / 06_组件设计规范.md
```

---

## 1. 背景与当前状态

上一轮 Phase 24 已经回退。

回退原因不是单个 CSS 参数失败，而是开发流程不成熟：

```txt
1. 直接接入真实详情页，缺少独立样例库。
2. “低透明”被实现成“几乎不可见”。
3. 像素感不足，缺少清晰的像素网格、边缘扩散和几何折面。
4. 色带位置过于单一，大多变成右侧浅色折角。
5. 栏目差异不明显，Projects / Notes / Lab 的视觉识别没有建立。
6. Agent 的视觉自由度过大，导致实现过于保守。
7. 缺少失败判据，验收时只能凭感觉判断。
```

因此，本轮不直接重新接入详情页，而是先做：

```txt
设计规范重写
程序化样例库
16 个可比较样例
人工选择 Approved Variants
再进入真实页面接入
```

---

## 2. 本阶段目标

Phase 24B 的目标不是“把色带重新放进页面”，而是建立一个可验证的生成系统。

目标：

```txt
1. 建立 Ambient Pixel Band 的程序化生成规则。
2. 建立独立预览页，一次性展示多组变体。
3. 让色带具备清晰几何感、像素感、低透明氛围感。
4. 保证它不会影响正文阅读。
5. 给后续真实页面接入提供 3–5 个已确认变体。
```

本阶段完成后，应该能回答：

```txt
哪些走向可用？
哪些颜色组合可用？
什么透明度是“克制但可见”？
最大宽度应控制到什么程度？
像素点和网格密度如何避免散点图感？
哪些变体适合 Notes / Projects / Lab？
```

---

## 3. 本阶段不做什么

本阶段严格不做：

```txt
不接入真实 Notes 详情页
不接入真实 Projects 详情页
不接入真实 Lab 详情页
不修改正文布局
不修改文章 TOC
不修改 Content Collections schema
不修改路由体系，除新增预览页外
不修改 Pixel Cover System
不修改 Phase 23 栏目色彩系统
不新增依赖
不引入 canvas 动画库
不做滚动动画
不做移动端正式效果
不更新真实内容
```

唯一允许新增的页面是：

```txt
/lab/ambient-band-preview/
```

该页面作为 Lab 实验预览页存在，不作为正式内容展示页。

---

## 4. 推荐文件结构

Agent 可根据现有项目结构微调，但不得扩大范围。

推荐新增：

```txt
src/components/visual/AmbientPixelBand.astro
src/components/visual/AmbientBandPreviewCard.astro
src/lib/ambientBand.ts
src/styles/ambient-band.css
src/pages/lab/ambient-band-preview.astro
```

可选新增：

```txt
src/data/ambientBandVariants.ts
```

如果项目已有类似目录，应复用现有结构，不强行新建平行体系。

---

## 5. 样例页要求

新增页面：

```txt
/lab/ambient-band-preview/
```

页面目的：

```txt
只用于对比 Ambient Pixel Band 视觉变体
不承载真实文章内容
不进入主导航
可从 Lab 页面临时链接，也可暂不链接
```

页面应展示：

```txt
4 个栏目 × 4 种走向 = 16 个样例
```

栏目：

```txt
Projects：蓝系
Notes：红橙识别，但主体不全红
Archive：暂作为可选参考，可不接入真实页面
Lab：紫系
```

走向：

```txt
1. diagonal-up：左下进入，向右上延展
2. diagonal-down：左上进入，向右下延展
3. right-sweep：右侧切入，形成侧向折带
4. low-cross：页面下方横穿或斜穿，避开正文核心区
```

每个样例必须显示：

```txt
variant 名称
section 名称
seed
maxWidth
opacity 档位
是否允许真实页面使用：candidate / rejected / approved
```

---

## 6. Ambient Pixel Band 结构规则

每条色带必须由 4 层组成：

```txt
1. 主几何折带
2. 分段折面 facet
3. 像素网格 / 像素 mask
4. 边缘像素扩散点
```

### 6.1 主几何折带

要求：

```txt
必须是 4–7 段 polygon 形成的斜向或不规则几何带
不得是单个半透明矩形
不得是普通阴影块
不得是简单水平条
不得只有一个角落折角
```

### 6.2 分段折面

要求：

```txt
至少 3 个 facet
facet 之间应有明暗或色相变化
facet 不能过于锋利到影响正文阅读
facet 不得随机碎裂成噪声
```

### 6.3 像素网格

要求：

```txt
色带内部应有像素网格、方块纹理或 pattern mask
像素网格必须服务于几何带，不得喧宾夺主
不得变成满屏散点图
```

### 6.4 边缘像素扩散

要求：

```txt
扩散点只沿色带边缘和局部外侧出现
扩散点数量应少而有节奏
扩散点应有大小变化
扩散点应遵守 section 色彩系统
不得在整个页面随机撒点
```

---

## 7. 尺寸与安全区建议

本阶段不要求精确锁死，但必须遵守以下范围。

主色带最大宽度建议：

```css
--ambient-max-width: clamp(520px, 46vw, 860px);
```

单个样例色带覆盖区域建议：

```txt
宽度：520–860px
高度：160–360px
```

色带可进入：

```txt
左右空白区
正文远背景
hero 附近的非文字区域
TOC 背后低透明区域
页面底部空白区
```

色带不得进入：

```txt
正文主文字高密度区域的上层
表格文字上方
代码块上方
导航上方
按钮和链接上方
TOC 当前项文字上方
```

如确需经过正文背后，应保证：

```txt
opacity 更低
对比度更弱
有 mask 淡出
文字可读性完全不受影响
```

---

## 8. 颜色规则

本阶段必须服从 Phase 23 的栏目色彩系统：

```txt
Projects：蓝
Notes：红
Archive：绿
Lab：紫
```

但色带主体不是单纯铺满主色。

推荐逻辑：

```txt
栏目主色：只用于高值点、角标、少量像素节点
底纹托底色：用于主几何带的大面积低饱和区域
中和色：用于网格、低值块、过渡 facet
峰值色：极少量，用于视觉活点
```

### 8.1 Projects

```txt
主识别：石青 / 黛蓝方向
托底：浅青灰、月白、淡蓝灰
点缀：少量橙红或朱红
```

### 8.2 Notes

```txt
主识别：朱红 / 丹橘方向
托底：暖纸白、浅米灰、浅灰绿
中和：青灰绿、黛蓝
点缀：朱红只能少量出现
```

Notes 禁止：

```txt
红色底纹大面积铺开
黑色终端条带式背景
整条色带过于火红
```

### 8.3 Archive

```txt
主识别：石绿 / 青碧方向
托底：月白、浅青灰、白雪藤
点缀：少量琥珀或朱红节点
```

Archive 禁止：

```txt
黄褐 / 土绿作为主视觉
暗黄色底纹
浑浊灰棕热力块过密
```

### 8.4 Lab

```txt
主识别：藕荷紫 / 深紫方向
托底：浅暖纸、淡灰紫、青灰绿
点缀：少量橙红高值节点
```

Lab 禁止：

```txt
紫色矩阵过密
整条色带全紫
高饱和紫色大面积铺开
```

---

## 9. 透明度规则

上一轮失败的关键是“过于不可见”。本轮必须设定可见度底线。

建议范围：

```txt
主几何带整体 opacity：0.14–0.28
facet 层 opacity：0.10–0.24
像素网格层 opacity：0.16–0.36
边缘扩散点 opacity：0.20–0.44
```

失败判据：

```txt
第一眼看不出色带存在 → 失败
只能看到一块浅色阴影 → 失败
靠近正文处影响阅读 → 失败
整体像散点图 → 失败
```

---

## 10. 程序化生成建议

推荐采用：

```txt
inline SVG
CSS Variables
deterministic seed
无外部图片资产
无新增依赖
```

### 10.1 输入参数

`AmbientPixelBand` 建议支持：

```ts
type AmbientBandSection = 'projects' | 'notes' | 'archive' | 'lab';

type AmbientBandVariant =
  | 'diagonal-up'
  | 'diagonal-down'
  | 'right-sweep'
  | 'low-cross';

interface AmbientPixelBandProps {
  section: AmbientBandSection;
  variant: AmbientBandVariant;
  seed?: string;
  intensity?: 'low' | 'medium';
  debug?: boolean;
}
```

Agent 可调整命名，但语义必须清晰。

### 10.2 Seed 规则

要求：

```txt
同一 seed 每次构建结果一致
刷新页面不随机变化
不同 section / variant 可产生轻微差异
```

### 10.3 SVG 规则

要求：

```txt
使用 polygon / path / pattern / mask / rect 组合
不使用位图
不使用 canvas
不使用 JS runtime 生成动画
```

---

## 11. Agent 自由度边界

允许 Agent 自主判断：

```txt
文件拆分方式
组件命名细节
SVG viewBox 尺寸
polygon 控制点
facet 数量，需在 3–7 范围内
透明度微调，需在建议范围内
像素点数量，需避免散点图
预览页卡片排版
是否在样例页加入 debug 信息
```

不允许 Agent 自主修改：

```txt
真实详情页接入
主导航
页面布局
正文排版
TOC 结构
Content Collections schema
路由体系，除 /lab/ambient-band-preview/ 外
Pixel Cover System
Phase 23 色彩 token
现有内容文件
README / WORKLOG 以外的文档体系
新增依赖
```

---

## 12. 失败判据

出现以下任一情况，本阶段应视为失败，需要返工：

```txt
1. 第一眼看不出 Ambient Pixel Band 存在。
2. 看起来像普通浅色阴影或半透明矩形。
3. 看起来像随机散点图。
4. 缺少像素网格或像素边缘。
5. 没有斜向或不规则几何走势。
6. 只有右侧一个淡色折角。
7. 多条色带同时出现，互相打架。
8. 色带遮挡正文或影响阅读。
9. Projects / Notes / Lab 无法看出栏目差异。
10. 引入新依赖。
11. 修改了真实页面布局或内容 schema。
```

---

## 13. 验收标准

本阶段完成后必须满足：

```txt
1. /lab/ambient-band-preview/ 可访问。
2. 页面展示至少 16 个样例。
3. 每个样例标注 section / variant / seed / intensity。
4. 每个样例都包含主几何带、facet、像素网格、边缘扩散点。
5. 至少 6 个样例具备可讨论价值。
6. 至少 3 个样例接近可进入真实详情页试点。
7. npm run build 通过。
8. 控制台无错误。
9. 移动端不出现布局破坏。
10. 不修改真实详情页。
11. 不新增依赖。
12. WORKLOG.md 记录本阶段结果。
```

视觉验收重点：

```txt
可见但克制
几何而非散点
像素而非普通飘带
不影响阅读
栏目色彩可识别
```

---

## 14. 推荐执行步骤

### Step 1：确认回退状态

```txt
确认 Phase 24 真实页面接入已回退
确认工作区没有残留错误样式
确认当前页面恢复到回退前状态
```

### Step 2：建立生成组件

```txt
新增 AmbientPixelBand.astro
新增 ambientBand.ts
新增 ambient-band.css
先不接入真实详情页
```

### Step 3：建立预览页

```txt
新增 /lab/ambient-band-preview/
展示 4×4 样例
加入基础说明
加入 debug 标注
```

### Step 4：调出候选样例

```txt
每个栏目至少 4 个 variant
保留失败样例也可，但必须标注 rejected 原因
筛选 candidate 样例
```

### Step 5：人工验收

```txt
用户选择 3–5 个 Approved Variants
记录每个 variant 的适用页面
记录不适用原因
```

### Step 6：决定是否进入 Phase 24C

只有 Approved Variants 明确后，才进入下一阶段：

```txt
Phase 24C：只接入 Notes 详情页试点
```

---

## 15. 后续 Phase 24C 预案

Phase 24C 不是本阶段内容，只作为后续预案。

建议顺序：

```txt
1. 只接入 Notes 详情页
2. 仅选 1 个 Approved Variant
3. 设置可关闭配置
4. 验收亮色 / 暗色 / 宽屏 / 窄屏
5. 通过后再扩展 Projects / Lab
```

Archive 暂不接入，除非未来 Archive 节点有详情页。

---

## 16. 给 Agent 的简短执行指令

```txt
当前任务是 Phase 24B：Ambient Pixel Band 样例库与二次开发。

背景：上一轮 Phase 24 已回退，原因是色带几乎不可见、几何感不足、像素感不足、位置单一，并且直接接入真实页面导致试错成本过高。

本轮只允许建立独立样例库，不允许接入真实详情页。请新增 /lab/ambient-band-preview/，用 inline SVG + CSS Variables + deterministic seed 程序化生成 4 个栏目 × 4 种走向的 16 个 Ambient Pixel Band 样例。

必须满足：
- 每个样例包含主几何折带、facet、像素网格、边缘扩散点。
- 色带可见但克制，不得像普通阴影，不得像散点图。
- Projects / Notes / Archive / Lab 使用各自栏目色彩逻辑，但底纹不等于主色浅色版。
- 不新增依赖。
- 不修改真实页面布局、路由、schema、内容、Pixel Cover System、Phase 23 色彩系统。
- npm run build 必须通过。
- WORKLOG.md 记录结果。

允许你根据现有项目结构微调组件文件位置、SVG 控制点、透明度和样例页排版，但自由度仅限本阶段组件与样例页内部，不得外溢到其他页面。
```

---

## 17. 本阶段完成后的判断

如果样例页中能出现 3–5 个用户认可的方案，本阶段成功。

如果样例页仍然出现以下问题：

```txt
看不出色带
过于随机
像素感不足
影响正文
栏目差异不清
```

则不进入真实页面接入，继续在样例页中迭代。
