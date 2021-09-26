import React, { Component } from 'react';

import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer';
import { CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer';
import * as TWEEN from '@tweenjs/tween.js';
import Comment from '@site/src/components/Comment';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import { Sky } from 'three/examples/jsm/objects/Sky';

import { Card } from 'antd';

import { initPage } from '../../utils/pageStatics';

import grassImg from '../../../static/img/textures/grasslight-big.jpg';
import arrow from '../../../static/img/downArrow.png';

import './index.css';

let renderer, camera, scene, controls, container, labelRenderer, stats;
let dracoLoader, gltfLoader, gltfAndDracoLoader;
let dialogDom, dialogObj, fLinkDom, aWordDom;

export default class Friends extends Component {
    constructor() {
        super();
        
        this.models = [];
        this.modelsMap = {};// 保存博客名称到博客信息的映射
        this.lastActiveModel = null;

        this.houseMixer = null;
        this.clock = new THREE.Clock();
    }

    componentDidMount() {
        initPage();

        container = document.getElementById('friends-canvas-container');
        const canvas = document.getElementById('friends-canvas');
        const height = container.clientHeight;
        const width = container.clientWidth;

        renderer = new THREE.WebGLRenderer({ canvas, antialias: true });

        // renderer.setClearColor(0xffffff);   // b2e0df 绿豆沙色
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize(width, height);

        // 为了 sky and sum 加的
        renderer.outputEncoding = THREE.sRGBEncoding;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 0.5;

        labelRenderer = new CSS2DRenderer();
        labelRenderer.setSize(width, height);
        labelRenderer.domElement.style.position = 'absolute';
        labelRenderer.domElement.style.top = '60px';
        // labelRenderer.domElement.style.zIndex = '1000';
        container.appendChild(labelRenderer.domElement);

        stats = new Stats();
        stats.dom.style.top = '60px';
        container.append(stats.dom);
        
        camera = new THREE.PerspectiveCamera(60, width / height, 1, 30000);
        camera.position.set(-3000, 1000, 4000);

        scene = new THREE.Scene();
        // scene.background = new THREE.Color( 0xcce0ff );
        scene.fog = new THREE.Fog( 0xcce0ff, 500, 10000 );

        scene.add( new THREE.AmbientLight( 0x666666, 1.0 ) );

        const light = new THREE.DirectionalLight( 0xdfebff, 1.2 );
        light.position.set( -50, 200, -100 );
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
        controls.minDistance = 20;
        controls.maxDistance = 10000;

        const loader = new THREE.TextureLoader();
        const groundTexture = loader.load(grassImg);
        groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping;
        groundTexture.repeat.set(25, 25);
        groundTexture.anisotropy = 16;
        groundTexture.encoding = THREE.sRGBEncoding;

        const groundMaterial = new THREE.MeshLambertMaterial({map: groundTexture});
        // 20000
        let mesh = new THREE.Mesh( new THREE.PlaneGeometry(50000, 50000), groundMaterial);
        mesh.position.y = - 250;
        mesh.rotation.x = - Math.PI / 2;
        mesh.receiveShadow = true;
        scene.add(mesh);

        // const axesHelper = new THREE.AxesHelper( 50 );
        // scene.add( axesHelper );

        dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath('https://unpkg.com/three@0.123.0/examples/js/libs/draco/gltf/');

        gltfLoader = new GLTFLoader();

        gltfAndDracoLoader = new GLTFLoader();
        gltfAndDracoLoader.setDRACOLoader(dracoLoader);

        this.initSkyAndSun();
        this.initHouse();
        this.initFriends();
        this.initFlowers();
        this.initDialog();

        window.addEventListener('resize', this.onWindowResize);

        labelRenderer.domElement.addEventListener('click', this.clickLabel);

        this.renderLoop();
    }

    initFriends = () => {
        fetch('https://qc9pvu.fn.thelarkcloud.com/getFriendList')
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                throw new Error('获取数据失败');
            })
            .then(list => {
                list.forEach(item => {
                    const { friendName, blogTitle, friendAddr, aWord } = item;
                    const model = new Robot({name: friendName});
                    model.init();
                    this.models.push(model);
                    item.model = model;
                    this.modelsMap[friendName] = item;
                });
            })
            .catch(err => console.log(err));
    };

    initFlowers = () => {
        const count = 3000;
        const matrix = new THREE.Matrix4();
        const position = new THREE.Vector3();
        const rotation = new THREE.Euler();
        const quaternion = new THREE.Quaternion();
        const scale = new THREE.Vector3();

        let passFlower = false;

        const randomizeMatrix = function () {
            const symbolx = Math.random() < 0.5 ? 1 : -1;
            const symbolz = Math.random() < 0.5 ? 1 : -1;

            let x = Math.random() * 8000;
            let z = Math.random() * 8000;

            if (x < 1500) {
                z = 1500 + Math.random() * 6500;
            } else if (z < 1500) {
                x = 1500 + Math.random() * 6500;
            }

            position.x = x * symbolx;
            position.y = -250;
            position.z = z * symbolz;

            rotation.x = Math.PI / 2;
            // rotation.y = Math.PI / 2;
            rotation.z = Math.PI / 2;

            quaternion.setFromEuler( rotation );

            const _scale = Math.random() * 500 + 200;
            scale.x = scale.y = scale.z = _scale;

            matrix.compose( position, quaternion, scale );
        };

        gltfAndDracoLoader.load('https://cdn.jsdelivr.net/gh/yleave/models/Flower.glb', gltf => {
            const _stemMesh = gltf.scene.getObjectByName('Stem');
            const _blossomMesh = gltf.scene.getObjectByName('Blossom');

            const stemGeometry = _stemMesh.geometry.clone();
            const blossomGeometry = _blossomMesh.geometry.clone();
            const stemMaterial = _stemMesh.material;
            const blossomMaterial = _blossomMesh.material;

            const stemMesh = new THREE.InstancedMesh(stemGeometry, stemMaterial, count);
            const blossomMesh = new THREE.InstancedMesh(blossomGeometry, blossomMaterial, count);

            // Assign random colors to the blossoms.
            const blossomPalette = [0xF20587, 0xF2D479, 0xF2C879, 0xF2B077, 0xF24405];
            const color = new THREE.Color();

            for ( let i = 0; i < count; i ++ ) {
                color.setHex(blossomPalette[Math.floor(Math.random() * blossomPalette.length)]);
                blossomMesh.setColorAt(i, color);

                randomizeMatrix();

                if (passFlower) continue;

                stemMesh.setMatrixAt(i, matrix);
                blossomMesh.setMatrixAt(i, matrix);
            }

            this.stemMesh = stemMesh;
            this.blossomMesh = blossomMesh;

            scene.add(stemMesh);
            scene.add(blossomMesh);
        });
    };

    initHouse = () => {
        gltfAndDracoLoader.load('https://cdn.jsdelivr.net/gh/yleave/models/LittlestTokyo.glb', gltf => {
            const model = gltf.scene;
            model.scale.set( 5, 5, 5);
            model.position.y = 750;
            model.position.x = 400;

            this.houseMixer = new THREE.AnimationMixer(model);
            this.houseMixer.clipAction(gltf.animations[0]).play();
            this.house = model;
            this.action = gltf.animations[0];

            scene.add(model);
        });
    };

    initSkyAndSun = () => {
        // 添加天空
        const sky = new Sky();
        sky.scale.setScalar(450000);
        scene.add( sky );

        const sun = new THREE.Vector3();
        const effectController = {
            turbidity: 10,
            rayleigh: 3,
            mieCoefficient: 0.005,
            mieDirectionalG: 0.7,
            elevation: 2,
            azimuth: 180,
            exposure: renderer.toneMappingExposure
        };

        const uniforms = sky.material.uniforms;
        uniforms[ 'turbidity' ].value = effectController.turbidity;
        uniforms[ 'rayleigh' ].value = effectController.rayleigh;
        uniforms[ 'mieCoefficient' ].value = effectController.mieCoefficient;
        uniforms[ 'mieDirectionalG' ].value = effectController.mieDirectionalG;

        const phi = THREE.MathUtils.degToRad( 90 - effectController.elevation );
        const theta = THREE.MathUtils.degToRad( effectController.azimuth );

        sun.setFromSphericalCoords( 1, phi, theta );

        uniforms[ 'sunPosition' ].value.copy( sun );

        renderer.toneMappingExposure = effectController.exposure;
        renderer.render( scene, camera );
    };

    componentWillUnmount() {
        this.models.forEach(model => {
            model.despose();
        });

        if (this.stemMesh) {
            this.stemMesh.dispose();
            this.blossomMesh.dispose();

            this.stemMesh = null;
            this.blossomMesh = null;
        }
        
        scene.traverse((obj) => {
            if (obj.isMesh) {
                obj.geometry.dispose();
                obj.material.dispose();
            }
        });

        const action = this.action;
        const model = this.house;
        const mixer = this.houseMixer;

        if (mixer)  mixer.uncacheAction(action, model);
        
        this.action = null;
        this.house = null;
        this.houseMixer = null;
        this.clock = null;
        this.lastActiveModel = null;

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

        dialogObj = new CSS2DObject(dialogDom);
        dialogObj.name = 'dialog';
    };

    clickLabel = e => {
        const name = e.target.name;
        const friend = name && this.modelsMap[name];

        if (friend) {
            const robot = friend.model;

            if (this.lastActiveModel && this.lastActiveModel !== robot) {
                this.lastActiveModel.activeEmote('Wave');
                this.lastActiveModel.pause = false;
                scene.remove(dialogObj);
                this.lastActiveModel = null;
            }

            robot.activeEmote('Wave');
            if (scene.getObjectByName('dialog')) {
                scene.remove(dialogObj);
            } else {
                const pos = robot.model.position;
                dialogObj.position.set(pos.x, pos.y + 450, pos.z);
                // 在做完 emote 动作后需要停止其他动作
                setTimeout(() => robot.pause = true, 2000);

                fLinkDom.innerText = friend.blogTitle;
                fLinkDom.href = friend.friendAddr;
                aWordDom.innerText = friend.aWord;

                scene.add(dialogObj);
                
                let dx = Math.sin(robot.angle) * 1200;
                let dz = Math.cos(robot.angle) * 1200;
                let x = dx + robot.model.position.x;
                let z = dz + robot.model.position.z;

                new TWEEN.Tween(camera.position)
                    .to({x, y: 400, z}, 800)
                    .easing(TWEEN.Easing.Quadratic.Out)
                    .start()
                    .onComplete(() => {
                        camera.lookAt(pos);
                    });

                this.lastActiveModel = robot;
            }
        } else if (scene.getObjectByName('dialog')) {
            scene.remove(dialogObj);
            if (this.lastActiveModel) {
                this.lastActiveModel.activeEmote('Wave');
                this.lastActiveModel = null;
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
        const width = container.clientWidth;
        const height = container.clientHeight;
        
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        
        renderer.setSize(width, height);
        labelRenderer.setSize(width, height);
    };

    onScrollDown = e => {
        console.log('scroll')
        window.scrollTo({ 
            top: 650, 
            behavior: "smooth" 
        });
    };

    renderLoop = () => {
        this.models.forEach(model => {
            model.update()
        });

        renderer.render(scene, camera);
        labelRenderer.render(scene, camera);
        this.rfa = requestAnimationFrame(this.renderLoop);
        TWEEN.update();
        stats.update();

        if (this.houseMixer) {
            const delta = this.clock.getDelta();
            this.houseMixer.update(delta);
        }
    };

    render() {
        return (
            <Layout>
                <Head>
                    <title>友链 | Yle</title>
                </Head>
                <div id='friends-canvas-container'>
                    <canvas id='friends-canvas'></canvas>
                </div>
                <div className="friends-scroll-down-bar">
                    <div className="friends-link" onClick={this.onScrollDown}>
                        <div className="friends-link-text">添加友链</div>
                        <img src={arrow} className="friends-link-arrow"></img>
                    </div>
                </div>
                <Card title="友链添加说明">
                    <div className='friends-link-description'>
                        <div className="friends-description-left">
                            <p style={{fontSize: "18px"}}>请按以下格式在评论区回复：</p>
                            <p>昵称：Yle</p>
                            <p>博客标题：Yle的涂鸦板</p>
                            <p>博客链接：https://yleave.top</p>
                            <p>一言：人生苦短，至少该让咖啡☕甜点~</p>

                            

                            <p style={{marginTop: "2rem", fontSize: "17px"}}>不需要图片链接，下面的是本博客的头像链接，欢迎自取信息互加友链</p>
                            <p>头像链接：https://gitee.com/ylea/imagehost1/raw/master/img/zzm3.jpg</p>

                            <p style={{marginTop: "2rem", fontSize: "17px", color: '#c4c4c4'}}>目前暂不支持自定义人物模型，后续会考虑加上</p>
                        </div>
                        <div className="friends-description-right">
                            <img src="https://gitee.com/ylea/imagehost1/raw/master/img/friends.png"></img>
                        </div>
                    </div>
                </Card>
                <div className='maze-comment'>
                    <Comment/>
                </div>
            </Layout>
        );
    }
}

class Robot {
    constructor({name}) {
        this.state = ['Idle', 'Walking', 'Running', 'Dance', 'Death', 'Sitting', 'Standing'];
        this.emotes = ['Jump', 'Yes', 'No', 'Wave', 'Punch', 'ThumbsUp'];
        this.activeState = 'Walking';

        this.mixer = null;
        this.model = null;
        this.actions = {};
        this.activeAction = null;
        this.prevTime = +new Date();

        this.speed = {
            'Walking': 3,
            'Running': 5
        };

        this.clock = new THREE.Clock();

        this.angle = Math.random() * 2 * Math.PI;
        this.label = null;

        this.pause = false;

        this.name = name;

        this.timeout = Math.random() * 8000 + 8000;
    }

    init = () => {
        gltfLoader.load('https://cdn.jsdelivr.net/gh/yleave/models/RobotExpressive.glb', gltf => {
            const model = gltf.scene;
            model.scale.set(60, 60, 60);
            model.position.y = -250;

            const symbolx = Math.random() < 0.5 ? 1 : -1;
            const symbolz = Math.random() < 0.5 ? 1 : -1;

            let x = Math.random() * 3000;
            let z = Math.random() * 3000;

            if (x < 1500) {
                z = 1500 + Math.random() * 1500;
            } else if (z < 1500) {
                x = 1500 + Math.random() * 1500;
            }

            model.position.x = x * symbolx;
            model.position.z = z * symbolz;

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
        if (now - this.prevTime > this.timeout) {
            this.prevTime = now;
            const nextState = this.state[Math.floor(Math.random() * this.state.length)];
            // console.log(nextState)
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
        const overMaxBound = x >= 3000 || x <= -3000 || z >= 3000 || z <= -3000;
        const underMinBound = (x <= 1400 && x >= -1400) && (z <= 1400 && z >= -1400);

        if (overMaxBound || underMinBound) {
            // console.log('change angle')
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

        this.activeAction = null;
        this.model = null;
        this.mixer = null;
        this.clock = null;
        this.actions = null;
        this.label = null;
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