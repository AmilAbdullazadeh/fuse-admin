---
title: React Radio buttons（单选按钮）组件
components: Radio, RadioGroup, FormControl, FormLabel, FormControlLabel
---

# Radio 单选框组件

<p class="description">用户可以通过单选按钮从一组中选择一个选项。</p>

当用户想要看到所有的选项时，可以使用 [单选按钮](https://material.io/design/components/selection-controls.html#radio-buttons)。 如果可用选项可以折叠，请您考虑使用占用空间更少的下拉菜单。

默认情况下，单选按钮应该选择了最常用的选项。

## RadioGroup 单选框组

`RadioGroup` 适用于一组 `Radio`，它提供相对简单的 API 并且能够使用键盘对该 RadioGroup 进行控制。

{{"demo": "pages/components/radio-buttons/RadioButtonsGroup.js"}}

要横向布置按钮，请将 `row` 属性设置为：`<RadioGroup row />`。

## Standalone radio buttons 独立的单选框按钮 

`Radio` 也可以单独使用，无需额外的 RadioGroup wrapper。

{{"demo": "pages/components/radio-buttons/RadioButtons.js"}}

## 标签放置

你可以用 `FormControlLabel` 组件的 `labelPlacement` 属性来改变标签的位置。

{{"demo": "pages/components/radio-buttons/FormControlLabelPlacement.js"}}

## 显示错误

一般来说，单选按钮应带有一个默认选中的值。 如果不是这种情况，若用户在提交表单时如果未选择任何值，您可以让其显示一个错误：

{{"demo": "pages/components/radio-buttons/ErrorRadios.js"}}

## Customized radios 自定义单选框

以下是自定义组件的一个示例。 您可以在 [重写文档页](/customization/components/) 中了解有关此内容的更多信息。

{{"demo": "pages/components/radio-buttons/CustomizedRadios.js"}}

## 什么时候使用

- [复选框 对比 单选按钮](https://www.nngroup.com/articles/checkboxes-vs-radio-buttons/)

## 无障碍设计

(WAI-ARIA: https://www.w3.org/TR/wai-aria-practices/#radiobutton)

- 所有表单控件都应该带有标签，而这包括了单选按钮，复选框和开关。 在大多数情况下，这是通过使用一个 `<label>` 元素（[FormControlLabel](/api/form-control-label/)）实现的。
- 如果无法使用标签，您则必须在输入组件中直接添加属性。 在这种情况下，您可以经由 `inputProps` 属性，来附着一些额外的属性（例如 `arial-label`，`aria-labelledby`，`title`）。

```jsx
<RadioButton
  value="radioA"
  inputProps={{ 'aria-label': 'Radio A' }}
/>
```