/// <reference path="../lib/dom-canvas.d.ts" />

import { Canvas } from './parts/canvas.js';
import * as ElementTypes from './parts/element.js';

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