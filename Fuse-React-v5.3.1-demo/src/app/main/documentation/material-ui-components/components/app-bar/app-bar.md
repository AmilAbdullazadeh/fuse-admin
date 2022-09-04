---
title: App Bar React component
components: AppBar, Toolbar, Menu
---

# App Bar

<p class="description">The App Bar displays information and actions relating to the current screen.</p>

The [top App Bar](https://material.io/design/components/app-bars-top.html) provides content and actions related to the current screen. It’s used for branding, screen titles, navigation, and actions.

It can transform into a contextual action bar or be used as a navbar.

## Simple App Bar

{{"demo": "pages/components/app-bar/ButtonAppBar.js", "bg": true}}

## App Bar with a primary search field

A primary searchbar.

{{"demo": "pages/components/app-bar/PrimarySearchAppBar.js", "bg": true}}

## App Bar with menu

{{"demo": "pages/components/app-bar/MenuAppBar.js", "bg": true}}

## App Bar with search field

A side searchbar.

{{"demo": "pages/components/app-bar/SearchAppBar.js", "bg": true}}

## Dense (desktop only)

{{"demo": "pages/components/app-bar/DenseAppBar.js", "bg": true}}

## Prominent

A prominent app bar.

{{"demo": "pages/components/app-bar/ProminentAppBar.js", "bg": true}}

## Bottom App Bar

{{"demo": "pages/components/app-bar/BottomAppBar.js", "iframe": true, "maxWidth": 400}}

## Fixed placement

When you render the app bar position fixed, the dimension of the element doesn't impact the rest of the page. This can cause some part of your content to be invisible, behind the app bar. Here are 3 possible solutions:

1. You can use `position="sticky"` instead of fixed. ⚠️ sticky is not supported by IE 11.
2. You can render a second `<Toolbar />` component:

```jsx
function App() {
  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar>{/* content */}</Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}
```

3. You can use `theme.mixins.toolbar` CSS:

```jsx
const useStyles = makeStyles(theme => ({
  offset: theme.mixins.toolbar,
}))

function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar>{/* content */}</Toolbar>
      </AppBar>
      <div className={classes.offset} />
    </React.Fragment>
  )
};
```

## Scrolling

You can use the `useScrollTrigger()` hook to respond to user scroll actions.

### Hide App Bar

The app bar hides on scroll down to leave more space for reading.

{{"demo": "pages/components/app-bar/HideAppBar.js", "iframe": true}}

### Elevate App Bar

The app bar elevates on scroll to communicate that the user is not at the top of the page.

{{"demo": "pages/components/app-bar/ElevateAppBar.js", "iframe": true}}

### Back to top

A floating action buttons appears on scroll to make it easy to get back to the top of the page.

{{"demo": "pages/components/app-bar/BackToTop.js", "iframe": true}}

### `useScrollTrigger([options]) => trigger`

#### Arguments

1. `options` (*Object* [optional]):

    - `options.disableHysteresis` (*Boolean* [optional]): Defaults to `false`. Disable the hysteresis. Ignore the scroll direction when determining the `trigger` value.
    - `options.target` (*Node* [optional]): Defaults to `window`.
    - `options.threshold` (*Number* [optional]): Defaults to `100`. Change the `trigger` value when the vertical scroll strictly crosses this threshold (exclusive).

#### Returns

`trigger`: Does the scroll position match the criteria?

#### Examples

```jsx
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

function HideOnScroll(props) {
  const trigger = useScrollTrigger();
  return (
    <Slide in={!trigger}>
      <div>Hello</div>
    </Slide>
  );
}
```
