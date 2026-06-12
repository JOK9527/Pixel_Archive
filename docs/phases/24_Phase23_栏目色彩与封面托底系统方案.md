# 24_Phase23_栏目色彩与封面托底系统方案

版本：v1.0  
项目：Pixel Archive  
建议位置：`docs/phases/24_Phase23_栏目色彩与封面托底系统方案.md`  
适用阶段：Phase 22 Pixel Cover System 已完成初版后  
性质：Phase 23 阶段计划 / 栏目色彩系统专项方案  
关键词：栏目主色、页面 accent、封面配色、网格纸底纹、热力图、传统色参考、色彩面积比例

---

## 0. 项目源复读与本方案定位

书写本方案前，已重新阅读并对齐以下项目源与既有阶段文档：

```txt
00_项目开发计划书.md
01_规范总览指南.md
18_Phase10_视觉系统再校准计划.md
19_Phase10_全站配色与视觉层级方案.md
22_Phase21-22_排版系统与视觉识别校准计划.md
23_Phase22_PixelCoverSystem_完整方案.md
```

Pixel Archive 的核心定位仍然是：

```txt
以极简阅读体验为底层
以像素组件为识别符号
以复古终端 / 存档隐喻为氛围
长期沉淀项目、笔记、阶段存档和实验内容的个人档案馆
```

本项目不是：

