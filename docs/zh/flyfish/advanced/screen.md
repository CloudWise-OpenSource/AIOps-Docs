---
title: 大屏进阶
prev: ./component
next: ../component/
---

## 创建一个大屏

<!-- #### 1、根据项目新建标签

进入 数据应用平台 -> 系统管理 -> 标签管理 -> 点击新建标签

<img src="/images/flyfish/guide/screen/create-tag.png" width="40%" align="middle" />

- 标签名称
- 标签描述
  填写以上内容，然后点击保存 -->

<!-- #### 1、新建大屏 -->

进入 应用创建 -> 应用开发 -> 点击添加应用

<img src="/images/flyfish/guide/screen/create-screen.png" width="40%" align="middle" />

- 应用名称
- 所属项目
- 标签（应用标签，可以根据应用自定义标签）
- 开发状态（主要供给给大屏统计使用，可统计当前正在开发中的大屏，谨慎填写，内容有：开发中、测试中、已交付、Demo）

  填写以上内容，然后点击保存（应用封面需要在应用编辑页面上传）。

##### 同学，我们这时候已经新建完一张大屏了，赶紧开始设计大屏吧。

## 大屏区域划分

<img src="/images/flyfish/getting-started/edite-page.png" width="70%" align="middle" />

大屏编辑区域从左到右依次划分为：

- 页面组件列表
- 组件区域
- 实时预览区
- 操作区
- 设置区

### 1、页面组件列表

展示当前应用已使用组件列表，可直接在列表选中对应组件进行配置以及操作。

### 2、组件区域

#### 划分为两个分类：

- 基础组件
  - 内置配置化程度高、可复用的组件
- 项目组件
  - 针对当前大屏定制化开发的组件

#### 功能：

拖动相应分类下组件到实时预览区域，即可添加组件到大屏中。

### 3、实时预览区

对已经拖拽到预览区组件的进行再拖拽和再操作功能

### 4、操作区域

针对实时预览区域进行操作

#### 包含以下可执行操作

- 撤销
  - 回退操作到上一步
- 重做
  - 回退到页面打开时候的大屏初始
- 复制
  - 复制当前选中的组件到粘贴板
- 粘贴
  - 粘贴粘贴板中的组件
- 向左移动
  - 向左移动当前选中的组件
- 向右移动
  - 向右移动当前选中的组件
- 向上移动
  - 向上移动当前选中的组件
- 向下移动
  - 向下移动当前选中的组件
- 至顶层
  - 设置当前组件层级结构到最顶层
- 至底层
  - 设置当前组件层级结构到最底层
- 分组
  - 按住 shift 键多选的组件组合成组，组合成组之后不可单个编辑组件
- 解组
  - 接触当前选中的组件组
- 删除
  - 删除当前选中的组件
- 当前尺寸调整
  - 调整实时预览区的尺寸
- 缩小到适应尺寸
  - 缩小实时预览区的尺寸到适应当前屏幕的尺寸
- 显示原始尺寸
  - 显示实时预览区设置的不进行缩放的原始尺寸
- 开启/关闭编辑模式
  - 默认开启编辑模式，关闭情况下，试试预览区内的所有组件不可选中（适配需要进行测试组件点击等事件测试的情况）

### 5、设置区

默认为大屏设置，选中组件后，展示为当前选中组件的可配置项

#### 大屏设置

- 设置
- 事件
- 函数
- 数据集

#### 组件设置

- 样式
- 数据


## 设置大屏

### 1、设置宽高

点击大屏旁白部分，设置区域中设置大屏宽高，从下拉选项中选择相应的宽高，如没有合适的宽高，可直接输入回车即可设置。

<img src="/images/flyfish/guide/screen/screen-design-size.png" width="40%" align="middle" />

### 2、设置缩放方式

点击大屏旁白部分，设置区域中设置缩放方式，支持如下缩放方式

- 不缩放（默认值）
- 等比缩放
- 适应宽度
- 适应高度
- 全屏铺满

