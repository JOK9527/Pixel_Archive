# 11_Agent工作流规范

版本：v1.0  
项目：Pixel Archive  
位置：`docs/agent/11_Agent工作流规范.md`  
用途：规范 Claude Code / Codex / 其他开发 Agent 在 Pixel Archive 项目中的工作流程，包括任务前阅读顺序、任务分类、开发前检查、开发中约束、冲突处理、开发后汇报和禁止擅自决策事项。  

---

## 1. 本文档的作用

本文档负责回答：

```txt
1. Agent 开发前应该先读哪些文档？
2. Agent 如何判断当前任务属于哪一类？
3. 不同任务应该读取哪些专项规范？
4. Agent 开发前要做哪些检查？
5. Agent 开发过程中有哪些禁止事项？
6. 遇到规范冲突或信息不完整时如何处理？
7. Agent 完成任务后应该如何汇报？
8. 哪些事情不能擅自决定？
```

本文档不提供完整开发指令模板。  
可复制指令模板见：

```txt
docs/agent/10_Agent执行指令模板.md
```

---

## 2. Agent 工作总原则

Agent 在 Pixel Archive 项目中应遵循：

```txt
先读规范
再判断任务
再小步开发
再构建验证
再更新记录
再汇报结果
```

核心原则：

> Agent 不应凭自己的默认习惯改造项目，而应按 Pixel Archive 已确定的文档体系执行。

---

## 3. Agent 每轮任务的标准流程

每轮任务按以下流程执行：

```txt
1. 识别任务类型
2. 阅读总入口文档
3. 阅读相关专项规范
4. 判断是否超出当前阶段
5. 判断是否会影响核心决策
6. 执行最小必要修改
7. 运行构建或说明未运行原因
8. 更新 README / WORKLOG
9. 输出修改清单和验证结果
10. 给出下一步建议和 Git 提交建议
```

不要跳过规范阅读直接写代码。

---

## 4. 开发前必须阅读的基础文档

每轮任务至少阅读：

```txt
docs/00_项目开发计划书.md
docs/01_规范总览指南.md
```

然后根据任务类型补充阅读对应专项规范。

如果任务来自 `10_Agent执行指令模板.md`，也必须阅读模板中列出的规范文件。

---

## 5. 任务分类方式

Agent 接到任务后，先判断属于以下哪一类：

```txt
项目初始化
基础架构
首页开发
页面开发
内容系统
新增内容
新增组件
视觉打磨
文案调整
模块重构
Bug 修复
部署准备
验收检查
规范整理
Git 提交建议
```

任务类型决定需要读取哪些规范。

---

## 6. 不同任务的阅读清单

## 6.1 项目初始化

必须阅读：

```txt
docs/00_项目开发计划书.md
docs/01_规范总览指南.md
docs/standards/02_技术与开发执行规范.md
docs/standards/09_验收与测试规范.md
```

---

## 6.2 基础架构

必须阅读：

```txt
docs/00_项目开发计划书.md
docs/01_规范总览指南.md
docs/standards/02_技术与开发执行规范.md
docs/standards/05_模块化架构规范.md
docs/standards/09_验收与测试规范.md
```

如涉及样式基础，还要阅读：

```txt
docs/standards/03_视觉风格规范.md
```

---

## 6.3 首页开发

必须阅读：

```txt
docs/00_项目开发计划书.md
docs/01_规范总览指南.md
docs/standards/03_视觉风格规范.md
docs/standards/05_模块化架构规范.md
docs/standards/06_组件设计规范.md
docs/standards/07_文案与内容风格规范.md
docs/standards/09_验收与测试规范.md
```

---

## 6.4 页面开发

必须阅读：

```txt
docs/01_规范总览指南.md
docs/standards/03_视觉风格规范.md
docs/standards/05_模块化架构规范.md
docs/standards/06_组件设计规范.md
docs/standards/07_文案与内容风格规范.md
docs/standards/09_验收与测试规范.md
```

