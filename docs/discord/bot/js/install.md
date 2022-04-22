# 安裝配置環境

## 必備軟體安裝

Node.js 版本 v16.0.0 以上 [點我前往下載](https://nodejs.org/zh-tw/download/)

編輯器 (推薦 Visual Studio Code) [點我前往下載](https://code.visualstudio.com/#alt-downloads)

## 進行配置以及安裝
### 安裝 Node.js

1. 打開剛剛下載的 Node.js 安裝檔 然後點擊 `Next`

<img src="/install/ijs-1.png" />

2. 勾選可勾選欄位然後點擊 `Next`

<img src="/install/ijs-2.png" />

3. 選擇要安裝路徑然後點擊 `Next`

<img src="/install/ijs-3.png" />

4. 點擊 `Next`

<img src="/install/ijs-4.png" />

5. 勾選是否自動更新Node.js然後點擊 `Next`

<img src="/install/ijs-5.png" />

6. 點擊 `Install Now`

<img src="/install/ijs-6.png" />

7. 等待安裝進度條完成

<img src="/install/ijs-7.png" />

8. 點擊 `Finish` 即為安裝完成

<img src="/install/ijs-8.png" />

### 安裝 Discord.js

1. 建立一個資料夾 (取名:建議英文)

2. 在資料夾內開啟 `CMD` 或 `PowerShell`

::: tip 小提示
在資料夾內點擊右鍵可開啟選單
:::
<img src="/install/ijs-9.png" />

3. 選擇習慣性使用安裝代碼安裝最新版的discord.js
::: warning 小建議
因後續使用NPM較為方便，建議使用NPM安裝
:::
<CodeGroup>
  <CodeGroupItem title="NPM" active>

```bash:no-line-numbers
npm install discord.js
```

  </CodeGroupItem>

  <CodeGroupItem title="YARN">

```bash:no-line-numbers
yarn add discord.js
```

  </CodeGroupItem>

  <CodeGroupItem title="PNPM">

```bash:no-line-numbers
pnpm add discord.js
```

  </CodeGroupItem>
</CodeGroup>

4. 出現類似以下畫面即代表安裝成功

<img src="/install/ijs-11.png" />