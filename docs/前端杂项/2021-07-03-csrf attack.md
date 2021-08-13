---
slug: csrf attack
title: 前端安全之CSRF攻击
---

import CustomComponent from '@site/src/components/CustomComponent';
import Comment from '@site/src/components/Comment';
import MarkdownInCollapse from '@site/src/components/MarkdownInCollapse';

<CustomComponent tags={["前端安全","CSRF"]} time="2021-07-03" />

&emsp;&emsp;CSRF（Cross-site Request Forgery），跨站请求伪造攻击，简单来说就是攻击者诱导受害者进入第三方网站，在第三方网站中，向被攻击网站发送请求，并利用受害者在被攻击网站中获取的用户凭证，达到冒充受害者的目的，并使用受害者的身份进行一些恶意操作。



&emsp;&emsp;一个典型的 CSRF 攻击过程如下：

1. 受害者登陆 a.com 并保存了登陆凭证（Cookie）
2. 受害者在诱导下访问了 b.com
3. b.com 向 a.com 发送了一个请求，浏览器会默认携带 a.com 的 Cookie
4. a.com 接收到请求，并根据 Cookie 进行了用户验证，误以为是受害者发的请求
5. a.com 以受害者的身份执行了对应操作，攻击完成。

## 注意点

&emsp;&emsp;我们知道，CSRF是跨站访问，那么它也一定是跨域的（跨站和跨域不是同一个概念，跨域比跨站更严格，什么是跨站可看[下文](#cookie-的-samesite-属性)），因此会受到浏览器的同源策略限制，导致请求发不出去（对于非简单请求会先发送一个 `Options` 请求，若成功了才能发送真正的请求），且跨域默认不允许携带 cookie。

> &emsp;&emsp;对于 `fetch` 请求，要携带 cookie 需要设置 `credentials: 'include'` ，且服务器端需要设置 `Access-Control-Allow-Credentials: true`，并且 `Access-Control-Allow-Origin` 不能为 `*`。
>
> &emsp;&emsp;若是仅想在同源下请求携带 cookie，则可以设置 `credentials: 'same-origin'`。

&emsp;&emsp;那么问题来了，**既然有了同源策略，为什么还有 CSRF 攻击呢？**

&emsp;&emsp;这是因为同源策略只能限制一部分跨域请求（xhr 或 fetch 请求），但对一些情况如：

- 直接通过 `window.location.href=xxx` 进行重定向跨域
- 通过 `form` 表单提交 `post` 或 `get` 请求
- 通过一些标签的 `src` 属性或 `href` 属性进行跨域请求
- 通过 `iframe` 跨域 

&emsp;&emsp;则可以进行跨域请求并携带我们保存的相应站点的 cookie ，也就成为了 CSRF 攻击的途径。

&emsp;&emsp;此外，对于 xhr 或 fetch 请求，确实会受到同源策略的限制，导致拿不到请求的返回结果，但是对于简单请求来说，它们实际上还是会发送到服务器端，那么攻击者就达到目的了。


## 几种常见的 CSRF 攻击：

### 1. GET 类型的 CSRF 攻击

&emsp;&emsp;比如可以使用图片的 src 属性来发送一个 GET 请求：

```html
<img src="https://www.google.com" style="display: none;">
```

```markdown
![](https://awps-assets.meituan.net/mit-x/blog-images-bundle-2018b/ff0cdbee.example/withdraw?amount=10000&for=hacker)
```

&emsp;&emsp;受害者访问这个页面后，会自动发起一次 GET 请求，且用户没有任何感觉。



### 2. POST 类型的 CSRF 攻击

&emsp;&emsp;这种类型的攻击一般会是一个自动提交的表单，如：

```html
<form action="http://bank.example/withdraw" method=POST>
    <input type="hidden" name="account" value="xiaoming" />
    <input type="hidden" name="amount" value="10000" />
    <input type="hidden" name="for" value="hacker" />
</form>
<script> document.forms[0].submit(); </script> 
```

&emsp;&emsp;当访问该页面时，表单会自动提交，相当于模拟用户完成了一次 POST 操作。



### 3. 链接类型的 CSRF

&emsp;&emsp;链接类型的 CSRF 攻击相较于以上两种自动完成的 CSRF 攻击来说不是那么容易中招，这种情况需要用户点击链接后才会触发。

&emsp;&emsp;这种类型通常会是论坛中发布的图片中嵌入恶意链接，或者以广告的形式诱导用户点击，如：

```html
<a href="http://test.com/csrf/withdraw.php?amount=1000&for=hacker" taget="_blank">
    重磅消息！！
<a/>
```



## CSRF 特点

- 攻击一般是在第三方网站发起的，被攻击网站无法防止攻击发生
- 攻击是使用被害者的登陆凭证，冒充受害者进行操作，而不是直接窃取数据
- 整个过程中攻击者不能获取到受害者的登陆凭证，而只是借用
- 跨站请求可以使用多种方式，如图片的 URL、超链接、表单等等，部分请求可以直接嵌入在第三方论坛、文章中，难以追溯。



## 防护策略

&emsp;&emsp;由于 CSRF 一般是在第三方网站发起的，因此被攻击网站无法阻止攻击发生，只能对自己的网站进行防护。



### 同源检测

&emsp;&emsp;那么由于 CSRF 一般来自于第三方网站，因此我们只要禁止外域（或不受信任的域）的请求即可。

&emsp;&emsp;而判断是否是外域可以使用请求头部字段中的 `Origin` 或 `Referer` 字段或是 `Host` 字段。

import Text from './collapse-text';

<MarkdownInCollapse markdown={Text.origin_referer_host} header="Host、Origin 和 Referer 字段介绍" />

#### 几种 Referer 策略

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Referrer-Policy)