如果页面涉及内容读取，还要阅读：

```txt
docs/standards/04_内容与文件管理规范.md
```

---

## 6.5 内容系统

必须阅读：

```txt
docs/01_规范总览指南.md
docs/standards/04_内容与文件管理规范.md
docs/standards/05_模块化架构规范.md
docs/standards/09_验收与测试规范.md
```

如果涉及文案，还要阅读：

```txt
docs/standards/07_文案与内容风格规范.md
```

---

## 6.6 新增内容

必须阅读：

```txt
docs/01_规范总览指南.md
docs/standards/04_内容与文件管理规范.md
docs/standards/07_文案与内容风格规范.md
docs/standards/09_验收与测试规范.md
```

---

## 6.7 新增组件

必须阅读：

```txt
docs/01_规范总览指南.md
docs/standards/03_视觉风格规范.md
docs/standards/05_模块化架构规范.md
docs/standards/06_组件设计规范.md
docs/standards/09_验收与测试规范.md
```

---

## 6.8 视觉打磨

必须阅读：

```txt
docs/01_规范总览指南.md
docs/standards/03_视觉风格规范.md
docs/standards/06_组件设计规范.md
docs/standards/09_验收与测试规范.md
```

参考阅读：

```txt
docs/references/12_视觉参考资源清单.md
```

---

## 6.9 文案调整

必须阅读：

```txt
docs/01_规范总览指南.md
docs/standards/07_文案与内容风格规范.md
docs/standards/09_验收与测试规范.md
```

如果文案涉及内容 frontmatter，也要阅读：

```txt
docs/standards/04_内容与文件管理规范.md
```

---

## 6.10 模块重构

必须阅读：

```txt
docs/00_项目开发计划书.md
docs/01_规范总览指南.md
docs/standards/02_技术与开发执行规范.md
docs/standards/05_模块化架构规范.md
docs/standards/06_组件设计规范.md
docs/standards/09_验收与测试规范.md
```

如果涉及内容读取，还要阅读：

```txt
docs/standards/04_内容与文件管理规范.md
```

---

## 6.11 Bug 修复

必须阅读：

```txt
docs/01_规范总览指南.md
docs/standards/02_技术与开发执行规范.md
docs/standards/09_验收与测试规范.md
```

根据 bug 类型补充：

```txt
视觉 bug → docs/standards/03_视觉风格规范.md
内容 bug → docs/standards/04_内容与文件管理规范.md
模块 bug → docs/standards/05_模块化架构规范.md
组件 bug → docs/standards/06_组件设计规范.md
文案 bug → docs/standards/07_文案与内容风格规范.md
部署 bug → docs/standards/08_部署与运维规范.md
```

---

## 6.12 部署准备

必须阅读：

```txt
docs/00_项目开发计划书.md
docs/01_规范总览指南.md
docs/standards/02_技术与开发执行规范.md
docs/standards/08_部署与运维规范.md
docs/standards/09_验收与测试规范.md
```

---

## 6.13 验收检查

必须阅读：

```txt
docs/01_规范总览指南.md
docs/standards/09_验收与测试规范.md
```

根据验收范围补充阅读对应专项规范。

---

## 6.14 规范整理

必须阅读：

```txt
docs/01_规范总览指南.md
```

如果整理某个专项规范，还必须阅读对应规范文件。

---

## 7. 开发前检查清单

Agent 开发前必须确认：

```txt
1. 当前任务属于哪一类？
2. 当前任务是否属于当前阶段？
3. 需要读取哪些规范？
4. 是否会新增依赖？
5. 是否会改变技术栈？
6. 是否会改变目录结构？
7. 是否会改变页面路由？
8. 是否会改变 Content Collections schema？
9. 是否会改变组件 props？
10. 是否会改变视觉主方向？
11. 是否会改变部署方式？
12. 是否需要先询问用户？
```

如果涉及重大变化，应先暂停并说明影响。

---

## 8. 当前阶段边界检查

第一阶段只允许做：

