(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{139:function(e,t,n){"use strict";var a=n(0),i=n.n(a);t.a=function(e){var t=e.children,n=e.color;return i.a.createElement("span",{style:{backgroundColor:n||"#0099CC",borderRadius:"4px",color:"white",padding:"0.2rem"}},t)}},148:function(e,t,n){"use strict";var a=n(0),i=n.n(a),l=n(179),o=n(129),c=n(59),b=n.n(c);var r=37,m=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,p=e.values,s=e.groupId,d=e.className,u=Object(l.a)(),j=u.tabGroupChoices,O=u.setTabGroupChoices,g=Object(a.useState)(c),h=g[0],N=g[1],f=a.Children.toArray(e.children),E=[];if(null!=s){var k=j[s];null!=k&&k!==h&&p.some((function(e){return e.value===k}))&&N(k)}var C=function(e){var t=e.target,n=E.indexOf(t),a=f[n].props.value;N(a),null!=s&&(O(s,a),setTimeout((function(){var e,n,a,i,l,o,c,r;(e=t.getBoundingClientRect(),n=e.top,a=e.left,i=e.bottom,l=e.right,o=window,c=o.innerHeight,r=o.innerWidth,n>=0&&l<=r&&i<=c&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(b.a.tabItemActive),setTimeout((function(){return t.classList.remove(b.a.tabItemActive)}),2e3))}),150))},v=function(e){var t,n;switch(e.keyCode){case m:var a=E.indexOf(e.target)+1;n=E[a]||E[0];break;case r:var i=E.indexOf(e.target)-1;n=E[i]||E[E.length-1]}null===(t=n)||void 0===t||t.focus()};return i.a.createElement("div",{className:"tabs-container"},i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},d)},p.map((function(e){var t=e.value,n=e.label;return i.a.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:Object(o.a)("tabs__item",b.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:function(e){return E.push(e)},onKeyDown:v,onFocus:C,onClick:C},n)}))),t?Object(a.cloneElement)(f.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},149:function(e,t,n){"use strict";var a=n(0),i=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return i.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},99:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return r})),n.d(t,"toc",(function(){return m})),n.d(t,"default",(function(){return s}));var a=n(3),i=n(8),l=(n(0),n(135)),o=(n(139),n(156)),c=(n(148),n(149),n(147)),b={slug:"add comment component",title:"\u6dfb\u52a0\u8bc4\u8bba\u529f\u80fd"},r={unversionedId:"\u535a\u5ba2\u5efa\u8bbe/2021-04-22-add comment component",id:"\u535a\u5ba2\u5efa\u8bbe/2021-04-22-add comment component",isDocsHomePage:!1,title:"\u6dfb\u52a0\u8bc4\u8bba\u529f\u80fd",description:"&emsp;&emsp;Docusaurus \u662f\u4e00\u6b3e\u9759\u6001\u7f51\u7ad9\u6784\u5efa\u5de5\u5177\uff0c\u5b83\u4e3b\u8981\u662f\u9762\u5411\u6587\u6863\u7ad9\u70b9\u7684\uff0c\u56e0\u6b64\u6ca1\u6709\u63d0\u4f9b\u5f00\u7bb1\u5373\u7528\u7684\u8bc4\u8bba\u7684\u529f\u80fd\u6216\u662f\u63d2\u4ef6\u3002",source:"@site/docs/\u535a\u5ba2\u5efa\u8bbe/2021-04-22-add comment component.md",slug:"/\u535a\u5ba2\u5efa\u8bbe/add comment component",permalink:"/docs/\u535a\u5ba2\u5efa\u8bbe/add comment component",version:"current",sidebar:"docs",previous:{title:"B\u7ad9\u5c0f\u706b\u7bad\u70b9\u51fb\u7f6e\u9876\u6309\u94ae",permalink:"/docs/\u535a\u5ba2\u5efa\u8bbe/toTopbutton"},next:{title:"\u652f\u6301 markdown \u7684\u6298\u53e0\u9762\u677f",permalink:"/docs/\u535a\u5ba2\u5efa\u8bbe/markdown-in-collapse"}},m=[{value:"\u51e0\u79cd\u8bc4\u8bba\u63d2\u4ef6\u6bd4\u5bf9",id:"\u51e0\u79cd\u8bc4\u8bba\u63d2\u4ef6\u6bd4\u5bf9",children:[]},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",children:[]},{value:"\u8e29\u5751",id:"\u8e29\u5751",children:[{value:"\u57511\uff1aError: Validation Failed",id:"\u57511\uff1aerror-validation-failed",children:[]},{value:"\u57512\uff1aReferenceError: window is not defined",id:"\u57512\uff1areferenceerror-window-is-not-defined",children:[]},{value:"\u57513: \u4e0d\u552f\u4e00\u7684 id \u503c",id:"\u57513-\u4e0d\u552f\u4e00\u7684-id-\u503c",children:[]}]},{value:"REF",id:"ref",children:[]}],p={toc:m};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)(o.a,{tags:["\u535a\u5ba2\u5efa\u8bbe","Gitalk"],time:"2021-04-22",mdxType:"CustomComponent"}),Object(l.b)("p",null,"\u2003","\u2003","Docusaurus \u662f\u4e00\u6b3e\u9759\u6001\u7f51\u7ad9\u6784\u5efa\u5de5\u5177\uff0c\u5b83\u4e3b\u8981\u662f\u9762\u5411\u6587\u6863\u7ad9\u70b9\u7684\uff0c\u56e0\u6b64\u6ca1\u6709\u63d0\u4f9b\u5f00\u7bb1\u5373\u7528\u7684\u8bc4\u8bba\u7684\u529f\u80fd\u6216\u662f\u63d2\u4ef6\u3002"),Object(l.b)("p",null,"\u2003","\u2003","\u4e0d\u8fc7\u5bf9\u4e8e\u6211\u4eec\u7684\u535a\u5ba2\u6765\u8bf4\uff0c\u6709\u4e86\u8bc4\u8bba\u529f\u80fd\u7684\u535a\u5ba2\u624d\u662f\u4e00\u4e2a\u5b8c\u6574\u7684\u535a\u5ba2(\u6211\u89c9\u5f97)\u3002\u8bfb\u8005\u5bf9\u6587\u7ae0\u5185\u5bb9\u6709\u56f0\u60d1\u6216\u662f\u5176\u4ed6\u89c1\u89e3\u7b49\u53cd\u9988\u53ef\u4ee5\u53ca\u65f6\u7684\u548c\u4f5c\u8005\u4ea4\u6d41\uff0c\u5bf9\u6211\u81ea\u5df1\u6765\u8bf4\uff0c\u65e0\u8bba\u662f\u597d\u7684\u53cd\u9988\u8fd8\u662f\u574f\u7684\u53cd\u9988\uff0c\u53ea\u8981\u6709\u53cd\u9988\uff0c\u5c31\u4f1a\u8ba9\u6211\u89c9\u5f97\u8fd9\u7bc7\u6587\u7ae0\u8fd8\u662f\u6709\u4eba\u4ed4\u7ec6\u770b\u7684\uff0c\u6b63\u9762\u7684\u53cd\u9988\u80fd\u591f\u7ed9\u8ba4\u540c\u611f\uff0c\u6ee1\u8db3\u611f\uff0c\u8d1f\u9762\u53cd\u9988\u4e5f\u53ef\u4ee5\u8ba9\u4f60\u53d1\u73b0\u81ea\u5df1\u6587\u7ae0\u4e2d\u7684\u4e0d\u8db3\u3002\u56e0\u6b64\u7ed9\u535a\u5ba2\u52a0\u4e0a\u8bc4\u8bba\u7248\u5757\u8fd8\u662f\u975e\u5e38\u6709\u5fc5\u8981\u7684~"),Object(l.b)("h2",{id:"\u51e0\u79cd\u8bc4\u8bba\u63d2\u4ef6\u6bd4\u5bf9"},"\u51e0\u79cd\u8bc4\u8bba\u63d2\u4ef6\u6bd4\u5bf9"),Object(l.b)("p",null,"\u2003","\u2003","\u5728\u9009\u62e9\u8bc4\u8bba\u63d2\u4ef6\u7684\u65f6\u5019\u6709\u4e86\u89e3\u8fc7\u51e0\u6b3e\u8bc4\u8bba\u5de5\u5177\uff0c\u6700\u540e\u9009\u62e9\u4e86 ",Object(l.b)("inlineCode",{parentName:"p"},"Gitalk")," \u5b8c\u6210\u8bc4\u8bba\u529f\u80fd\uff08\u56e0\u4e3a\u5176\u4ed6\u51e0\u79cd\u90fd\u4e0d\u592a\u597d\u642d\u914d Docusaurus...)"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"https://vssue.js.org/zh/"},"Vssue"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u57fa\u4e8e Vue \u5f00\u53d1\uff0c\u56e0\u6b64\u5bf9 Vue \u5f00\u53d1\u7684\u535a\u5ba2\u6bd4\u8f83\u53cb\u597d\uff0c\u65b9\u4fbf\u96c6\u6210"),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301\u591a\u4e2a\u5e73\u53f0\u7684\u8bc4\u8bba\u767b\u9646\u548c\u7ba1\u7406\uff0c\u5982 Github, Gitlab, Bitbucket, Gitee \u548c Gitea"),Object(l.b)("li",{parentName:"ul"},"\u9664\u4e86\u53d1\u8868\u8bc4\u8bba\u4e4b\u5916\uff0c\u8fd8\u80fd\u5bf9\u8bc4\u8bba\u8fdb\u884c\u7f16\u8f91\u3001\u5220\u9664\u7b49\u64cd\u4f5c\uff08Gitalk \u4ec5\u80fd\u53d1\u8868\u8bc4\u8bba")),Object(l.b)("p",null,"\u6548\u679c\u5982\u4e0b\uff1a"),Object(l.b)("img",{src:"https://gitee.com/ylea/imagehost1/raw/master/img/image-20210422181444302.png",alt:"image-20210422181444302",style:{zoom:"80%"}}),Object(l.b)("ol",{start:2},Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"https://valine.js.org/"},"Valine"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u529f\u80fd\u4e30\u5bcc\uff0c\u9664\u4e86\u57fa\u672c\u7684\u8bc4\u8bba\u64cd\u4f5c\u4e4b\u5916\u8fd8\u80fd\u81ea\u5b9a\u4e49\u8bc4\u8bba\u8868\u60c5\u4ee5\u53ca\u6587\u7ae0\u9605\u8bfb\u91cf\u7edf\u8ba1"),Object(l.b)("li",{parentName:"ul"},"\u8fdb\u884c\u8bc4\u8bba\u65e0\u9700\u767b\u9646\uff0c\u53ef\u4ee5\u9009\u586b\u81ea\u5df1\u7684\u90ae\u7bb1\u6216\u7f51\u5740\u8ba9\u522b\u4eba\u627e\u5230\u4f60"),Object(l.b)("li",{parentName:"ul"},"\u9700\u8981\u4f7f\u7528 LeanCloud \u6765\u7ba1\u7406\u8bc4\u8bba\u6570\u636e")),Object(l.b)("p",null,"\u6548\u679c\u56fe\uff1a"),Object(l.b)("img",{src:"https://gitee.com/ylea/imagehost1/raw/master/img/image-20210422194646955.png",alt:"image-20210422194646955",style:{zoom:"80%"}}),Object(l.b)("ol",{start:3},Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"https://gitalk.github.io/"},"Gitalk"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u57fa\u4e8e Preact\uff08\u4e00\u4e2a\u8f7b\u91cf\u7ea7\u7684 React \u66ff\u4ee3\u65b9\u6848\uff09\u5f00\u53d1\uff0c\u4f7f\u7528 Github Issue \u6765\u7ba1\u7406\u8bc4\u8bba\u6570\u636e"),Object(l.b)("li",{parentName:"ul"},"\u56e0\u6b64\u4e0e Vssue \u4e0d\u540c\uff0c\u5b83\u4ec5\u652f\u6301\u4f7f\u7528 Github \u6765\u8fdb\u884c\u914d\u7f6e"),Object(l.b)("li",{parentName:"ul"},"\u56e0\u4e3a\u4f7f\u7528 Github Issue\uff0c\u4e0d\u642d\u68af\u5b50\u7684\u8bdd\u6709\u65f6\u5019\u8bc4\u8bba\u62c9\u53d6\u901f\u5ea6\u4f1a\u4e0d\u592a\u884c")),Object(l.b)("p",null,"\u6548\u679c\u56fe\uff1a"),Object(l.b)("img",{src:"https://gitee.com/ylea/imagehost1/raw/master/img/image-20210422200414066.png",alt:"image-20210422200414066",style:{zoom:"80%"}}),Object(l.b)("p",null,"\u2003","\u2003","\u5176\u5b9e\u6211\u662f\u6bd4\u8f83\u504f\u5411\u4f7f\u7528 Valine \u7684\uff0c\u53ef\u4ee5\u81ea\u5b9a\u4e49\u8868\u60c5\u5305\uff0c\u8fd8\u80fd\u4e0d\u7528\u767b\u9646\u5c31\u80fd\u8fdb\u884c\u8bc4\u8bba\uff0c\u65b9\u4fbf\u4e86\u5927\u5bb6\u7684\u4f7f\u7528\uff0c\u4e0d\u8fc7\u5c1d\u8bd5\u4e86\u4e00\u756a\u65e0\u679c\uff0c\u5c31\u5148\u4f7f\u7528 Gitalk \u4e86\uff0c\u81f3\u5c11\u5148\u628a\u8bc4\u8bba\u529f\u80fd\u52a0\u4e0a\u53bb\u518d\u8bf4\u3002"),Object(l.b)("h2",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),Object(l.b)("p",null,"\u2003","\u2003","\u4f7f\u7528\u65b9\u6cd5\u6bd4\u8f83\u7b80\u5355\uff0c\u8ddf\u7740\u6587\u6863\u4e00\u6b65\u6b65\u505a\u4e0b\u6765\u5c31\u884c\u4e86\uff0c\u4e0d\u8fc7\u4e3a\u4e86\u65b9\u4fbf\u98df\u7528\uff0c\u8fd8\u662f\u7b80\u5355\u8bb0\u5f55\u4e00\u4e0b\uff1a"),Object(l.b)("p",null,"\u2003","\u2003","\u9996\u5148\u9700\u8981\u65b0\u5efa\u4e00\u4e2a ",Object(l.b)("a",{parentName:"p",href:"https://github.com/settings/applications/new"},"OAuth application"),"\uff0cHomepage URL \u548c callback URL \u90fd\u586b\u4e0a\u76f8\u540c\u7684 URL\uff0c\u8fd9\u8fb9\u4e3a\u4e86\u65b9\u4fbf\u81ea\u5df1\u672c\u5730\u6d4b\u8bd5\u5c31\u586b\u4e0a\u4e86\u672c\u5730\u670d\u52a1\u5668\u4e86\u3002"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u5efa\u8bae\u90fd\u5148\u586b\u8fd9\u4e2a\uff0c\u540e\u9762\u8fd8\u53ef\u4ee5\u6539\u7684\uff0c\u56e0\u4e3a Gitalk \u8fd8\u9700\u8981\u521d\u59cb\u5316\u4e00\u4e0b\uff0c\u9700\u8981\u767b\u9646 github\uff0c\u4e0d\u586b\u672c\u5730\u670d\u52a1\u5668\u5730\u5740\u7684\u8bdd\u6d4b\u8bd5\u7684\u65f6\u5019\u70b9\u51fb\u4f1a\u91cd\u5b9a\u5411\u5230\u7ebf\u4e0a\u9875\u9762\u53bb\uff0c\u5c31\u4e0d\u597d\u6d4b\u8bd5\u4e86\u3002\u3002\u3002\u8e29\u5751\u4e4b\u4e00"),Object(l.b)("p",{parentName:"blockquote"},"\u8fd8\u53ef\u4ee5\u901a\u8fc7\u70b9\u51fb\u5934\u50cf -> setting -> Developer settings -> OAuth Apps -> New OAuth App \u6765\u627e\u5230\u65b0\u5efa\u9875\u9762")),Object(l.b)("img",{src:"https://gitee.com/ylea/imagehost1/raw/master/img/image-20210422201226610.png",alt:"image-20210422201226610",style:{zoom:"80%"}}),Object(l.b)("p",null,"\u2003","\u2003","\u521b\u5efa\u5b8c\u4e4b\u540e\u5c31\u80fd\u770b\u5230 Client ID \u4e86\uff0cClient secrets \u9700\u8981\u65b0\u751f\u6210\u4e00\u4e2a\uff0c\u8fd9\u4e24\u4e2a\u503c\u7528\u4e8e\u540e\u9762\u7684 gitalk \u914d\u7f6e"),Object(l.b)("img",{src:"https://gitee.com/ylea/imagehost1/raw/master/img/image-20210422201812992.png",alt:"image-20210422201812992",style:{zoom:"80%"}}),Object(l.b)("p",null,"\u2003","\u2003","\u7136\u540e\u518d\u65b0\u5efa\u4e00\u4e2a\u4ed3\u5e93\uff0c\u7528\u4e8e\u5b58\u50a8\u8bc4\u8bba\u6570\u636e\uff0c\u8fd9\u4e2a\u4e0d\u7528\u505a\u4ec0\u4e48\u914d\u7f6e\uff0c\u540e\u9762\u76f4\u63a5\u5c06\u4ed3\u5e93\u540d\u4f5c\u4e3a\u914d\u7f6e\u503c\u5c31\u597d\u4e86"),Object(l.b)("p",null,"\u2003","\u2003","\u7136\u540e\u9700\u8981\u5c06\u8bc4\u8bba\u7ec4\u4ef6\u5f15\u5165\u535a\u5ba2\u9879\u76ee\u4e2d\uff0c\u56e0\u4e3a Docusaurus \u672c\u8eab\u662f\u57fa\u4e8e React \u5f00\u53d1\u7684\uff0c\u56e0\u6b64\u6211\u9009\u62e9\u4e86\u4f7f\u7528 ",Object(l.b)("a",{parentName:"p",href:"https://github.com/gitalk/gitalk/blob/master/readme-cn.md#%E6%96%B9%E5%BC%8F2%E5%9C%A8react%E4%BD%BF%E7%94%A8"},"GitalkComponent")," \u7684\u65b9\u5f0f\u5f15\u5165\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},'import GitalkComponent from "gitalk/dist/gitalk-component";\nimport \'gitalk/dist/gitalk.css\';  // \u6837\u5f0f\u522b\u5fd8\u4e86\u5bfc\u5165\uff0c\u6211\u524d\u9762\u5fd8\u4e86\u7136\u540e\u8fd8\u641c\u4e86\u534a\u5929\u4ee5\u4e3a\u662f\u54ea\u51fa\u9519\u4e86...\n\n// \u57fa\u672c\u914d\u7f6e\uff0c\u4e0b\u9762\u5b57\u6bb5\u90fd\u662f\u5fc5\u987b\u7684\n<GitalkComponent options={{\n    clientID: "376f48...5e1f9ac5...",\n    clientSecret: "aceda7..367f6...3e", \n    repo: "gittalk-comments", // \u6211\u4eec\u524d\u9762\u521b\u5efa\u7684\u4ed3\u5e93\u540d\n    owner: "yleave",\n    admin: ["yleave"],  // \u53ef\u4ee5\u6709\u591a\u4e2a\n}} />\n')),Object(l.b)("p",null,"\u2003","\u2003","\u914d\u7f6e\u5230\u8fd9\uff0cGitalk \u5c31\u80fd\u591f\u63d0\u4f9b\u57fa\u672c\u7684\u8bc4\u8bba\u529f\u80fd\u4e86~"),Object(l.b)("h2",{id:"\u8e29\u5751"},"\u8e29\u5751"),Object(l.b)("h3",{id:"\u57511\uff1aerror-validation-failed"},"\u57511\uff1aError: Validation Failed"),Object(l.b)("p",null,"\u2003","\u2003","\u4e0d\u5f97\u4e0d\u8bf4\uff0c\u914d\u7f6e Gitalk \u5751\u70b9\u8fd8\u662f\u4e0d\u5c11..."),Object(l.b)("p",null,"\u2003","\u2003","\u6700\u5148\u9047\u5230\u7684\u5751\u662f ",Object(l.b)("inlineCode",{parentName:"p"},"Error: Validation Failed"),"\uff0c\u72b6\u6001\u7801 ",Object(l.b)("inlineCode",{parentName:"p"},"422"),"\u3002\u5173\u4e8e\u8fd9\u4e2a\u95ee\u9898 github \u6709\u4e0a\u4e00\u5806 Issue \uff0c\u95ee\u9898\u51fa\u73b0\u7684\u539f\u56e0\u662f\u56e0\u4e3a Gitalk \u4e2d\u7684 ",Object(l.b)("inlineCode",{parentName:"p"},"id")," \u5c5e\u6027\u914d\u7f6e\uff0c",Object(l.b)("inlineCode",{parentName:"p"},"id")," \u662f\u6211\u4eec\u9875\u9762\u7684\u552f\u4e00\u6807\u8bc6\u7b26\uff0c\u5b83\u9ed8\u8ba4\u662f\u4f7f\u7528 ",Object(l.b)("inlineCode",{parentName:"p"},"location.href")," \u6765\u4f5c\u4e3a\u6211\u4eec\u7684 ",Object(l.b)("inlineCode",{parentName:"p"},"id"),"\uff0c\u4e14\u8981\u6c42\u957f\u5ea6\u5c0f\u4e8e ",Object(l.b)("inlineCode",{parentName:"p"},"50"),"\u3002\u4f46\u662f\uff01\u5bf9\u4e8e\u56fd\u5185\u7684\u5f00\u53d1\u8005\uff0c\u6709\u4e9b\u9875\u9762\u7684\u8def\u5f84\u4e0a\u4f1a\u5e26\u70b9\u4e2d\u6587\uff0c\u7136\u540e\u4e2d\u6587\u8f6c\u7801\u4e00\u4e0b\u5b57\u7b26\u4e32\u7684\u957f\u5ea6\u7acb\u9a6c\u5c31\u8d85\u6807\u4e86\uff0c\u4e5f\u5c31\u5bfc\u81f4\u4e86\u8fd9\u4e2a\u9519\u8bef\u7684\u51fa\u73b0\u3002"),Object(l.b)("p",null,"\u2003","\u2003","\u77e5\u9053\u4e86\u539f\u56e0\uff0c\u90a3\u4e48\u89e3\u51b3\u65b9\u6cd5\u5c31\u662f\u4e3a\u6bcf\u4e2a\u9875\u9762\u81ea\u884c\u8bbe\u7f6e\u4e00\u4e2a\u552f\u4e00\u4e14\u957f\u5ea6\u5c0f\u4e8e ",Object(l.b)("inlineCode",{parentName:"p"},"50")," \u7684 ",Object(l.b)("inlineCode",{parentName:"p"},"id")," \u4e86\uff0c\u4eba\u4e3a\u8bbe\u7f6e\u7684\u8bdd\u592a\u9ebb\u70e6\u4e86\uff0c\u800c\u4e14\u4e5f\u4e0d\u80fd\u4fdd\u8bc1\u6211\u4eec\u4e0d\u4f1a\u7c97\u5fc3\u5bfc\u81f4 ",Object(l.b)("inlineCode",{parentName:"p"},"id")," \u4e0d\u552f\u4e00\u7684\u60c5\u51b5\u4e0d\u53d1\u751f...\u53c2\u7167 ",Object(l.b)("a",{parentName:"p",href:"https://github.com/gitalk/gitalk/issues/102"},"Issue#102")," \u91cc\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u53ef\u4ee5\u4f7f\u7528 ",Object(l.b)("inlineCode",{parentName:"p"},"md5")," \u6765\u5bf9\u8def\u5f84\u7f16\u7801\u5904\u7406\uff1a"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"\u5b89\u88c5 ",Object(l.b)("inlineCode",{parentName:"p"},"md5")," \uff1a ",Object(l.b)("inlineCode",{parentName:"p"},"cnpm i --save md5"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"\u4f7f\u7528 ",Object(l.b)("inlineCode",{parentName:"p"},"md5")," \u5bf9\u8def\u5f84\u7f16\u7801\uff1a"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-jsx"},' import md5 from \'md5\';\n\n <GitalkComponent options={{\n   clientID: "376f48...5e1f9ac5...",\n   clientSecret: "aceda7..367f6...3e", \n   repo: "gittalk-comments", // \u6211\u4eec\u524d\u9762\u521b\u5efa\u7684\u4ed3\u5e93\u540d\n   owner: "yleave",\n   admin: ["yleave"],  // \u53ef\u4ee5\u6709\u591a\u4e2a\n   id: md5(location.pathname)  // pathname \u76f8\u8f83 href \u66f4\u77ed\u4e14\u4e5f\u4fdd\u8bc1\u662f\u552f\u4e00\u7684\n }} />\n')))),Object(l.b)("p",null,"\u2003","\u2003","\u81f3\u6b64\uff0c\u89e3\u51b3\u4e86\u7b2c\u4e00\u4e2a\u5751\u70b9\u3002"),Object(l.b)("h3",{id:"\u57512\uff1areferenceerror-window-is-not-defined"},"\u57512\uff1aReferenceError: window is not defined"),Object(l.b)("p",null,"\u2003","\u2003","\u89e3\u51b3\u5b8c\u7b2c\u4e00\u4e2a\u5751\u70b9\uff0c\u8bc4\u8bba\u529f\u80fd\u5728\u672c\u5730\u4e0a\u8dd1\u5f97\u98ce\u751f\u6c34\u8d77\uff0c\u7136\u800c\u4e00\u90e8\u7f72\u5230\u7ebf\u4e0a\u7684\u65f6\u5019\u5c31\u51fa\u73b0\u4e86\u95ee\u9898\uff1a"),Object(l.b)("img",{src:"https://gitee.com/ylea/imagehost1/raw/master/img/image-20210422212055958.png",alt:"image-20210422212055958",style:{zoom:"80%"}}),Object(l.b)("p",null,"\u2003","\u2003","\u5f88\u96be\u53d7\uff0c\u81ea\u4fe1 deploy \u7136\u800c\u4e00\u76c6\u51b7\u6c34\u5c31\u6d47\u4e0a\u6765\u4e86\ud83d\ude43"),Object(l.b)("p",null,"\u2003","\u2003","\u901a\u8fc7 Issues \u548c Google \u5bfb\u6c42\u89e3\u7b54\uff0c\u5927\u81f4\u5b9a\u4f4d\u4e86\u95ee\u9898\u6240\u5728\uff1a\u9879\u76ee\u5728\u6784\u5efa\u90e8\u7f72\u7684\u65f6\u5019\u4f7f\u7528\u4e86\u670d\u52a1\u7aef\u6e32\u67d3 RSS\uff08\u62a5\u9519\u7684\u8c03\u7528\u6808\u4e2d\u4f7f\u7528\u4e86 ",Object(l.b)("inlineCode",{parentName:"p"},"renderToString"),"\uff09\uff0c\u6b64\u65f6\u6240\u5904\u73af\u5883\u4e3a Node\uff0c\u56e0\u6b64\u6ca1\u6709 ",Object(l.b)("inlineCode",{parentName:"p"},"window")," \u5bf9\u8c61\uff0c\u81ea\u7136\u4e5f\u5c31\u62a5\u9519\u4e86..."),Object(l.b)("p",null,"\u2003","\u2003","\u89c2\u5bdf\u62a5\u9519\u4fe1\u606f\uff0c\u5b83\u662f\u5728\u4f7f\u7528 ",Object(l.b)("inlineCode",{parentName:"p"},"GitalkComponent")," \u7684\u65f6\u5019\u62a5\u9519\u7684\uff0c\u90a3\u4e48\u5bf9\u4e8e React \u7ec4\u4ef6\uff0c\u6211\u4eec\u5c31\u80fd\u5c06\u4ee3\u7801\u79fb\u5230 ",Object(l.b)("inlineCode",{parentName:"p"},"componentDidMount")," \u6216\u662f ",Object(l.b)("inlineCode",{parentName:"p"},"useEffect")," \u4e2d\uff0c\u4ee5\u786e\u4fdd\u8be5\u4ee3\u7801\u9664\u975e\u5728\u6d4f\u89c8\u5668\u4e2d\uff0c\u5426\u5219\u4e0d\u4f1a\u8fd0\u884c\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport GitalkComponent from "gitalk/dist/gitalk-component";\nimport md5 from \'md5\';\n\nexport default class Comment extends React.Component {\n    constructor() {\n        super();\n        this.state = {\n            ready: false\n        };\n    }\n\n    componentDidMount() {\n        this.setState({\n            ready: true\n        });\n    }\n\n    render() {\n        return (\n            <>\n                {\n                  this.state.ready ? \n                      <GitalkComponent options={{\n                          clientID: "376f48...5e1f9ac5...",\n                          clientSecret: "aceda7..367f6...3e", \n                          repo: "gittalk-comments",\n                          owner: "yleave",\n                          admin: ["yleave"],\n                          id: md5(location.pathname)\n                      }} />\n                      : null\n                }\n            </>\n        );\n    }\n}\n')),Object(l.b)("p",null,"\u2003","\u2003","\u7ecf\u8fc7\u4e86\u51e0\u4e2a\u5c0f\u65f6\u7684\u6298\u817e\uff0c\u7ec8\u4e8e\u628a\u8bc4\u8bba\u529f\u80fd\u641e\u5b9a\u4e86\uff0c\u867d\u7136\u6ca1\u6709\u8fbe\u5230\u81ea\u5df1\u60f3\u8981\u7684\u8bc4\u8bba\u529f\u80fd\u6548\u679c\uff0c\u4e0d\u8fc7\u76ee\u524d\u770b\u4e0a\u53bb\u4e5f\u8fd8\u4e0d\u8d56\ud83e\udd14"),Object(l.b)("h3",{id:"\u57513-\u4e0d\u552f\u4e00\u7684-id-\u503c"},"\u57513: \u4e0d\u552f\u4e00\u7684 id \u503c"),Object(l.b)("p",null,"\u2003","\u2003","\u81ea\u4ee5\u4e3a\u5751\u70b9\u90fd\u8e29\u5b8c\u4e86\uff0c\u6d4b\u8bd5\u4e86\u8bc4\u8bba\u529f\u80fd\u540e\u81ea\u4fe1\u90e8\u7f72\uff0c\u7136\u800c\u53c8\u53d1\u73b0\u95ee\u9898\u4e86\ud83e\udd21"),Object(l.b)("p",null,"\u2003","\u2003","\u5728\u672c\u5730\u6d4b\u8bd5\u7684\u65f6\u5019\uff0c\u5bf9\u5f53\u524d\u6587\u7ae0\u8fdb\u884c\u4e86\u8bc4\u8bba\uff0c\u5237\u65b0\u4e00\u4e0b\uff0c\u8bc4\u8bba\u8fd8\u5728\uff0cok\ud83d\udc4c"),Object(l.b)("p",null,"\u2003","\u2003","\u90e8\u7f72\u5230\u7ebf\u4e0a\u540e\uff0c\u518d\u6b21\u6253\u5f00\u8fd9\u7bc7\u6587\u7ae0\uff0c\u70b9\u5230\u6700\u5e95\u4e0b\uff0c\u8bc4\u8bba\u8fd8\u5728\uff0cok\ud83d\udc4c"),Object(l.b)("p",null,"\u2003","\u2003","\u70b9\u5f00\u5176\u4ed6\u9875\u9762\uff0c\u518d\u6b21\u70b9\u8fdb\u6765\uff0c\u62c9\u5012\u6700\u5e95\u4e0b \uff1f\uff1f\uff1f\u8bc4\u8bba\u6d88\u5931\u4e86\u2753"),Object(l.b)("p",null,"\u2003","\u2003","\u91cd\u65b0\u8bc4\u8bba\uff0c\u5237\u65b0\uff0c\u62c9\u5230\u6700\u5e95\u4e0b\uff0c\u4e4b\u524d\u7684\u8bc4\u8bba\u53c8\u51fa\u73b0\u4e86 \u2754\u2754\u2754 \u597d\u5bb6\u4f19"),Object(l.b)("p",null,"\u2003","\u2003","\u770b\u4e86\u4e0b\u8bc4\u8bba\u5b58\u653e\u7684 Issue\uff0c\u786e\u5b9e\u51fa\u73b0\u4e86\u4e24\u4e2a\uff0c\u800c\u4e14 ",Object(l.b)("inlineCode",{parentName:"p"},"id")," \u503c\u8fd8\u4e0d\u540c\uff1a"),Object(l.b)("img",{src:"https://gitee.com/ylea/imagehost1/raw/master/img/image-20210422225432818.png",alt:"image-20210422225432818",style:{zoom:"80%"}}),Object(l.b)("p",null,"\u2003","\u2003","\u53c8\u6d4b\u8bd5\u4e86\u4e0b ",Object(l.b)("inlineCode",{parentName:"p"},"md5")," \uff0c\u540c\u4e00\u4e2a\u5b57\u7b26\u4e32\u52a0\u5bc6\u51fa\u7684\u5b57\u7b26\u4e32\u786e\u5b9e\u662f\u552f\u4e00\u7684\uff0c\u90a3\u4e48\u5c31\u662f\u8def\u5f84\u95ee\u9898\u4e86\u3002"),Object(l.b)("p",null,"\u2003","\u2003","\u4ed4\u7ec6\u89c2\u5bdf\u540e\u7ec8\u4e8e\u53d1\u73b0\u4e86\u95ee\u9898\u6240\u5728\uff1a"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u5f53\u6211\u4eec\u4ece\u5176\u4ed6\u9875\u9762\u70b9\u5230\u5f53\u524d\u9875\u9762\u65f6\uff0c\u6211\u4eec\u7684\u8def\u5f84\u662f\u8fd9\u6837\u7684\uff1a",Object(l.b)("inlineCode",{parentName:"p"},"https://yleave.top/docs/%E5%8D%9A%E5%AE%A2%E5%BB%BA%E8%AE%BE/add%20comment%20component")),Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"location.pathname")," \u5c31\u662f ",Object(l.b)("inlineCode",{parentName:"p"},"/docs/%E5%8D%9A%E5%AE%A2%E5%BB%BA%E8%AE%BE/add%20comment%20component"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u800c\u5f53\u6211\u4eec\u5237\u65b0\u4e86\u5f53\u524d\u9875\u9762\uff1a",Object(l.b)("inlineCode",{parentName:"p"},"https://yleave.top/docs/%E5%8D%9A%E5%AE%A2%E5%BB%BA%E8%AE%BE/add%20comment%20component/")," ",Object(l.b)("strong",{parentName:"p"},"\u672b\u5c3e\u591a\u4e86\u4e2a\u659c\u6760"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u6216\u662f\u70b9\u51fb\u4e86\u67d0\u4e2a fragment\uff1a",Object(l.b)("inlineCode",{parentName:"p"},"https://yleave.top/docs/%E5%8D%9A%E5%AE%A2%E5%BB%BA%E8%AE%BE/add%20comment%20component/#ref"),"\n\u6b64\u65f6 ",Object(l.b)("inlineCode",{parentName:"p"},"location.pathname")," \u5c31\u662f\uff1a",Object(l.b)("inlineCode",{parentName:"p"},"/docs/%E5%8D%9A%E5%AE%A2%E5%BB%BA%E8%AE%BE/add%20comment%20component/")))),Object(l.b)("p",null,"\u2003","\u2003","\u53d1\u73b0\u51e0\u79cd\u4e0d\u540c\u7684\u64cd\u4f5c\uff0c",Object(l.b)("inlineCode",{parentName:"p"},"pathname")," \u6700\u540e\u7684\u5b57\u7b26\u662f\u4e0d\u4e00\u6837\u7684\uff08\u6709\u7684\u591a\u4e86\u4e00\u4e2a ",Object(l.b)("inlineCode",{parentName:"p"},"/"),")\uff0c\u90a3\u4e48\u6211\u4eec\u5c31\u5bf9\u8fd9\u4e2a\u672b\u5c3e\u5b57\u7b26\u8fdb\u884c\u5904\u7406\u5c31\u597d\u4e86\uff1a"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"id: md5(location.pathname.endsWith('/') ? location.pathname : location.pathname + '/')")),Object(l.b)("p",null,"\u2003","\u2003","\u8fd9\u4e0b\u603b\u8be5 ok \u4e86\u5427\uff1f\u6d4b\u8bd5\u4e86\u4e00\u4e0b\uff0c",Object(l.b)("strong",{parentName:"p"},"\u6682\u65f6"),"\u6ca1\u53d1\u73b0\u4ec0\u4e48\u95ee\u9898..."),Object(l.b)("h2",{id:"ref"},"REF"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://carl-zk.github.io/blog/2020/03/03/gitalk-%E8%BF%90%E4%BD%9C%E5%8E%9F%E7%90%86/#%E7%BB%93%E8%AE%BA"},"Gitalk \u8fd0\u4f5c\u539f\u7406")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.gatsbyjs.com/docs/debugging-html-builds/"},"Debugging HTML Builds")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/gitalk/gitalk/issues/102"},"Issue#102"))),Object(l.b)(c.a,{mdxType:"Comment"}))}s.isMDXComponent=!0}}]);