---
title: Radio Button React-Komponente
components: Radio, RadioGroup, FormControl, FormLabel, FormControlLabel
---

# Auswahlfeld

<p class="description">Optionsfelder ermöglichen die Auswahl einer einzelnen Option aus einem Set.</p>

Verwenden Sie die [Optionsfelder](https://material.io/design/components/selection-controls.html#radio-buttons) wenn dem Benutzer alle verfügbaren Optionen anzeigt werden müssen. Wenn verfügbare Optionen reduziert werden können, sollten Sie ein Dropdown-Menü in Betracht ziehen, da so weniger Platz benötigt wird.

Bei Optionsschaltflächen sollte die am häufigsten verwendete Option standardmäßig ausgewählt sein.

## RadioGroup

`RadioGroup` ist ein hilfreicher Wrapper zur Gruppierung von `Optionsfelder` Komponenten, der eine einfachere API und den richtigen Zugriff der Tastatur auf die Gruppe bietet.

{{"demo": "pages/components/radio-buttons/RadioButtonsGroup.js"}}

To lay out the buttons horizontally, set the `row` prop: `<RadioGroup row />`.

## Standalone radio buttons

`Radio` can also be used standalone, without the RadioGroup wrapper.

{{"demo": "pages/components/radio-buttons/RadioButtons.js"}}

## Etikettenplatzierung

You can change the placement of the label with the `FormControlLabel` component's `labelPlacement` prop:

{{"demo": "pages/components/radio-buttons/FormControlLabelPlacement.js"}}

## Show error

In general, radio buttons should have a value selected by default. If this is not the case, you can display an error if no value is selected when the form is submitted:

{{"demo": "pages/components/radio-buttons/ErrorRadios.js"}}

## Customized radios

Hier ist ein Beispiel zum Anpassen der Komponente. Mehr dazu erfahren Sie auf der [Überschreibungsdokumentationsseite](/customization/components/).

{{"demo": "pages/components/radio-buttons/CustomizedRadios.js"}}

## When to use

- [Kontrollkästchen vs. Optionsfeld (Radio Buttons)](https://www.nngroup.com/articles/checkboxes-vs-radio-buttons/)

## Barrierefreiheit

(WAI-ARIA: https://www.w3.org/TR/wai-aria-practices/#radiobutton)

- Alle Formularsteuerelemente sollten Beschriftungen haben. Dazu gehören Optionsfelder, Kontrollkästchen und Schalter. In den meisten Fällen wird dazu das Element `<label>` ([FormControlLabel](/api/form-control-label/)) verwendet.
- Wenn ein Label nicht verwendet werden kann, muss der Eingabekomponente ein Attribut direkt hinzugefügt werden. In diesem Fall können Sie das zusätzliche Attribut (z. B. `aria-label`, `aria-labelby`, `title`) über die Eigenschaft `inputProps` anwenden.

```jsx
<RadioButton
  value="radioA"
  inputProps={{ 'aria-label': 'Radio A' }}
/>
```