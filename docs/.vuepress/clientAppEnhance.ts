import { defineClientAppEnhance } from '@vuepress/client';
import {
	DiscordButton,
	DiscordButtons,
	DiscordEmbed,
	DiscordEmbedField,
	DiscordEmbedFields,
	DiscordInteraction,
	DiscordMarkdown,
	DiscordMention,
	DiscordMessage,
	DiscordMessages,
	DiscordReaction,
	DiscordReactions,
	install as DiscordMessageComponents,
} from '@discord-message-components/vue';
import DocsLink from './components/DocsLink.vue';
import HacosAvatar from './assets/avatar-haco.png';
import ResultingCode from './components/ResultingCode.vue';
import djsAvatar from './assets/discord-avatar-djs.png';
import XiaYueAvatar from './assets/avatar-xiayue.png';
import '@discord-message-components/vue/dist/style.css';

export default defineClientAppEnhance(({ app }) => {
	app.use(DiscordMessageComponents, {
		avatars: {
			haco: HacosAvatar,
			djs: djsAvatar,
			xiayue: XiaYueAvatar,
		},
		profiles: {
			haco: {
				author: 'MR.HACO',
				avatar: 'haco',
				roleColor: "white",
			},
			xiayue: {
				author: 'XiaYue',
				avatar: 'xiayue',
				roleColor: "white",
			},
			djs: {
				author: 'Discord.js',
				avatar: 'djs',
				roleColor: "white",
			},
			bot: {
				author: '教學用',
				avatar: 'blue',
				bot: true,
			},
		},
	});

	app.component('DiscordButton', DiscordButton);
	app.component('DiscordButtons', DiscordButtons);
	app.component('DiscordEmbed', DiscordEmbed);
	app.component('DiscordEmbedField', DiscordEmbedField);
	app.component('DiscordEmbedFields', DiscordEmbedFields);
	app.component('DiscordInteraction', DiscordInteraction);
	app.component('DiscordMarkdown', DiscordMarkdown);
	app.component('DiscordMention', DiscordMention);
	app.component('DiscordMessage', DiscordMessage);
	app.component('DiscordMessages', DiscordMessages);
	app.component('DiscordReaction', DiscordReaction);
	app.component('DiscordReactions', DiscordReactions);

	app.component('DocsLink', DocsLink);
	app.component('ResultingCode', ResultingCode);
});
