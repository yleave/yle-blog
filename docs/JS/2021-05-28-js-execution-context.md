---
slug: js-execution-context
title: JS词法作用域、执行上下文与闭包
---

import Highlight from '@site/src/components/Highlight';
import { BlogComponent } from '@site/src/components/CustomComponent';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Comment from '@site/src/components/Comment';
import MarkdownInCollapse from '@site/src/components/MarkdownInCollapse';

<BlogComponent tags={['词法作用域', '执行上下文', '闭包', '作用域链']} time="2021-05-28" />


## 词法作用域

&emsp;&emsp;JS 使用的是**词法作用域（或称为静态作用域）**，**函数的作用域在定义的时候就决定了**，与词法作用域相对的是**动态作用域**，动态作用域会在运行时确定的。

&emsp;&emsp;一个《JS权威指南》中的例子：

```js
var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f();
}
checkscope();
```

```js
var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f;
}
checkscope()();
```


<MarkdownInCollapse markdown={`
  两段代码的执行结果都是："local scope"
  `}
  header="代码执行结果👇" />

&emsp;&emsp;这也表明了JS 的作用域是静态作用域。

&emsp;&emsp;引用《JavaScript权威指南》的回答就是：

> &emsp;&emsp;JavaScript 函数的执行用到了作用域链，这个作用域链是在函数定义的时候创建的。嵌套的函数 `f()` 定义在这个作用域链里，其中的变量 scope 一定是局部变量，不管何时何地执行函数 `f()`，这种绑定在执行 `f()` 时依然有效。





## 执行上下文与词法环境

&emsp;&emsp;JS 中有一个执行调用栈和执行上下文的概念，执行栈是一个先进后出的数据结构，JS在执行每个函数的时候都会创建一个函数执行上下文，并将其压入执行栈中，当函数执行完后才将其从执行栈中弹出。执行栈最开始压入的是全局执行上下文，可以看作是最外层的 JS 代码环境。



**函数执行上下文是在函数被执行的时候才创建的。**



**执行上下文**的生命周期可以分为两个阶段：

1. 创建阶段
2. 执行阶段



一个执行上下文会由几部分组成：

1. 词法环境（Lexical Environment）
2. 变量环境（Variable Environment），也是一种词法环境
3. this 绑定（This Binding）

词法环境 & 变量环境中又包含了：

1. 环境记录（EnvironmentRecord），一个存储所有局部变量作为其属性的对象。
2. 指向外部环境的指针（outer），全局环境执行上下文中的 outer 为 `null`



&emsp;&emsp;词法环境和变量环境保存了函数中定义的变量和函数的标识。

&emsp;&emsp;在执行阶段，这三个部分都会被确定，词法环境和变量环境中的变量会被初始化，直到执行阶段才会被真正赋值。