<img src="/images/flyfish/guide/screen/screen-design-scaleMode.png" width="40%" align="middle" />

### 3、设置组件请求前缀

点击大屏旁白部分，设置区域中设置组件请求前缀，在组件发出请求中会组合接口和前缀发送请求，请求前缀要求必须包含 http://或 https://。

<img src="/images/flyfish/guide/screen/screen-design-componentApiDomain.png" width="40%" align="middle" />

### 4、设置全局变量

点击大屏旁白部分，设置区域中设置全局变量，设置格式要求为 JSON 对象格式。

<img src="/images/flyfish/guide/screen/screen-design-ENVGlobalOptions.png" width="40%" align="middle" />

### 5、设置页面

点击大屏旁白部分，设置区域中设置页面，可修改大屏名称和浏览器页签 icon。

<img src="/images/flyfish/guide/screen/screen-design-page.png" width="40%" align="middle" />

### 6、设置主题配色

点击大屏旁白部分，设置区域中设置主题配色，可设置背景颜色、背景图片，背景图片是否平铺操作。

<img src="/images/flyfish/guide/screen/screen-design-background.png" width="40%" align="middle" />

### 7、设置全局 css

点击大屏旁白部分，设置区域中设置自定义 css，设置的自定义 css 会挂载在可视化预览区域全局，可设置全局 css 覆盖组件默认样式，但也可能会影响组件正常展示，请设置完保证自测充分。

## 自定义函数

点击大屏旁白部分，设置区域中点击函数，对函数的增删改查。设置的自定义函数只能提供给当前大屏使用，常见的用法是提供给大屏的事件使用。

<img src="/images/flyfish/guide/screen/screen-function.png" width="40%" align="middle" />

### 新增函数

点击新增函数 -> 编辑函数 -> 点击确认

<img src="/images/flyfish/guide/screen/screen-function-modal.png" width="40%" align="middle" />

- 函数名称（name）
- 函数参数（args）
- 函数体（body）

保存的数据结构为:

```json
{
  "name": "sayHello",
  "body": "console.log('hello '+name)",
  "args": "name"
}
```

示例：

<img src="/images/flyfish/guide/screen/screen-function-modal-demo.png" width="40%" align="middle" />

## 自定义事件

主要用途为监听大屏或者组件的行为，触发相应的动作。常用于大屏和组件的交互、组件间相互通信。

点击大屏旁白部分，设置区域中点击事件，设置的自定义事件只能提供给当前大屏使用。

<img src="/images/flyfish/guide/screen/screen-event.png" width="40%" align="middle" />

### 事件基本构成

#### name 事件名称

作为事件的标识，大屏内设置不可重复

#### source 事件源

触发事件产生的源头，当前支持如下事件源：

- 大屏（app）
- 组件（component::组件 id）

#### type 事件类型

事件源产生的事件包含鼠标、屏幕、自定义事件等，主要有以下类型

- 大屏
  - 鼠标移动 mousemove
  - 鼠标按下 mousedown
  - 鼠标松开 mouseup
  - 鼠标移出 mouseleave
  - 鼠标移入 mouseenter
  - 挂载完成 mounted
  - 全屏 fullScreen
  - 退出全屏 exitFullScreen
  - 浏览器窗口尺寸变化 resize
  - 自定义（大屏类实例 trigger 的事件，理论上以上鼠标、屏幕等事件都可由自定义设置）
- 组件
  - 鼠标移动 mousemove
  - 鼠标按下 mousedown
  - 鼠标松开 mouseup
  - 鼠标移出 mouseleave
  - 鼠标移入 mouseenter
  - 鼠标双击 dblclick
  - 挂载完成 mounted
  - 自定义（组件类实例 trigger 的事件，理论上以上鼠标等事件都可由自定义设置）

#### action 动作

当事件源触发相应事件，会触发配置的相应动作，主要有以下动作类型：

