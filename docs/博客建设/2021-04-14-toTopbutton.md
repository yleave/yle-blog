---
slug: toTopbutton
title: B站小火箭点击置顶按钮
---

import Highlight from '@site/src/components/Highlight';
import { BlogComponent } from '@site/src/components/CustomComponent';

<BlogComponent tags={['博客建设', '节流']} time="2021-04-14" />


&emsp;&emsp;为博客中的内容页面加上置顶按钮，即：

<img src="https://gitee.com/ylea/imagehost/raw/master/img/backtotop1.gif" alt="backtotop1" style={{zoom: '80%'}} />



## 基本组件实现

&emsp;&emsp;b 站的小火箭样式来自于：https://coor.top/archives/21011814

&emsp;&emsp;小火箭图标实际上是一个长图：

<img src="https://cdn.jsdelivr.net/gh/cetr/cdn@master/blog/img/space-to-top.png" style={{zoom: '80%'}} />

&emsp;&emsp;我们限制元素的宽高，让我们每次只能容纳一个小火箭，当鼠标移（hover）到这个元素上时，使用 [animation](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation) 属性，在 0.4 秒内播放我们自定义的关键帧 [@keyframes](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@keyframes) ，通过背景 x 轴的偏移，将这个长图中的每个小火箭进行一个快速的切换来达到动画效果。



CSS 样式代码如下：

```css
.back-to-top {
    background-image: url("https://cdn.jsdelivr.net/gh/cetr/cdn@master/blog/img/space-to-top.png");
    width: 62px;
    height: 88px;
    position: fixed;
    bottom: 80px;
    right: 30px;
}

.back-to-top:hover {
    cursor: pointer;
    animation: to-top-fly .4s steps(1) infinite;
}

@keyframes to-top-fly {
    0% {
        background-position-x: -142.5px;
    }

    16.5% {
        background-position-x: -284.5px;
    }

    33% {
        background-position-x: -429.5px;
    }

    49.5% {
        background-position-x: -570.5px;
    }

    66% {
        background-position-x: -714.5px;
    }

    82.5% {
        background-position-x: -856.5px;
    }

    100% {
        background-position-x: 0px;
    }
}
```



&emsp;&emsp;而点击置顶功能可以通过 [scrollTo](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollTo) 来完成：

```js
function toTop(e) {
    window.scrollTo({ 
        top: 0, 
        behavior: "smooth" 
    });
}
```



&emsp;&emsp;这个功能需要加入到文章页面中，不过查阅 Docusaurus 文档，没有找到一个合适的嵌入位置，因此使用了一个最笨的方法：将这个置顶按钮封装成一个组件， Docusaurus 的 markdown 支持 jsx 语法，为了在每个页面中都加入这个按钮，那么在每个页面中都引用这个组件就行了。配合模板库 [hygen](https://yleave.top/docs/%E5%8D%9A%E5%AE%A2%E5%BB%BA%E8%AE%BE/hygen)，添加默认组件倒是不麻烦，就是显得很冗余...

&emsp;&emsp;组件基本封装：

```jsx
import React from 'react';
import { useEffect } from 'react';
import './index.css';

function toTop(e) {
    window.scrollTo({ 
        top: 0, 
        behavior: "smooth" 
    });
}

function BackToTop() {
    // 待用
    useEffect(() => {
        console.log('init backtotop')
        return function() {
            console.log('dispose backtotop');
        };
    }, []);

    return (
        <div className="back-to-top" onClick={toTop}></div>
    );
}

export default BackToTop;
```


## 效果优化 + 节流

&emsp;&emsp;**视觉优化**：优化按钮显示时机，当滚轮未滚动时，按钮隐藏，滚动时显示；或是根据 `scrollTop` 和 `clientHeight` 来判断当当前页面滚动了一个视口高度时，显示按钮。

&emsp;&emsp;所以需要监听 [scroll](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/scroll_event) 事件，当滚轮进行滚动时，触发判断逻辑，不过需要注意的是，`scroll` 事件可被高频触发，为了性能考虑，可以进行节流限制。



&emsp;&emsp;**节流**的效果是显著的，它可以在不影响用户体验的同时极大的减少了函数的调用次数。



&emsp;&emsp;经实测：一个页面中，在页面底部点击置顶按钮时，若未加节流优化，那么 `scroll` 事件中注册的回调函数调用次数是：**42 次！！**，而使用了节流优化后，一次置顶回调函数的调用次数是：**6 次！！！**，因此在合适的位置使用防抖/节流优化是非常有必要的！

完整代码如下：

节流函数：

```js
// 延迟调用的 throttle
function throttle(fn, wait) {
    let timer = null;

    return function() {
        if (!timer) {
            timer = setTimeout(() => {
                fn.apply(this, [...arguments]);
                timer = null;
            }, wait);
        }
    };
}

export default throttle;
```

置顶组件：

```jsx
import React from 'react';
import { useEffect } from 'react';
import throttle from '@site/src/utils/throttle.js';
import './index.css';

function toTop(e) {
    window.scrollTo({ 
        top: 0, 
        behavior: "smooth" 
    });
}

function onScroll(e) {
    console.log('toggle');
    let ele = document.getElementsByClassName('back-to-top')[0];
    if (document.documentElement.scrollTop === 0) {
        ele.style.visibility = 'hidden';
    } else {
        ele.style.visibility = 'visible';
    }
}

// 节流优化，每 100 毫秒调用一次
const fn = throttle(onScroll, 100);

function BackToTop() {
    useEffect(() => {
        window.addEventListener('scroll', fn);
        return function() {
            window.removeEventListener('scroll', fn);
        };
    }, []);

    return (
        <div className="back-to-top" onClick={toTop}></div>
    );
}

export default BackToTop;
```


import Comment from '@site/src/components/Comment';

<Comment />