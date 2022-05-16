---
title: 组件通信
prev: ./react
next: ../advanced/component
---

::: tip
组件通信(联动)主要是通过一套事件配置来完成.
:::

组件中的事件在运行过程中会在特定时机被`trigger`.

## static events = {}

我们提供了一个`events`的常量用于组件订阅一些事件来监听组件内部的事件。比如点击事件、屏幕缩放以及生命周期等。

```js
class Demo extends Component {
  static events = {
    // 记得这里不要用箭头函数，会导致this丢失
    click() {
      this.handleComponentClick();
    }
  };

  handleComponentClick = () => {
    console.log("component click");
  };

  _render() {
    const container = this.getContainer();
    container.html("<span>Hello CW !</span>");
  }
}
```

## this.bind|once|unbind

在必要的的时候可以给组件绑定事件来实现功能扩展.组件类`Component`继承了支撑事件机制的基类`Event`.

- bind(eventName, handler): 绑定事件
- unbind(eventName, handler?): 解绑事件, 若不传 handler 则默认全部解绑
- once(eventName, handler): 绑定仅触发一次事件

```js
class Demo extends Component {
  _construct() {
    this.bind("click", () => this.handleComponentClick());
    this.once("mousemove", () => this.handleComponentMousemove());
  }

  handleComponentClick = () => {
    console.log("component click");
    // 演示效果，我们点击一次之后就解绑
    this.unbind("click");
  };

  handleComponentMousemove = () => {
    console.log("component mouse move");
  };

  _render() {
    const container = this.getContainer();
    container.html("<span>Hello CW !</span>");
  }
}
```

## 组件联动

### 1. 大屏设置进行联动

大屏设置的前提是需要组件内支持, 首先组件内需要书写对应的发射和接收事件代码.

#### 组件添加和接收事件

- ListenEvent

```jsx
import ReactComponent from "data-vi/ReactComponent";
class ListenEvent extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    content: "暂无事件发生"
  };

  componentDidMount() {
    if (this.props.parent) {
      this.props.parent.bind("transpartDate", data => {
        this.setState({
          content: JSON.stringify(data)
        });
      });
    }
  }
  render() {
    return <div style={{ fontSize: 40 }}>{this.state.content}</div>;
  }
}
export default class Component extends ReactComponent {
  getReactComponent() {
    return ListenEvent;
  }
}
```

- EmitEvent

```jsx
import ReactComponent from "data-vi/ReactComponent";
class EmitEvent extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    if (this.props.parent) {
      this.props.parent.trigger("transpartDate", { from: "EmitEvent" });
    }
  };

  render() {
    return (
      <div style={{ fontSize: 40 }} onClick={this.handleClick}>
        click me
      </div>
    );
  }
}

export default class Component extends ReactComponent {
  getReactComponent() {
    return EmitEvent;
  }
}
```

#### 创建大屏并添加事件

- 进入大屏编辑页面
- 右侧选择 事件 Tab
- 事件源选择`trigger`事件的组件(即`EmitEvent`)
- 事件类型选择自定义: 内容填写为当前`trigger`名称
- 操作选择调用组件方法并选择`bind`事件组件(即`ListenEvent`)
- 事件动作选择`tigger`
- 事件类型同第四步

## 组件 DOM 事件

- click
- dbclick
- mousedown
- mouseup
- mousemove
- mouseout
- mouseenter

## 组件内部事件

| 事件名        | 触发时刻           | 携带参数         | 说明                             |
| ------------- | ------------------ | ---------------- | -------------------------------- |
| mounted       | 挂载完成           |                  |                                  |
| unMount       | 卸载完成           |                  |                                  |
| render        | 渲染选项完成       |                  |                                  |
| update        | 更新选项完成       | 要更新的选项     |                                  |
| refresh       | 刷新选项完成       |                  |                                  |
| optionsChange | 选项被改变         | 改变后的全部选项 | 可以作为选项的 filter 使用       |
| draw          | 绘制数据完成       | 绘制的数据       |                                  |
| redraw        | 重绘数据完成       |                  |                                  |
| normalize     | 获取标准化数据     | 标准化后的数据   | 可以作为标准化数据的 filter 使用 |
| dataChange    | 数据被改变         | 改变后的数据     | 可以作为数据的 filter 使用       |
| load          | 开始加载数据源数据 |                  |                                  |
| loaded        | 数据源数据加载完成 | 数据源数据       |                                  |

## FAQ

### 1. 看示例上事件是需要显示的声明吗？

事件处理实际可以分为三种情况

- 借助`events`来注册对应的我们提供的一系列事件
- 非`React`组件可以利用`jquery`或原生事件进行事件处理
- `React`组件直接按照`React`的形式进行事件处理即可
