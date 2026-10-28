# 与鹅同行

一个适合旅行小组使用的记账与费用分摊应用。无需安装依赖或配置后端，打开网页即可创建旅行、记录账单并查看结算结果。

## 在线体验

[打开与鹅同行](https://jennycheng25.github.io/trip-split-app/)

## 功能

- 创建多段旅行，分别管理成员和账单。
- 记录账单、消费项目、付款人、税费和小费。
- 按消费项目选择参与分摊的成员，查看每位成员的收支和转账建议。
- 上传或拍摄收据照片，并使用中英文 OCR 识别消费项目；识别结果可核对后再添加。
- 支持安装为渐进式网页应用（PWA），并缓存页面以便离线打开。

## 使用方法

1. 打开[在线应用](https://jennycheng25.github.io/trip-split-app/)。
2. 创建或选择一段旅行，并添加同行成员。
3. 新建账单，填写付款人、日期、税费和小费，再添加消费项目并选择分摊成员。
4. 在“结算”页面查看成员之间的转账建议；需要时可在账单中添加收据照片并识别项目。

首次打开时，应用会显示一段示例旅行和账单，方便了解界面。可以编辑或删除示例内容。

## 数据与隐私

旅行、账单和收据照片保存在当前浏览器的本地存储中。应用没有账号系统，数据不会自动同步到其他设备；清除浏览器网站数据可能导致记录丢失。建议妥善保管重要记录。

可选的 Cloudflare Web Analytics 仅统计网站访问情况，不会读取旅行、账单或收据数据。默认未启用；配置站点 token 后才会加载统计脚本并开始累计访问数据。Cloudflare 表示 Web Analytics 不收集访客个人数据。

收据 OCR 使用 Tesseract.js。识别组件首次使用时会从 jsDelivr 加载；识别在浏览器本地进行，识别结果需要自行核对。

## 访问统计

项目使用 Cloudflare Web Analytics（默认关闭）。启用步骤：

1. 在 Cloudflare 控制台打开 **Web Analytics**，添加 `jennycheng25.github.io` 网站并创建站点 token。
2. 将 token 填入 `index.html` 顶部的 `CLOUDFLARE_WEB_ANALYTICS_TOKEN` 常量。
3. 提交并部署到 GitHub Pages；之后可在 Cloudflare 的 Web Analytics 面板查看访客和页面浏览趋势。

这是单页应用，默认主要统计网页加载访问，不会自动区分账单、成员和结算等应用内页面切换。不要把旅行或账单内容作为统计事件发送。
## 本地运行

这是一个无构建步骤的静态网页项目。可用任意本地静态 HTTP 服务器提供项目目录，然后在浏览器打开对应地址。需要通过 HTTP(S) 访问才能使用 Service Worker 和 PWA 离线功能。

## 部署

仓库的 GitHub Actions 会在推送到 `main` 分支或手动触发时，将仓库根目录部署到 GitHub Pages。首次部署前，请在仓库的 **Settings → Pages → Build and deployment** 中将来源设为 **GitHub Actions**。

## 技术

- 原生 HTML、CSS 和 JavaScript
- `localStorage` 本地数据存储
- Service Worker 与 Web App Manifest
- Tesseract.js 收据 OCR
