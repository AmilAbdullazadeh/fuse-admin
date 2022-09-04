---
components: CssBaseline, ScopedCssBaseline
---

# CSS-Baseline

<p class="description">Die Material-UI bietet eine CssBaseline-Komponente, um eine elegante, konsistente und einfache Basis zu schaffen, auf der aufgebaut werden kann.</p>

## Globaler Reset

Möglicherweise kennen Sie [normalize.css](https://github.com/necolas/normalize.css), eine Sammlung von HTML-Element- und Attributstil-Normalisierungen.

```jsx
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

export default function MyApp() {
  return (
    <React.Fragment>
      <CssBaseline />
      {/* The rest of your application */}
    </React.Fragment>
  );
}
```

## Scoping on children

Allerdings könnte es sein, dass Sie schrittweise eine Website auf Material-UI migrieren, weswegen die Verwendung eines globalen Resets möglicherweise keine Option ist. It's possible to apply the baseline only to the children by using the `ScopedCssBaseline` component.

```jsx
import React from 'react';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import MyApp from './MyApp';

export default function MyApp() {
  return (
    <ScopedCssBaseline>
      {/* The rest of your application */}
      <MyApp />
    </ScopedCssBaseline>
  );
}
```

⚠️ Make sure you import `ScopedCssBaseline` first to avoid box-sizing conflicts as in the above example.

## Ansatz

### Seite

The `<html>` and `<body>` elements are updated to provide better page-wide defaults. Genauer gesagt:

- Der Rand in allen Browsern wird entfernt.
- Die Standardhintergrundfarbe des Materialdesigns wird angewendet. Es verwendet [`theme.palette.background.default`](/customization/default-theme/?expand-path=$.palette.background) für normale Geräte und einen weißen Hintergrund für Drucker.

### Layout

- Für das `<html>`-Element wird keine Basisschriftgröße deklariert, es wird jedoch von 16px ausgegangen (Standardeinstellung des Browsers). Sie können mehr über die Auswirkungen lernen von den sich ändernden `<html>` Standard - Schriftgröße auf [der Theme Dokumentation](/customization/typography/#typography-html-font-size) Seite.

### Typografie

- Für das `<html>`-Element wird keine Basisschriftgröße deklariert, es wird jedoch von 16px ausgegangen (Standardeinstellung des Browsers). Sie können mehr über die Auswirkungen lernen von den sich ändernden `<html>` Standard - Schriftgröße auf [der Theme Dokumentation](/customization/typography/#typography-html-font-size) Seite.
- Set the `theme.typography.body2` style on the `<body>` element.
- Set the font-weight to `theme.typography.fontWeightBold` for the `<b>` and `<strong>` elements.
- Custom font-smoothing is enabled for better display of the Roboto font.

## Individuelle Anpassung

Head to the [global customization](/customization/globals/#global-css) section of the documentation to change the output of these components.