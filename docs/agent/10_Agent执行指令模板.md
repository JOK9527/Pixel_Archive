# 10_Agent执行指令模板

版本：v1.0  
项目：Pixel Archive  
位置：`docs/agent/10_Agent执行指令模板.md`  
用途：提供可直接复制给 Claude Code / Codex / 其他开发 Agent 的任务指令模板，用于初始化项目、开发页面、实现组件、修复问题、执行验收和生成提交说明。  

---

## 1. 本文档的作用

本文档负责提供：

```txt
1. 第一阶段完整开发指令
2. 分阶段开发指令
3. 新增页面指令
4. 新增组件指令
5. 新增内容系统指令
6. 视觉打磨指令
7. 修 bug 指令
8. 验收指令
9. README / WORKLOG 更新指令
10. Git 提交说明模板
```

本文档不重复展开完整规范。  
Agent 执行任务前，应根据模板要求读取对应规范文件。

---

## 2. 使用原则

使用本文件时，建议：

```txt
1. 每次只复制一个任务模板
2. 不要一次给 Agent 过多目标
3. 明确当前阶段
4. 明确必须读取的规范
5. 明确禁止事项
6. 明确完成后输出格式
7. 明确是否允许新增依赖
8. 明确是否允许修改目录结构
```

如果任务复杂，应拆成多轮执行。

---

## 3. 通用前置指令

所有 Agent 任务都可以加上以下前置要求：

```txt
你正在开发 Pixel Archive 个人网站。

开发前必须阅读并遵守以下文档：

1. docs/00_项目开发计划书.md
2. docs/01_规范总览指南.md

并根据当前任务类型阅读对应专项规范。

通用要求：
- 使用 Astro + TypeScript + MDX + Astro Content Collections
- 使用原生 CSS + CSS Variables
- 不使用 Tailwind
- 不使用 shadcn/ui
- 不使用完整 UI 组件库
- 不使用 CMS / 数据库 / 后端服务
- 不擅自新增依赖
- 不擅自改变项目名、首页定位、导航结构、内容分类和技术栈
- 开发完成后必须执行 npm run build
- 开发完成后必须更新 README 和 WORKLOG.md
- 输出修改文件列表、构建结果、已知问题和下一步建议
```

---

## 4. 第一阶段完整开发指令

适用场景：

```txt
从空项目开始搭建 Pixel Archive 第一阶段
```

可复制指令：

```txt
请开发 Pixel Archive 个人网站第一阶段。

开发前必须阅读并遵守：

1. docs/00_项目开发计划书.md
2. docs/01_规范总览指南.md
3. docs/standards/02_技术与开发执行规范.md
4. docs/standards/03_视觉风格规范.md
5. docs/standards/04_内容与文件管理规范.md
6. docs/standards/05_模块化架构规范.md
7. docs/standards/06_组件设计规范.md
8. docs/standards/09_验收与测试规范.md
9. docs/agent/11_Agent工作流规范.md

本阶段目标：
完成 Astro 项目初始化、TypeScript / MDX 配置、基础目录、CSS Variables 主题系统、BaseLayout、Header、Footer、主题切换、首页 Archive Terminal 初版、页面空壳、Content Collections schema 和少量规范占位内容。

技术限制：
- 使用 Astro + TypeScript + MDX + Astro Content Collections
- 使用原生 CSS + CSS Variables
- 不使用 Tailwind
- 不使用 shadcn/ui
- 不使用 UI 组件库
- 不使用 CMS / 数据库 / 后端
- 不直接引入 NES.css / WebTUI / Pico CSS 等第三方 UI 框架，只参考其视觉语言
- 第一阶段不要主动新增复杂依赖

页面范围：
- Home
- Projects
- Notes
- Archive
- Lab
- About
- 404

首页要求：
- 首页显示 Pixel Archive
- 首页不是个人简介页
- 不出现真实姓名作为主视觉
- 实现 ArchiveTerminal / SaveSlots / StatusBar
- 文案短，像档案终端 UI 提示
- 可使用 CSS / SVG / HTML 占位，不依赖复杂图片

架构要求：
- 遵守模块依赖方向
- pages 负责组织数据
- business components 负责业务展示
- ui components 保持无业务含义
- Content Collections schema 是数据接口，不得用 any 绕过
- Header 导航从统一 data/navigation.ts 读取

内容要求：
- 建立 projects / notes / archive / lab 四个 collection
- 建立规范占位内容
- 文件名、slug、frontmatter、图片路径遵守内容管理规范
- 不使用 test/demo/aaa 等随意命名

视觉要求：
- 极简做骨架，像素做识别，复古做氛围
- 默认浅色主题，支持暗色主题
- Notes / About / Project Detail 必须克制，保证可读性
- 首页和 404 可以更有像素风

开发完成后：
1. 更新 README.md
2. 更新 WORKLOG.md
3. 执行 npm run build
4. 输出修改文件列表
5. 输出新增依赖说明
6. 输出运行 / 构建结果
7. 输出已知问题
8. 输出下一步建议
9. 给出 git commit 指令，但不要自动 push
```

