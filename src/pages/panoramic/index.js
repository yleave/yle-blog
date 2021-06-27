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
                // 仅出现一次彩蛋提示
                this.showMessage = false;
                // this.controls.removeEventListener('change', this.onControlsChange);
            }
        } else {
            this.showMessage = true;
        }
    }

    onSliderChange = (curSwiper) => {
        console.log(curSwiper)
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