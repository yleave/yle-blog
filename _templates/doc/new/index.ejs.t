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




<Comment />
