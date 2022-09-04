---
title: React Date Picker（日期选择器）和 Time Picker（时间选择器）组件
components: TextField
---

# Date/Time pickers日期/时间选择器

<p class="description">日期选择器和时间选择器提供了一个从事先设定好的日期集合中选择单个值的简单方法。</p>

- 在移动端，选择器最适合在确认对话框中展示。
- 若是内联显示，如在一个表单内展示，请考虑使用分段下拉按钮这样的紧凑型控件。

## @material-ui/pickers

![stars](https://img.shields.io/github/stars/mui-org/material-ui-pickers.svg?style=social&label=Stars) ![npm下载](https://img.shields.io/npm/dm/@material-ui/pickers.svg)

[@material-ui/pickers](https://material-ui-pickers.dev/) 为您提供了日期和时间选择器的控件。

{{"demo": "pages/components/pickers/MaterialUIPickers.js"}}

## 原生的选择器

⚠️ 浏览器支持的原生输入控件[并不是完美的](https://caniuse.com/#feat=input-datetime)。 您可以看一下 [@material-ui/pickers](https://material-ui-pickers.dev/) 提供的更完善的方案。

### Datepickers 日期选择器

示例展示了当 `type="date"` 时的原生的日期选择器 。

{{"demo": "pages/components/pickers/DatePickers.js"}}

### Date & Time pickers 日期和时间选择器

这个例子通过 `type="datetime-local"` 实现了原生的日期和时间选择器。

{{"demo": "pages/components/pickers/DateAndTimePickers.js"}}

### Time pickers 时间选择器

这个例子通过 `type="time"` 实现了原生的时间选择器。

{{"demo": "pages/components/pickers/TimePickers.js"}}