---

## 5. Phase 0：项目初始化指令

适用场景：

```txt
只初始化 Astro 项目和基础配置
```

可复制指令：

```txt
请完成 Pixel Archive 的 Phase 0：项目初始化。

必须阅读：
- docs/00_项目开发计划书.md
- docs/01_规范总览指南.md
- docs/standards/02_技术与开发执行规范.md
- docs/standards/09_验收与测试规范.md

任务目标：
1. 初始化 Astro 项目
2. 启用 TypeScript
3. 配置 MDX
4. 建立基础目录
5. 确保 npm run dev 可启动
6. 确保 npm run build 可通过

限制：
- 不使用 Tailwind
- 不使用 UI 组件库
- 不引入 CMS / 数据库 / 后端
- 不做复杂页面
- 不做视觉打磨

完成后：
- 更新 README.md
- 新建或更新 WORKLOG.md
- 输出修改文件列表
- 输出 npm run build 结果
- 给出下一阶段建议
```

---

## 6. Phase 1：基础架构与视觉系统指令

适用场景：

```txt
建立 layout、theme.css、global.css、Header、Footer、ThemeToggle
```

可复制指令：

```txt
请完成 Pixel Archive 的 Phase 1：基础架构与视觉系统。

必须阅读：
- docs/00_项目开发计划书.md
- docs/01_规范总览指南.md
- docs/standards/02_技术与开发执行规范.md
- docs/standards/03_视觉风格规范.md
- docs/standards/05_模块化架构规范.md
- docs/standards/06_组件设计规范.md
- docs/standards/09_验收与测试规范.md

任务目标：
1. 建立 src/styles/theme.css
2. 建立 src/styles/global.css
3. 建立 src/styles/markdown.css
4. 建立 BaseLayout.astro
5. 建立 Header.astro
6. 建立 Footer.astro
7. 建立 ThemeToggle.astro
8. 建立 src/data/site.ts
9. 建立 src/data/navigation.ts
10. 实现浅色 / 暗色主题基础

限制：
- 不引入第三方主题库
- 不使用 Tailwind
- 不在组件中大量硬编码颜色
- Header 导航必须从 data/navigation.ts 读取
- ThemeToggle 不引入复杂状态管理

完成后：
- 执行 npm run build
- 更新 README.md 和 WORKLOG.md
- 输出修改文件列表、构建结果、已知问题和下一步建议
```

---

## 7. Phase 2：首页初版指令

适用场景：

```txt
实现 Pixel Archive 首页 ArchiveTerminal + SaveSlots + StatusBar
```

可复制指令：

