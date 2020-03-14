/// <reference path="../../lib/dom-canvas.d.ts" />

export class Canvas implements DOMCanvas.Canvas {
    rootElement: HTMLDivElement;

    constructor(rootElement: HTMLDivElement) {
        this.rootElement = rootElement;
    }
}