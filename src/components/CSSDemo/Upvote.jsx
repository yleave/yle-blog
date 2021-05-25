import React from 'react';
import './upvote.css';

function toggleClass(e) {
    e.target.classList.toggle('is-active-demo');
}

function Upvote() {
    return (
        <div className="icon-heart-stage-demo"> 
            <span className="icon-heart-demo" onClick={toggleClass}></span>
        </div>
    )
}

export default Upvote;