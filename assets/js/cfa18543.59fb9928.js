(self.webpackChunkyle_blog=self.webpackChunkyle_blog||[]).push([[6310],{36518:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return c}});var a=n(63349),s=n(41788),o=n(96156),r=n(67294),c=function(t){function e(e){var n;return n=t.call(this,e)||this,(0,o.Z)((0,a.Z)(n),"toggleClass",(function(t){var e=0;t.target.classList.contains("red-heart")?(t.target.classList.remove("red-heart"),e=-1):(e=t.target.classList.contains("is-active")?-1:1,t.target.classList.toggle("is-active")),n.props.onLikeChange(n.props._id),n.props.setHeartCount(n.props._id,e),fetch(n.heart_count_update_api+"?id="+n.props._id+"&inc="+e).then((function(t){t.ok&&console.log("success!")})).catch((function(t){return console.log("err",t)})),n.setState((function(t){return{like:!t.like,heart_count:t.heart_count+e}}))})),n.state={content_zh:e.content_zh?e.content_zh.split("|"):"",content_en:e.content_en?e.content_en.split("|"):"",author:e.author?e.author:"--- \u4f5a\u540d",heart_count:e.heart_count},n.heart_count_update_api="https://qcho5o.fn.thelarkcloud.com/update_heart_count",n}(0,s.Z)(e,t);var n=e.prototype;return n.componentDidMount=function(){var t=this.props.getLikeProp(this.props._id),e=this.props.getHeartCount(this.props._id);this.setState({heart_count:e,like:t}),t&&this.heart.classList.add("red-heart")},n.componentWillUnmount=function(){console.log("unmount")},n.render=function(){var t=this;return r.createElement("div",{className:"abstract-card waves-effect",style:{background:this.props.gradient},id:this.props._id},r.createElement("div",{className:"icon-heart-stage"},r.createElement("span",{className:"icon-heart",onClick:this.toggleClass,ref:function(e){return t.heart=e}}),r.createElement("span",{className:"heart-count"},this.state.heart_count)),this.state.content_zh?r.createElement("div",{className:"c-content content_zh"},this.state.content_zh.map((function(t,e){return r.createElement("div",{style:{marginTop:"0.5rem"},key:e},t)}))):null,this.state.content_en?r.createElement("div",{className:"c-content content_en"},this.state.content_en.map((function(t,e){return r.createElement("div",{style:{marginTop:"0.5rem"},key:e},t)}))):null,r.createElement("div",{className:"c-author"},this.state.author))},e}(r.Component)}}]);