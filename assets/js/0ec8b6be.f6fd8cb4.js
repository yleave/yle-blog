(self.webpackChunkyle_blog=self.webpackChunkyle_blog||[]).push([[5922],{20895:function(e,n,t){"use strict";t.d(n,{dK:function(){return s},_k:function(){return r},vc:function(){return i},rx:function(){return c},qo:function(){return d},Hk:function(){return u},Iz:function(){return l}});var o=t(31336),a=t.n(o);t(30892)(a()),t(54212).w(a()),t(74182)(a());var s=["en","zh"],r=!1,i=null,c="5228ca85",d=8,u=50,l={search_placeholder:"Search",see_all_results:"\u67e5\u770b\u6240\u6709\u76f8\u5173\u7ed3\u679c\ud83d\udc40",no_results:"\u62b1\u6b49\uff0c\u6682\u65f6\u6ca1\u6709\u8fd9\u65b9\u9762\u7684\u6587\u7ae0\ud83d\ude23.",search_results_for:'\u5173\u4e8e "{{ keyword }}" \u7684\u6240\u6709\u6587\u7ae0',search_the_documentation:"\u4ece\u5f53\u524d\u7ad9\u70b9\u4e2d\u67e5\u627e\u5173\u952e\u5b57",count_documents_found:"\u4e00\u5171\u627e\u5230\u4e86 {{ count }} \u7bc7\u76f8\u5173\u6587\u7ae0\ud83d\udc40",count_documents_found_plural:"\u4e00\u5171\u627e\u5230\u4e86 {{ count }} \u7bc7\u76f8\u5173\u6587\u7ae0\ud83d\udc40",no_documents_were_found:"\u5565\u4e5f\u6ca1\u627e\u5230\uff0c\u6362\u4e00\u4e2a\u5173\u952e\u8bcd\u5427\ud83d\ude35"}},81886:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return w}});t(57770);var o=t(11187),a=t(63349),s=t(41788),r=t(96156),i=t(67294),c=t(86591),d=t(99105),u=t(2212),l=t(52886),f=t(77963),m=t(64519),p=t(24002),g=t(63845),h=t(68025),k=(t(95576),JSON.parse('[{"name":"room.jpg"},{"name":"room1.jpg"},{"name":"room2.jpg"},{"name":"room3.jpg"},{"name":"snow.jpg"},{"name":"Hokkaido2s.jpg"},{"name":"Hokkaido1s.jpg"},{"name":"Hokkaido.jpg"},{"name":"Hokkaido3s.jpg"},{"name":"Hokkaido4s.jpg"},{"name":"Hokkaido5s.jpg"}]'));g.Z.use([h.Z]);var v=k.map((function(e){return t(4503)("./"+e.name)})),w=function(e){function n(){var n;return n=e.call(this)||this,(0,r.Z)((0,a.Z)(n),"onChange",(function(e){var t=n.camera;t.position.distanceTo(t.center)>=700?n.showMessage&&(o.default.success("\ud83c\udf8a\u606d\u559c\u4f60\u53d1\u73b0\u4e86\u5168\u666f\u6548\u679c\u7684\u5c0f\u79d8\u5bc6~\ud83c\udf89"),n.showMessage=!1):n.showMessage=!0})),(0,r.Z)((0,a.Z)(n),"onSliderChange",(function(e){console.log(e);var t=n.mesh,o=v[e.activeIndex].default;t.material.map=(new u.dpR).load(o)})),(0,r.Z)((0,a.Z)(n),"onWindowResize",(function(){var e=n.camera,t=n.renderer,o=n.container.clientWidth,a=n.container.clientHeight;e.aspect=o/a,e.updateProjectionMatrix(),t.setSize(o,a)})),(0,r.Z)((0,a.Z)(n),"renderLoop",(function(){n.renderer.render(n.scene,n.camera),requestAnimationFrame(n.renderLoop)})),n.renderer=null,n.camera=null,n.scene=null,n.container=null,n.controls=null,n.showMessage=!0,n}(0,s.Z)(n,e);var t=n.prototype;return t.componentDidMount=function(){var e=document.getElementById("panoramic-canvas-container"),n=document.getElementById("panoramic-canvas"),t=new u.CP7({canvas:n,antialias:!0});t.setClearColor(16777215),t.setPixelRatio(window.devicePixelRatio);var a=e.clientHeight,s=e.clientWidth;t.setSize(s,a);var r=new u.cPb(60,s/a,1,3e4);r.position.set(0,0,1),r.center=new u.Pa4(0,0,0);var i=new u.xsS,c=new u.Aip(500,32,32);c.scale(-1,1,1);var d=new u.vBJ({map:(new u.dpR).load(v[0].default)}),m=new u.Kj0(c,d);i.add(m);var p=new l.z(r,t.domElement);p.enablePan=!1,p.maxDistance=1e3,this.renderer=t,this.camera=r,this.scene=i,this.container=e,this.controls=p,this.mesh=m,o.default.config({top:100,duration:3.5,maxCount:1}),this.onControlsChange=f.P2(this.onChange,100),p.addEventListener("change",this.onControlsChange),window.addEventListener("resize",this.onWindowResize),this.renderLoop()},t.componentWillUnmount=function(){var e=this.mesh;e.material.dispose(),e.geometry.dispose(),this.scene.remove(e),window.removeEventListener("resize",this.onWindowResize),this.controls.removeEventListener("change",this.onControlsChange),o.default.destroy()},t.render=function(){return i.createElement(c.Z,null,i.createElement(d.Z,null,i.createElement("title",null,"\u5168\u666f\u56fe | Yle")),i.createElement("div",{id:"panoramic-container"},i.createElement(m.t,{className:"panoramic-imgs",spaceBetween:50,slidesPerView:4,onSlideChange:this.onSliderChange,onSwiper:function(e){return console.log(e)},direction:"vertical",effect:"coverflow",grabCursor:!0,centeredSlides:!0,coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0}},v.map((function(e,n){return i.createElement(p.o,{key:n},i.createElement("img",{src:e.default,className:"panoramic-img"}))}))),i.createElement("div",{id:"panoramic-canvas-container"},i.createElement("canvas",{id:"panoramic-canvas"}))))},n}(i.Component)},64845:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/Hokkaido-9a60acede01905e44d747f40c73f9cb0.jpg"},95393:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/Hokkaido1s-710ab31aa83628f6072e30a02ecb2f33.jpg"},82338:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/Hokkaido2s-7d8d0eeae1c54fe3a2c44f28cfd4704f.jpg"},59022:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/Hokkaido3s-2164f8d98d069ba68e249466749f7f7a.jpg"},67544:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/Hokkaido4s-b7f99cc893041490c161faa62ecda132.jpg"},41055:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/Hokkaido5s-74bfc0a79d2f44482bb177b94047938e.jpg"},65153:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/room-620d87ec373f65fd875491056711a54a.jpg"},35104:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/room1-57fe489f5685ea6ba7f563fd1a95662f.jpg"},1109:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/room2-b0d2082617aec0f396ab7d6680d2b1b5.jpg"},58530:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/room3-3c89637e4b188be7be0c55f4028d652d.jpg"},8121:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/snow-bc778b0c636743c92832d70888b0d2d1.jpg"},4503:function(e,n,t){var o={"./Hokkaido.jpg":64845,"./Hokkaido1s.jpg":95393,"./Hokkaido2s.jpg":82338,"./Hokkaido3s.jpg":59022,"./Hokkaido4s.jpg":67544,"./Hokkaido5s.jpg":41055,"./room.jpg":65153,"./room1.jpg":35104,"./room2.jpg":1109,"./room3.jpg":58530,"./snow.jpg":8121};function a(e){var n=s(e);return t(n)}function s(e){if(!t.o(o,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return o[e]}a.keys=function(){return Object.keys(o)},a.resolve=s,e.exports=a,a.id=4503}}]);