# Love Story Website

一个记录爱情故事的网站，包含相册、愿望清单、纪念日等功能。

## 功能特点

- 首页展示重要照片和计时器
- 相册页面展示所有照片和视频
- 愿望清单记录未来计划
- 纪念日页面记录重要日期
- 时间轴展示重要时刻
- AI 聊天助手提供互动体验

## 本地开发

1. 克隆项目
```bash
git clone https://github.com/你的用户名/love.git
cd love
```

2. 安装依赖
```bash
npm install
```

3. 运行开发服务器
```bash
npm run dev
```

4. 打开浏览器访问 http://localhost:3000

## 部署说明

本项目使用 GitHub Pages 进行部署。每次推送到 main 分支时，GitHub Actions 会自动构建并部署网站。

### 部署步骤

1. Fork 这个仓库到你的 GitHub 账号

2. 在仓库设置中启用 GitHub Pages：
   - 进入仓库的 Settings 页面
   - 找到 Pages 选项
   - 在 Source 中选择 "GitHub Actions"

3. 推送代码到 main 分支，GitHub Actions 会自动部署

4. 部署完成后，你的网站将可以通过 `https://你的用户名.github.io/love` 访问

## 技术栈

- Next.js 14
- React
- TypeScript
- Tailwind CSS
- Framer Motion

## 许可证

MIT
