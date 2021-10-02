"use strict";(self.webpackChunkyle_blog=self.webpackChunkyle_blog||[]).push([[9250],{3356:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return m},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var r=t(87462),i=t(63366),o=(t(67294),t(3905)),s=t(41651),a=t(54734),c=["components"],m={slug:"panoramic with threejs",title:"react + threejs + swiper \u5b9e\u73b0\u5168\u666f\u56fe\u6548\u679c"},l=void 0,p={unversionedId:"ThreeJS/2021-06-28-panoramic with threejs",id:"ThreeJS/2021-06-28-panoramic with threejs",isDocsHomePage:!1,title:"react + threejs + swiper \u5b9e\u73b0\u5168\u666f\u56fe\u6548\u679c",description:"&emsp;&emsp;\u54b1\u5148\u770b\u770b\u5168\u666f\u56fe\u5b9e\u73b0\u6548\u679c\uff1a\u5c55\u793a\u5730\u5740",source:"@site/docs/ThreeJS/2021-06-28-panoramic with threejs.md",sourceDirName:"ThreeJS",slug:"/ThreeJS/panoramic with threejs",permalink:"/docs/ThreeJS/panoramic with threejs",tags:[],version:"current",frontMatter:{slug:"panoramic with threejs",title:"react + threejs + swiper \u5b9e\u73b0\u5168\u666f\u56fe\u6548\u679c"},sidebar:"docs",previous:{title:"\u5199\u4e00\u4e2a toy react-like",permalink:"/docs/React/toy react-like-1"},next:{title:"\u524d\u7aef\u5b89\u5168\u4e4bCSRF\u653b\u51fb",permalink:"/docs/\u524d\u7aef\u6742\u9879/csrf attack"}},d=[{value:"\u5168\u666f\u6548\u679c\u5b9e\u73b0",id:"\u5168\u666f\u6548\u679c\u5b9e\u73b0",children:[]},{value:"\u8f6e\u64ad\u56fe",id:"\u8f6e\u64ad\u56fe",children:[]},{value:"\u5b8c\u6574\u4ee3\u7801",id:"\u5b8c\u6574\u4ee3\u7801",children:[]}],h={toc:d};function u(e){var n=e.components,t=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(s.O,{tags:["react","threejs","swiper"],time:"2021-06-28",mdxType:"BlogComponent"}),(0,o.kt)("p",null,"\u2003","\u2003","\u54b1\u5148\u770b\u770b\u5168\u666f\u56fe\u5b9e\u73b0\u6548\u679c\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://yleave.top/panoramic/"},"\u5c55\u793a\u5730\u5740")),(0,o.kt)("p",null,"\u2003","\u2003","\u622a\u56fe\uff1a\n",(0,o.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/20210627225110420.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4NzAxODY4,size_16,color_FFFFFF,t_70",alt:"\u5168\u666f\u56fe"})),(0,o.kt)("p",null,"\u2003","\u2003","\u4f53\u9a8c\u4e86\u4e00\u4e0b\u662f\u4e0d\u662f\u611f\u89c9\u5468\u56f4\u73af\u5883\u8f6c\u4e86\u4e00\u5708\uff0c\u611f\u89c9\u4e16\u754c\u662f\u5706\u7684\uff1f\ud83d\ude01"),(0,o.kt)("p",null,"\u2003","\u2003","\u6ca1\u9519\uff01\u606d\u559c\u4f60\u7b54\u5bf9\u4e86\uff01\u5730\u7403\u5c31\u662f\u5706\u7684\uff01\ud83d\udc40"),(0,o.kt)("h2",{id:"\u5168\u666f\u6548\u679c\u5b9e\u73b0"},"\u5168\u666f\u6548\u679c\u5b9e\u73b0"),(0,o.kt)("p",null,"\u2003","\u2003","\u6709\u4e86\u4e0a\u9762\u7684\u63d0\u793a\uff0c\u5bf9 threejs \u6709\u4e00\u70b9\u4e86\u89e3\u7684\u5c0f\u4f19\u4f34\u53ef\u80fd\u5c31\u731c\u51fa\u6765\u4e86\uff0c\u8fd9\u4e2a\u5168\u666f\u6548\u679c\u5176\u5b9e\u5c31\u662f\u4f7f\u7528\u4e00\u4e2a\u7403\u4f53\u5b9e\u73b0\u7684~ \u800c\u6211\u4eec\u53ea\u662f\u5728\u7403\u4f53",(0,o.kt)("strong",{parentName:"p"},"\u5185"),"\u8868\u9762\u4e0a\u8d34\u4e86\u4e00\u5f20\u7eb9\u7406\u8d34\u56fe\u800c\u5df2\uff08\u6eda\u8f6e\u5411\u5916\u6eda\u5c31\u53ef\u4ee5\u770b\u5230\u8fd9\u4e2a\u7403\u4f53\u4e86\uff0c\u770b\u4e0a\u53bb\u50cf\u4e2a\u73bb\u7483\u7403\uff0c\u602a\u597d\u770b\u7684\uff0c\u8fd8\u6709\u4e2a\u5f69\u86cb\ud83d\ude01\uff08\u597d\u5427\uff0c\u8bf4\u51fa\u6765\u5c31\u4e0d\u662f\u5f69\u86cb\u4e86\uff09\uff09\uff1a\n",(0,o.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/20210627230017922.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4NzAxODY4,size_16,color_FFFFFF,t_70",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,o.kt)("p",null,"\u2003","\u2003","\u521d\u59cb\u65f6\uff0c\u6211\u4eec\u7684\u89c6\u89d2\u5728\u7403\u4f53\u6b63\u4e2d\u5fc3\uff0c\u89c6\u89d2\u7684\u79fb\u52a8\u5219\u662f\u4f9d\u9760 threejs \u63d0\u4f9b\u7684\u5de5\u5177 ",(0,o.kt)("inlineCode",{parentName:"p"},"OrbitControls")," \u6765\u63a7\u5236\u3002"),(0,o.kt)("p",null,"\u2003","\u2003","\u90a3\u4e48\u521b\u5efa\u8fd9\u4e2a\u7403\u4f53\u7684\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const geometry = new THREE.SphereBufferGeometry(500, 32, 32);\ngeometry.scale(-1, 1, 1);   // \u5c06\u7eb9\u7406\u53cd\u8d34\nconst material = new THREE.MeshBasicMaterial({\n    map: new THREE.TextureLoader().load(imglist[0].default) // \u4f20\u5165\u56fe\u7247\u7684URL\u6216\u8005\u8def\u5f84\uff0c\u4e5f\u53ef\u4ee5\u662f Data URI.\n});\nconst mesh = new THREE.Mesh(geometry, material);\nscene.add(mesh);\n\nconst controls = new OrbitControls(camera, renderer.domElement);\ncontrols.enablePan = false;\ncontrols.maxDistance = 1000;\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u4e0d\u77e5\u9053 Data URI \u662f\u4ec0\u4e48\u7684\u53ef\u4ee5\u770b\u770b ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs"},"MDN")," \u6587\u6863 ")),(0,o.kt)("h2",{id:"\u8f6e\u64ad\u56fe"},"\u8f6e\u64ad\u56fe"),(0,o.kt)("p",null,"\u2003","\u2003","\u8f6e\u64ad\u56fe\u5b9e\u73b0\u5219\u662f\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"https://www.swiper.com.cn/"},"swiper")," \u8fd9\u4e2a\u5e93\uff0c\u4f7f\u7528\u8d77\u6765\u975e\u5e38\u65b9\u4fbf\uff0c\u5177\u4f53\u53ef\u81ea\u884c\u67e5\u9605\u6587\u6863\u3002"),(0,o.kt)("p",null,"\u2003","\u2003","\u5728\u6ed1\u52a8\u8f6e\u64ad\u56fe\u65f6\uff0c\u4f1a\u89e6\u53d1\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"onSliderChange")," \u4e8b\u4ef6\uff0c\u8fd9\u4e2a\u4e8b\u4ef6\u4f20\u5165\u5f53\u524d\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"swiper")," \u4f5c\u4e3a\u53c2\u6570\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u901a\u8fc7\u5f53\u524d\u6fc0\u6d3b\u7684\u5143\u7d20\u6765\u83b7\u53d6\u56fe\u7247\u5e76\u66ff\u6362\u7403\u4f53\u7684\u7eb9\u7406\u8d34\u56fe\u4e86\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"onSliderChange = curSwiper => {\n    const mesh = this.mesh;\n    const texture = imglist[curSwiper.activeIndex].default;\n    mesh.material.map = new THREE.TextureLoader().load(texture);\n};\n")),(0,o.kt)("p",null,"\u2003","\u2003","\u4e0b\u9762\u662f\u6211\u7684 swiper \u8bbe\u7f6e\uff0c\u5176\u4e2d SwiperSlider \u662f\u4e00\u4e2a\u53ef\u6ed1\u52a8\u7684\u8f6e\u64ad\u56fe\u5361\u7247\uff0cEffectCoverflow \u662f\u6ed1\u52a8\u65f6\u89e6\u53d1\u7684\u6548\u679c\uff0cswiper \u4e2d\u63d0\u4f9b\u4e86\u56db\u79cd\u53ef\u9009\u6548\u679c\uff1aFade\u3001Coverflow\u3001Flip \u4ee5\u53ca Cube\u3002",(0,o.kt)("inlineCode",{parentName:"p"},"imglist")," \u5219\u662f\u4e00\u7ec4\u56fe\u7247\uff0c\u5176\u4e2d ",(0,o.kt)("inlineCode",{parentName:"p"},"imglist[i].default")," \u5c5e\u6027\u4fdd\u5b58\u4e86\u56fe\u7247\u7684 base64 \u7f16\u7801\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Swiper, SwiperSlide } from 'swiper/react';\nimport SwiperCore, { EffectCoverflow } from 'swiper';\nimport 'swiper/swiper.min.css';\nimport 'swiper/components/effect-coverflow/effect-coverflow.min.css';\n\nSwiperCore.use([EffectCoverflow]);\n\n//....\n<Swiper\n    className='panoramic-imgs'\n    spaceBetween={50}   // \u95f4\u8ddd\n    slidesPerView={3}   // \u8f6e\u64ad\u56fe\u91cc\u53ef\u9884\u89c8\u56fe\u7247\u6570\n    onSlideChange={this.onSliderChange} // \u6ed1\u52a8\u65f6\u89e6\u53d1\u7684\u56de\u8c03\n    onSwiper={(swiper) => console.log(swiper)}  // \u521d\u59cb\u52a0\u8f7d\u65f6\u89e6\u53d1\u7684\u56de\u8c03\n    direction='vertical'    // \u8f6e\u64ad\u56fe\u65b9\u5411\uff0c\u9ed8\u8ba4\u662f\u6c34\u5e73 horizontal\n    effect={'coverflow'}    // \u6ed1\u52a8\u6548\u679c\n    grabCursor={true}   // \u9f20\u6807\u653e\u5728\u8f6e\u64ad\u56fe\u4e0a\u662f\u5426\u663e\u793a\u62d6\u62fd\n    centeredSlides={true}   // \u5f53\u524d\u5904\u4e8e\u6fc0\u6d3b\u72b6\u6001\u7684\u56fe\u7247\u662f\u5426\u8981\u5c45\u4e2d\n    coverflowEffect={{  // coverflow \u6548\u679c\u53c2\u6570\u8bbe\u7f6e\uff0c\u53ef\u81ea\u884c\u8c03\u6574\n        \"rotate\": 50,\n        \"stretch\": 0,\n        \"depth\": 100,\n        \"modifier\": 1,\n        \"slideShadows\": true\n    }}\n>\n    {\n        imglist.map((img, idx) => {\n            return <SwiperSlide key={idx}>\n                <img src={img.default} className='panoramic-img'></img>\n            </SwiperSlide>\n        })\n    }\n</Swiper>\n")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"\u2003","\u2003","\u5168\u666f\u6548\u679c\u7684\u5b9e\u73b0\u5c31\u8bf4\u5230\u8fd9\u4e86\uff0c\u5f53\u7136\uff0c\u5982\u679c\u4ec0\u4e48\u5730\u65b9\u6709\u7591\u95ee\u53ef\u4ee5\u7559\u8a00\u6216\u8005\u53c2\u8003\u6211\u7684\u4ee3\u7801\uff08\u4e0b\u9762\u8d34\u51fa\u6765\uff09\uff0c\u53ea\u8981\u5bf9 threejs \u548c react \u6709\u4e00\u5b9a\u4e86\u89e3\u7684\u540c\u5b66\u6211\u76f8\u4fe1\u5b9e\u73b0\u8fd9\u4e48\u4e00\u4e2a\u6548\u679c\u5e76\u4e0d\u96be\uff0c\u4ee3\u7801\u91cf\u4e5f\u5f88\u5c0f~"),(0,o.kt)("h2",{id:"\u5b8c\u6574\u4ee3\u7801"},"\u5b8c\u6574\u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import React, { Component } from 'react';\n\nimport Layout from '@theme/Layout';\nimport Head from '@docusaurus/Head';\n\nimport * as THREE from 'three';\nimport { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';\nimport * as _ from 'underscore';\nimport { message } from 'antd';\n\nimport { Swiper, SwiperSlide } from 'swiper/react';\nimport SwiperCore, { EffectCoverflow } from 'swiper';\nimport 'swiper/swiper.min.css';\nimport 'swiper/components/effect-coverflow/effect-coverflow.min.css';\n\nimport './index.css';\nimport imgs from './imgs.json';\n\nSwiperCore.use([EffectCoverflow]);\n\nconst imglist = imgs.map(img => {\n    return require('../../../static/img/panoramic/' + img.name);\n});\n\nexport default class Panormatic extends Component {\n    constructor() {\n        super();\n        this.renderer = null;\n        this.camera = null;\n        this.scene = null;\n        this.container = null;\n        this.controls = null;\n        this.showMessage = true;    // \u5f69\u86cb\u63d0\u793a\n    }\n\n    componentDidMount() {\n        const container = document.getElementById('panoramic-canvas-container');\n        const canvas = document.getElementById('panoramic-canvas');\n        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });\n\n        renderer.setClearColor(0xffffff);   // b2e0df \u7eff\u8c46\u6c99\u8272\n        renderer.setPixelRatio( window.devicePixelRatio );\n        const height = container.clientHeight;\n        const width = container.clientWidth;\n        renderer.setSize(width, height);\n        \n        const camera = new THREE.PerspectiveCamera(60, width / height, 1, 30000);\n        camera.position.set(0, 0, 1);\n        camera.center = new THREE.Vector3(0, 0, 0);\n\n        const scene = new THREE.Scene();\n\n        const geometry = new THREE.SphereBufferGeometry(500, 32, 32);\n        geometry.scale(-1, 1, 1);   // \u5c06\u7eb9\u7406\u53cd\u8d34\n        const material = new THREE.MeshBasicMaterial({\n            map: new THREE.TextureLoader().load(imglist[0].default)\n        });\n        const mesh = new THREE.Mesh(geometry, material);\n        scene.add(mesh);\n\n        const controls = new OrbitControls(camera, renderer.domElement);\n        // controls.enableZoom = false;\n        controls.enablePan = false;\n        controls.maxDistance = 1000;\n\n        this.renderer = renderer;\n        this.camera = camera;\n        this.scene = scene;\n        this.container = container;\n        this.controls = controls;\n        this.mesh = mesh;\n\n        // \u8bbe\u7f6e\u63d0\u793a\u6846\u7684\u5168\u5c40\u914d\u7f6e\n        message.config({\n            top: 100,\n            duration: 3.5,\n            maxCount: 1,\n        });\n\n        this.onControlsChange = _.throttle(this.onChange, 100);\n        controls.addEventListener('change', this.onControlsChange);\n        window.addEventListener('resize', this.onWindowResize);\n        this.renderLoop();\n    }\n\n    componentWillUnmount() {\n        const mesh = this.mesh;\n        mesh.material.dispose();\n        mesh.geometry.dispose();\n        this.scene.remove(mesh);\n        window.removeEventListener('resize', this.onWindowResize);\n        this.controls.removeEventListener('change', this.onControlsChange);\n        message.destroy();\n    }\n\n    onChange = (e) => {\n        const camera = this.camera;\n        if (camera.position.distanceTo(camera.center) >= 700) {\n            if (this.showMessage) {\n                message.success('\ud83c\udf8a\u606d\u559c\u4f60\u53d1\u73b0\u4e86\u5168\u666f\u6548\u679c\u7684\u5c0f\u79d8\u5bc6~\ud83c\udf89');\n                this.showMessage = false;\n            }\n        } else {\n            this.showMessage = true;\n        }\n    }\n\n    onSliderChange = (curSwiper) => {\n        const mesh = this.mesh;\n        const texture = imglist[curSwiper.activeIndex].default;\n        mesh.material.map = new THREE.TextureLoader().load(texture);\n    };\n\n    onWindowResize = () => {\n        const camera = this.camera;\n        const renderer = this.renderer;\n        const width = this.container.clientWidth;\n        const height = this.container.clientHeight;\n        \n        camera.aspect = width / height;\n        camera.updateProjectionMatrix();\n        \n        renderer.setSize(width, height);\n    };\n\n    renderLoop = () => {\n        this.renderer.render(this.scene, this.camera);\n        requestAnimationFrame(this.renderLoop);\n    };\n\n    render() {\n        return (\n            <Layout>\n                <Head>\n                    <title>\u5168\u666f\u56fe | Yle</title>\n                </Head>\n                <div id='panoramic-container'>\n                    <Swiper\n                        className='panoramic-imgs'\n                        spaceBetween={50}\n                        slidesPerView={3}\n                        onSlideChange={this.onSliderChange}\n                        onSwiper={(swiper) => console.log(swiper)}\n                        direction='vertical'\n                        effect={'coverflow'}\n                        grabCursor={true}\n                        centeredSlides={true}\n                        coverflowEffect={{\n                            \"rotate\": 50,\n                            \"stretch\": 0,\n                            \"depth\": 100,\n                            \"modifier\": 1,\n                            \"slideShadows\": true\n                        }}\n                    >\n                        {\n                            imglist.map((img, idx) => {\n                                return <SwiperSlide key={idx}>\n                                    <img src={img.default} className='panoramic-img'></img>\n                                </SwiperSlide>\n                            })\n                        }\n                    </Swiper>\n                    <div id='panoramic-canvas-container'>\n                        <canvas id='panoramic-canvas'></canvas>\n                    </div>\n                </div>\n                \n                \n            </Layout>\n        );\n    }\n}\n")),(0,o.kt)(a.Z,{mdxType:"Comment"}))}u.isMDXComponent=!0}}]);