```txt
传统个人简历页
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

本方案必须遵守：

```txt
不新增第三方 UI 框架
不新增复杂动画库
不改变页面路由
不改变 Content Collections schema
不改变 Projects / Notes / Archive / Lab 的内容职责
不把颜色系统变成每张卡手工调色
不让封面装饰牺牲阅读体验和信息清晰度
```

本文件不是重复 Phase 10 的“全站配色方案”，也不是重复 Phase 22 的“像素封面系统”。

它只解决 Phase 22 落地后暴露出的专项问题：

```txt
1. 四个栏目缺少明确但克制的页面级主色。
2. 主色、底纹、热力图、状态条和行动链接混用，导致局部刺眼或浑浊。
3. Notes 红色面积过大，Archive 偏黄褐浑浊，Lab 紫色矩阵过密。
4. 网格纸底纹被误解为主色浅色版，而不是托底色。
5. Pixel Cover System 需要更稳定的颜色映射，才能长期程序化生成。
```

因此，本方案定位为：

> **栏目色彩系统 + 封面托底系统 + 热力图分级系统**。

---

## 1. 与既有方案的关系

### 1.1 不替代 Phase 10

Phase 10 解决的是全站基础色彩、背景、表面、文字、暗色模式和基础视觉层级。

本方案不重新定义全站背景和基础文字色，只在 Phase 10 基础上补充：

```txt
Projects / Notes / Archive / Lab 四个栏目各自的主识别色
各栏目的底纹托底色
各栏目的 Pixel Cover 色带和热力图颜色
导航 active / sidebar active / 页面装饰线的映射
```

### 1.2 不替代 Phase 22 Pixel Cover System

Phase 22 已经定义：

```txt
文字是第一视觉资产
色带是第二视觉资产
热力条是第三视觉资产
像素点块只做辅助纹理和内容差异
```

本方案继续沿用这个结构，只进一步明确每个栏目如何用色。

### 1.3 本方案的新增价值

本方案新增的是：

```txt
页面级栏目色
网格纸底纹选择规则
热力图五级色阶规则
传统色风格下的具体 token
各栏目颜色面积比例
Agent 可执行的颜色替换边界
```

---

## 2. 核心判断

当前色彩问题不是“颜色不够多”，而是：

```txt
主色承担了太多职责。
```

例如：

```txt
Notes 中，红色同时承担编号、底纹、热力块、状态条、角标，导致像警报卡。
Lab 中，紫色同时承担编号、矩阵高密度色块、状态条、角标，导致不透气。
Archive 中，黄绿、土褐、暗黄同时出现在底纹和热力块中，导致浑浊。
```

新的基本原则是：

> **主色负责栏目识别，底纹负责托底呼吸，热力图负责信息节奏，峰值色负责少量重点。**

换成可执行规则：

```txt
1. 页面大标题不跟随栏目主色，统一保持黛蓝 / 墨蓝。
2. 栏目主色只用于识别、选中、状态和热力高值。
3. 网格纸底纹不自动等于主色浅色版。
4. 热力图必须具备空白、低值、中值、高值、峰值五级。
5. 峰值色只能少量出现。
6. 卡片边框和阴影默认不使用高饱和主色。
```

---

## 3. 三层色彩系统

后续所有颜色都按三层理解。

### 3.1 Page Accent：页面栏目主色

作用：让用户知道自己在哪个栏目。

适用位置：

```txt
Header 当前导航项
页面 eyebrow / 小标题
页面装饰虚线 / 短线
Sidebar active 项
Sidebar 左侧选中线
Pixel cover 主编号 / 主代号
Pixel corner mark
Heat level 3 高值
局部状态线
```

不适用位置：

```txt
页面大标题
正文段落
大面积背景
所有卡片边框
全封面底纹
全热力图默认格子
```

### 3.2 Support Texture：托底底纹色

作用：给封面和页面区域提供纸感、呼吸感、层次感。

适用位置：

```txt
封面网格纸底纹
Pixel cover 内部浅背景
Heat level 0 / 1 / 2
卡片局部浅色面
页面轻微色带
```

原则：

```txt
不一定与主色同色相。
必须低饱和。
必须低对比。
必须让主色更清晰，而不是和主色互相放大。
```

### 3.3 Peak Accent：峰值点缀色

作用：表达重点、异常、当前节点、热力峰值。

适用位置：

```txt
热力图最高值
Archive 当前节点
少量状态点
重点 action 箭头
极少量像素块
```

原则：

```txt
面积必须小。
只用于需要被看见的重点。
不能成为默认装饰色。
```

---

## 4. 页面级栏目主色规划

四个核心内容页采用固定栏目色：

| 页面 | 主色方向 | 内容气质 | 视觉关键词 |
|---|---|---|---|
| Projects | 蓝 | 项目、系统、工具、结构 | 稳定、技术、工程感 |
| Notes | 红 | 阅读记录、笔记、日志、快速标注 | 活跃、记录、重点 |
| Archive | 绿 | 时间存档、阶段节点、保存点 | 生长、归档、稳定 |
| Lab | 紫 | 实验、探索、视觉测试 | 实验性、观察、变量 |

说明：

```txt
这四个颜色不是整页主题皮肤。
它们是栏目识别色，服务于导航、索引、封面、状态和热力层级。
```

---

## 5. 全站基础色保持不变

以下基础色不应在本阶段大改。

```css
:root {
  --pa-bg: #F8F5F0;             /* 梨花白：页面背景 */
  --pa-bg-cool: #EEF7F2;        /* 月白：冷调辅助 */
  --pa-surface: #FFFDF7;        /* 纸白表面 */
  --pa-surface-soft: #FFF9EA;   /* 暖纸面 */

  --pa-ink: #2A3C5C;            /* 黛蓝：标题、主文字 */
  --pa-ink-deep: #131824;       /* 燕颔蓝：极深文字 */
  --pa-text: #243747;           /* 正文墨蓝 */
  --pa-muted: #6F7A83;          /* 次级文字 */
  --pa-faint: #9AA6AE;          /* 弱标记 */

  --pa-line: rgba(42, 60, 92, 0.16);
  --pa-shadow: rgba(42, 60, 92, 0.12);
}
```

原因：

```txt
页面大标题统一黛蓝，保证全站一致性。
栏目主色不抢夺标题系统。
内容阅读体验优先。
```

---

## 6. Projects：蓝色栏目系统

### 6.1 选择理由

Projects 从原先绿色转为蓝色更符合：

```txt
项目系统
技术工具
工程结构
长期构建
可维护性
```

蓝色不应使用现代 SaaS 亮蓝，而应采用更稳的传统蓝 / 青蓝方向。

推荐传统色灵感：

```txt
黛蓝：深标题与技术感
石青：蓝绿色结构感
群青 / 花青方向：工程识别，但需降低饱和度
```

### 6.2 Projects token

```css
:root {
  --section-projects-main: #1685A9;      /* 石青：Projects 栏目主色 */
  --section-projects-deep: #2A3C5C;      /* 黛蓝：压色 / 深文字 */
  --section-projects-soft: #E8F4F0;      /* 白雪藤：冷纸底 */
  --section-projects-paper: #F7FBF9;     /* 项目封面纸面 */
  --section-projects-neutral: #D4DCE0;   /* 低值冷灰 */
  --section-projects-cool: #9FB9BF;      /* 蓝灰中值 */
  --section-projects-peak: #ED5126;      /* 朱红：峰值 / 异常点 */
}
```

### 6.3 Projects 使用规则

适用：

```txt
Header Projects active
Projects 页面装饰虚线
Projects sidebar active
Project cover 大号代号
Project cover 角标
Project heat level 3
Project status band
```

不适用：

```txt
Projects 页面大标题
项目正文描述
全卡片边框
全热力条默认块
```

### 6.4 Projects 热力图

```css
:root {
  --heat-projects-0: #F7FBF9;  /* 空白 */
  --heat-projects-1: #D4DCE0;  /* 低值：冷灰 */
  --heat-projects-2: #9FB9BF;  /* 中值：蓝灰 */
  --heat-projects-3: #1685A9;  /* 高值：石青 */
  --heat-projects-4: #ED5126;  /* 峰值：朱红 */
}
```

比例建议：

```txt
空白 + 冷灰：50%–60%
蓝灰中值：20%–25%
石青高值：12%–18%
朱红峰值：3%–6%
```

---

## 7. Notes：红色栏目系统

### 7.1 选择理由

Notes 用红色是合理的，因为它表达：

```txt
标注
重点
记录
阅读过程
活跃更新
```

但红色不能成为底纹和默认热力块，否则会像警报卡。

推荐传统色灵感：

```txt
朱红：清晰高亮
丹橘：阅读记录活力
酡红 / 绯红：深色压重
```

### 7.2 Notes token

```css
:root {
  --section-notes-main: #ED5126;       /* 朱红：Notes 栏目主色 */
  --section-notes-deep: #9D2933;       /* 深红：少量强调 */
  --section-notes-soft: #FFF3EA;       /* 浅桃纸底 */
  --section-notes-paper: #FFF9F2;      /* 卡片纸面 */
  --section-notes-neutral: #D8D5C8;    /* 暖灰低值 */
  --section-notes-cool: #8FA7A0;       /* 青灰绿中和 */
  --section-notes-ink: #2A3C5C;        /* 黛蓝压色 */
  --section-notes-band: #263746;       /* 深黛蓝状态条 */
}
```

### 7.3 Notes 使用规则

适用：

```txt
Header Notes active
Notes 页面装饰虚线中的主色段
Notes sidebar active
Note cover 编号 Nxxx
Note cover 角标
Heat level 3 / 4
少量 tag active
OPEN NOTE 箭头
```

不适用：

```txt
整张 Note cover 背景
大面积网格底纹
整条状态带高饱和红
全部热力块
正文标题和摘要
```

### 7.4 Notes 底纹规则

Notes 的底纹不建议使用红色同色系。

推荐底纹：

```txt
暖纸白
浅米灰
极浅灰绿
少量低饱和桃色只作为局部区域
```

禁止：

```txt
红色网格铺满
橙红半透明网格铺满
红色状态条 + 红色热力图 + 红色编号同时出现
纯黑大状态条过重使用
```

### 7.5 Notes 热力图

```css
:root {
  --heat-notes-0: #FFF7EF;  /* 空白 */
  --heat-notes-1: #D8D5C8;  /* 低值：暖灰 */
  --heat-notes-2: #8FA7A0;  /* 中值：青灰绿 */
  --heat-notes-3: #F28A5B;  /* 高值：丹橘 */
  --heat-notes-4: #ED5126;  /* 峰值：朱红 */
}
```

比例建议：

```txt
空白 + 暖灰：55%–65%
青灰绿中值：18%–25%
丹橘高值：8%–14%
朱红峰值：3%–6%
```

---

## 8. Archive：绿色栏目系统

### 8.1 选择理由

Archive 用绿色更适合表达：

```txt
存档
保存点
稳定状态
阶段沉淀
时间生长
```

当前 Archive 的问题是偏黄绿、土褐、暗黄，导致浑浊。后续应改为清爽的青绿 / 亚丁绿方向。

推荐传统色灵感：

```txt
亚丁绿：稳定、自然、档案状态
青碧 / 石绿：清爽时间感
白雪藤 / 月白：托底纸感
```

### 8.2 Archive token

```css
:root {
  --section-archive-main: #428675;      /* 亚丁绿：Archive 栏目主色 */
  --section-archive-deep: #2F5D50;      /* 深青绿：压色 */
  --section-archive-soft: #E8F4F0;      /* 白雪藤：浅底 */
  --section-archive-paper: #F5FAF7;     /* 存档纸面 */
  --section-archive-neutral: #D7E2DD;   /* 低值青灰 */
  --section-archive-cool: #82B7AA;      /* 中值青绿 */
  --section-archive-peak: #CA6924;      /* 琥珀 / 赭橙：当前节点 */
}
```

### 8.3 Archive 使用规则

适用：

```txt
Header Archive active
SAVE POINT INDEX eyebrow
Archive 页面装饰虚线
Archive sidebar active
Archive 时间轴主线 / 节点
Archive cover 日期辅助线
Archive heat level 3
Archive 角标
```

不适用：

```txt
Archive 页面大标题
全体日期文字
大面积黄褐底纹
全部热力块
所有时间轴节点
```

### 8.4 Archive 底纹规则

推荐底纹：

```txt
月白
白雪藤
浅青灰
极浅石青
```

禁止：

```txt
黄褐底纹
暗黄色底纹
土绿色大面积网格
褐色热力块作为默认中值
```

### 8.5 Archive 热力图

```css
:root {
  --heat-archive-0: #F5FAF7;  /* 空白 */
  --heat-archive-1: #D7E2DD;  /* 低值：青灰 */
  --heat-archive-2: #82B7AA;  /* 中值：青绿 */
  --heat-archive-3: #428675;  /* 高值：亚丁绿 */
  --heat-archive-4: #CA6924;  /* 峰值：琥珀节点 */
}
```

比例建议：

```txt
空白 + 青灰：55%–65%
青绿中值：18%–25%
亚丁绿高值：10%–16%
琥珀峰值：2%–5%
```

---

## 9. Lab：紫色栏目系统

### 9.1 选择理由

Lab 用紫色适合表达：

```txt
实验
视觉测试
探索
变量
非正式但受控的尝试
```

但紫色不能铺满矩阵，否则会压抑；橙红峰值必须少量出现。

推荐传统色灵感：

```txt
藕荷色：柔和实验感
丁香紫：轻视觉实验
绛紫 / 深紫：结构压色
```

### 9.2 Lab token

```css
:root {
  --section-lab-main: #7257A5;       /* 主紫：Lab 栏目主色 */
  --section-lab-deep: #4B3785;       /* 深紫：压色 */
  --section-lab-soft: #F4F0FA;       /* 浅紫底 */
  --section-lab-paper: #FBFAF5;      /* 纸白 */
  --section-lab-neutral: #D5DCE0;    /* 冷灰低值 */
  --section-lab-cool: #7FA7A0;       /* 青灰绿中和 */
  --section-lab-bluegray: #9AA8B4;   /* 蓝灰辅助 */
  --section-lab-peak: #ED5126;       /* 橙红峰值 */
}
```

### 9.3 Lab 使用规则

适用：

```txt
Header Lab active
Experiment Slot eyebrow
Lab 页面装饰虚线
Lab sidebar active
Lab cover 编号 L-xxx / PUC / PCS
Lab cover 角标
Lab status band
Lab heat level 3
```

不适用：

```txt
Lab 页面大标题
整张卡片边框
整个矩阵默认格子
所有 tag
全部状态信息
```

### 9.4 Lab 底纹规则

推荐底纹：

```txt
浅暖纸
淡灰紫
浅米黄
冷灰网格
```

说明：

```txt
Lab 的底纹可以不完全同色系。
浅暖纸或淡米黄可以中和紫色，让页面更透气。
如果使用灰紫底纹，必须非常低饱和。
```

### 9.5 Lab 热力图

```css
:root {
  --heat-lab-0: #F8F7F2;  /* 空白 */
  --heat-lab-1: #D5DCE0;  /* 低值：冷灰 */
  --heat-lab-2: #7FA7A0;  /* 中值：青灰绿 */
  --heat-lab-3: #7257A5;  /* 高值：主紫 */
  --heat-lab-4: #ED5126;  /* 峰值：橙红 */
}
```

比例建议：

```txt
空白 + 冷灰：50%–60%
青灰绿中值：18%–25%
紫色高值：12%–18%
橙红峰值：3%–6%
```

---

## 10. 页面元素映射规则

### 10.1 Header active

规则：

```txt
当前栏目导航项使用栏目主色。
Home 可继续使用全站主识别绿或朱红短线。
```

示例：

```css
[data-section="projects"] { --section-accent: var(--section-projects-main); }
[data-section="notes"]    { --section-accent: var(--section-notes-main); }
[data-section="archive"]  { --section-accent: var(--section-archive-main); }
[data-section="lab"]      { --section-accent: var(--section-lab-main); }
```

### 10.2 页面大标题

规则：

```txt
不随栏目主色变化。
统一使用 --pa-ink。
```

原因：

```txt
保证全站主视觉一致。
避免每页变成不同色块主题。
让栏目主色停留在识别层，而不是抢夺品牌层。
```

### 10.3 页面装饰虚线

规则：

```txt
虚线由 3–4 种颜色组成：栏目主色、托底色、弱线色、少量峰值色。
不得整条同色。
```

示例：

```txt
Projects：石青 + 冷灰 + 月白 + 少量朱红
Notes：朱红 + 暖灰 + 青灰绿 + 少量深红
Archive：亚丁绿 + 青灰 + 月白 + 少量琥珀
Lab：紫色 + 冷灰 + 青灰绿 + 少量橙红
```

### 10.4 Sidebar active

规则：

```txt
左侧 active border 使用栏目主色。
active 背景使用栏目 soft 色。
文字仍用墨蓝 / 黛蓝。
计数可用栏目主色或 muted。
```

禁止：

```txt
active 背景高饱和
active 文本过浅
sidebar 所有分割线都用主色
```

### 10.5 Pixel cover

规则：

```txt
主编号 / 代号：栏目主色或栏目 deep 色
标题 / 正文：统一墨蓝
网格底纹：栏目 support texture
状态条：栏目 deep 或主色低饱和版本
热力图：使用五级 heat tokens
角标：栏目主色
峰值格：peak token
```

---

## 11. 网格纸底纹选择规则

底纹不是主色浅色版。

### 11.1 底纹选择原则

```txt
1. 底纹负责让内容浮起来，而不是抢内容。
2. 底纹饱和度必须低。
3. 底纹明度必须接近纸面。
4. 底纹可以与主色同色系，也可以用邻近色、互补低饱和色或冷暖中和色。
5. 如果主色本身强烈，底纹应尽量远离主色。
```

### 11.2 各栏目底纹建议

| 页面 | 主色 | 推荐底纹 | 不推荐底纹 |
|---|---|---|---|
| Projects | 蓝 | 月白、浅青灰、冷纸白 | 高饱和蓝底、灰黑网格 |
| Notes | 红 | 暖纸白、浅米灰、浅灰绿 | 红底纹、橙红网格、黑色大条 |
| Archive | 绿 | 白雪藤、月白、浅青灰 | 黄褐、暗黄、土绿 |
| Lab | 紫 | 浅暖纸、淡灰紫、浅米黄、冷灰 | 高饱和紫底、大面积深紫 |

### 11.3 底纹强度

建议：

```css
--cover-grid-opacity-light: 0.08;
--cover-grid-opacity-strong: 0.14;
```

使用规则：

```txt
列表卡片封面：0.08–0.10
Featured 大封面：0.10–0.14
详情页顶部封面：0.08–0.12
暗色模式：降低亮度，提高对比，但不做霓虹网格
```

---

## 12. 热力图系统总规则

所有栏目热力图统一五级。

```txt
0 空白 / 未激活：纸白或极浅底色
1 低值：浅灰
2 中值：托底中和色
3 高值：栏目主色
4 峰值：互补或暖色点缀
```

全局比例：

```txt
0 + 1：至少 50%
2：20% 左右
3：10%–18%
4：3%–8%
```

禁止：

```txt
单一主色铺满热力图
峰值色超过 10%
红色同时充当底纹、高值和峰值
紫色矩阵高值连续超过 1/3 宽度
Archive 出现大面积黄褐热力块
```

---

## 13. 颜色 token 实现建议

### 13.1 统一别名层

建议建立栏目别名，不让组件直接写死具体页面色。

```css
[data-section="projects"] {
  --section-main: var(--section-projects-main);
  --section-deep: var(--section-projects-deep);
  --section-soft: var(--section-projects-soft);
  --section-paper: var(--section-projects-paper);
  --section-neutral: var(--section-projects-neutral);
  --section-cool: var(--section-projects-cool);
  --section-peak: var(--section-projects-peak);

  --heat-0: var(--heat-projects-0);
  --heat-1: var(--heat-projects-1);
  --heat-2: var(--heat-projects-2);
  --heat-3: var(--heat-projects-3);
  --heat-4: var(--heat-projects-4);
}
```

其他栏目同理。

### 13.2 组件使用别名

PixelCover 组件使用：

```css
.pixel-cover {
  --cover-accent: var(--section-main);
  --cover-deep: var(--section-deep);
  --cover-soft: var(--section-soft);
  --cover-paper: var(--section-paper);
  --cover-peak: var(--section-peak);
}
```

这样后续新增页面或修改栏目色，只需要改 section token。

---

## 14. 暗色模式方向

暗色模式不在本阶段重做，但必须保证栏目色不失真。

```css
[data-theme="dark"] {
  --section-projects-main: #6BB9CC;
  --section-projects-deep: #D7ECF2;
  --section-projects-soft: #13262C;

  --section-notes-main: #FF7652;
  --section-notes-deep: #FFB6A0;
  --section-notes-soft: #2A1A16;

  --section-archive-main: #80C6A8;
  --section-archive-deep: #CBEADC;
  --section-archive-soft: #12251E;

  --section-lab-main: #A58AD8;
  --section-lab-deep: #E6D9FA;
  --section-lab-soft: #221B2C;
}
```

暗色模式注意：

```txt
Notes 不要变成荧光橙。
Lab 不要变成霓虹紫。
Archive 不要变成低对比灰绿。
Projects 不要变成亮蓝 SaaS 风。
热力图低值和空白格仍要可区分。
```

---

## 15. Agent 执行边界

### 15.1 允许修改

允许：

```txt
CSS variables
section data attribute 对应 token
Header active 颜色映射
页面装饰虚线颜色映射
Sidebar active 颜色映射
Pixel Cover 颜色映射
Pixel Heat Strip 五级颜色
暗色模式对应 token
```

### 15.2 禁止修改

不得：

```txt
修改页面布局
修改组件结构
修改 Content Collections schema
修改路由
修改真实内容
新增依赖
新增复杂动画
将封面改成手工图片资产
将大标题改为页面主色
```

---

## 16. 分阶段执行建议

### Step 1：建立栏目 token

先只建立：

```txt
Projects / Notes / Archive / Lab 四套 section token
四套 heat token
暗色模式基础 token
```

不改组件结构。

### Step 2：映射页面级主色

应用到：

```txt
Header active
eyebrow
装饰虚线
Sidebar active
```

验收重点：

```txt
大标题没有变色
页面识别更清楚
Sidebar 高亮与栏目一致
```

### Step 3：映射 Pixel Cover

应用到：

```txt
Projects cover
Notes cover
Archive cover
Lab cover
```

验收重点：

```txt
Projects 从绿色过渡到蓝色
Notes 不再整张红
Archive 不再黄褐浑浊
Lab 不再紫色过密
```

### Step 4：暗色模式微调

只做对比度和过饱和控制。

---

## 17. 验收截图要求

执行完成后至少输出：

```txt
Projects 列表页亮色
Notes 列表页亮色
Archive 页面亮色
Lab 页面亮色
Projects 列表页暗色
Notes 列表页暗色
Archive 页面暗色
Lab 页面暗色
首页亮色，用于确认全站基础色未被破坏
```

重点截图区域：

```txt
Header active
页面标题区
装饰虚线
Sidebar active
Pixel Cover
Heat strip / heat matrix
卡片 action 链接
```

---

## 18. 验收标准

必须满足：

```txt
1. Projects 页面主识别从绿色转为蓝色，但不变成现代亮蓝 SaaS 风。
2. Notes 页面保留红色识别，但不再整张偏红、偏橙。
3. Archive 页面改为绿色系，去掉黄褐、土绿、暗黄浑浊感。
4. Lab 页面保留紫色识别，但矩阵和状态条更透气。
5. 页面大标题仍统一黛蓝，不跟随栏目主色变化。
6. Sidebar active 与栏目主色一致。
7. 页面装饰虚线与栏目主色一致，但不是整条同色。
8. 网格纸底纹不是主色浅色版，而是低饱和托底色。
9. 热力图能看出空白、低值、中值、高值、峰值五级。
10. 峰值色少而明确。
11. 不出现横向溢出。
12. 暗色模式不霓虹、不刺眼、不低对比。
13. npm run build 通过。
14. 浏览器控制台 0 error。
```

---

## 19. 不合格示例

以下结果视为不合格：

```txt
Notes 封面红色铺满底纹、状态条和全部热力块。
Lab 封面紫色铺满整个矩阵，橙红峰值过多。
Archive 继续使用黄褐和土绿作为主要热力色。
Projects 变成高饱和亮蓝按钮风。
页面大标题随页面变成蓝 / 红 / 绿 / 紫。
四个页面像四套不同网站。
封面热力图完全看不出层级。
Grid 底纹过强，抢过文字。
```

---

## 20. 推荐给 Agent 的执行摘要

```txt
请执行 Phase 23：栏目色彩与封面托底系统校准。

