# KiviBot CLI 命令

KiviBot CLI 是 KiviBot 的脚手架，或者叫命令行工具（就是你启动框架的 `kivi` 命令），用来辅助生成配置文件、安装插件和依赖、启动框架、部署框架等。

输入 `kivi` 命令即可查看 CLI 的详细用法，下表列出了 CLI 的所有命令及其说明。

### KiviBot CLI 命令列表

| CLI 命令        | 功能与说明                                      |
| --------------------- | ----------------------------------------------- |
| `kivi`                | 显示 KiviBot CLI 命令帮助                       |
| `kivi init`           | 初始化 `kivi.json` 与 `app.js`                  |
| `kivi init --force`   | 初始化 `kivi.json` 与 `app.js` 并覆盖原有配置   |
| `kivi init --install` | 初始化 `kivi.json` 与 `app.js` 并安装依赖       |
| `kivi init --start`   | 初始化 `kivi.json` 与 `app.js` 并安装依赖且启动 |
| `kivi install`        | 安装依赖文件，可选传入指定依赖进行安装          |
| `kivi start`          | 通过生成的 `kivi.json` 配置文件启动框架         |
| `kivi deploy`         | 通过 `pm2` 将框架进程部署在后台                 |
| `kivi log`            | 查看 `pm2` 框架进程日志                         |
| `kivi stop`           | 通过 `pm2` 停止框架进程                         |
| `kivi create`         | 引导生成插件开发模板，支持 JS/TS                |
| `kivi update`         | 检查脚手架新版本，并自动更新框架和其他依赖      |
| `kivi fix --device`   | 修复命令，`--device` 随机修改设备 `IMEI`        |
