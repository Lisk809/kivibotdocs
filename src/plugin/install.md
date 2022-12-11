# 安装插件

::: tip 提示
官方插件均会发布为 npm 插件，使用**消息指令**进行安装时不需要带上 `kivibot-plugin-` 前缀
:::

- `npm 插件` 通过 `/plugin add <name>` **消息指令**进行安装
- `本地插件` 将插件模块放到 `plugins` 目录下即可

**比如**：

"有道翻译"插件的 npm 包名为 `kivibot-plugin-youdao`，所以他的标识名为 `youdao`，那么你可以这样安装：

- 安装有道翻译：`/plugin add youdao`

- 启用有道翻译：`/plugin on youdao`
