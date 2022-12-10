# KiviBot 标准事件

## kivi.admin <Badge type="warning" text="不推荐" />

::: info 小提示
请直接访问 `plugin.admins`, `plugin.mainAdmin` 和 `plugin.subAdmins`。

插件类内部会自动监听这个事件，并自动更新，以确保获取到的管理员列表是实时的。
:::

`KiviBot` 管理员变动事件。

**事件参数**:

- `admins`: `string` 数组类型，新的管理员列表
