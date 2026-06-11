# Pixel Archive 全站配色与视觉层级方案

文档版本：v1.0
适用阶段：Phase 10 视觉系统再校准
状态：执行完成并验收通过（2026-06-11）
适用对象：Agent / 前端实现 / 视觉验收
建议路径：`docs/phases/19_Phase10_全站配色与视觉层级方案.md`

---

## 0. 文档目的

本文档只解决 **Pixel Archive 全站配色、背景、表面层级、阴影和状态色** 问题。

当前 Phase 10 返工中最主要的问题不是布局，而是：

1. 页面背景、主体面板、卡片之间区分度不足；
2. 全站整体偏灰黄、偏暗淡，缺少生气；
3. 点缀色不够明确，像素识别符号没有形成系统；
4. 大字号标题、导航 active、状态标签、卡片角标没有承担视觉记忆点；
5. 暗色模式容易出现“廉价紫边”或“低饱和死黑”。

本方案要求 Agent **在不改变页面结构的前提下**，重建全站色彩 token 和视觉层级。

---

## 1. 执行边界

### 1.1 允许修改

允许修改：

- `theme.css` / `global.css` / `markdown.css` 中的 CSS variables；
- 全站浅色 / 暗色主题 token；
- 组件颜色、边框、阴影、hover / focus 状态；
- 页面级 `data-section` / `data-page-theme` 变量；
- 背景色、局部背景色带、极淡 grid / dot pattern；
- Header、Hero、StatusBar、SaveSlotCard、ProjectCard、NoteItem、ArchiveItem、LabCard、About blocks 的颜色映射。

### 1.2 禁止修改

不得修改：

- 页面路由；
- Content Collections schema；
- 页面信息架构；
- 组件功能逻辑；
- 正文内容；
- 新增复杂插图、复杂背景图、照片、花纹、国风纹样；
- 新增依赖；
- 大面积重构布局。

本阶段是 **配色系统落地**，不是重新设计网站。

---

## 2. 参考来源与取色原则

本方案参考 `nevertoday/zhongguo-traditional-colors` 的中国传统色与配色关系，但 Pixel Archive 不是新中式网站。

传统色在本项目中只用于提供：

- 纸感；
- 墨感；
- 石感；
- 松绿 / 青绿的状态感；
- 朱红 / 赭红的小面积高亮；
- 藕荷 / 绛紫的次级识别。

不得使用：

- 古风纹样；
- 大面积中国红；
- 国潮撞色；
- 花鸟山水装饰；
- 金红高饱和组合。

---

## 3. 核心色彩方向

Pixel Archive 的全站色彩方向定义为：

> **纸白底色 + 黛蓝文字 + 亚丁绿主识别 + 朱红点缀 + 琥珀状态 + 少量藕荷紫**

关键词：

```txt
明亮
干净
有纸感
有档案感
有少量鲜明点缀
克制但不死气沉沉
像素感来自小而准的色块和边角
```

不再采用：

```txt
整页灰黄
全站紫色边框
低饱和到无彩色
主体与背景几乎同色
每个组件都一圈强调色
```

---

## 4. 色彩面积比例

全站推荐比例：

| 层级 | 面积比例 | 说明 |
|---|---:|---|
| 背景纸色 | 65% - 75% | 页面整体底色，保持阅读舒适 |
| 表面色 / 卡片色 | 15% - 25% | Hero、卡片、文章块、终端面板 |
| 文字与结构线 | 7% - 10% | 标题、正文、边框、分割线 |
| 彩色点缀 | 2% - 4% | active、状态、箭头、像素角标、链接 |

关键原则：

> 彩色点缀必须清晰可见，但面积必须小。

---

## 5. 传统色候选与角色分配

### 5.1 背景与纸面色

| 角色 | 色名 | HEX | 用途 |
|---|---|---:|---|
| 页面主背景 | 梨花白 | `#F8F5F0` | 全站默认 body 背景 |
| 冷纸色辅助 | 月白 | `#EEF7F2` | Home / Notes / 背景微冷区域 |
| 浅青纸色 | 白雪藤 | `#E8F4F0` | 背景轻色带、浅色 mode 柔和区域 |
| 表面白 | 派生纸白 | `#FFFDF7` | Hero / Card 主表面 |
| raised 表面 | 派生暖白 | `#FFF9EA` | Hero 内部、重点卡片 |

