import React, { useEffect } from 'react';
import { Button } from 'antd';
import './index.css';

let flag = false;
let disX, disY;
let box, container;

function leftDown(e) {
    if (e.button === 0) {
        flag = true;
        disX = e.clientX - e.target.offsetLeft;
        disY = e.clientY - e.target.offsetTop;
    }
}

function drag(e) {
    if (flag) {
        let top = e.clientY - disY;
        let left = e.clientX - disX;
        
        if (top < container.offsetTop) top = container.offsetTop;
        if (left < container.offsetLeft) left = container.offsetLeft;
        if (top + box.offsetHeight > container.offsetTop + container.offsetHeight) {
            top = container.offsetTop + container.offsetHeight - box.offsetHeight;
        }
        if (left + box.offsetWidth > container.offsetLeft + container.offsetWidth) {
            left = container.offsetLeft + container.offsetWidth - box.offsetWidth;
        }

        box.style.top = `${top}px`;
        box.style.left = `${left}px`;
    }
}

function leftUp(e) {
    if (e.button === 0) {
        flag = false;
    }
}

function DragContainer() {
    useEffect(() => {
        document.addEventListener('mousemove', drag);
        document.addEventListener('mouseup', leftUp);
        box = document.getElementsByClassName('drag-box')[0];
        container = document.getElementsByClassName('drag-container')[0];
        return function() {
            box = null, container = null;
            document.removeEventListener('mousemove', drag);
            document.removeEventListener('mouseup', leftUp);
        };
    }, []);

    return (
        <div className="drag-container">
            <div className="drag-box" onMouseDown={leftDown}></div>
        </div>
    );
}

let dragbox, dropbox, dragimg, boxcontainer, imgcontainer;

function onDragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.className);
    e.target.style.opacity = .7;
}

function onDragEnd(e) {
    e.target.style.opacity = "";
}

function onDragOver(e) {
    // 默认情况下是不允许放置拖拽元素的，因此需要取消默认设置
    e.preventDefault();
    dropbox.classList.add('html-dropover');
}

function onDragLeave(e) {
    dropbox.classList.remove('html-dropover');
}

function onDrop(e) {
    // 阻止一些默认操作，如拖拽超链接会默认打开页面
    e.preventDefault();
    resetElement(false);

    dropbox.classList.remove('html-dropover');
    dropbox.classList.add('html-dropped');

    let isFile = false;

    // 若拖拽对象是文件
    [...e.dataTransfer.items].forEach((item) => {
        if (item.kind === "file") {
            const file = item.getAsFile();
            createPreview(file);
            isFile = true;
        }
    });

    if (isFile) return;
    dropbox.appendChild(document.getElementsByClassName(e.dataTransfer.getData('text/plain'))[0]);
}

function createPreview(imageFile) {
    if (!imageFile.type.startsWith("image/")) {
        return;
    }

    const image = document.createElement("img");
        image.src = URL.createObjectURL(imageFile);
        image.onload = function () {
        URL.revokeObjectURL(this.src);
    };
    dropbox.appendChild(image);
}

function resetElement(clear=true) {
    if (dropbox.classList.contains('html-dropped')) {
        dropbox.classList.remove('html-dropped')
    }
    boxcontainer.appendChild(dragbox);
    imgcontainer.appendChild(dragimg);
    if (clear) dropbox.innerHTML = ""; // 清空所有子节点
}

function HTMLDragContainer() {
    useEffect(() => {
        dragbox = document.getElementsByClassName('html-drag-box')[0];
        dropbox = document.getElementsByClassName('html-drop-box')[0];
        dragimg = document.getElementsByClassName('html-drag-img')[0];
        boxcontainer = document.getElementById('html-drag-box-container');
        imgcontainer = document.getElementById('html-drag-img-container');

        dragbox.addEventListener('dragstart', onDragStart);
        dragbox.addEventListener('dragend', onDragEnd);

        dragimg.addEventListener('dragstart', onDragStart);
        dragimg.addEventListener('dragend', onDragEnd);

        dropbox.addEventListener('dragover', onDragOver);
        dropbox.addEventListener('dragleave', onDragLeave);
        dropbox.addEventListener('drop', onDrop);
        return function() {
            dragbox.removeEventListener('dragstart', onDragStart);
            dragbox.removeEventListener('dragend', onDragEnd);
    
            dragimg.removeEventListener('dragstart', onDragStart);
            dragimg.removeEventListener('dragend', onDragEnd);
    
            dropbox.removeEventListener('dragover', onDragOver);
            dropbox.removeEventListener('dragleave', onDragLeave);
            dropbox.removeEventListener('drop', onDrop);
        };
    }, []);

    return (
        <div className="html-drag-container">
            <div id="html-drag-box-container">
                <div className="html-drag-box" draggable="true"></div>
            </div>
            <div id="html-drag-img-container">
                <img className="html-drag-img" src="https://gitee.com/yleave/imagehost1/raw/master/img/cat.png"></img>
            </div>
            
            <div className="html-drop-box"></div>

            <Button type="primary" shape="round" size="large" onClick={resetElement}>reset</Button>
        </div>
    );
}

export {
    DragContainer,
    HTMLDragContainer,
};