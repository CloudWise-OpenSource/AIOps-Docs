---
title: 组件进阶
prev: ./
next: ./screen
---

## 创建一个组件

#### 1、新建项目

进入 应用创建 -> 项目管理 -> 点击新增

<img src="/images/flyfish/guide/component/add-organize.png" width="40%" align="middle" />

- 项目名称
- 所属行业
- 描述
  填写以上内容，然后点击保存

<!-- * 唯一标识会创建组件开发目录，此组织下新建的组件会存放再以唯一标识为名称的目录下。 -->

#### 2、新建组件

进入 应用创建 -> 组件开发 -> 点击添加组件

<img src="/images/flyfish/guide/component/component-create.png" width="40%" align="middle" />

- 组件名称
- 组件类别（项目组件还是基础组件，基础组件所有项目都能引用）
- 所属项目
- 组件分类（组件大类，是2D或者3D，以及对应哪种类型，如2D--柱状图）
- 标签（组件标签，可以根据组件特点自定义标签，要做到简洁明了）
- 描述

填写以上内容，然后点击保存。

##### 同学，我们这时候已经新建完一张定制化组件了，赶紧进行来开发定制化组件吧。

## 组件目录

```tree
├── build
│   ├── webpack.config.dev.js
│   └── webpack.config.production.js
├── package.json
├── options.json
├── .gitignore
├── env.js
└── src
    ├── Component.js
    ├── main.js
    ├── setting.js
    └── settings
        ├── data.js
        └── options.js
```

## 文件详解

#### build/webpack.config.dev.js

