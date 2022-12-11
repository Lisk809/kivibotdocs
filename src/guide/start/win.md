# 将 KiviBot 部署到 Windows

## 安装 node

到 [node 官网](https://nodejs.org/)进行下载安装，建议 16/18 版本，最低不得低于 14

## 安装 KiviBot

```shell
npm i -g kivibot@latest --registry=https://registry.npmmirror.com/
```

## 生成配置文件并启动

创建一个空的目录，并在目录下执行：

```shell
kivi init --start
```

> 如果二维码显示异常，请尝试手动打开 `框架目录/data/oicq/[qq]` 目录下的二维码图片进行扫码。
