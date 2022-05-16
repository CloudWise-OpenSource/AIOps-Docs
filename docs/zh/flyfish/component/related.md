---
title: 组件
next: ./event
prev: ./develop
---

::: tip
本篇主要介绍组件的相关开发细节和基础。(注意下面的方法若不特别指出均挂载在当前组件的 <code>props.parent</code>上, 使用前务必做判空处理)
:::

## 组件 DOM 结构

在组件外部存在两层包裹元素。

### 1. `div.dv-component`

控制组件的尺寸,宽高, `zIndex`,透明度等全局配置.

- 属性名: `$wrap`(同样在`props.parent`)
- 获取: `getWrap()`(组件开发过程中，请勿使用当前方法)

### 2. `div.dv-component-container`

组件的内容容器.

- 属性名: `$container`(同样在`props.parent`)
- 获取: `getContainer()`(渲染组件请务必使用此方法)

## 组件配置

在[组件构成](/zh/flyfish/component/basic.html#_10-src-settings-options-js)中, 我们有提`options.json`中可以配置组件的一些几何配置。

### 1. `config`是组件必填的配置项, 配置项包括:

- width: 宽度
- height: 高度
- left: X 坐标
- top: Y 坐标
- name: 显示名
- visible: 是否显示
- class: CSS 类名
- index: 层叠顺序

### 2. 更新配置

我们可以通过组件身上的一些方法来动态更改当前组件的配置。

- 直接设置: `setConfig(config)`
- 设置宽高: `setSize(width = null, height = null)`
- 设置坐标: `setPosition(left, top)`
- 设置显示名: `setName(name)`
- 设置是否显示: `setVisible(visible)`
- 设置 CSS 类名: `setClass(className)`
- 设置组件层叠顺序: `setIndex(index)`

### 3. 默认配置

`defaultConfig`是组件的默认配置, 一般情况下, 只需要提供组件默认的宽和高就可以了, 其他配置不用考虑.当然也可以通过重写`getDefaultConfig`来达到配置默认配置的效果。

## 属性配置

在[组件构成](/zh/flyfish/component/basic.html#_10-src-settings-options-js)中我们指出可以通过文件来显式的绘制属性设置面板, 便于大屏编辑者来利用开发者暴露出的属性来进行客制化编辑。当然开发者也可以在某些逻辑情况下自主的调用方法来更新`options`.

- `setOptions(options)`: 此方法并不会把选项立即应用到组件上, 还需要再调用`refresh()`方法, 才能把新的选项应用到组件上.
- `update(options)`: 应用选项立即生效
- `defaultOptions`: 定义组件默认的选项, 一般情况下, 需要把组件支持的所有选项都写在`defaultOptions`中
  - 能让使用者一眼能看懂组件都支持哪些选项
  - 省去了组件渲染时的各种选项是否存在的判断(静态属性)
- `getDefaultOptions`: 可通过重写此方法达到和上面属性一样的效果.

## 数据和数据源

数据是数据可视化的核心, 大部分组件都是为了展示数据而创造. 选项`options`是控制组件的显示样式, 但是数据才是组件最终要展示的内容. 组件会监听数据源的数据变化, 每当数据源的数据更新时, 组件就会重新绘制数据.

### 1. 数据要求:

- 组件的数据来源于数据源, 且每个组件只能绑定一个数据源, 每个数据源只能被一个组件绑定.
- 数据源的数据必须是二维数组(集合), 并且组件能识别的数据也必须是二维数组.
- 默认情况下, 组件会绑定一个默认的静态数据源`(JSON)`,并且内置了静态数据, 以供用户能看到组件的默认样子.

### 2. 设置数据(源)

- 设置数据源:
  ```typescript
  enum dataSourceType {
    JSON = 'json',
    MODEL = 'model'
  }
  interface dataSourceOptions {
    [_: string]: any
  }
  interface dataSourceConfig {
    mapping: {
      [_: string]: any
    }
  }
  setDataSource(
    type: dataSourceType,
    options: dataSourceOptions,
    dataConfig: dataSourceConfig
  )
  ```
- 加载数据:  
  `load`方法为组件加载数据(每调用一次就会刷新一个数据, 所以`load`方法也能做为刷新数据使用)
- 组件内部绘制非数据源数据时，有以下两种方法:
  - `setData`: 此方法并不会让组件立即把数据绘制到界面上, 还需要调用`redraw`方法
  - `draw`: 应用数据立即生效

### 3. 关于默认数据源

如果当前组件需要展示数据, 那么务必要重写`getDefaultData`来返回组件的默认静态数据。格式为`object[]`

## 组件更新

要区分什么时候全量更新，什么时候增量更新

### 1. 全量更新

同上面提到的`refresh`和`render`都为全量更新。实际`refresh`内部也是调用了`render`方法.

### 2. 增量更新

`update`为增量更新，只会更新对应传入的部分。

## 组件钩子

组件基类里, 就有很多\_开头的方法, 有些是作为钩子方法, 提供给子组件使用的.

|  钩子名称   | 调用时机(父) |               调用时机               |
| :---------: | :----------: | :----------------------------------: |
| \_construct | constructor  |              构造时调用              |
|   \_mount   |    mount     |              挂载时调用              |
|  \_unMount  |   unMount    |              卸载时调用              |
|  \_render   |    render    |              渲染时调用              |
|  \_update   |    update    |            更新选项时调用            |
|  \_refresh  |   refresh    |            刷新选项时调用            |
|   \_draw    |     draw     |            绘制数据时调用            |
|  \_redraw   |    redraw    |            重绘数据时调用            |
| \_normalize |  normalize   |         获取标准化数据时调用         |
|  \_destroy  |   destroy    |            组件销毁时调用            |
| \_connectTo |      -       | 联动事件发生时, 获取变量值的钩子方法 |