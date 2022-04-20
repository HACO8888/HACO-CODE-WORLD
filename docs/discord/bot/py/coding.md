# 開始寫程式

1. 新增 `main.py` 檔案在資料夾中

2. 輸入下列代碼 並將 機器人Token 輸入進第6行的 `""` 內
```py
import discord
from discord.ext import commands

client = commands.Bot(command_prefix='t!', intents=discord.Intents.all())

TOKEN = ""

@client.event
async def on_ready():
    print('BOT READY')
    
@client.command()
async def ping(ctx):
    await ctx.send("Pong")

client.run(TOKEN)
```