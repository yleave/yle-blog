---
slug: awesome-mdx
title: Awesome MDX
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Highlight from '@site/src/components/Highlight';
import CustomComponent from '@site/src/components/CustomComponent';

<CustomComponent tags={['markdown']} time="2021-4-05" />

搭建博客的过程中遇到了一个新格式：`.mdx`，它太 awesome 了，结合了 markdown 和 jsx 语法，这样页面内容就可以变得更加丰富多彩了！话虽如此，不过目前就单独的 markdown 基本够应付日常的博客笔记了...

不过仍值得学习，有备无患~

> 2021.4.9 记
> 
> 虽然 mdx 很香，不过支持 Docusaurus 的 mdx 语法的工具不太好找 😢，原本写博客使用 typora + PicGo 非常方便，但是 typora 貌似并不支持 mdx 语法，在 typora 中写的话排版会很难受 ，而且还有部分语法解析规则不相同，总之就是丧失了一大利器
> 
> 所以看来今后写博客只能在 VSCODE 上写了？？更难受的是在 VSCODE 上下载了一个 MDX 文件的预览插件，但是这个插件并不能解析 Docusaurus 的路径解析 ：`@site` 语法，因此无法同步预览了，要查看效果只能在浏览器里查看，难受 😫
> 
> 这就是鱼和熊掌不可兼得吗，获得了更加丰富的表现能力就要在文章编辑效率上做出一定的舍弃 😩

---

[Markdown](https://daringfireball.net/projects/markdown/syntax) 

[MDX](https://mdxjs.com/) 

支持的部分 Markdown 特性如下：


## 头部字段定义

[Front Matter](https://jekyllrb.com/docs/front-matter/)，为文档提供一些基本信息

```md
---
slug: doc
id: my-doc
title: My document title
description: My document description
sidebar_label: My doc
---

Markdown content
```

## 超链接

支持页面内的相对路径跳转和其他页面的绝对路径跳转：

> 相对路径的文件名称也可以是文章的头部字段中定义的 slug 值

```md
Let's see how to [Link](./前言).
```

```md
Let's see how to [Link](https://yleave.top/docs/).
```



<Highlight>页面内跳转：</Highlight>

Let's see how to [Link](../杂谈/前言).

<Highlight>新页面跳转：</Highlight>

Let's see how to [Link](https://yleave.top/docs/).

<Highlight>图片链接：</Highlight>

可以使用相对路径来使用 `static` 路径下的图片： `static/img/docusaurus.png` ，当然也能使用绝对路径使用网络上的图片。

```md
![Docusaurus logo](/img/docusaurus.png)
```

![Docusaurus logo](/img/docusaurus.png)


## 标注

提供了很棒的标注语法，共有五种：

    :::note

    The content and title *can* include markdown.

    :::

    :::tip You can specify an optional title

    Heads up! Here's a pro-tip.

    :::

    :::info

    Useful information.

    :::

    :::caution

    Warning! You better pay attention!

    :::

    :::danger

    Danger danger, mayday!

    :::

:::note

The content and title *can* include markdown.

:::

:::tip You can specify an optional title

Heads up! Here's a pro-tip.

:::

:::info

Useful information.

:::

:::caution

Warning! You better pay attention!

:::

:::danger

Danger danger, mayday!

:::



## React 组件

Docusaurus 中支持 mdx 语法，即可以在 markdown 中使用 jsx 语法添加自定义组 React 组件，当这样使用的时候最好把文件后缀改成 `.mdx` 以便于更准确的解析和更好的编辑器支持：

```jsx
export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: 'red',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

<Highlight color="#25c2a0">Docusaurus green</Highlight> and <Highlight color="#1877F2">Facebook blue</Highlight> are my favorite colors.
```

export const Highlight1 = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

<Highlight1 color="#25c2a0">Docusaurus green</Highlight1> and <Highlight1 color="#1877F2">
  Facebook blue
</Highlight1> are my favorite colors.


## 标签组

Docusaurus 提供了 `<Tabs>` 组件，开箱即用（舒服：

```jsx
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="apple"
  values={[
    {label: 'Apple', value: 'apple'},
    {label: 'Orange', value: 'orange'},
    {label: 'Banana', value: 'banana'},
  ]}>
  <TabItem value="apple">This is an apple 🍎</TabItem>
  <TabItem value="orange">This is an orange 🍊</TabItem>
  <TabItem value="banana">This is a banana 🍌</TabItem>
</Tabs>;
```

<Tabs
  defaultValue="apple"
  values={[
    {label: 'Apple', value: 'apple'},
    {label: 'Orange', value: 'orange'},
    {label: 'Banana', value: 'banana'},
  ]}>
  <TabItem value="apple">This is an apple 🍎</TabItem>
  <TabItem value="orange">This is an orange 🍊</TabItem>
  <TabItem value="banana">This is a banana 🍌</TabItem>
</Tabs>


可通过 `groupId` 来同步或创建多个标签组，也可以通过 `className` 自定义标签组的外观


:::info

默认情况下，标签组在加载之后就会立即渲染，但是你可以通过向 `Tabs` 组件传递 `lazy` 属性让该组件延迟加载。

:::



## 代码块

### 基本设置


使用 ` ``` ` 来创建代码块， <Highlight>使用 title 字段定义代码标题：</Highlight>

    ```jsx title="src/components/HelloDocusaurus.js"
    function HelloDocusaurus() {
        return (
            <h1>Hello, Docusaurus!</h1>
        )
    }
    ```

```jsx title="src/components/HelloDocusaurus.js"
function HelloDocusaurus() {
  return <h1>Hello, Docusaurus!</h1>;
}
```

. <Highlight>代码中的变化标记 diff： </Highlight>



    ```diff title="sidebars.js"
    module.exports = {
      docs: [
        {
          type: 'category',
          label: 'Docusaurus Tutorial',
    -     items: ['getting-started', 'create-a-doc', ...],
    +     items: ['getting-started', 'create-a-doc', 'hello', ...],
        },
      ],
    };
    ```

```diff title="sidebars.js"
module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Docusaurus Tutorial',
-     items: ['getting-started', 'create-a-doc', ...],
+     items: ['getting-started', 'create-a-doc', 'hello', ...],
    },
  ],
};
```

<Highlight>设置某行高亮：</Highlight>

如设置第一行、设置第 4 ~ 6 行和第 11 行代码高亮，[更多行号设置](https://www.npmjs.com/package/parse-numeric-range)：

    ```jsx {1,4-6,11}
    import React from 'react';

    function MyComponent(props) {
      if (props.isBar) {
        return <div>Bar</div>;
      }

      return <div>Foo</div>;
    }

    export default MyComponent;
    ```

```jsx {1,4-6,11}
import React from 'react';

