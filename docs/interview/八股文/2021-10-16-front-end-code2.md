---
slug: front-end-code2
title: 前端代码题2
---

import Highlight from '@site/src/components/Highlight';
import { InterviewComponent } from '@site/src/components/CustomComponent';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Comment from '@site/src/components/Comment';
import MarkdownInCollapse from '@site/src/components/MarkdownInCollapse';

<InterviewComponent time="2021-10-16" lastUpdate='2021-10-16' />

## 1. 柯里化

&emsp;&emsp;柯里化是函数式编程中的一个重要概念，它是一种将使用多个参数的函数转换成一系列使用一个参数的函数的技术。为了保证柯里化能达到预期效果，这个函数需要是纯函数。

&emsp;&emsp;好处：减少代码冗余、增加可读性

&emsp;&emsp;坏处：若参数过多难免对性能造成一定影响

> 纯函数：一个函数的返回结果只依赖于它的参数，并在执行过程中不会产生副作用（即对函数之外的环境造成影响），那么这种函数就可以叫做纯函数。

&emsp;&emsp;一个最常见的柯里化例子：

```js
function sum(a, b, c) {
    return a + b + c;
}

// 柯里化后
let curryingSum = curry(sum);

curryingSum(1, 2, 3); // => 6
curryingSum(1)(2)(3); // => 6
curryingSum(1, 2)(3); // => 6
curryingSum(1)(2, 3); // => 6
```

:::tip 小知识

函数名.length  = 函数参数的个数

:::

&emsp;&emsp;柯里化的实现使用了闭包，简单实现为：

```js
function curry(fn, args=[]) {
    return function() {
        let newArgs = args.concat(Array.prototype.slice.call(arguments));

        // 每次调用时判断此时的参数是否足够，从而选择要调用 fn 还是继续进行柯里化
        if (fn.length > newArgs.length) {
            return curry(fn, newArgs);
        } else {
            return fn.apply(this, newArgs);
        }
    };
}
```

&emsp;&emsp;柯里化的 ES6 装逼版本：

```js
const curry = fn => 
    judge = (...args) => 
        fn.length > args.length
            ? (...newArg) => judge(...args, ...newArg)
            : fn(...args);
```

### 推荐阅读

