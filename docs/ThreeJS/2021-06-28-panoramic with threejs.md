---
slug: panoramic with threejs
title: react + threejs + swiper 实现全景图效果
---

import { BlogComponent } from '@site/src/components/CustomComponent';
import Comment from '@site/src/components/Comment';

<BlogComponent tags={['react', 'threejs', 'swiper']} time="2021-06-28" />

&emsp;&emsp;咱先看看全景图实现效果：[展示地址](https://yleave.top/panoramic/)

&emsp;&emsp;截图：
![全景图](https://img-blog.csdnimg.cn/20210627225110420.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4NzAxODY4,size_16,color_FFFFFF,t_70)


&emsp;&emsp;体验了一下是不是感觉周围环境转了一圈，感觉世界是圆的？😁

&emsp;&emsp;没错！恭喜你答对了！地球就是圆的！👀


## 全景效果实现
&emsp;&emsp;有了上面的提示，对 threejs 有一点了解的小伙伴可能就猜出来了，这个全景效果其实就是使用一个球体实现的~ 而我们只是在球体**内**表面上贴了一张纹理贴图而已（滚轮向外滚就可以看到这个球体了，看上去像个玻璃球，怪好看的，还有个彩蛋😁（好吧，说出来就不是彩蛋了））：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210627230017922.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4NzAxODY4,size_16,color_FFFFFF,t_70)

&emsp;&emsp;初始时，我们的视角在球体正中心，视角的移动则是依靠 threejs 提供的工具 `OrbitControls` 来控制。

&emsp;&emsp;那么创建这个球体的代码如下：

```js
const geometry = new THREE.SphereBufferGeometry(500, 32, 32);
geometry.scale(-1, 1, 1);   // 将纹理反贴
const material = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load(imglist[0].default)	// 传入图片的URL或者路径，也可以是 Data URI.
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enablePan = false;
controls.maxDistance = 1000;
```

> 不知道 Data URI 是什么的可以看看 [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs) 文档 

## 轮播图
&emsp;&emsp;轮播图实现则是使用 [swiper](https://www.swiper.com.cn/) 这个库，使用起来非常方便，具体可自行查阅文档。

&emsp;&emsp;在滑动轮播图时，会触发一个 `onSliderChange` 事件，这个事件传入当前的 `swiper` 作为参数，我们就可以通过当前激活的元素来获取图片并替换球体的纹理贴图了：

```js
onSliderChange = curSwiper => {
    const mesh = this.mesh;
    const texture = imglist[curSwiper.activeIndex].default;
    mesh.material.map = new THREE.TextureLoader().load(texture);
};
```

&emsp;&emsp;下面是我的 swiper 设置，其中 SwiperSlider 是一个可滑动的轮播图卡片，EffectCoverflow 是滑动时触发的效果，swiper 中提供了四种可选效果：Fade、Coverflow、Flip 以及 Cube。`imglist` 则是一组图片，其中 `imglist[i].default` 属性保存了图片的 base64 编码。

```jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/components/effect-coverflow/effect-coverflow.min.css';

SwiperCore.use([EffectCoverflow]);

//....
<Swiper
    className='panoramic-imgs'
    spaceBetween={50}	// 间距
    slidesPerView={3}	// 轮播图里可预览图片数
    onSlideChange={this.onSliderChange}	// 滑动时触发的回调
    onSwiper={(swiper) => console.log(swiper)}	// 初始加载时触发的回调
    direction='vertical'	// 轮播图方向，默认是水平 horizontal
    effect={'coverflow'}	// 滑动效果
    grabCursor={true}	// 鼠标放在轮播图上是否显示拖拽
    centeredSlides={true}	// 当前处于激活状态的图片是否要居中
    coverflowEffect={{	// coverflow 效果参数设置，可自行调整
        "rotate": 50,
        "stretch": 0,
        "depth": 100,
        "modifier": 1,
        "slideShadows": true
    }}
>
    {
        imglist.map((img, idx) => {
            return <SwiperSlide key={idx}>
                <img src={img.default} className='panoramic-img'></img>
            </SwiperSlide>
        })
    }
</Swiper>
```



---
&emsp;&emsp;全景效果的实现就说到这了，当然，如果什么地方有疑问可以留言或者参考我的代码（下面贴出来），只要对 threejs 和 react 有一定了解的同学我相信实现这么一个效果并不难，代码量也很小~

## 完整代码

```js
import React, { Component } from 'react';

import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as _ from 'underscore';
import { message } from 'antd';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/components/effect-coverflow/effect-coverflow.min.css';

import './index.css';
import imgs from './imgs.json';

SwiperCore.use([EffectCoverflow]);

const imglist = imgs.map(img => {
    return require('../../../static/img/panoramic/' + img.name);
});

export default class Panormatic extends Component {
    constructor() {
        super();
        this.renderer = null;
        this.camera = null;
        this.scene = null;
        this.container = null;
        this.controls = null;
        this.showMessage = true;    // 彩蛋提示
    }

    componentDidMount() {
        const container = document.getElementById('panoramic-canvas-container');
        const canvas = document.getElementById('panoramic-canvas');
        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });

        renderer.setClearColor(0xffffff);   // b2e0df 绿豆沙色
        renderer.setPixelRatio( window.devicePixelRatio );
        const height = container.clientHeight;
        const width = container.clientWidth;
        renderer.setSize(width, height);
        
        const camera = new THREE.PerspectiveCamera(60, width / height, 1, 30000);
        camera.position.set(0, 0, 1);
        camera.center = new THREE.Vector3(0, 0, 0);

        const scene = new THREE.Scene();

        const geometry = new THREE.SphereBufferGeometry(500, 32, 32);
        geometry.scale(-1, 1, 1);   // 将纹理反贴
        const material = new THREE.MeshBasicMaterial({
            map: new THREE.TextureLoader().load(imglist[0].default)
        });
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        const controls = new OrbitControls(camera, renderer.domElement);
        // controls.enableZoom = false;
        controls.enablePan = false;
        controls.maxDistance = 1000;

        this.renderer = renderer;
        this.camera = camera;
        this.scene = scene;
        this.container = container;
        this.controls = controls;
        this.mesh = mesh;

        // 设置提示框的全局配置
        message.config({
            top: 100,
            duration: 3.5,
            maxCount: 1,
        });

        this.onControlsChange = _.throttle(this.onChange, 100);
        controls.addEventListener('change', this.onControlsChange);
        window.addEventListener('resize', this.onWindowResize);
        this.renderLoop();
    }

    componentWillUnmount() {
        const mesh = this.mesh;
        mesh.material.dispose();
        mesh.geometry.dispose();
        this.scene.remove(mesh);
        window.removeEventListener('resize', this.onWindowResize);
        this.controls.removeEventListener('change', this.onControlsChange);
        message.destroy();
    }

    onChange = (e) => {
        const camera = this.camera;
        if (camera.position.distanceTo(camera.center) >= 700) {
            if (this.showMessage) {
                message.success('🎊恭喜你发现了全景效果的小秘密~🎉');
                this.showMessage = false;
            }
        } else {
            this.showMessage = true;
        }
    }

    onSliderChange = (curSwiper) => {
        const mesh = this.mesh;
        const texture = imglist[curSwiper.activeIndex].default;
        mesh.material.map = new THREE.TextureLoader().load(texture);
    };

    onWindowResize = () => {
        const camera = this.camera;
        const renderer = this.renderer;
        const width = this.container.clientWidth;
        const height = this.container.clientHeight;
        
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        
        renderer.setSize(width, height);
    };

    renderLoop = () => {
        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(this.renderLoop);
    };

    render() {
        return (
            <Layout>
                <Head>
                    <title>全景图 | Yle</title>
                </Head>
                <div id='panoramic-container'>
                    <Swiper
                        className='panoramic-imgs'
                        spaceBetween={50}
                        slidesPerView={3}
                        onSlideChange={this.onSliderChange}
                        onSwiper={(swiper) => console.log(swiper)}
                        direction='vertical'
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        coverflowEffect={{
                            "rotate": 50,
                            "stretch": 0,
                            "depth": 100,
                            "modifier": 1,
                            "slideShadows": true
                        }}
                    >
                        {
                            imglist.map((img, idx) => {
                                return <SwiperSlide key={idx}>
                                    <img src={img.default} className='panoramic-img'></img>
                                </SwiperSlide>
                            })
                        }
                    </Swiper>
                    <div id='panoramic-canvas-container'>
                        <canvas id='panoramic-canvas'></canvas>
                    </div>
                </div>
                
                
            </Layout>
        );
    }
}
```

<Comment />
