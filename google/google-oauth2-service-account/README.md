### 1. Creating a service account
#### 1-1. Go to the Google Developers Console.
#### 1-2. Select a project, or create a new one.
#### 1-3. In the sidebar on the left, expand APIs & auth. Next, click APIs. In the list of APIs, make sure all of the APIs you are using show a status of ON.
#### 1-4. In the sidebar on the left, select Credentials.
#### 1-5. To set up a new service account, do the following:
- Under the OAuth heading, select Create new Client ID.
- When prompted, select Service Account and click Create Client ID.
- A dialog box appears. To proceed, click Okay, got it.
- If you already have a service account, you can generate a new key by clicking the appropriate button beneath the existing service-account credentials table.

You can return to the Developers Console at any time to view the client ID, email address, and public key fingerprints, or to generate additional public/private key pairs. For more details about service account credentials in the Developers Console, see Service accounts in the Developers Console help file.

Take note of the service account's email address and store the service account's P12 private key file in a location accessible to your application. Your application needs them to make authorized API calls.

> Note: You must store and manage private keys securely in both development and production environments. Google does not  keep a copy of your private keys, only your public keys.

-----

上述主要是透過 Google Developers Console 創建一個 OAuth 的認證 p12 檔，需要透過下列指定打包成 pem 檔

    openssl pkcs12 -in downloaded-key-file.p12 -out file.pem -nodes
    
在將 key.pem 放入專案的根目錄中，並且在 oauth-config.json 在 iss 欄位中，寫入剛剛第一步驟申請的 google service account


若你的 google 服務是 nopublic 的話，請記得將第一步驟申請的 google service account 加入有權限可以讀、取你的 google 服務。
