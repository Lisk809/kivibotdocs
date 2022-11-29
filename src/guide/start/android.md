# 将 KiviBot 部署到 Android

## 安装 Termux

到 GitHub 仓库下载对应平台 APK：[Termux - GitHub Releases](https://github.com/termux/termux-app/releases)，优先考虑 `arm64-v8a` 版本，不可用再尝试其他版本。

## 切换国内源

```shell
sed -i 's@packages.termux.org@mirrors.ustc.edu.cn/termux@' $PREFIX/etc/apt/sources.list
pkg up
```

## 安装 node

```shell
pkg install nodejs
```

## 安装脚手架

```shell
npm i -g kivibot --registry=https://registry.npmmirror.com/
```

## 生成配置文件并启动

```shell
mkdir ~/bot && cd ~/bot
kivi init --start
```

> 如果二维码显示异常，请尝试手动打开 `data/oicq/qq` 目录下的二维码图片进行扫码。

## 后台部署

```shell
kivi deploy
```
