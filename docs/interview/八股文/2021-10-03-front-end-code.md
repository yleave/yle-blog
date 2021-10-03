---
slug: front-end-code
title: 前端代码题
---

import Highlight from '@site/src/components/Highlight';
import { InterviewComponent } from '@site/src/components/CustomComponent';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Comment from '@site/src/components/Comment';
import MarkdownInCollapse from '@site/src/components/MarkdownInCollapse';


<InterviewComponent time="2021-10-03" lastUpdate='' />

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

<Comment />
