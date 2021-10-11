---
title: 组件构成
prev: ../advanced/component
next: ./develop
---

## 目录构成

```tree
├── build
│   ├── webpack.config.dev.js
│   └── webpack.config.production.js
├── package.json
├── options.json
├── assets
└── src
    ├── Component.js
    ├── index.less
    ├── main.js
    ├── setting.js
    └── settings
        ├── data.js
        └── options.js
        └── event.js
```

### 1. build/webpack.config.dev.js

该文件主要为开发阶段 webpack 配置使用

### 2. build/webpack.config.production.js

该文件主要为打包阶段使用(用作定制化包行为)

### 3. package.json

每个组件可以安装自己的依赖进行管理。

::: tip
若使用在线开发, 使用独立依赖的情况下记得点击右上角的安装依赖进行预环境内的依赖安装, 避免后面保存代码导致服务打包出错。
:::

### 4. assets

主要存放各种静态资源

### 5. src/Component.js

组件 code

### 6. src/index.less

组件样式

> 若组件内部静态变量`enableLoadCssFile`为`false`则会出现样式丢失的问题。解决办法为切换为`true`或更改其他样式添加方式, 比如`style-component` or `jquery style head`.

### 7. src/main.js(`entry`)

组件入口文件。在该文件内主要进行组件的注册。核心代码如下:

```jsx
import { registerComponent } from "data-vi/components";

// 引入对应的组件
import Component from "./Component";

// 利用大屏的注册函数进行组件注册
registerComponent("componentName", Component);
```

### 8. src/setting.js(`entry`)

组件配置、数据、事件注册入口。在该文件内将`settings`文件夹内的配置、事件和数据注册到大屏组件中, 核心代码如下:

```jsx
import {
  registerComponentEvents,
  registerComponentOptionsSetting,
  registerComponentDataSetting
} from "datavi-editor/adapter";

import DataSetting from "./settings/data";
import OptionsSetting from "./settings/options";
import EventSetting from "./settings/event";

// 利用大屏的对应函数将对应内容注册到响应组件中
registerComponentOptionsSetting("componentName", OptionsSetting);
registerComponentDataSetting("componentName", DataSetting);
registerComponentEvents("componentName", EventSetting);
```

### 9. src/settings/data.js

用于为组件在开发过程中大屏预览点击之后数据面板设置, 核心代码如下:

```jsx
import React from "react";

import {
  ComponentDataSetting,
} from "datavi-editor/templates";

export default class DataSetting extends ComponentDataSetting {
  render() {
    return (
      // 数据配置部分
    );
  }
}
```

### 10. src/settings/options.js

用于为组件在开发过程中大屏预览点击之后样式属性面板设置, 核心代码如下:

```jsx
import React from "react";
import { ComponentOptionsSetting } from "datavi-editor/templates";

export default class OptionsSetting extends ComponentOptionsSetting {
  getTabs() {
    return {
      // 个性化配置当前组件配置菜单
    };
  }
}
```

### 11. src/settings/event.js

用于为组件设置可用事件, 核心代码如下:

```jsx
// 导出一个事件map
export default {
  click: "点击事件"
};
```

### 12. options.json

用于配置组件的一些几何以及类名等。具体体现会在样式面板中展示, 更多信息见[组件基础](/getting-started/component/related#组件配置), 核心代码如下:

```json
{
  "components": [
    {
      "type": "EmitEvent",
      "id": "UBKO-08U1-C9L4-6OJF-3OMB-3OFN",
      "config": {
        "left": 534,
        "top": 242,
        "width": 883,
        "height": 645,
        "index": 0,
        "name": "EmitEvent",
        "visible": true,
        "class": ""
      }
    }
  ]
}
```

## FAQ

### 1. 以上的文件都是必须的吗？

以上除`assets`、`Component.js`以及`src/settings.js`都为必要文件。尤其是`src/main.js`和`src/setting.js`为我们为组件编译的主入口文件。当然我们建议你使用这个标准的目录结构。这样可以更好的协作和同伴维护。知道每个文件的作用和定位。

### 2. `settings`文件夹内的都必须要设置么？

答案是 no。这些是额外的设置。为开发阶段或大屏配置阶段提供自动化能力，比如数据设置以及组件相应属性的快捷设置。

### 3. webpack 还有什么配置是未暴露出来的？

我们在打包的过程中是基于一个 base 的配置来进行扩展的。我们约定了组件打包的一些基础设置。如果对这块感兴趣可以继续看文档的配置部分。
