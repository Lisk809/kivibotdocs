# KiviBot 消息指令 {#cli-msg}

`KiviBot` 没有 UI 界面, 插件管理、管理变更、状态监控等操作都是通过 **QQ 消息指令**来实现的。向机器人发送 `/help` 可查看所有框架命令, **仅限管理员使用**, 私聊群聊均有效。

### 消息指令列表

下表列出了框架所有的消息指令, 尖括号代表此处应该填写变量, **实际发送的时候不需要加尖括号**, 请根据实际情况输入。

| 管理员消息指令               | 功能与说明                                                                      |
| ---------------------------- | ------------------------------------------------------------------------------- |
| `/help`                      | 显示框架命令列表                                                                |
| `/status`                    | 检测并上报当前机器人状态以及系统状态                                            |
| `/plugin`                    | 查看插件相关的消息指令及其格式                                                  |
| `/plugin list`               | 查看本地所有检测到的插件                                                        |
| `/plugin on <name>`          | 通过插件名启用指定插件                                                          |
| `/plugin reload <name>`      | 通过插件名重载指定插件                                                          |
| `/plugin off <name>`         | 通过插件名禁用指定插件                                                          |
| `/plugin onall`              | 启用所有检索到的插件                                                            |
| `/plugin offall`             | 禁用所有检索到的插件                                                            |
| `/plugin add <name>`         | 安装 npm 插件（`kivibot-plugin-` 前缀）                                         |
| `/plugin update <?name>`     | 更新 npm 插件（`kivibot-plugin-` 前缀）                                         |
| `/config`                    | 查看框架设置消息指令及其格式                                                    |
| `/config detail`             | 查看框架详细设置                                                                |
| `/config admin add <qq>`     | 添加机器人管理并立即生效                                                        |
| `/config admin rm <qq>`      | 删除机器人管理并立即生效                                                        |
| `/config notice on`          | 开启机器人消息通知, 通知仅通知主管理员                                          |
| `/config notice off`         | 关闭机器人消息通知, 通知仅通知主管理员                                          |
| `/config group <operation>`  | 设置好友邀请机器人进群的操作, 可选：ignore(忽略), accept(同意),refuse(拒绝)     |
| `/config friend <operation>` | 设置添加机器人为好友的请求的操作, 可选：ignore(忽略), accept(同意),refuse(拒绝) |
| `/update`                    | 更新框架依赖和 npm 插件                                                         |
| `/about`                     | 查看框架介绍                                                                    |
| `/exit`                      | 退出机器人进程                                                                  |
