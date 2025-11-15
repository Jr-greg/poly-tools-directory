# Poly Tools Directory

一个现代化的 Polymarket 工具目录网站。

## 开始使用

### 1. 安装依赖

```bash
npm install
```

### 2. 运行开发服务器

```bash
npm run dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看结果。

### 3. 构建生产版本

```bash
npm run build
npm start
```

## 项目结构

```
poly-tools-directory/
├── app/                    # Next.js 应用目录
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   └── page.tsx           # 主页
├── components/            # React 组件
│   ├── Header.tsx         # 头部导航
│   ├── Hero.tsx           # 英雄区
│   ├── Stats.tsx          # 统计数据
│   ├── ToolsGrid.tsx      # 工具网格
│   └── Footer.tsx         # 页脚
├── data/                  # 数据文件
│   └── tools.ts           # 工具数据
└── public/                # 静态资源
```

## 技术栈

- **框架**: Next.js 14
- **样式**: Tailwind CSS
- **UI组件**: Shadcn/ui
- **语言**: TypeScript
- **图标**: Lucide React

## 功能特性

- ✅ 深色主题
- ✅ 工具卡片展示
- ✅ 分类筛选
- ✅ 排序功能（Popular/Latest）
- ✅ 统计数据动画
- ✅ 响应式设计
- ✅ 加载更多功能

## 下一步

1. 添加图片到 `public/images/` 目录
2. 完善工具详情页
3. 添加搜索功能
4. 集成后端 API