说明：

- 当前用户最能接受的是 **偏亮、偏纸白、非灰黄** 的背景。
- `#F8F5F0` 作为主背景更稳，`#EEF7F2` 只作为极淡冷调变化，不宜全站大面积变绿。

---

### 5.2 文字与深色结构

| 角色 | 色名 | HEX | 用途 |
|---|---|---:|---|
| 一级标题 | 黛蓝 | `#2A3C5C` | 大标题、站点主识别、Save Slots 标题 |
| 极深文字 | 燕颔蓝 | `#131824` | 高对比文本、暗色模式背景参考 |
| 正文文本 | 派生墨蓝 | `#243747` | 正文、描述、导航普通项 |
| 弱文本 | 派生灰蓝 | `#6F7A83` | meta、说明、日期、计数 |
| 极弱文本 | 派生浅灰蓝 | `#9AA6AE` | ruler、坐标、辅助标记 |

说明：

- 大字号文字不要使用纯黑。
- 一级标题可以更有颜色感，优先使用 `#2A3C5C` 或更深一点的 `#1D2F4F`。
- 正文仍需保持可读性，不要过浅。

---

### 5.3 主识别绿

| 角色 | 色名 | HEX | 用途 |
|---|---|---:|---|
| 主品牌绿 | 亚丁绿 | `#428675` | logo 方块、Archive Online、READY、Projects、状态 icon |
| 深绿 | 青絇繶纯 | `#3B7A5D` | hover、重点状态、可点击项 |
| 蓝绿辅助 | 蓝翠竹 | `#4B8F8C` | 冷调辅助、Notes / 信息状态 |
| 浅绿派生 | 派生浅绿 | `#DDEFE8` | active 背景、状态 soft 背景 |

说明：

- 主绿是 Pixel Archive 的长期识别色。
- 绿不能灰掉，要保持可识别。
- 绿主要用于“系统在线 / 建设中 / 归档状态 / 文件状态”。

---

### 5.4 高亮红橙

| 角色 | 色名 | HEX | 用途 |
|---|---|---:|---|
| 主高亮 | 朱红 | `#ED5126` | active、箭头、LOAD SLOT、标题像素点 |
| 强高亮 | 蜻蜓红 | `#F1441D` | hover / focus / 小面积强调 |
| 柔和高亮 | 派生朱砂浅底 | `#FFE8DE` | soft badge 背景，不用于正文 |

说明：

- 朱红只做小面积点缀，不做大面积背景。
- 首页必须能看到少量朱红，否则会再次变得没生气。
- 推荐落点：
  - Home active 下划线；
  - Hero 标题旁 1 个像素方块；
  - 右侧菜单箭头；
  - `LOAD SLOT →`；
  - `ARCHIVE MEMORY` 小标题；
  - Archive 时间线关键节点。

---

### 5.5 温暖状态色

| 角色 | 色名 | HEX | 用途 |
|---|---|---:|---|
| 琥珀状态 | UI 派生琥珀 | `#D69A2D` | save point、index ready、locked、日期 |
| 温暖深色 | 派生赭橙 | `#B86B24` | Archive 强调、hover 状态 |
| 温暖浅底 | 派生浅琥珀 | `#FFF0D2` | 状态 soft 背景 |

说明：

- 温暖状态色用于“存档 / 时间 / 锁定 / index ready”。
- 不直接大面积铺黄色，避免变成老旧羊皮纸。

---

### 5.6 紫色与次级识别

| 角色 | 色名 | HEX | 用途 |
|---|---|---:|---|
| 柔和紫 | 藕荷色 | `#B5A0C2` | Lab、Mode Quiet、少量次级角标 |
| 深紫红 | 绛紫 | `#8E354A` | 高级点缀，慎用 |
| 中紫派生 | UI 派生紫 | `#7257A5` | 状态 icon、Lab 小色块 |
| 浅紫底 | 派生浅紫 | `#F0E8F5` | Lab soft badge 背景 |

