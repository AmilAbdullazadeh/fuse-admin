---
title: React Hidden component
components: Hidden
---

# Hidden

<p class="description">Quickly and responsively toggle the visibility value of components and more with the hidden utilities.</p>

Tous les éléments sont visibles à moins **qu'ils soient explicitement cachés**. To ease integration with Material-UI's [responsive breakpoints](/customization/breakpoints/), this component can be used to hide any content, or you can use it in conjunction with the [`Grid`](/components/grid/) component.

## Comment ça marche

Hidden works with a range of breakpoints e.g. `xsUp` or `mdDown`, or one or more breakpoints e.g. `only='sm'` or `only={['md', 'xl']}`. Ranges and individual breakpoints can be used simultaneously to achieve very customized behavior. The ranges are inclusive of the specified breakpoints.

```js
innerWidth  |xs      sm       md       lg       xl
            |--------|--------|--------|--------|-------->
width       |   xs   |   sm   |   md   |   lg   |   xl

smUp        |   show | hide
mdDown      |                     hide | show

```

## Implementations

### js

By default, the `js` implementation is used, responsively hiding content based on using the [`withWidth()`](/customization/breakpoints/#withwidth) higher-order component that watches screen size. This has the benefit of not rendering any content at all unless the breakpoint is met.

### css

If you are using server-side rendering, you can set `implementation="css"` if you don't want the browser to re-flow your content on the screen.

## Breakpoint up

Using any breakpoint `up` property, the given *children* will be hidden *at or above* the breakpoint.

{{"demo": "pages/components/hidden/BreakpointUp.js", "bg": true}}

## Breakpoint down

Using any breakpoint `down` property, the given *children* will be hidden *at or below* the breakpoint.

{{"demo": "pages/components/hidden/BreakpointDown.js", "bg": true}}

## Breakpoint only

Using the breakpoint `only` property, the given *children* will be hidden *at* the specified breakpoint(s).

The `only` property can be used in two ways:

- list a single breakpoint
- list an array of breakpoints

{{"demo": "pages/components/hidden/BreakpointOnly.js", "bg": true}}

## Integration with Grid

It is quite common to alter `Grid` at different responsive breakpoints, and in many cases, you want to hide some of those elements.

{{"demo": "pages/components/hidden/GridIntegration.js", "bg": true}}