# 開始寫程式


::: danger 請注意
您現在瀏覽的頁面是第一章節
:::


1. 新增 `main.py` 檔案在資料夾中

2. 輸入下列代碼 並將 機器人Token 輸入進第6行的 `""` 內


::: warning 溫馨提醒
複製完要記得儲存喔！VSCode快捷按鈕是 `Ctrl` + `S`
:::

```py
import discord
from discord.ext import commands

Token = "" #輸入機器人Token
Prefix = "t!" #修改為要的Prefix

client = commands.Bot(command_prefix=Prefix, intents=discord.Intents.all())

@client.event
async def on_ready():
    print('BOT READY')
    
@client.command()
async def ping(ctx):
    await ctx.reply("Pong!", mention_author=False)

client.run(Token)
```

3. 在檔案的那個資料夾開啟 `CMD` 或 `PowerShell` 並運行剛剛寫好的檔案

```bash:no-line-numbers
py main.py
```

4. 來看結果

<img src="/code/py/codepy-1.png" />
<br>
<img src="/code/py/codepy-2.png" />

::: details 章節一通知
```:no-line-numbers
恭喜你完成基本的機器人製作，請進入下一章
```
:::



