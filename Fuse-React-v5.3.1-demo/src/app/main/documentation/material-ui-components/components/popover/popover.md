---
title: React Popover component
components: Grow, Popover
---

# Popover

<p class="description">A Popover can be used to display some content on top of another.</p>

Things to know when using the `Popover` component:

- The component is built on top of the [`Modal`](/components/modal/) component.
- The scroll and click away are blocked unlike with the [`Popper`](/components/popper/) component.

## Simple Popover

{{"demo": "pages/components/popover/SimplePopover.js" }}

## Anchor playground

Use the radio buttons to adjust the `anchorOrigin` and `transformOrigin` positions.
You can also set the `anchorReference` to `anchorPosition` or `anchorEl`.
When it is `anchorPosition`, the component will, instead of `anchorEl`,
refer to the `anchorPosition` prop which you can adjust to set
the position of the popover.

{{"demo": "pages/components/popover/AnchorPlayground.js", "hideToolbar": true}}

## Mouse over interaction

This demonstrates how to use the `Popover` component to implement a popover behavior based on the mouse over event.

{{"demo": "pages/components/popover/MouseOverPopover.js"}}

## Complementary projects

For more advanced use cases you might be able to take advantage of:

### PopupState helper

There is a 3rd party package [`material-ui-popup-state`](https://github.com/jcoreio/material-ui-popup-state) that takes care of popover
state for you in most cases.

{{"demo": "pages/components/popover/PopoverPopupState.js"}}
