(self.webpackChunkyle_blog=self.webpackChunkyle_blog||[]).push([[4491],{58215:function(e,n,t){"use strict";var a=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},41395:function(e,n,t){"use strict";t.d(n,{Z:function(){return m}});var a=t(67294),r=t(80944),l=t(86010),o="tabItem_1uMI",i="tabItemActive_2DSg";var s=37,c=39;var m=function(e){var n=e.lazy,t=e.block,m=e.defaultValue,d=e.values,p=e.groupId,u=e.className,k=(0,r.Z)(),h=k.tabGroupChoices,g=k.setTabGroupChoices,f=(0,a.useState)(m),w=f[0],v=f[1],b=a.Children.toArray(e.children),C=[];if(null!=p){var N=h[p];null!=N&&N!==w&&d.some((function(e){return e.value===N}))&&v(N)}var x=function(e){var n=e.currentTarget,t=C.indexOf(n),a=d[t].value;v(a),null!=p&&(g(p,a),setTimeout((function(){var e,t,a,r,l,o,s,c;(e=n.getBoundingClientRect(),t=e.top,a=e.left,r=e.bottom,l=e.right,o=window,s=o.innerHeight,c=o.innerWidth,t>=0&&l<=c&&r<=s&&a>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(i),setTimeout((function(){return n.classList.remove(i)}),2e3))}),150))},y=function(e){var n,t;switch(e.keyCode){case c:var a=C.indexOf(e.target)+1;t=C[a]||C[0];break;case s:var r=C.indexOf(e.target)-1;t=C[r]||C[C.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},u)},d.map((function(e){var n=e.value,t=e.label;return a.createElement("li",{role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":w===n}),key:n,ref:function(e){return C.push(e)},onKeyDown:y,onFocus:x,onClick:x},t)}))),n?(0,a.cloneElement)(b.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==w})}))))}},70430:function(e,n,t){"use strict";var a=t(67294);n.Z=function(e){var n=e.children,t=e.color;return a.createElement("span",{style:{backgroundColor:t||"#0099CC",borderRadius:"4px",color:"white",padding:"0.2rem"}},n)}},27537:function(e,n,t){"use strict";t.d(n,{Z:function(){return g}});var a=t(22122),r=t(19756),l=(t(97171),t(68469)),o=t(67294),i=t(38456),s=t.n(i),c=t(10043),m=t.n(c),d=t(46914),p=t(29661),u=["node","inline","className","children"],k=l.Z.Panel,h={code:function(e){e.node;var n=e.inline,t=e.className,l=e.children,i=(0,r.Z)(e,u),s=/language-(\w+)/.exec(t||"");return!n&&s?o.createElement(d.Z,(0,a.Z)({style:p.Z,language:s[1],PreTag:"div",children:String(l).replace(/\n$/,"")},i)):o.createElement("code",(0,a.Z)({className:t},i))}};function g(e){var n=e.markdown,t=e.header,a=e.OtherComponents;return o.createElement(l.Z,{bordered:!1,style:{paddingBottom:"1.5rem"}},o.createElement(k,{header:t},o.createElement(s(),{components:h,children:""+n,remarkPlugins:[m()]}),a?o.createElement(a,null):null))}},90443:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return m},metadata:function(){return d},toc:function(){return p},default:function(){return k}});var a=t(22122),r=t(19756),l=(t(67294),t(3905)),o=(t(70430),t(59990)),i=(t(41395),t(58215),t(54734)),s=t(27537),c=["components"],m={slug:"markdown-in-collapse",title:"\u652f\u6301 markdown \u7684\u6298\u53e0\u9762\u677f"},d={unversionedId:"\u535a\u5ba2\u5efa\u8bbe/2021-05-03-markdown-collapse",id:"\u535a\u5ba2\u5efa\u8bbe/2021-05-03-markdown-collapse",isDocsHomePage:!1,title:"\u652f\u6301 markdown \u7684\u6298\u53e0\u9762\u677f",description:"&emsp;&emsp;\u9996\u5148\u770b\u770b\u770b\u6548\u679c\uff1a",source:"@site/docs/\u535a\u5ba2\u5efa\u8bbe/2021-05-03-markdown-collapse.md",sourceDirName:"\u535a\u5ba2\u5efa\u8bbe",slug:"/\u535a\u5ba2\u5efa\u8bbe/markdown-in-collapse",permalink:"/docs/\u535a\u5ba2\u5efa\u8bbe/markdown-in-collapse",version:"current",frontMatter:{slug:"markdown-in-collapse",title:"\u652f\u6301 markdown \u7684\u6298\u53e0\u9762\u677f"},sidebar:"docs",previous:{title:"\u6dfb\u52a0\u8bc4\u8bba\u529f\u80fd",permalink:"/docs/\u535a\u5ba2\u5efa\u8bbe/add comment component"},next:{title:"CSS\u7279\u6548",permalink:"/docs/CSS/CSS-demo"}},p=[{value:"\u5b9e\u73b0",id:"\u5b9e\u73b0",children:[]}],u={toc:p};function k(e){var n=e.components,t=(0,r.Z)(e,c);return(0,l.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)(o.Z,{tags:["markdown","\u6298\u53e0\u9762\u677f"],time:"2021-05-03",mdxType:"CustomComponent"}),(0,l.kt)("p",null,"\u2003","\u2003","\u9996\u5148\u770b\u770b\u770b\u6548\u679c\uff1a"),(0,l.kt)(s.Z,{markdown:"\n  # title1\n  URL: https://reactjs.org.\n  ~~~js \n  var a = 3; \n  console.log(a); \n  ~~~\n  - abc\n  - de\n  \n  ~strikethrough~\n  \n  * Lists\n  * [ ] todo\n  * [x] done\n  \n  A table:\n  | a | b |\n  | - | - |\n  ",header:"\u70b9\u51fb\u67e5\u770b\u6548\u679c\ud83d\udc47",mdxType:"MarkdownInCollapse"}),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u2003","\u2003","\u600e\u4e48\u6837\uff0c\u8fd8\u4e0d\u9519\u5427\u3002Collapse \u4e2d\u652f\u6301\u4e86 markdown \u8bed\u6cd5\u7684\u89e3\u6790\uff0c\u8868\u8fbe\u80fd\u529b\u66f4\u52a0\u4e30\u5bcc\uff0c\u8fd9\u6837\u7684\u6298\u53e0\u9762\u677f\u53ef\u4ee5\u6709\u591a\u79cd\u7528\u9014\uff0c\u6bd4\u5982\u7ed9\u4e00\u9053\u7b14\u8bd5\u9898\uff0c\u7ed3\u679c\u5c31\u53ef\u4ee5\u653e\u5728\u8fd9\u91cc\u9762\uff0c\u4ee5\u9632\u4e0d\u5c0f\u5fc3\u7784\u5230~ \u4ea6\u6216\u662f\u4e00\u4e9b\u89e3\u91ca\u6027\u3001\u62d3\u5c55\u6027\u7684\u5185\u5bb9\u4e5f\u53ef\u4ee5\u653e\u5728\u6298\u53e0\u9762\u677f\u91cc\uff0c\u6765\u8ba9\u9875\u9762\u53d8\u5f97\u6574\u6d01\u3002"),(0,l.kt)("h2",{id:"\u5b9e\u73b0"},"\u5b9e\u73b0"),(0,l.kt)("p",null,"\u2003","\u2003","\u5b9e\u73b0\u4e3b\u8981\u662f\u4f7f\u7528\u4e86 antd \u63d0\u4f9b\u7684 ",(0,l.kt)("a",{parentName:"p",href:"https://ant.design/components/collapse-cn/"},"Collapse")," \u7ec4\u4ef6\u4ee5\u53ca\u4e00\u6b3e markdown \u8bed\u6cd5\u89e3\u6790\u7ec4\u4ef6 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/remarkjs/react-markdown"},"react-markdown")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u53e6\u5916\uff0c\u82e5\u9700\u8981\u5728 react \u9879\u76ee\u4e2d\u6dfb\u52a0 markdown \u7f16\u8f91\u7ec4\u4ef6\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/kkfor/for-editor"},"for-editor"))),(0,l.kt)("p",null,"\u2003","\u2003","Collapse \u548c react-markdown \u7ec4\u4ef6\u6709\u591a\u4e2a\u53ef\u9009\u914d\u7f6e\uff0c\u8fd9\u8fb9\u5c31\u4ecb\u7ecd\u4e00\u4e0b\u80fd\u591f\u5b9e\u73b0\u4e0a\u9762\u6548\u679c\u7684\u6700\u57fa\u672c\u914d\u7f6e\u3002"),(0,l.kt)("p",null,"\u2003","\u2003","\u9996\u5148\uff0c\u5b89\u88c5\u4f9d\u8d56\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"cnpm i --save react-markdown")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"cnpm i --save antd")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"cnpm i --save remark-gfm")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"cnpm i --save react-syntax-highlighter"))),(0,l.kt)("p",null,"\u2003","\u2003","\u5176\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"remark-gfm")," \u63d2\u4ef6\u7528\u4e8e\u63d0\u4f9b\u66f4\u52a0\u4e30\u5bcc\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"markdown")," \u89e3\u6790\u529f\u80fd\uff0c\u6bd4\u5982\u5220\u9664\u7ebf\u3001\u8868\u683c\u3001\u4efb\u52a1\u5217\u8868\u3001URL \u94fe\u63a5\u7b49\u7b49\u3002"),(0,l.kt)("p",null,"\u2003","\u2003",(0,l.kt)("inlineCode",{parentName:"p"},"react-syntax-highlighter")," \u6b63\u5982\u6b63\u9762\u610f\u4e49\uff0c\u7528\u4e8e\u63d0\u4f9b\u4ee3\u7801\u9ad8\u4eae\u7684\u6548\u679c\uff0c\u6709\u591a\u79cd",(0,l.kt)("a",{parentName:"p",href:"https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/master/AVAILABLE_STYLES_PRISM.MD"},"\u98ce\u683c"),"\u9009\u62e9(",(0,l.kt)("a",{parentName:"p",href:"https://react-syntax-highlighter.github.io/react-syntax-highlighter/demo/prism.html"},"\u6548\u679c"),")\uff0c\u50cf\u4e0a\u9762\u5c55\u793a\u7684\u4ee3\u7801\u9ad8\u4eae\u98ce\u683c\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"darcula"),"\u3002"),(0,l.kt)("p",null,"\u2003","\u2003","\u7ec4\u4ef6\u5c01\u88c5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport ReactMarkdown from 'react-markdown';\nimport gfm from 'remark-gfm';\nimport { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';\nimport { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';\nimport { Collapse } from 'antd';\nconst { Panel } = Collapse;\n\n// \u4ece markdwon \u6587\u4ef6\u4e2d\u89e3\u6790\u51fa \u4ee3\u7801\u6bb5\uff0c\u5e76\u8fdb\u884c\u6837\u5f0f\u9ad8\u4eae\u5904\u7406\uff0cstyle \u53ef\u4ee5\u66ff\u6362\u6210\u81ea\u5df1\u559c\u6b22\u7684\u4ee3\u7801\u9ad8\u4eae\u98ce\u683c\nconst components = {\n    code({node, inline, className, children, ...props}) {\n        const match = /language-(\\w+)/.exec(className || '')\n        return !inline && match ? (\n            <SyntaxHighlighter style={darcula} language={match[1]} PreTag=\"div\" children={String(children).replace(/\\n$/, '')} {...props} />\n            ) : (\n            <code className={className} {...props} />\n        )\n    }\n}\n\n// markdown \u4e3a\u9700\u8981\u89e3\u6790\u7684 markdown \u6587\u6863\uff0c header \u4e3a Collapse header \u6240\u5c55\u793a\u7684\u6587\u5b57\uff0cOtherComponents \u7528\u4e8e\u62d3\u5c55\u6298\u53e0\u9762\u677f\u4e2d\u7684\u5185\u5bb9\nexport default function CollapseWithMarkdown({ markdown, header, OtherComponents }) {\n\n    return (\n        <Collapse bordered={false}>\n            <Panel header={header}>\n                <ReactMarkdown components={components} children={`${markdown}`} remarkPlugins={[gfm]} />\n                {\n                    OtherComponents ? \n                        <OtherComponents />\n                        : null\n                }\n            </Panel>\n            \n        </Collapse>\n        \n    );\n}\n")),(0,l.kt)("p",null,"\u2003","\u2003","\u7ec4\u4ef6\u5c01\u88c5\u4ee3\u7801\u5f88\u7b80\u6d01\uff0c\u5404\u79cd\u8f6e\u5b50\u4f7f\u7528\u8d77\u6765\u4e5f\u5f88\u65b9\u4fbf\uff0c\u4e0d\u8fc7\u5728\u672c\u535a\u5ba2\u4e2d\uff0c\u5411\u7ec4\u4ef6\u4e2d\u4f20\u5165 markdown \u6587\u672c\u65f6\u5374\u4e0d\u90a3\u4e48\u65b9\u4fbf\u4e86\u3002"),(0,l.kt)("p",null,"\u2003","\u2003","\u6765\u770b\u770b\u6587\u7ae0\u5f00\u5934\u5b9e\u73b0\u6548\u679c\u7684\u5bf9\u5e94\u4ee3\u7801\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<MarkdownInCollapse markdown={`\n  # title1\n\n  URL: https://reactjs.org.\n  ~~~js \n  var a = 3; \n  console.log(a); \n  ~~~\n  - abc\n  - de\n\n  ~strikethrough~\n\n  * Lists\n  * [ ] todo\n  * [x] done\n  \n  A table:\n  | a | b |\n  | - | - |\n  `}\n  header="\u70b9\u51fb\u67e5\u770b\u6548\u679c\ud83d\udc47" />\n')),(0,l.kt)("p",null,"\u2003","\u2003","\u7531\u4e8e\u6587\u7ae0\u662f\u5728 markdown \u6587\u4ef6\u4e2d\u5199\u7684\uff0c\u800c markdown \u5bf9\u4e8e\u4e00\u4e9b\u5b57\u7b26\u4f1a\u5148\u8fdb\u884c\u89e3\u6790\uff0c\u89e3\u6790\u51fa\u7684\u5185\u5bb9\u624d\u4f1a\u4f5c\u4e3a\u6587\u672c\u4f20\u5165 MarkdownInCollapse \u7ec4\u4ef6\u4e2d\uff0c\u56e0\u6b64\u6b63\u5e38\u5199\u7684\u8bdd\u5f88\u591a\u5730\u65b9\u4f1a\u62a5\u9519\uff0c\u56e0\u6b64\u5199\u8d77\u6765\u754f\u624b\u754f\u811a\u7684\u4e5f\u4e0d\u65b9\u4fbf\u3002"),(0,l.kt)("p",null,"\u2003","\u2003","\u53e6\u4e00\u4e2a\u66ff\u4ee3\u65b9\u6848\u5c31\u662f\uff1a\u5c06\u5f53\u524d\u9700\u8981\u4f20\u5165 MarkdownInCollapse \u7ec4\u4ef6\u4e2d\u7684\u5b57\u7b26\u4e32\u5728\u53e6\u4e00\u4e2a JS \u6587\u4ef6\u4e2d\u5199\u597d\uff0c\u518d\u4f7f\u7528 import \u5bfc\u5165\u4f7f\u7528\uff0c\u8fd9\u6837\u5c31\u65b9\u4fbf\u591a\u5566\uff0c\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const text = `\n.....\n`;\n\nexport default {\n    text\n};\n")),(0,l.kt)(i.Z,{mdxType:"Comment"}))}k.isMDXComponent=!0}}]);