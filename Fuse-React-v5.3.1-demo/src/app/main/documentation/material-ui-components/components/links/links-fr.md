---
components: Link
---

# Liens

<p class="description">Le composant Lien vous permet de personnaliser facilement les éléments de types ancre avec les couleurs de votre thème et les styles de typographie.</p>

## Simple links

The Link component is built on top of the [Typography](/api/typography/) component. You can leverage its properties.

{{"demo": "pages/components/links/Links.js"}}

However, the Link component has different default properties than the Typography component:

- `color="primary"` as the link needs to stand out.
- `variant="inherit"` as the link will, most of the time, be used as a child of a Typography component.

## Security

When you use `target="_blank"` with Links, it is [recommended](https://developers.google.com/web/tools/lighthouse/audits/noopener) to always set `rel="noopener"` or `rel="noreferrer"` when linking to third party content.

- `rel="noopener"` prevents the new page from being able to access the `window.opener` property and ensures it runs in a separate process. Without this, the target page can potentially redirect your page to a malicious URL.
- `rel="noreferrer"` has the same effect, but also prevents the *Referer* header from being sent to the new page. ⚠️ Removing the referrer header will affect analytics.

## Bibliothèque de routage tierce

One common use case is to perform navigation on the client only, without an HTTP round-trip to the server. The `Link` component provides a property to handle this use case: `component`.

Here is an [integration example with react-router](/guides/composition/#link).

## Accessibilité

(WAI-ARIA: https://www.w3.org/TR/wai-aria-practices/#link)

- When providing the content for the link, avoid generic descriptions like "click here" or "go to". Instead, use [specific descriptions](https://developers.google.com/web/tools/lighthouse/audits/descriptive-link-text).
- For the best user experience, links should stand out from the text on the page.
- If a link doesn't have a meaningful href, [it should be rendered using a `<button>` element](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md).

{{"demo": "pages/components/links/ButtonLink.js"}}