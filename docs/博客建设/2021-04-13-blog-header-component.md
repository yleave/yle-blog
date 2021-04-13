---
slug: blog-header-component
title: 博客头部样式自定义
---

import Highlight from '@site/src/components/Highlight';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CustomComponent from '@site/src/components/CustomComponent';

<CustomComponent tags={['博客搭建', 'jsonp']} time="2021-04-13" />


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




