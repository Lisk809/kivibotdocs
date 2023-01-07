# KiviBot CLI 命令 {#cmd-cli}

KiviBot CLI 是框架的脚手架, 或叫命令行工具, 就是你启动框架的 `kivi` 命令。

> CLI 全称 Command Line Interface, 命令行界面。

你可以使用它来辅助生成配置文件、安装插件和依赖、启动框架等。

输入 `kivi` 命令即可查看 CLI 的详细用法, 下表列出了 CLI 的所有命令及其说明。

### KiviBot CLI 命令列表

| CLI 命令              | 功能与说明                                        |
| --------------------- | ------------------------------------------------- |
| `kivi`                | 显示 KiviBot CLI 命令帮助                         |
| `kivi -v`             | 显示 KiviBot CLI 版本号                           |
| `kivi init`           | 初始化框架配置和入口文件                          |
| `kivi init --force`   | 初始化框架配置和入口文件并覆盖原有配置            |
| `kivi init --switch`  | 切换登录的账号，重新引导生成配置但保留部分配置    |
| `kivi init --start`   | 初始化框架配置和入口文件并安装依赖且启动          |
| `kivi install`        | 安装依赖文件, 可选传入指定依赖进行安装            |
| `kivi start`          | 检查并安装必要依赖, 然后通过 `kivi.json` 启动框架 |
| `kivi deploy`         | 通过 `pm2` 将框架进程部署在后台                   |
| `kivi log`            | 查看 `pm2` 框架进程日志                           |
| `kivi list`           | 查看 `pm2` 后台进程列表                           |
| `kivi stop`           | 通过 `pm2` 停止框架进程                           |
| `kivi delete`         | 通过 `pm2` 删除后台框架进程                       |
| `kivi create`         | 生成插件开发模板, TS 建议使用[这个][1]插件模板    |
| `kivi update`         | 检查脚手架新版本, 并自动更新框架和其他依赖        |
| `kivi fix --device`   | 修复命令, `--device` 随机修改设备 `IMEI`          |
| `kivi fix --registry` | 修复命令, `--registry` 自动配置 npm 镜像源        |

[1]: https://github.com/KiviBotLab/kivibot-plugin-template-ts
