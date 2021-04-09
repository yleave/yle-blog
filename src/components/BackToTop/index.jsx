import React from 'react';
import { useEffect } from 'react';
import throttle from '@site/src/utils/throttle.js';
import './index.css';

function toTop(e) {
    window.scrollTo({ 
        top: 0, 
        behavior: "smooth" 
    });
}

function onScroll(e) {
    let ele = document.getElementsByClassName('back-to-top')[0];
    if (document.documentElement.scrollTop === 0) {
        ele.style.visibility = 'hidden';
    } else {
        ele.style.visibility = 'visible';
    }
}

const fn = throttle(onScroll, 100);

function BackToTop() {
    useEffect(() => {
        window.addEventListener('scroll', fn);
        return function() {
            window.removeEventListener('scroll', fn);
        };
    }, []);

    return (
        <div className="back-to-top" onClick={toTop}></div>
    );
}

export default BackToTop;