---
slug: autumn-recruitment2
title: 秋招面经2
---

import Highlight from '@site/src/components/Highlight';
import { InterviewComponent } from '@site/src/components/CustomComponent';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Comment from '@site/src/components/Comment';
import MarkdownInCollapse from '@site/src/components/MarkdownInCollapse';


<InterviewComponent time="2021-10-02" />


## 7. 腾讯-CSIG

  &emsp;&emsp;腾讯面试经历太惨了，就是挂了捞，捞了挂，反复鞭尸，到后面麻木了收到面试邀请都直接拒了。

### 小插曲

  &emsp;&emsp;腾讯云面试真的是一波三折，本来意向是 WXG，接受面试之后才发现是 CSIG 捞的，打电话给 HR 说让取消流程，到了安排的面试时间发现还在流程中，礼貌起见进了视频会议看看面试官在不在，没想到还真在！（HR 你在做什么？！），硬着头皮面完，后面收到了二面通知，拒掉了，二面面试官（估计是部门leader）又打电话来问情况，我说不太想做这个方向（日志处理分析方向），他让我再考虑一天，第二天又打了个电话过，我还是选择不面。然后晚上一面面试官加过来，聊聊聊又把我劝回去面试了（早知道就坚定点不面了 T_T）。二面面的一般，面试官甚至没给我反问的时间就结束了面试...
  
  &emsp;&emsp;最后腾讯云共面了四次，中间不知道有没有换组，总之面试问题就记录了一次...

### x面

1. 项目介绍
2. 遇到的困难，如何解决的
3. react 和原生JS的区别
4. 为什么要使用react
5. setState 后发生了些什么
6. diff 操作
7. js 判断数据类型的方法
8. this 绑定方法
9. bind 的话如果 bind 了很多个对象，那么最后的指向是什么
10. instanceof 是怎么判断的
11. 原型和原型链
12. cdn 是什么，cdn 超时？
13. 同源策略
14. cors 讲一下
15. 请求头字段
16. http2.0 解决了 http1 中的哪些问题
17. 前端安全 xss csrf
18. 最大连续子数组和
19. 最长回文子串

## 8. 腾讯-TEG

&emsp;&emsp;TEG 面完一面才发现捞我的岗位是后端开发...二面问了面试官，说没什么区别 emm

### 一面

1. 跨域

2. css 权重

3. jsonp

4. cors

5. css 污染

6. 事件循环

7. css 权重判断代码题

8. js 作用域代码题 let var