- 调用大屏方法 callScreenMethod
  - fullScreen 全屏
  - exitFullScreen 退出全屏
  - resize 重新计算浏览器窗口尺寸
  - trigger 自定义（提供给监听大屏事件的组件实例使用。[查看组件如何监听大屏消息]()）
- 调用自定义函数 callFunction
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 执行相应的[自定义函数](#自定义函数)。
- 调用组件方法 callComponentMethod
  - draw 重新绘制
  - setSize 调整组件大小
  - setPosition 调整组件位置
  - load 加载数据
  - show 显示组件
  - hide 隐藏组件
  - trigger 自定义（组件实例自身 trigger 消息，如果组件实例自身 bind 接收消息，则可触发执行 bind 的回调。也可以由此触发到另一个事件的产生，请谨慎配置组件实例串行事件，容易产生事件死循环）

#### options 事件触发动作的参数

以下动作需要配置参数：

- 调取自定义函数
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 需要配置具体调取的函数
- tigger
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 需要配置具体发出的消息

### 新增事件

点击新增事件 -> 输入事件名称 -> 按步骤配置事件 -> 配置完成点击确认

<img src="/images/flyfish/guide/screen/screen-event-add.png" width="40%" align="middle" />

保存的数据结构为:

```json
{
  "name": "事件",
  "source": "component::DMOI-3TN1-F2LO-1GI1-9RGD-91GE",
  "type": "onDataActiveChanged",
  "action": "callComponentMethod",
  "options": {
    "component": "GJ3E-FIU1-F34I-AGFE-U3B6-Q0Q2",
    "method": "trigger",
    "args": ["changeOrganName"]
  }
}
```

## 全局数据集

提供大屏数据支撑，主要解决多组件公用数据情况，支持 JSON、模型、http 请求类型。[组件使用全局数据集](#组件绑定数据源)

点击大屏旁白部分，设置区域中点击数据集，设置的全局数据集只能提供给当前大屏使用。

<img src="/images/flyfish/guide/screen/screen-datasource.png" width="40%" align="middle" />

### 数据集基本构成

#### name 数据集名称

作为数据集的标识，大屏内设置不可重复

#### type 数据集类型

支持 JSON、模型、http 请求类型

#### options 数据集参数

不同类型的数据集 options 包含的内容不同

##### JSON （类型:json）

- json JSON 字符串格式

```javascript
{
  json: "";
}
```

<img src="/images/flyfish/guide/screen/screen-datasource-json.png" width="40%" align="middle" />

##### 模型（类型:model）

- model 模型 id（由数据分析平台提供）
- interval 定时刷新时间（单位：秒）
- vars 请求携带的变量（JSON 字符串格式）

```javascript
{
  model: "",
  interval: 0,
  vars: ""
}
```

<img src="/images/flyfish/guide/screen/screen-datasource-model.png" width="40%" align="middle" />

##### http（类型:http）

- url 请求的 url（如没有携带 http://或者 https://前缀，则会自动组合大屏设置的 componentApiDomain 参数）
- method 请求类型（支持 GET 或者 POST）
- interval 定时刷新时间（单位：秒）
- vars 请求携带的变量（JSON 字符串格式）
- apiSuccessCode 请求是否成功的 code 码（默认为 window.DATAVI_ENV.apiSuccessCode 的值，默认为 200，设置后以设置的为准）
- getDataField 从数据中解析值（默认为 data，设置后以设置的为准）

```javascript
{
  url: '',
  method: 'GET',
  interval: 0,
  vars: '',
  apiSuccessCode: 200,
  getDataField: 'data'
}
```

<img src="/images/flyfish/guide/screen/screen-datasource-http.png" width="40%" align="middle" />

### 新增数据集

点击新增数据集 -> 输入数据集名称 -> 配置数据集 -> 点击确认

<img src="/images/flyfish/guide/screen/screen-datasource-json.png" width="40%" align="middle" />

保存的数据结构为:

```json
{
  "name": "",
  "type": "json",
  "options": {}
}
```

## 添加组件至大屏

### 拖动组件

从组件区域拖动组件到实时预览区域，即可在大屏上添加一个组件。

<img src="/images/flyfish/guide/screen/screen-add-component.png" width="40%" align="middle" />

### 调整组件大小位置

选中组件，即可使用鼠标进行拖拽改变位置

选中组件，组件出现矩形选中框，拖拽矩形任意点即可改变组件宽度高度。

<img src="/images/flyfish/guide/screen/screen-component-move.png" width="40%" align="middle" />

当公共组件满足不了需求，查看如何开发定制组件。

## 配置组件

点击选中实时预览区域中的组件，右侧即可出现组件设置区域。

### 1、设置宽高位置

点击选中实时预览区域中的组件，设置区域中设置组件宽高，输入相应的宽高。

在实时预览区域拖拽改变组件宽高位置与此处输入框数值一致。

<img src="/images/flyfish/guide/screen/component-design-size.png" width="40%" align="middle" />

### 2、设置 css 类名

点击选中实时预览区域中的组件，设置区域中设置组件 css 类名

可使用在[大屏设置中设置的自定义 css](#设置大屏)。

<img src="/images/flyfish/guide/screen/component-design-css.png" width="40%" align="middle" />

### 3、设置组件默认显示隐藏

点击选中实时预览区域中的组件，设置区域中设置组件默认显示隐藏

<img src="/images/flyfish/guide/screen/component-design-show-hidden.png" width="40%" align="middle" />

### 4、其他组件配置

根据组件不同和实际需求，配置个性化组件。

<img src="/images/flyfish/guide/screen/component-design-custom.png" width="40%" align="middle" />

## 组件绑定数据源

提供组件数据支撑，支持组件绑定数据，支持 JSON、模型、http 请求、绑定全局数据集。

点击选中实时预览区域中的组件，右侧即可出现组件设置区域，选择数据标签。

<img src="/images/flyfish/guide/screen/component-design-data.png" width="40%" align="middle" />

### 数据绑定基本构成

#### type 数据类型

支持 JSON、模型、http 请求类型、全局数据集

#### options 数据集参数

不同类型的数据集 options 包含的内容不同

##### JSON（类型:json）

- json JSON 字符串格式

```javascript
{
  json: "";
}
```

<img src="/images/flyfish/guide/screen/component-design-data-json.png" width="40%" align="middle" />

##### 模型（类型:model）

- model 模型 id（由数据分析平台提供）
- interval 定时刷新时间（单位：秒）
- vars 请求携带的变量（JSON 字符串格式）

```javascript
{
  model: "",
  interval: 0,
  vars: ""
}
```

<img src="/images/flyfish/guide/screen/component-design-data-model.png" width="40%" align="middle" />

##### http（类型:http）

- url 请求的 url（如没有携带 http://或者 https://前缀，则会自动组合大屏设置的 componentApiDomain 参数）
- method 请求类型（支持 GET 或者 POST）
- interval 定时刷新时间（单位：秒）
- vars 请求携带的变量（JSON 字符串格式）
- apiSuccessCode 请求是否成功的 code 码（默认为 window.DATAVI_ENV.apiSuccessCode 的值，默认为 200，设置后以设置的为准）
- getDataField 从数据中解析值（默认为 data，设置后以设置的为准）

```javascript
{
  url: '',
  method: 'GET',
  interval: 0,
  vars: '',
  apiSuccessCode: 200,
  getDataField: 'data'
}
```

<img src="/images/flyfish/guide/screen/component-design-data-http.png" width="40%" align="middle" />

##### 全局数据集（类型:screenDataSource）

- dataSourceName 数据集名称
- transferGlobalDataFunc 解析全局数据集的方法

```javascript
{
  dataSourceName: "",
  transferGlobalDataFunc: "function transferGlobalData(data) { return data; }"
}
```

<img src="/images/flyfish/guide/screen/component-design-data-global.png" width="40%" align="middle" />

### 编辑数据后点击应用

保存的数据结构为:

```json
"dataSource": {
  "type": "json",
  "options": {

  }
}
```
