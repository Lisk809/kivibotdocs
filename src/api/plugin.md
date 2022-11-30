# KiviPlugin API

::: warning 请注意
框架仍处于**测试阶段**，插件的 `API` 随时可能发生较大的更改，请勿用于生产环境。
:::

`KiviPlugin` API 参考，你可以到[这里](https://github.com/KiviBotLab/KiviBot/blob/main/src/core/plugin/plugin.ts)找到源码及其 API 定义。

## KiviPlugin()<Badge type="warning" text="插件主类" />

实例化一个 `KiviPlugin`。

函数签名：`KiviPlugin(name, version, [conf])`

**参数说明**：

- `name`: `string` 类型，必填，插件名，建议英文
- `version`: `string` 类型，必填，插件版本号，建议英文
- `conf`: `KiviPluginConf` 类型，可选，插件初始化配置

**返回值**：`KiviPlugin` 实例

```ts
// KiviPluginConf 类型定义
interface KiviPluginConf {
  enableGroups?: number[]
  enableFriends?: number[]
}

const plugin = new kiviPlugin('demo', '0.1.0')
```

## plugin\.name <Badge type="warning" text="属性" />

实例化 `KiviPlugin` 时传入的插件名

```ts
const plugin = new kiviPlugin('demo', '0.1.0')

plugin.onMounted(() => {
  plugin.log(plugin.name) // demo // [!code focus]
})
```

## plugin\.version <Badge type="warning" text="属性" />

实例化 `KiviPlugin` 时传入的插件版本号

```ts
const plugin = new kiviPlugin('demo', '0.1.0')

plugin.onMounted(() => {
  plugin.log(plugin.version) // 0.1.0 // [!code focus]
})
```

## plugin.dataDir <Badge type="warning" text="属性" />

插件数据存放目录，`xxx/data/plugins/[name]`（绝对路径） 注意这里的 `name` 是实例化插件的时候传入的 `name`

```ts
const plugin = new kiviPlugin('demo', '0.1.0')

plugin.onMounted(() => {
  plugin.log(plugin.dataDir) // xxx/data/plugins/demo // [!code focus]
})
```

## plugin.logger <Badge type="warning" text="属性" />

[log4js](https://github.com/log4js-node/log4js-node#usage) 的 `Logger` 实例，专用来给插件规范化输出调试日志，可以调用其上的各种不同等级（`level`）的调试函数打印日志。详情参考 [log4js 官方文档](https://log4js-node.github.io/log4js-node/)

```ts
const plugin = new kiviPlugin('demo', '0.1.0')

plugin.logger.debug('调试信息') // [!code focus]
plugin.logger.info('常规日志') // [!code focus]
plugin.logger.warn('警告信息') // [!code focus]
plugin.logger.error('错误信息') // [!code focus]
plugin.logger.fatal('致命错误') // [!code focus]
```

## plugin.bot <Badge type="warning" text="属性" />

oicq 的 `Client` 实例，可以调用各种 Bot API，仅在 `onMounted` 和 `onUnmounted` 中（即被挂在了之后）才能被访问到

```ts
plugin.onMounted(() => {
  plugin.log(plugin.bot.uin) // Bot 的 QQ 账号 // [!code focus]
})
```

## plugin.admins <Badge type="warning" text="getter" />

Bot 管理员列表。

```ts
plugin.onMounted(() => {
  plugin.log(plugin.admins) // Bot 管理员列表 // [!code focus]
})
```

## plugin.mainAdmin <Badge type="warning" text="getter" />

Bot 主管理员。等价于 `plugin.admins[0]`

```ts
plugin.onMounted(() => {
  plugin.log(plugin.mainAdmin) // Bot 主管理员 // [!code focus]
})
```

## plugin.subAdmins <Badge type="warning" text="getter" />

Bot 副管理员列表。等价于 `plugin.admins.slice(1)`

```ts
plugin.onMounted(() => {
  plugin.log(plugin.subAdmins) // Bot 副管理员列表 // [!code focus]
})
```

## plugin.throwPluginError() <Badge type="warning" text="方法" />

抛出一个 `KiviPluginError` 标准错误，会被框架捕获并输出到控制台日志。

函数签名：`throwPluginError(message)`

**参数说明**：

- `message`: `string` 类型，必填，错误信息

**无返回值**

```ts
plugin.onMounted(() => {
  plugin.throwPluginError('插件出错了！') // [!code focus]
})
```

## plugin.saveConfig() <Badge type="warning" text="方法" />

将数据保存到插件数据目录（传入普通 JS 对象，储存为 JSON 格式）

函数签名：`saveConfig(data, [filepath], [options])`

**参数说明**：

- `data`: 可转为 `JSON` 的任何类型，必填
- `filepath`: `string` 类型，可选，保存的配置文件路径，默认为插件数据目录下的 `config.json`
- `options`: `fs.WriteOptions` 类型，可选，写入配置的选项

**返回值**：`boolean` 是否写入成功

```ts
const plugin = new kiviPlugin('demo', '0.1.0')

const config = plugin.loadConfig() // [!code focus]

plugin.onMounted(() => {
  plugin.saveConfig({ name: 'KiviBot' }) // [!code focus]
})
```

## plugin.loadConfig() <Badge type="warning" text="方法" />

从插件数据目录加载保存的数据（储存为 JSON 格式，读取为普通 JS 对象）

函数签名：`loadConfig([filepath], [options])`

**参数说明**：

- `filepath`: `string` 类型，可选，读取的配置文件路径，默认为插件数据目录下的 `config.json`
- `options`: `fs.ReadOptions` 类型，可选，读取配置的选项

**返回值**：解析后的数据对象

```ts
const plugin = new kiviPlugin('demo', '0.1.0')

const config = plugin.loadConfig() // [!code focus]

plugin.onMounted(() => {
  plugin.saveConfig({ name: 'kiviBot' }) // [!code focus]
})
```

## plugin.onMessage() <Badge type="warning" text="方法" />

添加消息监听函数，包括好友私聊、群消息以及讨论组消息，通过 `event.message_type` 判断消息类型。如果只需要监听特定的消息类型，请使用 `plugin.on` 监听。

函数签名：`onMessage(handler)`, 等价于 `plugin.on('message', handler)`

**参数说明**：

- `handler`: 消息处理函数，必填，默认传入消息事件（包含群、好友和讨论组消息）

**无返回值**

```ts
plugin.onMounted(() => {
  plugin.onMessage(event => /**  [!code focus] */ {
    event.reply('hi, ' + event.sender.user_id) // [!code focus]
  }) // [!code focus]
})
```

## plugin.onMatch() <Badge type="warning" text="方法" />

消息匹配函数，传入字符串或正则，或字符串和正则的数组，进行精确匹配，匹配成功则调用函数。

函数签名：`onMatch(matches, handler)`

**参数说明**：

- `matches`: 字符串或正则或字符串和正则的数组，必填，待匹配内容，对整个消息进行匹配
- `handler`: 消息处理函数，必填，默认传入消息事件（包含群、好友和讨论组消息）

**无返回值**

```ts
plugin.onMounted(() => {
  plugin.onMatch('天王盖地虎', (event) /**  [!code focus] */ => {
    event.reply('你就一米五') // [!code focus]
  }) // [!code focus]

  plugin.onMatch(/^hello/i, event => {
    event.reply('hi')
  })

  plugin.onMatch([/morning/i, 'evening'], event => {
    event.reply('you too')
  })
})
```

## plugin.onAdminMatch() <Badge type="warning" text="方法" />

与 `plugin.onMatch` 类似，不同之处在于 `onAdminMatch` 只会处理所有管理员消息。

## plugin.onCmd() <Badge type="warning" text="方法" />

添加命令监听函数，使用 [minimist](https://github.com/minimistjs/minimist) 进行命令、参数和选项的解析.

函数签名：`onCmd(cmds, handler)`

**参数说明**：

- `cmds`: 字符串或正则或字符串和正则的数组，必填，待匹配的命令
- `handler`: 消息处理函数，必填，默认传入消息事件（包含群、好友和讨论组消息）和 [minimist](https://github.com/minimistjs/minimist) 解析后的参数和选项

**无返回值**

```ts
plugin.onMounted(() => {
  plugin.onCmd('点歌', (event, params, options) /**  [!code focus] */ => {
    // 收到消息： "点歌 稻香 --type qq --n 2" // [!code focus]
    const [songName, ...otherParams] = params // [!code focus]
    const { n, type } = options // [!code focus]

    event.reply(`你点的歌是${type}平台的第${n}首${songName}`) // [!code focus]
  }) // [!code focus]

  plugin.onCmd([/morning/i, 'evening'], (event, params, options) => {
    event.reply('you too')
  })
})
```

## plugin.onAdminCmd() <Badge type="warning" text="方法" />

与 `plugin.onCmd` 类似，不同之处在于 `onAdminCmd` 只会处理所有管理员消息。

## plugin.cron() <Badge type="warning" text="方法" />

使用 `cron` 语法创建定时消息任务，内部使用 [node-cron](https://github.com/node-cron/node-cron) 实现。

> `cron` 语法说明参考[这里](https://github.com/node-cron/node-cron#cron-syntax)

函数签名：`cron(cronExpression, handler)`

**参数说明**：

- `cronExpression`: `string` 类型，必填，`cron` 表达式
- `handler`: 定时任务函数，默认传入 Bot 实例和 Bot 管理员列表

**返回值**: `node-cron` 的 `Task` 实例，可以调用其上的 `stop` 方法取消定时任务。

```ts
plugin.onMounted(() => {
  // 每 3 秒钟触发
  const task = plugin.cron('*/3 * * * * *', (bot, admins) /** [!code focus] */ => {
    admins.forEach((admin) /** [!code focus] */ => {
      bot.sendPrivateMsg(admin, 'cron trigger!') // [!code focus]
    }) // [!code focus]
  }) // [!code focus]

  // task.stop()
})
```

## plugin.log() <Badge type="warning" text="方法" />

打印消息到控制台，用于插件调试，等价于 `plugin.logger.log()`

## plugin.on() <Badge type="warning" text="方法" />

监听 `oicq` 标准事件，并使用 `hander` 处理。

函数签名：`on(eventName, handler)`

## plugin.off() <Badge type="warning" text="方法" />

取消监听 `oicq` 标准事件。

函数签名：`off(eventName, handler)`

## plugin.once() <Badge type="warning" text="方法" />

单次监听 `oicq` 标准事件，并使用 `hander` 处理。

函数签名：`on(eventName, handler)`
