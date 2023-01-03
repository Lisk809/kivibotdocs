# oicq v2 标准事件 {#oicq_v2-events}

要查看事件详情、回调参数等，请参阅 `oicq` v2 文档的 [`EventMap`](https://oicqjs.github.io/oicq/interfaces/EventMap.html) 定义。

> 可以用插件 API [`plugin.on`](/api/plugin#plugin-on) 监听和处理 oicq 事件。

## message

消息事件（私聊、群聊、讨论组、临时消息、私聊自身等）

- [`message`](https://oicqjs.github.io/oicq/interfaces/EventMap.html#message)
- [`message.private`](https://oicqjs.github.io/oicq/interfaces/EventMap.html#message_private)
- [`message.private.friend`](https://oicqjs.github.io/oicq/interfaces/EventMap.html#message_private_friend)
- [`message.private.group`](https://oicqjs.github.io/oicq/interfaces/EventMap.html#message_private_group)
- [`message.private.other`](https://oicqjs.github.io/oicq/interfaces/EventMap.html#message_private_other)
- [`message.private.self`](https://oicqjs.github.io/oicq/interfaces/EventMap.html#message_private_self)
- [`message.group`](https://oicqjs.github.io/oicq/interfaces/EventMap.html#message_group)
- [`message.group.normal`](https://oicqjs.github.io/oicq/interfaces/EventMap.html#message_group_normal)
- [`message.group.anonymous`](https://oicqjs.github.io/oicq/interfaces/EventMap.html#message_group_anonymous)
- [`message.discuss`](https://oicqjs.github.io/oicq/interfaces/EventMap.html#message_discuss)

## notice

通知事件（列表、群管理员、群主变更、戳一戳、禁言等）

- [`notice`](https://oicqjs.github.io/oicq/interfaces/EventMap.html#notice)
- [`notice.friend`](https://oicqjs.github.io/oicq/interfaces/EventMap.html#notice_friend)
- [`notice.friend.increase`](https://oicqjs.github.io/oicq/interfaces/EventMap.html#notice_friend_increase)
- [`notice.friend.decrease`](https://oicqjs.github.io/oicq/interfaces/EventMap.html#notice_friend_decrease)
- [`notice.friend.recall`](https://oicqjs.github.io/oicq/interfaces/EventMap.html#notice_friend_recall)
- [`notice.friend.poke`](https://oicqjs.github.io/oicq/interfaces/EventMap.html#notice_friend_poke)
- [`notice.group`](https://oicqjs.github.io/oicq/interfaces/EventMap.html#notice_group)
- [`notice.group.increase`](https://oicqjs.github.io/oicq/interfaces/EventMap.html#notice_group_increase)
- [`notice.group.decrease`](https://oicqjs.github.io/oicq/interfaces/EventMap.html#notice_group_decrease)
- [`notice.group.recall`](https://oicqjs.github.io/oicq/interfaces/EventMap.html#notice_group_recall)
- [`notice.group.admin`](https://oicqjs.github.io/oicq/interfaces/EventMap.html#notice_group_admin)
- [`notice.group.ban`](https://oicqjs.github.io/oicq/interfaces/EventMap.html#notice_group_ban)
- [`notice.group.transfer`](https://oicqjs.github.io/oicq/interfaces/EventMap.html#notice_group_transfer)
- [`notice.group.poke`](https://oicqjs.github.io/oicq/interfaces/EventMap.html#notice_group_poke)

## request

请求事件（加群申请、邀请进群、好友申请、单项好友添加等）

- [`request`](https://oicqjs.github.io/oicq/interfaces/EventMap.html#request)
- [`request.friend`](https://oicqjs.github.io/oicq/interfaces/EventMap.html#request_friend)
- [`request.friend.add`](https://oicqjs.github.io/oicq/interfaces/EventMap.html#request_friend_add)
- [`request.friend.single`](https://oicqjs.github.io/oicq/interfaces/EventMap.html#request_friend_single)
- [`request.group`](https://oicqjs.github.io/oicq/interfaces/EventMap.html#request_group)
- [`request.group.add`](https://oicqjs.github.io/oicq/interfaces/EventMap.html#request_group_add)
- [`request.group.invite`](https://oicqjs.github.io/oicq/interfaces/EventMap.html#request_group_invite)
-

## sync

同一账号的其他客户端做了某些操作而触发的事件。

- [`sync.message`](https://oicqjs.github.io/oicq/interfaces/EventMap.html#sync_message)
- [`sync.read.private`](https://oicqjs.github.io/oicq/interfaces/EventMap.html#sync_read_private)
- [`sync.read.group`](https://oicqjs.github.io/oicq/interfaces/EventMap.html#sync_read_group)
- [`sync.read`](https://oicqjs.github.io/oicq/interfaces/EventMap.html#sync_read)

## system

系统事件（账号登录、上线、离线、被冻结等）

- [`system.login.qrcode`](https://oicqjs.github.io/oicq/interfaces/EventMap.html#system_login_qrcode)
- [`system.login.slider`](https://oicqjs.github.io/oicq/interfaces/EventMap.html#system_login_slider)
- [`system.login.device`](https://oicqjs.github.io/oicq/interfaces/EventMap.html#system)
- [`system.login.error`](https://oicqjs.github.io/oicq/interfaces/EventMap.html#system_login_error)
- [`system.online`](https://oicqjs.github.io/oicq/interfaces/EventMap.html#system_online)
- [`system.offline`](https://oicqjs.github.io/oicq/interfaces/EventMap.html#system_offline)
- [`system.offline.network`](https://oicqjs.github.io/oicq/interfaces/EventMap.html#system_offline_network)
- [`system.offline.kickoff`](https://oicqjs.github.io/oicq/interfaces/EventMap.html#system_offline_kickoff)

## 其他

- [`internal.sso`](https://oicqjs.github.io/oicq/interfaces/EventMap.html#internal_sso)
- [`internal.input`](https://oicqjs.github.io/oicq/interfaces/EventMap.html#internal_input)
- [`guild.message`](https://oicqjs.github.io/oicq/interfaces/EventMap.html#guild_message)
