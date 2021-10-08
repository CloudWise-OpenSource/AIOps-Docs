---
title: React 组件
next: ./event
prev: ./related
---

关于`React`组件开发

## 组件导出

当前平台无法直接使用`React`的组件。需要依靠`ReactComponent`来包裹产出。如下:

```jsx
imprt React, { Component } from 'react';
import ReactComponent from 'data-vi/ReactComponent';

// 正常的react组件
class MyComponent extends Component {
  render() {
    return (
      // your jsx
    )
  }
}

// 导出由data-vi包裹可用的React组件
export default class WrapperMyComponent extends ReactComponent {
  getReactComponent() {
    return MyComponent;
  }
}

```

## 数据

在这里只阐述如何获取, 更多用法大家见[组件基础](/document/component-2d/related#数据和数据源)

1. `props.data`
   若为每次`render`自动重新计算`data`可直接从`props.data`中获取。  
   为什么这么说的原因是: 数据挂载有一定的延迟性。

2. `componentWillRecieveProps`
   当然每次`data`更新会触发`componentWillRecieveProps`钩子。若大家对每次数据更新都需计算逻辑可在此处监听。

3. `(loaded | dataChange) event`
   由于我们的组件被`ReactComponent`包裹产出。故在当前实例下的`props`中存在`parent`(即真实大屏组件)中使用[事件通信](/document/component-2d/event#组件内部事件)来监听事件变化。

```jsx
this.props.parent.bind("loaded", data => {
  // coding...
});

this.props.parent.bind("dataChange", data => {
  // coding...
});

// 但是记得在组件销毁时对应释放当前的监听
this.props.parent.unbind("xxx", handler);
```

4. `props.parent.getData()`
   可以函数式的调用`getData`方法来获取当前最新数据

## 事件

上面也有提到。我们一般的数据通信在普通的组件中有两种形式 - [传送门](/document/component-2d/event)。这些代码你同样可以写在上面例子中的`WrapperMyComponent`中。写法也是一致的。  
若想直接在`React`组件中使用事件通信。这时需要借助`props.parent`来执行。来个例子:

```jsx
// 省略部分依赖
class MyComponent extends Component {
  constructor(props) {
    super(props);

    this.addEventListener();
  }

  addEventListener = () => {
    const eventBus = this.props.parent;
    // 这里用最常用的reised来举个例子
    eventBus.bind("resized", ({ width, height }) => {
      // do your resized code
    });
  };

  // 省略无关代码
}
```

## defaultProps

实际由于我们的组件不是直出。而且若我们要提供组件切面来进行配置(`props.options`)的话, 一般是会在包裹函数内设置`static defaultOptions`来初始化默认项。这些默认项相当于充当了纯`React`组件中的`defaultProps`。但如果在严谨的开发角度上，你也可以二次保障在组件内部声明`defaultProps`

## 组件生命周期

这里说的是低代码平台独有的一些生命周期`_render`、`_draw`等。若当前你的代码与`React`组件无直接交互, 可直接在包裹函数中正常编写。  
若需要和`React`中的一些事件或者内部状态进行逻辑耦合, 建议使用事件监听来达到同样的效果。基本所有的生命周期都会发射对应的事件。

```jsx
// 省略部分依赖
class MyComponent extends Component {
  constructor(props) {
    super(props);

    this.addEventListener();
  }

  addEventListener = () => {
    const eventBus = this.props.parent;
    // 绘制数据完成生命周期
    eventBus.bind('draw', (data) => {
      // do your draw code
    })
  }

  // 省略无关代码
```
