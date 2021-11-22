---
title: 组件开发
prev: ./basic
next: ./create
---

目前我们有两种组件开发方式

## 在线开发

直接在[组件开发平台](http://10.2.2.236:8363/pw/visual/component/list)进行组件开发。该平台提供了在线 ide 和实时预览大屏。

## 本地开发

本地开发可使用两种种形式进行(请提前确认都拥有 clone 对应仓库的权限)

1. 直接 clone 对应仓库

```bash
$ git clone ssh://git@git.cloudwise.com:36000/FlyFish/component-develop.git
$ Cloning into 'ff-component-develop'...
```

3. 可使用 VIS-Editor 和 VIS-Screen 直接进行本地开发(飞鱼开发者)

## FAQ

### 1. 组件开发平台账号如何获取？

可以直接和对应的开发者进行申请。

### 2. 为什么指定下载器为`yarn`？

由于我们的本地组件开发模板使用`lerna + workspace`来管理依赖和包。这样做的好处是可以将所有子包的依赖管理在一个`node_modules`中。因为我们的组件是独立的存在，每个组件都可能会拥有自己的依赖，这样就会存在复合的依赖。从而使本地开发变得冗余且沉重。使用`workspace + lerna`可以完美解决当前的问题。当然还能解决组件间的相互引用依赖问题。因为`lerna`会自动执行`link`的操作。

### 3. 为什么子包中还是会出现`node_modules`?

`lerna`虽然可以帮我们把所有子包的依赖进行统一管理。但是若某些子包使用相同依赖不同版本时，这时底层`node_modules`只会安装先匹配的子包的依赖版本, 后面子包会维护在自己独立的`node_modules`里。毕竟依赖查询是个向上溯源的过程
