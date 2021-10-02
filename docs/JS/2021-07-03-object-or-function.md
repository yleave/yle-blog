---
slug: object-or-function
title: Object or Function-JS 中的鸡与蛋问题
---

import Highlight from '@site/src/components/Highlight';
import { BlogComponent } from '@site/src/components/CustomComponent';
import Comment from '@site/src/components/Comment';

<BlogComponent tags={['JS']} time="2021-07-03" />

&emsp;&emsp;JS 中有一个奇怪的现象：

<img src="https://gitee.com/ylea/imagehost1/raw/master/img/image-20210703205356945.png" alt="image-20210703205356945" style={{zoom:"80%"}} />

&emsp;&emsp;我们知道，**`instanceof` 关键字是用于判断左值的原型链上是否存在右值**，那按照这样的话不就是说 `Object` 和 `Function` 存在循环继承了吗？

&emsp;&emsp;那 Function 和 Object 的关系到底是什么呢？

## 探究

&emsp;&emsp;其实对于所有构造函数/类，其 `__proto__` 属性都是指向了一个函数：`ƒ () { [native code] }`，而 `Function` 的 `prototype` 属性也指向了这个函数：

<img src="https://gitee.com/ylea/imagehost1/raw/master/img/image-20210222154938304.png" alt="image-20210222154938304" style={{zoom:"80%"}} />

&emsp;&emsp;而这个 `[naitve code]` 函数的 `__proto__` 指向了 `Object.prototype`，因此可以说函数也是对象，所以 JS 中的所有对象都是由 `Object.prototype` 衍生出来的。



&emsp;&emsp;因此，第一张图片中的几种表现就得到了解释：

`Function instanceof Function` : `Function.prototype === Function.__proto__`

`Object instanceof Object` : `Object.prototype === Object.__proto__.__proto__`

`Function instanceof Object` : `Function.prototype === Object.__proto__`

`Object instanceof Function` : `Object.prototype === Function.__proto__`



> &emsp;&emsp;ES6 中，使用 extends 继承的子类，其 `__proto__` 属性是指向其父类而不是 `[native code]`，这样就能继承父类中的静态方法了。

> 关于 JS 中的继承：
>
> &emsp;&emsp;原型链是基于 `__proto__` 形成的，继承是通过 `prototype` 实现的。
>
> &emsp;&emsp;函数拥有`prototype` 属性，该属性值是一个`object`类型。当函数 A 创建对象 B (实例) 的时候，B 对象的 `__proto__` 会指向 `A.prototype`，这就是 JS 的继承。

&emsp;&emsp;再上一张网上广为流传的 JS 继承图帮助理解：

<img src="https://gitee.com/ylea/imagehost1/raw/master/img/prototype.jpg" style={{zoom:"80%"}} />

&emsp;&emsp;从这张图中可以清楚的看到：所有对象的源头都是 `Object.prototype`



## 小结

&emsp;&emsp;对于 Function 和 Object 的先后问题我觉得应该是要归于 `Function.prototype` 和 `Object.prototype` 的先后问题。

&emsp;&emsp;而在 JS 中，任何构造函数都是基于 `Function.prototype` 创建的，因此它们的 `__proto__` 属性都是指向 `Function.prototype`，包括 Function 自身。

&emsp;&emsp;**不过，一切对象的始祖都是 `Object.prototype`，因为 `Fcuntion.prototype.__proto__` 是 `Object.prototype`。**

---

&emsp;&emsp;以上就是个人关于 Function 和 Object 先后的理解，有什么不同看法欢迎在评论区讨论~

<Comment />
