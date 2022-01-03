"use strict";(self.webpackChunkyle_blog=self.webpackChunkyle_blog||[]).push([[7241],{71049:function(e,t,n){var r=n(15851);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},17509:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(15851),a=n(27067);var o=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(44927),i="tabItem_60p2",s="tabItemActive_3zow";var u=function(e){var t,n=e.lazy,a=e.block,u=e.defaultValue,c=e.values,m=e.groupId,d=e.className,p=r.Children.toArray(e.children),f=null!=c?c:p.map((function(e){return{value:e.props.value,label:e.props.label}})),h=null!=u?u:null==(t=p.find((function(e){return e.props.default})))?void 0:t.props.value,v=o(),g=v.tabGroupChoices,b=v.setTabGroupChoices,k=(0,r.useState)(h),w=k[0],y=k[1],C=[];if(null!=m){var E=g[m];null!=E&&E!==w&&f.some((function(e){return e.value===E}))&&y(E)}var Z=function(e){var t=e.currentTarget,n=C.indexOf(t),r=f[n].value;y(r),null!=m&&(b(m,r),setTimeout((function(){var e,n,r,a,o,l,i,u;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,l=window,i=l.innerHeight,u=l.innerWidth,n>=0&&o<=u&&a<=i&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},x=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=C.indexOf(e.target)+1;n=C[r]||C[0];break;case"ArrowLeft":var a=C.indexOf(e.target)-1;n=C[a]||C[C.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.default)("tabs",{"tabs--block":a},d)},f.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,l.default)("tabs__item",i,{"tabs__item--active":w===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:x,onFocus:Z,onClick:Z},null!=n?n:t)}))),n?(0,r.cloneElement)(p.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},p.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}},45971:function(e,t,n){var r=n(15851);t.Z=function(e){var t=e.children,n=e.color;return r.createElement("span",{style:{backgroundColor:n||"#0099CC",borderRadius:"4px",color:"white",padding:"0.2rem"}},t)}},35833:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(16866),a=n(65581),o=(n(84565),n(73526)),l=n(15851),i=n(89042),s=n.n(i),u=n(23159),c=n.n(u),m=n(10380),d=n(21702),p=["node","inline","className","children"],f=o.Z.Panel,h={code:function(e){e.node;var t=e.inline,n=e.className,o=e.children,i=(0,a.Z)(e,p),s=/language-(\w+)/.exec(n||"");return!t&&s?l.createElement(m.Z,(0,r.Z)({style:d.Z,language:s[1],PreTag:"div",children:String(o).replace(/\n$/,"")},i)):l.createElement("code",(0,r.Z)({className:n},i))}};function v(e){var t=e.markdown,n=e.header,r=e.OtherComponents;return l.createElement(o.Z,{bordered:!1,style:{paddingBottom:"1.5rem"}},l.createElement(f,{header:n},l.createElement(s(),{components:h,children:""+t,remarkPlugins:[c()]}),r?l.createElement(r,null):null))}},66274:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return d},default:function(){return f}});var r=n(16866),a=n(65581),o=(n(15851),n(99278)),l=(n(45971),n(21088)),i=(n(17509),n(71049),n(42841)),s=(n(35833),["components"]),u={slug:"these-months",title:"\u7f51\u7ad9\u505c\u66f4\u7684\u8fd9\u51e0\u4e2a\u6708"},c=void 0,m={unversionedId:"\u6742\u8c08/2022-01-02-these-months",id:"\u6742\u8c08/2022-01-02-these-months",isDocsHomePage:!1,title:"\u7f51\u7ad9\u505c\u66f4\u7684\u8fd9\u51e0\u4e2a\u6708",description:"&emsp;&emsp;\u4eca\u5929\u662f 2022 \u5e74 1 \u6708 2 \u53f7\uff0c\u6839\u636e \u65f6\u95f4\u7ebf\uff0c\u6211\u7684\u4e0a\u4e00\u7bc7\u6587\u7ae0\u662f\u5728 2021.10.20 \u53f7\u53d1\u5e03\u7684\uff0c\u8ddd\u4eca\u5df2\u6709\u4e24\u4e2a\u591a\u6708\u3002",source:"@site/docs/\u6742\u8c08/2022-01-02-these-months.md",sourceDirName:"\u6742\u8c08",slug:"/\u6742\u8c08/these-months",permalink:"/docs/\u6742\u8c08/these-months",tags:[],version:"current",frontMatter:{slug:"these-months",title:"\u7f51\u7ad9\u505c\u66f4\u7684\u8fd9\u51e0\u4e2a\u6708"},sidebar:"docs",previous:{title:"\u524d\u8a00",permalink:"/docs/\u6742\u8c08/\u524d\u8a00"},next:{title:"Awesome MDX",permalink:"/docs/\u535a\u5ba2\u5efa\u8bbe/awesome-mdx"}},d=[],p={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l.Oi,{tags:["\u6742\u8c08"],time:"2022-01-02",lastUpdate:"",mdxType:"BlogComponent"}),(0,o.kt)("p",null,"\u2003","\u2003","\u4eca\u5929\u662f 2022 \u5e74 1 \u6708 2 \u53f7\uff0c\u6839\u636e ",(0,o.kt)("a",{parentName:"p",href:"https://yleave.top/timeline/"},"\u65f6\u95f4\u7ebf"),"\uff0c\u6211\u7684\u4e0a\u4e00\u7bc7\u6587\u7ae0\u662f\u5728 2021.10.20 \u53f7\u53d1\u5e03\u7684\uff0c\u8ddd\u4eca\u5df2\u6709\u4e24\u4e2a\u591a\u6708\u3002"),(0,o.kt)("p",null,"\u2003","\u2003","\u5bf9\u4e8e\u535a\u5ba2\u7f51\u7ad9\u6765\u8bf4\uff0c\u9020\u6210\u8fd9\u4e48\u957f\u7684\u7a7a\u767d\u671f\u7684\u539f\u56e0\u65e0\u975e\u662f\u4e24\u4e2a\uff1a\u5fd9 \u548c \u61d2\uff0c\u5f88\u660e\u663e\uff0c\u6211\u662f\u540e\u8005\ud83e\udd72\u3002"),(0,o.kt)("p",null,"\u2003","\u2003","\u4e5d\u6708\u5e95\u7ed3\u675f\u4e86\u79cb\u62db\u540e\uff0c\u5f00\u59cb\u5904\u7406\u4e00\u4e9b\u6bd5\u4e1a\u76f8\u5173\u7684\u4e8b\uff0c\u5341\u6708\u5341\u4e00\u6708\u548c\u5341\u4e8c\u6708\u4e0a\u65ec\u4e00\u534a\u65f6\u95f4\u5728\u6478\u9c7c\uff0c\u5c0f\u534a\u65f6\u95f4\u5728\u5b66\u4e60\uff0c\u5c0f\u534a\u65f6\u95f4\u5728\u5b8c\u6210\u5b9e\u9a8c\u5ba4\u7684\u4ea4\u63a5\u5de5\u4f5c\uff0c\u5269\u4e0b\u7684\u65f6\u95f4\u5728\u5b8c\u6210\u6bd5\u4e1a\u7684\u6536\u5c3e\u5de5\u4f5c\uff08\u6bd5\u4e1a\u4e00\u5806\u6750\u6599\u7684\u586b\u5199\u3001\u4e0a\u4ea4\uff0c\u51c6\u5907\u7b54\u8fa9PPT\uff0c\u6bd5\u4e1a\u7b54\u8fa9\uff09\u3002"),(0,o.kt)("p",null,"\u2003","\u2003","\u65f6\u95f4\u8fc7\u7684\u771f\u662f\u592a\u5feb\u4e86\u3002"),(0,o.kt)("p",null,"\u2003","\u2003","\u79cb\u62db\u6700\u540e\u9009\u62e9\u4e86\u7f8e\u56e2\uff0c\u5728\u524d\u51e0\u4e2a\u6708\u7684\u65f6\u95f4\u6325\u970d\u540e\uff0c\u6162\u6162\u611f\u5230\u7a7a\u865a\uff0c\u5f00\u59cb\u610f\u8bc6\u5230\u81ea\u5df1\u5373\u5c06\u6210\u4e3a\u4e00\u4e2a\u793e\u755c\uff0c\u5f00\u59cb\u601d\u8003\u4eca\u540e\u7684\u4eba\u751f\u65b9\u5411\u3002\u4e8e\u662f\u4e4e\u5728\u79cd\u79cd\u539f\u56e0\u4e0b\uff08\u4eca\u540e\u7684\u6587\u7ae0\u4e2d\u4e5f\u8bb8\u4f1a\u8bf4\u5230\uff09\uff0c\u5728\u5341\u4e8c\u6708\u4e2d\u65ec\u53bb\u7f8e\u56e2\u5f00\u59cb\u4e86\u5b9e\u4e60\u4e4b\u65c5\uff0c\u81f3\u4eca\u3002\u8fd9\u7b97\u662f\u6211\u7b2c\u4e00\u4efd\u6b63\u5f0f\u7684\u5b9e\u4e60\uff0c\u521a\u8fdb\u5165\u516c\u53f8\uff0c\u5bf9\u4e00\u5207\u90fd\u611f\u5230\u964c\u751f\uff0c\u6240\u6709\u7684\u4e8b\u90fd\u9700\u8981\u63a2\u7d22\u3001\u5b66\u4e60\u5e76\u9002\u5e94\u3002\u7f51\u7ad9\u4e5f\u6ca1\u6709\u65f6\u95f4\u53bb\u6253\u7406\u4e86\uff0c\u8fd9\u770b\u4e0a\u53bb\u786e\u5b9e\u662f\u4e00\u4e2a\u987a\u7406\u6210\u7ae0\u7684\u7406\u7531\uff0c\u4f46\u5176\u5b9e\u771f\u8981\u6324\u6324\u7684\u8bdd\uff0c\u65f6\u95f4\u4e5f\u662f\u6709\u7684\u3002\u4e0d\u8fc7\u5373\u4f7f\u6211\u60f3\u8f93\u51fa\u6587\u7ae0\uff0c\u4e5f\u6ca1\u6709\u4e00\u4e2a\u8ba9\u6211\u6ee1\u610f\u7684\u6280\u672f\u79ef\u7d2f\u80fd\u591f\u8f93\u51fa\u3002\u8fd9\u6bb5\u65f6\u95f4\uff0c\u4e0d\u7ba1\u662f\u81ea\u8eab\u7684\u5b66\u4e60\u8fd8\u662f\u5bf9\u516c\u53f8\u4e1a\u52a1\u548c\u4f7f\u7528\u6280\u672f\u6808\u7684\u5b66\u4e60\u4e5f\u90fd\u662f\u6f66\u8349\u7684\u505a\u4e86\u7b14\u8bb0\uff0c\u73b0\u9636\u6bb5\u6240\u7406\u89e3\u638c\u63e1\u7684\u5185\u5bb9\u8fd8\u4e0d\u8db3\u4ee5\u8ba9\u6211\u5199\u51fa\u6211\u89c9\u5f97\u80fd\u591f\u4e0e\u5927\u5bb6\u5b66\u4e60\u4ea4\u6d41\u7684\u6587\u7ae0\u3002\u800c\u9762\u8bd5\u677f\u5757\u7684\u5185\u5bb9\uff0c\u6316\u7684\u5751\u8fd8\u6ca1\u6709\u586b\u5b8c\uff0c\u4f46\u81f3\u5c11\u5728\u73b0\u9636\u6bb5\uff0c\u5728\u8fd9\u6709\u9650\u7684\u65f6\u95f4\u4e2d\uff0c\u8fd9\u5e76\u4e0d\u662f\u6211\u503c\u5f97\u82b1\u65f6\u95f4\u53bb\u603b\u7ed3\u7684\u5185\u5bb9\uff0c\u5e0c\u671b\u4eca\u540e\u6709\u65f6\u95f4\u80fd\u5c06\u8fd9\u4e2a\u5751\u586b\u5b8c\u5427\ud83d\ude23\u3002"),(0,o.kt)(i.Z,{mdxType:"Comment"}))}f.isMDXComponent=!0}}]);