说明：

- 紫色不能再作为全站默认边框色。
- 紫色只服务 Lab / Mode Quiet / 少数次级状态。
- 避免“整站紫色描边”。

---

## 6. 全站 Token 草案

Agent 应优先通过 CSS variables 实现，而不是逐页硬编码颜色。

```css
:root {
  /* =========================
     Primitive / Traditional
     ========================= */
  --px-lihua-white: #F8F5F0;
  --px-yuebai: #EEF7F2;
  --px-baixueteng: #E8F4F0;

  --px-dailan: #2A3C5C;
  --px-yanhan-blue: #131824;

  --px-ading-green: #428675;
  --px-qing-green: #3B7A5D;
  --px-lancuizhu: #4B8F8C;

  --px-zhuhong: #ED5126;
  --px-qingting-red: #F1441D;

  --px-amber: #D69A2D;
  --px-amber-deep: #B86B24;

  --px-ouhe: #B5A0C2;
  --px-jiangzi: #8E354A;
  --px-violet: #7257A5;

  /* =========================
     Semantic / Light Mode
     ========================= */
  --color-bg: var(--px-lihua-white);
  --color-bg-soft: var(--px-yuebai);
  --color-bg-tint: var(--px-baixueteng);

  --color-surface: #FFFDF7;
  --color-surface-soft: #FFF9EA;
  --color-surface-raised: #FFFFFF;

  --color-heading: var(--px-dailan);
  --color-text: #243747;
  --color-muted: #6F7A83;
  --color-subtle: #9AA6AE;

  --color-border-subtle: rgba(42, 60, 92, 0.10);
  --color-border: rgba(42, 60, 92, 0.18);
  --color-border-strong: rgba(42, 60, 92, 0.34);

  --color-primary: var(--px-ading-green);
  --color-primary-strong: var(--px-qing-green);
  --color-primary-soft: #DDEFE8;

  --color-accent: var(--px-zhuhong);
  --color-accent-strong: var(--px-qingting-red);
  --color-accent-soft: #FFE8DE;

  --color-warm: var(--px-amber);
  --color-warm-strong: var(--px-amber-deep);
  --color-warm-soft: #FFF0D2;

  --color-violet: var(--px-violet);
  --color-violet-soft: #F0E8F5;

  --color-link: var(--px-dailan);
  --color-link-hover: var(--px-zhuhong);

  --color-focus: var(--px-zhuhong);

  /* =========================
     Shadow / Light Mode
     ========================= */
  --shadow-xs: 0 1px 0 rgba(19, 24, 36, 0.08);
  --shadow-sm: 0 8px 20px rgba(19, 24, 36, 0.08);
  --shadow-md: 0 18px 42px rgba(19, 24, 36, 0.11);
  --shadow-lg: 0 28px 64px rgba(19, 24, 36, 0.13);

  --shadow-pixel-green: 4px 4px 0 rgba(66, 134, 117, 0.24);
  --shadow-pixel-red: 4px 4px 0 rgba(237, 81, 38, 0.18);
  --shadow-pixel-amber: 4px 4px 0 rgba(214, 154, 45, 0.20);
  --shadow-pixel-violet: 4px 4px 0 rgba(114, 87, 165, 0.18);
}
```

---

## 7. 暗色模式 Token 草案

暗色模式不能直接反转浅色模式，也不能回到“紫色霓虹边框”。

