# Exact Change

## Goal

Develop a game in which you are tasked to find the exact change, in coins, for a random sum.

## Notes

### Setup

In the **res** folder you find the SVG illustration I created for the project. In the **Illustration** folder you actually find the graphic I'd like to use in the header, as to introduce the project. In the **Loader** folder instead, you find what I believe to be a rather nifty loading animation, using a series of nested `g` elements. Finally and in the **Coins** folder, the different "cuts" for the currency are drawn with a few `<circle>` and `<path>` elements.

In the background, I've also decided to use the following SVG:

```js
<svg viewBox="-50 -50 100 100" width="100" height="100">
  <g fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round">
    <circle r="47" />
    <circle r="42" stroke-dasharray="26.3" transform="rotate(180)" />
    <circle r="37" />
    <path d="M -8 10 l 8 -20 8 20 -20 -12.5 h 24 z" fill="currentColor" />
  </g>
</svg>
```

By fiddling with the `viewBox`, you can make sure the repeating pattern has a smaller footprint and doesn't clutter too much the UI.

On second thought, by also repeating the shape around the corner, you can get a more pleasing pattern.

```html
<svg viewBox="-120 -120 240 240" width="100" height="100">
  <g fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round">
    <g id="coin" transform="rotate(-45)">
      <circle r="47" />
      <circle r="42" stroke-dasharray="26.3" transform="rotate(180)" />
      <circle r="37" />
      <path d="M -8 10 l 8 -20 8 20 -20 -12.5 h 24 z" fill="currentColor" />
    </g>
    <use href="#coin" transform="translate(100 100) scale(0.75) rotate(-20)" />
    <use href="#coin" transform="translate(-100 100) scale(0.75) rotate(-20)" />
    <use href="#coin" transform="translate(100 -100) scale(0.75) rotate(-20)" />
    <use href="#coin" transform="translate(-100 -100) scale(0.75) rotate(-20)" />
  </g>
</svg>
```

Encoded through [this handy tool](http://yoksel.github.io/url-encoder/):

```css
body {
  background: url("data:image/svg+xml,%3Csvg opacity='0.1' xmlns='http://www.w3.org/2000/svg' viewBox='-120 -120 240 240' width='100' height='100'%3E%3Cg fill='none' stroke='currentColor' stroke-width='6' stroke-linecap='round' stroke-linejoin='round'%3E%3Cg id='coin' %3E%3Ccircle r='47' /%3E%3Ccircle r='42' stroke-dasharray='26.3' transform='rotate(180)' /%3E%3Ccircle r='37' /%3E%3Cpath d='M -8 10 l 8 -20 8 20 -20 -12.5 h 24 z' fill='currentColor' /%3E%3C/g%3E%3Cuse href='%23coin' transform='translate(120 120) scale(0.75) rotate(-20)' /%3E%3Cuse href='%23coin' transform='translate(-120 120) scale(0.75) rotate(-20)' /%3E%3Cuse href='%23coin' transform='translate(120 -120) scale(0.75) rotate(-20)' /%3E%3Cuse href='%23coin' transform='translate(-120 -120) scale(0.75) rotate(-20)' /%3E%3C/g%3E%3C/svg%3E");
  background-size: 10vmax;
}
```
