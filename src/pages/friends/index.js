import React, { Component } from 'react';

import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as TWEEN from '@tweenjs/tween.js';

import grassImg from '../../../static/img/textures/grasslight-big.jpg';

import './index.css';

let renderer, camera, scene, controls, container;

export default class Friends extends Component {
    constructor() {
        super();
        
        this.models = [];
        
    }

    componentDidMount() {
        container = document.getElementById('friends-canvas-container');
        const canvas = document.getElementById('friends-canvas');
        renderer = new THREE.WebGLRenderer({ canvas, antialias: true });

        // renderer.setClearColor(0xffffff);   // b2e0df 绿豆沙色
        renderer.setPixelRatio( window.devicePixelRatio );
        const height = container.clientHeight;
        const width = container.clientWidth;
        renderer.setSize(width, height);
        
        camera = new THREE.PerspectiveCamera(60, width / height, 1, 30000);
        camera.position.set( 1000, 50, 1500 );

        scene = new THREE.Scene();
        scene.background = new THREE.Color( 0xcce0ff );
        scene.fog = new THREE.Fog( 0xcce0ff, 500, 10000 );

        scene.add( new THREE.AmbientLight( 0x666666 ) );

        const light = new THREE.DirectionalLight( 0xdfebff, 1 );
        light.position.set( 50, 200, 100 );
        light.position.multiplyScalar( 1.3 );
        light.castShadow = true;

        light.shadow.mapSize.width = 1024;
        light.shadow.mapSize.height = 1024;

        const d = 300;

        light.shadow.camera.left = - d;
        light.shadow.camera.right = d;
        light.shadow.camera.top = d;
        light.shadow.camera.bottom = - d;
        light.shadow.camera.far = 1000;

        scene.add( light );

        controls = new OrbitControls(camera, renderer.domElement);
        controls.maxPolarAngle = Math.PI * 0.5;
        controls.minDistance = 50;
        controls.maxDistance = 5000;

        const loader = new THREE.TextureLoader();
        const groundTexture = loader.load(grassImg);
        groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping;
        groundTexture.repeat.set( 25, 25 );
        groundTexture.anisotropy = 16;
        groundTexture.encoding = THREE.sRGBEncoding;

        const groundMaterial = new THREE.MeshLambertMaterial( { map: groundTexture } );

        let mesh = new THREE.Mesh( new THREE.PlaneGeometry( 20000, 20000 ), groundMaterial );
        mesh.position.y = - 250;
        mesh.rotation.x = - Math.PI / 2;
        mesh.receiveShadow = true;
        scene.add( mesh );

        // const axesHelper = new THREE.AxesHelper( 50 );
        // scene.add( axesHelper );

        const model = new Robot();
        model.init();
        this.models.push(model);

        window.addEventListener('resize', this.onWindowResize);
        this.renderLoop();
    }

    componentWillUnmount() {
        this.models.forEach(model => {
            model.despose();
        });

        scene.traverse((obj) => {
            if (obj.type === 'Mesh') {
                obj.geometry.dispose();
                obj.material.dispose();
            }
        });

        window.removeEventListener('resize', this.onWindowResize);
        cancelAnimationFrame(this.rfa);
    }


    onWindowResize = () => {
        const width = this.container.clientWidth;
        const height = this.container.clientHeight;
        
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        
        renderer.setSize(width, height);
    };

    renderLoop = () => {
        this.models.forEach(model => {
            model.update()
        });

        renderer.render(scene, camera);
        this.rfa = requestAnimationFrame(this.renderLoop);
    };

    render() {
        return (
            <Layout>
                <Head>
                    <title>友链（未完工） | Yle</title>
                </Head>
                <div id='friends-canvas-container'>
                    <canvas id='friends-canvas'></canvas>
                </div>
            </Layout>
        );
    }
}

class Robot {
    constructor() {
        // this.state = ['Idle', 'Walking', 'Running', 'Dance', 'Death', 'Standing'];   // 'Sitting',
        this.state = ['Walking', 'Running'];   // 'Sitting',
        this.activeState = 'Walking';

        this.mixer = null;
        this.model = null;
        this.actions = {};
        this.activeAction = null;
        this.prevTime = +new Date();

        this.clock = null;

        this.speed = {
            'Walking': 3,
            'Running': 5
        };

        this.angle = Math.random() * 2 * Math.PI;
    }

    init = () => {
        this.clock = new THREE.Clock();
        const gltfLoader = new GLTFLoader();

        gltfLoader.load('https://cdn.jsdelivr.net/gh/yleave/yle-blog/models/RobotExpressive.glb', gltf => {
            const model = gltf.scene;
            model.scale.set(60, 60, 60);
            model.position.y = -250

            const animations = gltf.animations;

            this.mixer = new THREE.AnimationMixer(model);

            for (let i = 0; i < animations.length; i++) {
                const clip = animations[i];
                const action = this.mixer.clipAction(clip);
                this.actions[clip.name] = action;

                if (this.state.indexOf(clip.name) >= 4 ) {
                    action.clampWhenFinished = true;
                    action.loop = THREE.LoopOnce;
                }
            }

            this.activeAction = this.actions[this.activeState];
            this.activeAction.play();

            model.rotateY(this.angle);
            scene.add(model);
            this.model = model;
        });
    };

    update = () => {
        const flag = this.model != null;

        const now = +new Date();
        if (now - this.prevTime > 10000) {
            this.prevTime = now;
            const nextState = this.state[Math.floor(Math.random() * this.state.length)];
            console.log(nextState)
            if (nextState !== this.activeState && flag) {
                this.activeState = nextState;
                this.fadeToAction(nextState, 0.5);

                // 先转到原位置，再换位置转
                this.model.rotateY(-this.angle);
                this.angle = Math.random() * 2 * Math.PI;
                this.model.rotateY(this.angle);
            }
        }

        const dt = this.clock.getDelta();
        if (this.mixer) this.mixer.update(dt);

        if (flag && (this.activeState === 'Walking' || this.activeState === 'Running')) {
            this.move();
        }
    };

    move = () => {
        const speed = this.speed[this.activeState];
        let dx = Math.sin(this.angle) * speed;
        let dz = Math.cos(this.angle) * speed;
        let x = dx + this.model.position.x;
        let z = dz + this.model.position.z;

        // 限制移动空间
        if (x >= 2000 || x <= -2000 || z >= 2000 || z <= -2000) {
            console.log('change angle')
            this.model.rotateY(-this.angle);
            this.angle = (this.angle + Math.PI) % (2 * Math.PI);
            this.model.rotateY(this.angle);

            dx = Math.sin(this.angle) * speed;
            dz = Math.cos(this.angle) * speed;
            x = dx + this.model.position.x;
            z = dz + this.model.position.z;
        }

        this.model.position.x = x;
        this.model.position.z  = z;
    };

    despose = () => {
        const action = this.activeAction;
        const model = this.model;
        const mixer = this.mixer;

        mixer.uncacheAction(action, model);
        // mixer.uncacheClip(action);
        // mixer.uncacheRoot(model);
    };

    fadeToAction = (name, duration) => {
        let activeAction = this.activeAction;

        const previousAction = activeAction;
        activeAction = this.actions[name];

        previousAction.fadeOut(duration);

        activeAction
            .reset()
            .setEffectiveTimeScale(1)
            .setEffectiveWeight(1)
            .fadeIn(duration)
            .play();

        this.activeAction = activeAction;
    };


}