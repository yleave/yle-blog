---
slug: front-end-code3
title: 前端代码题3
---

import Highlight from '@site/src/components/Highlight';
import { InterviewComponent } from '@site/src/components/CustomComponent';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Comment from '@site/src/components/Comment';
import MarkdownInCollapse from '@site/src/components/MarkdownInCollapse';


<InterviewComponent time="2021-10-20" lastUpdate='2021.10.20' />

## 1. 数组去重

&emsp;&emsp;数组去重是一项基本功了，有多种方法实现，这边简单列了几个。

&emsp;&emsp;假设有数组如下，数组 `arr` 中有应用类型的数据：

  ```js
  let inarr1 = [1, 2];
  let inarr2 = {a: 'a', b: 'b'};
  let arr = [1, 2, inarr1, 1, 5, inarr1, 2, 1, inarr2, inarr2];
  let arr1 = [];
  ```

1. 使用 `set` 去重

  ```js
  arr1 = [...new Set(arr)];
  ```

2. 使用 `filter` 去重

  ```js
  arr1 = arr.filter((val, idx) => {
      return arr.indexOf(val) === idx;
  });
  ```

3. 简单循环

  ```js
  for (let val of arr) {
    if (arr1.indexOf(val) === -1) {
        arr1.push(val);
    }
  }
  ```

4. 排序后去重

  ```js
  arr.sort();
  for (let val of arr) {
      if (arr1.length === 0 || arr1[arr1.length-1] !== val) {
          arr1.push(val);
      }
  }
  ```

## 2. JSONP

&emsp;&emsp;在前端面试中，JSONP 绝对是一个非常非常重要的知识点，一般情况下不会直接让写代码，更多的是口头描述，但要描述清楚需要对 JSONP 的写法非常熟悉。

