# 开发技巧 {#dev-tricks}

> 逐步完善中, 可先参考 [`KiviPlugin API`](/api/plugin)

## 支持并处理频道消息

你可以使用 [`oicq-guild`](https://github.com/takayama-lily/oicq-guild) 插件，bind Client 得到频道实例后，进行后续事件监听、消息处理，详情请参考 `oicq-guild` 说明。

首先安装 `oicq-guild`。

```shell
npm i oicq-guild --save
```

然后在插件层面引入并 bind，根据需求监听处理相关事件。

```js
const { KiviPlugin } = require('@kivibot/core')
const { GuildApp } = require('oicq-guild')

plugin.onMounted((bot, admins) => {
  // 插件 mount 后，绑定 oicq Client 获取频道实例
  const app = GuildApp.bind(bot)

  // 通过频道实例监听并处理相关事件，详情参考 oicq-guild 说
  app.on('ready', function () {
    // 频道实例初始化完成
    console.log('My guild list:')
    console.log(this.guilds)
  })

  app.on('message', e => {
    // 处理频道消息
    console.log(e)

    if (e.raw_message === 'hello') {
      e.reply(`Hello, ${e.sender.nickname}!`)
    }
  })
})

module.exports = { plugin }
```

## 发送复杂消息 (图片、艾特、QQ 表情、语音、短视频等)

你可以使用 [segment](https://oicqjs.github.io/oicq/modules.html#segment) 进行复杂消息的构造。

```js
const { segment } = require('@kivibot/core')

// 艾特消息
const at = segment.at(114514)

// 图片消息
const img = segment.image('https://beta.kivibot.com/dimo.png')

// QQ 表情消息, 如果不知道表情 id, 可以在 kivi.json 里配置 message_mode 为 detail
// 重开框架后，把表情发给 Bot, 就可以在 log 里看到表情 id
const record = segment.face(66)

// 语音消息
const record = segment.record('https://xxx.xxx/xxx.mp3')
```

请参考 `ociq` 文档的 [segment](https://oicqjs.github.io/oicq/modules.html#segment) API 查看所有消息类型和参数。

## 请求接口数据

可以使用框架内置的 `axios` 或者简单封装过的 `http` 发起网络请求。

> 你可以前往 [GitHub](https://github.com/KiviBotLab/KiviBot/blob/main/src/utils/request.ts) 查看 http 的简单封装源码。

```js
const { KiviPlugin, http } = require('@kivibot/core')

const plugin = new KiviPlugin('一言', '1.0.0')

plugin.onMounted((bot, admins) => {
  plugin.onMessage(event => {
    const { raw_message } = event

    if (raw_message === '一言') {
      const { data } = http.get('https://v1.hitokoto.cn')

      plugin.log(data)

      event.reply(data.hitokoto)
    }
  })
})

module.exports = { plugin }
```
