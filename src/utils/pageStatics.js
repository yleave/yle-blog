import qs from 'qs';
import md5 from 'md5';

// const beaconAction = (apiUrl, params) => {
//     /** 如果参数不是字符串则转换为query-string  */
//     let _params = typeof params === 'string' ? params : qs.stringify(params);
//     /** 创建Image对象来发送请求  */
//     let img = new Image(1, 1);
//     let src = `${apiUrl}?${_params}`;
//     img.src = src;
//     /** 其实并不需要将此图片append到body中，请求此时已经发送，目的已经达成了  */
//     /** 利用load和error事件来监听动作的完成，返回Promise便于操作  */
//     return new Promise((resolve, reject) => {
//         img.onload = function () {
//             resolve({ code: 200, data: 'success!'});
//         }
//         img.onerror = function (e) {
//             reject(new Error(e.error));
//         }
//     });
// }

// 需要在浏览器环境下，且非测试环境，即非 localhost
const checkEnv = () => {
    if (location) {
        const hostname = location.hostname;
        if (hostname === 'localhost') return false;

        return true;
    }

    return false;
};

const genUrl = baseUrl => {
    let pathname = location.pathname;

    if (pathname.endsWith('/')) {
        console.log('end with /', pathname);
        pathname = pathname.slice(0, -1);
    }

    const pageID = md5(pathname);

    const params = {
        pageID
    };

    const _params = typeof params === 'string' ? params : qs.stringify(params);
    const url = `${baseUrl}?${_params}`;

    return url;
};

/**
 * 给 pageLikeCount 值 + 1
 * @return {void} 
 */
const setPageLikeCount = () => {
    const url = genUrl('https://qc4w3l.fn.thelarkcloud.com/updatePLCount');

    fetch(url)
        .then(res => {
            if (res.ok) console.log('更新成功')
        })
        .catch(err => console.log(err));
};

/**
 * 获取 pageLikeCount 值 + 1
 * @return {Promise} 返回 promise 的 resolve 入参即获取数据的 json 值
 */
const getPageLikeCount = () => {
    const url = genUrl('https://qc4w3l.fn.thelarkcloud.com/getPLCount');

    return fetch(url)
        .then(res => {
            if (res.ok) return res.json();
        })
};


// 进入页面时调用此方法，更新 pv、uv 值
const initPage = () => {
    if (checkEnv()) {
        const url = genUrl('https://qc4w3l.fn.thelarkcloud.com/setViewCount');

        fetch(url, {
            credentials: 'include'
        })
            .then(res => {
                if (res.ok) return res.json();
            })
            .then(data => {
                if (!data) return;

                const pagePV = data.pagePV;
                const pageUV = data.pageUV;
                const websitePV = data.websitePV;
                const websiteUV = data.websiteUV;
                
                const pagePvDom = document.getElementsByClassName('page-pv-cnt');
                const pageUvDom = document.getElementsByClassName('page-uv-cnt');

                const websitePvDom = document.getElementsByClassName('website-pv-cnt');
                const websiteUvDom = document.getElementsByClassName('website-uv-cnt');

                if (pagePV && pagePvDom && pagePvDom.length) {
                    Array.from(pagePvDom).forEach(dom => {
                        dom.innerHTML = pagePV;
                    });
                }

                if (pageUV && pageUvDom && pageUvDom.length) {
                    Array.from(pageUvDom).forEach(dom => {
                        dom.innerHTML = pageUV;
                    });
                }

                if (websitePV && websitePvDom && websitePvDom.length) {
                    Array.from(websitePvDom).forEach(dom => {
                        dom.innerHTML = websitePV;
                    });
                }

                if (websiteUV && websiteUvDom && websiteUvDom.length) {
                    Array.from(websiteUvDom).forEach(dom => {
                        dom.innerHTML = websiteUV;
                    });
                }
            })
            .catch(err => console.log(err));
    }
};


export { initPage, getPageLikeCount, setPageLikeCount };
