# 将 KiviBot 部署到 Linux

## 安装 node

到 [node 官网](https://nodejs.org/)进行下载安装

## 安装脚手架

```shell
npm i -g kivibot --registry=https://registry.npmmirror.com/
```

## 生成配置文件并启动

```shell
kivi init --start
```

> 如果二维码显示异常，请尝试手动打开 `data/oicq/qq` 目录下的二维码图片进行扫码。

## 后台部署

```shell
kivi deploy
```