```css
[data-theme="dark"] {
  --color-bg: #11181D;
  --color-bg-soft: #152126;
  --color-bg-tint: #18282D;

  --color-surface: #1B272E;
  --color-surface-soft: #202F36;
  --color-surface-raised: #263942;

  --color-heading: #F8F5F0;
  --color-text: #E8F4F0;
  --color-muted: #B8C0BC;
  --color-subtle: #7F8E8B;

  --color-border-subtle: rgba(238, 247, 242, 0.10);
  --color-border: rgba(238, 247, 242, 0.18);
  --color-border-strong: rgba(238, 247, 242, 0.34);

  --color-primary: #73B8A5;
  --color-primary-strong: #8FD0BC;
  --color-primary-soft: rgba(115, 184, 165, 0.16);

  --color-accent: #FF704A;
  --color-accent-strong: #FF8A65;
  --color-accent-soft: rgba(255, 112, 74, 0.16);

  --color-warm: #E0AE4C;
  --color-warm-strong: #F2C76B;
  --color-warm-soft: rgba(224, 174, 76, 0.16);

  --color-violet: #BFA7E8;
  --color-violet-soft: rgba(191, 167, 232, 0.16);

  --color-link: #E8F4F0;
  --color-link-hover: #FF704A;

  --color-focus: #FF704A;

  --shadow-xs: 0 1px 0 rgba(0, 0, 0, 0.35);
  --shadow-sm: 0 8px 24px rgba(0, 0, 0, 0.28);
  --shadow-md: 0 18px 48px rgba(0, 0, 0, 0.36);
  --shadow-lg: 0 28px 72px rgba(0, 0, 0, 0.42);

  --shadow-pixel-green: 4px 4px 0 rgba(115, 184, 165, 0.22);
  --shadow-pixel-red: 4px 4px 0 rgba(255, 112, 74, 0.18);
  --shadow-pixel-amber: 4px 4px 0 rgba(224, 174, 76, 0.20);
  --shadow-pixel-violet: 4px 4px 0 rgba(191, 167, 232, 0.18);
}
```

暗色模式验收要求：

- 背景是墨青黑，不是纯黑；
- 卡片必须比背景亮一级；
- 边框为低对比结构线，不允许亮紫描边；
- 朱红、绿、琥珀必须可见，但面积小；
- 大标题为暖白或浅纸色，不要纯白刺眼。

---

## 8. 页面级配色规则

建议每个顶层页面设置一个 `data-section` 或 `data-page-theme`，然后通过变量控制栏目色。

```css
[data-section="home"] {
  --section-accent: var(--color-primary);
  --section-hot: var(--color-accent);
  --section-warm: var(--color-warm);
  --section-soft: var(--color-primary-soft);
}

[data-section="projects"] {
  --section-accent: var(--color-primary);
  --section-hot: var(--color-warm);
  --section-warm: var(--color-warm);
  --section-soft: var(--color-primary-soft);
}

[data-section="notes"] {
  --section-accent: var(--px-dailan);
  --section-hot: var(--color-primary);
  --section-warm: var(--color-warm);
  --section-soft: #EEF2F7;
}

[data-section="archive"] {
  --section-accent: var(--color-warm);
  --section-hot: var(--color-accent);
  --section-warm: var(--color-warm);
  --section-soft: var(--color-warm-soft);
}

[data-section="lab"] {
  --section-accent: var(--color-violet);
  --section-hot: var(--color-accent);
  --section-warm: var(--color-warm);
  --section-soft: var(--color-violet-soft);
}

[data-section="about"] {
  --section-accent: var(--px-lancuizhu);
  --section-hot: var(--color-accent);
  --section-warm: var(--color-warm);
  --section-soft: var(--color-primary-soft);
}
```

### 页面角色说明

| 页面 | 主色 | 点缀 | 背景倾向 |
|---|---|---|---|
| Home | 亚丁绿 | 朱红 + 琥珀 + 少量紫 | 梨花白 + 月白微冷纸感 |
| Projects | 亚丁绿 | 琥珀 / 朱红 | 稍暖纸色，文件柜感 |
| Notes | 黛蓝 | 少量亚丁绿 | 最干净，阅读优先 |
| Archive | 琥珀 | 朱红 | 时间轴可略暖 |
| Lab | 藕荷紫 | 朱红 / 绿 | 实验区可略冷、略活 |
| About | 蓝翠竹 / 黛蓝 | 少量朱红 | 中性、安静 |

---

## 9. 背景系统

### 9.1 全站基础背景

默认背景：

