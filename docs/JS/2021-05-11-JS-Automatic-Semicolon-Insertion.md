---
slug: JS-Automatic-Semicolon-Insertion
title: JS自动插入分号机制ASI
---

import Highlight from '@site/src/components/Highlight';
import CustomComponent from '@site/src/components/CustomComponent';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Comment from '@site/src/components/Comment';


<CustomComponent tags={["ASI", "JS运行机制"]} time="2021-05-11" />

## 问题背景

&emsp;&emsp;敲代码的时候写了一条判断语句，大致作用是判断两个长方体是否贴合，因此需要对三个维度分别进行判断：

```js
return check(b1.min.x, b2.min.x) && check(b1.max.x, b2.max.x)
    && check(b1.min.y, b2.min.y) && check(b1.max.y, b2.max.y)
    && check(b1.min.z, b2.min.z) && check(b1.max.z, b2.max.z);
```

&emsp;&emsp;因为语句比较长，因此就将其分行，按照编码经验来说，这种分行的写法**肯定是没错的**，不过又想起了之前在学习 JS 的时候有看过这么一个概念：**JS 会在行末自动加上分号，因此 JS 代码中的分号可以省略。**不过如果真是这样的话上面的代码岂不是会在第一行末就加上分号吗？



&emsp;&emsp;出现了矛盾，既然上面的代码不会出错，那就是之前学习的知识内容出现了偏差，因此借这个机会整理了一下 **ASI（Automatic Semicolon Insertion ，自动插入分号机制）** 的知识。





&emsp;&emsp;学习之时，看了一些关于 **JS 语句后是否应该加分号**的回答，才发现这个问题很早之前就被诸多大神们热烈讨论过了，已沦为加分号党和不加分号党之间旷日持久的口水战。虽然看了一圈下来，多数写回答的大佬都会更偏向于不加分号的形式，不加分号的观点主要还是：

1. 程序员总有犯迷糊忘了加分号的时候，这样 ASI 就无法区分是有意不写还是无意中忘了写
2. 即使全都加上分号，也不能解决 ASI 的一些缺陷（`return` 换行后会自动插入分号）
3. 对全加分号后语义表达判断的成本问题（如函数表达式的 `}` 后是否都需要加上分号）
4. 不加分号的话除了几种特殊情况（下文有），其余情况并不会影响到程序的正常运行，且特殊情况的出现概率还很小

&emsp;&emsp;对我个人来说，我是习惯在语句后加上分号的，不加分号就会有点不舒服（编码强迫症患者），不过我对这个问题还是保持中立的，加分号和不加分号说到底也就是编码风格问题，真要说其实两者都有犯错的可能，按照自己编码习惯来，舒舒服服的最好。而实际在团队合作时，不管你个人编程习惯如何，只要配置了符合团队编码风格的格式化代码配置，我觉得就是没问题的。



## ASI 插入分号的时机



### 1. JS 中一些语法后加上换行符后会自动加上分号

- 后置运算符（`++` 和 `--`）
- `continue`
- `break`
- `return`
- `yield`、`yield*`
- `module`

我们以 `return` 语句为例：

```js
// 正常返回一个对象
return {
    a: 1
}
```

```js
return
{
    a: 1
}

// 解析为
return;
{
    a: 1
};
```

&emsp;&emsp;这种情况下，`return` 返回值为 `undefined`，返回结果显然与我们预期不符。





### 2. 并入新行后若成为非法语句则会自动插入分号

&emsp;&emsp;JS 代码在解析时会把换行符作为解析的依据之一，它会尽量拼接下一行的语句，不过若是拼接上后不能成为一个完整的语句，则会在中间插入分号，如：

```js
a = b
++c

// 这段代码会被正确解析为
a = b;
++c;
```

&emsp;&emsp;因为若两行代码并在一起显然是会报错的：

```js
a = b++c;
```



&emsp;&emsp;再来看看其他能够正确解析的例子：

```js
let a 
a
=
3
console.log(a) //3

// 解析为
let a;
a = 3;
console.log(a); //3
```

```js
let a = 
x
&&
y

&& a

// 解析为
let a = x && y && a;
```



### 3. 以自增/减运算符 ++、-- 开头

```js
a
++
b
+
c
// 解析成了
a;
++b + c;
```

&emsp;&emsp;注意，这个和第 `1.` 中的后置运算符 `++`、`--` 的区别，后置运算符后若跟的是换行符则会加上分号，前置运算符则会与下一行并在一起解析。



