const path = require('path')
const themeConfig = require('./config/theme/')

module.exports = {
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['meta', { name: 'author', content: 'Charles7c' }],
    ['meta', { name: 'keywords', content: '查老师,查老师的讲义,Charles,Charles7c,小白讲义,讲义,博客,教程' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#42b983' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icon_vuepress_reco.png' }],
    ['link', { rel: 'mask-icon', href: '/icon_vuepress_reco.svg', color: '#42b983' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icon_vuepress_reco.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    ['script', { 'ata-ad-client': 'ca-pub-5123799675896802', async: 'async', src: '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js' }]
  ],
  theme: 'reco',
  themeConfig,
  locales: {
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
      title: "查老师的讲义",
      description: '查老师带你团灭于各大编程语言'
    } 
  },
  markdown: {
    lineNumbers: true
  },
  plugins: [
    [
      '@vuepress/pwa', 
      {
        serviceWorker: true,
        updatePopup: {
          message: "发现新内容可用",
          buttonText: "刷新"
        }
      }
    ],
    [
      '@vuepress/plugin-register-components',
      {
        components: [
          {
            name: 'reco-home-page-one',
            path: path.resolve(__dirname, './components/HomePageOne.vue')
          }
        ],
        componentsDir: path.resolve(__dirname, './demo')
      }
    ],
    '@vuepress-reco/extract-code',
    [
      "@vuepress-reco/vuepress-plugin-rss", //RSS插件
      {
        site_url: "https://handout.muyoung.tech", //网站地址
        copyright: "Charles7c", //版权署名
      },
    ],
    'flowchart',
	  ["vuepress-plugin-smooth-scroll"], // 平滑滚动
    ["@vuepress/nprogress"], // 加载进度条
    ["reading-progress"], // 阅读进度条
    ["vuepress-plugin-code-copy", true], //一键复制代码插件
    [
      "@vuepress-reco/vuepress-plugin-bgm-player", // BGM播放器
      {
        audios: [
          {
            name: "Faster Than Light",
            artist: "Andreas Waldetoft / Mia Stegmar",
            url:
              "https://cdn-image.tsanfer.xyz/music/Andreas%20Waldetoft%2CMia%20Stegmar%20-%20Faster%20Than%20Light.mp3",
            cover:
              "https://p1.music.126.net/Gxv6d9W4Yd9q9WNHPpi8rw==/1379887104073348.jpg",
          },
          {
            name: "Dawn",
            artist: "DDRKirby(ISQ)",
            url:
              "https://cdn-image.tsanfer.xyz/music/Dawn%20-%20DDRKirby%28ISQ%29.mp3",
            cover:
              "https://p2.music.126.net/IPnqMCk8YaN9inwYV2bdgQ==/18774161044446693.jpg",
          },
          {
            name: "TRON Legacy (End Titles)",
            artist: "Daft Punk",
            url:
              "https://cdn-image.tsanfer.xyz/music/Daft%20Punk%20-%20TRON%20Legacy%20%28End%20Titles%29.mp3",
            cover:
              "https://p2.music.126.net/qOOTIykbSLw9RHB0vI83GA==/737772302281958.jpg",
          },
          {
            name: "Reconfig",
            artist: "Shortwire",
            url:
              "https://cdn-image.tsanfer.xyz/music/Reconfig%20-%20Shortwire.mp3",
            cover:
              "https://p2.music.126.net/2oouVh_rHOv1nZXYapF41A==/109951163606358209.jpg",
          },
          {
            name: "Broken Boy",
            artist: "Tonspender",
            url:
              "https://cdn-image.tsanfer.xyz/music/Tonspender%20-%20Broken%20Boy.flac",
            cover:
              "https://p2.music.126.net/4TnTRyHqa3-D2H1UnOa00w==/109951163666994621.jpg",
          },
          {
            name: "Forever",
            artist: "PIKASONIC",
            url: "https://cdn-image.tsanfer.xyz/music/forever%20mst.mp3",
            cover:
              "https://p1.music.126.net/LjXufn3OaIgf8OwaEP_xcQ==/109951164419438501.jpg",
          },
          {
            name: "Life Of Sin Pt. 4",
            artist: "MitiS",
            url:
              "https://cdn-image.tsanfer.xyz/music/MitiS%20-%20Life%20Of%20Sin%20Pt.%204.mp3",
            cover:
              "https://p2.music.126.net/LmjTrSwvSLSNBsfFsQFO6g==/2533274793491743.jpg",
          },
          {
            name: "Sea Of Voices (RAC Mix)",
            artist: "Porter Robinson",
            url:
              "https://cdn-image.tsanfer.xyz/music/Porter%20Robinson%20-%20Sea%20Of%20Voices%20%28RAC%20Mix%29.mp3",
            cover:
              "https://p1.music.126.net/zjQROkEUokU7iS5eUvnVZQ==/3264450027161111.jpg",
          },
          {
            name: "New Lipstick",
            artist: "The Kissaway Trail",
            url:
              "https://cdn-image.tsanfer.xyz/music/The%20Kissaway%20Trail%20-%20New%20Lipstick.flac",
            cover:
              "https://p2.music.126.net/VjN74c1hoYgPCEZ9DngeQw==/109951163772624643.jpg",
          },
        ],
      },
    ],
    require('./plugins/notification/index')
  ]
}  