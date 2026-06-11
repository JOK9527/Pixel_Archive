# 18_Phase10_视觉系统再校准计划

版本：v1.0  
项目：Pixel Archive  
建议位置：`docs/phases/18_Phase10_视觉系统再校准计划.md`  
阶段：Phase 10  
状态：已完成（2026-06-11）  
用途：在第一阶段整体验收完成后，对当前站点视觉系统进行定向再校准，解决“像素风不足、紫色边框过量、暗色模式廉价感、首页留白缺乏场域感”等问题。

---

## 0. 放置位置建议

本文件建议放在：

```txt
docs/phases/18_Phase10_视觉系统再校准计划.md
```

如当前项目还没有 `docs/phases/`，可新建该目录：

```txt
docs/
├─ 00_项目开发计划书.md
├─ 01_规范总览指南.md
├─ standards/
├─ agent/
├─ references/
└─ phases/
   └─ 18_Phase10_视觉系统再校准计划.md
```

不建议放在：

```txt
docs/standards/
```

原因：本文件不是长期通用规范，而是 Phase 9 之后针对当前实现状态的阶段性修正计划。

不建议放在：

```txt
docs/references/
```

原因：本文件不是参考资料，也不是灵感池，而是下一阶段的执行计划。

不建议放在：

```txt
src/content/
```

原因：这不是网站公开内容，不应出现在 Pixel Archive 的前台内容系统中。

---

## 1. 本文件与既有文档的关系

本文件不替代以下文档：

```txt
docs/00_项目开发计划书.md
docs/standards/03_视觉风格规范.md
docs/standards/06_组件设计规范.md
docs/standards/09_验收与测试规范.md
docs/standards/16_阶段任务拆分与里程碑规范.md
docs/references/12_视觉参考资源清单.md
docs/references/14_后续功能规划池.md
```

本文件只解决一个问题：

> 在第一阶段功能与结构已完成后，对当前实际页面的视觉表现进行一次有边界、有验收标准的再校准。

本文件不重复定义全站视觉理念。全站视觉理念仍以 `00_项目开发计划书.md` 和 `03_视觉风格规范.md` 为准。

---

## 2. 项目源依据回顾

根据项目计划，Pixel Archive 的核心定位是：

```txt
极简阅读体验为底层
像素组件为识别符号
复古终端 / 存档隐喻为氛围
个人档案馆，而不是传统简历页或普通博客模板
```

因此，视觉系统应满足：

```txt
极简负责信息层级和长期阅读
像素负责识别符号和局部记忆点
复古负责 archive / save slot / terminal / save point 等氛围
```

当前第一阶段已完成：

```txt
Astro / TypeScript / MDX
基础目录结构
CSS Variables
浅色 / 暗色主题基础
BaseLayout
Header / Footer / ThemeToggle
首页 Archive Terminal
Projects / Notes / Archive / Lab / About / 404
Content Collections
占位内容
构建与路由验收
```

Phase 10 的目标不是推翻这些成果，而是在保留结构基线的前提下修正视觉表达。

---

## 3. 当前问题归纳

根据 Phase 9 后的页面截图与人工反馈，当前主要问题如下。

### 3.1 紫色边框过量

现象：

```txt
主终端边框使用紫色
项目卡片边框使用紫色
Lab 卡片边框使用紫色
暗色模式下边框更显眼
大量模块的视觉层级都依赖紫色描边
```

问题：

```txt
紫色从强调色变成了结构色
全站重复同一视觉手段
边框存在感过强，降低高级感
暗色模式中紫色描边接近廉价霓虹感
```

修正方向：

```txt
紫色降级为稀有强调色
普通结构边框改为低对比中性色
只有 active / focus / 少量状态 / 少量像素点缀允许使用紫色
```

---

### 3.2 像素风格不足

现象：

```txt
像素感主要来自小方块、等宽字、标签、线框
大多数卡片仍然像普通网页卡片
项目封面与 Lab 封面像占位图，而不是像素系统
```

问题：

```txt
像素风停留在表层装饰
缺少统一的 pixel grammar
像素元素没有形成组件语言
```