```txt
请完成 Pixel Archive 的 Phase 2：首页初版。

必须阅读：
- docs/00_项目开发计划书.md
- docs/01_规范总览指南.md
- docs/standards/03_视觉风格规范.md
- docs/standards/05_模块化架构规范.md
- docs/standards/06_组件设计规范.md
- docs/standards/07_文案与内容风格规范.md
- docs/standards/09_验收与测试规范.md

任务目标：
1. 实现 components/home/ArchiveTerminal.astro
2. 实现 components/home/HomeMenu.astro
3. 实现 components/home/SaveSlots.astro
4. 实现 components/home/SaveSlot.astro
5. 实现 components/home/StatusBar.astro
6. 在 pages/index.astro 中组装首页
7. 首页显示 Pixel Archive
8. 首页具有档案终端 / save slot 气质

首页限制：
- 不写传统个人简介
- 不出现真实姓名作为主视觉
- 不依赖复杂大图
- 不做像素房间或地图式首页
- 不做复杂动画
- 不读取全部 projects collection，除非由页面层组织后传入组件

视觉要求：
- 极简做骨架，像素做识别，复古做氛围
- 可加入光标闪烁、hover 轻微发光
- 不影响移动端基础布局

完成后：
- 执行 npm run build
- 更新 README.md 和 WORKLOG.md
- 输出修改文件列表、构建结果、已知问题和下一步建议
```

---

## 8. Phase 3：页面空壳与路由指令

适用场景：

```txt
创建 Projects / Notes / Archive / Lab / About / 404 页面
```

可复制指令：

```txt
请完成 Pixel Archive 的 Phase 3：页面空壳与路由。

必须阅读：
- docs/00_项目开发计划书.md
- docs/01_规范总览指南.md
- docs/standards/02_技术与开发执行规范.md
- docs/standards/03_视觉风格规范.md
- docs/standards/05_模块化架构规范.md
- docs/standards/07_文案与内容风格规范.md
- docs/standards/09_验收与测试规范.md

任务目标：
创建并接入以下页面：
1. /projects/
2. /notes/
3. /archive/
4. /lab/
5. /about/
6. /404

要求：
- 页面均使用 BaseLayout
- 页面标题和简短描述符合文案规范
- 404 使用 lost archive / save file not found 概念
- 页面风格统一
- 不实现复杂功能
- 不新增搜索、评论、CMS、数据库、后端

完成后：
- 执行 npm run build
- 更新 README.md 和 WORKLOG.md
- 输出修改文件列表、构建结果、已知问题和下一步建议
```

---

## 9. Phase 4：Content Collections 与占位内容指令

适用场景：

```txt
建立内容 schema 和规范占位内容
```

可复制指令：

```txt
请完成 Pixel Archive 的 Phase 4：Content Collections 与占位内容。

必须阅读：
- docs/00_项目开发计划书.md
- docs/01_规范总览指南.md
- docs/standards/04_内容与文件管理规范.md
- docs/standards/05_模块化架构规范.md
- docs/standards/07_文案与内容风格规范.md
- docs/standards/09_验收与测试规范.md

任务目标：
1. 建立 src/content/config.ts
2. 定义 projects collection
3. 定义 notes collection
4. 定义 archive collection
5. 定义 lab collection
6. 使用枚举约束 status / type
7. 添加少量规范占位内容

占位内容建议：
- src/content/projects/pixel-archive.mdx
- src/content/projects/scholar-lens-ai.mdx
- src/content/projects/servo-test-platform.mdx
- src/content/notes/2026-06-10-first-note.mdx
- src/content/archive/2026-06-started-pixel-archive.md
- src/content/lab/pixel-ui-placeholder.mdx

限制：
- 不使用 any 绕过 schema
- 不使用 test/demo/aaa 命名
- 不编造已完成成果
- 占位内容必须明确是占位或阶段性内容
- 图片路径使用 /images/... 形式，缺图时用占位策略

完成后：
- 执行 npm run build
- 更新 README.md 和 WORKLOG.md
- 输出修改文件列表、构建结果、已知问题和下一步建议
```

---

## 10. 新增页面指令模板

适用场景：

```txt
新增或重构某个页面
```

可复制指令：

