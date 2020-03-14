# dom-canvas:

Leveraging the power of CSS animations and the Document Object Model to create a faster, more powerful canvas.

## What is this?

`dom-canvas` is a library that imitates the 2D Canvas API, except implements it using CSS animations and DOM elements. This means that no re-renders are necessary, as every element (shape, text, etc) has its own object and properties.

Additionally, `dom-canvas` is easier to debug, as each visual change is a change to an HTML element, which is automatically represented in your browser's developer tools.

## License / Distribution

`dom-canvas` is distributed through NPM as an ES module. It has zero dependencies, but requires TypeScript for development.

`dom-canvas` is licensed under the **MIT License**.