# Utils API {#utils-api}

除了 `KiviPlugin` 中封装了一些常用的用于消息处理的 API 之外, 框架的核心库 `@kivibot/core` 中也提炼并导出了**一系列常用的实用函数**, **属性**和 **TS 类型声明**等, 用来减少重复代码, 提高插件的开发效率。

## oicq 库中的所有导出

在编写插件时, 你不需要从 `oicq` 库中导入任何函数或类型, `@kivibot/core` 做了全部的导出, 直接从 `@kivibot/core` 中引入即可, 例如：

```diff
- import type { Client } from 'oicq'
+ import type { Client } from '@kivibot/core'
```

## 相关路径

```ts
/** node 当前执行路径 */
export const CWD = process.cwd()
/** 配置文件路径 */
export const ConfigPath = path.join(CWD, 'kivi.json')
/** 框架 node_modules 路径 */
export const NodeModulesDir = path.join(CWD, 'node_modules')
/** oicq 数据目录 */
export const OicqDataDir = path.join(CWD, 'data/oicq')
/** logs 日志目录 */
export const LogDir = path.join(CWD, 'logs')
/** plugins 插件目录 */
export const PluginDir = path.join(CWD, 'plugins')
/** plugins 插件数据目录 */
export const PluginDataDir = path.join(CWD, 'data/plugins')
```

## 各种类型

到模块目录下查看相关的 TS 类型声明。

## axios/http

框架内置了 axios, 如果你也习惯使用 axios 发起请求, 你可以引入使用 axios 简单封装过的 http, 或者直接引入 axiox, 无需额外安装 axios。

> 你可以前往 [GitHub](https://github.com/KiviBotLab/KiviBot/blob/main/src/utils/request.ts) 查看 http 的简单封装源码。

```diff
- import axios from 'axios'
+ import { axios } from '@kivibot/core'
+ import { http } from '@kivibot/core'
```

## dayjs/time

框架内置了 dayjs 用于处理时间, 它有着和 momentjs 同样的 API 但是更加精简, 如果你也习惯使用 dayjs 处理时间, 你可以引入简单封装的 time, 或者直接引入 dayjs 进行操作, 无需额外安装 dayjs 或者 momentjs。

```diff
- import dayjs from 'dayjs'
- import moment from 'moment'
+ import { dayjs } from '@kivibot/core'
+ import { time } from '@kivibot/core'
```

`time` 的函数签名如下

```ts
/**
 * 取格式化时间，默认当前时间，使用 dayjs 的 format 函数封装
 * @param {string | undefined} format 格式化模板，默认'YYYY-MM-DD HH:mm'
 * @param {Date | undefined} date 待格式化的时间，默认当前时间
 * @return {string} 格式化后的时间字符串
 */
export declare function time(format?: string, date?: Date): string
```

## wait

```ts
/**
 * 异步延时函数
 * @param {number} ms 等待毫秒数
 * @return {Promise<void>}
 */
export declare function wait(ms: number): Promise<void>
```

## md5

```ts
/**
 * MD5 加密
 * @param {BinaryLike} text 待 MD5 加密数据，可以是 `string` 字符串
 * @param {BinaryToTextEncoding | undefined} encoding 返回数据编码，不传返回 `Buffer`，可传 `hex` 等返回字符串
 * @return {Buffer | string} MD5 加密后的数据
 */
export declare function md5(text: BinaryLike, encoding?: BinaryToTextEncoding): string | Buffer
```

## qs

```ts
/**
 * JS 对象转换成 `urlencoded` 格式字符串 { name: 'Bob', age: 18 } => name=Bob&age=18
 * @param {Record<number | string, any>} obj JS 对象
 * @return {string} 转换后的字符串
 */
export declare function qs(obj: Record<number | string, any>): string
```

## randomInt

```ts
/**
 * 生成随机整数
 * @param {number} min 最小值
 * @param {number} max 最大值
 * @return {number} 随机范围内的整数
 */
export declare function randomInt(min: number, max: number): number
```

## randomItem

```ts
/**
 * 取数组内随机一项
 * @param {Array<T>} array 待操作数组
 * @return {T} 数组内的随机一项
 */
export declare function randomItem<T = any>(array: [T, ...T[]]): T
```

## parseUin

```ts
/**
 * 解析 qq，支持艾特，可以是 `1141284758` 或者是 `{at:1141284758}`
 *
 * @param {string} qqLikeStr 待解析的字符串
 * @return {number} 解析结果
 */
export declare function parseUin(qqLikeStr: string): number
```

## getTargetId

```ts
/**
 * 取消息来源的目标 id，私聊取好友QQ，群聊取群号，讨论组取讨论组号
 * @param {AllMessageEvent} event 消息事件参数
 * @return {number} 目标 id
 */
export declare function getTargetId(event: AllMessageEvent): number
```

## stringifyError

```ts
/**
 * 错误 stringify
 * @param {any} error 待处理错误
 * @return {string} stringify 结果
 */
export declare function stringifyError(error: any): string
```

## ensureArray

```ts
/**
 * 确保是数组
 * @param {T | T[]} value 确保是数组的值
 * @return {T[]} 数组结果
 */
export declare function ensureArray<T = any>(value: T | T[]): T[]
```

## getGroupAvatarLink

返回任意群聊的头像直链。

函数签名如下, size 为 `100` 或 `640` (高清)

```ts
function getGroupAvatarLink(group: number, size?: number): string
```

## getQQAvatarLink

返回任意 QQ 的头像直链。

函数签名如下, size 为 `100` 或 `640` (高清)

```ts
function getQQAvatarLink(qq: number, size?: number): string
```

## canBan

判断 Bot 是否有权限或者是否能够禁言目标群的目标 qq。

函数签名如下

```ts
export declare function canBan(this: Client, gid: number, qq: number): Promise<boolean>
```

使用示例

```js
import { canBan } from '@kivibot/core'

const hasRight = await canBan.call(bot, 12345678, 123456)
```

## makeForwardMsg

对 oicq 的消息记录合并转发做了修改, 支持自定义标题和预览内容。

函数签名如下

```ts
/** 制作合并转发消息，可自定义标题、内容、底部说明文字 */
export declare function makeForwardMsg(
  this: Client,
  msglist: Forwardable[] | Forwardable,
  title?: string,
  desc?: string,
  dm?: boolean
): Promise<XmlElem>
```

使用示例

```js
import { makeForwardMsg } from '@kivibot/core'

const msg = await makeForwardMsg.call(
  bot,
  [
    {
      nickname: 'Viki',
      user_id: 1141284758,
      message: 'Hello'
    }
  ],
  '来自 Viki 的消息',
  'Hello'
)
```

## uploadFileToDir

上传本地文件到指定群的指定文件夹。（不存在时自动创建）

函数签名如下

```ts
export declare function uploadFileToDir(
  this: Client,
  group: number,
  filepath: string,
  uploadFilename?: string,
  dirname?: string
): Promise<boolean>
```

使用示例

```js
import { uploadFileToDir } from '@kivibot/core'

const isOK = await uploadFileToDir.call(bot, group_id, filepath, 'config.json', bot.uin)
```
