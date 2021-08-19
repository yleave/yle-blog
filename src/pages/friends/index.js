import React, { Component } from 'react';

import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import grassImg from '../../../static/img/textures/grasslight-big.jpg';

import './index.css';

export default class Friends extends Component {
    constructor() {
        super();
        this.renderer = null;
        this.camera = null;
        this.scene = null;
        this.container = null;
        this.controls = null;
        
    }

    componentDidMount() {
        const container = document.getElementById('friends-canvas-container');
        const canvas = document.getElementById('friends-canvas');
        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });

        // renderer.setClearColor(0xffffff);   // b2e0df 绿豆沙色
        renderer.setPixelRatio( window.devicePixelRatio );
        const height = container.clientHeight;
        const width = container.clientWidth;
        renderer.setSize(width, height);
        
        const camera = new THREE.PerspectiveCamera(60, width / height, 1, 30000);
        camera.position.set( 1000, 50, 1500 );

        const scene = new THREE.Scene();
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

        const controls = new OrbitControls(camera, renderer.domElement);
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

        let model;
        const gltfLoader = new GLTFLoader();
        gltfLoader.load('https://cdn.jsdelivr.net/gh/yleave/yle-blog/models/RobotExpressive.glb', function(gltf) {
            model = gltf.scene;
            // console.log(model);
            model.scale.set(60, 60, 60);
            model.position.y = -250;
            scene.add(model);
        });




        this.renderer = renderer;
        this.camera = camera;
        this.scene = scene;
        this.container = container;
        this.controls = controls;

        window.addEventListener('resize', this.onWindowResize);
        this.renderLoop();
    }

    componentWillUnmount() {
        const scene = this.scene;
        scene.traverse((obj) => {
            if (obj.type === 'Mesh') {
                obj.geometry.dispose();
                obj.material.dispose();
            }
        });

        window.removeEventListener('resize', this.onWindowResize);
    }


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
                    <title>友链（未完工） | Yle</title>
                </Head>
                <div id='friends-canvas-container'>
                    <canvas id='friends-canvas'></canvas>
                </div>
            </Layout>
        );
    }
}