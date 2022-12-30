# 前置知识

`KiviBot` 可以使用 `JavaScript` / `TypeScript` 语言来开发插件。

框架最终运行的是符合 `CommonJS` 模块规范的 `JavaScript` 模块。

在开发前, 为提高开发效率, 同时减少不必要的提问, 请确保你具备以下前置知识：

1. 熟悉 `JavaScript` 的基本语法, 可前往[现代 JavaScript 教程](https://zh.javascript.info/) 的第一部分进行 `JavaScript` 语言基础的入门学习。

2. 熟悉 `JavaScript` 的模块化机制（`CommonJS`、`ESM`）

   - `CommonJS` 模块：参考 [node 官网对 `CommonJS` 的描述](https://nodejs.org/docs/latest-v18.x/api/modules.html#modules-commonjs-modules), 插件需采用这种写法规范。
   - `ESM` 模块：参考 [node 官网对 `ESM` 的描述](https://nodejs.org/docs/latest-v18.x/api/esm.html#introduction), `TypeScript` 遵循这种规范, 但请配置最终编译成 `CommonJS`。

3. 熟悉 `ES6` 的新特性（可选, 有助于提高开发效率）, 可前往[阮一峰的 ES6 入门教程](https://es6.ruanyifeng.com/), 熟悉 `const` 和 `let` 关键字, `解构赋值`, `箭头函数`, `async` 函数, `async` 和 `await` 关键字等。

> 大家都很忙, 如果你真的想自己开发插件, 请确保有上面这些语言基础, 不然在浪费大家时间的同时, 你自己也寸步难行。

<!-- ## 附: CommonJS vs ESM

### CommonJS 的基本语法

CommonJS 也称为 CJS, CommonJS 是动态引入, 可以在执行时引入, 所以可以在逻辑代码中进行引入。

**最终运行的插件代码必须符合 CommonJS 规范。**

```js
// module.js
module.exports = {
  a: function () {
    console.log('exports from module')
  }
}
// sample.js
var obj = require('./module.js')
obj.a() // exports from module
```

### ESM 的基本语法

> ESM 全称为 ECMAScript Modules, 也称 ES Modules。

ESM 是静态引入的, 会在编译时被引入, 必须放在最顶层。

```js
// ES Modules 有三种导出方式：

// 1.变量函数声明导出：
export const name = 'sheben'
export function bar(){..}

// 2.命名导出
const name = 'sheben'
function bar(){..}
export {name, bar}

// 3.默认导出文件
export default {
  a: function() {
    console.log('export from module');
  }
}


// ES6 Modules 有四种加载方式:

// 1.按需导入：导入的变量名字必须和导出的变量名一致。
import { foo, bar } from './foo'

// 2.全部导入：（命名空间导入）
import * as util from './util'

// 3.导入(export default)：可以取任意名字, 因为一个模块只有一个export default, 可以省略大括号。
import _ from 'lodash'

// 4.只运行模块而不引入任何模块中的方法或变量。
import 'lodash'
``` -->