修正方向：

```txt
从“像素边框”转向“像素系统”
建立角标、点阵、断续线、像素阴影、状态块、微型图形的统一规则
```

---

### 3.3 首页左右留白缺少场域感

现象：

```txt
首页主终端居中后两侧较空
当前不适合加入实质性内容
但留白没有被设计成一种空间秩序
```

问题：

```txt
留白显得像空白，而不是安静
主视觉区域的边界感不足
```

修正方向：

```txt
不增加信息量
只增加极低存在感的空间秩序
使用背景微网格、坐标刻度、archive ruler、低透明度纹理等方式增强场域
```

---

### 3.4 暗色模式需要单独设计

现象：

```txt
暗色模式看起来像浅色模式的反相版本
紫色边框在深背景上过亮
容器层级和文字层级不够细
```

问题：

```txt
暗色模式缺少低亮度层级
强调色过跳
复古档案感被霓虹感替代
```

修正方向：

```txt
暗色模式单独设计色阶
背景使用墨黑 / 炭黑 / 暗紫黑
边框使用灰紫 / 暗石色
文字使用米白和暖灰
状态绿降低饱和度和亮度
紫色仅作为少量 active / focus 使用
```

---

## 4. Phase 10 阶段目标

Phase 10 的目标是：

```txt
降低紫色描边的使用频率
重建浅色 / 暗色色彩 token
加强像素识别符号
优化首页留白场域
统一卡片、边框、状态、链接、封面图的视觉语言
保证长文阅读页面仍然克制、清晰、适合长期阅读
```

Phase 10 的最终方向：

```txt
Quiet Pixel Archive
安静的像素档案馆
旧纸感 / 墨黑感 / 苔绿色 / 灰紫色
低饱和、低装饰、局部像素识别
首页有记忆点，正文页保持清晰
```

---

## 5. Phase 10 不做什么

本阶段不做：

```txt
不新增搜索
不新增评论
不新增 CMS
不新增数据库
不接 GitHub API
不做复杂像素房间
不做地图式首页
不做完整游戏化界面
不大规模填充真实内容
不重构 Content Collections
不改变路由结构
不改变技术栈
不引入 Tailwind CSS
不引入 shadcn/ui
不引入第三方 UI 框架
不引入复杂动画库
```

本阶段也不应推翻 Phase 0–9 已经完成的结构成果。

---

## 6. 视觉参考使用原则

用户提供的参考：

```txt
https://github.com/nevertoday/zhongguo-traditional-colors
```

该资源只作为色彩参考，不作为风格照搬对象。

使用原则：

```txt
参考其低饱和、传统色、色卡、配色关系和 token 化思路
不把 Pixel Archive 做成新中式网站
不使用国风纹样
不使用大红大金或强烈国潮撞色
不让传统色名称成为页面装饰
```

适合提取的气质：

```txt
旧纸
石灰
茶灰
墨黑
苔绿
灰紫
褪色像素
低亮度档案终端
```

不适合提取的气质：

```txt
新中式装饰
国潮撞色
古风纹样
高饱和节庆色
厚重文化展馆感
```

---

## 7. 推荐色彩角色，而不是固定色值

本阶段不要先追求“选一个漂亮颜色”，而是先定义颜色角色。

### 7.1 浅色模式角色

```txt
Background：旧纸 / 暖米白
Surface：比背景略亮或略沉的纸面
Surface Soft：二级浅纸面
Border：低对比茶灰 / 石灰
Border Strong：少量主容器边界
Text：近墨黑
Text Muted：暖灰褐
Accent：低饱和灰紫
Accent Soft：极淡灰紫背景
Status：苔绿 / 灰绿
Warning：低饱和茶橙
Pixel Mark：小面积绿色或灰紫
```

### 7.2 暗色模式角色

```txt
Background：墨黑 / 炭黑 / 暗紫黑
Surface：比背景略亮的暗纸面
Surface Soft：二级暗面
Border：暗石灰 / 暗灰紫
Border Strong：只用于主容器或 focus
Text：米白
Text Muted：暖灰 / 茶灰
Accent：暗灰紫，不发光
Accent Soft：低透明度紫灰底
Status：暗苔绿
Warning：暗茶橙
Pixel Mark：少量低亮度绿色或灰紫
```

