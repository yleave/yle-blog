import React from 'react';
import './index.css';

function Header(props) {

    return (
        <div className="header-container">
            <span id="busuanzi_container_page_pv">
                <i className="iconfont iconrili"></i> 
                <span>{props.time}</span>
                <span className="vertical-gap">|</span>

                <i className="iconfont iconyanjing"></i>
                <span id="busuanzi_value_page_pv"></span>
            </span>

            <div className="tags-container">
                <i className="iconfont iconlabel-01"></i>
                {
                    props.tags.map((tag) => {
                        return <span className="blog-tag">  {tag} </span>
                    })
                }
            </div>
        </div>
    );
}

export default Header;