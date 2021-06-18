---
slug: toy react-like-1
title: 写一个 toy react-like
---

import Highlight from '@site/src/components/Highlight';
import CustomComponent from '@site/src/components/CustomComponent';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Comment from '@site/src/components/Comment';
import MarkdownInCollapse from '@site/src/components/MarkdownInCollapse';


<CustomComponent tags={['react']} time="2021-06-17" />

&emsp;&emsp;这个 react-like 是跟着一个博客：[build-your-own-react](https://pomb.us/build-your-own-react/) 一步步学习的，主要目的是进一步学习 react 的原理知识。



&emsp;&emsp;基于 React 16.8



&emsp;&emsp;由以下几个步骤完成轮子的编写：

1. createElement Function
2. render Function
3. Concurrent Mode
4. Fibers
5. Render and Commit Phases
6. Reconciliation
7. Function Components
8. Hooks





&emsp;&emsp;首先让我们来看看一段简单的 React 代码：

```jsx
const element = <h1 title="foo">Hello</h1>
const container = document.getElementById("root")
ReactDOM.render(element, container)
```



## 1. createElement Function

&emsp;&emsp;上面的代码中使用了 JSX 语法，如第一行：`const element = <h1 title="foo">Hello</h1>`

&emsp;&emsp;JSX 语法需要通过转译工具如 Babel 来将其转换为 JS 语法，像第一行就是将 `h1` 标签解析为几个参数：`tagName -> type` ，标签的属性作为 `props`对象，标签中的内容变为 `children` 数组，这几个参数传递给 `createElement` 来将其转换为一个 React Element Object。



&emsp;&emsp;`createElement `的语法：[官方文档](https://zh-hans.reactjs.org/docs/react-api.html#createelement)

&emsp;&emsp;简单来说，就是根据 html 标签，将其转换为几个参数传递给 createElement 函数，并递归的生成 React 元素对象：

```js
React.createElement(
  type,
  [props],
  [...children]
)
```

&emsp;&emsp;`const element = <h1 title="foo">Hello</h1>` 转译一下就是：

```js
const element = React.createElement(
	'h1',
    {title: 'foo'},
    'Hello'
);
```



&emsp;&emsp;`createElement` 转换后的 React 元素对象是一个包含两个属性的对象：`type` 和 `props`。（[React 的实现](https://github.com/facebook/react/blob/f4cc45ce962adc9f307690e1d5cfa28a288418eb/packages/react/src/ReactElement.js#L111)中会有多个属性，不过这边为了便于理解与实现就只先设置两个）

&emsp;&emsp;其中，`props` 对象里除了有我们给 dom 元素里设置的一些属性外，还有一个属性 `children`，表示这个 dom 元素中包含的内容（或是子元素），因此 React 元素对象看起来会是一个树状结构。

&emsp;&emsp;如上述的 `element` 会变成：

```js
const element = {
    type: "h1",
    props: {
        title: "foo",
        children: "Hello",
    },
}
```



&emsp;&emsp;因此，`createElement` 的实现为：

```js
function createTextElement(text) {
    return {
        type: 'TEXT_ELEMENT',
        props: {
            nodeValue: text,
            children: []
        },
    };
}

function createElement(type, props, ...children) {

    return {
        type,
        props: {
            ...props,
            // 对于基本数据类型，如 number 或 string，我们对其进行额外处理，将其标记为 TEXT_ELEMENT
            // 而实际上 React 的实现中，它并不会对这些基本数据类型进行包装或是创建一个新的空数组，这样做是为了简化我们的 react 逻辑
            children: children.map(child => (
                typeof child === 'object'
                ? child
                : createTextElement(child)
            )),
        },
    };
}
```

> React 的 createElement 实现中还会有一些验证机制来保证语法的正确。



```js
/** @jsx Didact.createElement */
const element = (
    <div style="background: salmon">
      <h1>Hello World</h1>
      <h2 style="text-align:right">from Didact</h2>
    </div>
);
```

> `/** @jsx Didact.createElement */` 这个注释的作用是让 babel 使用我们自定义的 `createElement` 来解析 element。

&emsp;&emsp;根据我们实现的 createElement 函数，生成的对象就会是：

<img src="https://gitee.com/ylea/imagehost1/raw/master/img/image-20210529222721917.png" alt="image-20210529222721917" style={{zoom:"75%"}} />



## 2. render

&emsp;&emsp;render 函数接收两个参数：createElement 创建的对象和容器 dom

&emsp;&emsp;因此根据传入的参数递归渲染：

```js
function render(element, container) {
    // 首先根据 element 的 type 创建一个 dom 元素
    const dom = element.type === 'TEXT_ELEMENT'
    ? document.createTextNode('')
    : document.createElement(element.type);

    // 然后将 element 中的属性定义在创建的 dom 上
    const isProperty = key => key !== 'children'; 
    Object.keys(element.props)
        .filter(isProperty)
        .forEach(key => {
            dom[key] = element.props[key]
        });

    if (element.props.children && element.props.children.length > 0) {
        element.props.children.forEach(child => {
            Didact.render(child, dom);
        });
    }

    container.appendChild(dom);
};
```

&emsp;&emsp;有了 `createElement` 和 `render` 方法，我们就能够进行 dom 的渲染了：[demo](https://codesandbox.io/s/didact-2-k6rbj)

## 3. Concurrent Mode

[React 文档](https://zh-hans.reactjs.org/docs/concurrent-mode-intro.html)

[知乎文章](https://zhuanlan.zhihu.com/p/60307571)



### render 改进

&emsp;&emsp;上面 `render` 实现虽然可行，不过存在一些问题：我们是以一种递归渲染的方式完成我们的 dom 创建，当 dom tree 规模较大时，render 任务的执行可能会占用过多的 js 执行时间，导致其他任务无法及时响应，如 input 框的响应，或是影响到动画效果的平滑播放。



&emsp;&emsp;为了解决这个问题，我们将 render 任务分片，使用 [requestIdleCallback](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestIdleCallback) 方法来让浏览器在空闲时执行 render 任务。requestIdleCallback 方法有一个可选的参数 `timeout`（毫秒数） ，用于设置任务超时的容忍时间，若超出了时间限制，任务则会在下一次空闲时期被强制执行。

> 在 React 中没有使用 requestIdleCallback 方法来进行任务的调度，而是使用了 [scheduler](https://github.com/facebook/react/tree/master/packages/scheduler) 来进行协调调度。
>
> scheduler 中实现了 setTimeout 以及 requestAnimationFrame 的 pollfill 来实现调度效果。



### 实现

&emsp;&emsp;我们把 `render `中创建每个 dom 的过程称为一个 work。

&emsp;&emsp;那么，当还有任务需要完成且还有剩余时间片时，我们执行 work。

&emsp;&emsp;在下面的代码中，nextUnitOfWork 表示下一个要执行的 work，初始为 null，而 `performUnitOfWork `方法接收当前的 work 作为参数并返回下一个需要执行的 work：

```js
let nextUnitOfWork = null;

function workloop(deadline) {
    let shouldYield = false;
    
    while (nextUnitOfWork && !shouldYield) {
        nextUnitOfWork = performUnitOfWork(nextUnitOfWork);

        shouldYield = deadline.timeRemaining() < 1;
    }

    requestIdleCallback(workloop);
}

requestIdleCallback(workloop);
```



## 4. Fibers

&emsp;&emsp;为了组织这些 work 的执行顺序，我们需要一个数据结构：Fiber tree。

&emsp;&emsp;dom 树中的每个节点都有一个对应的 fiber 节点，而这些 fibers 就是我们的 works



&emsp;&emsp;举个例子，一个 dom 树如下：

```jsx
Didact.render(
  <div>
    <h1>
      <p />
      <a />
    </h1>
    <h2 />
  </div>,
  container
)
```

&emsp;&emsp;对应的 fiber tree（每个节点有指向其**第一个**孩子节点的指针、指向其兄弟节点的指针，以及指向其父节点（或者说 uncle 节点）的指针）：

<img src="https://gitee.com/ylea/imagehost1/raw/master/img/image-20210611202822125.png" alt="image-20210611202822125" style={{zoom:"70%"}} />

&emsp;&emsp;在 `render` 函数中，我们传入的元素会作为 fiber tree 的根结点，也就是初始的 work：nextUnitOfWork，然后通过 `performUnitOfWork `来获取下一个 work，即下一个遍历的 fiber 节点。

&emsp;&emsp;而 fiber tree 的遍历顺序为：

1. 若有孩子结点，那么其孩子结点会是下一个 work
2. 若无孩子结点，则其兄弟节点会是下一个 work
3. 若无孩子结点也无兄弟节点，那么会返回到其上层节点（会跳过访问过的 uncle 结点）
4. 继续遍历直到根结点

&emsp;&emsp;如上图的遍历顺序就是：`root -> div -> h1 -> p -> a -> h2`



&emsp;&emsp;在 `render` 方法中，我们传入的 dom 元素会作为 fiber tree 的根结点，也即第一个 work：

<Tabs
  defaultValue="current"
  values={[
    {label: '当前版本', value: 'current'},
    {label: '上一版', value: 'last'},
  ]}>
  
  <TabItem value="current">

```js
function render(element, container) {
    // 新增
    nextUnitOfWork = {
        dom: container,
        props: {
            children: [element],
        },
    };
    
    // 首先根据 element 的 type 创建一个 dom 元素
    const dom = element.type === 'TEXT_ELEMENT'
    ? document.createTextNode('')
    : document.createElement(element.type);

    // 然后将 element 中的属性定义在创建的 dom 上
    const isProperty = key => key !== 'children'; 
    Object.keys(element.props)
        .filter(isProperty)
        .forEach(key => {
            dom[key] = element.props[key]
        });

    if (element.props.children && element.props.children.length > 0) {
        element.props.children.forEach(child => {
            Didact.render(child, dom);
        });
    }

    container.appendChild(dom);
}
```

  </TabItem>

  <TabItem value="last">

```js
function render(element, container) {
    // 首先根据 element 的 type 创建一个 dom 元素
    const dom = element.type === 'TEXT_ELEMENT'
    ? document.createTextNode('')
    : document.createElement(element.type);

    // 然后将 element 中的属性定义在创建的 dom 上
    const isProperty = key => key !== 'children'; 
    Object.keys(element.props)
        .filter(isProperty)
        .forEach(key => {
            dom[key] = element.props[key]
        });

    if (element.props.children && element.props.children.length > 0) {
        element.props.children.forEach(child => {
            Didact.render(child, dom);
        });
    }

    container.appendChild(dom);
};
```

  </TabItem>
</Tabs>


&emsp;&emsp;而在 `performUnitOfWork` 方法中，我们会对每个 fiber 做三件事：

1. 将这个 fiber 对应的元素加入 DOM 树中
2. 为其孩子结点创建 fiber
3. 选择并返回下一个 work



&emsp;&emsp;我们拆分 `render` 方法为一个 `createDom` 和新的 `render` :

```js
function createDom(fiber) {
    // 首先根据 fiber 的 type 创建一个 dom 元素
    const dom = fiber.type === 'TEXT_ELEMENT'
        ? document.createTextNode('')
        : document.createElement(fiber.type);

    // 然后将 fiber 中的属性定义在创建的 dom 上
    const isProperty = key => key !== 'children'; // react dom 中的 children 属性是一个 react 元素的列表，而真实 dom 元素的 children 属性则是一个 HTMLCollection ，因此将其过滤
    Object.keys(fiber.props)
        .filter(isProperty)
        .forEach(key => {
            dom[key] = fiber.props[key]
        });

    return dom;
};

function render(element, container) {
    nextUnitOfWork = {
        dom: container,
        props: {
            children: [element],
        },
    };
}
```

&emsp;&emsp;根据上面处理 fiber 的三个步骤，`performUnitOfWork` 函数的实现为：

```js
function performUnitOfWork(fiber) {
    // 1.add dom node
    if (!fiber.dom) {
        fiber.dom = createDom(fiber);
    }

    if (fiber.parent) {
        fiber.parent.dom.appendChild(fiber.dom);
    }
    // 2.create new fiber
    const elements = fiber.props.children;
    let index = 0;
    let prevSibling = null;

    while (index < elements.length) {
        const element = elements[index];

        const newFiber = {
            type: element.type,
            props: element.props,
            parent: fiber,
            dom: null
        };

        if (index === 0) {
            fiber.child = newFiber;
        } else {
            prevSibling.sibling = newFiber;
        }

        prevSibling = newFiber;
        index++;
    }
    
    // 3.return next unit of work
    if (fiber.child) return fiber.child;

    let nextFiber = fiber;
    // 直到 fiber 根结点的 parent : null
    while (nextFiber) {
        if (nextFiber.sibling) return nextFiber.sibling;

        nextFiber = nextFiber.parent;
    }
}
```



## 5. Render and Commit Phases

&emsp;&emsp;`render` 任务的分片优化已经完成了，不过此时还有一个问题：当我们在执行 render 任务时，若此时有一个其他优先级高的任务需要完成，那么我们的 `render` 任务会被暂停转而执行其他任务，那么此时浏览器中显示的是一个不完全的 UI 视图，但我们并不想看到这种情况发生。

&emsp;&emsp;因此我们需要等待 fiber 树完整创建后再将其添加到 DOM 树中。



&emsp;&emsp;首先，我们需要将 `performUnitOfWork` 函数中改变 DOM 树部分的代码给移除，也就是：

```js
// 先从 performUnitOfWork 中移除
if (fiber.parent) {
    fiber.parent.dom.appendChild(fiber.dom);
}
```



&emsp;&emsp;引入一个新概念：`wip(work in progress)`，我们将这个还没创建完全的 DOM 树称为 `wipRoot`：

```js
function render(element, container) {
    wipRoot = {
        dom: container,
        props: {
            children: [element],
        },
    };

    nextUnitOfWork = wipRoot;
}

let wipRoot = null;
```



&emsp;&emsp;那么，当我们完成 `render` 任务时，我们才提交（commit）完整的 fiber tree 到 DOM 中（我们能够知道 `render` 任务是什么时候完成的，因为此时后续没有 work 了，即 `nextUnitOfWork` 为 `null` 时）。

&emsp;&emsp;因此需要改动 `renderLoop` 方法：

```js
function commitRoot() {
	// TODO
}

function workloop(deadline) {
    let shouldYield = false;
    
    while (nextUnitOfWork && !shouldYield) {
        nextUnitOfWork = performUnitOfWork(nextUnitOfWork);

        shouldYield = deadline.timeRemaining() < 1;
    }
	
    // 改动处
    if (!nextUnitOfWork && wipRoot) {
        commitRoot();
    }

    requestIdleCallback(workloop);
}
```

&emsp;&emsp;`commitRoot` 方法中，我们递归的将每个节点添加进 DOM 树中：

```js
function commitRoot() {
    commitWork(wipRoot.child);
    wipRoot = null;
}

function commitWork(fiber) {
    if (!fiber) return;
    
    const domParent = fiber.parent.dom;
    domParent.appendChild(fiber.dom);

    commitWork(fiber.child);
    commitWork(fiber.sibling);
}
```



## 6. Reconciliation

&emsp;&emsp;到目前为止，我们只实现了 dom 元素的添加，但是更新、删除操作我们还没实现。

&emsp;&emsp;Reconciliation（调和）就是在 `render` 任务中，对当前与上一次的 fiber tree 进行比较，找到需要进行添加、更新或删除的节点，并执行操作。



&emsp;&emsp;因此，我们新增一个变量 `currentRoot` 表示我们的上一棵 fiber tree。



&emsp;&emsp;为了便于比较，我们在 fiber 节点中新增一个属性：`alternate`，表示每个 fiber 节点对应的上一次提交过的 fiber 节点（新增节点的 `alternate` 为 `null`）

```js
function commitRoot() {
    commitWork(wipRoot.child);
    currentRoot = wipRoot;	// 新增，保存旧的 wipRoot
    wipRoot = null;
}

function render(element, container) {
    wipRoot = {
        dom: container,
        props: {
            children: [element],
        },
        alternate: currentRoot,	// 新增
    };

    nextUnitOfWork = wipRoot;
}

let currentRoot = null;	// 新增
```



&emsp;&emsp;`performUnitOfWork` 函数中，我们在遍历并生成 fiber tree 的同时进行 diff 操作，因此从这个函数中拆分出一个 `reconcileChildren` 方法来执行 diff 操作：

```js
function performUnitOfWork(fiber) {
    // add dom node
    if (!fiber.dom) {
        fiber.dom = createDom(fiber);
    }

    const elements = fiber.props.children;
    reconcileChildren(fiber, elements);	// 改动处

    // return next unit of work
    if (fiber.child) return fiber.child;

    let nextFiber = fiber;
    while (nextFiber) {
        if (nextFiber.sibling) return nextFiber.sibling;

        nextFiber = nextFiber.parent;
    }
}

function reconcileChildren(wipFiber, elements) {
    // create new fiber
    // TODO diff
    
    let index = 0;
    let prevSibling = null;

    while (index < elements.length) {
        const element = elements[index];

        const newFiber = {
            type: element.type,
            props: element.props,
            parent: fiber,
            dom: null
        };

        if (index === 0) {
            fiber.child = newFiber;
        } else {
            prevSibling.sibling = newFiber;
        }

        prevSibling = newFiber;
        index++;
    }
}
```



&emsp;&emsp;React 的 diff 实现主要使用了几个策略来优化树的 diff 效率：

- 同层比较
- 相同类型的元素有相似的结构（因此只需要更新部分内容即可），不同类型的元素则直接进行添加/删除
- 对同层元素使用 `key` 属性来优化节点间的 diff（方便识别节点的状态，如新增、移除、插入）

&emsp;&emsp;这里为了方便实现**仅对同层节点进行顺序的遍历对比，没有考虑节点位置交换、插入等情况**

> &emsp;&emsp;举个例子，假如**原先**的节点是 `a, b, c, d`，**新**的节点是 `a, c, d`，那么原先的 `b` 节点对应的就是 新的 `c` 节点，`b` 节点会被认为是要删除的节点，而 `c` 节点会认为是要新增的节点，顺延下去，原先的 `c` 节点对应的则是新的 `d` 节点。

&emsp;&emsp;因此 `reconcileChildren` 方法的实现为：

```js
function reconcileChildren(wipFiber, elements) {
    // create new fiber
    let index = 0;
    let prevSibling = null;
    // 根据 alternate 属性获取旧的 fiber 节点
    let oldFiber = wipFiber.alternate && wipFiber.alternate.child;

    while (index < elements.length || oldFiber != null) {
        const element = elements[index];
        let newFiber = null;
        
        const sameType = oldFiber && element && newFiber.type === oldFiber.type;

        // update the node
        if (sameType) {
            newFiber = {
                type: oldFiber.type,
                props: element.props,	// 使用新节点的 props 进行更新
                dom: oldFiber.dom,
                parent: wipFiber,
                alternate: oldFiber,
                effectTag: 'UPDATE',
            };
        }

        // add this node
        if (element && !sameType) {
            newFiber = {
                type: element.type,
                props: element.props,
                dom: null,
                parent: wipFiber,
                alternate: null,
                effectTag: 'PLACEMENT',
            };
        }

        // delete the oldFiber's node
        if (oldFiber && !sameType) {
            oldFiber.effectTag = 'DELETION';
            deletions.push(oldFiber);
        }
		
        // 继续遍历下一个旧的 fiber 节点
        if (oldFiber) {
            oldFiber = oldFiber.sibling;
        }

        if (index === 0) {
            wipFiber.child = newFiber;
        } else {
            prevSibling.sibling = newFiber;
        }

        prevSibling = newFiber;
        index++;
    }
}
```

&emsp;&emsp;`reconcileChildren` 方法，我们在 fiber 节点中新增了一个属性 `effectTag` ，用于标记这个节点需要执行的操作，后续在 `commitWork` 方法中就能够根据这个标记来执行对应操作了。

&emsp;&emsp;而在标记将要移除的节点时，使用了一个 `deletions` 数组来存储这些节点，这是因为我们 commit 任务是根据新的 wipRoot 来执行的，而在新的 fiber tree 中并不存在这些要删除的节点，因此我们需要额外进行保存。



&emsp;&emsp;那么，我们需要对几个方法进行修改：

```js
let deletions = null;

function render(element, container) {
    wipRoot = {
        dom: container,
        props: {
            children: [element],
        },
        alternate: currentRoot,
    };

    deletions = [];	// 新增
    nextUnitOfWork = wipRoot;
}

function commitRoot() {
    deletions.forEach(commitWork);	// 新增
    commitWork(wipRoot.child);
    currentRoot = wipRoot;
    wipRoot = null;
}

function commitWork(fiber) {
    if (!fiber) return;
    
    const domParent = fiber.parent.dom;
	
    // 新增
    if (fiber.effectTag === 'PLACEMENT' && fiber.dom != null) {
        domParent.appendChild(fiber.dom);
    } else if (fiber.effectTag === 'DELETION') {
        domParent.removeChild(fiber.dom);
    } else if (fiber.effectTag === 'UPDATE' && fiber.dom != null) {
        updateDom(fiber.dom, fiber.alternate.props, fiber.props);
    }

    commitWork(fiber.child);
    commitWork(fiber.sibling);
}

```

&emsp;&emsp;对于需要更新的节点，在 `updateDom` 方法中，根据旧节点的 `props` 和新节点的 `props` 进行更新：

```js
// 先定义一些过滤器
const isProperty = key => key !== 'children' && !isEvent(key);
const isNew = (prev, next) => key => prev[key] !== next[key];
const isGone = (prev, next) => key => !(key in next);
const isEvent = key => key.startsWith('on');

function updateDom(dom, prevProps, nextProps) {
    // remove old or changed event listeners
    Object.keys(prevProps)
        .filter(isEvent)
        .filter(key => !(key in nextProps) || isNew(prevProps, nextProps)(key)) // 这边的 isNew 用于移除变更的事件处理函数
        .forEach(name => {
            const eventType = name
                .toLowerCase()
                .substring(2);
            dom.removeEventListener(eventType, prevProps[name]);
        });

    // add event listeners
    Object.keys(nextProps)
        .filter(isEvent)
        .filter(isNew(prevProps, nextProps))
        .forEach(name => {
            const eventType = name
                .toLowerCase()
                .substring(2);
            dom.addEventListener(eventType, nextProps[name]);
        });

    // remove old properties
    Object.keys(prevProps)
        .filter(isProperty)
        .filter(isGone(prevProps, nextProps))
        .forEach(name => {
            dom[name] = '';
        });

    // set new or changed properties
    Object.keys(nextProps)
        .filter(isProperty)
        .filter(isNew(prevProps, nextProps))
        .forEach(name => {
            dom[name] = nextProps[name];
        });
}
```

> &emsp;&emsp;不得不说，更新 dom 这部分的代码写得太简洁太美秒了！嵌套的箭头函数 + 链式调用，虽然都学过，但是换自己实现的话代码肯定没有这么清晰明了。



&emsp;&emsp;在 `updateDom` 中，我们考虑到了 dom 元素的事件绑定情况，而回顾我们前面的 `createDom` 中，我们没有将事件绑定考虑在内，只是单纯的进行属性拷贝，因此我们需要对其进行一些修改：

```js
// 原
function createDom(fiber) {
    // 首先根据 fiber 的 type 创建一个 dom 元素
    const dom = fiber.type === 'TEXT_ELEMENT'
        ? document.createTextNode('')
        : document.createElement(fiber.type);

    // 然后将 fiber 中的属性定义在创建的 dom 上
    const isProperty = key => key !== 'children'; 
    Object.keys(fiber.props)
        .filter(isProperty)
        .forEach(key => {
            dom[key] = fiber.props[key]
        });

    return dom;
};
```

&emsp;&emsp;修改为：

```js
function createDom(fiber) {
    // 首先根据 fiber 的 type 创建一个 dom 元素
    const dom = fiber.type === 'TEXT_ELEMENT'
        ? document.createTextNode('')
        : document.createElement(fiber.type);
	
    // 使用统一的 dom 更新函数
    updateDom(dom, {}, fiber.props)

    return dom;
};
```



&emsp;&emsp;目前为止，一个能够具有 react 元素解析、任务分片与 dom diff 功能的 react-like 就完成了：[demo](https://codesandbox.io/s/didact-6-96533?file=/src/index.js)



## 7. Function Components

&emsp;&emsp;现在，我们给这个 react-like 添加对函数组件的支持，函数组件没有状态管理及生命周期函数等特性实现起来要比类组件方便得多。



&emsp;&emsp;首先来看一个函数组件的例子：

```jsx
function App(props) {
  return <h1>Hi {props.name}</h1>
}
const element = <App name="foo" />
const container = document.getElementById("root")
Didact.render(element, container)
```

&emsp;&emsp;上面的 JSX 翻译为 JS 代码就是：

```js
function App(props) {
    return Didact.createElement(
    	'h1',	// type
        null,	// props
    	'Hi ',	// child
        props.name	// child
    );
}
const element = Didact.createElement(
	App,	// type
    {name: 'foo'}	// props
);
```

&emsp;&emsp;通过 JS 代码，很容易看出函数组件与普通 dom 元素的区别：

1. 函数组件对应的 fiber 节点中是没有 dom 元素的
2. 在 `createElement` 方法中，传入的 type 就是该函数
3. 函数组件的 children 是该函数运行的返回结果而不能直接从 props 中获得



&emsp;&emsp;那么，在处理每个任务时（`performUnitOfWork`中），我们可以根据 `fiber.type` 来判断是否是一个函数组件，从而分别处理：

- 普通 fiber 在 `updateHostComponent` 函数中处理，处理方式与原先一样
- 函数组件的 fiber 在 `updateFunctionComponent` 函数处理

```js
function performUnitOfWork(fiber) {
    // 修改
    if (fiber.type instanceof Function) {
        updateFunctionComponent(fiber);
    } else {
        updateHostComponent(fiber);
    }
    
    // return next unit of work

    if (fiber.child) return fiber.child;

    let nextFiber = fiber;
    while (nextFiber) {
        if (nextFiber.sibling) return nextFiber.sibling;

        nextFiber = nextFiber.parent;
    }
}

function updateHostComponent(fiber) {
    // add dom node
    if (!fiber.dom) {
        fiber.dom = createDom(fiber);
    }

    const elements = fiber.props.children;
    reconcileChildren(fiber, elements);
}

function updateFunctionComponent(fiber) {
    // 运行函数获取返回值，也即函数组件的孩子结点
    const elements = [fiber.type(fiber.props)];
    reconcileChildren(fiber, elements);
}
```



&emsp;&emsp;函数组件的 Reconciliation 处理与原先一样。

&emsp;&emsp;需要进行改动的是 work 的 commit 阶段，因为函数组件没有对应的 dom 结点，那么若我们要添加函数组件的孩子结点，我们就需要再往上寻找；

&emsp;&emsp;而对于删除的情况，需要找到函数 fiber 的子节点再进行删除（不用考虑子节点的兄弟节点的情况，因为函数组件返回的节点中只允许定义一个顶层节点，其他元素需要包裹在这个节点中）：

```js
function commitWork(fiber) {
    if (!fiber) return;
	
    // 改动处
    const domParentFiber = fiber.parent;
    while (!domParentFiber.dom) {
        domParentFiber = domParentFiber.parent;
    }

    const domParent = domParentFiber.dom;

    if (fiber.effectTag === 'PLACEMENT' && fiber.dom != null) {
        domParent.appendChild(fiber.dom);
    } else if (fiber.effectTag === 'DELETION') {
        // 改动处
        commitDeletion(fiber, domParent);
    } else if (fiber.effectTag === 'UPDATE' && fiber.dom != null) {
        updateDom(fiber.dom, fiber.alternate.props, fiber.props);
    }

    commitWork(fiber.child);
    commitWork(fiber.sibling);
}

// 改动处
function commitDeletion(fiber, domParent) {
    if (fiber.dom) {
        domParent.removeChild(fiebr.dom);
    } else {
        domParent.removeChild(fiber.child, domParent);
    }
}
```



## 8. Hooks

> *Hook* 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。

&emsp;&emsp;首先来看一个使用 Hook 的例子，在这个例子中，每点击 h1 标签一次，count 值就会加 1：

```jsx
function Counter() {
  const [state, setState] = Didact.useState(1)
  return (
    <h1 onClick={() => setState(c => c + 1)}>
      Count: {state}
    </h1>
  )
}
const element = <Counter />
const container = document.getElementById("root")
Didact.render(element, container)
```

&emsp;&emsp;对于 `useState` 这个 Hook，它接收一个初始值并返回对应的 state 值与一个更新值的方法 `setState`

&emsp;&emsp;那么，我们每次调用 `setState` 来更新这个 state 时，都需要对这部分的 UI 进行重新渲染。



&emsp;&emsp;Hook 是在函数组件中使用的，因此我们在函数组件更新的地方来开始 Hook 的执行。

&emsp;&emsp;我们申明两个全局变量：wipFiber 和 hookIndex 用于记录后续需要执行的所有 hooks，并在函数组件更新处对它们进行初始化：

```js
let wipFiber = null;
let hookIndex = null;
function updateFunctionComponent(fiber) {
    // 更新处
    wipFiber = fiber;
    hookIndex = 0;
    wipFiber.hooks = [];

    const elements = [fiber.type(fiber.props)];
    reconcileChildren(fiber, elements);
}
```



&emsp;&emsp;然后来一步步实现 `useState` 这个 Hook。

&emsp;&emsp;首先，若是第一次调用 `useState`，则根据初始值初始化 state，否则使用之前的 state：

```js
function useState(initial) {
    const oldHook = 
          wipFiber.alternate &&
          wipFiber.alternate.hooks &&
          wipFiber.alternate.hooks[hookIndex];

    const hook = {
        state: oldHook ? oldHook.state : initial,
    };

    wipFiber.hooks.push(hook);
    hookIndex++;

    return [hook.state];
};
```

&emsp;&emsp;`useState` hook 的返回值除了一个 state 还有一个更新 state 的函数 `setState`，`setState` 接收一个更新 state 的 action（在上面的例子中就是使 state 加 1 的函数），`setState` 可以调用多次，那么我们就需要使用一个队列 queue 来将这些 action 保存下来。

&emsp;&emsp;且每次调用 `setState`，我们都需要更新 UI 视图，因此需要像之前一样设置 wipRoot 和 nextUnitOfWork 来使程序能够程序开始一个渲染流程。

```js
function useState(initial) {
    const oldHook = 
          wipFiber.alternate &&
          wipFiber.alternate.hooks &&
          wipFiber.alternate.hooks[hookIndex];

    const hook = {
        state: oldHook ? oldHook.state : initial,
        queue: []	// 新增
    };
	
    // 新增
    const setState = action => {
        hook.queue.push(action);
        wipRoot = {
            dom: currentRoot.dom,
            props: currentRoot.props,
            alternate: currentRoot
        };

        nextUnitOfWork = wipRoot;
        deletions = [];
    };

    wipFiber.hooks.push(hook);
    hookIndex++;

    return [hook.state, setState];	// 新增
};
```

&emsp;&emsp;我们保存了更新 state 的 actions，那么要什么时候执行这些 actions 呢，答案就是调用了 setState 后的新一轮渲染阶段中，我们在遇到函数组件的时候，为了获取函数组件的孩子结点，需要执行这个函数，因此会再次执行 `useState` 这个函数，那么我们此时执行的时候，就可以根据之前保存的 actions 来更新我们当前的 state 了：

```js
function useState(initial) {
    const oldHook = 
          wipFiber.alternate &&
          wipFiber.alternate.hooks &&
          wipFiber.alternate.hooks[hookIndex];

    const hook = {
        state: oldHook ? oldHook.state : initial,
        queue: []
    };
	
    // 新增
    const actions = oldHook ? oldHook.queue : [];
    actions.forEach(action => {
        hook.state = action(hook.state);
    });

    const setState = action => {
        hook.queue.push(action);
        wipRoot = {
            dom: currentRoot.dom,
            props: currentRoot.props,
            alternate: currentRoot
        };

        nextUnitOfWork = wipRoot;
        deletions = [];
    };

    wipFiber.hooks.push(hook);
    hookIndex++;

    return [hook.state, setState];
};
```

> &emsp;&emsp;关于 hookIndex ：hookIndex 用于跟踪当前所要使用的 oldHook，这个值会在每次调用函数组件时被重设为 0，因此一个函数组件中的多个 `useState` Hook 可以一一对应，这也是为什么 Hook 需要在函数中最顶层使用的原因，因为若一个 Hook 在 `if` 语句中调用，那么我们在执行这个函数时可能就会跳过这个 Hook，导致后面取出的 oldHook 都是错误的了。
>
> [只在最顶层使用 Hook](https://zh-hans.reactjs.org/docs/hooks-rules.html#only-call-hooks-at-the-top-level) 

&emsp;&emsp;至此，Hook 这段就结束了，demo：[codeSandBox](https://codesandbox.io/s/didact-8-21ost?file=/src/index.js)

















<Comment />