```txt
Astro 项目初始化
TypeScript / MDX 配置
基础目录结构
CSS Variables 主题系统
BaseLayout
Header / Footer / ThemeToggle
首页 Archive Terminal 初版
页面空壳
Content Collections schema
少量规范占位内容
README / WORKLOG
npm run build 通过
```

第一阶段不应做：

```txt
搜索
评论
CMS
数据库
后端
复杂像素头像
复杂像素房间
地图式首页
GitHub API 自动拉取
多语言
正式 SEO 深度优化
Open Graph 图片系统
复杂动画
```

Agent 不得因为“顺手”主动实现后续功能。

---

## 9. 开发中约束

Agent 开发中必须遵守：

```txt
1. 保持小步修改
2. 不做无关重构
3. 不引入未说明依赖
4. 不擅自改变技术栈
5. 不擅自改变视觉方向
6. 不擅自改变内容模型
7. 不擅自改变路由
8. 不擅自改变组件 props
9. 不擅自删除规范文档
10. 不擅自把后续功能提前实现
```

---

## 10. 依赖新增规则

如果 Agent 认为必须新增依赖，必须先说明：

```txt
依赖名称
解决的问题
为什么不能原生实现
是否属于当前阶段
是否影响构建体积
是否影响长期维护
替代方案
```

未经用户确认，不应新增以下依赖：

```txt
Tailwind
shadcn/ui
完整 UI 组件库
动画库
图标库
CMS
数据库
后端服务
搜索库
评论库
```

---

## 11. 文件修改范围规则

Agent 应只修改与当前任务相关的文件。

不应：

```txt
顺手重写无关页面
顺手改全局视觉
顺手调整文案体系
顺手新增功能
顺手清理未要求的目录
顺手删除已有规范
```

如果发现无关问题，应在“下一步建议”中说明，而不是直接大改。

---

## 12. 规范冲突处理规则

当规范之间出现冲突时，按以下顺序判断：

```txt
1. 用户当前明确指令
2. docs/01_规范总览指南.md
3. docs/00_项目开发计划书.md
4. 对应专项规范
5. Agent 指令模板
6. references 参考资料
7. Agent 自己判断
```

专项规则归属：

```txt
技术栈 / 依赖 → 02_技术与开发执行规范.md
视觉 → 03_视觉风格规范.md
内容命名 → 04_内容与文件管理规范.md
模块依赖 → 05_模块化架构规范.md
组件 props → 06_组件设计规范.md
文案 → 07_文案与内容风格规范.md
部署 → 08_部署与运维规范.md
验收 → 09_验收与测试规范.md
```

如果仍无法判断，Agent 应先说明冲突并询问用户。

---

## 13. 信息不足处理规则

如果信息不足，Agent 应优先判断是否可以安全采用默认方案。

可以安全默认的情况：

```txt
页面占位文案
简单组件命名
轻量样式细节
README 小更新
WORKLOG 小更新
不影响架构的小修复
```

必须询问或说明影响的情况：

```txt
改变技术栈
新增大型依赖
改变页面结构
改变内容模型
改变路由
改变部署方式
改变视觉主方向
删除已有文件
重构大范围目录
```

如果用户明确要求“先做，不要问”，Agent 应在不违反核心规范的前提下给出最稳妥方案。

---

## 14. Bug 修复工作流

修 bug 时遵循：

```txt
1. 复现或理解问题
2. 判断 bug 类型
3. 阅读对应规范
4. 定位根因
5. 最小范围修复
6. 运行构建
7. 说明修复方式
8. 记录剩余风险
```

Agent 不应在修 bug 时顺手大改视觉、架构或内容。

输出必须包含：

```txt
问题原因
修复方式
修改文件
验证结果
剩余风险
```

---

## 15. 视觉任务工作流

视觉任务遵循：

```txt
1. 阅读视觉规范
2. 判断页面风格权重
3. 明确要调整的区域
4. 使用 CSS Variables
5. 同时检查浅色和暗色
6. 检查移动端基础布局
7. 不影响 Notes 正文阅读
```

