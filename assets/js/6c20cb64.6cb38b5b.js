(window.webpackJsonp=window.webpackJsonp||[]).push([[18,32],{123:function(e,t,n){"use strict";n.r(t);var a,r,o=n(3),c=n(220),i=n(4),s=n(143),d=n(0),u=n.n(d),l=(n(99),n(68));n(100);function f(e){var t=e.clientX-r.left,n=e.clientY-r.top,o=t-r.width/2,c=n-r.height/2;a.setProperty("--rx",c/-1+"deg"),a.setProperty("--ry",o/10+"deg")}function p(e){a.setProperty("--ty","0"),a.setProperty("--rx","0"),a.setProperty("--ry","0")}function g(e){a.setProperty("--tz","-25px")}var h=function(e){var t=e.text,n=e.toggleFn,o=e.id;return Object(d.useEffect)((function(){var e=document.getElementById(o);return r=e.getBoundingClientRect(),a=document.documentElement.style,document.body.onmouseup=function(e){a.setProperty("--tz","-12px")},e.addEventListener("mousemove",f),e.addEventListener("mouseleave",p),e.addEventListener("mousedown",g),function(){e.removeEventListener("mousemove",f),e.removeEventListener("mouseleave",p),e.removeEventListener("mousedown",g)}}),[]),u.a.createElement("div",{id:o,className:"button-3d",onClick:n,"data-title":t})},_=n(167),m=n(148),b=n(28),v=function(e){function t(){var t;return t=e.call(this)||this,Object(s.a)(Object(c.a)(t),"onLikeChange",(function(e){t.likeMap.set(e,!t.likeMap.get(e))})),Object(s.a)(Object(c.a)(t),"getLikeProp",(function(e){return t.likeMap.get(e)})),Object(s.a)(Object(c.a)(t),"getHeartCount",(function(e){return t.heart_countMap.get(e)})),Object(s.a)(Object(c.a)(t),"setHeartCount",(function(e,n){t.heart_countMap.set(e,t.heart_countMap.get(e)+n)})),Object(s.a)(Object(c.a)(t),"update_cur_contents",(function(){var e,n,a=t.cards.length,r=t.cards,o=t.state.idx,c=o+t.content_per_page;(t.cur_contents.length=0,t.state.idx<a)&&(e=t.cur_contents).push.apply(e,r.slice(o,c));t.cur_contents.length<t.content_per_page&&a>t.content_per_page&&(n=t.cur_contents).push.apply(n,r.slice(0,c-a));t.setState({idx:(t.state.idx+t.content_per_page)%a})})),t.state={abstracts:[],idx:0},t.content_per_page=5,t.cur_contents=[],t.likeMap=new Map,t.heart_countMap=new Map,t.gradients=["linear-gradient(120deg, #a1c4fd 30%, #c2e9fb 100%)","linear-gradient(120deg, #89f7fe 30%, #96e6a1 100%)","linear-gradient(120deg, #84fab0 30%, #8fd3f4 100%)","linear-gradient(120deg, #fccb90 30%, #d57eeb 100%)","linear-gradient(to right, #4facfe 30%, #00f2fe 100%)","linear-gradient(to top, #a8edea 30%, #fed6e3 100%)","linear-gradient(to top, #5ee7df 30%, #b490ca 100%)","radial-gradient(circle 248px at center, #16d9e3 30%, #30c7ec 47%, #46aef7 100%)","linear-gradient(120deg, #89f7fe 30%, #66a6ff 100%)","linear-gradient(to top, #9890e3 30%, #b1f4cf 100%)","linear-gradient(to top, #ebc0fd 30%, #d9ded8 100%)","linear-gradient(180deg, #2af598 30%, #009efd 100%)","linear-gradient(to top, #cd9cf2 30%, #f6f3ff 100%)","linear-gradient(to top, #37ecba 30%, #72afd3 100%)","linear-gradient(to top, #ebbba7 30%, #cfc7f8 100%)","linear-gradient(to top, #fff1eb 30%, #ace0f9 100%)","linear-gradient(to top, #48c6ef 30%, #6f86d6 100%)","linear-gradient(to top, #feada6 30%, #f5efef 100%)","linear-gradient(to top, #accbee 30%, #e7f0fd 100%)","linear-gradient(to top, #c1dfc4 30%, #deecdd 100%)","linear-gradient(to top, #00c6fb 30%, #005bea 100%)","linear-gradient(to right, #74ebd5 30%, #9face6 100%)","linear-gradient(to top, #9795f0 30%, #fbc8d4 100%)","linear-gradient(to top, #d9afd9 30%, #97d9e1 100%)","linear-gradient(-20deg, #b721ff 30%, #21d4fd 100%)","linear-gradient(60deg, #abecd6 30%, #fbed96 100%)","linear-gradient(-20deg, #ddd6f3 30%, #faaca8 100%, #faaca8 100%)","linear-gradient(60deg, #96deda 30%, #50c9c3 100%)","linear-gradient(to top, #4481eb 30%, #04befe 100%)","linear-gradient(to top, #209cff 30%, #68e0cf 100%)","linear-gradient(to right, #0acffe 30%, #495aff 100%)","linear-gradient(-225deg, #2CD8D5 30%, #C5C1FF 56%, #FFBAC3 100%)","linear-gradient(to top, #fbc2eb 30%, #a6c1ee 100%)"],t}Object(i.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;window.Waves&&Waves.displayEffect(),fetch("https://qcho5o.fn.thelarkcloud.com/abstracts").then((function(e){if(e.ok)return e.json()})).then((function(t){for(var n=t.contents,a=0;a<n.length;++a){var r=Math.floor(Math.random()*n.length),c=[n[a],n[r]];n[r]=c[0],n[a]=c[1]}n.map((function(t){e.likeMap.set(t._id,!1),e.heart_countMap.set(t._id,t.heart_count)})),e.cards=n.map((function(t,n){var a=Math.floor(Math.random()*e.gradients.length);return u.a.createElement(l.default,Object(o.a)({},t,{key:n,gradient:e.gradients[a],like:e.likeMap.get(t._id),onLikeChange:e.onLikeChange,getLikeProp:e.getLikeProp,getHeartCount:e.getHeartCount,setHeartCount:e.setHeartCount}))})),e.cur_contents=e.cards.slice(0,e.content_per_page),e.setState({abstracts:n,idx:e.content_per_page})})).catch((function(e){console.log(e)}))},n.render=function(){return u.a.createElement(_.a,null,u.a.createElement(m.a,null),u.a.createElement(b.a,null,u.a.createElement("title",null,"\u6587\u6458 | Yle")),u.a.createElement("div",{className:"cards-container"},this.cur_contents),u.a.createElement("div",{className:"cards-controller"},u.a.createElement(h,{text:"\u6362\u4e00\u6279",id:"cards-btn",toggleFn:this.update_cur_contents})))},t}(d.Component);t.default=v},143:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return a}))},166:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return c})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"f",(function(){return d})),n.d(t,"e",(function(){return u})),n.d(t,"g",(function(){return l}));var a=n(149),r=n.n(a);n(168)(r.a),n(176).lunrLanguageZh(r.a),n(169)(r.a);var o=["en","zh"],c=!1,i=null,s="8ac28434",d=8,u=50,l={search_placeholder:"Search",see_all_results:"\u67e5\u770b\u6240\u6709\u76f8\u5173\u7ed3\u679c\ud83d\udc40",no_results:"\u62b1\u6b49\uff0c\u6682\u65f6\u6ca1\u6709\u8fd9\u65b9\u9762\u7684\u6587\u7ae0\ud83d\ude23.",search_results_for:'\u5173\u4e8e "{{ keyword }}" \u7684\u6240\u6709\u6587\u7ae0',search_the_documentation:"\u4ece\u5f53\u524d\u7ad9\u70b9\u4e2d\u67e5\u627e\u5173\u952e\u5b57",count_documents_found:"\u4e00\u5171\u627e\u5230\u4e86 {{ count }} \u7bc7\u76f8\u5173\u6587\u7ae0\ud83d\udc40",count_documents_found_plural:"\u4e00\u5171\u627e\u5230\u4e86 {{ count }} \u7bc7\u76f8\u5173\u6587\u7ae0\ud83d\udc40",no_documents_were_found:"\u5565\u4e5f\u6ca1\u627e\u5230\uff0c\u6362\u4e00\u4e2a\u5173\u952e\u8bcd\u5427\ud83d\ude35"}},220:function(e,t,n){"use strict";function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return a}))},68:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var a=n(220),r=n(4),o=n(143),c=n(0),i=n.n(c),s=(n(71),function(e){function t(t){var n;return n=e.call(this,t)||this,Object(o.a)(Object(a.a)(n),"toggleClass",(function(e){var t=0;e.target.classList.contains("red-heart")?(e.target.classList.remove("red-heart"),t=-1):(t=e.target.classList.contains("is-active")?-1:1,e.target.classList.toggle("is-active")),n.props.onLikeChange(n.props._id),n.props.setHeartCount(n.props._id,t),fetch(n.heart_count_update_api+"?id="+n.props._id+"&inc="+t).then((function(e){e.ok&&console.log("success!")})).catch((function(e){return console.log("err",e)})),n.setState((function(e){return{like:!e.like,heart_count:e.heart_count+t}}))})),n.state={content_zh:t.content_zh?t.content_zh.split("|"):"",content_en:t.content_en?t.content_en.split("|"):"",author:t.author?t.author:"--- \u4f5a\u540d",heart_count:t.heart_count},n.heart_count_update_api="https://qcho5o.fn.thelarkcloud.com/update_heart_count",n}Object(r.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this.props.getLikeProp(this.props._id),t=this.props.getHeartCount(this.props._id);this.setState({heart_count:t,like:e}),e&&this.heart.classList.add("red-heart")},n.componentWillUnmount=function(){console.log("unmount")},n.render=function(){var e=this;return i.a.createElement("div",{className:"abstract-card waves-effect",style:{background:this.props.gradient},id:this.props._id},i.a.createElement("div",{className:"icon-heart-stage"},i.a.createElement("span",{className:"icon-heart",onClick:this.toggleClass,ref:function(t){return e.heart=t}}),i.a.createElement("span",{className:"heart-count"},this.state.heart_count)),this.state.content_zh?i.a.createElement("div",{className:"c-content content_zh"},this.state.content_zh.map((function(e,t){return i.a.createElement("div",{style:{marginTop:"0.5rem"},key:t},e)}))):null,this.state.content_en?i.a.createElement("div",{className:"c-content content_en"},this.state.content_en.map((function(e,t){return i.a.createElement("div",{style:{marginTop:"0.5rem"},key:t},e)}))):null,i.a.createElement("div",{className:"c-author"},this.state.author))},t}(i.a.Component))}}]);