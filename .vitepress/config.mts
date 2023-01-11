import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'KiviBot',
  description: '轻量、跨平台的 QQ 机器人框架',
  head: [
    ['link', { rel: 'preconnect', href: 'https://unpkg.com' }],
    ['link', { rel: 'dns-prefetch', href: 'https://unpkg.com' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/dimo.png' }],
    ['script', { src: 'https://unpkg.com/twemoji@latest/dist/twemoji.min.js' }]
  ],
  lastUpdated: true,
  markdown: {
    theme: 'one-dark-pro'
  },
  srcDir: 'src',
  themeConfig: {
    logo: '/dimo.png',
    nav: [
      { text: '文档', link: '/intro' },
      { text: '插件', link: '/plugin/list' },
      {
        text: '开发',
        link: '/develop/prerequisite'
      },
      {
        text: '社区',
        items: [
          {
            items: [
              { text: 'GitHub 团队', link: 'https://github.com/KiviBotLab' },
              { text: 'Discord 频道', link: 'https://discord.gg/RegGQD3Fu6' },
              { text: 'QQ 交流群', link: 'https://jq.qq.com/?_wv=1027&k=iK97X7NS' }
            ]
          },
          {
            items: [
              // { text: '社区插件文档', link: 'https://plugin.kivibot.com' },
              { text: '支持本项目', link: '/reward' }
            ]
          }
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
            text: '安装',
            items: [
              { text: 'Linux', link: '/guide/start/linux' },
              { text: 'Windows', link: '/guide/start/win' },
              { text: 'Android (Termux)', link: '/guide/start/android' },
              { text: '其他平台', link: '/guide/start/other' }
            ]
          },
          {
            text: '基础知识',
            link: '/guide/basic'
          },
          {
            text: '命令',
            items: [
              { text: '消息指令', link: '/guide/cmd/msg' },
              { text: 'CLI 命令', link: '/guide/cmd/cli' }
            ]
          },
          {
            text: '配置文件',
            link: '/guide/config'
          },
          {
            text: '常见问题',
            link: '/guide/faq'
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
          { text: '插件列表', link: '/plugin/list' }
        ]
      },
      {
        text: '开发',
        collapsible: true,
        items: [
          { text: '前置知识', link: '/develop/prerequisite' },
          { text: '开发指引', link: '/develop/guide' },
          { text: '开发技巧', link: '/develop/tricks' },
          { text: '插件示例', link: '/develop/examples' },
          { text: '生命周期', link: '/develop/lifecycle' }
        ]
      },
      {
        text: 'API 文档',
        collapsible: true,
        items: [
          { text: 'KiviPlugin API', link: '/api/plugin' },
          { text: 'oicq v2 API', link: '/api/oicq' },
          { text: 'Utils API', link: '/api/utils' },
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
        '<a href="https://github.com/KiviBotLab/KiviBot">KiviBot </a>使用 <a href="https://github.com/KiviBotLab/KiviBot/blob/main/LICENSE">MPL-2.0</a> 协议开放源代码, <a href="https://github.com/KiviBotLab/docs">文档</a>使用 <a href="https://github.com/KiviBotLab/docs/blob/main/LICENSE">MIT</a> 协议开放源代码',
      copyright: 'Copyright © 2022-PRESENT <a href="https://github.com/vikiboss">Viki</a>'
    },
    lastUpdatedText: '上次更新',
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
