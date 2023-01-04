# 基础知识 {#basic}

如果你收到了 Bot 的上线提醒, 那么恭喜你, Bot 已经成功跑起来啦！

现在, 你可以向机器人发送 `/help` 消息指令来查看框架所有支持的指令列表。

> [消息指令](/guide/cmd/msg)章节中有详细的消息指令说明。

框架本身仅提供**插件管理**、**管理员机制**、**事件通知**和**请求自动处理**的基础功能, 其他的应用性功能你需要**安装插件**来实现。

> 插件分为 `npm` 插件和本地插件，你可以到[插件说明](/plugin/note)章节了解更多。

**如果你对 JavaScript 比较熟悉**

你可以阅读[开发板块](/develop/prerequisite)并参考 [KiviPlugin API](/api/plugin), 自行开发强大的 Bot 插件, 可以的话也推荐你发布到 npm, 丰富社区生态。如果你对 TypeScript 也很熟悉，这里有一个[开箱即用的 TS 插件开发模板](https://github.com/KiviBotLab/kivibot-plugin-template-ts)，也许对你有帮助。

**如果你不会写 JavaScript**

也没有关系, 你可以先阅读[插件说明](/plugin/note), 了解插件的基本知识, 然后到插件板块查看已发布的[官方插件](/plugin/official)和[npm 插件](/plugin/list)列表, 然后查看插件说明，按照相关说明进行安装和配置。

此外, 如果你在使用 CLI （`kivi` 命令）初始化配置、部署框架的时候遇到了问题, 也可以参考 [CLI 命令](/guide/cmd/cli)章节和[常见问题](/guide/faq)章节，希望能解决你的问题。

如果你有一定的计算机基础, 也可以参考[配置文件](/guide/config)（`kivi.json` 文件）章节, 自行修改相关配置（比如登录协议、事件通知状态、请求自动处理操作等）, 让 Bot 最大程度符合你的需求。