```css
body {
  background:
    radial-gradient(circle at 12% 8%, rgba(238, 247, 242, 0.70), transparent 32%),
    radial-gradient(circle at 85% 18%, rgba(255, 240, 210, 0.40), transparent 34%),
    linear-gradient(180deg, #F8F5F0 0%, #F7F2EA 100%);
}
```

说明：

- 不是纯一块灰黄；
- 微弱冷暖变化，保留“纸白”；
- 不使用复杂曲线、花纹、图片背景；
- 不抢内容。

### 9.2 页面背景变化

可以在页面容器上添加：

```css
.page-shell {
  background:
    linear-gradient(180deg, rgba(255,255,255,0.00), rgba(238,247,242,0.20) 42%, rgba(255,240,210,0.18) 100%);
}
```

不同页面只改 `rgba()` 的 tint，不改结构。

### 9.3 可选：Home 背景色带

Home 可以比其他页面稍有视觉定调：

```css
.home-shell::before {
  content: "";
  position: fixed;
  inset: 12vh 0 auto 0;
  height: 34vh;
  pointer-events: none;
  background:
    linear-gradient(90deg, transparent 0%, rgba(238,247,242,0.45) 25%, rgba(255,240,210,0.34) 58%, transparent 100%);
  opacity: 0.65;
  z-index: -1;
}
```

使用边界：

- 色带只能非常淡；
- 不使用明显波浪线 / 大曲线；
- 不影响卡片可读性；
- 仅 Home / Archive 可尝试明显一点，Notes / About 保持干净。

---

## 10. 组件落位规则

### 10.1 Header

| 元素 | 颜色 |
|---|---|
| Logo 小方块 | `--color-primary` |
| 站点名 | `--color-heading` |
| 普通导航 | `--color-text` |
| Active 导航 | `--color-accent` |
| Active 下划线 | `--color-accent` |
| Header border | `--color-border-subtle` |
| Theme toggle border | `--color-border` |

禁止：

- active 背景大面积紫色；
- header 使用强阴影；
- logo 方块变成灰色。

---

### 10.2 首页 Hero / Archive Terminal

| 元素 | 颜色 |
|---|---|
| Hero 表面 | `--color-surface` |
| Hero 内部 grid | `rgba(42,60,92,0.055)` |
| Hero 边框 | `--color-border` |
| Hero 阴影 | `--shadow-md` |
| 大标题 | `--color-heading` |
| 标题旁像素点 | `--color-accent` |
| `> LOAD ARCHIVE_INDEX` | `--color-primary-strong` |
| READY | `--color-violet` 或 `--color-primary` |
| Archive Online | `--color-primary` |
| 右侧菜单箭头 | `--color-accent` |
| Memory Map | `--color-warm-strong` 或 muted |

重点：

- 大标题必须有颜色，不要纯黑；
- 标题旁小像素点建议使用 `朱红 #ED5126`；
- Hero 必须从背景中浮起。

---

### 10.3 Status Bar

| 元素 | 颜色 |
|---|---|
| 背景 | `--color-surface-raised` |
| 边框 | `--color-border-subtle` |
| 阴影 | `--shadow-sm` |
| SYS.STATUS | `--color-muted` |
| BUILDING | `--color-primary` |
| MODE QUIET | `--color-violet` |
| INDEX READY | `--color-warm` |

注意：

- 状态色要可辨认；
- 不要全部变灰；
- icon 与文字同色或略深。

---

### 10.4 Save Slot Cards

| 元素 | 颜色 |
|---|---|
| Card 背景 | `--color-surface-raised` |
| Card border | `--color-border-subtle` |
| Card shadow | `--shadow-sm` |
| Card hover | `--shadow-md + pixel shadow` |
| Slot 01 corner | `--color-primary` |
| Slot 02 corner | `--color-warm` |
| Slot 03 corner | `--color-violet` 或 muted |
| LOAD SLOT | `--color-accent` |
| Card title | `--color-heading` |

Hover 示例：

```css
.save-slot-card:hover {
  transform: translate(-2px, -2px);
  box-shadow: var(--shadow-md), var(--shadow-pixel-green);
}
```

不同状态：

