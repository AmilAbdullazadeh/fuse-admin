---
title: React Badge（徽章）组件
components: Badge
---

# Badge 徽章

<p class="description">徽章组件会在其子项（们）的右上角生成一个小徽章。</p>

## 基本徽章

这个示例是个包含了文本的徽章，同时使用了主色和副色。 徽章会对其子元素生效。

{{"demo": "pages/components/badges/SimpleBadge.js"}}

## 自定义徽章

以下是自定义组件的一个示例。 您可以在 [重写文档页面](/customization/components/) 中了解更多有关此内容的信息。

{{"demo": "pages/components/badges/CustomizedBadges.js"}}

## 徽章组件的可见性

徽章组件的隐显可以通过 `invisible` 属性来设置。

{{"demo": "pages/components/badges/BadgeVisibility.js"}}

当 badgeContent 为零时，徽章组件将会自动隐藏。 您可以使用 `showZero` 属性覆盖它。

{{"demo": "pages/components/badges/ShowZeroBadge.js"}}

## 最大值

您可以使用 `max` 属性来限制徽章组件内容的最大值。

{{"demo": "pages/components/badges/BadgeMax.js"}}

## 圆点徽章

通过 `dot` 属性，一个徽章会渲染为一个小小的点。 这样的话，可以在不给出具体计数的情况下，组件能够提示一下变化。

{{"demo": "pages/components/badges/DotBadge.js"}}

## 徽章组件的 overlap 属性

你可以使用 `overlap` 属性来将徽章组件放置到到封装的元素一个相对位置的角落。

{{"demo": "pages/components/badges/BadgeOverlap.js"}}

## 徽章组件的校准

你可以使用 `anchorOrigin` 属性移把徽章组件移动到封装的元素的任何角落。

{{"demo": "pages/components/badges/BadgeAlignment.js", "hideToolbar": true}}