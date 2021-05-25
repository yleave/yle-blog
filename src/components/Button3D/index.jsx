import React, { useEffect } from 'react';
import './index.css';

let docStyle;
let boundingClientRect;

function onmove(e) {

	const x = e.clientX - boundingClientRect.left;
	const y = e.clientY - boundingClientRect.top;
	
	const xc = boundingClientRect.width / 2;
	const yc = boundingClientRect.height / 2;
	
	const dx = x - xc;
	const dy = y - yc;
	
	docStyle.setProperty('--rx', `${ dy/-1 }deg`);
	docStyle.setProperty('--ry', `${ dx/10 }deg`);
	
}

function onleave(e) {
	
	docStyle.setProperty('--ty', '0');
	docStyle.setProperty('--rx', '0');
	docStyle.setProperty('--ry', '0');
	
}

function ondown(e) {
	
	docStyle.setProperty('--tz', '-25px');
	
}


function Button3D({ text, toggleFn, id }) {

    useEffect(() => {
        const btn = document.getElementById(id);
        boundingClientRect = btn.getBoundingClientRect()
        docStyle = document.documentElement.style;

        document.body.onmouseup = function(e) {
	
            docStyle.setProperty('--tz', '-12px');

        }

        btn.addEventListener('mousemove', onmove);
        btn.addEventListener('mouseleave', onleave);
        btn.addEventListener('mousedown', ondown);

        return () => {
            btn.removeEventListener('mousemove', onmove);
            btn.removeEventListener('mouseleave', onleave);
            btn.removeEventListener('mousedown', ondown);
        };
    }, []);

    return (
        <div id={id} className="button-3d" onClick={toggleFn} data-title={text}></div>
    );
}

export default Button3D;