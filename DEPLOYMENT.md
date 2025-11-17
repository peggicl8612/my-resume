# 部署說明

本專案配置了 GitHub Actions CI/CD 自動化部署，支援兩種部署方式：

## 方式一：部署到 Vercel（推薦）

Vercel 是 Next.js 的官方平台，提供最佳的 Next.js 支援和性能。

### 設置步驟：

1. **在 Vercel 創建專案**

   - 訪問 [Vercel](https://vercel.com)
   - 使用 GitHub 帳號登入
   - 導入你的 GitHub 倉庫

2. **獲取 Vercel Token 和專案資訊**

   - 在 Vercel Dashboard 中，進入專案設置
   - 在 Settings > General 中找到以下資訊：
     - `VERCEL_ORG_ID`
     - `VERCEL_PROJECT_ID`
   - 在 [Vercel Account Settings > Tokens](https://vercel.com/account/tokens) 創建一個新的 Token

3. **在 GitHub 設置 Secrets**

   - 進入你的 GitHub 倉庫
   - 點擊 Settings > Secrets and variables > Actions
   - 添加以下 Secrets：
     - `VERCEL_TOKEN`: 你的 Vercel Token
     - `VERCEL_ORG_ID`: 你的 Vercel 組織 ID
     - `VERCEL_PROJECT_ID`: 你的 Vercel 專案 ID

4. **啟用 Workflow**
   - 確保 `.github/workflows/deploy-vercel.yml` 文件存在
   - 當你推送代碼到 `main` 分支時，會自動觸發部署

## 方式二：部署到 GitHub Pages

GitHub Pages 是免費的靜態網站託管服務。

### 設置步驟：

1. **啟用 GitHub Pages**

   - 進入你的 GitHub 倉庫
   - 點擊 Settings > Pages
   - 在 Source 中選擇 "GitHub Actions"

2. **設置權限**

   - 進入 Settings > Actions > General
   - 在 "Workflow permissions" 中選擇 "Read and write permissions"
   - 勾選 "Allow GitHub Actions to create and approve pull requests"

3. **啟用 Workflow**

   - 確保 `.github/workflows/deploy-github-pages.yml` 文件存在
   - 當你推送代碼到 `main` 分支時，會自動觸發部署

4. **訪問網站**
   - 部署完成後，你的網站將在 `https://[你的用戶名].github.io/[倉庫名]` 可訪問

## 注意事項

- **Vercel 部署**：支援完整的 Next.js 功能，包括 SSR、API Routes 等
- **GitHub Pages 部署**：僅支援靜態導出，不支援 SSR 和 API Routes
- 兩個 workflow 可以同時存在，但建議只啟用一個以避免衝突
- 如果使用 GitHub Pages，請確保在 `next.config.js` 中設置了正確的 `basePath`（如果倉庫名不是根路徑）

## 本地測試

在部署前，你可以在本地測試構建：

```bash
# 測試 Vercel 部署（正常構建）
npm run build
npm start

# 測試 GitHub Pages 部署（靜態導出）
EXPORT_STATIC=true npm run build
```

## 故障排除

如果部署失敗，請檢查：

1. GitHub Actions 的日誌輸出
2. 確保所有必要的 Secrets 都已設置
3. 確保 Node.js 版本兼容（本專案使用 Node.js 20）
4. 檢查 `package.json` 中的依賴是否正確安裝
