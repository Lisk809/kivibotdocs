# KiviBot CLI 命令

KiviBot CLI 是 KiviBot 的脚手架，或者叫命令行工具，用来生成配置文件、安装插件和依赖、启动框架、部署框架等。

输入 `kivi` 命令即可查看详细用法，下表列出了所有命令及其说明。

### CLI 命令列表

下表列出了框架所有的管理员消息命令列表

消息命令里的尖括号代表此处应该填写变量，**实际发送的时候不需要加尖括号**，按实际情况输入

| 管理员消息命令        | 功能与说明                                      |
| --------------------- | ----------------------------------------------- |
| `kivi`                | 显示 KiviBot CLI 命令帮助                       |
| `kivi init`           | 初始化 KiviBot 配置文件                         |
| `kivi init --force`   | 初始化 KiviBot 配置文件（覆盖原有配置）         |
| `kivi init --install` | 初始化 KiviBot 配置文件，同时安装依赖           |
| `kivi init --start`   | 初始化 KiviBot 配置文件，同时安装依赖并启动框架 |
| `kivi install`        | 安装依赖文件，可选传入指定依赖进行安装          |
| `kivi start`          | 通过生成的 `kivi.json` 配置文件启动框架         |
| `kivi deploy`         | 通过 pm2 将框架进程部署在后台                   |
| `kivi log`            | 查看 pm2 框架进程日志                           |
| `kivi stop`           | 通过 pm2 停止框架进程                           |
| `kivi create`         | 引导生成插件开发模板，支持 JS/TS                |
| `kivi update`         | 检查更新脚手架，并更新框架和依赖                |
| `kivi fix --device`   | 修复命令，--device 修改设备 IMEI                |