```txt
请为 Pixel Archive 新增 / 重构以下页面：

页面名称：
页面路径：
页面目标：

开发前必须阅读：
- docs/01_规范总览指南.md
- docs/standards/03_视觉风格规范.md
- docs/standards/05_模块化架构规范.md
- docs/standards/06_组件设计规范.md
- docs/standards/07_文案与内容风格规范.md
- docs/standards/09_验收与测试规范.md

要求：
1. 使用 BaseLayout 或对应 Layout
2. 页面只负责路由和组件组合
3. 复杂结构拆成业务组件
4. 文案符合 Pixel Archive 风格
5. 视觉符合对应页面风格权重
6. 不新增无关功能
7. 不引入未说明依赖

完成后：
- 执行 npm run build
- 更新 README.md / WORKLOG.md
- 输出修改文件列表、构建结果、已知问题和下一步建议
```

---

## 11. 新增组件指令模板

适用场景：

```txt
新增 UI 组件或业务组件
```

可复制指令：

```txt
请为 Pixel Archive 新增以下组件：

组件名称：
组件路径：
组件类型：UI 组件 / 业务组件 / Layout 组件
组件用途：
需要接收的 props：

开发前必须阅读：
- docs/01_规范总览指南.md
- docs/standards/03_视觉风格规范.md
- docs/standards/05_模块化架构规范.md
- docs/standards/06_组件设计规范.md
- docs/standards/09_验收与测试规范.md

要求：
1. 组件命名使用 PascalCase
2. 组件放在正确目录
3. props 简洁明确
4. UI 组件不得包含业务含义
5. 业务组件不得直接读取 Content Collections
6. 样式使用 CSS Variables
7. 不大量硬编码颜色
8. 不新增依赖，除非先说明理由
9. 如可复用，说明复用场景

完成后：
- 在合适页面中接入组件或提供使用示例
- 执行 npm run build
- 更新 README.md / WORKLOG.md
- 输出修改文件列表、构建结果、已知问题和下一步建议
```

---

## 12. 新增内容指令模板

适用场景：

```txt
新增 Project / Note / Archive / Lab 内容
```

可复制指令：

```txt
请为 Pixel Archive 新增以下内容：

内容类型：Project / Note / Archive / Lab
标题：
slug：
分类：
标签：
状态 / 类型：
正文要点：

开发前必须阅读：
- docs/01_规范总览指南.md
- docs/standards/04_内容与文件管理规范.md
- docs/standards/07_文案与内容风格规范.md
- docs/standards/09_验收与测试规范.md

要求：
1. 文件放在正确 collection 目录
2. 文件名符合规范
3. frontmatter 字段完整
4. status / type 使用合法枚举
5. tags 使用小写英文
6. 图片路径使用 /images/... 格式
7. 不使用 Obsidian 双链
8. 不使用本地绝对路径
9. 不编造项目成果
10. 文案短、准、克制

完成后：
- 确认页面能读取新内容
- 执行 npm run build
- 更新 WORKLOG.md
- 输出新增文件列表、构建结果和已知问题
```

---

## 13. 视觉打磨指令模板

适用场景：

```txt
调整配色、间距、卡片、首页氛围、暗色模式等
```

可复制指令：

```txt
请对 Pixel Archive 进行视觉打磨。

打磨范围：
目标页面 / 组件：
当前问题：
期望效果：

开发前必须阅读：
- docs/01_规范总览指南.md
- docs/standards/03_视觉风格规范.md
- docs/standards/06_组件设计规范.md
- docs/standards/09_验收与测试规范.md
- docs/references/12_视觉参考资源清单.md

要求：
1. 保持“极简做骨架，像素做识别，复古做氛围”
2. 不改变技术栈
3. 不引入 Tailwind / UI 框架
4. 不直接套用第三方模板
5. 色彩使用 CSS Variables
6. 不影响 Notes 正文可读性
7. 同时检查浅色和暗色主题
8. 移动端基础不崩

完成后：
- 执行 npm run build
- 说明调整了哪些视觉点
- 输出修改文件列表
- 输出构建结果、已知问题和下一步建议
```

---

## 14. 修 bug 指令模板

适用场景：

```txt
修复构建错误、页面错误、样式错误、内容读取错误
```

可复制指令：