&emsp;&emsp;2014年，W3C的Web应用安全工作组发布了Referrer Policy草案，对浏览器该如何发送Referer做了详细的规定。

```
Referrer-Policy: no-referrer
Referrer-Policy: no-referrer-when-downgrade
Referrer-Policy: origin
Referrer-Policy: origin-when-cross-origin
Referrer-Policy: same-origin
Referrer-Policy: strict-origin
Referrer-Policy: strict-origin-when-cross-origin
Referrer-Policy: unsafe-url
```

`no-referer` ：不携带 Referer 字段

`no-referer-when-downgrade`：默认值，在同等安全级别下，会携带 Referer 字段，而在安全级别下降的情况下（HTTPS -> HTTP）则不会。

`origin`：任何情况下，Referer 字段的值只包含发送源（即不包含路径，相当于 Origin）

`origin-when-cross-origin`：对同源的请求会发送完整的 URL，而非同源请求则仅发送源

`same-origin`：同源请求则发送 Referer 字段，非同源则不发送

`strict-origin`：同 no-referer-when-downgrade，区别是这边只发送源（不包含路径）

`strict-origin-when-cross-origin`：同源请求会发送完整的 URL，同等安全级别下，发送源，降级情况下则不会发送

`unsafe-url`：无论是同源还是非同源都会发送完整的 URL（移除参数后）



&emsp;&emsp;使用：`mate` 标签可以为整个文档指定 referer 策略：

```html
<meta name="referrer" content="origin">
```

&emsp;&emsp;或是在一些标签如 `a`、`area`、`img`、`iframe`、`script`、`link` 上指定 `referrerpolicy` 属性（注意双写 r）

```html
<a href="http://example.com" referrerpolicy="origin">
```

&emsp;&emsp;或是在 `a`、`area`、`link` 上将 `rel` 属性指定为 `noreferrer`

```html
<a href="http://example.com" rel="noreferrer">
```



### CSRF Token

&emsp;&emsp;CSRF 攻击仅仅是冒用 Cookie 信息，而无法直接获取到用户信息，因此我们可以要求用户在每次请求中都携带一个只有用户和服务器知道的 Token，并在请求中携带这个 Token 来进行验证。

