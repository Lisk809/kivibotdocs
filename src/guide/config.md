# 配置文件 {#config-file}

框架目录下的 `kivi.json` 是 `KiviBot` 的配置文件, 包含了一系列框架配置, 可以手动进行修改, 重启后生效。

> `kivi start` 命令会检索当前目录下的 `kivi.json` 配置文件以及 `app.js` 入口文件, 从而使用正确的配置启动框架。

## 字段说明

```jsonc
{
  // Bot QQ 账号, 由 CLI 引导生成
  "account": 114514, // [!code hl]

  // 登录方式, 由 CLI 引导生成, 可选 password（密码登录） 和 qrcode（扫码登录）
  "login_mode": "password", // [!code hl]

  // 设备锁验证方式, 选择密码登录时, 由 CLI 引导生成, 如果选扫码默认是验证码登录
  // 可选 sms（短信验证码验证） 和 qrcode（扫码验证）
  "device_mode": "sms", // [!code hl]

  // 框架日志消息显示模式, 默认为 short（精简模式, 忽略 CQ 码, 消耗资源少）
  // 也可设置为 detail（详细模式, 会显示 CQ 码具体内容, 对于调试插件有帮助）
  "message_mode": "short", // [!code hl]

  // Bot 账号密码, 在选择密码登录时, 由 CLI 引导生成, 如果选择扫码默认为空
  "password": "", // [!code hl]

  // 框架日志输出等级, 默认 info, 不输出日志可置为 off, 调试插件可以设为 debug
  "log_level": "info", // [!code hl]

  // 管理员列表, 由 CLI 引导生成, 第一个为主管理员（必须）, 其余的为副管理员（可选）
  "admins": [1141284758], // [!code hl]

  // 启用插件列表, 包括 npm 插件（kivibot-plugin- 开头）和 plugins 目录下的插件
  // npm 插件（kivibot-plugin- 开头）忽略 kivibot-plugin- 前缀
  "plugins": ["demo"], // [!code hl]

  // 机器人事件通知
  "notice": {
    // 是否启用, 可通过消息指令 `/config notice on` 和 `/config notice off` 进行实时切换
    "enable": true,

    // 好友列表相关配置
    "friend": {
      // 好友申请
      "request": {
        // 是否开启好友申请通知, 默认开启（true）, 不开启请设置为 false
        "enable": true,

        // 处理好友申请, 可选：ignore（忽略, 默认）, accept（同意）, refuse（拒绝）
        "action": "ignore"
      },

      // 新增好友通知, 默认开启（true）, 不开启请设置为 false
      "increase": true,

      // 好友减少通知, 默认开启（true）, 不开启请设置为 false
      "decrease": true,

      // 好友私聊消息通知, 默认关闭（false）, 开启请设置为 true
      "message": false
    },

    // 群聊相关配置
    "group": {
      // 邀请机器人进群
      "request": {
        // 是否开启通知, 默认开启（true）, 不开启请设置为 false
        "enable": true,

        // 处理群邀请, 可选：ignore（忽略, 默认）, accept（同意）, refuse（拒绝）
        "action": "ignore"
      },

      // 新增群聊通知, 默认开启（true）, 不开启请设置为 false
      "increase": true,

      // 新增群聊通知, 默认开启（true）, 不开启请设置为 false
      "decrease": true,

      // 机器人被禁言通知, 默认开启（true）, 不开启请设置为 false
      "ban": true,

      // 群管理员变动通知, 默认开启（true）, 不开启请设置为 false
      "admin": true,

      // 群转让通知, 默认开启（true）, 不开启请设置为 false
      "transfer": true
    }
  },

  // oicq 协议配置, 参考 oicq 文档, data 目录限制为 data/oicq, 无法手动修改
  "oicq_config": {
    // 登录协议：1 为安卓手机, 2 为安卓平板, 3 为安卓手表, 4 为 MacOS, 5 为 iPad
    "platform": 5,

    // oicq 的日志等级, oicq 日志会输出到框架目录的 log 文件夹下
    "log_level": "info",

    // 群聊中, 是否忽略机器人自身的消息, 默认忽略, 不忽略请改为 false
    "ignore_self": true,

    // 是否自动选择最优服务器, 默认开启, 关闭请改为 false
    // 关闭后会一直使用 msfwifi.3g.qq.com:8080 进行连接
    "auto_server": true,

    // 是否缓存群员列表, 默认缓存提高效率, 关闭后将大幅减小占用的内存
    "cache_group_member": true,

    // 网络问题导致掉线时的重连间隔, 默认 5（秒）, 设置为 0 不自动重连
    "reconn_interval": 5,

    // 被风控时是否尝试用分片发送, 默认 true, 不发送分片请设置为 false
    "resend": true,

    // 指定 ffprobe 路径
    "ffmpeg_path": "ffmpeg",

    // 指定 ffprobe 路径
    "ffprobe_path": "ffprobe"
  }
}
```

## `kivi.json` 简略例子

```json
{
  "account": 114514,
  "login_mode": "password",
  "device_mode": "sms",
  "message_mode": "short",
  "password": "",
  "log_level": "info",
  "admins": [1141284758],
  "plugins": ["demo"],
  "notice": {
    "enable": true,
    "friend": {
      "request": {
        "enable": true,
        "action": "ignore"
      },
      "increase": true,
      "decrease": true,
      "message": false
    },
    "group": {
      "request": {
        "enable": true,
        "action": "ignore"
      },
      "increase": true,
      "decrease": true,
      "ban": true,
      "admin": true,
      "transfer": true
    }
  },
  "oicq_config": {
    "platform": 5,
    "log_level": "info",
    "ignore_self": true,
    "auto_server": true,
    "cache_group_member": true,
    "reconn_interval": 5,
    "resend": true,
    "ffmpeg_path": "ffmpeg",
    "ffprobe_path": "ffprobe"
  }
}
```
