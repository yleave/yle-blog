---
slug: markdown-in-collapse
title: 支持 markdown 的折叠面板
---

import Highlight from '@site/src/components/Highlight';
import CustomComponent from '@site/src/components/CustomComponent';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Comment from '@site/src/components/Comment';
import MarkdownInCollapse from '@site/src/components/MarkdownInCollapse';


<CustomComponent tags={['markdown', '折叠面板']} time="2021-05-03" />

&emsp;&emsp;首先看看看效果：


<MarkdownInCollapse markdown={`
  # title1
  URL: https://reactjs.org.
  ~~~js 
  var a = 3; 
  console.log(a); 
  ~~~
  - abc
  - de
  
  ~strikethrough~
  
  * Lists
  * [ ] todo
  * [x] done
  
  A table:
  | a | b |
  | - | - |
  `}
  header="点击查看效果👇" />

<br/>

&emsp;&emsp;怎么样，还不错吧。Collapse 中支持了 markdown 语法的解析，表达能力更加丰富，这样的折叠面板可以有多种用途，比如给一道笔试题，结果就可以放在这里面，以防不小心瞄到~ 亦或是一些解释性、拓展性的内容也可以放在折叠面板里，来让页面变得整洁。

## 实现

&emsp;&emsp;实现主要是使用了 antd 提供的 [Collapse](https://ant.design/components/collapse-cn/) 组件以及一款 markdown 语法解析组件 [react-markdown](https://github.com/remarkjs/react-markdown)

> 另外，若需要在 react 项目中添加 markdown 编辑组件，可以使用 [for-editor](https://github.com/kkfor/for-editor)

&emsp;&emsp;Collapse 和 react-markdown 组件有多个可选配置，这边就介绍一下能够实现上面效果的最基本配置。

&emsp;&emsp;首先，安装依赖：

- `cnpm i --save react-markdown`
- `cnpm i --save antd`
- `cnpm i --save remark-gfm`
- `cnpm i --save react-syntax-highlighter`


&emsp;&emsp;其中，`remark-gfm` 插件用于提供更加丰富的 `markdown` 解析功能，比如删除线、表格、任务列表、URL 链接等等。

&emsp;&emsp;`react-syntax-highlighter` 正如正面意义，用于提供代码高亮的效果，有多种[风格](https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/master/AVAILABLE_STYLES_PRISM.MD)选择([效果](https://react-syntax-highlighter.github.io/react-syntax-highlighter/demo/prism.html))，像上面展示的代码高亮风格是 `darcula`。

&emsp;&emsp;组件封装：

```jsx
import React from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Collapse } from 'antd';
const { Panel } = Collapse;

// 从 markdwon 文件中解析出 代码段，并进行样式高亮处理，style 可以替换成自己喜欢的代码高亮风格
const components = {
    code({node, inline, className, children, ...props}) {
        const match = /language-(\w+)/.exec(className || '')
        return !inline && match ? (
            <SyntaxHighlighter style={darcula} language={match[1]} PreTag="div" children={String(children).replace(/\n$/, '')} {...props} />
            ) : (
            <code className={className} {...props} />
        )
    }
}

// markdown 为需要解析的 markdown 文档， header 为 Collapse header 所展示的文字，OtherComponents 用于拓展折叠面板中的内容
export default function CollapseWithMarkdown({ markdown, header, OtherComponents }) {

    return (
        <Collapse bordered={false}>
            <Panel header={header}>
                <ReactMarkdown components={components} children={`${markdown}`} remarkPlugins={[gfm]} />
                {
                    OtherComponents ? 
                        <OtherComponents />
                        : null
                }
            </Panel>
            
        </Collapse>
        
    );
}
```

&emsp;&emsp;组件封装代码很简洁，各种轮子使用起来也很方便，不过在本博客中，向组件中传入 markdown 文本时却不那么方便了。

&emsp;&emsp;来看看文章开头实现效果的对应代码：

```jsx
<MarkdownInCollapse markdown={`
  # title1

  URL: https://reactjs.org.
  ~~~js 
  var a = 3; 
  console.log(a); 
  ~~~
  - abc
  - de

  ~strikethrough~

  * Lists
  * [ ] todo
  * [x] done
  
  A table:
  | a | b |
  | - | - |
  `}
  header="点击查看效果👇" />
```

&emsp;&emsp;由于文章是在 markdown 文件中写的，而 markdown 对于一些字符会先进行解析，解析出的内容才会作为文本传入 MarkdownInCollapse 组件中，因此正常写的话很多地方会报错，因此写起来畏手畏脚的也不方便。

&emsp;&emsp;另一个替代方案就是：将当前需要传入 MarkdownInCollapse 组件中的字符串在另一个 JS 文件中写好，再使用 import 导入使用，这样就方便多啦，如：

```js
const text = `
.....
`;

export default {
    text
};
```




<Comment />
