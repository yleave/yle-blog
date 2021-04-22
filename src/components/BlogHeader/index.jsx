import React, { useEffect } from 'react';
import './index.css';

function bszJsonp() {
    return new Promise((resolve, reject) => {
        let randomStr = 'BusuanziCallback_' + Math.floor(1099511627776 * Math.random());
        let bszUrl = '//busuanzi.ibruce.info/busuanzi?jsonpCallback=' + randomStr;
        let scriptEle = document.createElement('script');
        scriptEle.type = 'text/javascript',
        scriptEle.defer = !0,
        scriptEle.src = bszUrl,
        scriptEle.referrerPolicy = 'no-referrer-when-downgrade',
        document.getElementsByTagName('head')[0].appendChild(scriptEle);

        window[randomStr] = function(data) {
            resolve(data);
            // 不要忘记移除创建的 script 标签了（避免内存泄漏
            document.removeChild(scriptEle);
        };
    })
}

function bszCallback(data) {
    let pvEle = document.getElementById('busuanzi_value_page_pv');
    pvEle && (pvEle.innerText = data['page_pv']);

    let siteEle = document.getElementById('busuanzi_value_site_pv');
    siteEle && (siteEle.innerText = data['site_pv']);
}

function Header(props) {

    useEffect(() => {
        bszJsonp().then(bszCallback);
    }, []);

    return (
        <div className="header-container">
            <span id="busuanzi_container_page_pv">
                <i className="iconfont iconrili"></i> 
                <span>{props.time}</span>
                <span className="vertical-gap">|</span>

                <i className="iconfont iconyanjing"></i>
                <span id="busuanzi_value_page_pv"><i className="fa fa-spinner fa-spin"></i></span>
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