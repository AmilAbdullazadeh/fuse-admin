---
title: React Portal（传送门）组件
components: Portal
---

# Portal 传送门

<p class="description">传送门组件将其子节点渲染到当前 DOM 结构之外的新 "子类树" 当中。</p>

- 📦 [1.3kB 已压缩的包](/size-snapshot)

传送门组件的子节点将被添加到指定的 `container` 中。 [`Modal`](/components/modal/) 和 [`Popper`](/components/popper/) 组件内部都是用了该组件。

## 示例

{{"demo": "pages/components/portal/SimplePortal.js"}}

## 服务器端

React [不支持](https://github.com/facebook/react/issues/13097)服务端渲染的 [`createPortal()`](https://reactjs.org/docs/portals.html) API。 您必须等到客户端的注水渲染（hydration）之后才能见到子节点。