# 上傳協槓指令 


::: danger 請注意
您現在瀏覽的頁面是第二章節
:::

::: details 第一章節機器人基礎程式碼
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
:::

1. 開啟終端並且按照順序輸入以下指令

<CodeGroup>
  <CodeGroupItem title="NPM" active>

```bash:no-line-numbers
npm i @discordjs/rest
npm i @discordjs/builders
npm i discord-api-types/v9
```

  </CodeGroupItem>

  <CodeGroupItem title="YARN">

```bash:no-line-numbers
yarn add @discordjs/rest
yarn add @discordjs/builders
yarn add discord-api-types/v9
```

  </CodeGroupItem>

  <CodeGroupItem title="PNPM">

```bash:no-line-numbers
pnpm add @discordjs/rest
pnpm add @discordjs/builders
pnpm add discord-api-types/v9
```

  </CodeGroupItem>
</CodeGroup>

2. 更改程式碼

::: details 需要更改部分
```diff:no-line-numbers
const { Client, Intents } = require('discord.js');
const TOKEN = "" //輸入機器人TOKEN
const PREFIX = "t!" //修改為要的Prefix
+ const ID = "" //輸入機器人ID

+ const { REST } = require('@discordjs/rest');
+ const { Routes } = require('discord-api-types/v9');
+ const { SlashCommandBuilder } = require('@discordjs/builders');

const client = new Client({
    intents: new Intents(32767),
    partials: ['MESSAGE', 'CHANNEL', 'REACTION', "USER"],
    allowedMentions: { parse: ["roles", "users"], repliedUser: false },
});

+ const { SlashCommandBuilder } = require('@discordjs/builders');
+ client.MapCommands = [
+ 	 new SlashCommandBuilder().setName('ping').setDescription('查看機器人延遲!'),
+ 	 new SlashCommandBuilder().setName('embed').setDescription('建立Discord Embed並且發送!'),
+ 	 new SlashCommandBuilder().setName('web').setDescription('查詢Dashboard網址!'),
+ ].map(command => command.toJSON());

client.once('ready', () => {
	console.log('BOT READY');
+   const rest = new REST({ version: '9' }).setToken(TOKEN);
+   client.guilds.cache.forEach(guild => {
+        try {
+           rest.put(
+            Routes.applicationGuildCommands(ID, guild.id),
+             { body: client.MapCommands },
+            );
+          } catch (error) {
+            console.error(error);
+          }
+    });
});
```
:::
::: details 完整程式碼
```js:no-line-numbers
const { Client, Intents } = require('discord.js');
const TOKEN = "" //輸入機器人TOKEN
const PREFIX = "t!" //修改為要的Prefix
const ID = "" //輸入機器人ID

const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { SlashCommandBuilder } = require('@discordjs/builders');

const client = new Client({
    intents: new Intents(32767),
    partials: ['MESSAGE', 'CHANNEL', 'REACTION', "USER"],
    allowedMentions: { parse: ["roles", "users"], repliedUser: false },
});

const { SlashCommandBuilder } = require('@discordjs/builders');
client.MapCommands = [
	 new SlashCommandBuilder().setName('ping').setDescription('查看機器人延遲!'),
	 new SlashCommandBuilder().setName('embed').setDescription('建立Discord Embed並且發送!'),
	 new SlashCommandBuilder().setName('web').setDescription('查詢Dashboard網址!'),
].map(command => command.toJSON());

client.once('ready', () => {
	console.log('BOT READY');
    const rest = new REST({ version: '9' }).setToken(TOKEN);
    client.guilds.cache.forEach(guild => {
        try {
            rest.put(
                Routes.applicationGuildCommands(ID, guild.id),
                { body: client.MapCommands },
            );
        } catch (error) {
            console.error(error);
        }
    });
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
:::

3. 重新運行BOT，然後看結果

***圖片尚未上傳***

::: details 章節二通知
```:no-line-numbers
恭喜你學會上傳協槓指令，請進入下一章
```
:::