9. css 画圆
  
  使用 css 绘制图形如下所示：

  ![圆](https://gitee.com/ylea/imagehost1/raw/master/img/image-20210831123316935.png)

  <MarkdownInCollapse markdown={`
    ~~~css
    .box {
      width: 0;
      height: 0;
      border-radius: 20px;
      border-left: 20px solid red;
      border-right: 20px solid red;
      border-top: 20px solid black;
      border-bottom: 20px solid black;
      transform: rotate(45deg);
    }
    ~~~
    `} header="解答👇" />

10. 排序、手写快排

11. 智力题：有一个正方形棋盘，棋子大小为 mxm，在双方博弈的情况下，获胜情况（棋盘没有固定的落子地方，只要能容纳棋子都能放），最后无法落子的人就输了。

### 二面

&emsp;&emsp;全程扯项目，然后挂了

## 腾讯-WXG

### 一面

1. 是如何学习前端的
2. 实习项目，团队规模、负责的业务
3. 跨域
4. cors
5. html渲染流程
6. 回流与重绘
7. react框架的理解
8. 使用react框架和原生前端开发方法的区别与优缺点
9. react fiber
10. react 的更新流程
11. react diff
12. tcp 三次握手与四次挥手、四次挥手中为什么要等 2MSL
13. 做题
14. 事件循环机制，看代码说结果

### 二三面

&emsp;&emsp;二三面是面委面，两个面委是独立的。面试过程没记录，和普通面试还是有点区别的，感受是面委面更综合些，不过还是挂了，难受。



## 8. 美团

  &emsp;&emsp;美团是直通车，所以只有一场面试。

### 二面

1. 这段时间内（春招到现在）学习了什么知识，写过什么项目
2. React Fiber 原理，在使用 Fiber 之前是怎么样的
3. Fiber 是怎么实现分片机制的
4. Fiber 中优先级是怎么辨认的
5. 页面卡顿会有什么样的表现（结合Fiber前的React）
6. JS 事件循环
7. React Hook 是什么，为什么要推出这些 API
8. Hook 的内部运作机制
9. React Hook 是怎么保证顺序的，子组件之间的 Hook 顺序怎么保证的
10. 对 React 生态有哪些了解
11. 有看过 React 源码吗
12. 有遇到过哪些棘手的 React 技术问题
13. 哪些 React 生命周期钩子在服务端中是会使用到的
14. 接下来的学习规划
15. 对 Webpack 的理解
16. webpack 懒加载是怎么实现的
17. 怎么知道懒加载完成了
18. Tree Shaking 原理
19. ES6 Module 是如何进行依赖分析的
20. AST 长什么样，它是如何分辨Dead Code的
21. 对 ts 有什么了解，nodejs 有什么了解
22. 秋招的进度，对工作的选择


## 9. 网易雷火

### 一面

1. 前端如何切图
2. webpack 配置
3. 跨域
4. tcp 握手
5. tcp 如何保证可靠
6. 项目在本地环境运行的好好的，上线就挂了，要怎么排查
7. CDN
8. ES6特性
9. .....


### 二面

1. canvas 如何切图
2. 最近有在学习什么前端知识
3. 对前端哪方面比较感兴趣
4. threejs 中遇到过哪些难点
5. threejs 中的坐标系
6. webpack 打包原理、常用 loader 和 plugin
7. 前端路由模式
8. webpack 如何配置多页面
9. 跨域 jsonp 和 cors
10. css animation
11. css 如何做兼容
12. 移动端布局 
13. 给你一个设计图，如何使用 rem 兼容
14. 前端鉴权
15. cookie 中的一些属性
16. token 如何生成
17. 

## 10.爱奇艺

> 2021.10.02

&emsp;&emsp;爱奇艺就两面，应该是过了，不过还在泡池子，面试完后就没什么动静了

### 一面

1. 输入 url 的过程

2. 往页面中加 1000 个 div 元素会对页面性能有什么影响，应该怎么做

3. 页面首加载优化方法

4. map、set、weakMap 和 weakSet

5. promise 中的错误能使用 try catch 捕获到吗，不能的话如何实现呢（await）

6. tcp 3次握手4次挥手

7. https

8. https 一定是安全的吗

9. http2.0

10. div 垂直居中方法

11. react 虚拟dom是什么，比起原生写法一定性能一定会高吗

12. 图片懒加载如何实现

13. 跨域

14. 手写 jsonp

15. 手写 深拷贝

16. 如下
    
    ```js
    var value = 2;
    var myObj = { value: 3 };  
    var add = function(a, b){ return a + b; };  
    myObj.double = function () {  
        var helper = function(){  
            this.value = add(this.value,this.value);  
            console.log(this.value)  
        };  
        helper();
    };  

    myObj.double();

    // 如何修改得到答案 6
    ```
17. 看代码说答案
    
    ```js
    console.log("1");
    setTimeout(()=>{
        console.log(2)
        Promise.resolve().then(()=>{
            console.log(3);
            process.nextTick(function foo() {
                console.log(4);
            });
        })
    })
    Promise.resolve().then(()=>{
        console.log(5);   
        setTimeout(()=>{
            console.log(6)
        })
        Promise.resolve().then(()=>{
            console.log(7);
        })
    })

    process.nextTick(function foo() {
        console.log(8);
        process.nextTick(function foo() {
            console.log(9);
        });
    });
    console.log("10")
    ```

19. 实现一个搜索系统，查找给定字符的全排列在查找集中的出现次数。如：给定字符abc，查找集abc,abcd,bac,bca,cba,aac,bbc

20. 对 nodejs 和 数据库有什么了解


### 二面

1. react 的类组件和 hook 的区别，生命周期函数在类组件和 hook 中

2. tcp 滑动窗口

3. 进程和线程、如何通信

4. http1.0 和 http1.1 的区别

5. 去除重复连续字符（算法题）

  ```js
  题目描述：有一个长度为n的字符串A（n可能很大，即如果要分配与n相当的buffer则要考虑空间复杂度问题），
  
  其中的字符是乱序的，请写一个简单的算法，让字符串中不包含任何连续重复的字符，并使该字符串长度尽可能短。

   样例输入：
    abcdefgggfedcbc
   样例输出： 
   ac
  ```

## 11.虾皮

### 一面

&emsp;&emsp;一面全程做题，自我介绍的时间都没。

&emsp;&emsp;根据一个场景衍生出的七道算法题，难度基本没有超过力扣的 medium，而且有的题目之间还有关联，所以总体难度还行。

### 二面

&emsp;&emsp;二面问了一些前端相关的知识，主要是 react 方面的，然后让写了一个 `setState` 的简单实现和一个 `Toast` 组件的实现。

<Comment />
