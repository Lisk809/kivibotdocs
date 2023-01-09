# 开发指引 {#dev-guide}

> 逐步完善中，可先参考 [`KiviPlugin API`](/api/plugin)。

## 开发准备

**使用插件模板（推荐）**

你可以使用 `kivi crate` 脚手架命令，它会在 `框架目录/plugins` 下生成模板。

> 如果你对 TS 很熟悉，这里有一个[开箱即用的 TS 插件开发模板](https://github.com/KiviBotLab/kivibot-plugin-template-ts)，也许对你有帮助。

**手动创建目录和文件**

如果你不想使用模板，也可以手动创建。

在 `框架目录/plugins` 下新建一个插件目录(会被作为插件名, 建议英文), 然后在这个目录下新建一个 `index.js`, 然后你就可以自己开始开发啦。

## 编写第一个插件

按照惯例，我们先来写一个 Hello World 插件, 并以这个插件为例子展开。

```js
// 从 @kivibot/core 中引入框架的插件类，和 oicq 的消息构造器
const { KiviPlugin, segment } = require('@kivibot/core')

// 通过插件名、版本号初始化插件（正式开发时推荐引用 package.json 的版本号）
const plugin = new KiviPlugin('demo', '0.1.0')

// 插件生命周期函数，插件被启用时，传入的函数被调用。
plugin.onMounted((bot, admins) => {
  // 添加消息监听处理函数
  plugin.onMessage(event => {
    const { raw_message, sender } = event

    // 消息处理逻辑
    if (raw_message === 'hello') {
      // 消息链，可用 segment 构造复杂消息，比如图片，QQ 表情，视频音频等
      const msgs = [segment.face(66), 'world']

      // Bot 回复消息，消息类型可以是字符串，或者合法的消息链数组
      event.reply(msgs)
    }
  })
})

// 将 plugin 采用 CommonJS 规范进行导出
module.exports = { plugin }
```

可以看到，你需要先初始化插件实例，然后调用相关的插件 API 进行处理。

> 这里的 `plugin.onMounted`, `plugin.onMessage` 等, 都是插件类提供的 API, 你可以前往 [KiviPlugin API](/api/plugin) 查看所有支持的 API 和相关参数、类型说明。

需要注意的是, 只有在 `plugin.onMounted` 中才能访问到 Bot 的相关属性和方法, 所以请把与 Bot 相关的业务逻辑都写在 `plugin.onMounted` 传入的函数中。

> 逐步完善中，敬请期待...