```css
.save-slot-card[data-status="building"] {
  --card-accent: var(--color-primary);
  --card-pixel-shadow: var(--shadow-pixel-green);
}

.save-slot-card[data-status="locked"] {
  --card-accent: var(--color-warm);
  --card-pixel-shadow: var(--shadow-pixel-amber);
}

.save-slot-card[data-status="empty"] {
  --card-accent: var(--color-violet);
  --card-pixel-shadow: var(--shadow-pixel-violet);
}
```

---

### 10.5 Projects

| 元素 | 颜色 |
|---|---|
| 页面小标签 | `--section-accent` |
| 大标题 | `--color-heading` |
| Featured 卡片角标 | `--section-accent` |
| WIP | `--color-warm` |
| LOAD PROJECT | `--color-accent` |
| hover pixel shadow | `--shadow-pixel-green` |

Projects 要比 Notes 更有“文件卡 / 项目档案”感，但不要重回大面积边框。

---

### 10.6 Notes

Notes 是阅读优先页面。

| 元素 | 颜色 |
|---|---|
| 页面小标签 | `--px-dailan` |
| 文章标题 | `--color-heading` |
| NOTE badge | `#EEF2F7` 背景 + `--px-dailan` 字 |
| OPEN NOTE | `--color-link` |
| hover | `--color-accent` 小面积变化 |

Notes 不要使用太多朱红和琥珀，只保留少量链接反馈。

---

### 10.7 Archive

| 元素 | 颜色 |
|---|---|
| 年份 | `--color-warm-strong` |
| 月份 | `--color-primary` |
| 时间线线条 | `--color-border-strong` |
| 节点 | `--color-accent` 或 `--color-warm` |
| Save Point 卡片角标 | `--color-warm` |
| Open Related File | `--color-accent` |

Archive 可以比其他页面更暖一点。

---

### 10.8 Lab

| 元素 | 颜色 |
|---|---|
| 页面小标签 | `--color-violet` |
| Lab card 角标 | `--color-violet` |
| 实验状态 | `--color-violet` |
| hover | `--shadow-pixel-violet` |
| 关键链接 | `--color-accent` |

Lab 允许比其他页面更活，但不允许复杂背景和大面积紫色。

---

### 10.9 About

| 元素 | 颜色 |
|---|---|
| 大标题 | `--color-heading` |
| 小标签 | `--px-lancuizhu` |
| 信息框 border | `--color-border` |
| 信息框强调 | `--color-primary` |
| 次要信息 | `--color-muted` |

About 应保持简洁，中性色为主。

---

## 11. 阴影系统

### 11.1 使用规则

| 阴影 | 用途 |
|---|---|
| `--shadow-xs` | badge、tag、小型状态 |
| `--shadow-sm` | 普通卡片、status bar |
| `--shadow-md` | Hero、Featured Card、Archive card |
| `--shadow-lg` | 仅用于特殊 hero 或 hover preview |
| `--shadow-pixel-*` | hover / active / featured，不默认使用 |

### 11.2 禁止

不得：

- 所有卡片都用强硬阴影；
- 所有容器都使用像素硬阴影；
- 暗色模式使用发光紫边；
- hover 造成页面跳动过大。

---

## 12. 可访问性与对比度

Agent 必须检查：

1. 正文文本与背景对比；
2. 大标题与背景对比；
3. 链接与普通正文的区分；
4. active nav 与普通 nav 的区分；
5. 暗色模式中文本是否过暗；
6. 朱红在浅背景上是否足够清晰；
7. 绿色状态文本是否不会过浅。

最低要求：

```txt
正文文本：尽量满足 WCAG AA
大标题：高可读
状态 / 小标签：允许较低对比，但不能不可辨
颜色不能作为唯一提示，状态应保留 icon / 文本
```

---

## 13. Agent 执行步骤

### Step 1：读取规范

必须先读取：

```txt
docs/00_项目开发计划书.md
docs/01_规范总览指南.md
docs/standards/03_视觉风格规范.md
docs/standards/06_组件设计规范.md
docs/standards/09_验收与测试规范.md
docs/phases/18_Phase10_视觉系统再校准计划.md
docs/phases/19_Phase10_全站配色与视觉层级方案.md
```

