# KiviBot 简介 {#KiviBot}

[![npm (scoped)](https://img.shields.io/npm/v/@kivibot/core?color=527dec&label=%40kivibot%2Fcore&style=flat-square)](https://www.npmjs.com/package/@kivibot/core)
[![dm](https://shields.io/npm/dm/@kivibot/core?label=downloads&style=flat-square)](https://www.npmjs.com/package/@kivibot/core)

[![npm (scoped)](https://img.shields.io/npm/v/kivibot?color=527dec&label=kivibot%20(cli)&style=flat-square)](https://www.npmjs.com/package/kivibot)
[![dm](https://shields.io/npm/dm/kivibot?label=downloads&style=flat-square)](https://www.npmjs.com/package/kivibot)

::: warning 请注意
框架仍处于**测试阶段**，可能会有潜在 `bug`，框架文档也正在完善中，敬请期待。
:::

`KiviBot` 是使用 [TypeScript](https://www.typescriptlang.org/) 语言编写的 **轻量**、**跨平台** QQ 机器人框架。

框架提供了完备的状态监控、插件管理（支持热更新）、主副管理员机制、消息通知、请求处理功能以及友好的脚手架，开箱即用。框架完全开源，可扩展性强，插件开发简单，核心底层协议使用 [oicq v2](https://github.com/takayama-lily/oicq)，API 众多，功能强大。另外，框架使用 [node](https://nodejs.org/) 驱动，得益于 node 及其高效的 v8 引擎，KiviBot 的性能可观。

本项目开发初衷在于提高群活跃氛围、方便群管理，仅供个人娱乐、学习和交流使用，**不得将本项目用于任何非法用途**。

## 为什么选择 KiviBot

- 🚲 **轻量**: 无需运行 UI，内存占用低，取决于设备状态、账号群聊数和活跃程度。

- ⚡ **高效**: 框架开发语言和底层协议语言一致，框架依赖少，执行效率高。

- 📱 **跨平台**: 不仅 Windows，Linux 能运行，手机和平板 (通过模拟 Linux 环境) 也能运行。

- 🔗 **多协议**: 支持安卓手机、安卓平板、iPad、安卓手表和 MacOS 协议。

- 📦 **注重体验**: 使用 QQ 消息配置框架，一条消息即可安装、启用、升级插件，极致的用户体验。

- 🚤 **极速开发**: 学习门槛低，只需几行 JS/TS 代码就能编写插件。

- 💻 **开发者友好**: 插件支持热重载，拥有友好的脚手架与完备的 TS 类型定义。

更多特征等你探索...

## 插件示例

仅需编写少量 JavaScript 代码即可实现丰富功能，只要你有 JavaScript 语言的基础，上手开发一个插件是非常简单的。参考下面给出的插件 Demo。

::: warning 请注意
框架仍处于**测试阶段**，插件的 API 随时可能发生较大更改，请勿用于生产环境。
:::

```js
const { KiviPlugin, segment, http } = require('@kivibot/core')

const plugin = new KiviPlugin('demo', '0.1.0')

plugin.onMounted(() => {
  plugin.onMessage(event => {
    const { raw_message } = event

    if (raw_message === 'hello') {
      const msgs = [segment.face(66), 'world']
      event.reply(msgs)
    }
  })
})

module.exports = { plugin }
```

详细插件 `API` 说明请参阅 [`KiviPlugin API`](/api/plugin)
