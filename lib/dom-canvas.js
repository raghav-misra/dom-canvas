/// <reference path="../lib/dom-canvas.d.ts" />
import { Canvas } from './parts/canvas.js';
import * as ElementTypes from './parts/element.js';
import './parts/apply-styles.js';
var DOMCanvasExport = {
    Element: ElementTypes.Element,
    Canvas: Canvas
};
export default DOMCanvasExport;
