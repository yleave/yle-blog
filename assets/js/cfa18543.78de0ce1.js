(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{143:function(t,e,n){"use strict";function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return a}))},220:function(t,e,n){"use strict";function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return a}))},68:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return i}));var a=n(220),r=n(4),o=n(143),s=n(0),c=n.n(s),i=(n(71),function(t){function e(e){var n;return n=t.call(this,e)||this,Object(o.a)(Object(a.a)(n),"toggleClass",(function(t){var e=0;t.target.classList.contains("red-heart")?(t.target.classList.remove("red-heart"),e=-1):(e=t.target.classList.contains("is-active")?-1:1,t.target.classList.toggle("is-active")),n.props.onLikeChange(n.props._id),n.props.setHeartCount(n.props._id,e),fetch(n.heart_count_update_api+"?id="+n.props._id+"&inc="+e).then((function(t){t.ok&&console.log("success!")})).catch((function(t){return console.log("err",t)})),n.setState((function(t){return{like:!t.like,heart_count:t.heart_count+e}}))})),n.state={content_zh:e.content_zh?e.content_zh.split("|"):"",content_en:e.content_en?e.content_en.split("|"):"",author:e.author?e.author:"--- \u4f5a\u540d",heart_count:e.heart_count},n.heart_count_update_api="https://qcho5o.fn.thelarkcloud.com/update_heart_count",n}Object(r.a)(e,t);var n=e.prototype;return n.componentDidMount=function(){var t=this.props.getLikeProp(this.props._id),e=this.props.getHeartCount(this.props._id);this.setState({heart_count:e,like:t}),t&&this.heart.classList.add("red-heart")},n.componentWillUnmount=function(){console.log("unmount")},n.render=function(){var t=this;return c.a.createElement("div",{className:"abstract-card",style:{background:this.props.gradient},id:this.props._id},c.a.createElement("div",{className:"icon-heart-stage"},c.a.createElement("span",{className:"icon-heart",onClick:this.toggleClass,ref:function(e){return t.heart=e}}),c.a.createElement("span",{className:"heart-count"},this.state.heart_count)),this.state.content_zh?c.a.createElement("div",{className:"c-content content_zh"},this.state.content_zh.map((function(t,e){return c.a.createElement("div",{style:{marginTop:"0.5rem"},key:e},t)}))):null,this.state.content_en?c.a.createElement("div",{className:"c-content content_en"},this.state.content_en.map((function(t,e){return c.a.createElement("div",{style:{marginTop:"0.5rem"},key:e},t)}))):null,c.a.createElement("div",{className:"c-author"},this.state.author))},e}(c.a.Component))}}]);