组件开发阶段保存对组件进行 webpack 编译打包扩展配置文件，具体请参考[更改组件编译配置](#更改组件编译配置)

#### build/webpack.config.production.js

组件导出阶段对组件进行 webpack 编译打包扩展配置文件，具体请参考[更改组件编译配置](#更改组件编译配置)

#### package.json

组件信息和依赖，具体请参考[添加组件依赖](#添加组件依赖)

#### options.json

组件开发底部的组件预览大屏的预设，具体请参考[增加组件开发大屏预设](#增加组件开发大屏预设)

#### .gitignore

git上传省略设置，具体参考[git官方文档](https://git-scm.com/docs/gitignore)

#### env.js

大屏配置，当前组件开发大屏环境配置

#### src/main.js

组件注册入口，组件开发会自动产生此文件，如务必要不需要更改。具体请参考[注册组件](#注册组件)

#### src/Component.js

组件代码文件，仅支持原生 Javascript 进行开发，请参考[开发组件](#组件开发)。如使用 react 开发，请参考[React 开发组件](#开发组件使用react)

#### src/setting.js

组件设置区域注册入口，组件开发会自动产生此文件，如组件有需要开发自定义配置和数据绑定，请打开此文件内注释掉的注册内容

#### src/setting/options

组件设置区域组件，需使用 react 开发，具体请参考[增加组件配置](#增加组件自定义设置)

#### src/setting/data

组件设置数据区域组件，需使用 react 开发，具体请参考[增加组件数据配置](#开发组件绑定数据源)

## 注册组件

拖拽组件到大屏，大屏会根据组件在大屏上的注册信息，渲染指定的组件。那么，开发组件第一步，我们就应该先注册组件，把组件的信息挂载到大屏。

新建组件会直接创建 src/main.js 文件，内置为创建组件的唯一标识字段为注册组件的标识。默认情况下不需要更改，我们只需要了解，这个文件是在大屏上注册当前组件，能够让大屏正常的渲染组件。

```javascript
import { registerComponent } from "data-vi/components";

import Component from "./Component";

registerComponent("Test", Component);
```

这样，我们就往大屏上注册了一个 Test 组件，继续往下来编辑 Component 来开发组件吧。

## 组件开发

开发组件需要依赖于 data-vi/Component 基类，基类中内置了很多 API、生命周期、渲染机制等，详细请参考[组件基础](/zh/flyfish/component/related.html)，以下是一个 js 原生开发基本代码：

```javascript
import Component from "data-vi/Component";

export default class Test extends Component {
  // 默认配置
  static defaultConfig = {};
  // 默认选项
  static defaultOptions = {};
  // 系统事件
  static events = {};
  // 是否加载css文件 如当前组件没有样式文件，设置为false
  static enableLoadCssFile = false;

  // 获取默认选项
  getDefaultOptions() {
    return this.constructor.defaultOptions;
  }

  // 获取默认事件
  getDefaultData() {
    return [];
  }

  /**
   * 钩子方法 组件mount挂载时调用
   */
  _mount() {
    const container = this.getContainer();
    container.html("Hello FlyFish !");
    container.css({ color: "#FFF" });
  }
}
```

## 开发组件使用 React

React 开发组件需要依赖于 data-vi/ReactComponent 基类，data-vi/ReactComponent 基类是由 data-vi/Component 基类再扩展出来的，内置 data-vi/Component 基类所有 API 和生命周期，底层原理为在 data-vi/Component 的\_mount 生命周期通过 API **getReactComponent** 获取到 React 组件使用 ReactDom 将 React 组件挂载在组件 DOM 上，如有特殊需求，也可以自行挂载，或者其他框架也可挂载。

以下是一个 React 开发基本代码：

```javascript
import ReactComponent from "data-vi/ReactComponent";
import React from "react";

export default class Test extends ReactComponent {
  // 默认配置
  static defaultConfig = {};
  // 默认选项
  static defaultOptions = {};
  // 系统事件
  static events = {};
  // 是否加载css文件 如当前组件没有样式文件，设置为false
  static enableLoadCssFile = false;

  // 获取默认选项
  getDefaultOptions() {
    return this.constructor.defaultOptions;
  }

  // 获取默认事件
  getDefaultData() {
    return [];
  }

  getReactComponent() {
    return ReactTest;
  }
}

class ReactTest extends React.Component {
  render() {
    return "Hello flyFish!";
  }
}
```

对于 Component 下挂载的 React 组件，支持使用 React Hooks 进行开发，React 组件内组件，参考 React 相关文档开发，理论上没有限制。

组件 API 和组件生命周期，请参考[组件基础](/zh/flyfish/component/related.html)

## 增加组件自定义设置

公共组件的可配置要求比较高、配置项也很多，那么对于定制化组件，再有需要更改配置使之呈现不同效果的组件需求时，也可以抽离至组件 options 中，使之能够进行动态配置。

### 注册组件设置面板

新建组件会直接创建 src/setting.js 文件，内置为创建组件的唯一标识字段为注册组件设置面板的标识。默认情况下只需要将注释的内容打开，这个文件是在大屏上注册当前组件的设置面板，能够让大屏正常的渲染组件设置面板。

注册挂载的面板组件没有路径限制，新建组件会直接创建 src/settings/setting.js 文件，可直接使用，也可另外创建。

```javascript
import { registerComponentOptionsSetting } from "datavi-editor/adapter";

import OptionsSetting from "./settings/options";

registerComponentOptionsSetting("Test", OptionsSetting);
```

### 开发组件设置面板

设置面板组件使用 React + antd 开发，依赖于 datavi-editor/templates 下 ComponentOptionsSetting，ComponentOptionsSetting 基类主要内部提供挂载等操作，提供 getTabs 供自定义扩展设置面板使用。datavi-editor/templates 支持的组件请参考[antd.3x](https://3x.ant.design)。

以下为设置面板代码示例：

```javascript
import React from "react";
import { ComponentOptionsSetting, Input } from "datavi-editor/templates";

export default class OptionsSetting extends ComponentOptionsSetting {
  getTabs() {
    return {
      title: {
        label: "配置",
        content: () => this.renderSetting()
      }
    };
  }
  renderSetting() {
    let { options } = this.props;
    return (
      <Form>
        <FormItem label="页大小">
          <Input
            value={options.title}
            onChange={val => this.updateOptions({ title: e.target.value })}
          />
        </FormItem>
      </Form>
    );
  }
}
```

## 开发组件绑定数据源

组件默认不支持数据源绑定，需要组件注册数据源面板。

### 注册组件数据源面板

新建组件会直接创建 src/setting.js 文件，内置为创建组件的唯一标识字段为注册组件设置数据源面板的标识。默认情况下只需要将注释的内容打开，这个文件是在大屏上注册当前组件的数据源设置面板，能够让大屏正常的渲染组件数据源设置面板。

注册挂载的面板组件没有路径限制，新建组件会直接创建 src/settings/data.js 文件，可直接使用，也可另外创建。

```javascript
import { registerComponentDataSetting } from "datavi-editor/adapter";

import DataSetting from "./settings/data";

registerComponentDataSetting("Test", DataSetting);
```

### 开发组件数据源面板

数据源面板组件使用 React + antd 开发，依赖于 datavi-editor/templates 下 ComponentDataSetting，ComponentDataSetting 基类主要内部提供挂载等操作。datavi-editor/templates 支持的组件请参考[antd.3x](https://3x.ant.design)。

以下为设置面板代码示例：

```javascript
import React from "react";
import { ComponentDataSetting } from "datavi-editor/templates";
export default class DataSetting extends ComponentDataSetting {
  render() {
    const { fields, config } = this.props;
    return <div></div>;
  }
}
```

## 组件使用大屏全局变量

对于组件中有如下两种访问方式访问：

- 全局变量访问方式

```javascript
window.DATAVI_ENV.globalOptions;
```

- 加载依赖包访问

```javascript
import config from "data-vi/config";
config.globalOptions;
```

## 组件使用大屏请求前缀

组件中有如下访问方式访问：

- 加载依赖包访问

```javascript
import config from "data-vi/config";
config.componentApiDomain;
```

## 组件发送 http 请求

默认请使用组件数据源进行数据交互，不建议直接使用 http 请求获取数据，符合以下情况建议使用：

- 组件需要发送多个 http 请求，且接口不可合并。
- 需要先进行鉴权操作，才能发送 http 请求的，且鉴权操作不能放在后端进行的。
- 需要串行化发送 http 请求，接口相互依赖，且依赖部分不能放在后端进行的。

以下为发送 http 请求示例：

```javascript
import { getHttpData } from "data-vi/api";
import { componentApiDomain } from "data-vi/config";

getHttpData(componentApiDomain + url, "POST", {})
  .done(request => {})
  .fail((request, xhr, msg) => {});
```

## 添加组件依赖

修改 package.json 文件，添加依赖到指定位置，保存文件后，点击右上角安装依赖按钮，即可下载相关依赖。

package.json 文件示例：

```json
{
  "name": "Test",
  "version": "v1.0.0",
  "description": "",
  "dependencies": {},
  "devDependencies": {},
  "scripts": {
    "build-dev": "NODE_ENV=dev ../../node_modules/.bin/webpack --config ./build/webpack.config.dev.js",
    "build-production": "NODE_ENV=production ../../node_modules/.bin/webpack --config ./build/webpack.config.production.js"
  }
}
```

## 增加组件开发大屏预设

便捷组件开发中，组件频繁修改编译刷新预览区域，预览区域更改的设置不能被保留。修改 options.json 预设设置即可保留设置。大屏预设具体内容，请参考[大屏 JSON 解析]()

### 预设基础内容

```json
{
  "options": {
    "width": 1920,
    "height": 1080,
    "name": "本地测试大屏",
    "scaleMode": "origin",
    "backgroundColor": "#162C51",
    "backgroundImage": "",
    "css": ""
  },
  "events": [],
  "functions": [],
  "dataSources": [],
  "components": []
}
```

### 预设增加当前开发中组件

只能增加当前开发的组件，其他组件并未注册在此预览区域，组件注册请参考[注册组件](#注册组件)

往 options.json 内 components 增加如下对象：

- type 当前组件唯一标识
- id 参考格式可随意定制
- config 组件基础设置，具体配置项可参考[组件基础](/zh/flyfish/component/related.html#组件配置)
- options 组件的自定义设置
- dataSource 组件数据源 具体可参考[组件绑定数据源](/zh/flyfish/advanced/screen.html#组件绑定数据源)

```json
{
  "type": "Test",
  "id": "UBKO-08U1-C9L4-6OJF-3OMB-3OFN",
  "config": {
    "left": 534,
    "top": 242,
    "width": 883,
    "height": 420,
    "index": 0
  },
  "options": {
    "defaultActiveName": "基础监控"
  },
  "dataSource": {
    "type": "json",
    "options": {
      "json": "{}"
    }
  }
}
```

### 预设增加全局数据集

往 options.json 内 dataSources 增加如下对象：

- name 数据集唯一标识
- type 对应数据集类型下拉框三个值（json、model、http）
- options 数据集自定义配置，可配置项请参考[数据集基本构成](/zh/flyfish/advanced/screen.html#数据集基本构成)

```json
{
  "name": "",
  "type": "json",
  "options": {}
}
```

## 更改组件编译配置

适用于需要更改 webpack 打包编译配置。组件编译已内置完善的 webpack 配置，如有特殊需求，需要追加 webpack 配置，可根据实际需求修改 build/webpack.config.dev.js 和 build/webpack.config.production.js。

组件编译分为 build-dev 和 build-production。build-dev 为组件开发中保存之后组件进行编译的命令，组件开发中实时预览展示组件使用，默认含有 sourceMap。build-production 为组件导出时进行组件编译打包的命令，默认不含有 sourceMap。

**部分追加**配置的情况下，更改 build/webpack.config.dev.js 和 build/webpack.config.production.js 文件，即可满足需求。

build/webpack.config.dev.js 示例如下：

```javascript
const baseConf = require("../../../webpack.config.base");
const path = require("path");
const _ = require("lodash");

module.exports = _.defaultsDeep(
  {
    // 用于生成源代码的mapping
    devtool: "#source-map",
    mode: "development",
    entry: {
      "Test/main": "./src/main.js",
      "Test/setting": "./src/setting.js"
    },
    output: {
      // 编译的目录
      path: path.resolve(__dirname, "../") + "/components/"
    }
  },
  baseConf
);
```

build/webpack.config.production.js 示例如下：

```javascript
const baseConf = require("../../../webpack.config.base");
const path = require("path");
const _ = require("lodash");
const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = _.defaultsDeep(
  {
    mode: "production",
    entry: {
      "Test/main": "./src/main.js",
      "Test/setting": "./src/setting.js"
    },
    output: {
      // 编译的目录
      path: path.resolve(__dirname, "../") + "/release/"
    },
    optimization: {
      minimizer: [
        // 优化js
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: false,
          uglifyOptions: {
            output: {
              // 最紧凑的输出
              beautify: false,
              // 删除所有的注释
              comments: false
            },
            compress: {
              // 在UglifyJs删除没有用到的代码时不输出警告
              warnings: false,

              drop_console: false,
              // 内嵌定义了但是只用到一次的变量
              collapse_vars: true,
              // 提取出出现多次但是没有定义成变量去引用的静态值
              reduce_vars: true
            }
          }
        })
      ]
    },
    plugins: []
  },
  baseConf
);
```

**全部定制**配置的情况下，重写 build/webpack.config.dev.js 和 build/webpack.config.production.js 文件。需要遵循以下规范即可全部定制 wenpack 打包编译配置。

以下配置必须保留，否则组件不能被大屏渲染：

```javascript
{
  externals: {
        react: 'React',
        moment: 'moment',
        'react-dom': 'ReactDom',
        'prop-types': 'PropTypes',
        jquery: 'jQuery',
        'jquery-ui': 'jQuery',
        'data-vi': 'dv',
        'data-vi/Component': 'dv.adapter.Component',
        'data-vi/ReactComponent': 'dv.adapter.ReactComponent',
        'data-vi/Event': 'dv.adapter.Event',
        'data-vi/Model': 'dv.adapter.Model',
        'data-vi/Screen': 'dv.adapter.Screen',
        'data-vi/config': 'dv.adapter.config',
        'data-vi/helpers': 'dv.adapter._',
        'data-vi/storage': 'dv.adapter',
        'data-vi/locale': 'dv.adapter',
        'data-vi/modal': 'dv.adapter',
        'data-vi/components': 'dv.adapter',
        'data-vi/models': 'dv.adapter',
        'data-vi/resources': 'dv.adapter',
        'data-vi/requirejs': 'dv.adapter',
        'datavi-editor/adapter': 'dvEditorAdapter',
        'datavi-editor/templates': 'dvEditorAdapter.templates',
        'data-vi/api': 'dv.adapter',
    },
}
```

development 情况下，需要输出的目录为 **path.resolve(\_\_dirname, '../') + '/components/'**

production 情况下，需要输出的目录为 **path.resolve(\_\_dirname, '../') + '/release/'**
