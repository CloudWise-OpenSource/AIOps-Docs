---
title: 认识 FlyFish
prev: false
next: ./create-project
---

在开始使用`FlyFish`之前, 我们先来熟悉一下`FlyFish`的网站结构, 这将让你快速了解`FlyFish`

### 登录

想要使用`FlyFish`, 首先我们将提供给您一个默认登录账号:

```bash
$ username: admin
$ password: utq#SpV!
```

![login](https://i.loli.net/2021/10/04/M79GPrOLwpseFIT.png)

::: tip
当然在您正式使用, 可自行部署之后在平台内部自行注册账号, 即可分发进行团队使用
:::

### 首页

登录后进入首页, 首页展示了应用创建、用户管理等模块页签及一键退出按钮。

1. 首页左侧菜单分为应用管理与用户管理两大模块，应用管理包括: [项目管理](#项目管理)、 [应用开发 <Badge text="核心"/>](#应用开发)、 [组件开发 <Badge text="核心"/>](#组件开发)，用户管理包括: [用户列表 <Badge text="admin" type="warning"/>](#用户列表)、 [角色列表 <Badge text="admin"  type="warning"/>](#角色列表).
2. 主要内容区域展示的为当前功能面板下的主要操做区域
3. 右上角展示用户名称，单击一键退出


![index summary](/images/flyfish/getting-started/index-summary.png)

### 项目管理

对平台项目的大屏应用、可视化组件等进行组织管理.

1. 平台项目管理，包括新增项目、查询、删除、编辑项目信息
2. 项目应用列表，可对当前项目内的大屏应用进行预览、开发、删除、导出、复制以及新增应用
3. 项目组件列表，可对当前项目定制化开发的可视化组件进行管理

![platform](/images/flyfish/getting-started/platform.png)

### 应用开发 <Badge text="核心"/>

主要进行大屏(项目)创建、 开发、 以及导出部署等.

1. 可进行已删除应用管理(包含还原操作)
2. 针对条件快速筛选当前应用
3. 单个应用概览信息
4. 应用操作栏: 包含增删改查编辑预览等

![data-create](/images/flyfish/getting-started/data-create.png)

### 组件开发 <Badge text="核心"/>

主要进行可视化组件的创建、上传、更新以及删除等.

1. 针对条件快速筛选当前组件列表
2. 新建组件
3. 组件列表
4. 单个组件概览信息
5. 组件操作栏: 包含更新、删除以及隐藏<Badge text="admin"  type="warning"/>

![data-visual](/images/flyfish/getting-started/data-visual.png)

### 用户列表<Badge text="admin" type="warning"/>

主要对当前系统进行用户的创建删除以及权限分配等.

1. 当前功能筛选
2. 添加等操作
3. 相关用户管理子菜单
4. 当前筛选项信息
5. 当前筛选项操作

![user-manage](/images/flyfish/getting-started/user-manage.png)

### 角色列表<Badge text="admin"  type="warning"/>

主要对当前系统角色权限进行配置等.

1. 当前功能筛选
2. 添加等操作
3. 编辑角色成员列表
4. 配置角色权限

![sys-manage](/images/flyfish/getting-started/sys-manage.png)
