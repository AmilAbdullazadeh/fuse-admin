---
title: React Portal component
components: Portal
---

# Portal

<p class="description">The portal component renders its children into a new "subtree" outside of current DOM hierarchy.</p>

- 📦 [1.3 kB gzipped](/size-snapshot)

Die untergeordneten Elemente der Portalkomponente werden an den angegebenen `Container` angehängt. Die Komponente wird intern von den Komponenten [`Modal`](/components/modal/) und [`Popper`](/components/popper/) benutzt.

## Beispiel

{{"demo": "pages/components/portal/SimplePortal.js"}}

## Server-side

React [doesn't support](https://github.com/facebook/react/issues/13097) the [`createPortal()`](https://reactjs.org/docs/portals.html) API on the server. You have to wait for the client-side hydration to see the children.