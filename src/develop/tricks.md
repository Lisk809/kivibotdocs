# 开发技巧 {#dev-tricks}

待完善, 可先参考 [`KiviPlugin API`](/api/plugin)

## 如何处理频道消息

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
