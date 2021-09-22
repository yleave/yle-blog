import React, { Component } from 'react';

import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer';
import { CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer';
// import * as TWEEN from '@tweenjs/tween.js';

import grassImg from '../../../static/img/textures/grasslight-big.jpg';

import './index.css';

let renderer, camera, scene, controls, container, labelRenderer;
let dialogDom, dialogObj, fLinkDom, aWordDom;

export default class Friends extends Component {
    constructor() {
        super();
        
        this.models = [];
        this.modelsMap = {};
    }

    componentDidMount() {
        container = document.getElementById('friends-canvas-container');
        const canvas = document.getElementById('friends-canvas');
        const height = container.clientHeight;
        const width = container.clientWidth;

        renderer = new THREE.WebGLRenderer({ canvas, antialias: true });

        // renderer.setClearColor(0xffffff);   // b2e0df 绿豆沙色
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize(width, height);

        labelRenderer = new CSS2DRenderer();
        labelRenderer.setSize(width, height);
        labelRenderer.domElement.style.position = 'absolute';
        labelRenderer.domElement.style.top = '60px';
        labelRenderer.domElement.style.zIndex = '1000';
        container.appendChild(labelRenderer.domElement);
        
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

        controls = new OrbitControls(camera, labelRenderer.domElement);
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

        const name = 'robot';
        const model = new Robot({name});
        model.init();
        this.models.push(model);
        this.modelsMap[name] = model;

        this.initDialog();

        window.addEventListener('resize', this.onWindowResize);

        labelRenderer.domElement.addEventListener('click', this.clickLabel);

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
        labelRenderer.domElement.removeEventListener('click', this.clickLabel);
        cancelAnimationFrame(this.rfa);
    }

    initDialog = () => {
        dialogDom = document.createElement('div');
        dialogDom.className = 'model-dialog';

        const linkContainer = document.createElement('div');
        fLinkDom = document.createElement('a');
        fLinkDom.target = '_blank';
        linkContainer.appendChild(fLinkDom);

        aWordDom = document.createElement('div');

        dialogDom.append(linkContainer, aWordDom);

        fLinkDom.innerText = 'Yle 的博客';
        fLinkDom.href = 'https://yleave.top';
        aWordDom.innerText = '这个人很懒，什么都没有说~';

        dialogObj = new CSS2DObject(dialogDom);
        dialogObj.name = 'dialog';
    };



    clickLabel = e => {
        const name = e.target.name;
        const friend = name && this.modelsMap[name];

        if (friend) {
            friend.activeEmote('Wave');
            if (scene.getObjectByName('dialog')) {
                scene.remove(dialogObj);
            } else {
                const pos = friend.model.position;
                dialogObj.position.set(pos.x, pos.y + 500, pos.z);
                setTimeout(() => friend.pause = true, 2000)
                scene.add(dialogObj);
            }
            
        }
    };

    getMouse = e => {
        const canvas = renderer.domElement;
        const mouse = new THREE.Vector2();
        mouse.x = ((e.clientX - canvas.getBoundingClientRect().left) / canvas.offsetWidth) * 2 - 1;
        mouse.y = -((e.clientY - canvas.getBoundingClientRect().top) / canvas.offsetHeight) * 2 + 1;

        return mouse;
    }

    getIntersects = mouse => {
        const raycaster = new THREE.Raycaster();
        
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(scene.children);

        if (intersects.length) return intersects[0];
    };

    onWindowResize = () => {
        console.log('resize')
        const width = container.clientWidth;
        const height = container.clientHeight;
        
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        
        renderer.setSize(width, height);
        labelRenderer.setSize(width, height);
    };

    renderLoop = () => {
        this.models.forEach(model => {
            model.update()
        });

        renderer.render(scene, camera);
        labelRenderer.render(scene, camera);
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
    constructor({name}) {
        this.state = ['Idle', 'Walking', 'Running', 'Dance', 'Death', 'Sitting', 'Standing'];   // ',
        this.emotes = ['Jump', 'Yes', 'No', 'Wave', 'Punch', 'ThumbsUp'];
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
        this.label = null;

        this.pause = false;

        this.name = name;
    }

    init = () => {
        this.clock = new THREE.Clock();
        const gltfLoader = new GLTFLoader();

        gltfLoader.load('https://cdn.jsdelivr.net/gh/yleave/yle-blog/models/RobotExpressive.glb', gltf => {
            const model = gltf.scene;
            model.scale.set(60, 60, 60);
            model.position.y = -250;

            const animations = gltf.animations;

            this.mixer = new THREE.AnimationMixer(model);

            for (let i = 0; i < animations.length; i++) {
                const clip = animations[i];
                const action = this.mixer.clipAction(clip);
                this.actions[clip.name] = action;

                if (this.emotes.indexOf( clip.name ) >= 0 || this.state.indexOf(clip.name) >= 4 ) {
                    action.clampWhenFinished = true;
                    action.loop = THREE.LoopOnce;
                }
            }

            this.activeAction = this.actions[this.activeState];
            this.activeAction.play();

            model.rotateY(this.angle);
            scene.add(model);
            this.model = model;

            const position = model.position.clone();
            position.y = 65;
            const label = this.createLabel(this.name, position);
            this.label = label;
            scene.add(label);
        });
    };

    activeEmote = name => {
        this.pause = true;
        this.fadeToAction(name, 0.2);
        this.mixer.addEventListener('finished', this.restoreState);
    };

    restoreState = () => {
        this.mixer.removeEventListener('finished', this.restoreState);
        this.fadeToAction(this.activeState, 0.2);
        this.pause = false;
        // setTimeout(() => {
            
        // }, 200);
    };

    update = () => {
        const flag = this.model != null && !this.pause;

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

        this.label.position.x = x;
        this.label.position.z = z;
        this.model.position.x = x;
        this.model.position.z  = z;
    };

    // 使用自定义 div 元素创建标签
    createLabel = (name, pos) => {
        const div = document.createElement('div');
        div.className = 'model-label';
        div.textContent = name;
        div.name = name;

        const divLabel = new CSS2DObject(div);
        divLabel.position.set(pos.x, pos.y, pos.z);

        return divLabel;
    }

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