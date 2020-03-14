/// <reference path="../../lib/dom-canvas.d.ts" />
var Canvas = /** @class */ (function () {
    function Canvas(rootElement) {
        this.rootElement = rootElement;
        // Add CSS Identifier:
        this.rootElement.setAttribute("data-dom-canvas", "canvas");
    }
    return Canvas;
}());
export { Canvas };