- [「前端面试题系列6」理解函数的柯里化](https://segmentfault.com/a/1190000018180159)
- [详解JS函数柯里化](https://www.jianshu.com/p/2975c25e4d71)


## 2. 继承

&emsp;&emsp;封装、**继承**和多态是面向对象编程语言中的三大特性。JS 也是一种面向对象的编程语言，因此继承在 JS 中也非常重要。

&emsp;&emsp;不过与其他面向对象语言不同的是，JS 由于其独特的设计实现，导致了其继承实现的多样性。

&emsp;&emsp;一般在 ES5 及以前，JS 实现的继承方式主要有几种：

1. 通过构造函数来继承
2. 通过原型链来继承
3. 组合继承
4. 寄生继承
5. 组合寄生继承

&emsp;&emsp;在 ES6 中，出现了 `extends` 语法糖，使得 JS 能更加方便的实现继承，且与其他面向对象编程语言更加相似（如 Java）。

### 1. 通过构造函数来继承

&emsp;&emsp;**通过构造函数来继承**，就是在子类中借用父类的构造函数，传入自己的 `this` 来继承属性。这种继承方法的**缺点**是：只能继承父类中定义的实例属性，而不能继承原型中的属性。

```js
function Parent() {}

function Child() {
    Parent.call(this);
}
```

### 2. 通过原型链来继承

&emsp;&emsp;**通过原型链来继承**，将子类的原型指向父类的实例对象，由此继承父类原型中的属性和方法。这种继承方式的**缺点**是在子类实例化了多个对象时，若从父类继承的属性中有引用类型的对象，那么对这个对象内容的修改会反映到其他实例对象上，因为这些属性都是从一个 `__proto__` 中继承而来的。

```js
function Parent() {
    this.list = [1, 2, 3];
}

function Child() {}

// 通过修改原型来实现继承
Child.prototype = new Parent();
Child.prototype.constructor = Child;

// 子类申明了两个实例对象
let c1 = new Child();
let c2 = new Child();

c1.list.push(4); // c1 的修改在 c2 中也会生效，因为是从 __proto__ 中继承来的
c2.list;	// [1, 2, 3, 4]
```

### 3. 组合继承方式

&emsp;&emsp;也就是组合上面两种方式即使用父类构造函数并通过原型链继承的方式来达到继承的效果。这种方式的**缺点**是需要调用两次构造函数，并且继承的属性会存在冗余(即 `Child` 继承了属性，而原型中也有对应属性）。

```js
function Parent() {
    this.a = 1;
}

function Child() {
    Parent.call(this);
}

Child.prototype = new Parent();
Child.prototype.constructor = Child;

const c = new Child();
```

&emsp;&emsp;上面代码中，实例 `c` 打印结果如下，可以看到有两个 `a` 属性，因此存在冗余。

![组合继承](https://gitee.com/yleave/imagehost1/raw/master/img/%E7%BB%84%E5%90%88%E5%AF%84%E7%94%9F%E7%BB%A7%E6%89%BF.png)

### 4. 寄生继承

&emsp;&emsp;**寄生继承是通过一个中间对象来创建一个新对象**，并在这个新对象上能做某些增强，比如添加属性或方法。这种方法的**缺点**是：使用寄生式继承来为对象添加函数或属性，会由于不能做到函数复用而降低效率。

&emsp;&emsp;寄生继承在网上有两种版本：

```js title="版本1"
function createObject(o) {
    function F() {}
    F.prototype = o;
    return new F();
}

function inheritPrototype(child, parent) {
    const prototype = createObject(parent.prototype);
    prototype.constructor = child;
    child.prototype = prototype;
}

inheritPrototype(Dog, Animal);
```

```js title="版本2"
const obj = {
    list: [1, 2, 3],
    name: 'yle'
};

function createObject(o) {
    function F() {}
    F.prototype = o;
    return new F();
}

function createAnother(origin) {
    const newObj = createObject(origin);
    newObj.hello = function() {
        console.log('hello');
    };

    return newObj;
}

const o = createAnother(obj);
const o1 = createAnother(obj);
o1.list.push(4);    // 改动会作用到 o 中，因为原型的指向是一样的
console.log(o.list);    // [1,2,3,4]
```

### 5. 组合寄生继承

&emsp;&emsp;这种继承方式通过借用父类构造函数与原型链来继承属性和方法，它避免了组合继承方式中调用父类构造函数两次的缺点。具体实现就是在子类中调用父类构造函数并传入自身 `this`，然后将其`prototype` 通过一个中间对象来指向父类的原型。

&emsp;&emsp;不必为了指定**子类的原型**而调用**超类构造函数**，我们只需**超类的原型副**本即可。即使用**寄生式继承**来继承**超类原型**，然后将结果（实例）指定给**子类原型**。

```js
function Parent() {}

function Child() {
    Parent.call(this);
}

// 这边的 Object.create 相当于上面寄生继承中的 createObject
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;
// 若想更为完备的话，可再使用 setPrototypeOf 方法来使得子类能够继承父类的静态属性和静态方法
Object.setPrototypeOf(Child, Parent);
```

&emsp;&emsp;`Object.setProrotypeOf` 的具体说明可移步 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf)。

&emsp;&emsp;简单的说，其作用主要是这句代码： `Child.__proto__ = Parent`，即将子类的 `__proto__` 指向了父类。而我们知道静态属性/方法的调用是方式 `类名.静态方法名`，那么这样一来，我们就能够通过 `__proto__` 来寻址到父类，从而实现其静态方法的调用。


### 推荐阅读

- [JavaScript深入之继承的多种方式和优缺点](https://github.com/mqyqingfeng/Blog/issues/16)


## 3. 数组排序

:::info

排序算法是非常重要的计算机基础知识，在面试中被问到较多的主要是 **快速排序** 和 **堆排序**，当然其他基础的排序算法也需要掌握扎实。

:::

&emsp;&emsp;常见的排序算法可分为以下几类，其中比较类排序是常考的排序算法。

<img src="https://gitee.com/yleave/imagehost/raw/master/img/849589-20190306165258970-1789860540.png" style={{zoom: "40%"}} />

&emsp;&emsp;各个排序的时间和空间复杂度为：

<img src="https://gitee.com/yleave/imagehost/raw/master/img/sort.png" style={{zoom: "60%"}} />

### 1. 冒泡排序

&emsp;&emsp;冒泡排序的思想就是使用双循环，将相邻数字中大的数字往前冒泡。

&emsp;&emsp;一个小优化是：若一趟排序中没有进行交换，则表示数组已经有序，此时可以退出循环了。

```js
function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; ++i) {
        let flag = true;
        for (let j = 1; j < len - i; ++j) {
            if (arr[j] < arr[j-1]) {
                [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
                flag = false;
            }
        }
        if (flag) {
            break;
        }
    }
}
```

### 2. 简单插入排序

&emsp;&emsp;思想：将数组分为已排序部分和未排序部分，遍历未排序部分，对于遍历的数字，在已排序部分中选择一个合适的位置插入。 

```js
function insertSort(arr) {
    let len = arr.length;

    for (let i = 1; i < len; ++i) {
        let val = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > val) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = val;
    }
}
```

### 3. 简单选择排序

&emsp;&emsp;和简单插入排序有点相似，开始将数组分为有序部分和无序部分，每次遍历中从无序列表中选择一个最大/小的数放到有序列表的前/后面。

```js
function selectSort(arr) {
    let len = arr.length;

    for (let i = 0; i < len - 1; ++i) {
        let idx = i;
        for (let j = i + 1; j < len; ++j) {
            if (arr[idx] > arr[j]) {
                idx = j;
            }

            if (idx !== i) {
                [arr[idx], arr[i]] = [arr[i], arr[idx]];
            }
        }
    }
}
```

### 4. 快速排序

&emsp;&emsp;快排的核心思想是 `partition` ，以升序为例，选择一个轴心值 `pivot`，然后在一趟遍历中将给定范围内的所有小于 `pivot` 的值移到左边，而所有大于等于 `pivot` 的值移到右边，即完成了一次 `partition`。

&emsp;&emsp;快排是不稳定的，因为在 `partition` 过程中，我们总会把和 `pivot` 相等的值放在它左边或右边。

```js
function qiuckSort(arr, left=0, right=arr.length-1) {
    if (left < right) {
        let idx = partition(arr, left, right);
        qiuckSort(arr, left, idx - 1);
        qiuckSort(arr, idx + 1, right);
    }
}
```

&emsp;&emsp;其中 `partition` 有两种写法：

```js title="写法1"
function partition(arr, left, right) {
    // 以 left 值为基准
    let index = left + 1;
    let pivot = arr[left];
    for (let i = index; i <= right; ++i) {
        if (arr[i] < pivot) {
            [arr[i], arr[index]] = [arr[index], arr[i]];
            index++;
        }
    }
    [arr[left], arr[index-1]] = [arr[index-1], arr[left]];

    return index - 1;

    // 以 right 为基准
    // let index = left;
    // for (let i = index; i < right; ++i) {
    //     if (arr[i] < arr[right]) {
    //         [arr[i], arr[index]] = [arr[index], arr[i]];
    //         index++;
    //     }
    // }
    // [arr[right], arr[index]] = [arr[index], arr[right]];

    // return index;
}
```

```js title="写法2"
function partition(arr, left, right) {
    let pivot = arr[left];
    while (left < right) {
        while (left < right && arr[right] > pivot) {
            right--;
        }
        arr[left] = arr[right];
        while (left < right && arr[left] <= pivot) {
            left++;
        }
        arr[right] = arr[left];
    }
    arr[left] = pivot;

    return left;
}
```

&emsp;&emsp;对于快排，在面试中有被问到过两个问题：

1. 快排在什么情况下表现最差？

<MarkdownInCollapse markdown={`
  &emsp;&emsp;在数组基本有序（升序/降序）的情况下快排表现最差，时间复杂度会到 O(n^2)
  
  &emsp;&emsp;因为通常情况下我们选择的 pivot 会是数组中最左边或最右边的元素，那么由于数组基本有序，在进行 partition 时，基本不会有元素的交换，因此每次 partition 只会确定一个元素的最终位置，此时数组会遍历两遍，也就是 O(n^2) 的复杂度了。
  `} header="解答👇" />

2. js 中的 `Array.prototype.sort` 方法是怎么实现的？

<MarkdownInCollapse markdown={`
  &emsp;&emsp;**sort使用的是插入排序和快速排序结合的排序算法**。数组长度不超过22时，使用插入排序。长度超过22使用快速排序。在数组较短时插入排序更有效率。
  
  &emsp;&emsp;不过这貌似是老版本的实现，新版本实现可看 V8 源码：https://github.com/v8/v8/blob/master/third_party/v8/builtins/array-sort.tq
  `} header="解答👇" />


### 5. 归并排序

&emsp;&emsp;归并排序是一种分治思想，它将数组拆分为多个小区间，小区间之间两两进行排序合并，最终得到完整的有序数组。

```js
function mergeSort(arr, left=0, right=arr.length-1) {
    if (left < right) {
        let mid = left + Math.floor((right - left) / 2);
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        merge(arr, left, mid, mid + 1, right);
    }
}

function merge(arr, l1, r1, l2, r2) {
    let res = [];
    let l = l1;
    while (l1 <= r1 && l2 <= r2) {
        if (arr[l1] < arr[l2]) {
            res.push(arr[l1]);
            l1++;
        } else {
            res.push(arr[l2]);
            l2++;
        }
    }

    while (l1 <= r1) {
        res.push(arr[l1]);
        l1++;
    }
    while (l2 <= r2) {
        res.push(arr[l2]);
        l2++;
    }

    for (let i = l; i <= r2; i++) {
        arr[i] = res[i - l];
    }
    
    // or arr.splice(l, r2 - l + 1, ...res);
}
```

### 6. 堆排序

&emsp;&emsp;堆简单来说就是使用数组来存储一棵树。假设有一个数组的第一个有意义的元素索引从 `1` 开始，对于索引 `i`，其父节点的索引就是 `i / 2`，其左孩子索引是 `i * 2`，右孩子索引值是 `i * 2 + 1`。

&emsp;&emsp;若堆索引从 `0` 开始，那么对于索引 `i`，其父节点索引就是 `(i - 1) / 2`，左孩子索引就是 `（i + 1）* 2 - 1`，右孩子索引就是 `(i + 1) * 2`。

&emsp;&emsp;**下面的算法是按照堆元素索引从 `1` 开始的。**

&emsp;&emsp;因此，首先需要有一个长度为 `1` 的数组存储堆元素：

```js
let items = [,];
```

&emsp;&emsp;首先，给你一个数组，需要将其调整为堆。

&emsp;&emsp;堆的调整有两种方法：

- **自下而上堆化**：将节点值与父节点值比较，若大于父节点值（大顶堆）或小于父节点值（小顶堆），那么就将其交换
- **自上而下堆化**：对于一个节点，比较其左右孩子的节点值，选出其较大的子节点值（大顶堆）和当前节点值比较，若子节点值大于当前节点值，则交换位置；小顶堆同理

&emsp;&emsp;**所以，自下而上式堆化是调整节点与父节点（往上走），自上往下式堆化是调整节点与其左右子节点（往下走）。**

#### 从前往后，自上而下堆化

```js
function buildHeap(arr, heapSize) {
    while (heapSize < arr.length - 1) {
        heapSize++;
        heapify(arr, heapSize);
    }
}

// 大顶堆
function heapify(arr, i) {
    while (Math.floor(i / 2) > 0 && arr[i] > arr[Math.floor(i / 2)]) {
        swap(arr, i, Math.floor(i / 2));
        i = Math.floor(i / 2);
    }
}

function swap(arr, l, r) {
    [arr[l], arr[r]] = [arr[r], arr[l]];
}

let items = [, 3, 5, 1, 2, 4];

buildHeap(items, 1);

console.log(items)  // 5 4 1 2 3
```


#### 从后往前，自下而上堆化

&emsp;&emsp;注意一点，这边说的 **后** 不是数组末尾，而是树中的最后一个非叶子结点，索引值就是 `heapSize / 2`。

```js
function swap(arr, l, r) {
    [arr[l], arr[r]] = [arr[r], arr[l]];
}

function buildHeap(heap, heapSize) {
    for (let i = Math.floor(heapSize / 2); i > 0; --i) {
        heapify(heap, heapSize, i);
    }
}

// 大顶堆
function heapify(heap, heapSize, i) {
    while (true) {
        // 使用 maxIndex 记录左右孩子结点的较大结点值索引，当 maxIndex === i 或 当前节点无子节点时，退出循环
        let maxIndex = i;
        if (i * 2 <= heapSize && heap[i * 2] > heap[i]) {
            maxIndex = i * 2;
        }
        if (i * 2 + 1 <= heapSize && heap[i * 2 + 1] > heap[maxIndex]) {
            maxIndex = i * 2 + 1;
        }

        if (maxIndex === i) break;
        swap(heap, i, maxIndex);
        i = maxIndex;
    }
}
```

#### 完整堆排实现

&emsp;&emsp;堆其实就是一棵**完全二叉树**，因此可以使用数组存储，根据索引值来计算其父节点和子节点的位置。

&emsp;&emsp;设根结点的索引值为 `1`，那么我们若要对其进行排序，我们先创建一个堆，堆顶元素即是最大/最小值。然后我们每次将堆顶元素与堆的最后一个节点交换位置，并将最后一个节点从堆中移除（堆的大小减 1），移除堆尾元素的堆仍是一个完全二叉树，然后重新堆化，这样重复选取值直到堆的大小为 1 为止。

&emsp;&emsp;因此，**大顶堆排序的结果是从小到大排序**，**小顶堆的排序结果是从大到小排序**。

```js
function swap(arr, l, r) {
    [arr[l], arr[r]] = [arr[r], arr[l]];
}

function heapify(heap, size, idx) {
    while (true) {
        let maxIdx = idx;

        if (idx * 2 < size && heap[idx * 2] > heap[idx]) {
            maxIdx = idx * 2;
        }

        if (idx * 2 + 1 < size && heap[idx * 2 + 1] > heap[maxIdx]) {
            maxIdx = idx * 2 + 1;
        }

        if (idx === maxIdx) {
            break;
        }

        swap(heap, idx, maxIdx);
        idx = maxIdx;
    }
}

function buildHeap(heap, size) {
    for (let i = Math.floor(size / 2); i > 0; --i) {
        heapify(heap, size, i);
    }
}

function heapSort(heap) {
    let size = heap.length;

    buildHeap(heap, size);

    for (let i = size - 1; i > 1; --i) {
        swap(heap, 1, i);
        heapify(heap, i - 1, 1);
    }
}

heapSort(arr);
```



### 推荐阅读

- [菜鸟教程](https://www.runoob.com/w3cnote/ten-sorting-algorithm.html)
- [前端进阶算法9：看完这篇，再也不怕堆排序、Top K、中位数问题面试了](https://github.com/sisterAn/JavaScript-Algorithms/issues/60)


<Comment />