### Step 2：审计现有颜色

输出现有颜色清单：

```txt
background
surface
text
border
accent
status
shadow
dark mode
```

说明哪些颜色要保留、合并、替换。

### Step 3：先更新 CSS Variables

只改 token，不先逐页手写：

```txt
theme.css
global.css
可能的 component variables
```

### Step 4：组件映射

按第 10 节将 token 应用到组件。

### Step 5：页面级主题

为页面设置 `data-section` 或等价机制。

### Step 6：截图验收

输出至少以下截图：

```txt
Home light
Home dark
Projects light
Notes light
Archive light
Lab light
About light
390px mobile light
390px mobile dark
```

### Step 7：构建与检查

必须通过：

```bash
npm run build
```

并检查：

```txt
浏览器控制台 0 error
浏览器控制台 0 warning
移动端无横向滚动
暗色主题刷新保持
```

---

## 14. 验收标准

Phase 10 配色方案通过标准：

1. 页面背景不再是死灰黄；
2. Hero / Card / StatusBar 与背景有肉眼可见的层级；
3. 大标题使用黛蓝 / 墨蓝方向，不是纯黑；
4. 首页第一屏至少出现 2-3 个清晰但小面积的彩色焦点；
5. 朱红、亚丁绿、琥珀、藕荷紫各有明确职责；
6. 紫色不再作为全站边框主色；
7. Projects、Notes、Archive、Lab、About 之间有轻微栏目识别；
8. Notes 页面仍保持阅读优先；
9. 暗色模式不霓虹、不纯黑、不廉价紫边；
10. 不改变路由、内容模型、页面结构和组件功能。

---

## 15. 给 Agent 的可复制执行指令

```md
请执行 Phase 10 全站配色与视觉层级重构。

注意：本次不是重新设计页面，不得改路由、不得改 Content Collections schema、不得新增依赖、不得新增复杂视觉资产。必须保留现有页面结构、组件结构和信息架构。

请先读取以下文档：
- docs/00_项目开发计划书.md
- docs/01_规范总览指南.md
- docs/standards/03_视觉风格规范.md
- docs/standards/06_组件设计规范.md
- docs/standards/09_验收与测试规范.md
- docs/phases/18_Phase10_视觉系统再校准计划.md
- docs/phases/19_Phase10_全站配色与视觉层级方案.md

执行目标：
1. 以 CSS Variables 为核心重建全站浅色 / 暗色配色 token。
2. 使用“梨花白 / 月白 / 白雪藤”作为纸白背景系统。
3. 使用“黛蓝 / 燕颔蓝”作为标题和文字主色。
4. 使用“亚丁绿 / 青絇繶纯 / 蓝翠竹”作为品牌和状态主识别。
5. 使用“朱红 / 蜻蜓红”作为 active、箭头、链接和标题旁小像素点。
6. 使用琥珀方向作为 save point、index ready、locked、archive 时间节点。
7. 使用藕荷 / 绛紫方向作为 Lab 和 Mode Quiet 的少量次级色。
8. 不得将紫色作为全站默认边框。
9. 增强 Hero、StatusBar、Card 与背景之间的表面层级。
10. 增加 soft shadow 和少量 hover pixel shadow，但不得让页面变成游戏按钮风。

验收输出：
- 颜色替换说明；
- token 修改说明；
- 组件映射说明；
- Home / Projects / Notes / Archive / Lab / About 浅色截图；
- Home 暗色截图；
- 390px 移动端截图；
- npm run build 结果；
- 控制台检查结果。
```

---

## 16. 后续沉淀

如果本方案验收通过，应在 Phase 10 结束后：

1. 将稳定 token 提炼进 `docs/standards/03_视觉风格规范.md`；
2. 将组件颜色规则提炼进 `docs/standards/06_组件设计规范.md`；
3. 将本文件保留在 `docs/phases/` 作为 Phase 10 执行记录；
4. 不要把阶段性讨论全文塞进长期规范。