### 7.3 紫色使用规则

允许：

```txt
当前导航项
少量链接箭头
focus-visible
局部 pixel marker
极少数 hover 反馈
```

不允许：

```txt
所有卡片默认边框
所有大容器默认描边
所有封面默认描边
所有状态标签默认描边
暗色模式中的高亮紫色外框
```

---

## 8. Pixel Grammar：像素系统规则

Phase 10 应建立基础 pixel grammar。

### 8.1 像素角标

用于主卡片、终端、ProjectCard、LabCard。

规则：

```txt
优先使用 2px / 4px / 6px 网格单位
不画完整粗框
使用角落小块表示识别
最多 1–2 个角出现，不要四角全满
```

### 8.2 点阵与断续线

用于分区标题、状态栏、首页背景。

规则：

```txt
用短线 / 点阵替代完整实线
透明度低
不影响阅读
不要在正文段落区域密集出现
```

### 8.3 像素阴影

规则：

```txt
浅色模式：可使用 2px–3px 硬阴影，但颜色极淡
暗色模式：避免发光感，不做亮色 glow
阴影只用于主卡片或交互状态
```

### 8.4 像素封面图

用于 Projects / Lab。

规则：

```txt
不要所有封面都使用同一张网格 + PA
每类内容可有不同的抽象像素图
图形复杂度低
色彩不超过 3–4 个
不使用真实图片时也要有差异化
```

### 8.5 状态块

用于 WIP / Done / Prototype / Paused / Empty / Locked。

规则：

```txt
状态不能只依赖文字和紫色 badge
可增加小方块、短线、点阵节奏
状态色低饱和
状态组件全站统一
```

---

## 9. 首页空间优化方向

首页不增加新的实质内容，只增强空间秩序。

可选方案：

```txt
极淡背景网格，只在 hero 区域出现
左右边缘加入低透明度 archive coordinate
主终端外层加入不完整框线
右下角几何线框降低对比度
Status Bar 降低边框和文字对比
Save Slots 卡片减少描边，增强局部像素角标
```

禁止：

```txt
新增大段介绍
新增真实个人信息
新增复杂插画
新增像素房间
新增地图式首页
新增大量动画
```

首页目标：

```txt
像打开一个私人像素档案终端
有入口感
不拥挤
不廉价
留白有秩序
```

---

## 10. 执行拆分

### 10.0 源码读取与视觉审计

性质：只读，不改代码。

Agent 必须先读取实际项目源，不得凭空假设文件结构。

建议检查：

```txt
package.json
astro.config.mjs
src/
src/styles/
src/components/
src/layouts/
src/pages/
src/content/
public/
README.md
WORKLOG.md
docs/
```

重点定位：

```txt
全局 CSS Variables 定义位置
浅色 / 暗色主题变量定义位置
Card / ProjectCard / NoteCard / LabCard 等组件位置
Home 首页组件位置
Header / Footer / ThemeToggle 位置
Markdown 样式位置
404 页面位置
```

输出：

```txt
当前视觉实现文件清单
当前颜色 token 清单
当前紫色使用位置清单
当前 border / box-shadow 使用位置清单
当前暗色模式变量清单
建议修改顺序
```

验收：

```txt
不产生代码变更
不修改文件
只输出审计报告
```

---

### 10.1 Color Tokens 再校准

性质：小步修改。

目标：

```txt
重建浅色 / 暗色 token
降低紫色结构色地位
增加中性边框和表面色
建立状态色角色
```

优先修改：

```txt
theme.css 或等效主题变量文件
global.css 中与 body / link / selection / focus 相关的变量使用
```

注意：

```txt
先改 token，少改组件
不要在组件中硬编码新 HEX
不要把传统色直接散落在组件 CSS 中
```

输出：

```txt
浅色模式 token
暗色模式 token
语义 token
组件继续引用语义 token
```

验收：

