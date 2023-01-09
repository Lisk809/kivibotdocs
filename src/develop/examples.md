# 插件示例 {#plugin-examples}

> 逐步完善中，可先参考 [`KiviPlugin API`](/api/plugin)。

::: danger 请注意
请不要把示例插件发布到 npm。
:::

## 一言插件

```js
const { KiviPlugin, http } = require('@kivibot/core')

const plugin = new KiviPlugin('一言', '1.0.0')

plugin.onMounted((bot, admins) => {
  plugin.onMessage(event => {
    const { raw_message } = event

    if (raw_message === '一言') {
      const { data } = http.get('https://v1.hitokoto.cn')

      plugin.log(data)

      event.reply(data.hitokoto)
    }
  })
})

module.exports = { plugin }
```
