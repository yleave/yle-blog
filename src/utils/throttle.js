// 延迟调用的 throttle
function throttle(fn, wait) {
    let timer = null;

    return function() {
        if (!timer) {
            timer = setTimeout(() => {
                fn.apply(this, [...arguments]);
                timer = null;
            }, wait);
        }
    };
}

export default throttle;