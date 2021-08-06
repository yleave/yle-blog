import React, { Component } from 'react';

import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

import { DynamicBarChart } from 'react-dynamic-charts';
import 'react-dynamic-charts/dist/index.css';

import { notification, Modal, Button } from 'antd';
import 'antd/dist/antd.min.css';    // 存在对话框无法关闭的问题，导入 css 样式后才恢复正常
import Draggable from 'react-draggable';

import Comment from '@site/src/components/Comment';
import './index.css';

export default class MazeGame extends Component {
    constructor() {
        super();

        this.mapSize = 14;
        this.borderSize = 30;
        this.tree = [];  //并查集
        this.isConnect = []; //标识两点是否相连

        this.state = {
            visible: false, // 对话框是否可见
            disable: true,  // 对话框是否可拖动
            bounds: {left: 0, top: 0, right: 0, bottom: 0},  // 对话框拖动边界
        };
    }

    componentDidMount() {
        this.chess = document.getElementById('maze-canvas');    //迷宫地图画布
        this.ctx_chess = this.chess.getContext('2d');
        this.rect = document.getElementById('maze-canvas');     //移动方块画布
        this.ctx_rect = this.rect.getContext('2d');
        const mazeTime = document.getElementById('maze-time');

        this.rectangle = new Rect({
            ctx_chess: this.ctx_chess,
            rect: this.rect,
            ctx_rect: this.ctx_rect,
            myTime: mazeTime,
            mapSize: this.mapSize,
            borderSize: this.borderSize,
            isConnect: this.isConnect,
            initialIsConnect: this.initialIsConnect,
            initialTree: this.initialTree,
            drawChessBoard: this.drawChessBoard,
            drawMazeMap: this.drawMazeMap,
            updateMapSize: this.updateMapSize
        });

        this.initialIsConnect();
        this.initialTree();
        this.drawChessBoard();
        this.drawMazeMap();
        this.rectangle.load();
        this.forceUpdate();

        fetch('https://qcetup.fn.thelarkcloud.com/top5Ranks')
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
            })
            .then(data => {
                const firstRenderData = {values: []};
                for (let item of data) {
                    firstRenderData.values.push({
                        id: item.id,
                        label: item.userName,
                        value: item.spendMs,
                        colors: item.colors
                    });
                }

                this.setState({
                    data: [firstRenderData]
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    componentWillUnmount() {
        this.rectangle.unmount();
    }

    updateMapSize = () => {
        this.mapSize += 3;
        this.forceUpdate();
    };

    uploadRecord = () => {

    };

    showModal = () => {
        this.setState({
          visible: true,
        });
    };
    
    handleOk = e => {
        console.log('ok')
        this.setState({
            visible: false,
        });
        this.visible = false;
    };

    handleCancel = e => {
        console.log('cancel')
        this.setState({
            visible: false,
        });
    };

    initialTree = () => {
        for(var i = 0; i < this.mapSize; i++){
            this.tree[i] = [];
            for(var j = 0; j < this.mapSize; j++){
                this.tree[i][j] = -1;
            }
        }
    };

    initialIsConnect = () => {
        for(var i = 0; i < this.mapSize * this.mapSize; i++){ //存储任意两点间是否可达的状态
            this.isConnect[i] = [];
            for(var j = 0; j < this.mapSize * this.mapSize; j++){
                this.isConnect[i][j] = -1;
            }
        }
    };


   drawChessBoard = () => {    //画棋盘
        const ctx_chess = this.ctx_chess;

        for(let i = 0; i <= this.mapSize; i++){
            ctx_chess.strokeStyle = 'gray';
            ctx_chess.moveTo(15 + this.borderSize * i,15);  //画 mapSize 条竖线
            ctx_chess.lineTo(15 + this.borderSize * i,15 + this.mapSize * this.borderSize);
            ctx_chess.stroke();
            ctx_chess.moveTo(15,15 + this.borderSize * i);  //画 mapSize 条横线
            ctx_chess.lineTo(15 + this.mapSize * this.borderSize,15 + this.borderSize * i);
            ctx_chess.stroke();
        }
    };
    
    getRowAndCol = (pos) => {
        var res = [];
        res.push(Math.floor(pos / this.mapSize));   //获取单元格所在行数,从 0 行开始
        res.push(pos % this.mapSize);   //获取单元格所在列数，从 0 开始
        return res;
    };
    
    getNeighbourId = (pos) => {    //随机获得邻居 ID 号
        var posArr = this.getRowAndCol(pos);
        var row = posArr[0];
        var col = posArr[1];
        var myNeighbour = new Array();  //存放邻居所在单元格编号
        if(row - 1 >= 0){myNeighbour.push((row - 1) * this.mapSize + col);} //位于正上方的邻居
        if(row + 1 < this.mapSize){myNeighbour.push((row + 1) * this.mapSize + col);}  //位于下方的邻居
        if(col - 1 >= 0){myNeighbour.push(pos - 1);}   //位于左边的邻居
        if(col + 1 < this.mapSize){myNeighbour.push(pos + 1);}  //位于右边的邻居
        var n = Math.floor(Math.random() * myNeighbour.length);
        return myNeighbour[n];
    };
    
    getRoot = (pos) => {    //获取并查集的根
        var posArr = this.getRowAndCol(pos);
        var row = posArr[0];
        var col = posArr[1];
        var id = this.tree[row][col];
        if(id >= 0){    // id = -1 为根
            return this.getRoot(id);
        }
        return pos;
    };
    
    union = (pos_a,pos_b) => {
        var ra = this.getRoot(pos_a);
        var rb = this.getRoot(pos_b);
        if(ra !== rb){
            var posArr = this.getRowAndCol(rb);
            var row_b = posArr[0];
            var col_b = posArr[1];
            this.tree[row_b][col_b] = ra;    //将 pos_b 接在 pos_a 的根结点上
        }
    };
    
    clearLine = (pos_a,pos_b) => {  //擦除两个单元格之间的线段
        const ctx_chess = this.ctx_chess;

        var posArr_a = this.getRowAndCol(pos_a);
        var posArr_b = this.getRowAndCol(pos_b);
        var row_a = posArr_a[0];
        var col_a = posArr_a[1];
        var row_b = posArr_b[0];
        var col_b = posArr_b[1];
        var mid_row = Math.ceil((row_a + row_b) / 2);
        var mid_col = Math.ceil((col_a + col_b) / 2);
        if(row_a === row_b){    //若两个单元格行相同,擦除中间的竖线
            ctx_chess.clearRect(14 + this.borderSize * mid_col,16 + this.borderSize * mid_row,2,this.borderSize - 2);
        }else if(col_a === col_b){  //若列相同，则去掉中间的横线
            ctx_chess.clearRect(16 + this.borderSize * mid_col,14 + this.borderSize * mid_row,this.borderSize - 2,2);
        }
    };
    
    drawMazeMap = () => {
        while (this.getRoot(0) !== this.getRoot(this.mapSize * this.mapSize - 1)){
            var n = Math.floor(Math.random() * this.mapSize * this.mapSize);    //随机获取迷宫中的一个单元格
            var neighbour = this.getNeighbourId(n); //获取其邻居编号
            if(this.getRoot(n) !== this.getRoot(neighbour)){    //若与其邻居不在一个并查集中
                this.isConnect[n][neighbour] = 1;   //互相标识相连
                this.isConnect[neighbour][n] = 1;
                this.clearLine(n,neighbour);    //擦除中间的线条
                this.union(n,neighbour);    //合并
            }
        }
    };

    openNotification = () => {
        notification.open({
            message: '迷宫小游戏',
            description: '使用 W、S、A、D 来控制小方块移动。游戏共有三关，每关结束后会自动跳转到下一关，结束后提交数据统计排名(TODO)，别暂停作弊哦~.',
            top: 60,
        });
    };

    render() {
        const { bounds, disabled, visible } = this.state;

        return (
            <Layout>
                <Head>
                    <title>迷宫小游戏 | Yle</title>
                </Head>
                <div id='maze-container'>
                    <div className='layout-container'>
                        <div className="maze-left">
                            <canvas id="maze-canvas" width={630} height={630}></canvas>
                        </div>
                        <div className="maze-right">
                            <div className="maze-buttons">
                                <div id="maze-time"></div>
                                {
                                    this.rectangle ?
                                        <div>
                                            <button className='maze-button' onClick={this.openNotification}>简介</button>
                                            <button className='maze-button' onClick={this.rectangle.start} >开始游戏</button>
                                            <button className='maze-button' onClick={this.rectangle.stop}>暂停</button>
                                            <button className='maze-button' onClick={this.rectangle.renovates}>重新开始</button>
                                        </div>
                                        : null
                                }
                            </div>
                            {
                                this.state.data ? 
                                    <div className='maze-rank'>
                                        <DynamicBarChart
                                            data={this.state.data}
                                            baseline={0}
                                            barHeight={10}
                                            mainWrapperStyles={{
                                                // backgroundColor: '#333',
                                                // color: '#fff',
                                                // position: 'relative'
                                            }}
                                            chartWrapperStyles={{
                                                // position: 'relative'
                                            }}
                                            labelStyles={{
                                                // fontSize: '5px'
                                            }}
                                        />
                                    </div>
                                    : null
                            }
                        </div>
                    </div>
                </div>
                <div className='maze-comment'>
                    <Comment/>
                </div>
                
                <Modal
                    title="Modal"
                    visible={visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    okText="确认"
                    cancelText="取消"
                >
                    <p>Bla bla ...</p>
                    <p>Bla bla ...</p>
                    <p>Bla bla ...</p>
                </Modal>
                {/* <Modal
                    // title={
                    //     <div
                    //         style={{
                    //             width: '100%',
                    //             cursor: 'move',
                    //         }}
                    //         // onMouseOver={() => {
                    //         //     if (disabled) {
                    //         //         this.setState({
                    //         //             disabled: false,
                    //         //         });
                    //         //     }
                    //         // }}
                    //         // onMouseOut={() => {
                    //         //     this.setState({
                    //         //         disabled: true,
                    //         //     });
                    //         // }}
                    //     >
                    //         分数上传
                    //     </div>
                    // }
                    visible={visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    // modalRender={modal => (
                    //     <Draggable
                    //         disabled={disabled}
                    //         bounds={bounds}
                    //         // onStart={(event, uiData) => this.onStart(event, uiData)}
                    //     >
                    //     </Draggable>
                    // )}
                >
                </Modal> */}
            </Layout>
        );
    }
}

class Rect {    //移动操纵的矩形的构造函数 , 小矩形距单元格边界 5px
    constructor(props) {
        this.myTime = props.myTime;
        this.rect = props.rect;
        this.ctx_rect = props.ctx_rect;
        this.ctx_chess = props.ctx_chess;

        this.maze = {
            mapSize: props.mapSize,
            borderSize: props.borderSize,
            isConnect: props.isConnect,
            initialIsConnect: props.initialIsConnect,
            initialTree: props.initialTree,
            drawChessBoard: props.drawChessBoard,
            drawMazeMap: props.drawMazeMap,
            updateMapSize: props.updateMapSize
        };

        this.x = 20;
        this.y = 20;
        this.len = 20;
        this.state = 0;
        this.isEnd = false;
        this.row = 0;   //所在行列
        this.col = 0;
        this.outX = this.maze.mapSize * this.maze.borderSize - 10;
        this.outY = this.maze.mapSize * this.maze.borderSize - 10;

        this.h = 0;
        this.m = 0;
        this.s = 0;
        this.ms = 0;
        this.timerID = 0;
    }
    
    formatTime(n) {
        if(n < 10){
            return '0' + n;
        }else{
            return n;
        }
    }
    
    formatMs(n) {
        if(n < 10) {
            return '00' + n;
        }else{
            return '0' + n;
        }
    }
    
    timer = () => {
        this.ms += 50;
        if(this.ms >= 1000){
            this.ms = 0;
            this.s += 1;
        }
        if(this.s >= 60){
            this.s = 0;
            this.m += 1;
        }
        if(this.m >= 60){
            this.m = 0;
            this.h += 1;
        }

        let ms = this.formatMs(this.ms) + '';
        ms = ms.padStart(4, '0').slice(0, 3);
        
        const str = this.formatTime(this.h) + '时' + this.formatTime(this.m) + '分' + this.formatTime(this.s) + '秒' + ms + '毫秒';
        this.myTime.innerHTML = str;
    };
    
    start = () => {
        if (this.timerID) {
            clearInterval(this.timerID);
        }
        // 若在游戏结束后再次点击开始按钮，则重启游戏，不过后面加入榜单功能的话会进行修改
        if (this.maze.mapSize === 23) {
            this.renovates();
        }
        this.state = 1;
        this.timerID = setInterval(this.timer, 50);
    }
    
    stop = () => {
        this.state = 0;
        clearInterval(this.timerID);
    };
    
    renovates = () => {  //重置
        this.unmount();
        document.location.reload();
    };

    // 当退出时或刷新页面时需要对绑定时间进行清理，否则会造成内存泄漏
    unmount = () => {
        window.removeEventListener('keydown',this.doKeyDown);
    };
    
    doKeyDown = (e) => {
        //获取按下键的 unicode 值,keyCode 和 which 都是按下的键的字符代码
        e = e || window.event;
        const maze = this.maze;
        const ctx_rect = this.ctx_rect;
        const charCode = (typeof e.which == "number") ? e.which : e.keyCode;

        if(this.state === 1){  //开始状态
            if(charCode === 38 || charCode === 87){ //按下 上 键或 W 键
                if(this.row > 0){  //若不在第一行
                    if(maze.isConnect[this.row * maze.mapSize + this.col][(this.row - 1) * maze.mapSize + this.col] === 1){ //若与上方单元格连通
                        this.clearRect();
                        this.y -= 30;
                        this.row -= 1;
                        ctx_rect.fillRect(this.x,this.y,this.len,this.len);
                        e.preventDefault(); //取消事件的默认动作。
                        this.isOver();
                        this.showNextChessBoard();
                    }
                }
            }
            if(charCode === 40 || charCode === 83){ //按下 下 键或 S 键
                if(this.row < maze.mapSize){  //若不在最后一行
                    if(maze.isConnect[this.row * maze.mapSize + this.col][(this.row + 1) * maze.mapSize + this.col] === 1){ //若与下方单元格连通
                        this.clearRect();
                        this.y += 30;
                        this.row += 1;
                        ctx_rect.fillRect(this.x,this.y,this.len,this.len);
                        e.preventDefault(); //取消事件的默认动作。
                        this.isOver();
                        this.showNextChessBoard();
                    }
                }
            }
            if(charCode === 37 || charCode === 65){ //按下 左 键或 A 键
                if(this.col > 0){  //若不在第一列
                    if(maze.isConnect[this.row * maze.mapSize + this.col][this.row  * maze.mapSize + this.col - 1] === 1){ //若与下方单元格连通
                        this.clearRect();
                        this.x -= 30;
                        this.col -= 1;
                        ctx_rect.fillRect(this.x,this.y,this.len,this.len);
                        e.preventDefault(); //取消事件的默认动作。
                        this.isOver();
                        this.showNextChessBoard();
                    }
                }
            }
            if(charCode === 39 || charCode === 68){ //按下 右 键或 D 键
                if(this.col < maze.mapSize){  //若不在第一列
                    if(maze.isConnect[this.row * maze.mapSize + this.col][this.row  * maze.mapSize + this.col + 1] === 1){ //若与下方单元格连通
                        this.clearRect();
                        this.x += 30;
                        this.col += 1;
                        ctx_rect.fillRect(this.x,this.y,this.len,this.len);
                        e.preventDefault(); //取消事件的默认动作。
                        this.isOver();
                        this.showNextChessBoard();
                    }
                }
            }
        }
    };
    
    load = () => {
        const ctx_rect = this.ctx_rect;
        const rect = this.rect;

        ctx_rect.fillStyle = 'blue';
        ctx_rect.fillRect(this.x,this.y,this.len,this.len);
        ctx_rect.fillStyle = 'red';
        ctx_rect.fillRect(this.outX,this.outY,this.len,this.len);
        ctx_rect.fillStyle = 'blue';
        rect.focus();   //获得键盘焦点
        window.addEventListener('keydown',this.doKeyDown);
    };
    
    clearRect = () => {
        this.ctx_rect.clearRect(this.x - 1,this.y - 1,this.len + 1,this.len + 1);
    };
    
    isOver = () => {
        if(this.x >= this.outX && this.y >= this.outY){
            this.isEnd = true;
        }
    };
    
    showNextChessBoard = () => {
        const maze = this.maze;
        const ctx_chess = this.ctx_chess;

        if(this.isEnd === true){
            maze.mapSize += 3;
            maze.updateMapSize();
            if(maze.mapSize === 23){
                this.stop();
            }else{
                this.isEnd = false;
                ctx_chess.clearRect(0,0,630,630);
                maze.initialTree();
                maze.initialIsConnect();
                maze.drawChessBoard();
                maze.drawMazeMap();
                this.x = 20;
                this.y = 20;
                this.row = 0;
                this.col = 0;
                this.outX = maze.borderSize * maze.mapSize - 10;
                this.outY = maze.borderSize * maze.mapSize - 10;
                this.load();
            }
        }
    };
}