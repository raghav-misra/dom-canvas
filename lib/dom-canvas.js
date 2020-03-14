/// <reference path="../lib/dom-canvas.d.ts" />
import { Canvas } from './parts/canvas.js';
import * as ElementTypes from './parts/element.js';
import { applyStyles } from './parts/apply-styles.js';
// Apply DOMCanvas styles:  
applyStyles();
function createElement(elementType, props) {
    return new elementType(props);
}
var DOMCanvasExport = {
    createElement: createElement,
    Element: ElementTypes.Element,
    Text: ElementTypes.Text,
    Rect: ElementTypes.Rect,
    Ellipse: ElementTypes.Ellipse,
    Canvas: Canvas
};
export default DOMCanvasExport;
