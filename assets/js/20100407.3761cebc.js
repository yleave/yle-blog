(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{124:function(e,a,n){"use strict";n.d(a,"a",(function(){return o}));var t=n(0),l=n.n(t),c=n(136);n(59);function r(e){var a=document.getElementById("busuanzi_value_page_pv");a&&(a.innerText=e.page_pv);var n=document.getElementById("busuanzi_value_site_pv");n&&(n.innerText=e.site_pv)}var i=function(e){return Object(t.useEffect)((function(){new Promise((function(e,a){var n="BusuanziCallback_"+Math.floor(1099511627776*Math.random()),t="//busuanzi.ibruce.info/busuanzi?jsonpCallback="+n,l=document.createElement("script");l.type="text/javascript",l.defer=!0,l.src=t,l.referrerPolicy="no-referrer-when-downgrade",document.getElementsByTagName("head")[0].appendChild(l),window[n]=function(a){e(a),document.removeChild(l)}})).then(r)}),[]),l.a.createElement("div",{className:"header-container"},l.a.createElement("span",{id:"busuanzi_container_page_pv"},l.a.createElement("i",{className:"iconfont iconrili"}),l.a.createElement("span",null,e.time),l.a.createElement("span",{className:"vertical-gap"},"|"),l.a.createElement("i",{className:"iconfont iconyanjing"}),l.a.createElement("span",{id:"busuanzi_value_page_pv"},l.a.createElement("i",{className:"fa fa-spinner fa-spin"}))),l.a.createElement("div",{className:"tags-container"},l.a.createElement("i",{className:"iconfont iconlabel-01"}),e.tags.map((function(e){return l.a.createElement("span",{className:"blog-tag"},"  ",e," ")}))))};function o(e){return l.a.createElement("div",null,l.a.createElement(i,{tags:e.tags,time:e.time}),l.a.createElement(c.a,null))}},128:function(e,a,n){"use strict";var t=n(0),l=n.n(t);a.a=function(e){var a=e.children,n=e.color;return l.a.createElement("span",{style:{backgroundColor:n||"#0099CC",borderRadius:"4px",color:"white",padding:"0.2rem"}},a)}},158:function(e,a,n){"use strict";var t=n(0),l=n.n(t),c=n(154),r=n(118),i=n(62),o=n.n(i);var b=37,s=39;a.a=function(e){var a=e.lazy,n=e.block,i=e.defaultValue,m=e.values,d=e.groupId,u=e.className,p=Object(c.a)(),j=p.tabGroupChoices,v=p.setTabGroupChoices,g=Object(t.useState)(i),h=g[0],O=g[1],N=t.Children.toArray(e.children),f=[];if(null!=d){var A=j[d];null!=A&&A!==h&&m.some((function(e){return e.value===A}))&&O(A)}var T=function(e){var a=e.target,n=f.indexOf(a),t=N[n].props.value;O(t),null!=d&&(v(d,t),setTimeout((function(){var e,n,t,l,c,r,i,b;(e=a.getBoundingClientRect(),n=e.top,t=e.left,l=e.bottom,c=e.right,r=window,i=r.innerHeight,b=r.innerWidth,n>=0&&c<=b&&l<=i&&t>=0)||(a.scrollIntoView({block:"center",behavior:"smooth"}),a.classList.add(o.a.tabItemActive),setTimeout((function(){return a.classList.remove(o.a.tabItemActive)}),2e3))}),150))},w=function(e){var a,n;switch(e.keyCode){case s:var t=f.indexOf(e.target)+1;n=f[t]||f[0];break;case b:var l=f.indexOf(e.target)-1;n=f[l]||f[f.length-1]}null===(a=n)||void 0===a||a.focus()};return l.a.createElement("div",{className:"tabs-container"},l.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":n},u)},m.map((function(e){var a=e.value,n=e.label;return l.a.createElement("li",{role:"tab",tabIndex:h===a?0:-1,"aria-selected":h===a,className:Object(r.a)("tabs__item",o.a.tabItem,{"tabs__item--active":h===a}),key:a,ref:function(e){return f.push(e)},onKeyDown:w,onFocus:T,onClick:T},n)}))),a?Object(t.cloneElement)(N.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):l.a.createElement("div",{className:"margin-vert--md"},N.map((function(e,a){return Object(t.cloneElement)(e,{key:a,hidden:e.props.value!==h})}))))}},159:function(e,a,n){"use strict";var t=n(0),l=n.n(t);a.a=function(e){var a=e.children,n=e.hidden,t=e.className;return l.a.createElement("div",{role:"tabpanel",hidden:n,className:t},a)}},299:function(e,a,n){"use strict";n.r(a),a.default="data:image/png;base64,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"},89:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return m})),n.d(a,"metadata",(function(){return d})),n.d(a,"Highlight1",(function(){return u})),n.d(a,"toc",(function(){return p})),n.d(a,"default",(function(){return v}));var t=n(3),l=n(8),c=(n(0),n(122)),r=n(158),i=n(159),o=n(128),b=n(124),s=n(132),m={slug:"awesome-mdx",title:"Awesome MDX"},d={unversionedId:"\u535a\u5ba2\u5efa\u8bbe/awesome-mdx",id:"\u535a\u5ba2\u5efa\u8bbe/awesome-mdx",isDocsHomePage:!1,title:"Awesome MDX",description:"\u642d\u5efa\u535a\u5ba2\u7684\u8fc7\u7a0b\u4e2d\u9047\u5230\u4e86\u4e00\u4e2a\u65b0\u683c\u5f0f\uff1a.mdx\uff0c\u5b83\u592a awesome \u4e86\uff0c\u7ed3\u5408\u4e86 markdown \u548c jsx \u8bed\u6cd5\uff0c\u8fd9\u6837\u9875\u9762\u5185\u5bb9\u5c31\u53ef\u4ee5\u53d8\u5f97\u66f4\u52a0\u4e30\u5bcc\u591a\u5f69\u4e86\uff01\u8bdd\u867d\u5982\u6b64\uff0c\u4e0d\u8fc7\u76ee\u524d\u5c31\u5355\u72ec\u7684 markdown \u57fa\u672c\u591f\u5e94\u4ed8\u65e5\u5e38\u7684\u535a\u5ba2\u7b14\u8bb0\u4e86...",source:"@site/docs/\u535a\u5ba2\u5efa\u8bbe/awesome-mdx.md",slug:"/\u535a\u5ba2\u5efa\u8bbe/awesome-mdx",permalink:"/docs/\u535a\u5ba2\u5efa\u8bbe/awesome-mdx",version:"current",sidebar:"docs",previous:{title:"\u524d\u8a00",permalink:"/docs/\u6742\u8c08/\u524d\u8a00"},next:{title:"\u535a\u5ba2\u6837\u5f0f\u4f18\u5316",permalink:"/docs/\u535a\u5ba2\u5efa\u8bbe/prettify-blog"}},u=function(e){var a=e.children,n=e.color;return Object(c.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},a)},p=[{value:"\u5934\u90e8\u5b57\u6bb5\u5b9a\u4e49",id:"\u5934\u90e8\u5b57\u6bb5\u5b9a\u4e49",children:[]},{value:"\u8d85\u94fe\u63a5",id:"\u8d85\u94fe\u63a5",children:[]},{value:"\u6807\u6ce8",id:"\u6807\u6ce8",children:[]},{value:"React \u7ec4\u4ef6",id:"react-\u7ec4\u4ef6",children:[]},{value:"\u6807\u7b7e\u7ec4",id:"\u6807\u7b7e\u7ec4",children:[]},{value:"\u4ee3\u7801\u5757",id:"\u4ee3\u7801\u5757",children:[{value:"\u57fa\u672c\u8bbe\u7f6e",id:"\u57fa\u672c\u8bbe\u7f6e",children:[]},{value:"\u591a\u8bed\u8a00\u4ee3\u7801\u5757",id:"\u591a\u8bed\u8a00\u4ee3\u7801\u5757",children:[]},{value:"\u5b9e\u65f6\u4ee3\u7801\u7f16\u8f91\u5668",id:"\u5b9e\u65f6\u4ee3\u7801\u7f16\u8f91\u5668",children:[]}]},{value:"\u5185\u8054\u76ee\u5f55",id:"\u5185\u8054\u76ee\u5f55",children:[]}],j={Highlight1:u,toc:p};function v(e){var a=e.components,m=Object(l.a)(e,["components"]);return Object(c.b)("wrapper",Object(t.a)({},j,m,{components:a,mdxType:"MDXLayout"}),Object(c.b)(b.a,{tags:["markdown"],time:"2021-4-05",mdxType:"CustomComponent"}),Object(c.b)("p",null,"\u642d\u5efa\u535a\u5ba2\u7684\u8fc7\u7a0b\u4e2d\u9047\u5230\u4e86\u4e00\u4e2a\u65b0\u683c\u5f0f\uff1a",Object(c.b)("inlineCode",{parentName:"p"},".mdx"),"\uff0c\u5b83\u592a awesome \u4e86\uff0c\u7ed3\u5408\u4e86 markdown \u548c jsx \u8bed\u6cd5\uff0c\u8fd9\u6837\u9875\u9762\u5185\u5bb9\u5c31\u53ef\u4ee5\u53d8\u5f97\u66f4\u52a0\u4e30\u5bcc\u591a\u5f69\u4e86\uff01\u8bdd\u867d\u5982\u6b64\uff0c\u4e0d\u8fc7\u76ee\u524d\u5c31\u5355\u72ec\u7684 markdown \u57fa\u672c\u591f\u5e94\u4ed8\u65e5\u5e38\u7684\u535a\u5ba2\u7b14\u8bb0\u4e86..."),Object(c.b)("p",null,"\u4e0d\u8fc7\u4ecd\u503c\u5f97\u5b66\u4e60\uff0c\u6709\u5907\u65e0\u60a3~"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"2021.4.9 \u8bb0"),Object(c.b)("p",{parentName:"blockquote"},"\u867d\u7136 mdx \u5f88\u9999\uff0c\u4e0d\u8fc7\u652f\u6301 Docusaurus \u7684 mdx \u8bed\u6cd5\u7684\u5de5\u5177\u4e0d\u592a\u597d\u627e \ud83d\ude22\uff0c\u539f\u672c\u5199\u535a\u5ba2\u4f7f\u7528 typora + PicGo \u975e\u5e38\u65b9\u4fbf\uff0c\u4f46\u662f typora \u8c8c\u4f3c\u5e76\u4e0d\u652f\u6301 mdx \u8bed\u6cd5\uff0c\u5728 typora \u4e2d\u5199\u7684\u8bdd\u6392\u7248\u4f1a\u5f88\u96be\u53d7 \uff0c\u800c\u4e14\u8fd8\u6709\u90e8\u5206\u8bed\u6cd5\u89e3\u6790\u89c4\u5219\u4e0d\u76f8\u540c\uff0c\u603b\u4e4b\u5c31\u662f\u4e27\u5931\u4e86\u4e00\u5927\u5229\u5668"),Object(c.b)("p",{parentName:"blockquote"},"\u6240\u4ee5\u770b\u6765\u4eca\u540e\u5199\u535a\u5ba2\u53ea\u80fd\u5728 VSCODE \u4e0a\u5199\u4e86\uff1f\uff1f\u66f4\u96be\u53d7\u7684\u662f\u5728 VSCODE \u4e0a\u4e0b\u8f7d\u4e86\u4e00\u4e2a MDX \u6587\u4ef6\u7684\u9884\u89c8\u63d2\u4ef6\uff0c\u4f46\u662f\u8fd9\u4e2a\u63d2\u4ef6\u5e76\u4e0d\u80fd\u89e3\u6790 Docusaurus \u7684\u8def\u5f84\u89e3\u6790 \uff1a",Object(c.b)("inlineCode",{parentName:"p"},"@site")," \u8bed\u6cd5\uff0c\u56e0\u6b64\u65e0\u6cd5\u540c\u6b65\u9884\u89c8\u4e86\uff0c\u8981\u67e5\u770b\u6548\u679c\u53ea\u80fd\u5728\u6d4f\u89c8\u5668\u91cc\u67e5\u770b\uff0c\u96be\u53d7 \ud83d\ude2b"),Object(c.b)("p",{parentName:"blockquote"},"\u8fd9\u5c31\u662f\u9c7c\u548c\u718a\u638c\u4e0d\u53ef\u517c\u5f97\u5417\uff0c\u83b7\u5f97\u4e86\u66f4\u52a0\u4e30\u5bcc\u7684\u8868\u73b0\u80fd\u529b\u5c31\u8981\u5728\u6587\u7ae0\u7f16\u8f91\u6548\u7387\u4e0a\u505a\u51fa\u4e00\u5b9a\u7684\u820d\u5f03 \ud83d\ude29")),Object(c.b)("hr",null),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"https://daringfireball.net/projects/markdown/syntax"},"Markdown")," "),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"https://mdxjs.com/"},"MDX")," "),Object(c.b)("p",null,"\u652f\u6301\u7684\u90e8\u5206 Markdown \u7279\u6027\u5982\u4e0b\uff1a"),Object(c.b)("h2",{id:"\u5934\u90e8\u5b57\u6bb5\u5b9a\u4e49"},"\u5934\u90e8\u5b57\u6bb5\u5b9a\u4e49"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"https://jekyllrb.com/docs/front-matter/"},"Front Matter"),"\uff0c\u4e3a\u6587\u6863\u63d0\u4f9b\u4e00\u4e9b\u57fa\u672c\u4fe1\u606f"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-md"},"---\nslug: doc\nid: my-doc\ntitle: My document title\ndescription: My document description\nsidebar_label: My doc\n---\n\nMarkdown content\n")),Object(c.b)("h2",{id:"\u8d85\u94fe\u63a5"},"\u8d85\u94fe\u63a5"),Object(c.b)("p",null,"\u652f\u6301\u9875\u9762\u5185\u7684\u76f8\u5bf9\u8def\u5f84\u8df3\u8f6c\u548c\u5176\u4ed6\u9875\u9762\u7684\u7edd\u5bf9\u8def\u5f84\u8df3\u8f6c\uff1a"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u76f8\u5bf9\u8def\u5f84\u7684\u6587\u4ef6\u540d\u79f0\u4e5f\u53ef\u4ee5\u662f\u6587\u7ae0\u7684\u5934\u90e8\u5b57\u6bb5\u4e2d\u5b9a\u4e49\u7684 slug \u503c")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-md"},"Let's see how to [Link](./\u524d\u8a00).\n")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-md"},"Let's see how to [Link](https://yleave.top/docs/).\n")),Object(c.b)(o.a,{mdxType:"Highlight"},"\u9875\u9762\u5185\u8df3\u8f6c\uff1a"),Object(c.b)("p",null,"Let's see how to ",Object(c.b)("a",{parentName:"p",href:"../%E6%9D%82%E8%B0%88/%E5%89%8D%E8%A8%80"},"Link"),"."),Object(c.b)(o.a,{mdxType:"Highlight"},"\u65b0\u9875\u9762\u8df3\u8f6c\uff1a"),Object(c.b)("p",null,"Let's see how to ",Object(c.b)("a",{parentName:"p",href:"https://yleave.top/docs/"},"Link"),"."),Object(c.b)(o.a,{mdxType:"Highlight"},"\u56fe\u7247\u94fe\u63a5\uff1a"),Object(c.b)("p",null,"\u53ef\u4ee5\u4f7f\u7528\u76f8\u5bf9\u8def\u5f84\u6765\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"static")," \u8def\u5f84\u4e0b\u7684\u56fe\u7247\uff1a ",Object(c.b)("inlineCode",{parentName:"p"},"static/img/docusaurus.png")," \uff0c\u5f53\u7136\u4e5f\u80fd\u4f7f\u7528\u7edd\u5bf9\u8def\u5f84\u4f7f\u7528\u7f51\u7edc\u4e0a\u7684\u56fe\u7247\u3002"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-md"},"![Docusaurus logo](/img/docusaurus.png)\n")),Object(c.b)("p",null,Object(c.b)("img",{alt:"Docusaurus logo",src:n(299).default})),Object(c.b)("h2",{id:"\u6807\u6ce8"},"\u6807\u6ce8"),Object(c.b)("p",null,"\u63d0\u4f9b\u4e86\u5f88\u68d2\u7684\u6807\u6ce8\u8bed\u6cd5\uff0c\u5171\u6709\u4e94\u79cd\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},":::note\n\nThe content and title *can* include markdown.\n\n:::\n\n:::tip You can specify an optional title\n\nHeads up! Here's a pro-tip.\n\n:::\n\n:::info\n\nUseful information.\n\n:::\n\n:::caution\n\nWarning! You better pay attention!\n\n:::\n\n:::danger\n\nDanger danger, mayday!\n\n:::\n")),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"The content and title ",Object(c.b)("em",{parentName:"p"},"can")," include markdown."))),Object(c.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"You can specify an optional title")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"Heads up! Here's a pro-tip."))),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"Useful information."))),Object(c.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"Warning! You better pay attention!"))),Object(c.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"Danger danger, mayday!"))),Object(c.b)("h2",{id:"react-\u7ec4\u4ef6"},"React \u7ec4\u4ef6"),Object(c.b)("p",null,"Docusaurus \u4e2d\u652f\u6301 mdx \u8bed\u6cd5\uff0c\u5373\u53ef\u4ee5\u5728 markdown \u4e2d\u4f7f\u7528 jsx \u8bed\u6cd5\u6dfb\u52a0\u81ea\u5b9a\u4e49\u7ec4 React \u7ec4\u4ef6\uff0c\u5f53\u8fd9\u6837\u4f7f\u7528\u7684\u65f6\u5019\u6700\u597d\u628a\u6587\u4ef6\u540e\u7f00\u6539\u6210 ",Object(c.b)("inlineCode",{parentName:"p"},".mdx")," \u4ee5\u4fbf\u4e8e\u66f4\u51c6\u786e\u7684\u89e3\u6790\u548c\u66f4\u597d\u7684\u7f16\u8f91\u5668\u652f\u6301\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"export const Highlight = ({children, color}) => (\n  <span\n    style={{\n      backgroundColor: color,\n      borderRadius: '2px',\n      color: 'red',\n      padding: '0.2rem',\n    }}>\n    {children}\n  </span>\n);\n\n<Highlight color=\"#25c2a0\">Docusaurus green</Highlight> and <Highlight color=\"#1877F2\">Facebook blue</Highlight> are my favorite colors.\n")),Object(c.b)(u,{color:"#25c2a0",mdxType:"Highlight1"},"Docusaurus green")," and ",Object(c.b)(u,{color:"#1877F2",mdxType:"Highlight1"},"Facebook blue")," are my favorite colors.",Object(c.b)("h2",{id:"\u6807\u7b7e\u7ec4"},"\u6807\u7b7e\u7ec4"),Object(c.b)("p",null,"Docusaurus \u63d0\u4f9b\u4e86 ",Object(c.b)("inlineCode",{parentName:"p"},"<Tabs>")," \u7ec4\u4ef6\uff0c\u5f00\u7bb1\u5373\u7528\uff08\u8212\u670d\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"import Tabs from '@theme/Tabs';\nimport TabItem from '@theme/TabItem';\n\n<Tabs\n  defaultValue=\"apple\"\n  values={[\n    {label: 'Apple', value: 'apple'},\n    {label: 'Orange', value: 'orange'},\n    {label: 'Banana', value: 'banana'},\n  ]}>\n  <TabItem value=\"apple\">This is an apple \ud83c\udf4e</TabItem>\n  <TabItem value=\"orange\">This is an orange \ud83c\udf4a</TabItem>\n  <TabItem value=\"banana\">This is a banana \ud83c\udf4c</TabItem>\n</Tabs>;\n")),Object(c.b)(r.a,{defaultValue:"apple",values:[{label:"Apple",value:"apple"},{label:"Orange",value:"orange"},{label:"Banana",value:"banana"}],mdxType:"Tabs"},Object(c.b)(i.a,{value:"apple",mdxType:"TabItem"},"This is an apple \ud83c\udf4e"),Object(c.b)(i.a,{value:"orange",mdxType:"TabItem"},"This is an orange \ud83c\udf4a"),Object(c.b)(i.a,{value:"banana",mdxType:"TabItem"},"This is a banana \ud83c\udf4c")),Object(c.b)("p",null,"\u53ef\u901a\u8fc7 ",Object(c.b)("inlineCode",{parentName:"p"},"groupId")," \u6765\u540c\u6b65\u6216\u521b\u5efa\u591a\u4e2a\u6807\u7b7e\u7ec4\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",Object(c.b)("inlineCode",{parentName:"p"},"className")," \u81ea\u5b9a\u4e49\u6807\u7b7e\u7ec4\u7684\u5916\u89c2"),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6807\u7b7e\u7ec4\u5728\u52a0\u8f7d\u4e4b\u540e\u5c31\u4f1a\u7acb\u5373\u6e32\u67d3\uff0c\u4f46\u662f\u4f60\u53ef\u4ee5\u901a\u8fc7\u5411 ",Object(c.b)("inlineCode",{parentName:"p"},"Tabs")," \u7ec4\u4ef6\u4f20\u9012 ",Object(c.b)("inlineCode",{parentName:"p"},"lazy")," \u5c5e\u6027\u8ba9\u8be5\u7ec4\u4ef6\u5ef6\u8fdf\u52a0\u8f7d\u3002"))),Object(c.b)("h2",{id:"\u4ee3\u7801\u5757"},"\u4ee3\u7801\u5757"),Object(c.b)("h3",{id:"\u57fa\u672c\u8bbe\u7f6e"},"\u57fa\u672c\u8bbe\u7f6e"),Object(c.b)("p",null,"\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"```")," \u6765\u521b\u5efa\u4ee3\u7801\u5757\uff0c ",Object(c.b)(o.a,{mdxType:"Highlight"},"\u4f7f\u7528 title \u5b57\u6bb5\u5b9a\u4e49\u4ee3\u7801\u6807\u9898\uff1a")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},'```jsx title="src/components/HelloDocusaurus.js"\nfunction HelloDocusaurus() {\n    return (\n        <h1>Hello, Docusaurus!</h1>\n    )\n}\n```\n')),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/components/HelloDocusaurus.js"',title:'"src/components/HelloDocusaurus.js"'},"function HelloDocusaurus() {\n  return <h1>Hello, Docusaurus!</h1>;\n}\n")),Object(c.b)("p",null,". ",Object(c.b)(o.a,{mdxType:"Highlight"},"\u4ee3\u7801\u4e2d\u7684\u53d8\u5316\u6807\u8bb0 diff\uff1a ")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"```diff title=\"sidebars.js\"\nmodule.exports = {\n  docs: [\n    {\n      type: 'category',\n      label: 'Docusaurus Tutorial',\n-     items: ['getting-started', 'create-a-doc', ...],\n+     items: ['getting-started', 'create-a-doc', 'hello', ...],\n    },\n  ],\n};\n```\n")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-diff",metastring:'title="sidebars.js"',title:'"sidebars.js"'},"module.exports = {\n  docs: [\n    {\n      type: 'category',\n      label: 'Docusaurus Tutorial',\n-     items: ['getting-started', 'create-a-doc', ...],\n+     items: ['getting-started', 'create-a-doc', 'hello', ...],\n    },\n  ],\n};\n")),Object(c.b)(o.a,{mdxType:"Highlight"},"\u8bbe\u7f6e\u67d0\u884c\u9ad8\u4eae\uff1a"),Object(c.b)("p",null,"\u5982\u8bbe\u7f6e\u7b2c\u4e00\u884c\u3001\u8bbe\u7f6e\u7b2c 4 ~ 6 \u884c\u548c\u7b2c 11 \u884c\u4ee3\u7801\u9ad8\u4eae\uff0c",Object(c.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/parse-numeric-range"},"\u66f4\u591a\u884c\u53f7\u8bbe\u7f6e"),"\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"```jsx {1,4-6,11}\nimport React from 'react';\n\nfunction MyComponent(props) {\n  if (props.isBar) {\n    return <div>Bar</div>;\n  }\n\n  return <div>Foo</div>;\n}\n\nexport default MyComponent;\n```\n")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx",metastring:"{1,4-6,11}","{1,4-6,11}":!0},"import React from 'react';\n\nfunction MyComponent(props) {\n  if (props.isBar) {\n    return <div>Bar</div>;\n  }\n\n  return <div>Foo</div>;\n}\n\nexport default MyComponent;\n")),Object(c.b)("h3",{id:"\u591a\u8bed\u8a00\u4ee3\u7801\u5757"},"\u591a\u8bed\u8a00\u4ee3\u7801\u5757"),Object(c.b)("p",null,"\u5047\u5982\u4f60\u7cbe\u901a\u5404\u4e2a\u8bed\u8a00\u7684 hello world\uff0c\u90a3\u8fd9\u4e2a\u529f\u80fd\u5c31\u975e\u5e38\u597d\u7528\u4e86\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"import Tabs from '@theme/Tabs';\nimport TabItem from '@theme/TabItem';\n\n<Tabs\n  defaultValue=\"js\"\n  values={[\n    { label: 'JavaScript', value: 'js', },\n    { label: 'Python', value: 'py', },\n    { label: 'Java', value: 'java', },\n  ]\n}>\n<TabItem value=\"js\">\n\n```js\nfunction helloWorld() {\n  console.log('Hello, world!');\n}\n```\n\n</TabItem>\n<TabItem value=\"py\">\n\n```py\ndef hello_world():\n  print 'Hello, world!'\n```\n\n</TabItem>\n<TabItem value=\"java\">\n\n```java\nclass HelloWorld {\n  public static void main(String args[]) {\n    System.out.println(\"Hello, World\");\n  }\n}\n```\n\n</TabItem>\n</Tabs>\n")),Object(c.b)(r.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Java",value:"java"}],mdxType:"Tabs"},Object(c.b)(i.a,{value:"js",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"function helloWorld() {\n  console.log('Hello, world!');\n}\n"))),Object(c.b)(i.a,{value:"py",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-py"},"def hello_world():\n  print 'Hello, world!'\n"))),Object(c.b)(i.a,{value:"java",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},'class HelloWorld {\n  public static void main(String args[]) {\n    System.out.println("Hello, World");\n  }\n}\n')))),Object(c.b)("h3",{id:"\u5b9e\u65f6\u4ee3\u7801\u7f16\u8f91\u5668"},"\u5b9e\u65f6\u4ee3\u7801\u7f16\u8f91\u5668"),Object(c.b)("p",null,"\u8981\u4f7f\u7528\u8fd9\u4e2a\u529f\u80fd\u9700\u8981\u5b89\u88c5 ",Object(c.b)("inlineCode",{parentName:"p"},"@docusaurus/theme-live-codeblock")," \u63d2\u4ef6\uff1a"),Object(c.b)(r.a,{defaultValue:"npm",values:[{label:"Npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},Object(c.b)(i.a,{value:"npm",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"cnpm install --save @docusaurus/theme-live-codeblock \n"))),Object(c.b)(i.a,{value:"yarn",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"yarn add @docusaurus/theme-live-codeblock\n")))),Object(c.b)("p",null,"\u7136\u540e\u518d\u5c06\u5176\u6dfb\u52a0\u5230 ",Object(c.b)("inlineCode",{parentName:"p"},"docusaurus.config.js")," \u4e2d\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js",metastring:"{3}","{3}":!0},"module.exports = {\n  // ...\n  themes: ['@docusaurus/theme-live-codeblock'],\n  // ...\n};\n")),Object(c.b)("p",null,"\u7136\u540e\u5728\u4ee3\u7801\u5757\u524d\u52a0\u4e0a ",Object(c.b)("inlineCode",{parentName:"p"},"live")," \u5373\u53ef\uff1a",Object(c.b)("inlineCode",{parentName:"p"},"```live"),"\uff0cRESULT \u4e2d\u7684\u5c31\u662f\u8fd9\u6bb5\u4ee3\u7801\u7684\u8fd0\u884c\u7ed3\u679c\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Clock(props) {\n  const [date, setDate] = useState(new Date());\n  useEffect(() => {\n    var timerID = setInterval(() => tick(), 1000);\n\n    return function cleanup() {\n      clearInterval(timerID);\n    };\n  });\n\n  function tick() {\n    setDate(new Date());\n  }\n  \n  return (\n    <div>\n      <h2>It is {date.toLocaleTimeString()}.</h2>\n    </div>\n  );\n}\n")),Object(c.b)("h2",{id:"\u5185\u8054\u76ee\u5f55"},"\u5185\u8054\u76ee\u5f55"),Object(c.b)("p",null,"\u4e5f\u5c31\u662f\u5728\u6587\u7ae0\u5f00\u5934\u663e\u793a\u6587\u7ae0\u7684\u76ee\u5f55\uff0c\u5df2\u7ecf\u6709\u4fa7\u8fb9\u76ee\u5f55\u529f\u80fd\u4e86\uff0c\u8fd9\u4e2a\u5c31 pass\u3002"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"import TOCInline from '@theme/TOCInline';\n\n<TOCInline toc={toc} />;\n")),Object(c.b)(s.a,{mdxType:"Comment"}))}v.isMDXComponent=!0}}]);