&emsp;&emsp;本博客在建设过程中也用到了 JSONP 的知识，详情可看[使用 JSONP 手动获取 PV 值](https://yleave.top/docs/%E5%8D%9A%E5%AE%A2%E5%BB%BA%E8%AE%BE/blog-header-component#%E4%BD%BF%E7%94%A8-jsonp-%E6%89%8B%E5%8A%A8%E8%8E%B7%E5%8F%96-pv-%E5%80%BC)

---

&emsp;&emsp;JSONP 即 JSON with Padding。它是借助了 HTML 中 `src` 属性可跨域的特点来进行 `GET` 请求，我们通过 `src` 中 `url` 部分的参数传递，给出回调的函数名，如 `?callback=cbFunction`，然后响应中返回要执行的 `JS` 代码，使用字符串拼接的方式传递回调函数中的参数，然后浏览器接受响应，就直接执行了返回的代码。

&emsp;&emsp;因此 JSONP 由两部分组成：**回调函数** 和 **数据**。回调函数是当响应到来时要在页面中调用的函数，函数名一般通过请求 url 传递；而数据通过服务器响应请求时通过字符串拼接作为回调函数的参数返回。

&emsp;&emsp;JSONP 优点：

- 不受同源策略的限制
- 兼容性好
- 实现简单

&emsp;&emsp;缺点：

- 只支持 `GET` 请求
- 属于嵌入式脚本，有一定安全风险

---

&emsp;&emsp;JSONP 的具体实现可根据使用场景来决定，不过何种实现都有着相同的步骤。

&emsp;&emsp;首先是一个 Promise 链式调用版本的 JSONP 实现。

&emsp;&emsp;在代码中，我们会返回一个 Promise，Promise 中首先确定回调函数名，若未传入，则随机生成一个函数名，再创建一个 `script` 标签并将它加入 `body` 中，随后我们再根据传入的 url 和我们确定好的函数名创建一个新的 URL，并将新的 URL 作为 `script` 标签的 `src` 属性值，那么此时就会开始网络请求了。

&emsp;&emsp;最后，我们在 `window` 对象上挂载一个全局函数，函数名就是我们确定的函数名，该函数接收一个参数，也就是我们调用 `jsonp` 后会返回的数据，然后在函数内部调用 `resolve` 方法传递数据，并将新创建的 `script` 元素从 DOM 树中移除以防止内存泄漏。

```js
const chars = 'abcdefghijklmnopqrstuvwxyz';

function randomString(strs, length) {
    let str = '';
    for (let i = 0; i < length; ++i) {
        str += strs[Math.floor(Math.random() * strs.length)]
    }

    return str;
}

const jsonp = ({url, params, callbackName}) => {
    const generateURL = () => {
        let str = `jsoncallback=${callbackName}`;

        str += Object.keys(params).map(key => `${key}=${params[key]}`).join('&');

        return `${url}?${str}`;
    };

    return new Promise((resolve, reject) => {
        callbackName = callbackName || randomString(chars, 10);
        let scriptEle = document.createElement('script');
        scriptEle.src = generateURL();
        document.body.appendChild(scriptEle);

        // 服务器返回字符串 'callbackName(data)'，浏览器解析即可执行
        // 在全局对象中添加处理回调方法
        window[callbackName] = (data) => {
            resolve(data);
            // 最后再移除不需要的 dom 节点，防止内存泄漏
            document.body.removeChild(scriptEle);
        };
    });
};

// 实例，使用菜鸟教程中提供的接口调用 jsonp 方法
jsonp({
    url: 'https://www.runoob.com/try/ajax/jsonp.php',
    callbackName: 'callbackFunction'
}).then((data) => {
    console.log(data)
});
```

&emsp;&emsp;还有一种传入函数的简便写法，这种写法支持匿名函数，不过函数名需要注意避免冲突：

```js
function jsonp({url, callbackName, callback}) {
    let script = document.createElement('script');
    callbackName = callbackName || 'randomName';
    let newURL = `${url}?jsoncallback=${callbackName}`;
    script.src = newURL;
    document.body.appendChild(script);

    window[callbackName] = callback;
}

jsonp({
    url: 'https://www.runoob.com/try/ajax/jsonp.php', 
    callback: (data) => {console.log(data)},
    // callbackName: 'callbackFunc'
});
```


## 3. 图片懒加载

&emsp;&emsp;懒加载是一种网页性能优化策略，若一个页面中当前不可见区域有图片需要加载，那么可以延迟该图片的请求，直到达到该图片的可视区域为止。

### 3.1 懒加载实现原理

&emsp;&emsp;网页中一般占用较多资源的是图片文件，因此懒加载一般是针对图片而言的。

&emsp;&emsp;而一张图片就是一个 `<img>` 标签，图片的加载源就是其 `src` 属性，浏览器发起请求就是根据其是否有 `src` 属性来决定的。

&emsp;&emsp;因此可以根据 `<img>` 标签的位置，当标签在可视区域之外时，其 `src` 属性为空，而当即将进入可视区域时，设置其 `src` 属性，让浏览器发起图片请求。

&emsp;&emsp;所以说**懒加载的要点就是可视区域的判断**。

&emsp;&emsp;懒加载会在页面进行滚动时调用判断函数，因此**需要进行节流优化**。


&emsp;&emsp;首先，用一幅图解释浏览器的宽高：


![Dimensions-client](https://gitee.com/ylea/imagehost/raw/master/img/Dimensions-client.png)

### 3.2 方法1：clientHeight、scrollTop 和 offsetTop

&emsp;&emsp;首先，简单介绍一下这三个属性：

<img src="https://gitee.com/ylea/imagehost/raw/master/img/image-20210224181307061.png" alt="image-20210224181307061" style={{zoom: "60%"}} />

:::info

`HTMLElement.offsetTop` 为只读属性，它返回当前元素相对于其 [`offsetParent`](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/offsetParent) 元素的顶部内边距的距离。

`Element.scrollTop` 属性可以获取或设置一个元素的内容垂直滚动的像素数。

`HTMLElement.clientHeight` 对于没有定义CSS或者内联布局盒子的元素为0，否则，它是元素内部的高度(单位像素)，包含内边距，但**不包括**水平滚动条、边框和外边距。

&emsp;&emsp;`clientHeight` 可以通过 CSS `height` + CSS `padding` - 水平滚动条高度 (如果存在)来计算。

&emsp;&emsp;`clientHeight` 可以使用 `window.innerHeight` 来替代 ，不过若有水平滚动条，`innerHeight` 也会包括滚动条高度。


`document.documentElement` 总是会返回一个 [`html`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/html) 元素，且它一定是该文档的根元素。

:::

&emsp;&emsp;那么由上图可知，页面的高度为 `clientHeight`，若有滚轮的话，`scrollTop` 会是当前页面滚动的高度，而 `offsetTop` 会是元素距离页面顶部的高度。

&emsp;&emsp;因此当 `scrollTop + clientHeight = offsetTop` 时，就说明元素即将进入可视区域，图片需要进行请求了：

```js
function getTop(e) {
    let T = e.offsetTop;
    while (e = e.offsetParent) {
        T += e.offsetTop;
    }

    return T;
}

function lazyLoad(imgs) {
    // 视口高度
    const viewHeight = document.documentElement.clientHeight;
    // 滚动条拉伸的高度
    const scrollTop = document.documentElement.scrollTop  || document.body.scrollTop;

    for (let i = count; i < imgs.length; ++i) {
        if (getTop(imgs[i]) <= viewHeight + scrollTop) {
            if (!imgs[i].getAttribute('src')) {
                imgs[i].src = imgs[i].getAttribute('data-src'); // 图片的 url 放在 data-src 属性中
                count++;  // count 值由于减少循环开销
            }
        }
    }
}
```

### 3.3 方法2：getBoundingClientRect

[getBoundingClientRect MDN文档](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect)


> **`Element.getBoundingClientRect()`**  方法返回元素的大小及其相对于视口的位置。
> 
> 如果是标准盒子模型，元素的尺寸等于`width/height` + `padding` + `border-width`的总和。如果`box-sizing: border-box`，元素的的尺寸等于 `width/height`。
> 
> 返回的结果是包含完整元素的最小矩形，并且拥有`left`, `top`, `right`, `bottom`, `x`, `y`, `width`, 和 `height`这几个以像素为单位的只读属性用于描述整个边框。除了`width` 和 `height` 以外的属性是相对于**视图窗口的左上角**来计算的。

<img src="https://gitee.com/ylea/imagehost/raw/master/img/rect.png" alt="rect" style={{zoom: "50%"}} />

&emsp;&emsp;因此使用 DOM 元素的 `getBoundingClientReact().top` 属性就能直接判断图片是否出现在了当前视口中。

```js
function lazyLoad(imgs) {
    let viewHeight = document.documentElement.clientHeight;

    for (let i = count; i < imgs.length; ++i) {
        if (imgs[i].getBoundingClientRect().top <= viewHeight) {
            if (!imgs[i].getAttribute('src')) {
                imgs[i].src = imgs[i].getAttribute('data-src');
                count++;
            }
        }
    }
}
```

### 3.4 方法3：浏览器 API IntersectionObserver

[MDN文档](https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver)

[阮一峰 IntersectionObserver 教程](http://www.ruanyifeng.com/blog/2016/11/intersectionobserver_api.html)

&emsp;&emsp;`IntersectionObserver` 浏览器内置的 API，实现了监听 window 的 `scroll` 事件、`判断是否在视口中` 以及 `节流` 三大功能。该 API 需要 polyfill。

下面的代码中：

- 传入的回调函数的 `changes` 是[`IntersectionObserverEntry`](https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserverEntry) 对象的数组，数组中的每个对象的 `target` 是实际可视情况发生改变的 `dom` 元素。
- `getElementsByTagName` 返回的是一个 `HTMLCollection`，因此需要使用 `Array.from` 来转换一下。

```js
const imgs = document.getElementsByTagName('img');

const observer = new IntersectionObserver(changes => {
    changes.forEach(dom => {
        if (dom.isIntersecting) {
            dom.target.src = dom.target.getAttribute('data-src');
            // 当加载后就从监视器中移除
            observer.unobserve(dom.target);
        }
    });
});

Array.from(imgs).forEach(dom => observer.observe(dom));
```

### 3.5 其他方法

1. 使用开源库如 https://github.com/aFarkas/lazysizes （滑稽

2. 使用 html5 新特性（未实操过）
  ```js
  <img src="image.jpg" alt="..." loading="lazy">
  <iframe src="video-player.html" title="..." loading="lazy"></iframe>
  ```

### 3.6 实例

```html
<head>
    <style>
        body {
            height: 3000px;
        }
        img {
            width: 500px;
            height: 500px;
            object-fit: scale-down;
        }
    </style>
</head>
<body>
    <img data-src="./imgs/1.png">
    <img data-src="./imgs/2.png">
    <img data-src="./imgs/3.png">
    <img data-src="./imgs/4.png">
    <img data-src="./imgs/5.png">
    <img data-src="./imgs/6.png">
    <img data-src="./imgs/7.png">
    <img data-src="./imgs/8.png">
<script>
    // 方法1：clientHeight、scrollTop、offsetTop
    let imgs = document.getElementsByTagName('img'), count = 0;

    // offsetTop 是元素与 offsetParent 的距离，循环获取直到达到页面顶部
    function getTop(e) {
        let T = e.offsetTop;
        while (e = e.offsetParent) {
            T += e.offsetTop;
        }

        return T;
    }

    function lazyLoad(imgs) {
        // 视口高度
        let viewHeight = document.documentElement.clientHeight;
        // 滚动条拉伸的高度
        let scrollTop = document.documentElement.scrollTop  || document.body.scrollTop ;

        for (let i = count; i < imgs.length; ++i) {
            if (getTop(imgs[i]) <= viewHeight + scrollTop) {
                if (!imgs[i].getAttribute('src')) {
                    imgs[i].src = imgs[i].getAttribute('data-src');
                    count++;
                }
            }
        }
    }

    function throttle(fn, wait, ...args) {
        let activeTime = 0;

        return function() {
            let current = +new Date();
            if (wait <= current - activeTime) {
                fn.apply(this, args.concat(...arguments));
                activeTime = current;
            }
        };
    }
    // 首次加载
    window.onload = lazyLoad(imgs);
    window.onscroll = throttle(lazyLoad, 100, imgs);
</script>
</body>
```

### 3.7 小结

&emsp;&emsp;上面介绍的前三种方法，其中前两种方法是有一定缺陷的，它们只比较了距离页面顶端的距离，因此若刷新浏览器时，所处位置的上方所有可见和不可见的图片都会被加载出来，因此并不是完备的懒加载。

&emsp;&emsp;不过第三种使用 `IntersectionObserver` 的方法则不会有这个问题，它的弱势是观察器在进程中的优先级会比较低且需要考虑兼容性问题。


## 4. 千分位分隔符

&emsp;&emsp;千分位分隔符就是对输入的字符串数字，在合适的地方插入分隔符 `,` ，使得数字更加清晰，如：

```js
console.log(numFormat(123456789.1234)); //123,456,789.1234
console.log(numFormat(12345.12));   //12,345.12
console.log(numFormat(12345.)); // 12,345
console.log(numFormat(123));    // 123
```

### 4.1 方法1：循环

```js
function numFormat(num) {
    // 先将小数部分和整数部分分开
    num = num.toString().split('.');
    // 翻转整数部分，便于处理
    let arr = num[0].split('').reverse();
    let res = [];

    for (let i = 0; i < arr.length; ++i) {
        if (i % 3 === 0 && i !== 0) {
            res.push(',');
        }
        res.push(arr[i]);
    }

    // 翻转回来
    res = res.reverse().join('');

    // 若有小数部分，再加上小数部分
    if (num[1]) {
        res += '.' + num[1];
    }

    return res;
}
```

### 4.2 方法2：toLocalString

[toLocaleString MDN 文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString)

```js
(123456789.1234).toLocaleString(); //123,456,789.123 ！！ 注意这里会进行四舍五入
(12345.12).toLocaleString();   //12,345.12
(12345.).toLocaleString(); // 12,345
(123).toLocaleString();    // 123
```

### 4.3 方法3：正则表达式和 replace 函数

```js
function numFormat(num){
    const res = num.toString().replace(/\d+/, function(n){ // 先提取整数部分
        return n.replace(/(\d)(?=(\d{3})+$)/g, function($1){
            return $1+",";
        });
    });
    return res;
}

const a = 1234567894532;
const b = 673439.4542;
console.log(numFormat(a)); // "1,234,567,894,532"
console.log(numFormat(b)); // "673,439.4542"
```

#### 推荐阅读

1. [正则表达式30分钟入门教程](https://link.jianshu.com/?t=http://deerchao.net/tutorials/regex/regex.htm)

2. [String.prototype.replace()](https://link.jianshu.com/?t=https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace)




<Comment />
