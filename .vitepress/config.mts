import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'KiviBot',
  description: '轻量、跨平台的 QQ 机器人框架',
  head: [['link', { rel: 'icon', type: 'image/png', href: `/dimo.png` }]],
  lastUpdated: true,
  markdown: {
    theme: 'one-dark-pro'
    // lineNumbers: true
  },
  srcDir: 'src',
  themeConfig: {
    logo: '/dimo.png',
    nav: [
      { text: '文档', link: '/intro' },
      { text: '插件', link: '/plugin/note' },
      {
        text: '开发',
        link: '/develop/prerequisite'
      },
      // {
      //   text: '文章',
      //   items: [
      //     { text: '如何发布一个 npm 包', link: '#' },
      //     { text: 'ESM 和 CommonJS', link: '#' }
      //   ]
      // },
      {
        text: '社区',
        items: [
          {
            items: [
              { text: 'Discord 群', link: 'https://discord.gg/RegGQD3Fu6' },
              { text: 'QQ 交流群', link: 'https://jq.qq.com/?_wv=1027&k=OuXggnBs' },
              { text: 'KiviBot Lab', link: 'https://github.com/KiviBotLab' }
            ]
          },
          { items: [{ text: '支持本项目', link: '/reward' }] }
        ]
      }
    ],
    sidebar: [
      {
        text: '开始',
        collapsible: true,
        items: [
          { text: '简介', link: '/intro' },
          {
            text: '起步',
            items: [
              { text: 'Linux', link: '/guide/start/linux' },
              { text: 'Windows', link: '/guide/start/win' },
              { text: 'Android (Termux)', link: '/guide/start/android' },
              { text: 'iOS', link: '/guide/start/ios' }
            ]
          },
          {
            text: '命令',
            items: [
              { text: '消息命令', link: '/guide/cmd/msg' },
              { text: 'CLI 命令', link: '/guide/cmd/cli' }
            ]
          },
          {
            text: '配置文件',
            link: '/guide/config'
          }
        ]
      },
      {
        text: '插件',
        collapsible: true,
        items: [
          { text: '插件说明', link: '/plugin/note' },
          { text: '安装插件', link: '/plugin/install' },
          { text: '官方插件', link: '/plugin/official' },
          { text: '社区插件', link: '/plugin/third' }
        ]
      },
      {
        text: '开发',
        collapsible: true,
        items: [
          { text: '前置知识', link: '/develop/prerequisite' },
          { text: '开发指引', link: '/develop/guide' },
          { text: '插件生命周期', link: '/develop/lifecycle' },
          { text: '开发技巧', link: '/develop/tricks' },
          { text: '示例插件', link: '/develop/examples' }
        ]
      },
      {
        text: 'API 文档',
        collapsible: true,
        items: [
          { text: 'KiviPlugin API', link: '/api/plugin' },
          { text: 'Bot API', link: '/api/bot' },
          { text: 'KiviBot 标准事件', link: '/api/kivi_events' },
          { text: 'oicq v2 标准事件', link: '/api/oicq_events' }
        ]
      }
    ],
    outline: 2,
    outlineTitle: '大纲',
    socialLinks: [{ icon: 'github', link: 'https://github.com/KiviBotLab/KiviBot' }],
    footer: {
      message:
        '使用 <a href="https://github.com/KiviBotLab/KiviBot/blob/main/LICENSE">MPL-2.0</a> 协议开放源代码',
      copyright: 'Copyright © 2022-PRESENT <a href="https://github.com/vikiboss">Viki</a>'
    },
    lastUpdatedText: '上次更新：',
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    editLink: {
      pattern: 'https://github.com/KiviBotLab/docs/edit/main/src/:path',
      text: '在 GitHub 上编辑'
    }
  }
})
