---
slug: front-end-code
title: 前端代码题1
---

import Highlight from '@site/src/components/Highlight';
import { InterviewComponent } from '@site/src/components/CustomComponent';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Comment from '@site/src/components/Comment';
import MarkdownInCollapse from '@site/src/components/MarkdownInCollapse';


<InterviewComponent time="2021-10-03" lastUpdate='2021-10-4' />

## 1. 节流和防抖

&emsp;&emsp;对于一些频繁的操作，如对窗口的 `resize`、`scroll`、输入框内容改动响应时，如果相应处理函数没有频率限制的话，会加重浏览器的负担，导致用户体验差，而防抖(debounce) 和节流(throttle) 可以有效减少处理函数的调用频率，同时不影响实际效果。

&emsp;&emsp;节流和防抖这边只提供几个基本版本，有更多功能的节流防抖函数实现可移步：[跟着underscore学防抖、节流](https://github.com/mqyqingfeng/Blog/issues/22)

### 防抖

&emsp;&emsp;在一个连续（时间间隔很短）的操作中，处理函数只会执行一次。

&emsp;&emsp;也即触发高频事件后，会生成一个计时器进行计时，在规定的时间内重新触发这个事件会使计时器重新计算时间，只有在计时器计时完成后，才能再次触发这个事件。

&emsp;&emsp;因此实现思路就是使用一个定时器延迟调用处理函数，每次触发事件后都取消之前延迟调用的方法。

```js
function debounce(fn, wait) {
    let timeout = null;
    return function() {
        // 每当用户输入的时候把前一个 setTimeout clear 掉
        clearTimeout(timeout); 
        // 然后又创建一个新的 setTimeout, 这样就能保证输入字符后的 interval 间隔内如果还有字符输入的话，就不会执行 fn 函数
        timeout = setTimeout(() => {
            // this 确保当前指向的对象是调用函数的对象，如 input 对象
            fn.apply(this, arguments);
        }, wait);
    };
}
```

&emsp;&emsp;在上述的防抖函数中，如果高频事件被持续触发，那么只有在最后一次触发结束的 `wait` 毫秒后，事件处理函数才会被执行。因此这种方式实现的防抖函数被称作延迟执行的防抖函数。

&emsp;&emsp;相对于延迟执行的防抖函数，还有一个能够立即执行的防抖函数。是否需要立即执行可使用一个参数 `immediate` 来进行控制，当 `immediate` 为 `true` 时，立即执行函数，在 `wait` 秒后才能重新触发（即当 `timer` 为 `null` 时）。

```js
function immedDebounce(fn, wait, immediate) {
    let timer = null;
    return function() {
        if (timer) {
            clearTimeout(timer);
        }

        if (immediate) {
            // timer 初始为 null，因此能够立即执行
            let callNow = !timer;

            // 在 wait 毫秒后重置 timer 为 null
            timer = setTimeout(() => {
                timer = null;
            }, wait);

            if (callNow) {
                fn.apply(this, arguments);
            }
        } else {
            timer = setTimeout(() => {
                fn.apply(this, arguments);
            }, wait);
        }
    }
}
```

&emsp;&emsp;防抖的实现除了使用计时器外，还能使用时间戳记录的方式实现，一个立即执行的防抖函数如：

```js
function debounce(fn, wait) {
  let activeTime = 0;
  return function() {
    const now = +new Date();

    // 若已等待了 wait 毫秒，则能重新触发
    if (now - activeTime >= wait) {
      fn.apply(this, arguments);
    }
    
    activeTime = now;
  };
}
```

#### 防抖实例

&emsp;&emsp;有一个按钮，点击后会打印出 'hello'，每点击一次需要等待 500 毫秒才能重新执行，若持续点击也只会执行一次：

```js
function sayHello() {
    console.log('hello');
}

const btn = document.createElement('button');
btn.innerText = '点击输出hello';

document.body.appendChild(btn);

// 上文中的能设置是否立即执行的防抖函数
let debounced_hello = immedDebounce(sayHello, 500, true);
btn.addEventListener('click', debounced_hello);
```

### 节流

&emsp;&emsp;高频事件的连续触发在 `n` 秒内只会执行一次响应函数。也即是按照时间间隔进行事件响应，在一个时间间隔内，响应函数只会被执行一次，因此节流会稀释函数的执行频率。

&emsp;&emsp;与防抖实现相似，节流也能使用定时器与时间戳实现，且根据节流函数在每一个时间间隔中的的执行时机，分为头执行与尾执行（时间间隔开头理解执行与时间间隔结尾执行）。

#### 使用定时器

&emsp;&emsp;节流函数在每次触发时都对当前是否有一个待执行的函数进行判断，只有当上一个函数执行完后，才开始下一轮的定时任务。

&emsp;&emsp;以下是尾执行的节流函数：

```js
function throttle(fn, wait) {
  let timer = null;

  return function() {
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(null, arguments);
        timer = null;
      }, wait);
    }
  };
}
```

&emsp;&emsp;以下是使用定时器的头执行的节流函数：

```js
function throttle(fn, wait) {
    let timer = null;

    return function() {
        if (!timer) {
            // 将执行函数放外面 就有立即执行的效果了
            fn.apply(this, arguments);
            timer = setTimeout(() => {
                timer = null;
            }, wait);
        }
    };
}
```


#### 使用时间戳

&emsp;&emsp;根据时间戳来判断两次响应的间隔是否大于设置的间隔，大于才能执行下一次响应函数。这种方法**响应函数 `fn` 会立即执行（头执行）。

```js
function throttle(fn, time) {
    let activeTime = 0;
    reutrn () => {
        const current = Date.now(); // +new Date()
        if (current - activeTime > time) {
            fn.apply(this, arguments);
            activeTime = current;
        }
    };
}
```

#### 节流实例

&emsp;&emsp;示例：当窗口进行缩放时，一秒内只会执行一次打印窗口大小的节流函数(节流函数用上文任意一个都行)。

```js
function print(e) {
    console.log(e.target.innerWidth, e.target.innerHeight);
}

window.addEventListener('resize', throttle(print, 1500));
```

## 2. 深拷贝和浅拷贝

&emsp;&emsp;浅拷贝和深拷贝都只针对于引用数据类型，它们的区别用一张图来说就是：

<img src="https://gitee.com/ylea/imagehost/raw/master/img/13263206-c651dc07788bf561.png" style={{zoom: "33%"}} />

&emsp;&emsp;图中的每个节点相当于对象的嵌套层次，浅拷贝只会复制对象的第一层元素，若其有嵌套的对象，那么这些嵌套对象的引用都是相同的；而深拷贝的复制会包括这些嵌套的对象，因此复制出的对象会是两个完全不同的对象。

### 浅拷贝

&emsp;&emsp;浅拷贝的实现方式有多种：

1. `Object.assign`
   
   ```js
    const obj2 = Object.assign({}, obj);
   ```
2. 展开运算符
   
   ```js
   const obj2 = {...obj};
   ```

3. 循环遍历
   
  &emsp;&emsp;在下面的遍历中，因为 `Object.entries` 不会遍历原型链上的属性，因此不需要使用 `obj.hasOwnProperty` 来验证是否是自身的属性，若是使用 `for in` 遍历对象则需要。

   ```js
    function shallowCopy(obj) {
      if (!obj || typeof obj !== 'object') {
          return obj;
      }
      const obj2 = Array.isArray(obj) ? [] : {};
      for (let [key, value] of Object.entries(obj)) {
          obj2[key] = value;
      }

      return obj2;
  }
  const obj2 = shallowCopy(obj);
   ```

4. 数组浅拷贝
   
   &emsp;&emsp;可使用 `slice`、`concat` 以及 `Array.from` 方法来实现数组对象的浅拷贝。这几个方法都不会改变原数组，它们会返回一个新数组：

   ```js
  const arr2 = arr.slice();

  const arr3 = arr.concat([]); // [].concat(arr);

  const arr4 = Array.from(arr3);
   ```
### 深拷贝

&emsp;&emsp;在进行深拷贝时需要考虑**循环引用**与特殊对象的拷贝问题。

&emsp;&emsp;如果遇到复杂对象，可以使用工具库，比如 lodash 的 [cloneDeep](https://www.lodashjs.com/docs/lodash.cloneDeep/) 方法。


1. JSON.parse 和 JSON.stringfy

  ```js
  const obj2 = JSON.parse(JSON.stringify(obj));
  ```

  &emsp;&emsp;缺陷：会忽略`undefined`、`任意的函数`、`symbol` 值，且它能正确处理的对象只有 `Number`、 `String`、 `Boolean`、 `Array` 和扁平对象。也就是说，只有可以转成 JSON 格式的对象才可以这样用，像 `function` 就没办法转成 JSON，此外特殊的对象如 `RegExp`、`Date`、`Set`、`Map` 等也无法使用这个方法进行深拷贝。

  2. 稍为完备的深拷贝

  &emsp;&emsp;使用了 `WeakMap` 解决了循环引用问题，且不会造成内存泄漏。

  &emsp;&emsp;能应对 `RegExp`、`Date`、`Function`、`Map`、`Set` 等特殊对象的拷贝。
  
  ```js
  function deepClone(obj, map=new WeakMap()) {
    // 处理 null 和 undefined
    if (obj == null) return obj;

    // 若是基本类型，直接返回
    if (typeof obj !== 'object' && typeof obj !== 'function') return obj;

    // 处理 Date 和 RegExp
    if (obj instanceof Date) return new Date(obj);
    if (obj instanceof RegExp) return new RegExp(obj.source, obj.flags);

    // 使用 map 解决循环引用问题
    if (map.has(obj)) return map.get(obj);

    // 处理函数对象 返回一个新函数，在调用这个函数时会返回原本函数的执行结果
    if (obj instanceof Function) {
        return function() {
            return obj.apply(this, [...arguments]);
        }
    }

    // 下面是 数组/普通对象/Set/Map 的处理

    // 从其原型链中继承的 constructor
    const res = new obj.constructor();

    // 设置 map 以处理循环引用问题
    map.set(obj, res);

    if (obj instanceof Map) {
        obj.forEach((item, index) => {
            // index 不一定是基本数据类型
            res.set(deepClone(index, map), deepClone(item, map));
        });
    } else if (obj instanceof Set) {
        obj.forEach((item) => {
            obj.add(deepClone(item, map));
        });
    } else {
        // 使用 Object.entries 不需要再使用 hasOwnProperty 来验证是否是自身属性
        for (let [key, value] of Object.entries(obj)) {
            if (value && typeof value === 'object') {
                res[key] = deepClone(value, map);
            } else {
                res[key] = value;
            }
        }
    }

    return res;
  }
  ```

## 3. 原生 JS 方法实现

&emsp;&emsp;原生 JS 的各种方法实现是一个比较重要的部分，不仅仅是为了应对面试，学习原生 JS 方法的实现还能帮助我们对 JS 有一个更好的理解，在写代码的时候也能少出点 BUG。

### instancof

[MDN 文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof)

&emsp;&emsp;`instanceof` 运算符用于检测构造函数的 `prototype` 属性是否出现在实例对象的原型链上。

&emsp;&emsp;故：`instanceof `操作符其实就是检查左侧的元素的 **__proto__** 链上有没有右侧类或对象的 `prototype`存在。因此实现思路就是顺着原型链逐层查找，直到原型链的尽头 `null` 为止，若过程中 `left` 的原型与 `right` 的原型相同，则返回 `true`。

```js
function myInstanceof(left, right) {
    // 首先，对于基本数据类型，一律返回 false
    if (!left || typeof left !== 'object') {
        return false;
    }

    // 获取左边的原型
    let proto = Object.getPrototypeOf(left);

    while (true) {
        if (proto === null) return false;
        if (proto === right.prototype) return true;
        proto = Object.getPrototypeOf(proto);
    }
}
```

### Object.create

[MDN Polyfill](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create#polyfill)

> 创建一个纯净的新对象，然后继承其原型

```js
Object.prototype.myCreate = function(proto) {
    // 创建一个空函数并将其 prototypr 指向 proto
    function F() {}
    F.prototype = proto;

    // 返回一个新的实例对象，这样实例对象就能够访问到 proto 及其原型链上的属性和方法了
    return new F();
}
```

### new

[MDN new](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new)

`new` 被调用后做了几件事：

- 创建一个空对象
- 让这个空对象对象可以访问到构造函数的属性
- 让这个空对象可以访问构造函数原型所在原型链上的属性
- 考虑构造函数有返回值且返回值为对象的情况，这时候返回的对象的优先级更高

```js
function myNew(ctor, ...args) {
    if (typeof ctor !== 'function') throw `${ctor} is not a constructor`;

    const obj = Object.create(ctor.prototype);	// 创建一个新的对象，且继承其原型
    const res = ctor.apply(obj, args);
    const isObject = res && typeof res === 'object';
    const isFunction = typeof res === 'function';
    return isObject || isFunction ? res : obj;
}
```

### call & apply

[MDN call](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call)

[MDN apply](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)


&emsp;&emsp;`call` 方法的作用和 `apply` 方法类似，区别仅是 `call` 方法接受的是**参数列表**，而 `apply` 方法接受的是**一个参数数组**。

&emsp;&emsp;它们的作用都是使用指定的上下文来调用函数，若有传入额外的参数，那么该参数会传递给调用函数。

```js
Function.prototype.myCall = function() {    // apply 同写法
    if (typeof this !== 'function') throw `caller must be a function!`;

    const context = arguments[0] || window;
    const args = [...arguments].slice(1).flat();  // 对于 apply 的话，传入的是一个参数数组，因此将参数格式统一
    context.fn = this;
    const res = context.fn(...args);
    delete context.fn;

    return res;
}; 
```

### Function.prototype.bind

[MDN bind](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)

&emsp;&emsp;`bind` 方法会创建一个新函数，然后会将传入的上下文对象绑定到调用函数上。若传递了多个参数，其余参数会作为新函数的参数。此外，若是对使用了 `bind` 绑定的函数使用了 `new` 关键字创建实例对象，那么此时会忽略原先传入的上下文对象。


```js
Function.prototype.myBind = function() {
    if (typeof this !== 'function') throw new TypeError('caller must be a function');

    const slice = Array.prototype.slice;

    const fn = this;
    const context = arguments[0];
    const args = slice.call(arguments, 1);

    const bindFunc = function() {
        const newArgs = args.concat(slice.call(arguments));
        // 若是普通情况，this 会指向 window，而若是使用 new ，那么 this 会指向实例
        return fn.apply(this instanceof bindFunc ? this : context, newArgs);
    };
    // bindFunc 继承原型链中的方法
    bindFunc.prototype = Object.create(fn.prototype);

    return bindFunc;
}
```

#### 一道 bind 题

&emsp;&emsp;基于 `bind` 方法的特性，有一道题如下：

```js
function foo() {
    console.log(this.x);
}

foo.bind({x: 1}).bind({x: 2})() // 打印结果是什么？
```

  <MarkdownInCollapse markdown='&emsp;&emsp;输出 1，因为在第一次调用 bind 时，创建了一个新函数 f1，这个函数会调用 foo 并使用传入的对象作为 this。当第二次调用 bind 方法时，也会创建一个新函数 f2，f2 中调用的是上一次调用 bind 创建的新函数 f1，但是这 f1 中并没有使用到本次传入的 this 值，因此最终结果还会是第一次传入的对象中的 x，也就是 1。' header="解答👇" />


### Array.prototype.map

**map 概念：**

&emsp;&emsp;`map(callback(val, idx, arr), thisArg)` 方法将**创建一个新数组**，这个数组中的元素是原数组中的每个元素都调用 `callback` 后的结果。其中 `callback` 的三个参数分别是原数组中的**元素**、**元素对应索引值**和**原数组**，`thisArg` 可选，是 `map` 函数的 `this` 指向。

&emsp;&emsp;因此调用 `map` 函数后，**原数组不会发生改变**。

&emsp;&emsp;此外，调用的数组 `arr` 中的元素不一定是连续的（有的索引位置会为 `empty`），这点需要注意。

```js
Array.prototype.myMap = function(callbackFn, thisArg) {
    // null 或 undefined
    if (this == null) {
        throw new TypeError(`can't not read proterty 'map' of ${this}` );
    }

    if (Object.prototype.toString.call(callbackFn) !== '[object Function]') {
        throw new TypeError(`${callbackFn} is not a function!`);
    }

    let O = Object(this);   // 规定 this 需要先转换为对象
    let len = O.length >>> 0;   // 保证 len 为数字且为整数
    let T = thisArg || null;

    let res = new Array(len);

    for (let i = 0; i < len; ++i) {
        if (i in O) {
            let mappedValue = callbackFn.call(T, O[i], i, O);
            res[i] = mappedValue;
        }
    }

    return res;
};
```

其中：

- `>>>` 运算符为 零填充右移运算符，如 `0101 >>> 1 : 0010`，保证 `len ` 为数字且为整数。
- 使用 [Object](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object)  是为了保证 `o` 一定是一个对象：

  - 当给定值是 `null` 或 `undefined` 时，会创建并返回一个空对象。
  - 若传进去的是一个基本类型的值，则会构造其包装类型的对象，如 `Object(3)` ，会返回 `Number {3}`。
  - 若传的是引用类型的值，仍会返回这个值，因此引用是相同的。


### Array.prototype.flat

[MDN flat](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat) 

> `flat(deep)` 方法会根据指定的递归深度遍历数组，并将遍历到的元素合并为一个**新数组**返回


&emsp;&emsp;设有数组如下：

```js
const test = ["a", ["b", "c"], ["d", ["e", ["f"]], "g"]]
```

&emsp;&emsp;`flag` 不传参数时，默认扁平化一层

```js
test.flat()
// ["a", "b", "c", "d", ["e", ["f"]], "g"]
```

&emsp;&emsp;`flat` 传入参数时，传入的参数即扁平化的深度

```js
test.flat(2)
// ["a", "b", "c", "d", "e", ["f"], "g"]
```

&emsp;&emsp;当使用 `Infinity` 作为参数时，无论多少层嵌套，都会扁平化为一维数组

```js
test.flat(Infinity)
// ["a", "b", "c", "d", "e", "f", "g"]
```

&emsp;&emsp;传入小于等于 `0` 的参数，不进行扁平化

```js
test.flat(0)
test.flat(-1)
// ["a", ["b", "c"], ["d", ["e", ["f"]], "g"]]
```

&emsp;&emsp;若数组不是连续的，会跳过那些空位

```js
["a", , "b", "c", ,].flat()
// ["a", "b", "c"]
```

#### 1. 使用 reduce 实现 flat


&emsp;&emsp;首先实现一个一次性扁平化任意深度的 `flat` 方法：

```js
function flattenDeep(arr) {
    return Array.isArray(arr) ? 
        arr.reduce((acc, cur) => [...acc, flattenDeep(cur)], [])
        : [arr];
}
```

&emsp;&emsp;在此之上实现 `flat`：

```js
if (!Array.prototype.flat) {
    Array.prototype.flat = function(deep=1) {
        return deep >= 0 ?
            this.reduce((acc, cur) => {
                if (Array.isArray(cur)) {
                    return [...acc, cur.flat(deep-1)];
                }

                return [...acc, cur];
            }, [])
            : this;
    }
}
```

#### 2. 使用栈实现

&emsp;&emsp;同样的，先实现一个一次性扁平化所有深度的 `flat`：

```js
function flattenDeep(arr) {
    const ret = [];
    const st = [...arr];

    while (st.length) {
        const val = st.pop();

        if (Array.isArray(val)) {
            st.push(...val);
        } else {
            ret.unshift(val);
        }
    }

    return ret;
}
```

&emsp;&emsp;再在此基础上实现 `flat`：

```js
// 其实实现上和栈关系不大...
Array.prototype.myFlat = function(deep=1) {
    if (deep < 1) return this;

    const ret = [];
    const st = [...this];

    while (st.length) {
        const val = st.pop();

        if (Array.isArray(val)) {
            ret.unshift(...val.myFlat(deep-1));
        } else {
            ret.unshift(val);
        }
    }

    return ret;
}
```


### Array.prototype.euqals

&emsp;&emsp;原生 JS 中没有数组的 `equals` 方法实现，但数组是引用类型不能使用 `===` 来判断。

&emsp;&emsp;对两个数组进行对比判断是否相同可以分为两种，一种是考虑了数组内元素的顺序，一种则是不考虑顺序。对于不考虑顺序的，可以先对数组进行一个排序，再进行比较。

&emsp;&emsp;此外，**下面主要讨论数组元素为基本数据类型与数组对象的情况，其他对象暂未考虑在内**。

#### 方法1

&emsp;&emsp;最简单的办法就是一次遍历判断数组内元素是否相同了，当然也可以将数组转换为字符串再进行比较：

```js
function isEqual(arr1, arr2) {
    return JSON.stringify(arr1.sort()) == JSON.stringify(arr2.sort());
}
```

#### 方法2

&emsp;&emsp;手写一个数组的 `equals` 方法来实现两个数组元素的比较：

```js
if (!Array.prototype.equals) {
    Array.prototype.equals = function(array) {
        // 若 array 是虚值，直接返回
        if (!array) {
            return false;
        }

        // 先判断数组长度是否相等，若不相等返回 false
        if (this.length != array.length) {
            return false;
        }

        for (let i = 0, l = this.length; i < l; ++i) {
            // 判断是否有循环嵌套
            if (this[i] instanceof Array && array[i] instanceof Array) {
                if (!this[i].equals(array[i])) {
                    return false;
                }
            } else if (this[i] != array[i]) {
                return false;
            }
            // 这边没有考虑数组元素是 object 的情况
        }

        return true;
    };
}
```


### Object.prototype.equals

&emsp;&emsp;对象的 `equals` 方法中需要有数组的 `equals` 方法支持，以便能进行一个更全面的比较。

```js
Object.prototype.equals = function(obj) {
    // 第一次循环，检查 this 中的属性名和属性值类别是否 与 obj 中的相同
    for (let propName in this) {
        if (this.hasOwnProperty(propName) != obj.hasOwnProperty(propName)) {
            return false;
        } else if (typeof this[propName] != typeof obj[propName]) {
            return false;
        }
    }

    // 第二次循环，检查 obj 中的属性名和属性值类别是否和 this 中的相同
    // 并递归进行检查
    for (let propName in obj) {
        // 因为可能有的属性只存在与 obj 中
        if (this.hasOwnProperty(propName) != obj.hasOwnProperty(propName)) {
            return false;
        } else if (typeof this[propName] != typeof obj[propName]) {
            return false;
        }

        // 若该属性是继承自原型链的，那么肯定相等，不需要检查
        if (!this.hasOwnProperty(propName)) {
            continue;
        }

        // 进行递归检查

        // 首先检查是否是一个数组类型，需要实现数组的检查方法 Array.prototype.equals
        if (this[propName] instanceof Array && obj[propName] instanceof Array) {
            if (!this[propName].equals(obj[propName])) {
                return false;
            }
        } else if (this[propName] instanceof Object && obj[propName] instanceof Object) {
            if (!this[propName].equals(obj[propName])) {
                return false;
            }
        } else if (this[propName] != obj[propName]) {
            return false;
        }
    }

    return true;
};
```

### Array.prototype.filter

[MDN filter](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

&emsp;&emsp;一个比较简单的 filter 实现，主要就是根据传入的回调函数的调用结果，判断当前值是否要加入结果数组中。

```js
Array.prototype.myFilter = function(fn, thisArg) {
    if (typeof fn !== 'function') {
        throw new TypeError(`${fn} is not a function!`);
    }

    const self = Object(this);
    const len = self.length;

    const res = [];
    const T = thisArg || null;

    for (let i = 0; i < len; ++i) {
        if (i in self) {
            const flag = fn.call(T, self[i], i, self);

            if (flag) {
                res.push(self[i]);
            }
        }
    }

    return res;
};
```

### Array.prototype.reduce

[MDN reduce](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

[MDN reduce Polyfill](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce#polyfill)

&emsp;&emsp;`reduce` 方法接收一个回调函数 `callback(acc, cur, idx, arr)` 与一个可选的初始值。其中 `acc` 是累加器，`cur` 是当前值，`idx` 是当前值对应的索引，`arr` 是原数组。

```js
Array.prototype.myReduce = function(fn, initialValue) {
    if (typeof fn !== 'function') throw new TypeError(`${fn} is not a function!`);

    const self = Object(this);
    const len = self.length;

    const i = 0;

    const res = initialValue;

    // 若未输入初始值，则找到第一个不为虚值的元素
    if (res == null && len > 0 && i < len) {
        res = self[i++];
    }

    for (; i < len; ++i) {
        // in 会包括原型链上的属性，这是没问题的，因为原生 reduce 也会包括
        if (i in self) {
            // 为什么使用 call：都行，个人习惯
            res = fn.call(null, res, self[i], i, self);
        }
    }

    return res;
};
```

<Comment />
