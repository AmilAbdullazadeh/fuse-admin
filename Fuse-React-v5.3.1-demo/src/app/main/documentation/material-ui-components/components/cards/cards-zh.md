---
title: React Card（卡片）组件
components: Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Collapse, Paper
---

# Card 卡片

<p class="description">卡片组件能够承载与单个主题相关的内容和操作。</p>

[卡片](https://material.io/design/components/cards.html) 是一个显示与单个主题相关的内容和操作的容器。

通过卡片组件，扫描相关的和可操作的信息更为便捷了。 像文本和图像这样的元素，则应按照清晰的布局来排列，以此呈现结构层次。

## 简单的卡片

尽管卡片支持多操作、多个 UI 控件和一个加长的菜单，但请不要滥用它，切记，卡片只能作为那些复杂且详细信息的一个入口。

{{"demo": "pages/components/cards/SimpleCard.js", "bg": true}}

### 描边卡片 Outlined Card

设置 `variant="outlined"` 来渲染一个描边卡片。

{{"demo": "pages/components/cards/OutlinedCard.js", "bg": true}}

## 复杂的交互情况

在桌面上，卡片内容是可以展开的。 （点击向下箭头的按钮来查看配方。）

{{"demo": "pages/components/cards/RecipeReviewCard.js", "bg": true}}

## Media 多媒体内容

下面的例子则一个使用图像来增强内容的卡片。

{{"demo": "pages/components/cards/MediaCard.js", "bg": true}}

默认情况下，我们结合`<div>` 元素和一个 *背景图片* 来展示多媒体元素。 但在某些情况下，可能会产生一些不可预知的问题。 譬如，你会有显示一个视频或一张响应式的图片的需求。 使用 `component` 属性可以解决这样的情况：

{{"demo": "pages/components/cards/ImgMediaCard.js", "bg": true}}

> ⚠️ 当 `component="img"` 时，CardMedia 通过 `object-fit` 来居中图像。 但是 IE 11不支持这一属性。

## UI 控件

卡片内部的一些补充操作可使用图标、文本和 UI 控件显式调用，我们通常将其放在卡片组件的底部。

以下是一个多媒体内容控制的卡片的例子。

{{"demo": "pages/components/cards/MediaControlCard.js", "bg": true}}

## Customization 个性化

🎨 如果您还在寻找灵感，您可以看看 [MUI Treasury 特别定制的一些例子](https://mui-treasury.com/components/card)。