```txt
请修复 Pixel Archive 中的以下问题：

问题描述：
复现方式：
错误日志 / 截图：
期望结果：

开发前必须阅读：
- docs/01_规范总览指南.md
- docs/standards/02_技术与开发执行规范.md
- docs/standards/09_验收与测试规范.md

根据 bug 类型补充阅读：
- 视觉 bug：docs/standards/03_视觉风格规范.md
- 内容 bug：docs/standards/04_内容与文件管理规范.md
- 模块耦合 bug：docs/standards/05_模块化架构规范.md
- 组件 bug：docs/standards/06_组件设计规范.md
- 文案 bug：docs/standards/07_文案与内容风格规范.md
- 部署 bug：docs/standards/08_部署与运维规范.md

要求：
1. 先定位原因
2. 再做最小范围修复
3. 不顺手重构无关内容
4. 不新增无关依赖
5. 修复后执行 npm run build
6. 如改动影响规范，说明是否需要更新 docs

完成后输出：
- 问题原因
- 修复方式
- 修改文件列表
- 验证结果
- 剩余风险
- 下一步建议
```

---

## 15. 验收指令模板

适用场景：

```txt
让 Agent 只检查项目，不大改代码
```

可复制指令：

```txt
请对 Pixel Archive 当前状态进行验收检查。

必须阅读：
- docs/01_规范总览指南.md
- docs/standards/09_验收与测试规范.md

根据检查范围补充阅读：
- 技术执行：docs/standards/02_技术与开发执行规范.md
- 视觉：docs/standards/03_视觉风格规范.md
- 内容：docs/standards/04_内容与文件管理规范.md
- 模块：docs/standards/05_模块化架构规范.md
- 组件：docs/standards/06_组件设计规范.md
- 文案：docs/standards/07_文案与内容风格规范.md
- 部署：docs/standards/08_部署与运维规范.md

验收范围：
- 构建
- 页面
- 内容
- 视觉
- 模块
- 组件
- 移动端基础
- 暗色模式基础
- README / WORKLOG

要求：
1. 执行 npm run build
2. 不进行大范围修改
3. 如发现问题，按严重程度分类
4. 输出可执行修复建议
5. 不要声称未验证的内容已通过

输出格式：
- 通过项
- 问题项
- 严重问题
- 建议修复顺序
- 构建结果
- 是否建议 commit
```

---

## 16. README / WORKLOG 更新指令模板

适用场景：

```txt
只更新项目文档记录
```

可复制指令：

```txt
请更新 Pixel Archive 的 README.md 和 WORKLOG.md。

必须阅读：
- docs/01_规范总览指南.md
- docs/standards/02_技术与开发执行规范.md
- docs/standards/09_验收与测试规范.md

更新要求：
README.md：
- 项目简介
- 技术栈
- 本地运行方式
- 构建方式
- 目录结构简述
- 当前完成内容
- 下一步计划

WORKLOG.md：
- 日期
- 阶段
- 修改文件
- 完成内容
- 遇到的问题
- 构建结果
- 下一步建议

限制：
- README 不写过长开发细节
- WORKLOG 记录细节
- 不重复整份规范
- 不编造未完成内容

完成后输出：
- 修改文件列表
- 更新摘要
- 已知问题
```

---

## 17. 部署准备指令模板

适用场景：

```txt
准备 GitHub / Cloudflare Pages 部署
```

可复制指令：

```txt
请为 Pixel Archive 做部署前准备检查。

必须阅读：
- docs/00_项目开发计划书.md
- docs/01_规范总览指南.md
- docs/standards/02_技术与开发执行规范.md
- docs/standards/08_部署与运维规范.md
- docs/standards/09_验收与测试规范.md

任务目标：
1. 检查 package.json scripts
2. 检查 .gitignore
3. 检查 README 中本地运行和构建说明
4. 执行 npm run build
5. 确认 dist 不提交
6. 确认 node_modules 不提交
7. 确认 .env 不提交
8. 输出 Cloudflare Pages 配置建议

Cloudflare Pages 建议配置：
- Framework preset: Astro
- Build command: npm run build
- Output directory: dist

限制：
- 不引入复杂 CI/CD
- 不引入 Docker
- 不引入后端
- 不引入 Cloudflare Workers

完成后输出：
- 检查结果
- 修改文件列表
- 构建结果
- Cloudflare Pages 配置建议
- 已知问题
- Git 提交建议
```

