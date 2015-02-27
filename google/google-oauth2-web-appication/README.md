### 1. 請先至 [Google Developers Console] 創建一個 project
### 2. API 與驗證 -> 憑證 -> 建立一個新的 OAuth 的用戶端 ID -> 網路應用程式
### 3. 將「授權的重新導向 URI」欄位中填入 - http://127.0.0.1:3000/auth/google/callback
### 4. 依據申請的帳個資料，填入 app.js 中的:
- CLIENT_ID
- CLIENT_SECRET
- REDIRECT_URL

### 5. 填入 app.js 中的使用者 Google Site 資訊:
- YOUR_SITE_DOMAIN
- YOUR_SITE

### 6. 啟動
    node app

### 7. 認證
    在瀏覽器中輸入 localhost:3000/auth/google 

### 8. 取得資料
    在瀏覽器中輸入 localhost:3000/getgooglesitelist

[Google Developers Console]:https://console.developers.google.com
