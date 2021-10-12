---
title: 认识 FlyFish
prev: false
next: ./create-project
---

在开始使用`FlyFish`之前, 我们先来熟悉一下`FlyFish`的网站结构, 这将让你快速了解`FlyFish`

### 登录

想要使用`FlyFish`, 首先我们将提供给您一个默认登录账号:

```bash
$ username: admin@yunzhihui.com
$ password: yunzhihui!@#\$%
```

![login](https://i.loli.net/2021/10/04/M79GPrOLwpseFIT.png)

::: tip
当然在您正式使用, 可自行部署之后在平台内部自行注册账号, 即可分发进行团队使用
:::

### 首页

登录后进入首页, 首页展示了平台切换锚点、 组件、 可视化编辑、 用户 等模块页签及一键退出按钮。

1. 首页头部从左到右依次为: [平台切换锚点](#平台)、 [数据可视化 <Badge text="核心"/>](#数据可视化)、 [可视化组件 <Badge text="核心"/>](#可视化组件)、 [用户管理<Badge text="admin" type="warning"/>](#用户管理)、 [系统管理<Badge text="admin"  type="warning"/>](#系统管理)、 退出按钮.
2. 左侧主要为当前功能面板子菜单选项
3. 主要内容区域展示的为当前功能面板下的主要做操区域

![index summary](/images/flyfish/getting-started/index-summary.png)

### 平台

整个系统由数据处理平台、组件开发平台、数据处理平台三部分组成.

![platform](/images/flyfish/getting-started/platform.png)

- 数据应用平台: 主要负责项目开发
- 组件开发平台: 主要提供在线开发、编译、打包、导出以及分组等组件零件化功能
- 数据处理平台: 主要提供项目的数据模型提供、以及三方数据处理中转功能

### 数据可视化 <Badge text="核心"/>

主要进行大屏(项目)创建、 开发、 以及导出部署等.

1. 可进行已删除项目管理(包含还原操作)
2. 针对条件快速筛选当前项目
3. 单个项目概览信息
4. 项目相关信息: 包含名称、开发人等
5. 项目操作栏: 包含增删改查编辑预览等

![data-create](/images/flyfish/getting-started/data-create.png)

### 可视化组件 <Badge text="核心"/>

主要进行可视化组件的创建、上传、更新以及删除等.

1. 针对条件快速筛选当前组件列表
2. 新建组件
3. 组件列表
4. 单个组件概览信息
5. 组件操作栏: 包含更新、删除以及隐藏<Badge text="admin"  type="warning"/>

![data-visual](/images/flyfish/getting-started/data-visual.png)

### 用户管理<Badge text="admin" type="warning"/>

主要对当前系统进行用户的创建删除以及权限分配等.

1. 当前功能筛选
2. 添加等操作
3. 相关用户管理子菜单
4. 当前筛选项信息
5. 当前筛选项操作

![user-manage](/images/flyfish/getting-started/user-manage.png)

### 系统管理<Badge text="admin"  type="warning"/>

主要对当前系统进行配置等.

1. 当前功能筛选
2. 添加等操作
3. 相关系统管理子菜单
4. 当前筛选项信息
5. 当前筛选项操作

![sys-manage](/images/flyfish/getting-started/sys-manage.png)
