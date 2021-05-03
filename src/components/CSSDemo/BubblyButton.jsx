import React from 'react';
import './bubbly-button.css'


function animateButton(e) {
    e.preventDefault;
    e.target.classList.remove('animate');
    e.target.classList.add('animate');
    setTimeout(function() {
        e.target.classList.remove('animate');
    }, 700);
}

function BubblyButton() {
    

    return (
        <div className="bubbly-container">
            <div className="bubbly-button" onClick={animateButton}>点我</div>
        </div>
    );
};

export default BubblyButton;