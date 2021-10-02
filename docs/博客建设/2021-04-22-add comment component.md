---
slug: add comment component
title: 添加评论功能
---

import Highlight from '@site/src/components/Highlight';
import { BlogComponent } from '@site/src/components/CustomComponent';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Comment from '@site/src/components/Comment';

<BlogComponent tags={["博客建设", "Gitalk"]} time="2021-04-22" />

&emsp;&emsp;Docusaurus 是一款静态网站构建工具，它主要是面向文档站点的，因此没有提供开箱即用的评论的功能或是插件。

&emsp;&emsp;不过对于我们的博客来说，有了评论功能的博客才是一个完整的博客(我觉得)。读者对文章内容有困惑或是其他见解等反馈可以及时的和作者交流，对我自己来说，无论是好的反馈还是坏的反馈，只要有反馈，就会让我觉得这篇文章还是有人仔细看的，正面的反馈能够给认同感，满足感，负面反馈也可以让你发现自己文章中的不足。因此给博客加上评论版块还是非常有必要的~

## 几种评论插件比对

&emsp;&emsp;在选择评论插件的时候有了解过几款评论工具，最后选择了 `Gitalk` 完成评论功能（因为其他几种都不太好搭配 Docusaurus...)

1. [Vssue](https://vssue.js.org/zh/)

- 基于 Vue 开发，因此对 Vue 开发的博客比较友好，方便集成
- 支持多个平台的评论登陆和管理，如 Github, Gitlab, Bitbucket, Gitee 和 Gitea
- 除了发表评论之外，还能对评论进行编辑、删除等操作（Gitalk 仅能发表评论

效果如下：

<img src="https://gitee.com/ylea/imagehost1/raw/master/img/image-20210422181444302.png" alt="image-20210422181444302" style={{zoom:"80%"}} />

2. [Valine](https://valine.js.org/)

- 功能丰富，除了基本的评论操作之外还能自定义评论表情以及文章阅读量统计
- 进行评论无需登陆，可以选填自己的邮箱或网址让别人找到你
- 需要使用 LeanCloud 来管理评论数据

效果图：

<img src="https://gitee.com/ylea/imagehost1/raw/master/img/image-20210422194646955.png" alt="image-20210422194646955" style={{zoom:"80%"}} />


3. [Gitalk](https://gitalk.github.io/)

- 基于 Preact（一个轻量级的 React 替代方案）开发，使用 Github Issue 来管理评论数据
- 因此与 Vssue 不同，它仅支持使用 Github 来进行配置
- 因为使用 Github Issue，不搭梯子的话有时候评论拉取速度会不太行


效果图：

<img src="https://gitee.com/ylea/imagehost1/raw/master/img/image-20210422200414066.png" alt="image-20210422200414066" style={{zoom:"80%"}} />


&emsp;&emsp;其实我是比较偏向使用 Valine 的，可以自定义表情包，还能不用登陆就能进行评论，方便了大家的使用，不过尝试了一番无果，就先使用 Gitalk 了，至少先把评论功能加上去再说。


## 使用方法

&emsp;&emsp;使用方法比较简单，跟着文档一步步做下来就行了，不过为了方便食用，还是简单记录一下：

&emsp;&emsp;首先需要新建一个 [OAuth application](https://github.com/settings/applications/new)，Homepage URL 和 callback URL 都填上相同的 URL，这边为了方便自己本地测试就填上了本地服务器了。

> 建议都先填这个，后面还可以改的，因为 Gitalk 还需要初始化一下，需要登陆 github，不填本地服务器地址的话测试的时候点击会重定向到线上页面去，就不好测试了。。。踩坑之一
> 
> 还可以通过点击头像 -> setting -> Developer settings -> OAuth Apps -> New OAuth App 来找到新建页面


<img src="https://gitee.com/ylea/imagehost1/raw/master/img/image-20210422201226610.png" alt="image-20210422201226610" style={{zoom:"80%"}} />


&emsp;&emsp;创建完之后就能看到 Client ID 了，Client secrets 需要新生成一个，这两个值用于后面的 gitalk 配置

<img src="https://gitee.com/ylea/imagehost1/raw/master/img/image-20210422201812992.png" alt="image-20210422201812992" style={{zoom:"80%"}} />

&emsp;&emsp;然后再新建一个仓库，用于存储评论数据，这个不用做什么配置，后面直接将仓库名作为配置值就好了


&emsp;&emsp;然后需要将评论组件引入博客项目中，因为 Docusaurus 本身是基于 React 开发的，因此我选择了使用 [GitalkComponent](https://github.com/gitalk/gitalk/blob/master/readme-cn.md#%E6%96%B9%E5%BC%8F2%E5%9C%A8react%E4%BD%BF%E7%94%A8) 的方式引入：

```jsx
import GitalkComponent from "gitalk/dist/gitalk-component";
import 'gitalk/dist/gitalk.css';  // 样式别忘了导入，我前面忘了然后还搜了半天以为是哪出错了...

// 基本配置，下面字段都是必须的
<GitalkComponent options={{
    clientID: "376f48...5e1f9ac5...",
    clientSecret: "aceda7..367f6...3e", 
    repo: "gittalk-comments", // 我们前面创建的仓库名
    owner: "yleave",
    admin: ["yleave"],  // 可以有多个
}} />
```

&emsp;&emsp;配置到这，Gitalk 就能够提供基本的评论功能了~

## 踩坑

### 坑1：Error: Validation Failed

&emsp;&emsp;不得不说，配置 Gitalk 坑点还是不少...

&emsp;&emsp;最先遇到的坑是 `Error: Validation Failed`，状态码 `422`。关于这个问题 github 有上一堆 Issue ，问题出现的原因是因为 Gitalk 中的 `id` 属性配置，`id` 是我们页面的唯一标识符，它默认是使用 `location.href` 来作为我们的 `id`，且要求长度小于 `50`。但是！对于国内的开发者，有些页面的路径上会带点中文，然后中文转码一下字符串的长度立马就超标了，也就导致了这个错误的出现。

&emsp;&emsp;知道了原因，那么解决方法就是为每个页面自行设置一个唯一且长度小于 `50` 的 `id` 了，人为设置的话太麻烦了，而且也不能保证我们不会粗心导致 `id` 不唯一的情况不发生...参照 [Issue#102](https://github.com/gitalk/gitalk/issues/102) 里的解决方案，可以使用 `md5` 来对路径编码处理：

1. 安装 `md5` ： `cnpm i --save md5`
2. 使用 `md5` 对路径编码：
   
   ```jsx
    import md5 from 'md5';

    <GitalkComponent options={{
      clientID: "376f48...5e1f9ac5...",
      clientSecret: "aceda7..367f6...3e", 
      repo: "gittalk-comments", // 我们前面创建的仓库名
      owner: "yleave",
      admin: ["yleave"],  // 可以有多个
      id: md5(location.pathname)  // pathname 相较 href 更短且也保证是唯一的
    }} />
   ```

&emsp;&emsp;至此，解决了第一个坑点。

### 坑2：ReferenceError: window is not defined

&emsp;&emsp;解决完第一个坑点，评论功能在本地上跑得风生水起，然而一部署到线上的时候就出现了问题：

<img src="https://gitee.com/ylea/imagehost1/raw/master/img/image-20210422212055958.png" alt="image-20210422212055958" style={{zoom:"80%"}} />

&emsp;&emsp;很难受，自信 deploy 然而一盆冷水就浇上来了🙃

&emsp;&emsp;通过 Issues 和 Google 寻求解答，大致定位了问题所在：项目在构建部署的时候使用了服务端渲染 RSS（报错的调用栈中使用了 `renderToString`），此时所处环境为 Node，因此没有 `window` 对象，自然也就报错了...

&emsp;&emsp;观察报错信息，它是在使用 `GitalkComponent` 的时候报错的，那么对于 React 组件，我们就能将代码移到 `componentDidMount` 或是 `useEffect` 中，以确保该代码除非在浏览器中，否则不会运行：

```jsx
import React from 'react';
import GitalkComponent from "gitalk/dist/gitalk-component";
import md5 from 'md5';

export default class Comment extends React.Component {
    constructor() {
        super();
        this.state = {
            ready: false
        };
    }

    componentDidMount() {
        this.setState({
            ready: true
        });
    }

    render() {
        return (
            <>
                {
                  this.state.ready ? 
                      <GitalkComponent options={{
                          clientID: "376f48...5e1f9ac5...",
                          clientSecret: "aceda7..367f6...3e", 
                          repo: "gittalk-comments",
                          owner: "yleave",
                          admin: ["yleave"],
                          id: md5(location.pathname)
                      }} />
                      : null
                }
            </>
        );
    }
}
```

&emsp;&emsp;经过了几个小时的折腾，终于把评论功能搞定了，虽然没有达到自己想要的评论功能效果，不过目前看上去也还不赖🤔

### 坑3: 不唯一的 id 值

&emsp;&emsp;自以为坑点都踩完了，测试了评论功能后自信部署，然而又发现问题了🤡

&emsp;&emsp;在本地测试的时候，对当前文章进行了评论，刷新一下，评论还在，ok👌

&emsp;&emsp;部署到线上后，再次打开这篇文章，点到最底下，评论还在，ok👌

&emsp;&emsp;点开其他页面，再次点进来，拉倒最底下 ？？？评论消失了❓

&emsp;&emsp;重新评论，刷新，拉到最底下，之前的评论又出现了 ❔❔❔

&emsp;&emsp;看了下评论存放的 Issue，确实出现了两个，而且 `id` 值还不同：

<img src="https://gitee.com/ylea/imagehost1/raw/master/img/image-20210422225432818.png" alt="image-20210422225432818" style={{zoom:"80%"}} />


&emsp;&emsp; `md5` 算法对相同的字符串进行加密得到的结果肯定是唯一的，那么就只可能是路径问题了。

&emsp;&emsp;仔细观察后终于发现了问题所在：

- 当我们从其他页面点到当前页面时，我们的路径是这样的：`https://yleave.top/docs/%E5%8D%9A%E5%AE%A2%E5%BB%BA%E8%AE%BE/add%20comment%20component`
  
  `location.pathname` 就是 `/docs/%E5%8D%9A%E5%AE%A2%E5%BB%BA%E8%AE%BE/add%20comment%20component`
- 而当我们刷新了当前页面：`https://yleave.top/docs/%E5%8D%9A%E5%AE%A2%E5%BB%BA%E8%AE%BE/add%20comment%20component/` **末尾多了个斜杠**

> &emsp;&emsp;对于为什么刷新页面会有斜杠：url 末尾的斜杠一般理解是表示该路径是一个文件夹的地址，会去这个文件夹中找到默认资源，而未加斜杠的话则表示这个路径代表了一个资源的定位，也即末尾字符串表示资源名称，而若找不到这个资源的话，则会认为这是一个文件夹，转而去对应文件夹中查找默认资源。
> 
> &emsp;&emsp;也就是若当前路径是表示一个文件夹地址且未加斜杆，那么访问其默认资源会多了一个步骤，中间会多了一个重定向（301）的过程。
> 
> &emsp;&emsp;比如刷新本页面（末尾无斜杆），可以看到浏览器实际上发起了两个请求，第一个请求（url 末尾无斜杆）返回状态码 301，第二个请求（url 末尾带斜杆）返回状态码 200：
> <img src="https://gitee.com/ylea/imagehost1/raw/master/img/image-20210612165535050.png" style={{zoom:"80%"}} />

&emsp;&emsp;既然不同操作 `pathname` 最后的字符是不一样的（有的多了一个 `/`)，那么我们就对这个末尾字符进行处理就好了：

`id: md5(location.pathname.endsWith('/') ? location.pathname : location.pathname + '/')`


&emsp;&emsp;这下总该 ok 了吧？测试了一下，**暂时**没发现什么问题...

> 还是出现问题了，尽管处理了 url 末尾的斜杆，但对同一个页面仍会有不同 id 值，没搞懂...
> 不过没影响到功能使用，暂时先这样吧...


## REF 

- [Gitalk 运作原理](https://carl-zk.github.io/blog/2020/03/03/gitalk-%E8%BF%90%E4%BD%9C%E5%8E%9F%E7%90%86/#%E7%BB%93%E8%AE%BA)
- [Debugging HTML Builds](https://www.gatsbyjs.com/docs/debugging-html-builds/)
- [Issue#102](https://github.com/gitalk/gitalk/issues/102)


<Comment />