> 网上文章中经常看到的变量对象（Variable Object，AO）和活跃对象（Activation Object，AO） 实际上是 ES1/ES3 中的内容，在 ES5 及以后的版本中已经不存在 AO 及一系列相关概念了，取而代之的是一个叫词法环境（Lexical Environment）的定义。
>
> 关于词法环境，大可以参阅：
>
> - [ECMA-262-5 in detail. Chapter 3.2. Lexical environments: ECMAScript implementation](http://dmitrysoshnikov.com/ecmascript/es5-chapter-3-2-lexical-environments-ecmascript-implementation/).
> - [csdn ECMA-262-5 词法环境：ECMA实现](https://blog.csdn.net/szengtal/article/details/78726143)



&emsp;&emsp;在 ES6 中，词法环境和变量环境的区别在于 **词法环境用于存储函数和使用 `let` 和 `const` 声明的变量**，而**变量环境仅用于存储使用 `var` 声明的变量。**

&emsp;&emsp;对于**函数执行上下文**来说，函数传入的**参数**也会被保存在**词法环境**中。



举个例子：


<Tabs
  defaultValue="JS"
  values={[
    {label: 'JS', value: 'JS'},
    {label: '对应执行上下文', value: 'execContext'},
  ]}>
  <TabItem value="JS">

```js
let a = 20;  
const b = 30;  
var c;

function multiply(e, f) {  
 var g = 20;  
 return e * f * g;  
}

c = multiply(20, 30);
```
  </TabItem>
  <TabItem value="execContext">

```js
// 首先会有一个全局执行上下文
GlobalExectionContext = {
  ThisBinding: <Global Object>,

  LexicalEnvironment: {  
    EnvironmentRecord: {  
      Type: "Object",  
      // 标识符绑定在这里  
      a: < uninitialized >,  
      b: < uninitialized >,  
      multiply: < func >  
    }  
    outer: <null>  
  },

  VariableEnvironment: {  
    EnvironmentRecord: {  
      Type: "Object",  
      // 标识符绑定在这里  
      c: undefined,  
    }  
    outer: <null>  
  }  
}

FunctionExectionContext = {  
   
  ThisBinding: <Global Object>,

  LexicalEnvironment: {  
    EnvironmentRecord: {  
      Type: "Declarative",  
      // 标识符绑定在这里  
      Arguments: {0: 20, 1: 30, length: 2},  
    },  
    outer: <GlobalLexicalEnvironment>  
  },

  VariableEnvironment: {  
    EnvironmentRecord: {  
      Type: "Declarative",  
      // 标识符绑定在这里  
      g: undefined  
    },  
    outer: <GlobalLexicalEnvironment>  
  }  
}
```

  </TabItem>
</Tabs>


&emsp;&emsp;执行上下文在创建阶段就绑定的函数和变量也就是我们观察到的**变量提升/函数提升**的原因。

&emsp;&emsp;注意到词法环境和变量环境中变量的初始化分别是 `uninitialized` 和 `undefined`，因此对于 `let` 和 `const` 声明的变量，若在赋值之前使用的话会报 `Reference Error` ，而对于 `var` 声明的变量则会是 `undefined`。



&emsp;&emsp;而函数的变量提升优先级会高于变量提升，这是因为在执行上下文创建阶段：

1. 对函数的所有形参（若是函数上下文）
   - 由名称和对应值组成的一个变量对象的属性被创建
   - 若没有实参，属性值设为 `undefined`
2. 对函数声明
   - 由名称和对应值（函数对象）组成的一个变量对象的属性被创建
   - 如果变量对象已经存在相同名称的属性，则**完全替换**这个属性
3. 对变量声明
   - 由名称和对应值（`undefined` 或 `uninitialized`）组成的一个变量对象的属性被创建
   - 对于 `var` 声明的变量，如果变量名称和已经声明的形式参数或函数相同，则变量声明不会干扰已存在的这类属性；而若是 `let` 或 `const` 声明的对象，若已存在同名对象则会报错。



&emsp;&emsp;可以使用几个例子来进行验证：


1. 函数提升优先级大于变量提升：

```js
console.log(a)	// 打印函数 a

function a() {}

var a = 3;
```

2. 对函数声明，若已存在同名属性则会完全替换：

```js
console.log(a)	// 打印第二个定义的函数 a

function a() {}

function a() {
    console.log(a)
}

console.log(a)	// 打印第二个定义的函数 a
```

3. 对于使用 `var` 的变量声明，若已存在同名属性，则不会进行干扰：

```js
console.log(a)

function a() {}

var a = 3;
var a = 4;

// 代码可以正常运行...
```


再看一道题：

```js
function foo() {
    console.log(a);
    a = 1;
}

foo(); // ???

function bar() {
    a = 1;
    console.log(a);
}
bar(); // ???
```

<MarkdownInCollapse markdown={`
  &emsp;&emsp;foo 执行时会报错：ReferenceError: a is not defined，这是因为变量 a 并没有使用 var 声明，因此它在执行上下文创建阶段不会进行初始化（undefined），进而报错。
  
  &emsp;&emsp;bar 执行后会打印 1。虽然 a 也没有使用 var 关键字申明，但在打印 a 的时候已经对其进行了赋值，因此不会报错。
  `}
  header="解析👇" />


&emsp;&emsp;**另外，对于这类在函数中没有使用关键字声明的变量，会被设置为全局变量，导致全局环境污染以及内存泄漏：**

```js
function bar() {
    a = 1;
    console.log(a);
}
bar();

console.log(window.a);	// 1
```



## 闭包

&emsp;&emsp;引用红皮书上对闭包的陈述：

> 闭包是指有权访问另一个函数作用域中的变量的函数。

&emsp;&emsp;有两个要点：

- 闭包是函数
- 它可以访问另一个函数的作用域中的变量

&emsp;&emsp;根据这个定义，其实 JS 中的所有函数都是闭包，不过我们通常说闭包指的是在一个函数中返回另一个函数的情况，这个被返回的函数我们就叫它闭包。

&emsp;&emsp;这种情况下，即使外部函数的调用已结束，但闭包仍能访问到其内部的变量和参数。



来看一个例子：

```js
function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();
```

&emsp;&emsp;在这个例子中，`counter` 就是我们一般所指的**闭包**，且每次调用 `counter`，就能获得 `count` 值，然后 `count` 会自增。

&emsp;&emsp;在每次 `makeCounter()` 调用的开始，都会创建一个**新的**词法环境对象，以存储该 `makeCounter` 运行时的变量。

&emsp;&emsp;根据我们上面对执行上下文的介绍可以知道，对于这个例子，它有两层嵌套的词法环境：

<img src="https://gitee.com/yleave/imagehost1/raw/master/img/image-20210528192626093.png" alt="image-20210528192626093" style={{zoom:"80%"}} />

&emsp;&emsp;当执行 `makeCounter` 函数时，创建了一个匿名函数，此时这个匿名函数还未运行。

&emsp;&emsp;而所有函数在创建时都会有一个指针指向创建它的外部环境：`[[Environment]]`（也就是我们上面说的 `outer`），即使 `makeCounter` 结束，这个引用也仍然存在。

<img src="https://gitee.com/yleave/imagehost1/raw/master/img/image-20210528192917079.png" alt="image-20210528192917079" style={{zoom:"80%"}} />

&emsp;&emsp;现在，当 `counter()` 中的代码查找 `count` 变量时，它首先搜索自己的词法环境（为空，因为那里没有局部变量），然后是外部 `makeCounter()` 的词法环境，并且在哪里找到就在哪里修改。**即在变量所在的词法环境中更新变量。**

<img src="https://gitee.com/yleave/imagehost1/raw/master/img/image-20210528193440752.png" alt="image-20210528193440752" style={{zoom:"80%"}} />


:::note 闭包与垃圾回收机制

&emsp;&emsp;闭包所指向的词法环境能够存在与 JS 引擎的垃圾回收机制也有关系：

&emsp;&emsp;通常，函数调用完成后，会将词法环境和其中的所有变量从内存中删除。因为现在没有任何对它们的引用了。与 JavaScript 中的任何其他对象一样，词法环境仅在可达时才会被保留在内存中。

&emsp;&emsp;但是，如果有一个嵌套的函数在函数结束后仍可达，则它将具有引用词法环境的 `[[Environment]]` 属性。

:::


:::info 闭包在实际开发中的优化

&emsp;&emsp;关于闭包所访问的外部环境中的变量，在实际中，JavaScript 引擎会试图优化它。它们会分析变量的使用情况，如果从代码中可以明显看出有未使用的外部变量，那么就会将其删除。

&emsp;&emsp;因此，**在 V8（Chrome，Edge，Opera）中的一个重要的副作用是，此类变量在调试中将不可用。**

&emsp;&emsp;具体可看：[实际开发中的优化](https://zh.javascript.info/closure#shi-ji-kai-fa-zhong-de-you-hua)

:::


### 闭包练习

1. Counter 是独立的吗？

```js {15,16}
function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

alert( counter() ); // 0
alert( counter() ); // 1

alert( counter2() ); // ?
alert( counter2() ); // ?
```

<MarkdownInCollapse markdown={`
  &emsp;&emsp;答案是 0, 1
  
  &emsp;&emsp;因为每次执行 makeCounter 时，都会创建一个新的执行上下文，所以 counter、counter2 中的 [[Environment]] 所引用的词法作用域是不同的
  `}
  header="解析👇" />

2. Counter 对象

&emsp;&emsp;这里通过构造函数创建了一个 counter 对象。

&emsp;&emsp;它能正常工作吗？它会显示什么呢？

```js {14-16}
function Counter() {
  let count = 0;

  this.up = function() {
    return ++count;
  };
  this.down = function() {
    return --count;
  };
}

let counter = new Counter();

alert( counter.up() ); // ?
alert( counter.up() ); // ?
alert( counter.down() ); // ?
```

<MarkdownInCollapse markdown={`
  &emsp;&emsp;能够正常工作，且答案分别是： 1， 2， 1。
  
  &emsp;&emsp;因为内部函数 up 和 down 都是在同一个词法环境中创建的，所以它们可以共享对同一个 count 变量的访问。
  `}
  header="解析👇" />

3. sum

&emsp;&emsp;编写一个像 `sum(a)(b) = a+b` 这样工作的 `sum` 函数。

```js
sum(1)(2) = 3
sum(5)(-1) = 4
```

<MarkdownInCollapse markdown={`
  &emsp;&emsp;为了使第二个括号有效，第一个（括号）必须返回一个函数。
  
  ~~~js
  function sum(a) {
    return function(b) {
      return a + b; // 从外部词法环境获得 "a"
    };
  }
  ~~~
  `}
  header="解决方案👇" />

4. filter 方法

&emsp;&emsp;编写 `inBetween` 和 `inArray` 方法，使得 `Array.prototype.filter` 能够像下面这样工作：

- `arr.filter(inBetween(3,6))` —— 只挑选范围在 `3` 到 `6` 的值。
- `arr.filter(inArray([1,2,3]))` —— 只挑选与 `[1,2,3]` 中的元素匹配的元素。

```js
/* .. inBetween 和 inArray 的代码 */
let arr = [1, 2, 3, 4, 5, 6, 7];

alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

alert( arr.filter(inArray([1, 2, 10])) ); // 1,2
```

<MarkdownInCollapse markdown={`
  &emsp;&emsp;要写这题首先要知道 [filter 函数的工作原理](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
  
~~~js
function inBetween(l, r) {
  return function(val) {
      return l <= val && val <= r;
  };
}
//
function inArray(arr) {
    return function(val) {
        // 或使用 arr.includes(val)
        return arr.indexOf(val) !== -1;
    };
}
~~~
  `}
  header="解决方案👇" />

5. 函数数组

&emsp;&emsp;我们想使用一个数组保存一些函数，当调用这些函数时输出我们函数定义时想要保存的值，不过下面的代码出了问题，将它们修复：

```js
function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let shooter = function() { // 创建一个 shooter 函数，
      alert( i ); // 应该显示其编号
    };
    shooters.push(shooter); // 将此 shooter 函数添加到数组中
    i++;
  }

  // 返回函数数组
  return shooters;
}

let army = makeArmy();

// ……所有的 shooter 显示的都是 10，而不是它们的编号 0, 1, 2, 3...
army[0](); // 编号为 0 的 shooter 显示的是 10
army[1](); // 编号为 1 的 shooter 显示的是 10
army[2](); // 10，其他的也是这样。
```

<MarkdownInCollapse markdown={`
  &emsp;&emsp;首先，为什么会是这样的结果呢？
  
  &emsp;&emsp; 这是因为我们定义的每个函数 shooter 都是在同一个词法作用域中的（makeArmy 的词法作用域），那么当我们调用这些函数时，访问的都是同一个 i，而我们在执行完 makeArmy 后 i 已经加到 10 了。
  &emsp;&emsp;那么解决方案就很明显了：创建 10 个不同的变量来保存这些值。
  
  ### 方法1：使用中间变量
~~~js
function makeArmy() {
  let shooters = [];
  let i = 0;
  while (i < 10) {
    let temp = i; // 每个 while 循环中都创建一个新的变量 temp 来保存 i 当前的值
    let shooter = function() {
      console.log( temp );
    };
    shooters.push(shooter);
    i++;
  }
  return shooters;
}
~~~
  ### 方法2：使用 for 循环
~~~js
function makeArmy() {
  let shooters = [];
  // for 循环也是同样道理，每次循环中都是一个新的作用域
  for (let i = 0; i < 10; ++i) {
    let shooter = function() {
      console.log( i );
    };
    shooters.push(shooter);
  }
  return shooters;
}
~~~
  `}
  header="解决方案👇" />



## 作用域链

> &emsp;&emsp;当查找变量的时候，会先从当前上下文的变量对象中查找，如果没有找到，就会从父级(词法层面上的父级)执行上下文的变量对象中查找，一直找到全局上下文的变量对象，也就是全局对象。这样由多个执行上下文的变量对象构成的链表就叫做作用域链。

> &emsp;&emsp;作用域链的查找方式和原型链有点类似，不同点是：原型链查找若找不到指定的变量，则返回 `undefined`，而作用域链查找，未找到变量值的话则会报错：`ReferenceError`

&emsp;&emsp;JS 中使用的是词法作用域，在函数定义的时候（还未执行）就会确定了一个初始的作用域链，然后在函数执行的时候会再次进行更新。



&emsp;&emsp;函数内部有一个属性 `[[scope]]`，用于保存函数所能访问到的作用域，作用域的顶端是全局作用域。

&emsp;&emsp;当函数执行进入执行上下文时，会将当前环境对象加入作用域链顶端。

&emsp;&emsp;用伪代码来表示就是：

```js
Scope = [curentEnv].concat([[scope]]);
```



&emsp;&emsp;另外，引用一个回答帮助理解：

> &emsp;&emsp;在源代码中当你定义（书写）一个函数的时候（并未调用），js引擎也能根据你函数书写的位置，函数嵌套的位置，给你生成一个[[scope]]，作为该函数的属性存在（这个属性属于函数的）。即使函数不调用，所以说基于词法作用域（静态作用域）。
>
> &emsp;&emsp;然后进入函数执行阶段，生成执行上下文，执行上下文你可以宏观的看成一个对象，（包含vo,scope,this），此时，执行上下文里的scope和之前属于函数的那个[[scope]]不是同一个，执行上下文里的scope，是在之前函数的[[scope]]的基础上，又新增一个当前的AO对象构成的。
>
> &emsp;&emsp;**函数定义时候的[[scope]]和函数执行时候的scope，前者作为函数的属性，后者作为函数执行上下文的属性。**
>
> &emsp;&emsp;其中，AO 可以看作是我们上面所说的 **词法环境**


## REF

- [JavaScript深入之词法作用域和动态作用域](https://github.com/mqyqingfeng/Blog/issues/3)
- [JavaScript深入之变量对象](https://github.com/mqyqingfeng/Blog/issues/5)
- [理解JavaScript 中的执行上下文和执行栈](https://muyiy.cn/blog/1/1.1.html#%E6%89%A7%E8%A1%8C%E4%B8%8A%E4%B8%8B%E6%96%87%E7%9A%84%E7%B1%BB%E5%9E%8B) 
- [JavaScript深入之作用域链](https://github.com/mqyqingfeng/Blog/issues/6) 
- [变量作用域，闭包 -- 现代 JS 教程](https://zh.javascript.info/closure)
- [函数作用域和闭包](https://yleave.github.io/2021/01/12/JS/%E4%BD%9C%E7%94%A8%E5%9F%9F%E4%B8%8E%E9%97%AD%E5%8C%85/%E5%87%BD%E6%95%B0%E4%BD%9C%E7%94%A8%E5%9F%9F%E5%92%8C%E9%97%AD%E5%8C%85/#%E9%97%AD%E5%8C%85)




<Comment />
