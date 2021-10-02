---
slug: blog-header-component
title: 博客头部样式自定义
---

import Highlight from '@site/src/components/Highlight';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { BlogComponent } from '@site/src/components/CustomComponent';

<BlogComponent tags={['博客搭建', 'jsonp']} time="2021-04-13" lastUpdate='2021.9.26' />


&emsp;&emsp;添加头部样式前：

<img src="https://gitee.com/ylea/imagehost1/raw/master/img/image-20210413211853704.png"  style={{zoom: '60%'}}/>

&emsp;&emsp;光秃秃的，太丑了，标题到正文之间没有过渡，正文显得有点突兀。抛开美观性不说，一篇文章需要提供关于它的一些信息，比如发布日期、文章标签，这些信息定义在文章头部，也能让读者在阅读之前对文章能有一个大致的了解。

&emsp;&emsp;而 Docusaurus 并没有在这个有侧边栏的版块中提供定义头部信息的功能，不过得益于 [MDX](https://yleave.top/docs/%E5%8D%9A%E5%AE%A2%E5%BB%BA%E8%AE%BE/awesome-mdx) 的强大特性，我们可以发挥想象力使用 React 自由的 DIY 头部模块了~



## 编写头部版块

&emsp;&emsp;不过万事开头难，如果没有什么经验的话，突然要设计一个美观的头部的样式还是有难度的，所以我们就先设计一个稍微粗糙点的样式，后面再慢慢改进吧。



先规划头部版块中的内容：

- 文章发布时间
- 文章浏览次数
- 文章标签



&emsp;&emsp;对于上面的几点，文章发布时间可以在使用 [hygen](https://yleave.top/docs/%E5%8D%9A%E5%AE%A2%E5%BB%BA%E8%AE%BE/hygen) 生成文章模板的时候就传入组件，文章标签则需要在写文章时自己手动加上（当然也可以在 hygen 模板中设置默认的标签）。

&emsp;&emsp;而对于文章浏览数量，可以使用免费工具[不蒜子](https://busuanzi.ibruce.info/)来完成，使用也非常简单：

&emsp;&emsp;在项目中引入 JS 文件：` <script async src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>`

&emsp;&emsp;然后在合适的地方加上对应标签即可：

```html
<!-- 网站总访问量 -->
<span id="busuanzi_container_site_pv">
    本站总访问量<span id="busuanzi_value_site_pv"></span>次
</span>

<!-- 单页面访问量 -->
<span id="busuanzi_container_page_pv">
  本文总阅读量<span id="busuanzi_value_page_pv"></span>次
</span>
```



&emsp;&emsp;头部样式添加后（好看多了~）：

<img src="https://gitee.com/ylea/imagehost1/raw/master/img/image-20210413214239848.png" alt="image-20210413214239848" style={{zoom: '60%'}} />



&emsp;&emsp;将其封装为组件，组件中使用的图标来源于 [iconfont](https://www.iconfont.cn/)，代码如下：

<Tabs
  defaultValue="JSX"
  values={[
    {label: 'JSX', value: 'JSX'},
    {label: 'CSS', value: 'CSS'},
  ]}>

<TabItem value="JSX">

```jsx
import React from 'react';
import './index.css';

function Header(props) {
    return (
        <div className="header-container">
            <span id="busuanzi_container_page_pv">
                <i className="iconfont iconrili"></i> 
                <span>{props.time}</span>
                <span className="vertical-gap">|</span>

                <i className="iconfont iconyanjing"></i>
                <span id="busuanzi_value_page_pv"></span>
            </span>

            <div className="tags-container">
                <i className="iconfont iconlabel-01"></i>
                {
                    props.tags.map((tag) => {
                        return <span className="blog-tag">  {tag} </span>
                    })
                }
            </div>
        </div>
    );
}

export default Header;
```

</TabItem>

<TabItem value="CSS">

```css
.header-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    /* margin-bottom: calc(var(--ifm-leading-desktop) * var(--ifm-leading)); */
    margin-bottom: 4.5em;
}

#busuanzi_container_page_pv {
    font-size: 0.9em;
    color: rgba(10, 194, 93, 0.986);
}

.iconlabel-01 {
    color: rgb(5, 231, 220);
    font-size: 1.3em;
}

.iconfont {
    margin-right: 5px;
}

.vertical-gap {
    margin: 0 10px;
}

.tags-container {
    margin-top: 10px;
}

.blog-tag {
    border: rgba(5, 231, 220, 0.911) solid 1px;
    color: rgb(0, 0, 0);
    font-size: 0.9em;
    margin-left: 12px;
    padding: 4px 9px;
    border-radius: 8px;
    transition: background-color, 0.2s ease-in, color 0.2s ease-in;
}

.blog-tag:hover {
    background-color: rgba(5, 231, 220, 0.911);
    color: white;
}
```

</TabItem>
</Tabs>




## 使用 JSONP 手动获取 PV 值

&emsp;&emsp;基本的头部组件是写好了，但是在使用的时候**出现了问题**：不蒜子的 PV  计数器在进入博客的时候并没有显示出当前页面的 PV 值，页面是这样的:

<img src="https://gitee.com/ylea/imagehost1/raw/master/img/image-20210413215052035.png" style={{zoom: '80%'}} />

&emsp;&emsp;不断尝试后发现， 只有在页面刷新之后，当前页面的 PV 值才会获取到，看了不蒜子的文档也没发现哪出了问题，于是打开浏览器控制台查看，发现了问题：

&emsp;&emsp;**首先**，当我们在刷新页面时，观察到不蒜子发送了一个 JSONP 请求：

<img src="https://gitee.com/ylea/imagehost1/raw/master/img/image-20210413215520731.png" alt="image-20210413215520731" style={{zoom: '80%'}} />

&emsp;&emsp;再看看取回的数据，正是我们要获取的 PV 值！：

<img src="https://gitee.com/ylea/imagehost1/raw/master/img/image-20210413215606429.png" alt="image-20210413215606429" style={{zoom: '80%'}} />

&emsp;&emsp;**其次**，Docusaurus 是一个单页面应用，它自己实现了路由功能来完成当前页面的切换，而在路由过程中没有触发这个 JSONP 请求，那么也就拿不到这个 PV 值了，真相大白了！



&emsp;&emsp;那么，要解决这个问题，我们就需要自己手动发送 JSONP 请求来获取数据了，而我们之前又封装了一个 React 组件来展示头部区域，因此我们就可以自己写一个 JSONP 函数，在这个头部组件初始化时调用它来获取数据再展示到页面上就可以了！



JSONP 实现：

```js
function bszJsonp() {
    return new Promise((resolve, reject) => {
        let randomStr = 'BusuanziCallback_' + Math.floor(1099511627776 * Math.random());
        let bszUrl = '//busuanzi.ibruce.info/busuanzi?jsonpCallback=' + randomStr;
        let scriptEle = document.createElement('script');
            scriptEle.type = 'text/javascript',
            scriptEle.defer = !0,
            scriptEle.src = bszUrl,
            scriptEle.referrerPolicy = 'no-referrer-when-downgrade',
            document.getElementsByTagName('head')[0].appendChild(scriptEle);

        window[randomStr] = function(data) {
            resolve(data);
            // 不要忘记移除创建的 script 标签了（避免内存泄漏
            document.removeChild(scriptEle);
        };
    })
}

function bszCallback(data) {
    let pvEle = document.getElementById('busuanzi_value_page_pv');
    pvEle && (pvEle.innerText = data['page_pv']);
}
```

&emsp;&emsp;对于函数组件初始化时机，我们可以使用副作用 Hook ：`useEffect` 来完成：

```jsx
useEffect(() => {
    bszJsonp().then(bszCallback);
}, []);
```



&emsp;&emsp;至此，我们的头部模块中就能正常的显示当前页面的 pv 值了~



## PV 值显示优化

&emsp;&emsp;上面有说到，我们使用了 JSONP 来获取当前页面的 PV 值，不过 JSONP 是异步操作，那么在获取到 PV 值之前页面上对应位置还会是空的，所以在获取到数据前，我们给它加上一个一直在旋转的小圈圈来优化显示效果：

<img src="https://gitee.com/ylea/imagehost1/raw/master/img/circle-4-13.gif" alt="circle-4-13" style={{zoom:'80%'}} />

&emsp;&emsp;方法也很简单：

&emsp;&emsp;在项目中引入一个 CSS 文件 `https://use.fontawesome.com/releases/v5.3.1/css/all.css`

&emsp;&emsp;然后在对应位置加上样式标签即可：

```jsx {9}
<div className="header-container">
    <span id="busuanzi_container_page_pv">
        <i className="iconfont iconrili"></i> 
        <span>{props.time}</span>
        <span className="vertical-gap">|</span>

        <i className="iconfont iconyanjing"></i>
        <span id="busuanzi_value_page_pv">
            <i class="fa fa-spinner fa-spin"></i>
        </span>
    </span>

    <div className="tags-container">
        <i className="iconfont iconlabel-01"></i>
        {
            props.tags.map((tag) => {
                return <span className="blog-tag">  {tag} </span>
            })
        }
    </div>
</div>
```


&emsp;&emsp;至此，组件的完整代码为：

<Tabs
  defaultValue="JSX"
  values={[
    {label: 'JSX', value: 'JSX'},
    {label: 'CSS', value: 'CSS'},
  ]}>

<TabItem value="JSX">


```jsx
import React, { useEffect } from 'react';
import './index.css';

function bszJsonp() {
    return new Promise((resolve, reject) => {
        let randomStr = 'BusuanziCallback_' + Math.floor(1099511627776 * Math.random());
        let bszUrl = '//busuanzi.ibruce.info/busuanzi?jsonpCallback=' + randomStr;
        let scriptEle = document.createElement('script');
            scriptEle.type = 'text/javascript',
            scriptEle.defer = !0,
            scriptEle.src = bszUrl,
            scriptEle.referrerPolicy = 'no-referrer-when-downgrade',
            document.getElementsByTagName('head')[0].appendChild(scriptEle);

        window[randomStr] = function(data) {
            resolve(data);
            // 不要忘记移除创建的 script 标签了（避免内存泄漏
            document.removeChild(scriptEle);
        };
    })
}

function bszCallback(data) {
    let pvEle = document.getElementById('busuanzi_value_page_pv');
    pvEle && (pvEle.innerText = data['page_pv']);
}

function Header(props) {

    useEffect(() => {
        bszJsonp().then(bszCallback);
    }, []);

    return (
        <div className="header-container">
            <span id="busuanzi_container_page_pv">
                <i className="iconfont iconrili"></i> 
                <span>{props.time}</span>
                <span className="vertical-gap">|</span>

                <i className="iconfont iconyanjing"></i>
                <span id="busuanzi_value_page_pv">
                    <i class="fa fa-spinner fa-spin"></i>
                </span>
            </span>

            <div className="tags-container">
                <i className="iconfont iconlabel-01"></i>
                {
                    props.tags.map((tag) => {
                        return <span className="blog-tag">  {tag} </span>
                    })
                }
            </div>
        </div>
    );
}

export default Header;
```

</TabItem>

<TabItem value="CSS">

```css
.header-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    /* margin-bottom: calc(var(--ifm-leading-desktop) * var(--ifm-leading)); */
    margin-bottom: 4.5em;
}

#busuanzi_container_page_pv {
    font-size: 0.9em;
    color: rgba(10, 194, 93, 0.986);
}

.iconlabel-01 {
    color: rgb(5, 231, 220);
    font-size: 1.3em;
}

.iconfont {
    margin-right: 5px;
}

.vertical-gap {
    margin: 0 10px;
}

.tags-container {
    margin-top: 10px;
}

.blog-tag {
    border: rgba(5, 231, 220, 0.911) solid 1px;
    color: rgb(0, 0, 0);
    font-size: 0.9em;
    margin-left: 12px;
    padding: 4px 9px;
    border-radius: 8px;
    transition: background-color, 0.2s ease-in, color 0.2s ease-in;
}

.blog-tag:hover {
    background-color: rgba(5, 231, 220, 0.911);
    color: white;
}
```

</TabItem>
</Tabs>


## 实现自己的 PV、UV 值统计工具

> 2021.9.26 更新

&emsp;&emsp;之前编写文章的 Header 版块时，使用了不蒜子这个工具来进行文章及网站 pv(page view)、uv(unique view) 的统计与显示。

&emsp;&emsp;不蒜子的优点是使用简单便捷，引入一段 js 脚本再加几行代码就能完成对网站访问量的统计。不过使用了一段时间，目前感受到的缺点有两个：

1. 第一个就是本篇第二小结中提到的对 SPA 单页面应用不太友好，为了发送不蒜子的统计请求，需要自己在每个页面初始化时手动调用 jsonp
2. 第二个就是不蒜子的 api 不太稳定，经常会有网络请求失败的情况发生，导致了统计误差的产生并影响了使用体验。

&emsp;&emsp;第二个缺点实在忍受不了，就自己实现了一个统计工具。

&emsp;&emsp;统计工具实现起来并不复杂，其实就是在进入一个页面的时候发送请求，更新 pv 值与 uv 值，并将更新后的结果显示到页面中的指定位置。

&emsp;&emsp;统计值分为两种，一种是对整个网站的统计值，一种是对单个页面的统计值。

&emsp;&emsp;站点的 pv 值更新逻辑简单，只要每次发送请求加 1 即可，而 uv 值则需要对访客进行记录。怎么记录呢，一个比较简单的实现方法就是使用 cookie 来记住用户是否访问过，用户第一次访问时设置一个 cookie，那么在后续发送统计值更新请求时会自动携带这个 cookie，这样就能辨识出用户是否已访问过。再给 cookie 设置一个超时时间，那么在同一天内，用户的访问只能贡献 1 点 uv 值。另一种思路是使用 `localStorage`，并设置一个超时自动删除的脚本，这样可以减少 cookie 的负载消耗，本站的文章点赞按钮就是使用会超时的 `localStorage` 来记录的，使得一位访客一天内对一篇文章只能点赞一次。

&emsp;&emsp;单个页面的 uv 值也是类似实现思路，不过对于单个页面来说，需要有一个唯一的标识来与页面进行关联。我个人实现上使用了页面的 `pathname` 值来作为页面标识。注意到有些页面的路径可能会有中文，那么 url 中的中文会进行转码，而转码后的字符长度可能会超出 url 的限定长度，因此需要进行进一步处理（当 url 过长时有些服务器处理也会发生错误）。这边则使用 `md5` 算法来对路径进行压缩加密，加密后的字符串唯一且长度固定（16字节），能够符合浏览器的 url 长度限制要求。

&emsp;&emsp;最后一点是页面中指定位置的访问值统计显示，实现方式是给需要显示的位置（某个 dom 元素的位置）设置一个规定的 `id` 或是 `class`，当统计值请更新求返回时，再找到对应 dom 元素更新即可。


import Comment from '@site/src/components/Comment';

<Comment />