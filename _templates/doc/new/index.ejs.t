---
to: docs/<%= h.date() %>-<%= name %>.md
---
---
slug: <%= name %>
title: <%= title %>
---

import Highlight from '@site/src/components/Highlight';
import CustomComponent from '@site/src/components/CustomComponent';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Comment from '@site/src/components/Comment';
import MarkdownInCollapse from '@site/src/components/MarkdownInCollapse';

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

<CustomComponent tags={[]} time="<%= h.date() %>" />


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

<Comment />