Agent 不应：

```txt
把全站改成强像素风
引入高饱和颜色
直接套第三方模板
引入 Tailwind 或 UI 框架
把暗色模式做成黑绿终端
```

---

## 16. 内容任务工作流

内容任务遵循：

```txt
1. 阅读内容管理规范
2. 判断内容类型
3. 使用正确 collection
4. 使用规范文件名
5. 编写合法 frontmatter
6. 使用合法 status / type
7. 图片路径使用 /images/...
8. 文案遵守文案规范
9. 运行构建验证 schema
```

Agent 不应：

```txt
使用中文文件名
使用 Obsidian 双链
使用本地绝对图片路径
使用 test/demo/aaa
编造用户项目成果
```

---

## 17. 组件任务工作流

组件任务遵循：

```txt
1. 判断组件类型：UI / 业务 / Layout
2. 放入正确目录
3. 命名使用 PascalCase
4. props 简洁明确
5. UI 组件无业务含义
6. 业务组件不直接读取 Content Collections
7. 使用 CSS Variables
8. 接入页面或提供使用位置
9. 运行构建
```

Agent 不应：

```txt
创建无意义 common 组件
在 UI 组件中写死业务内容
让组件自己读取 collection
制造大量 variant
写死大量颜色
```

---

## 18. 模块重构工作流

模块重构必须谨慎。

执行前必须说明：

```txt
为什么需要重构
当前问题是什么
涉及哪些文件
是否影响路由
是否影响 content schema
是否影响组件 props
是否影响视觉
```

重构原则：

```txt
小步移动
保持构建通过
每次只解决一个结构问题
不要重构无关模块
更新引用路径
更新 WORKLOG
```

---

## 19. 部署任务工作流

部署任务遵循：

```txt
1. 阅读部署规范
2. 检查 package.json scripts
3. 检查 .gitignore
4. 运行 npm run build
5. 检查 dist 是否未提交
6. 检查 node_modules 是否未提交
7. 检查 .env 是否未提交
8. 输出 Cloudflare Pages 配置建议
```

Agent 不应：

```txt
引入复杂 CI/CD
引入 Docker
引入后端
引入 Cloudflare Workers
擅自处理域名
提交敏感信息
```

---

## 20. 验收任务工作流

验收任务遵循：

```txt
1. 阅读验收规范
2. 明确验收范围
3. 运行必要命令
4. 检查对应页面 / 内容 / 组件
5. 按通过项和问题项输出
6. 给出修复优先级
7. 判断是否建议 commit
```

不要在验收任务中大范围修改代码。  
如果发现问题，应先列出，再等待用户决定是否修复。

---

## 21. README / WORKLOG 规则

每轮开发后默认应更新：

```txt
README.md
WORKLOG.md
```

README 记录：

```txt
项目简介
技术栈
运行方式
目录结构
当前完成内容
下一步计划
```

WORKLOG 记录：

```txt
日期
阶段
修改文件
完成内容
遇到的问题
构建结果
下一步建议
```

README 不写过长开发细节。  
WORKLOG 记录详细过程。

---

## 22. 构建规则

Agent 完成开发后应执行：

```bash
npm run build
```

如果未执行，必须明确说明：

```txt
未执行 npm run build
原因：...
```

如果构建失败，必须说明：

```txt
失败命令
错误摘要
可能原因
已尝试修复
剩余问题
```

构建失败时不得说“已完成”。

---

## 23. Git 工作流

Agent 默认不自动 push。

阶段验收通过后可给出：

```bash
git status
git add .
git commit -m "提交信息"
git push origin main
```

规则：

```txt
commit 前应构建通过
commit message 应清楚
push 由用户手动执行
```

除非用户明确要求，否则 Agent 不应自动 push。

---

## 24. Agent 汇报格式

每轮完成后，Agent 应输出：