> 为什么能要求用户请求中携带 token呢？
>
> 个人理解：对于被攻击网站，一般正常操作下，请求都是在该网站中点击后进行的，因此若是用户自己登陆后，被攻击网站的页面是由他们自己编码的，因此可以确保发送请求时都携带上一个自己服务器生成的 token，而对于外域的请求，即使携带了 Cookie，也没有这个服务器生成的 token。

&emsp;&emsp;对于GET请求，Token将附在请求地址之后，这样URL 就变成 `http://url?csrftoken=tokenvalue`。而对于 POST 请求来说，要在 form 的最后加上：

```html
<input type=”hidden” name=”csrftoken” value=”tokenvalue”/>
```

> 验证码和密码其实也可以起到CSRF Token的作用，而且更安全。


一个 CSRF-Token 的例子：

1. 服务端在收到请求时，生成一个随机数，在渲染请求页面时，将随机数埋入页面（一般会埋在 form 表单中 `<imput type="hidden" name="_csrf_token" value="xxxx">`）
2. 服务端同时设置 `setCookie`，将随机数存在用户浏览器的 cookie 中
3. 用户发送 GET 或 POST 请求时，携带上 `_csrf_token` 参数（header 中的一个字段，form 表单直接提交即可）
4. 后台在收到请求后，解析 cookie 并获取 `_csrf_token` 的值，然后和用户提交的 `_csrf_token` 做一个对比，如果相等则表示是合法的。




### Cookie 的 SameSite 属性

&emsp;&emsp;设置 Cookie 的 SameSite 属性可以让 Cookie 在跨站请求时不会被发送，从而极大程度上杜绝了 CSRF 攻击。

`SameSite` 有几个取值：

- `None`：无论是否跨站都能携带 Cookie
- `Lax`：允许部分第三方请求携带 Cookie
- `Strict`：仅允许第一方请求携带 Cookie

&emsp;&emsp;在 Chrome 80 之前 `None` 是默认值，之后默认是 `Lax`

> 如何判断是否是同站：需要 **协议** + **eTLD + 1** 相同就是同站
>
> `eTLD`：effective top-level domain， 有效顶级域名，也就是在 Mozilla 维护的公共后缀列表中，如 `.com`、`.co.uk`、`.github.io`、`.top` 等
>
> `eTLD + 1`：有效顶级域名 + 二级域名，如 `yleave.top`、`baidu.com`、`taobao.com` 等
>
> 那么按照这种规则，`a.baidu.com` 和 `b.baidu.com` 是同站，而 `a.github.io` 和 `b.github.io` 则不是同站


Lax 和 None 的区别：

| 请求类型  |                 示例                 | 正常情况（None) | Lax         |
| :-------- | :----------------------------------: | --------------: | :---------- |
| 链接      |         `<a href="..."></a>`         |     发送 Cookie | 发送 Cookie |
| 预加载    | `<link rel="prerender" href="..."/>` |     发送 Cookie | 发送 Cookie |
| GET 表单  |  `<form method="GET" action="...">`  |     发送 Cookie | 发送 Cookie |
| POST 表单 | `<form method="POST" action="...">`  |     发送 Cookie | 不发送      |
| iframe    |    `<iframe src="..."></iframe>`     |     发送 Cookie | 不发送      |
| AJAX      |            `$.get("...")`            |     发送 Cookie | 不发送      |
| Image     |          `<img src="...">`           |     发送 Cookie | 不发送      |





## REF 

[美团前端技术博客](https://tech.meituan.com/2018/10/11/fe-security-csrf.html)

[浏览器系列之 Cookie 和 SameSite 属性](https://github.com/mqyqingfeng/Blog/issues/157) 

[「每日一题」CSRF 是什么？](https://zhuanlan.zhihu.com/p/22521378)

<Comment />