function MyComponent(props) {
  if (props.isBar) {
    return <div>Bar</div>;
  }

  return <div>Foo</div>;
}

export default MyComponent;
```

### 多语言代码块

假如你精通各个语言的 hello world，那这个功能就非常好用了：


    import Tabs from '@theme/Tabs';
    import TabItem from '@theme/TabItem';

    <Tabs
      defaultValue="js"
      values={[
        { label: 'JavaScript', value: 'js', },
        { label: 'Python', value: 'py', },
        { label: 'Java', value: 'java', },
      ]
    }>
    <TabItem value="js">

    ```js
    function helloWorld() {
      console.log('Hello, world!');
    }
    ```

    </TabItem>
    <TabItem value="py">

    ```py
    def hello_world():
      print 'Hello, world!'
    ```

    </TabItem>
    <TabItem value="java">

    ```java
    class HelloWorld {
      public static void main(String args[]) {
        System.out.println("Hello, World");
      }
    }
    ```

    </TabItem>
    </Tabs>


<Tabs
  defaultValue="js"
  values={[
    { label: 'JavaScript', value: 'js', },
    { label: 'Python', value: 'py', },
    { label: 'Java', value: 'java', },
  ]
}>
<TabItem value="js">

```js
function helloWorld() {
  console.log('Hello, world!');
}
```

</TabItem>

<TabItem value="py">

```py
def hello_world():
  print 'Hello, world!'
```

</TabItem>

<TabItem value="java">

```java
class HelloWorld {
  public static void main(String args[]) {
    System.out.println("Hello, World");
  }
}
```
</TabItem>
</Tabs>


### 实时代码编辑器

要使用这个功能需要安装 `@docusaurus/theme-live-codeblock` 插件：

<Tabs
  defaultValue="npm"
  values={[
    {label: 'Npm', value: 'npm'},
    {label: 'Yarn', value: 'yarn'},
]}>

<TabItem value="npm"> 

```bash
cnpm install --save @docusaurus/theme-live-codeblock 
```
</TabItem>

<TabItem value="yarn"> 

```bash
yarn add @docusaurus/theme-live-codeblock
```
</TabItem>
</Tabs>


然后再将其添加到 `docusaurus.config.js` 中：

```js {3}
module.exports = {
  // ...
  themes: ['@docusaurus/theme-live-codeblock'],
  // ...
};
```

然后在代码块前加上 `live` 即可：` ```live `，RESULT 中的就是这段代码的运行结果：

```jsx live
function Clock(props) {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }
  
  return (
    <div>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}
```



## 内联目录

也就是在文章开头显示文章的目录，已经有侧边目录功能了，这个就 pass。

```jsx
import TOCInline from '@theme/TOCInline';

<TOCInline toc={toc} />;
```


import Comment from '@site/src/components/Comment';

<Comment />