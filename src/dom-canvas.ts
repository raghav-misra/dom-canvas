/// <reference path="../lib/dom-canvas.d.ts" />

import { Canvas } from './parts/canvas.js';
import * as ElementTypes from './parts/element.js';
import './parts/apply-styles.js';

const DOMCanvasExport: DOMCanvas.IDefaultExport = {
    Element: ElementTypes.Element,
    Image: ElementTypes.Image,
    Canvas: Canvas,
};

export default DOMCanvasExport;