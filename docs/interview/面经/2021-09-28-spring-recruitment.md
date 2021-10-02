---
slug: spring-recruitment
title: 暑期实习面经
---

import Highlight from '@site/src/components/Highlight';
import { InterviewComponent } from '@site/src/components/CustomComponent';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Comment from '@site/src/components/Comment';
import MarkdownInCollapse from '@site/src/components/MarkdownInCollapse';


<InterviewComponent time="2021-09-28" />

## 蚂蚁

&emsp;&emsp;阿里暑期提前批会有免录入系统的机会，要好好把握。我春招的第一次面试就给了阿里，忘了是什么部门了，第一次面试表现比较差，挂掉了，蚂蚁是我在阿里的第二个面试部门。

### 阿里自建平台的笔试

1. 给定一个排序数组和 target，使用**二分**查找 target 在数组中出现的起始索引和终止索引位置（target 可能会重复出现），若没有，返回空数组（力扣[第 34 题](https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/)）

1. 实现一个 BigInt 类（大数的范围会超过 `Number.MAX_VALUE`）

   ```js
   function BigInt(str) {}
   BigInt.prototype.add = function(bigint) {
       // code
       return this.toString(result);
   }
   Bigint.prototype.toString = function() {}
   ```

2. 实现一个单链表，链表有添加操作 `insert(value)`、移除操作 `remove(value)` 和使用 `console` 打印链表 

   ```js
   function LinkList() {}
   LinkList.prototype.insert = function(val) {}
   LinkList.prototype.remove = function(val) {}
   LinkList.prototype.print = function() {}
   ```

3. 有一个 `div` 元素，使用原生 JS 实现它的拖拽操作

  [解答](https://yleave.top/docs/JS/dom-drag)

4. 写出使下面 `div` 垂直居中布局的方法，能写几个写几个

   ```html
   <div class="container">
       <div class="item"></div>
   </div>
   ```

### 一面

1. 复盘之前的笔试题，然后根据笔试题问
2. css position 属性
3. css 弹性布局 flex 属性设置
4. 两个 div ，一个设置了绝对定位导致覆盖了另一个，那么怎么样让另一个显示在原先的水平上方
5. z-index 属性原理
6. css position 属性
7. 使用弹性布局 header和footer大小固定，然后中间是弹性缩放
8. react组件中批更新
9. react的生命周期函数
10. react中purecomponent作用
11. redux工作流程
12. redux异步请求怎么处理
13. hook优点，解决了什么问题
14. hook为什么不能放在 if语句里
15. 箭头函数和普通函数的区别
16. 箭头函数中augument怎么获得
17. JS继承
18. JS闭包
19. JS的object create
20. 冒泡和捕获
21. e.preventDefault
22. 如何在捕获阶段触发事件
23. 有一个100行100列的表格，当点击其中一个单元格时如何让它能够显示下拉菜单

### 二面

&emsp;&emsp;二面是部门 Leader 御术大佬面的，遇到大佬有点紧张表现也不太好...面试偏唠嗑，从本科问起，成绩怎么样，学了哪些课，有做过什么项目等等等，觉得学的比较好的课程，我说数据结构，然后就问到了项目中哪些地方使用了数据结构的知识等等

1. 看过哪些书，怎么学习的

2. 怎么对对象进行序列化，优化存储空间

3. 怎么自己实现这个序列化和反序列化

4. 对象遍历方法，for in 是有顺序的遍历吗

5. 介绍一下项目

6. 项目中使用的一些技术是现学的还是之前有学过的

7. 学习过程中有看过源码吗

8. 反问

&emsp;&emsp;前前后后大概 40 分钟


## 莉莉丝

### 一面（现场面）

&emsp;&emsp;一面去了现场面试，感觉莉莉丝工作环境很不错~

1. 浏览器从输入 url 到页面显示的过程，提到了 html 的解析过程，然后问什么情况下会发生回流
2. html 页面解析是顺序进行的吗
3. git 操作，怎么从另一个分支中取得一个文件到当前分支
4. redux 介绍，redux 流程
5. hooks 中什么 hook 和 redux 很像
6. flex 布局，两个元素都在左边排列，如何将其分到两边，不使用 space-between 呢
7. vw、vh
8. promise 中的 all，如何让 all 中的 promise 在 reject 后，还能输出其他的已完成的 promise 状态（Promise.allSettled）
9. js 的原型链
10. webpack，有用 webpack 做过什么
11. threejs 和 cesium 的使用心得
12. position 属性中的 sticky ，可以用来做什么

### 二面

1. 简单了解情况
2. React 的优缺点
3.  对一个小白讲解什么是前端，以及前端工作流程
4.   React 中有什么需要注意的
5.   React 中的一些试错经历


## 美团

### 一面

1. webgl 问题，顶点着色器和片元着色器
2. dom 解析流程，script 标签问题，async 和 defer
3. 浏览器缓存问题，HTTP 头部缓存相关字段，cookie 和 storage，indexDB 等存储了解多少
4. webpack 原理
5. React Fiber 原理
6. git 操作，分支的冲突问题  git revert，rebase
7. React 生命周期，为什么一些生命周期方法要被废弃
8. 业务偏好，一个是产品经理需求任务，一个是底层需求（他们部门平常的活）
9. 平常怎么学习的
10. 项目介绍，项目中遇到的困难，怎么解决的
11. 后端有没有接触，  NodeJS 呢

### 二面

1. 项目介绍，在项目中的定位，做了些什么
2. 介绍一下 ThreeJS
3. Webpack 的执行过程
4. React 和 ThreeJS 如何共同使用
5. 浏览器输入 url 的过程
6. 回流和重绘
7. React 运行流程
8. 做过的一些项目
9. 有没有了解一些设计模式，React 中的设计模型


## 拼多多

### 一面

1. mate属性可选值
2. link 标签相关
3. webpack 如何配置提升效率
4. link 标签下载会阻塞 dom 吗，会有什么现象
5. html 页面解析过程
6. async 和 defer
7. defer 是在 dom ready 前还是后
8. 移动端适配
9. rem 怎么做移动端适配
10. 常见的 inline 和 block 元素
11. inline 盒子哪些属性是无效的
12. js 闭包
13. xss 和 csrf 及如何防御
14. fetch 请求如何设置定时效果
15. 浏览器缓存相关
16. cache-control 中的 no-cache 和 no-store 的区别
17. BFS 触发条件
18. 跨域
19. 水平垂直居中
20. 箭头函数
21. 如何改变 this 指向
22. react 的 错误边界
23. hook 中的 useEffect 和 useCallback 有什么相同点和异同点
24. react 状态提示
25. react ref
26. react context
27. ajax 中的 options 请求
28. promise 常用方法
29. 有做过服务端渲染吗
30. JS 垃圾回收机制
31. 如何判断一个对象是数组
32. React diff

### 三面

&emsp;&emsp;二面忘了..

1. 找到页面中的所有 tagName，去除重复的标签

   ```js
   let node = document.documentElement;
   
   const getTags = (node) => {
       if (node.children.length === 0) {
           return [node.tagName];
       }
   
       let arr = [node.tagName];
       for (let n of node.children) {
           arr.push(...getTags(n));
       }
   
       return arr;
   }
   
   ans = getTags(node);
   ans = Array.from(new Set(ans));
   
   console.log(ans)
   ```

2. 传入一组 url，尽可能快的按照数组顺序输出请求结果
