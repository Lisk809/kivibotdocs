# 在 Android 平台使用 KiviBot {#android}

## 安装 Termux APP

到 [GitHub](https://github.com/termux/termux-app/releases) 下载 Termux 的 APK 安装包, 优先选择 `arm64-v8a` 版本, 不可用再尝试使用其他版本。

## 配置 Termux 国内镜像源

```shell
match='s@packages.termux.org@mirrors.ustc.edu.cn/termux@'
sed -i $match $PREFIX/etc/apt/sources.list
pkg up
```

## 安装 Node.js

```shell
pkg install nodejs
```

## 安装 KiviBot CLI

```shell
npm i -g kivibot@latest
```

如果速度慢, 考虑从国内源安装（仅作备用, 可能不是最新版本）

```shell
npm i -g kivibot@latest --registry https://registry.npmmirror.com
```

## 通过 CLI 引导生成配置文件

```shell
# 创建空目录作为框架目录, 并切换到这个目录
mkdir ~/bot && cd ~/bot
# 引导生成配置文件
kivi init
```

## 启动 KiviBot

```shell
kivi start
```

如果发现二维码显示异常, 可能是由于终端字体不兼容导致的, 请尝试手动打开 `框架目录/data/oicq/[qq]` 目录下的二维码图片进行扫码（有效期大约两分钟）。

## 后台部署（可选）

```shell
kivi deploy
```