```txt
npm run build 通过
浅色模式可读性正常
暗色模式不再霓虹
页面结构未变化
```

---

### 10.2 边框与阴影降噪

性质：组件级视觉修正。

目标：

```txt
减少默认紫色描边
统一普通边框
统一主容器边框
统一 hover / active / focus
```

重点组件：

```txt
ArchiveTerminal
StatusBar
SaveSlots
ProjectCard
NoteCard
LabCard
ArchiveTimelineItem
SectionHeader
EmptyState
Markdown content wrapper
```

规则：

```txt
普通卡片使用 neutral border
主容器使用 slightly stronger neutral border
只有 active / focus / selected 使用 accent
hover 以背景层级变化优先，不以亮紫描边优先
```

验收：

```txt
全站紫色边框数量明显减少
项目页和 Lab 页不再满屏紫框
暗色模式边框不发亮
```

---

### 10.3 像素识别系统增强

性质：视觉语言补强。

目标：

```txt
让像素感从表层装饰升级为系统语言
```

可实现项：

```txt
通用 pixel-corner class
通用 pixel-dots class
通用 pixel-ruler class
通用 status-block class
Project / Lab 封面图案差异化
```

注意：

```txt
优先使用 CSS 实现
不新增图片依赖
不新增动画库
不增加复杂交互
```

验收：

```txt
不靠满屏边框也能感知像素风
卡片细节更统一
Projects / Lab 封面不再像同一张占位图复制
```

---

### 10.4 首页场域优化

性质：首页专项。

目标：

```txt
处理首页左右空白
增强终端场域
保持信息量不变
```

可修改：

```txt
Home 页面布局
ArchiveTerminal 外层
首页背景装饰
StatusBar
SaveSlots 区域
```

可加入：

```txt
低透明度背景网格
边缘坐标
不完整外框
局部 archive ruler
更淡的几何线框
```

禁止：

```txt
新增复杂内容块
新增个人简介
新增真实内容
新增大型插画
```

验收：

```txt
首页两侧留白不再显得空
整体仍然安静
hero 区域更有入口感
移动端不出现横向滚动
```

---

### 10.5 暗色模式重做

性质：主题专项。

目标：

```txt
暗色模式从反相主题变成独立低亮度档案终端
```

重点：

```txt
背景不要纯黑
容器不要高亮紫边
文字不要纯白刺眼
状态绿不要荧光
hover 不要 glow
```

验收：

```txt
暗色模式高级感明显提升
低亮度层级清楚
边框、背景、文字、状态的对比舒适
控制台无错误
刷新后主题保持正常
```

---

### 10.6 页面一致性回归

性质：全站回归。

检查页面：

```txt
/
 /projects
 /projects/[slug]
 /notes
 /notes/[slug]
 /archive
 /lab
 /about
 /404 或随机不存在路径
```

检查内容：

```txt
Header active 状态
Footer
ThemeToggle
卡片 hover
链接 hover
状态标签
Markdown 正文
移动端 390px
暗色模式
```

验收：

```txt
所有页面视觉统一
没有新的布局错位
没有横向滚动
没有控制台错误
```

---

## 11. 验收标准

Phase 10 完成后必须满足：

```txt
1. npm run build 通过
2. npm run dev 可正常启动
3. 工作区只包含 Phase 10 相关变更
4. 紫色边框使用频率明显下降
5. 普通卡片和普通容器不再默认使用紫色描边
6. 暗色模式不再有廉价霓虹感
7. 首页左右留白有空间秩序
8. 像素风来自角标、点阵、状态块、封面图和细节系统
9. Projects / Notes / Archive / Lab / About 视觉统一
10. Notes 正文阅读体验不受像素装饰干扰
11. 390px 移动端无横向滚动
12. 浏览器控制台 0 error / 0 warning
13. 未新增 Tailwind / UI 框架 / 动画库
14. 未新增搜索 / 评论 / CMS / 数据库 / GitHub API
15. README / WORKLOG 如有必要已更新
```

---

## 12. 验收截图清单

建议验收时截取：

