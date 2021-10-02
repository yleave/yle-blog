import React, { useEffect } from 'react';
import { initPage } from '../../utils/pageStatics';
import './index.css';

// function bszJsonp() {
//     return new Promise((resolve, reject) => {
//         let randomStr = 'BusuanziCallback_' + Math.floor(1099511627776 * Math.random());
//         let bszUrl = '//busuanzi.ibruce.info/busuanzi?jsonpCallback=' + randomStr;
//         let scriptEle = document.createElement('script');
//         scriptEle.type = 'text/javascript',
//         scriptEle.defer = !0,
//         scriptEle.src = bszUrl,
//         scriptEle.referrerPolicy = 'no-referrer-when-downgrade',
//         document.getElementsByTagName('head')[0].appendChild(scriptEle);

//         window[randomStr] = function(data) {
//             resolve(data);
//             // 不要忘记移除创建的 script 标签了（避免内存泄漏
//             document.removeChild(scriptEle);
//         };
//     })
// }

function bszCallback(data) {
    let pvEle = document.getElementById('busuanzi_value_page_pv');
    pvEle && (pvEle.innerText = data['page_pv']);

    let siteEle = document.getElementById('busuanzi_value_site_uv');
    siteEle && (siteEle.innerText = data['site_uv']);
}

function Header(props) {
    useEffect(() => {
        // bszJsonp().then(bszCallback);
        initPage();
    }, []);

    return (
        <div className="header-container">
            <span id="busuanzi_container_page_pv">
                {
                    props.lastUpdate ?
                        <div style={{fontSize: '0.9em'}}>最后更新时间 - {props.lastUpdate}</div>
                        : null
                }
                <i className="iconfont iconrili"></i> 
                <span>{props.time}</span>
                <span className="vertical-gap">|</span>

                <i className="iconfont iconyanjing"></i>
                {/* <span id="busuanzi_value_page_pv"><i className="fa fa-spinner fa-spin"></i></span> */}
                <span className="page-pv-cnt"><i className="fa fa-spinner fa-spin"></i></span>
            </span>
            
            {
                props.tags ?
                    <div className="tags-container">
                        <i className="iconfont iconlabel-01"></i>
                        {
                            props.tags.map((tag, idx) => {
                                return <span className="blog-tag" key={idx}>  {tag} </span>
                            })
                        }
                    </div>
                    : null
            }
            
        </div>
    );
}

export default Header;