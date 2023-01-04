# 安装插件 {#install-plugin}

::: tip 小提示
官方插件均会发布为 npm 插件。
:::

- `npm 插件` 通过 `/plugin add <name>` **消息指令**进行安装
- `本地插件` 将插件模块目录放到 `plugins` 目录下即可，目录名即为插件标识

**插件安装示例**

比如"小爱同学"插件的包名为 `kivibot-plugin-ai`, 那么标识名就为 `ai`。

你可以这样安装使用：

- 安装：`/plugin add ai`

- 启用：`/plugin on ai`
