# KiviBot 标准事件 {#kivibot-events}

> 可以用插件 API [`plugin.on`](/api/plugin#plugin-on) 监听和处理 KiviBot 标准事件。

## `kivi.admin` <Badge type="warning" text="不推荐" />

::: info 小提示
请直接访问 `plugin.admins`, `plugin.mainAdmin` 和 `plugin.subAdmins`。

插件类内部会自动监听这个事件, 并自动更新, 以确保获取到的管理员列表是实时的。
:::

`KiviBot` 管理员变动事件。

**事件回调参数**:

- `admins`: `string[]` 类型, 新的管理员列表

```js
plugin.onMounted(() => {
  plugin.on('kivi.admin', admins => {
    plugin.log('框架管理员更新了，新管理员列表: ' + admins.join(', '))
  })
})
```
