# 插件示例 {#plugin-examples}

> 逐步完善中，可先参考 [`KiviPlugin API`](/api/plugin)。

::: danger 请注意
请不要把示例插件发布到 npm。
:::

## 随机一言

```js
const { KiviPlugin, http } = require('@kivibot/core')

const plugin = new KiviPlugin('一言', '1.0.0')

plugin.onMounted((bot, admins) => {
  plugin.onMessage(async event => {
    const { raw_message } = event

    if (raw_message === '一言') {
      const { data } = await http.get('https://v1.hitokoto.cn')

      plugin.log(data)

      event.reply(data.hitokoto)
    }
  })
})

module.exports = { plugin }
```

## 扔骰子

```js
const { KiviPlugin, segment, randomItem, randomInt } = require('@kivibot/core')

const plugin = new KiviPlugin('骰子', '1.0.0')

const nums = [1, 2, 3, 4, 5, 6]

plugin.onMounted((bot, admins) => {
  plugin.onMessage(event => {
    const { raw_message } = event

    if (raw_message === '扔骰子') {
      const n = randomItem(nums) // 或使用 const n = randomInt(1, 6)
      const msg = segment.dice(n)

      event.reply(msg)
    }
  })
})

module.exports = { plugin }
```