本轮只允许调整 Projects / Notes / Archive / Lab 的栏目主色、sidebar active、页面装饰线、Pixel Cover 色彩、Pixel Heat Strip 五级热力色和暗色对应 token。

不得改布局、组件结构、路由、schema、内容或新增依赖。

栏目主色方向：
Projects = 蓝，Notes = 红，Archive = 绿，Lab = 紫。

页面大标题保持统一黛蓝，不跟随栏目变色。

主色只负责栏目识别和热力高值；底纹必须独立选择，不能简单使用主色浅色版；热力图必须有空白、低值、中值、高值、峰值五级。

重点修正：
Projects 从绿色过渡到稳重蓝色；
Notes 降低红色面积，增加暖灰、青灰绿和黛蓝压色；
Archive 改成清爽绿色系，去掉黄褐浑浊；
Lab 保留紫色，但用冷灰、青灰绿和纸白让矩阵透气。

完成后运行 npm run build，并输出四个页面亮色与暗色截图。
```

---

## 21. 后续沉淀建议

如果 Phase 23 验收通过，可以将本方案中稳定下来的内容拆分沉淀到：

```txt
standards/03_视觉风格规范.md
standards/06_组件设计规范.md
```

沉淀时只提取长期规则：

```txt
栏目主色 token
底纹选择原则
热力图五级规则
Pixel Cover 颜色映射原则
暗色模式约束
```

阶段性截图反馈、临时问题记录、Agent 执行日志不进入 standards。

---

## 22. 最终原则

> Pixel Archive 的颜色系统应当服务于长期内容管理，而不是制造一次性视觉效果。  
> 主色负责识别，底纹负责托底，热力图负责节奏，文字负责信息。  
> 四个栏目可以有各自颜色，但必须仍然属于同一个 Pixel Archive。
