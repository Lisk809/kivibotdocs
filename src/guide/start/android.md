# 在 Android 平台使用 KiviBot {#android}

## 安装 Termux APP {#install-termux}

到 [GitHub](https://github.com/termux/termux-app/releases) 下载 Termux 的 APK 安装包, 优先选择 `arm64-v8a` 版本, 不可用再尝试使用其他版本。

> 如果 GitHub 打不开或者下载速度太慢，可以到[交流群](https://jq.qq.com/?_wv=1027&k=iK97X7NS)的群文件下载。

## 配置 Termux 国内镜像源 {#change-source}

可以使用如下命令自动替换官方源为阿里云镜像源，命令来自[阿里云镜像站](https://developer.aliyun.com/mirror/termux)。

```shell
sed -i 's@^\(deb.*stable main\)$@#\1\ndeb https://mirrors.aliyun.com/termux/termux-packages-24 stable main@' $PREFIX/etc/apt/sources.list
sed -i 's@^\(deb.*games stable\)$@#\1\ndeb https://mirrors.aliyun.com/termux/game-packages-24 games stable@' $PREFIX/etc/apt/sources.list.d/game.list
sed -i 's@^\(deb.*science stable\)$@#\1\ndeb https://mirrors.aliyun.com/termux/science-packages-24 science stable@' $PREFIX/etc/apt/sources.list.d/science.list

pkg update
```

## 安装 Node.js {#install-nodejs}

```shell
pkg install nodejs
```

## 全局安装 KiviBot CLI {#install-kivibot}

```shell
npm i -g kivibot@latest
```

> 当然，你也可以选择不安装到全局，然后使用 `npx kivi` 来执行 CLI 命令。

如果速度慢, 考虑从国内源安装（仅作备用, 可能不是最新版本）

```shell
npm i -g kivibot@latest --registry https://registry.npmmirror.com
```

## 通过 CLI 引导生成配置文件 {#generate-config}

```shell
# 创建空目录作为框架目录, 并切换到这个目录
mkdir ~/bot && cd ~/bot
# 通过 CLI 引导在当前目录下生成配置文件
kivi init
```

## 启动 KiviBot {#start-kivibot}

```shell
kivi start
```

> 如果发现二维码显示异常, 可能是由于终端字体不兼容导致的, 请尝试手动打开 `框架目录/data/oicq/[qq]` 目录下的二维码图片进行扫码（有效期大约两分钟）。

## 后台部署（可选） {#deploy-kivibot}

```shell
kivi deploy
```

> CLI 将会使用 pm2 将框架进程部署到后台
