
# dom-canvas

Leveraging the power of CSS and the DOM to create a faster, more powerful canvas.

## What is this?

`dom-canvas` is a library that imitates the 2D Canvas API, except implements it using CSS animations and DOM elements. This means that **no re-renders** are necessary, as every element (shape, text, etc) has its own object and properties.

Additionally, `dom-canvas` is easier to debug, as each visual change is a *change to an HTML element*, which is automatically represented in your browser's developer tools.

## License / Distribution

`dom-canvas` is distributed through NPM as an ES module. It has zero dependencies, but requires TypeScript for development.

`dom-canvas` is licensed under the **MIT License**.

## Get Started!

There are two ways to get started with `dom-canvas`.

1. **NPM:** (recommended method) `npm i dom-canvas`.
```js 
import DOMCanvas from 'dom-canvas';
/* OR */
import DOMCanvas from 'node_modules/.../dom-canvas.js';
```
2. **CDN:** (faster to get up and running).
```js
import DOMCanvas from 'https://cdn.jsdelivr.net/gh/raghav-misra/dom-canvas/lib/dom-canvas.js';
```

## Initializing a Canvas

Let's say that your HTML includes the following `<div>`:
```html
<div id="canvas"></div>
```
To initialize a canvas you create a `new DOMCanvas.Canvas`:
```js
import DOMCanvas from './path/dom-canvas.js';

const canvas = new DOMCanvas.Canvas("#canvas");
```

Now, this `canvas` is useless in it's current state, so let's style it to be blue and fit the page: 
```css
#canvas {
	position: fixed;
	top: 0; left: 0;
	width: 100vw; height: 100vh;
	background: cornflowerblue;
}
```

## Canvas Elements

Everything (almost), from shapes to text, are instances the `DOMCanvas.Element` class. This section assumes that the code from the last section is still present.

Regardless of what you want to 'render', be it a rectangle, text, or an image you call the `DOMCanvas.Element` constructor.

### Rectangle

```js
const rect = new DOMCanvas.Element({
	x: 100, /* Offset left = 100px */
	y: 100, /* Offset top = 100px */
	width: 100, height: 100, /* 100x100 rect */
	background: "red", /* Red fill */
	border: "white 2px solid" /* 2px solid white stroke */
});

// Render the rectangle to the canvas:
canvas.add(rect);
```

### Ellipse

An ellipse is identical to a rectangle, except you set `ellipse: true`.

```js
const ellipse = new DOMCanvas.Element({
	x: 150, y: 150,
	width: 100, height: 100,
	background: "green",
	border: "white 2px solid",

	ellipse: true /* New code */
});

canvas.add(ellipse);
```

### Text

To render text, you must supply `x` and `y`, along with `text`  and `textColor` (and optionally `font`). By default, text will be responsive to screen size (wrap when screen is too small), but using `width` and `height` properties you can stop this.

```js
const text = new DOMCanvas.Element({
	x: 10, y: 10,
	text: "Hello from dom-canvas!", /* Text to show */
	textColor: "blue", /* Color of the text */
	font: "30px sans-serif" /* Font */
});

canvas.add(text);
```

## Non-`Element` Exceptions

While rectangles, ellipses, and text are all direct instances of `DOMCanvas.Element`, some 

### Image:

Images have their own class, `DOMCanvas.Image`. Since the class extends from `DOMCanvas.Element`, all properties passable in the `Element` class are accepted when creating an `Image`.

```js
const image = new DOMCanvas.Image({
	image: "http://placekitten.com/g/200/300", /* New property! */
	x: 300, y: 350,
	border: "2px solid white"
});

canvas.add(image);
```

## Event Handling

`DOMCanvas.Canvas`, `DOMCanvas.Element` (and classes that inherit it) all have the same API for event handling. The `on` method takes the same parameters as the `addEventListener` function.

### Adding Events to `DOMCanvas.Canvas`

The following code will make it so that when the canvas is clicked, *'Canvas Clicked!'* will be alerted to the screen.
```js
canvas.on("click", () => alert("Canvas Clicked!"));
```

### Adding Events to `DOMCanvas.Element`

This following method works on `DOMCanvas.Element` and all classes that extend it, such as `DOMCanvas.Image`

```js
const rect = new DOMCanvas.Element({
	x: 0, y: 0,
	width: 10, height: 100,
	background: "red"
});

rect.on("click", () => alert("Ooh! Right angles"));
canvas.add(rect);
```

## Other Stuff:

### Check If Key Pressed:

You can check if a key is down on a canvas using its `isPressed` method. The next example shows key-controlled movement without setting any event listeners:
```js
// Player to be moved:
const player = new DOMCanvas.Element({
	x: 0, y: 0, width: 50, height: 100,
	background: "white"
});
canvas.add(player);

function updateMovement() {
	// Move rectangle if W, A, S, D pressed.
	if (canvas.isPressed("KeyW")) player.y -= 10;
	if (canvas.isPressed("KeyA")) player.x -= 10;
	if (canvas.isPressed("KeyS")) player.y += 10;
	if (canvas.isPressed("KeyD")) player.x += 10;

	// Call function again on next animation frame:
	requestAnimationFrame(updateMovement);
}

// Call update function:
requestAnimationFrame(updateMovement);
```
