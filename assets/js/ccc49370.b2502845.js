"use strict";(self.webpackChunkyle_blog=self.webpackChunkyle_blog||[]).push([[6103],{6123:function(e,t,a){a.d(t,{dK:function(){return l},_k:function(){return o},vc:function(){return i},rx:function(){return c},qo:function(){return s},Hk:function(){return m},Iz:function(){return u}});var n=a(47931),r=a.n(n);a(95570)(r()),a(93523).w(r()),a(96451)(r());var l=["en","zh"],o=!1,i=null,c="5228ca85",s=8,m=50,u={search_placeholder:"Search",see_all_results:"\u67e5\u770b\u6240\u6709\u76f8\u5173\u7ed3\u679c\ud83d\udc40",no_results:"\u62b1\u6b49\uff0c\u6682\u65f6\u6ca1\u6709\u8fd9\u65b9\u9762\u7684\u6587\u7ae0\ud83d\ude23.",search_results_for:'\u5173\u4e8e "{{ keyword }}" \u7684\u6240\u6709\u6587\u7ae0',search_the_documentation:"\u4ece\u5f53\u524d\u7ad9\u70b9\u4e2d\u67e5\u627e\u5173\u952e\u5b57",count_documents_found:"\u4e00\u5171\u627e\u5230\u4e86 {{ count }} \u7bc7\u76f8\u5173\u6587\u7ae0\ud83d\udc40",count_documents_found_plural:"\u4e00\u5171\u627e\u5230\u4e86 {{ count }} \u7bc7\u76f8\u5173\u6587\u7ae0\ud83d\udc40",no_documents_were_found:"\u5565\u4e5f\u6ca1\u627e\u5230\uff0c\u6362\u4e00\u4e2a\u5173\u952e\u8bcd\u5427\ud83d\ude35"}},9370:function(e,t,a){a.d(t,{Z:function(){return E}});var n=a(65581),r=a(15851),l=a(44927),o=a(93174),i=a(16229),c="sidebar_eSN6",s="sidebarItemTitle_B6SE",m="sidebarItemList_swdx",u="sidebarItem_6Wck",d="sidebarItemLink_L-cY",g="sidebarItemLinkActive_I68m",p=a(93242);function f(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,l.default)(c,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.default)(s,"margin-bottom--md")},t.title),r.createElement("ul",{className:m},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:u},r.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title))}))))}var v=a(82081),h=["sidebar","toc","children"];var E=function(e){var t=e.sidebar,a=e.toc,i=e.children,c=(0,n.Z)(e,h),s=t&&t.items.length>0;return r.createElement(o.Z,c,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},s&&r.createElement("aside",{className:"col col--3"},r.createElement(f,{sidebar:t})),r.createElement("main",{className:(0,l.default)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},i),a&&r.createElement("div",{className:"col col--2"},r.createElement(v.Z,{toc:a})))))}},93145:function(e,t,a){a.d(t,{Z:function(){return _}});var n=a(15851),r=a(44927),l=a(99278),o=a(93242),i=a(16229),c=a(11939),s=a(1106),m=a(39398),u=a(65168),d="blogPostTitle_Zama",g="blogPostData_SbwV",p="blogPostDetailsFull_-8Av",f=a(28310),v="image_f14y";var h=function(e){var t=e.author,a=t.name,r=t.title,l=t.url,o=t.imageURL;return n.createElement("div",{className:"avatar margin-bottom--sm"},o&&n.createElement(i.Z,{className:"avatar__photo-link avatar__photo",href:l},n.createElement("img",{className:v,src:o,alt:a})),a&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(i.Z,{href:l,itemProp:"url"},n.createElement("span",{itemProp:"name"},a))),r&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},r)))},E="authorCol_S7OL";function b(e){var t=e.authors,a=e.assets;return 0===t.length?n.createElement(n.Fragment,null):n.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map((function(e,t){var l;return n.createElement("div",{className:(0,r.default)("col col--6",E),key:t},n.createElement(h,{author:Object.assign({},e,{imageURL:null!=(l=a.authorsImageUrls[t])?l:e.imageURL})}))})))}var _=function(e){var t,a,v,h,E=(v=(0,s.c2)().selectMessage,function(e){var t=Math.ceil(e);return v(t,(0,o.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),_=(0,c.C)().withBaseUrl,N=e.children,k=e.frontMatter,Z=e.assets,P=e.metadata,w=e.truncated,y=e.isBlogPostPage,T=void 0!==y&&y,L=P.date,I=P.formattedDate,C=P.permalink,x=P.tags,A=P.readingTime,B=P.title,S=P.editUrl,R=P.authors,U=null!=(t=Z.image)?t:k.image;return n.createElement("article",{className:T?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(h=T?"h1":"h2",n.createElement("header",null,n.createElement(h,{className:d,itemProp:"headline"},T?B:n.createElement(i.Z,{itemProp:"url",to:C},B)),n.createElement("div",{className:(0,r.default)(g,"margin-vert--md")},n.createElement("time",{dateTime:L,itemProp:"datePublished"},I),void 0!==A&&n.createElement(n.Fragment,null," \xb7 ",E(A))),n.createElement(b,{authors:R,assets:Z}))),U&&n.createElement("meta",{itemProp:"image",content:_(U,{absolute:!0})}),n.createElement("div",{className:"markdown",itemProp:"articleBody"},n.createElement(l.Zo,{components:m.Z},N)),(x.length>0||w)&&n.createElement("footer",{className:(0,r.default)("row docusaurus-mt-lg",(a={},a[p]=T,a))},x.length>0&&n.createElement("div",{className:(0,r.default)("col",{"col--9":!T})},n.createElement(f.Z,{tags:x})),T&&S&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(u.Z,{editUrl:S})),!T&&w&&n.createElement("div",{className:"col col--3 text--right"},n.createElement(i.Z,{to:P.permalink,"aria-label":"Read more about "+B},n.createElement("b",null,n.createElement(o.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},40335:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var n=a(15851),r=a(52929),l=a(9370),o=a(93145),i=a(93242),c=a(16229);var s=function(e){var t=e.nextItem,a=e.prevItem;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(c.Z,{className:"pagination-nav__link",to:a.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(i.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&n.createElement(c.Z,{className:"pagination-nav__link",to:t.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(i.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),n.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))},m=a(1106);var u=function(e){var t,a=e.content,i=e.sidebar,c=a.frontMatter,u=a.assets,d=a.metadata,g=d.title,p=d.description,f=d.nextItem,v=d.prevItem,h=d.date,E=d.tags,b=d.authors,_=c.hide_table_of_contents,N=c.keywords,k=null!=(t=u.image)?t:c.image;return n.createElement(l.Z,{wrapperClassName:m.kM.wrapper.blogPages,pageClassName:m.kM.page.blogPostPage,sidebar:i,toc:!_&&a.toc?a.toc:void 0},n.createElement(r.Z,{title:g,description:p,keywords:N,image:k},n.createElement("meta",{property:"og:type",content:"article"}),n.createElement("meta",{property:"article:published_time",content:h}),b.some((function(e){return e.url}))&&n.createElement("meta",{property:"article:author",content:b.map((function(e){return e.url})).filter(Boolean).join(",")}),E.length>0&&n.createElement("meta",{property:"article:tag",content:E.map((function(e){return e.label})).join(",")})),n.createElement(o.Z,{frontMatter:c,assets:u,metadata:d,isBlogPostPage:!0},n.createElement(a,null)),(f||v)&&n.createElement(s,{nextItem:f,prevItem:v}))}},65168:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(15851),r=a(93242),l=a(16866),o=a(65581),i=a(44927),c="iconEdit_eo6D",s=["className"],m=function(e){var t=e.className,a=(0,o.Z)(e,s);return n.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.default)(c,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},u=a(1106);function d(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.kM.common.editThisPage},n.createElement(m,null),n.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},82081:function(e,t,a){a.d(t,{r:function(){return g},Z:function(){return p}});var n=a(15851),r=a(44927),l=a(1106);function o(e){var t=e.getBoundingClientRect();return t.top===t.bottom?o(e.parentNode):t}function i(e){var t,a=e.anchorTopOffset,n=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),r=n.find((function(e){return o(e).top>=a}));return r?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(r))?r:null!=(t=n[n.indexOf(r)-1])?t:null:n[n.length-1]}function c(){var e=(0,n.useRef)(0),t=(0,l.LU)().navbar.hideOnScroll;return(0,n.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}var s=function(e){var t=(0,n.useRef)(void 0),a=c();(0,n.useEffect)((function(){var n=e.linkClassName,r=e.linkActiveClassName;function l(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(n),l=i({anchorTopOffset:a.current}),o=e.find((function(e){return l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,a){if(a){var n;t.current&&t.current!==e&&(null==(n=t.current)||n.classList.remove(r)),e.classList.add(r),t.current=e}else e.classList.remove(r)}(e,e===o)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),function(){document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,a])},m="tableOfContents_ccoX",u="table-of-contents__link",d={linkClassName:u,linkActiveClassName:"table-of-contents__link--active"};function g(e){var t=e.toc,a=e.isChild;return t.length?n.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:u,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(g,{isChild:!0,toc:e.children}))}))):null}var p=function(e){var t=e.toc;return s(d),n.createElement("div",{className:(0,r.default)(m,"thin-scrollbar")},n.createElement(g,{toc:t}))}},19493:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(15851),r=a(44927),l=a(16229),o="tag_8ZzS",i="tagRegular_YnQw",c="tagWithCount_UFsQ";var s=function(e){var t,a=e.permalink,s=e.name,m=e.count;return n.createElement(l.Z,{href:a,className:(0,r.default)(o,(t={},t[i]=!m,t[c]=m,t))},s,m&&n.createElement("span",null,m))}},28310:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(15851),r=a(44927),l=a(93242),o=a(19493),i="tags_TQPe",c="tag_bNCi";function s(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,r.default)(i,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:c},n.createElement(o.Z,{name:t,permalink:a}))}))))}}}]);