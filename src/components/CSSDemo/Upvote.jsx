import React from 'react';
import './upvote.css';

function toggleClass(e) {
    e.target.classList.toggle('is-active');
}

function Upvote() {
    return (
        <div className="icon-heart-stage"> 
            <span className="icon-heart" onClick={toggleClass}></span>
        </div>
    )
}

export default Upvote;