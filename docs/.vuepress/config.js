const { description } = require('../../package')

module.exports = {
    head: [
      ["script", {async: true, src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4876997759423975", crossorigin:"anonymous"},],
      ["script",{src: "https://www.googletagmanager.com/gtag/js?id=UA-168383599-1",async: true},],
      ["script",{},`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'UA-226106548-1');`],
      ['link', { rel: "shortcut icon", href: "/favicon.ico"}],
    ],
    lang: 'zh-TW',
    theme: '@vuepress/theme-default',
    locales: {
      '/': {
        lang: 'zh-TW',
        title: 'HACO的程式世界',
        description: '以中文的方式教您各種有趣好玩的程式語言，教會所有初學者',
      },
      // '/en': {
      //   lang: 'en-US',
      //   title: 'HACO\'s Code World',
      //   description: 'Let Haco teach u many code language',
      // },
    },
    themeConfig: {
      darkMode: true,
      lightMode: false,
      // editLink: false,
      // lastUpdated: false,
      // contributors: false,
      logo: '/HACO-LOGO.png',
      // repo: "MRHACO/HACO-CODE-WORLD",
      docsRepo: 'MRHACO/HACO-CODE-WORLD',
      docsBranch: 'master',
      docsDir: 'docs',
      editLinkPattern: ':repo/edit/:branch/:path',
      locales: {
        "/": {
          "editLinkText": "編輯頁面",
          "backToHome": "帶我回首頁",
          "contributorsText": "編輯者",
          "lastUpdatedText": "上次更新",
          "selectLanguageName": "繁體中文",
          "selectLanguageText": "選擇語言",
          "toggleSidebar": "切換至夜間模式",
          "toggleDarkMode": "切換至白天模式",
          "openInNewWindow": "在新視窗中打開",
          "notFound": [
            "這裡沒有東西！.",
            "你是怎麼來到這裡的？",
            "這是個 四 - 零 - 四.",
            "看來你得到了一個壞掉的連結。"
          ],
          "navbar": [
            {
              text: '各類教學',
              link: '',
              children: [
                {
                  text: 'Discord教學',
                  link: '/discord/bot/',
                  activeMatch: '^/discord/',
                },
                // {
                //   text: '網站製作教學',
                //   link: '/web/',
                //   activeMatch: '^/web/',
                // },
              ]
            },
            {
              text: '更新紀錄',
              link: '/log/',
              activeMatch: '^/log/',
            },
            {
              text: '隱私權政策',
              link: '/privacy-and-policy.html',
            },
            {
              text: 'Discord',
              link: 'https://discord.gg/RtsckgRjqJ',
            },
            {
              text: 'Github',
              link: 'https://github.com/MRHACO/',
            }
          ],
          sidebar: [
            {
              text: '更新紀錄',
              link: '/log/',
              children: []
            },
            {
              text: 'Discord',
              link: '',
              children: [
                // {
                //   text: '創建伺服器',
                //   link: '/discord/guild/',
                //   children: [],
                // },
                {
                  text: '製作機器人',
                  link: '/discord/bot/',
                  children: [
                    {
                      text: 'Discord.js',
                      link: '/discord/bot/js',
                      children: [
                        {
                          text: '安裝配置環境',
                          link: '/discord/bot/js/install.html',
                        },
                        {
                          text: '開始寫機器人',
                          link: '/discord/bot/js/coding.html',
                        },
                      ],
                    },
                    {
                      text: 'Discord.py',
                      link: '/discord/bot/py',
                      children: [
                        {
                          text: '安裝配置環境',
                          link: '/discord/bot/py/install.html',
                        },
                        {
                          text: '開始寫機器人',
                          link: '/discord/bot/py/coding.html',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              text: '網站製作',
              link: '', //web
              children: []
            },
          ],
        },
        // "/en": {
        //   "backToHome": "Take me home",
        //   "selectLanguageName": "English",
        //   "selectLanguageText": "Language",
        //   "lastUpdatedText": "Last Updated",
        //   "toggleSidebar": "toggle sidebar",
        //   "toggleDarkMode": "toggle dark mode",
        //   "openInNewWindow": "open in new window",
        //   "notFound": [
        //     "There's nothing here.",
        //     "How did we get here?",
        //     "That's a Four-Oh-Four.",
        //     "Looks like we've got some broken links."
        //   ],
        //   "navbar": [

        //     // {
        //     //   text: 'Discord Teaching',
        //     //   link: '/en/discord/'
        //     // },
        //     // {
        //     //   text: 'Update Log',
        //     //   link: '/en/log/'
        //     // },
        //     {
        //       text: 'Discord',
        //       link: 'https://discord.gg/RtsckgRjqJ',
        //     },
        //     {
        //       text: 'Github',
        //       link: 'https://github.com/MRHACO/',
        //     }
        //   ],
        // }
      },
    },
    plugins: [
      [
        '@vuepress/google-analytics',
        {
          'ga': 'UA-226106548-1'
        },
      ],
      // [
      //   'vuepress-plugin-google-adsense2',
      //   {
      //     id: 'ca-pub-4876997759423975',
      //   },
      // ],
      [
        "@snippetors/vuepress-plugin-code-copy",
      ],
    ]
  }