```txt
## 本轮完成内容

- ...

## 修改文件

- ...

## 新增 / 删除依赖

- 无
或：
- 依赖名：用途说明

## 运行与构建结果

- npm run build：通过 / 失败 / 未执行
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

---

## 25. 不合格汇报示例

以下汇报不合格：

```txt
已完成。
```

```txt
我已经全部做好了。
```

```txt
项目现在没问题。
```

```txt
构建应该没问题。
```

除非实际执行过检查，否则不要说“通过”。

---

## 26. 合格汇报示例

合格汇报应包含：

```txt
本轮完成了首页 ArchiveTerminal、SaveSlots 和 StatusBar。
修改文件包括 pages/index.astro、components/home/*、styles/theme.css。
未新增依赖。
已执行 npm run build，构建通过。
README 和 WORKLOG 已更新。
已知问题：移动端 SaveSlot 间距后续可继续打磨。
下一步建议：进入页面空壳与路由阶段。
建议 commit message：实现首页档案终端初版。
```

---

## 27. 禁止擅自决策事项

Agent 不得擅自：

```txt
更换 Astro
引入 Tailwind
引入 shadcn/ui
引入 CMS
引入数据库
引入后端
改网站名
改首页定位
改导航结构
删除 Notes / Archive / Lab
改变内容类型体系
改变 Project status 枚举
改变 Note type 枚举
绑定域名
配置真实 API Key
自动 push
```

---

## 28. 可直接处理事项

Agent 可以直接处理：

```txt
明显语法错误
构建报错
路径小错误
拼写错误
局部 CSS 小修
组件 props 小类型修正
README / WORKLOG 小更新
占位内容字段补全
不影响结构的文案微调
```

前提是：

```txt
不违反规范
不超出任务范围
构建可验证
```

---

## 29. Agent 使用 references 的规则

`docs/references/` 中内容只作为参考。

Agent 不应因为参考资料里有某技术或组件库，就主动引入。

例如：

```txt
12_视觉参考资源清单.md 提到 NES.css
不代表可以安装 NES.css
```

```txt
13_技术参考资源清单.md 提到 Pagefind
不代表第一阶段可以实现搜索
```

```txt
14_后续功能规划池.md 提到评论系统
不代表可以主动做评论
```

是否实现功能，以当前任务和项目阶段为准。

---

## 30. Agent 与用户确认规则

需要确认的情况：

```txt
是否引入新依赖
是否修改技术栈
是否修改内容模型
是否修改路由
是否修改导航
是否提前做后续功能
是否删除已有内容
是否重构大量文件
是否改变视觉主方向
```

不需要确认的情况：

```txt
修复明显构建错误
补充缺失 alt
修正错别字
补齐 README 小节
补齐 WORKLOG 记录
按规范移动明显放错的文件
```

---

## 31. 失败处理规则

如果 Agent 未能完成任务，应诚实说明：

```txt
已完成部分
未完成部分
失败原因
当前项目状态
建议下一步
是否构建通过
```

不要假装完成。

如果由于缺少信息无法继续，应说明缺少什么，并给出最小可继续方案。

---

## 32. 文档更新规则

如果开发中发现规范缺失或不合理，Agent 不应直接大改规范体系。

应先输出：

```txt
发现的问题
涉及文档
建议补充位置
建议修改内容摘要
是否影响当前开发
```

如果用户要求更新规范，再修改对应文档。

---

## 33. 工作流验收标准

检查 Agent 工作是否合格：

```txt
1. 开发前读取了相关规范
2. 任务范围清楚
3. 没有超阶段开发
4. 没有擅自新增依赖
5. 修改文件范围合理
6. 构建结果明确
7. README / WORKLOG 按需更新
8. 已知问题如实说明
9. 下一步建议可执行
10. Git 建议清楚
```

---

## 34. 最终原则

> Agent 在 Pixel Archive 中不是自由发挥的设计师，而是按规范执行的小步开发助手。  
> 每次任务都应先识别范围，再读取规范，再最小实现，再构建验证，再清楚汇报。