```txt
01_home_light_full.png
02_home_dark_full.png
03_projects_light.png
04_projects_dark.png
05_project_detail_light.png
06_notes_light.png
07_note_detail_light.png
08_archive_light.png
09_lab_light.png
10_about_light.png
11_404_light.png
12_mobile_390_home.png
13_mobile_390_nav.png
14_mobile_390_note_detail.png
```

截图重点不是“炫”，而是确认：

```txt
紫色是否被降级
暗色模式是否舒适
首页留白是否有秩序
像素感是否更自然
长文阅读是否干净
```

---

## 13. Agent 执行指令模板

可直接复制给开发 Agent。

```md
请执行 Pixel Archive Phase 10：视觉系统再校准。

执行依据：
- docs/00_项目开发计划书.md
- docs/standards/03_视觉风格规范.md
- docs/standards/06_组件设计规范.md
- docs/standards/09_验收与测试规范.md
- docs/standards/16_阶段任务拆分与里程碑规范.md
- docs/phases/18_Phase10_视觉系统再校准计划.md

当前问题：
1. 紫色边框过量，降低高级感。
2. 像素风主要停留在小方块、边框、等宽字，缺少系统化 pixel grammar。
3. 首页左右留白缺少空间秩序。
4. 暗色模式紫色描边过亮，接近廉价霓虹感。

执行要求：
1. 先读取项目源，输出当前视觉实现文件清单、颜色 token 清单、紫色使用位置清单、border / shadow 使用位置清单。
2. 未完成审计前不要修改代码。
3. 修改时优先从 CSS Variables 和语义 token 入手，避免组件内硬编码颜色。
4. 将紫色从结构色降级为稀有强调色。
5. 普通卡片和容器使用低对比中性边框。
6. 暗色模式必须单独调色，不要简单反相。
7. 加强像素识别，但不能牺牲阅读体验。
8. 首页只增强空间秩序，不新增实质内容。
9. 不新增依赖，不引入 Tailwind / UI 框架 / 动画库。
10. 不新增功能，不改路由，不重构 Content Collections。

验收：
- npm run build 通过
- 桌面端与 390px 移动端正常
- 暗色主题与刷新保持正常
- 浏览器控制台 0 error / 0 warning
- 紫色边框明显减少
- 暗色模式不再霓虹
- 首页留白更有秩序
- WORKLOG 记录本阶段修改
```

---

## 14. 推荐提交节奏

Phase 10 不建议一次性大提交。

推荐拆分：

```txt
commit 1: docs: add phase 10 visual refinement plan
commit 2: refactor: recalibrate color tokens
commit 3: style: reduce borders and refine component surfaces
commit 4: style: enhance pixel visual language
commit 5: style: refine home spatial atmosphere
commit 6: style: polish dark theme visual hierarchy
commit 7: chore: update worklog for phase 10 acceptance
```

如实际修改较少，也可以合并为：

```txt
feat: refine visual system after phase 9 acceptance
```

但不建议把文档、token、组件、首页、暗色模式全部混在一个无法回滚的大提交中。

---

## 15. Phase 10 完成后的下一阶段建议

Phase 10 完成后，再考虑进入下一阶段。

可选方向：

```txt
Phase 11：真实内容小规模填充
Phase 12：Project 内容增强与真实案例整理
Phase 13：Notes 长文阅读体验增强
Phase 14：搜索 / RSS / SEO 增强
Phase 15：正式部署与域名
```

建议优先级：

```txt
先 Phase 10 视觉稳定
再 Phase 11 填真实内容
最后再做搜索、RSS、SEO、正式域名
```

原因：

```txt
视觉基线不稳定时，不适合继续填大量真实内容。
否则后续每次改卡片、正文、封面、主题变量都会影响更多页面。
```

---

## 16. 最终原则

Phase 10 的核心不是“做得更花”，而是：

```txt
更克制
更稳定
更有质感
更像 Pixel Archive
更少模板感
更少廉价描边
更强局部像素识别
更适合长期维护
```

一句话目标：

> 让 Pixel Archive 从“功能完成的像素风个人网站”升级为“视觉气质成立的安静像素档案馆”。
