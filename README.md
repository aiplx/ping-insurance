# Ping Liang | 技术型风险管理专家

个人顾问网站，使用 **React + Vite + Tailwind CSS + React Router** 构建。

## 开发

```bash
npm install
npm run dev
```

浏览器打开 http://localhost:5173/

## 构建

```bash
npm run build
```

产物在 `dist/`，可部署到任意静态托管。

## 路由

| 路径 | 页面 |
|------|------|
| `/` | 首页（Hero + 资产复利演算 + 快速导航） |
| `/about` | 背景与服务 |
| `/contact` | 联系我（WeChat / WhatsApp / 留言表单） |
| `/license` | 资质认证 |

## 静态资源

- WeChat 二维码：将 `wechat_qr.jpg` 放入 `public/assets/img/`，联系页会自动显示。

## 原静态站

原 HTML 页面（`about.html`、`contact.html`、`license.html` 等）仍保留在项目根目录，仅作参考；当前入口为 React 应用（`index.html` → `src/main.jsx`）。
