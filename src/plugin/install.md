# 安装插件 {#install-plugin}

::: danger 请特别注意！
插件的版本号为 `0.0.0` 表示其仍在开发中, 请勿安装。
:::

- `npm 插件` 通过 `/plugin add <name>` **消息指令**进行安装
- `本地插件` 将插件模块放到 `plugins` 目录下即可

::: tip 小提示
官方插件均会发布为 npm 插件。
:::

**比如**：

"小爱同学"插件的 npm 包名为 `kivibot-plugin-ai`, 那么他的标识名就为 `ai`。

你可以这样使用：

- 安装：`/plugin add ai`

- 启用：`/plugin on ai`
