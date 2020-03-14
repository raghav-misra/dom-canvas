/// <reference path="../lib/dom-canvas.d.ts" />

import { Canvas } from './parts/canvas.js';
import * as ElementTypes from './parts/element.js';
import { applyStyles } from './parts/apply-styles.js';

// Apply DOMCanvas styles:  
applyStyles();

/**
 * Function to create instances of DOMCanvas.Element (or classes that extend it).
 * Useful mainly with JSX, otherwise just use the 'new' keyword.
 * @param { typeof DOMCanvas.Element } elementType 
 * @param { DOMCanvas.IElementProps } props 
 */
function createElement(elementType: typeof DOMCanvas.Element, props: DOMCanvas.IElementProps) {
    return new elementType(props);
}

const DOMCanvasExport: DOMCanvas.IDefaultExport = {
    createElement,
    Element: ElementTypes.Element,
    Text: ElementTypes.Text,
    Rect: ElementTypes.Rect,
    Ellipse: ElementTypes.Ellipse,
    Canvas: Canvas
};

export default DOMCanvasExport;