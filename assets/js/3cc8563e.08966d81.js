(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{135:function(e,n,t){"use strict";var a=t(0),l=t.n(a);n.a=function(e){var n=e.children,t=e.color;return l.a.createElement("span",{style:{backgroundColor:t||"#0099CC",borderRadius:"4px",color:"white",padding:"0.2rem"}},n)}},141:function(e,n,t){"use strict";var a=t(0),l=t.n(a),c=t(169),b=t(122),r=t(59),i=t.n(r);var o=37,p=39;n.a=function(e){var n=e.lazy,t=e.block,r=e.defaultValue,u=e.values,s=e.groupId,m=e.className,j=Object(c.a)(),d=j.tabGroupChoices,O=j.setTabGroupChoices,N=Object(a.useState)(r),f=N[0],h=N[1],g=a.Children.toArray(e.children),v=[];if(null!=s){var S=d[s];null!=S&&S!==f&&u.some((function(e){return e.value===S}))&&h(S)}var C=function(e){var n=e.target,t=v.indexOf(n),a=g[t].props.value;h(a),null!=s&&(O(s,a),setTimeout((function(){var e,t,a,l,c,b,r,o;(e=n.getBoundingClientRect(),t=e.top,a=e.left,l=e.bottom,c=e.right,b=window,r=b.innerHeight,o=b.innerWidth,t>=0&&c<=o&&l<=r&&a>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(i.a.tabItemActive),setTimeout((function(){return n.classList.remove(i.a.tabItemActive)}),2e3))}),150))},A=function(e){var n,t;switch(e.keyCode){case p:var a=v.indexOf(e.target)+1;t=v[a]||v[0];break;case o:var l=v.indexOf(e.target)-1;t=v[l]||v[v.length-1]}null===(n=t)||void 0===n||n.focus()};return l.a.createElement("div",{className:"tabs-container"},l.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(b.a)("tabs",{"tabs--block":t},m)},u.map((function(e){var n=e.value,t=e.label;return l.a.createElement("li",{role:"tab",tabIndex:f===n?0:-1,"aria-selected":f===n,className:Object(b.a)("tabs__item",i.a.tabItem,{"tabs__item--active":f===n}),key:n,ref:function(e){return v.push(e)},onKeyDown:A,onFocus:C,onClick:C},t)}))),n?Object(a.cloneElement)(g.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):l.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,n){return Object(a.cloneElement)(e,{key:n,hidden:e.props.value!==f})}))))}},142:function(e,n,t){"use strict";var a=t(0),l=t.n(a);n.a=function(e){var n=e.children,t=e.hidden,a=e.className;return l.a.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},92:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return s}));var a=t(3),l=t(8),c=(t(0),t(132)),b=(t(135),t(158)),r=(t(141),t(142),t(140)),i={slug:"JS-Automatic-Semicolon-Insertion",title:"JS\u81ea\u52a8\u63d2\u5165\u5206\u53f7\u673a\u5236ASI"},o={unversionedId:"JS/2021-05-11-JS-Automatic-Semicolon-Insertion",id:"JS/2021-05-11-JS-Automatic-Semicolon-Insertion",isDocsHomePage:!1,title:"JS\u81ea\u52a8\u63d2\u5165\u5206\u53f7\u673a\u5236ASI",description:"\u95ee\u9898\u80cc\u666f",source:"@site/docs/JS/2021-05-11-JS-Automatic-Semicolon-Insertion.md",slug:"/JS/JS-Automatic-Semicolon-Insertion",permalink:"/docs/JS/JS-Automatic-Semicolon-Insertion",version:"current",sidebar:"docs",previous:{title:"dom\u5143\u7d20\u62d6\u62fd",permalink:"/docs/JS/dom-drag"}},p=[{value:"\u95ee\u9898\u80cc\u666f",id:"\u95ee\u9898\u80cc\u666f",children:[]},{value:"ASI \u63d2\u5165\u5206\u53f7\u7684\u65f6\u673a",id:"asi-\u63d2\u5165\u5206\u53f7\u7684\u65f6\u673a",children:[{value:"1. JS \u4e2d\u4e00\u4e9b\u8bed\u6cd5\u540e\u52a0\u4e0a\u6362\u884c\u7b26\u540e\u4f1a\u81ea\u52a8\u52a0\u4e0a\u5206\u53f7",id:"1-js-\u4e2d\u4e00\u4e9b\u8bed\u6cd5\u540e\u52a0\u4e0a\u6362\u884c\u7b26\u540e\u4f1a\u81ea\u52a8\u52a0\u4e0a\u5206\u53f7",children:[]},{value:"2. \u5e76\u5165\u65b0\u884c\u540e\u82e5\u6210\u4e3a\u975e\u6cd5\u8bed\u53e5\u5219\u4f1a\u81ea\u52a8\u63d2\u5165\u5206\u53f7",id:"2-\u5e76\u5165\u65b0\u884c\u540e\u82e5\u6210\u4e3a\u975e\u6cd5\u8bed\u53e5\u5219\u4f1a\u81ea\u52a8\u63d2\u5165\u5206\u53f7",children:[]},{value:"3. \u4ee5\u81ea\u589e/\u51cf\u8fd0\u7b97\u7b26 ++\u3001-- \u5f00\u5934",id:"3-\u4ee5\u81ea\u589e\u51cf\u8fd0\u7b97\u7b26-\u3001---\u5f00\u5934",children:[]},{value:"4.\u7279\u6b8a\u60c5\u51b5",id:"4\u7279\u6b8a\u60c5\u51b5",children:[]}]},{value:"\u5982\u4f55\u67e5\u770b\u81ea\u52a8\u63d2\u5165\u5206\u53f7\u540e\u7684\u4ee3\u7801",id:"\u5982\u4f55\u67e5\u770b\u81ea\u52a8\u63d2\u5165\u5206\u53f7\u540e\u7684\u4ee3\u7801",children:[]},{value:"\u5c0f\u7ed3",id:"\u5c0f\u7ed3",children:[]},{value:"REF",id:"ref",children:[]}],u={toc:p};function s(e){var n=e.components,t=Object(l.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)(b.a,{tags:["ASI","JS\u8fd0\u884c\u673a\u5236"],time:"2021-05-11",mdxType:"CustomComponent"}),Object(c.b)("h2",{id:"\u95ee\u9898\u80cc\u666f"},"\u95ee\u9898\u80cc\u666f"),Object(c.b)("p",null,"\u2003","\u2003","\u6572\u4ee3\u7801\u7684\u65f6\u5019\u5199\u4e86\u4e00\u6761\u5224\u65ad\u8bed\u53e5\uff0c\u5927\u81f4\u4f5c\u7528\u662f\u5224\u65ad\u4e24\u4e2a\u957f\u65b9\u4f53\u662f\u5426\u8d34\u5408\uff0c\u56e0\u6b64\u9700\u8981\u5bf9\u4e09\u4e2a\u7ef4\u5ea6\u5206\u522b\u8fdb\u884c\u5224\u65ad\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"return check(b1.min.x, b2.min.x) && check(b1.max.x, b2.max.x)\n    && check(b1.min.y, b2.min.y) && check(b1.max.y, b2.max.y)\n    && check(b1.min.z, b2.min.z) && check(b1.max.z, b2.max.z);\n")),Object(c.b)("p",null,"\u2003","\u2003","\u56e0\u4e3a\u8bed\u53e5\u6bd4\u8f83\u957f\uff0c\u56e0\u6b64\u5c31\u5c06\u5176\u5206\u884c\uff0c\u6309\u7167\u7f16\u7801\u7ecf\u9a8c\u6765\u8bf4\uff0c\u8fd9\u79cd\u5206\u884c\u7684\u5199\u6cd5",Object(c.b)("strong",{parentName:"p"},"\u80af\u5b9a\u662f\u6ca1\u9519\u7684"),"\uff0c\u4e0d\u8fc7\u53c8\u60f3\u8d77\u4e86\u4e4b\u524d\u5728\u5b66\u4e60 JS \u7684\u65f6\u5019\u6709\u770b\u8fc7\u8fd9\u4e48\u4e00\u4e2a\u6982\u5ff5\uff1a",Object(c.b)("strong",{parentName:"p"},"JS \u4f1a\u5728\u884c\u672b\u81ea\u52a8\u52a0\u4e0a\u5206\u53f7\uff0c\u56e0\u6b64 JS \u4ee3\u7801\u4e2d\u7684\u5206\u53f7\u53ef\u4ee5\u7701\u7565\u3002"),"\u4e0d\u8fc7\u5982\u679c\u771f\u662f\u8fd9\u6837\u7684\u8bdd\u4e0a\u9762\u7684\u4ee3\u7801\u5c82\u4e0d\u662f\u4f1a\u5728\u7b2c\u4e00\u884c\u672b\u5c31\u52a0\u4e0a\u5206\u53f7\u5417\uff1f"),Object(c.b)("p",null,"\u2003","\u2003","\u51fa\u73b0\u4e86\u77db\u76fe\uff0c\u65e2\u7136\u4e0a\u9762\u7684\u4ee3\u7801\u4e0d\u4f1a\u51fa\u9519\uff0c\u90a3\u5c31\u662f\u4e4b\u524d\u5b66\u4e60\u7684\u77e5\u8bc6\u5185\u5bb9\u51fa\u73b0\u4e86\u504f\u5dee\uff0c\u56e0\u6b64\u501f\u8fd9\u4e2a\u673a\u4f1a\u6574\u7406\u4e86\u4e00\u4e0b ",Object(c.b)("strong",{parentName:"p"},"ASI\uff08Automatic Semicolon Insertion \uff0c\u81ea\u52a8\u63d2\u5165\u5206\u53f7\u673a\u5236\uff09")," \u7684\u77e5\u8bc6\u3002"),Object(c.b)("p",null,"\u2003","\u2003","\u5b66\u4e60\u4e4b\u65f6\uff0c\u770b\u4e86\u4e00\u4e9b\u5173\u4e8e ",Object(c.b)("strong",{parentName:"p"},"JS \u8bed\u53e5\u540e\u662f\u5426\u5e94\u8be5\u52a0\u5206\u53f7"),"\u7684\u56de\u7b54\uff0c\u624d\u53d1\u73b0\u8fd9\u4e2a\u95ee\u9898\u5f88\u65e9\u4e4b\u524d\u5c31\u88ab\u8bf8\u591a\u5927\u795e\u4eec\u70ed\u70c8\u8ba8\u8bba\u8fc7\u4e86\uff0c\u5df2\u6ca6\u4e3a\u52a0\u5206\u53f7\u515a\u548c\u4e0d\u52a0\u5206\u53f7\u515a\u4e4b\u95f4\u65f7\u65e5\u6301\u4e45\u7684\u53e3\u6c34\u6218\u3002\u867d\u7136\u770b\u4e86\u4e00\u5708\u4e0b\u6765\uff0c\u591a\u6570\u5199\u56de\u7b54\u7684\u5927\u4f6c\u90fd\u4f1a\u66f4\u504f\u5411\u4e8e\u4e0d\u52a0\u5206\u53f7\u7684\u5f62\u5f0f\uff0c\u4e0d\u52a0\u5206\u53f7\u7684\u89c2\u70b9\u4e3b\u8981\u8fd8\u662f\uff1a"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"\u7a0b\u5e8f\u5458\u603b\u6709\u72af\u8ff7\u7cca\u5fd8\u4e86\u52a0\u5206\u53f7\u7684\u65f6\u5019\uff0c\u8fd9\u6837 ASI \u5c31\u65e0\u6cd5\u533a\u5206\u662f\u6709\u610f\u4e0d\u5199\u8fd8\u662f\u65e0\u610f\u4e2d\u5fd8\u4e86\u5199"),Object(c.b)("li",{parentName:"ol"},"\u5373\u4f7f\u5168\u90fd\u52a0\u4e0a\u5206\u53f7\uff0c\u4e5f\u4e0d\u80fd\u89e3\u51b3 ASI \u7684\u4e00\u4e9b\u7f3a\u9677\uff08",Object(c.b)("inlineCode",{parentName:"li"},"return")," \u6362\u884c\u540e\u4f1a\u81ea\u52a8\u63d2\u5165\u5206\u53f7\uff09"),Object(c.b)("li",{parentName:"ol"},"\u5bf9\u5168\u52a0\u5206\u53f7\u540e\u8bed\u4e49\u8868\u8fbe\u5224\u65ad\u7684\u6210\u672c\u95ee\u9898\uff08\u5982\u51fd\u6570\u8868\u8fbe\u5f0f\u7684 ",Object(c.b)("inlineCode",{parentName:"li"},"}")," \u540e\u662f\u5426\u90fd\u9700\u8981\u52a0\u4e0a\u5206\u53f7\uff09"),Object(c.b)("li",{parentName:"ol"},"\u4e0d\u52a0\u5206\u53f7\u7684\u8bdd\u9664\u4e86\u51e0\u79cd\u7279\u6b8a\u60c5\u51b5\uff08\u4e0b\u6587\u6709\uff09\uff0c\u5176\u4f59\u60c5\u51b5\u5e76\u4e0d\u4f1a\u5f71\u54cd\u5230\u7a0b\u5e8f\u7684\u6b63\u5e38\u8fd0\u884c\uff0c\u4e14\u7279\u6b8a\u60c5\u51b5\u7684\u51fa\u73b0\u6982\u7387\u8fd8\u5f88\u5c0f")),Object(c.b)("p",null,"\u2003","\u2003","\u5bf9\u6211\u4e2a\u4eba\u6765\u8bf4\uff0c\u6211\u662f\u4e60\u60ef\u5728\u8bed\u53e5\u540e\u52a0\u4e0a\u5206\u53f7\u7684\uff0c\u4e0d\u52a0\u5206\u53f7\u5c31\u4f1a\u6709\u70b9\u4e0d\u8212\u670d\uff08\u7f16\u7801\u5f3a\u8feb\u75c7\u60a3\u8005\uff09\uff0c\u4e0d\u8fc7\u6211\u5bf9\u8fd9\u4e2a\u95ee\u9898\u8fd8\u662f\u4fdd\u6301\u4e2d\u7acb\u7684\uff0c\u52a0\u5206\u53f7\u548c\u4e0d\u52a0\u5206\u53f7\u8bf4\u5230\u5e95\u4e5f\u5c31\u662f\u7f16\u7801\u98ce\u683c\u95ee\u9898\uff0c\u771f\u8981\u8bf4\u5176\u5b9e\u4e24\u8005\u90fd\u6709\u72af\u9519\u7684\u53ef\u80fd\uff0c\u6309\u7167\u81ea\u5df1\u7f16\u7801\u4e60\u60ef\u6765\uff0c\u8212\u8212\u670d\u670d\u7684\u6700\u597d\u3002\u800c\u5b9e\u9645\u5728\u56e2\u961f\u5408\u4f5c\u65f6\uff0c\u4e0d\u7ba1\u4f60\u4e2a\u4eba\u7f16\u7a0b\u4e60\u60ef\u5982\u4f55\uff0c\u53ea\u8981\u914d\u7f6e\u4e86\u7b26\u5408\u56e2\u961f\u7f16\u7801\u98ce\u683c\u7684\u683c\u5f0f\u5316\u4ee3\u7801\u914d\u7f6e\uff0c\u6211\u89c9\u5f97\u5c31\u662f\u6ca1\u95ee\u9898\u7684\u3002"),Object(c.b)("h2",{id:"asi-\u63d2\u5165\u5206\u53f7\u7684\u65f6\u673a"},"ASI \u63d2\u5165\u5206\u53f7\u7684\u65f6\u673a"),Object(c.b)("h3",{id:"1-js-\u4e2d\u4e00\u4e9b\u8bed\u6cd5\u540e\u52a0\u4e0a\u6362\u884c\u7b26\u540e\u4f1a\u81ea\u52a8\u52a0\u4e0a\u5206\u53f7"},"1. JS \u4e2d\u4e00\u4e9b\u8bed\u6cd5\u540e\u52a0\u4e0a\u6362\u884c\u7b26\u540e\u4f1a\u81ea\u52a8\u52a0\u4e0a\u5206\u53f7"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u540e\u7f6e\u8fd0\u7b97\u7b26\uff08",Object(c.b)("inlineCode",{parentName:"li"},"++")," \u548c ",Object(c.b)("inlineCode",{parentName:"li"},"--"),"\uff09"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"continue")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"break")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"return")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"yield"),"\u3001",Object(c.b)("inlineCode",{parentName:"li"},"yield*")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"module"))),Object(c.b)("p",null,"\u6211\u4eec\u4ee5 ",Object(c.b)("inlineCode",{parentName:"p"},"return")," \u8bed\u53e5\u4e3a\u4f8b\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"// \u6b63\u5e38\u8fd4\u56de\u4e00\u4e2a\u5bf9\u8c61\nreturn {\n    a: 1\n}\n")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"return\n{\n    a: 1\n}\n\n// \u89e3\u6790\u4e3a\nreturn;\n{\n    a: 1\n};\n")),Object(c.b)("p",null,"\u2003","\u2003","\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c",Object(c.b)("inlineCode",{parentName:"p"},"return")," \u8fd4\u56de\u503c\u4e3a ",Object(c.b)("inlineCode",{parentName:"p"},"undefined"),"\uff0c\u8fd4\u56de\u7ed3\u679c\u663e\u7136\u4e0e\u6211\u4eec\u9884\u671f\u4e0d\u7b26\u3002"),Object(c.b)("h3",{id:"2-\u5e76\u5165\u65b0\u884c\u540e\u82e5\u6210\u4e3a\u975e\u6cd5\u8bed\u53e5\u5219\u4f1a\u81ea\u52a8\u63d2\u5165\u5206\u53f7"},"2. \u5e76\u5165\u65b0\u884c\u540e\u82e5\u6210\u4e3a\u975e\u6cd5\u8bed\u53e5\u5219\u4f1a\u81ea\u52a8\u63d2\u5165\u5206\u53f7"),Object(c.b)("p",null,"\u2003","\u2003","JS \u4ee3\u7801\u5728\u89e3\u6790\u65f6\u4f1a\u628a\u6362\u884c\u7b26\u4f5c\u4e3a\u89e3\u6790\u7684\u4f9d\u636e\u4e4b\u4e00\uff0c\u5b83\u4f1a\u5c3d\u91cf\u62fc\u63a5\u4e0b\u4e00\u884c\u7684\u8bed\u53e5\uff0c\u4e0d\u8fc7\u82e5\u662f\u62fc\u63a5\u4e0a\u540e\u4e0d\u80fd\u6210\u4e3a\u4e00\u4e2a\u5b8c\u6574\u7684\u8bed\u53e5\uff0c\u5219\u4f1a\u5728\u4e2d\u95f4\u63d2\u5165\u5206\u53f7\uff0c\u5982\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"a = b\n++c\n\n// \u8fd9\u6bb5\u4ee3\u7801\u4f1a\u88ab\u6b63\u786e\u89e3\u6790\u4e3a\na = b;\n++c;\n")),Object(c.b)("p",null,"\u2003","\u2003","\u56e0\u4e3a\u82e5\u4e24\u884c\u4ee3\u7801\u5e76\u5728\u4e00\u8d77\u663e\u7136\u662f\u4f1a\u62a5\u9519\u7684\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"a = b++c;\n")),Object(c.b)("p",null,"\u2003","\u2003","\u518d\u6765\u770b\u770b\u5176\u4ed6\u80fd\u591f\u6b63\u786e\u89e3\u6790\u7684\u4f8b\u5b50\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"let a \na\n=\n3\nconsole.log(a) //3\n\n// \u89e3\u6790\u4e3a\nlet a;\na = 3;\nconsole.log(a); //3\n")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"let a = \nx\n&&\ny\n\n&& a\n\n// \u89e3\u6790\u4e3a\nlet a = x && y && a;\n")),Object(c.b)("h3",{id:"3-\u4ee5\u81ea\u589e\u51cf\u8fd0\u7b97\u7b26-\u3001---\u5f00\u5934"},"3. \u4ee5\u81ea\u589e/\u51cf\u8fd0\u7b97\u7b26 ++\u3001-- \u5f00\u5934"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"a\n++\nb\n+\nc\n// \u89e3\u6790\u6210\u4e86\na;\n++b + c;\n")),Object(c.b)("p",null,"\u2003","\u2003","\u6ce8\u610f\uff0c\u8fd9\u4e2a\u548c\u7b2c ",Object(c.b)("inlineCode",{parentName:"p"},"1.")," \u4e2d\u7684\u540e\u7f6e\u8fd0\u7b97\u7b26 ",Object(c.b)("inlineCode",{parentName:"p"},"++"),"\u3001",Object(c.b)("inlineCode",{parentName:"p"},"--")," \u7684\u533a\u522b\uff0c\u540e\u7f6e\u8fd0\u7b97\u7b26\u540e\u82e5\u8ddf\u7684\u662f\u6362\u884c\u7b26\u5219\u4f1a\u52a0\u4e0a\u5206\u53f7\uff0c\u524d\u7f6e\u8fd0\u7b97\u7b26\u5219\u4f1a\u4e0e\u4e0b\u4e00\u884c\u5e76\u5728\u4e00\u8d77\u89e3\u6790\u3002"),Object(c.b)("h3",{id:"4\u7279\u6b8a\u60c5\u51b5"},"4.\u7279\u6b8a\u60c5\u51b5"),Object(c.b)("p",null,"\u2003","\u2003","\u5f53\u4e00\u6761\u8bed\u53e5\u4ee5\uff1a\u62ec\u53f7",Object(c.b)("inlineCode",{parentName:"p"},"("),"\uff0c\u65b9\u62ec\u53f7",Object(c.b)("inlineCode",{parentName:"p"},"["),"\uff0c\u6b63\u5219\u5f00\u5934\u7684\u659c\u6760",Object(c.b)("inlineCode",{parentName:"p"},"/"),"\uff0c\u52a0\u53f7",Object(c.b)("inlineCode",{parentName:"p"},"+"),"\uff0c\u51cf\u53f7",Object(c.b)("inlineCode",{parentName:"p"},"-")," \u5f00\u5934\u7684\u8bdd\uff0c\u90a3\u4e48\u6781\u6709\u53ef\u80fd\u548c\u524d\u9762\u4e00\u6761\u8bed\u53e5\u4e00\u8d77\u89e3\u6790\uff0c",Object(c.b)("strong",{parentName:"p"},"\u8fd9\u79cd\u60c5\u51b5\u4e0b\u4ec5\u4f9d\u9760\u89e3\u6790\u89c4\u5219\u7684\u8bdd\u53ef\u80fd\u4f1a\u51fa\u95ee\u9898\uff0c\u56e0\u6b64\u6700\u597d\u81ea\u5df1\u52a0\u4e0a\u5206\u53f7\u3002")),Object(c.b)("p",null,"\u5982\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"let a = b\n(function() {\n    ...\n})()\n\n// \u89e3\u6790\u4e3a\nlet a = b(function () {\n  ...\n})();\n")),Object(c.b)("p",null,"\u2003","\u2003","\u6211\u4eec\u7684\u672c\u610f\u662f\u5c06 ",Object(c.b)("inlineCode",{parentName:"p"},"b")," \u8d4b\u503c\u7ed9 ",Object(c.b)("inlineCode",{parentName:"p"},"a"),"\uff0c\u7136\u540e\u4e0b\u9762\u662f\u4e00\u4e2a\u7acb\u5373\u6267\u884c\u7684\u51fd\u6570\uff0c\u82e5\u6ca1\u6807\u660e\u5206\u53f7\u7684\u8bdd\u90a3\u4e48\u5c31\u53d8\u6210\u4e86\u53e6\u4e00\u4e2a\u4e0d\u77e5\u9053\u80fd\u5426\u6267\u884c\u7684\u4ee3\u7801\u4e86..."),Object(c.b)("p",null,"\u518d\u5982\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"a = b\n[1,2,3].forEach(function(e){\n    console.log(e)\n})\n\n// \u89e3\u6790\u4e3a\na = b[(1, 2, 3)].forEach(function (e) {\n    console.log(e);\n});\n")),Object(c.b)("p",null,"\u518d\u5982\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"// \u8fd9\u662f\u4e00\u6bb5\u6ca1\u95ee\u9898\u7684\u4ee3\u7801\nfunction a() {\n...\n}\n[1,2,3].forEach(...)\n")),Object(c.b)("p",null,"\u2003","\u2003","\u800c\u82e5\u662f\u6362\u79cd\u65b9\u5f0f\u5199\u7684\u8bdd\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"var a = function() {\n  ...\n}\n[1,2,3].forEach(...)\n\n// \u95ee\u9898\u5c31\u5927\u4e86\uff01\uff01\u89e3\u6790\u540e\u53d8\u6210\u4e0b\u9762\u8fd9\u6837\nvar a = function () {}[(1, 2, 3)].forEach();\n")),Object(c.b)("h2",{id:"\u5982\u4f55\u67e5\u770b\u81ea\u52a8\u63d2\u5165\u5206\u53f7\u540e\u7684\u4ee3\u7801"},"\u5982\u4f55\u67e5\u770b\u81ea\u52a8\u63d2\u5165\u5206\u53f7\u540e\u7684\u4ee3\u7801"),Object(c.b)("p",null,"\u2003","\u2003","\u53ef\u4ee5\u5728\u4ee3\u7801\u6240\u5c5e\u7684\u9879\u76ee\u4e2d\u914d\u7f6e\u4ee3\u7801\u683c\u5f0f\u5316\u63d2\u4ef6\uff0c\u5982 ",Object(c.b)("inlineCode",{parentName:"p"},"Prettier"),"\uff0c\u4e0d\u8fc7\u592a\u9ebb\u70e6\u4e86\uff08\u4e3b\u8981\u662f\u4e0d\u77e5\u9053\u600e\u4e48\u914d\ud83e\udd21\uff09\uff0c\u4e0d\u8fc7\u5206\u53f7\u63d2\u5165\u4e5f\u7b97\u4ee3\u7801\u7ffb\u8bd1\u7684\u4e00\u79cd\u5427\uff0c\u90a3\u4e48\u4e0d\u5c31\u80fd\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"babel")," \u6765\u8f6c\u8bd1\u770b\u770b\u4e48\ud83d\ude01\uff0c\u4e0a\u9762\u6ca1\u52a0\u5206\u53f7\u7684\u4ee3\u7801\u90fd\u662f\u8fd9\u6837\u8f6c\u8bd1\u8fc7\u6765\u7684\u3002"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"https://www.babeljs.cn/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.6&spec=false&loose=false&code_lz=Q&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.14.1&externalPlugins="},"babel\u5b98\u7f51\u5728\u7ebf\u8f6c\u8bd1")),Object(c.b)("h2",{id:"\u5c0f\u7ed3"},"\u5c0f\u7ed3"),Object(c.b)("p",null,"\u2003","\u2003","\u5173\u4e8e JS \u8bed\u53e5\u662f\u5426\u5e94\u8be5\u52a0\u4e0a\u5206\u53f7\u7684\u4e2a\u4eba\u611f\u60f3\u524d\u9762\u5df2\u7ecf\u8bf4\u8fc7\u4e86\uff0cASI \u63d2\u5165\u5206\u53f7\u7684\u89c4\u5219\u5982\u4e0a\u9762\u51e0\u4e2a\u5c0f\u6807\u9898\u3002"),Object(c.b)("p",null,"\u2003","\u2003","\u8fd9\u8fb9\u518d\u5f15\u7528\u4e00\u4e0b",Object(c.b)("a",{parentName:"p",href:"https://www.zhihu.com/question/20298345/answer/14690437"},"@\u7530\u4e50"),"\u548c",Object(c.b)("a",{parentName:"p",href:"https://www.zhihu.com/question/20298345/answer/49551142"},"@\u5c24\u96e8\u6eaa"),"\u7684\u56de\u7b54\u6765\u4f5c\u4e3a\u4e00\u4e2a\u5c0f\u7ed3\u5427\uff1a"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u7530\u4e50\uff1a"),Object(c.b)("p",{parentName:"blockquote"},"\u52a0\u4e0e\u4e0d\u52a0\u662f\u98ce\u683c\u95ee\u9898\uff0c\u98ce\u683c\u4e89\u8bae\u4e0d\u9700\u8981\u6709\u4e2a\u5b9a\u8bba\u3002\u5173\u952e\u7684\u95ee\u9898\u5728\u4e8e\u5982\u4f55\u201c\u4e89\u8bba\u201d\uff0c\u5904\u7406\u597d\u51b2\u7a81\uff0c\u5b66\u4f1a\u7ec4\u7ec7\u8bed\u8a00\u51cf\u5c11\u4e89\u8bae\u662f\u6700\u91cd\u8981\u7684\u3002\u56e0\u4e3a\u5206\u53f7\u95ee\u9898\u5728\u793e\u533a\u5185\u90e8\u9020\u6210\u4e86\u5f88\u591a\u51b5\u65e5\u6301\u4e45\u7684\u53e3\u6c34\u6218\uff0c\u8fd9\u4e9b\u53e3\u6c34\u6218\u662f\u793e\u533a\u7684\u635f\u5931\u2026\u2026\u56e0\u4e3a\u5927\u5bb6\u5728\u8fd9\u4e2a\u65f6\u5019\u53ef\u4ee5\u5199\u66f4\u591a\u7684\u4ee3\u7801\u5e26\u6765\u66f4\u591a\u7684\u529f\u80fd\u3002\n\u7c7b\u4f3c\u7684\u95ee\u9898\u8fd8\u6709AMD\u7684module\uff0c\u6709\u7684\u5e93\u9009\u62e9\u517c\u5bb9AMD\uff0c\u6709\u7684\u4eba\u4e0d\u613f\u610f\u3002\u516c\u8ba4\u7ed3\u8bba\u662f\u5e94\u8be5\u5c0a\u91cd\u4f5c\u8005\u7684\u9009\u62e9\uff0c\u4e0d\u8981\u56e0\u4e3a\u8fd9\u4e9b\u98ce\u683c\u95ee\u9898\u800cfork\u3002module loader\u5e94\u8be5\u8bbe\u6cd5\u7ed5\u8fc7\u8fd9\u4e9b\u95ee\u9898\uff0c\u63d0\u4f9b\u517c\u5bb9\u7684\u89e3\u51b3\u65b9\u6848\u3002")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u5c24\u96e8\u6eaa\uff1a"),Object(c.b)("p",{parentName:"blockquote"},"\u771f\u6b63\u4f1a\u5bfc\u81f4\u4e0a\u4e0b\u884c\u89e3\u6790\u51fa\u95ee\u9898\u7684 token \u6709 5 \u4e2a\uff1a\u62ec\u53f7\uff0c\u65b9\u62ec\u53f7\uff0c\u6b63\u5219\u5f00\u5934\u7684\u659c\u6760\uff0c\u52a0\u53f7\uff0c\u51cf\u53f7\u3002\u6211\u8fd8\u4ece\u6ca1\u89c1\u8fc7\u5b9e\u9645\u4ee3\u7801\u4e2d\u7528\u6b63\u5219\u3001\u52a0\u53f7\u3001\u51cf\u53f7\u4f5c\u4e3a\u884c\u9996\u7684\u60c5\u51b5\uff0c\u6240\u4ee5\u603b\u7ed3\u4e0b\u6765\u5c31\u662f\u4e00\u53e5\u8bdd\uff1a\u4e00\u884c\u5f00\u5934\u662f\u62ec\u53f7\u6216\u8005\u65b9\u62ec\u53f7\u7684\u65f6\u5019\u52a0\u4e0a\u5206\u53f7\u5c31\u53ef\u4ee5\u4e86\uff0c\u5176\u4ed6\u65f6\u5019\u5168\u90e8\u4e0d\u9700\u8981\u3002\u5176\u5b9e\u5373\u4f7f\u662f\u8fd9\u4e24\u79cd\u60c5\u51b5\uff0c\u5728\u5b9e\u9645\u4ee3\u7801\u4e2d\u4e5f\u9887\u4e3a\u5c11\u89c1\u3002")),Object(c.b)("h2",{id:"ref"},"REF"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://www.zhihu.com/question/20298345"},"JavaScript \u8bed\u53e5\u540e\u5e94\u8be5\u52a0\u5206\u53f7\u4e48\uff1f - \u77e5\u4e4e")," "),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#%E8%87%AA%E5%8A%A8%E5%88%86%E5%8F%B7%E8%A1%A5%E5%85%A8"},"MDN \u81ea\u52a8\u5206\u53f7\u8865\u5168")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://juejin.cn/post/6864135607468163079"},"\u6398\u91d1 JS\u4ee3\u7801\u8981\u4e0d\u8981\u52a0\u5206\u53f7?")," ")),Object(c.b)(r.a,{mdxType:"Comment"}))}s.isMDXComponent=!0}}]);