### 4.特殊情况

&emsp;&emsp;当一条语句以：括号`(`，方括号`[`，正则开头的斜杠`/`，加号`+`，减号`-` 开头的话，那么极有可能和前面一条语句一起解析，**这种情况下仅依靠解析规则的话可能会出问题，因此最好自己加上分号。**

如：

```js
let a = b
(function() {
	...
})()

// 解析为
let a = b(function () {
  ...
})();
```

&emsp;&emsp;我们的本意是将 `b` 赋值给 `a`，然后下面是一个立即执行的函数，若没标明分号的话那么就变成了另一个不知道能否执行的代码了...



再如：

```js
a = b
[1,2,3].forEach(function(e){
    console.log(e)
})

// 解析为
a = b[(1, 2, 3)].forEach(function (e) {
    console.log(e);
});
```



再如：

```js
// 这是一段没问题的代码
function a() {
...
}
[1,2,3].forEach(...)
```

&emsp;&emsp;而若是换种方式写的话：

```js
var a = function() {
  ...
}
[1,2,3].forEach(...)

// 问题就大了！！解析后变成下面这样
var a = function () {}[(1, 2, 3)].forEach();
```

### 4.1 一个实例

&emsp;&emsp;在刷力扣的时候，写了一个要进行数组元素交换的操作：`[nums[i], nums[j]] = [nums[j], nums[i]];`，不过出了个bug，为了进行调试，使用 `console.log` 打印了一些信息，然后就出错了，出错代码如下：

```js
console.log(i, j)
[nums[i], nums[j]] = [nums[j], nums[i]];
```

&emsp;&emsp;报错是：`Uncaught TypeError: Cannot set property '5' of undefined`

&emsp;&emsp;刚看到报错信息时很纳闷，不过再看了眼代码，发现少了个分号，然后回想起之前写过的这篇文章的内容就明白是为什么了~

&emsp;&emsp;放到 `babel` 中一看，果然是这样：由于括号后没加分号，且 `[]` 可以看作是属性值获取操作，因此这两句就放到一起解析了。

```js
console.log(i, j)[(nums[i], nums[j])] = [nums[j], nums[i]];
```




## 如何查看自动插入分号后的代码

&emsp;&emsp;可以在代码所属的项目中配置代码格式化插件，如 `Prettier`，不过太麻烦了（主要是不知道怎么配🤡），不过分号插入也算代码翻译的一种吧，那么不就能使用 `babel` 来转译看看么😁，上面没加分号的代码都是这样转译过来的。

[babel官网在线转译](https://www.babeljs.cn/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.6&spec=false&loose=false&code_lz=Q&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.14.1&externalPlugins=)



## 小结

&emsp;&emsp;关于 JS 语句是否应该加上分号的个人感想前面已经说过了，ASI 插入分号的规则如上面几个小标题。

&emsp;&emsp;这边再引用一下[@田乐](https://www.zhihu.com/question/20298345/answer/14690437)和[@尤雨溪](https://www.zhihu.com/question/20298345/answer/49551142)的回答来作为一个小结吧：

> 田乐：
>
> 加与不加是风格问题，风格争议不需要有个定论。关键的问题在于如何“争论”，处理好冲突，学会组织语言减少争议是最重要的。因为分号问题在社区内部造成了很多况日持久的口水战，这些口水战是社区的损失……因为大家在这个时候可以写更多的代码带来更多的功能。
> 		 类似的问题还有AMD的module，有的库选择兼容AMD，有的人不愿意。公认结论是应该尊重作者的选择，不要因为这些风格问题而fork。module loader应该设法绕过这些问题，提供兼容的解决方案。

> 尤雨溪：
>
> 真正会导致上下行解析出问题的 token 有 5 个：括号，方括号，正则开头的斜杠，加号，减号。我还从没见过实际代码中用正则、加号、减号作为行首的情况，所以总结下来就是一句话：一行开头是括号或者方括号的时候加上分号就可以了，其他时候全部不需要。其实即使是这两种情况，在实际代码中也颇为少见。



## REF

- [JavaScript 语句后应该加分号么？ - 知乎](https://www.zhihu.com/question/20298345) 
- [MDN 自动分号补全](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#%E8%87%AA%E5%8A%A8%E5%88%86%E5%8F%B7%E8%A1%A5%E5%85%A8)
- [掘金 JS代码要不要加分号?](https://juejin.cn/post/6864135607468163079) 




<Comment />
