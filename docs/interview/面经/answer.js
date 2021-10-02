const bytedance_5 = `

1）两个边框设置不同颜色

2）渐变

3）border + background

4）border + padding

~~~css
/* 渐变色 */
.box {
    width: 100px;
    height: 100px;
    background: linear-gradient(to right, red 0%,red 50%,rgb(0, 25, 250) 51%,rgb(17, 0, 253) 100%);
}

/* 边框，这种实现中间会有一道横 */
.box {
    border-left: 50px solid red;
    border-right: 50px solid blue;
    height: 100px;
    width: 0;
}

/* 半个边框半个content设置不同颜色 */
.box {
    width: 100px;
    height: 200px;
    border-left: 100px solid red;
    background-color: cadetblue;
}

/* 半个边框半个padding，因为 padding 会显示背景色 */
.box {
    width: 0;
    height: 100px;
    border-left: 100px solid red;
    padding: 50px;
    background-color: cadetblue;
}
~~~
`;

const bytedance_6 = `
&emsp;&emsp;3次，第一次是组件挂载的时候，然后因为在 setTimeout 中调用了 setLoading 来改变状态，因此不在 React 的控制之下，不会进行批处理，因此会渲染两次，总计三次，即输出三个 1。
`;

const bytedance_7 = `
~~~js
var a = new Foo() // => {id: 1}
var b = new Foo() // => {id: 2}

// 使用原型
Foo.prototype.id = 1;

function Foo() {
    this.id = Foo.prototype.id++;
}
// 使用静态属性
Foo.id = 0;

function Foo() {
    this.id = ++Foo.id;
}
// 使用 IIFE 立即执行的函数，闭包保存
let Foo = (function() {
    let id = 0;

    function Foo() {
        this.id = ++id;
    }

    return Foo;
})();
~~~
`;


const bytedance_8 = `
**注意**，下面模板字面量的 $ 符被我替换为 ￥，并且符号也被我使用 ' 替代了，不这样做的话在本博客中会和编辑语法有冲突....

~~~js
const cash1 = new Cash(105);
const cash2 = new Cash(66);

const cash3 = cash1.add(cash2);
const cash4 = Cash.add(cash1, cash2);
const cash5 = new Cash(cash1 + cash2);

console.log('￥{cash3}', '￥{cash4}', '￥{cash5}');

// 希望输出结果为：
// 1元7角1分，1元7角1分 ，1元7角1分

class Cash {
    constructor(val) {
        this.val = val || 0;
    }

    toString() {
        return Cash.val2string(this);
    }

    valueOf() {
        return this.val;
    }

    add(a) {
        return Cash.val2string(this + a);
    }

    static val2string(val) {
        let yuan = ~~(val / 100);
        val %= 100;
        let ten_cent = ~~(val / 10);
        let cent = val %= 10;

        return '￥{yuan}元￥{ten_cent}角{cent}分';
    }

    static add(a, b) {
        return Cash.val2string(a + b);
    }
}

const cash1 = new Cash(105);
const cash2 = new Cash(66);

const cash3 = cash1.add(cash2);
const cash4 = Cash.add(cash1, cash2);
const cash5 = new Cash(cash1 + cash2);

console.log('￥{cash3}', '￥{cash4}', '￥{cash5}');
~~~

`;

export {
    bytedance_5,
    bytedance_6,
    bytedance_7,
    bytedance_8,
};