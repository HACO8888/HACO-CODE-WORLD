# 開始寫程式 


::: danger 請注意
您現在瀏覽的頁面是第一章節
:::
1. 新增 `index.js` 檔案在資料夾中

2. 輸入下列代碼 並將 機器人TOKEN 輸入進第2行的 `""` 內

::: warning 溫馨提醒
複製完要記得儲存喔！VSCode快捷按鈕是 `Ctrl` + `S`
:::

```js
const { Client, Intents } = require('discord.js');
const TOKEN = "" //輸入機器人TOKEN
const PREFIX = "t!" //修改為要的Prefix

const client = new Client({
    intents: new Intents(32767),
    partials: ['MESSAGE', 'CHANNEL', 'REACTION', "USER"],
    allowedMentions: { parse: ["roles", "users"], repliedUser: false },
});


client.once('ready', () => {
	console.log('BOT READY');
});

client.on('messageCreate', (message) => {
	if (message.author.bot) {
		return;
	}
    if (!message.content.toLowerCase().startsWith(PREFIX)) {
        return;
    }
    if (message.author.bot || !message.content.toLowerCase().startsWith(PREFIX)) {
		return;
	}
    if (message.content === PREFIX + "ping") {
        message.channel.send("Pong")
    }
});

client.login(TOKEN);
```

3. 在檔案的那個資料夾開啟 `CMD` 或 `PowerShell` 並運行剛剛寫好的檔案
::: tip 小提示
如果會使用VSCode內建的終端也可以使用
:::

```bash:no-line-numbers
node index
```

4. 來看結果，會獲得類似下圖的結果

<img src="/code/js/codejs-1.png" />
<br>
<!-- <img src="/code/js/codejs-2.png" /> -->
<DiscordMessages>
    <DiscordMessage profile="haco" timestamp="2000/10/10">
        t!ping
    </DiscordMessage>
	<DiscordMessage profile="bot" timestamp="2000/10/10">
        <!-- <template #interactions>
			<DiscordInteraction profile="haco" :command="true">t!ping</DiscordInteraction>
		</template> -->
        Pong
    </DiscordMessage>
</DiscordMessages>

::: details 章節一通知
```:no-line-numbers
恭喜你完成基本的機器人製作，請進入下一章
```
:::