---

## 18. Git 提交建议模板

适用场景：

```txt
阶段完成后让 Agent 给出提交命令
```

可复制指令：

```txt
请根据当前 Pixel Archive 修改状态，给出 Git 提交建议。

要求：
1. 先查看 git status
2. 总结本轮主要修改
3. 判断是否适合 commit
4. 给出建议 commit message
5. 给出 git 命令
6. 不要自动 push，除非用户明确要求

输出格式：
- 当前修改摘要
- 是否建议 commit
- 建议 commit message
- 建议命令

命令格式：

git status
git add .
git commit -m "提交信息"
git push origin main
```

---

## 19. 规范重构指令模板

适用场景：

```txt
整理 docs 规范，避免重复和冲突
```

可复制指令：

```txt
请对 Pixel Archive docs 规范体系进行整理或重构。

必须阅读：
- docs/01_规范总览指南.md

任务目标：
需要整理的文档：
整理目标：
是否允许改名：
是否允许拆分：
是否允许删除重复内容：

要求：
1. 每条规则只在主定义文档中详细定义
2. 其他文档只保留引用或摘要
3. 不删除用户明确保留的内容
4. 不改变项目核心决策
5. 整理后更新 01_规范总览指南.md 中的对应关系
6. 输出改动清单和迁移说明

完成后：
- 输出修改文件列表
- 输出规则迁移说明
- 输出是否存在冲突
- 输出下一步建议
```

---

## 20. Agent 输出格式模板

所有开发任务完成后，Agent 应按以下格式输出：

```txt
## 本轮完成内容

- ...

## 修改文件

- ...

## 新增 / 删除依赖

- 无
或：
- package-name：用途说明

## 运行与构建结果

- npm run build：通过 / 失败
- 其他命令：...

## README / WORKLOG

- README.md：已更新 / 未涉及
- WORKLOG.md：已更新 / 未涉及

## 已知问题

- ...

## 下一步建议

- ...

## Git 提交建议

git status
git add .
git commit -m "..."
git push origin main
```

注意：

```txt
如果构建失败，不得写“已完成”。
如果没有执行构建，必须明确说明“未执行”。
如果新增依赖，必须说明原因。
```

---

## 21. 常用 commit message

可选：

```txt
初始化 Pixel Archive 项目骨架
实现基础视觉系统与布局
实现首页档案终端初版
建立页面路由与空壳
实现 Content Collections 与占位内容
实现项目列表与详情页
实现 Notes 列表与文章页
完善 Archive 与 Lab 页面
完善主题切换与暗色模式
补充部署配置与 README
修复内容 schema 构建错误
整理 Pixel Archive 规范文档体系
```

---

## 22. 不建议给 Agent 的模糊指令

避免：

```txt
帮我把网站做好
随便美化一下
把所有功能都做了
按你觉得好的来
顺便加个搜索
顺便接个评论
做得高级一点
像素风拉满
博客功能都加上
```

这些容易导致 Agent 超范围开发。

---

## 23. 推荐给 Agent 的清晰指令格式

推荐：

```txt
请完成 [阶段 / 任务名称]。

必须阅读：
- [相关规范]

目标：
1. ...
2. ...
3. ...

限制：
- ...
- ...

完成后：
1. 执行 npm run build
2. 更新 README / WORKLOG
3. 输出修改文件列表
4. 输出构建结果
5. 输出已知问题
6. 给出下一步建议
```

---

## 24. 最终原则

> Agent 指令应当短、明确、可验收。  
> 不要一次塞入全部规范正文，而是让 Agent 先读总览，再按任务读取对应专项规范。  
> 每个任务都要有边界、有禁止事项、有完成标准、有汇报格式。
