/// <reference path="../../lib/dom-canvas.d.ts" />
var Canvas = /** @class */ (function () {
    function Canvas(rootElement) {
        var _this = this;
        this.pressedKeys = Object.create(null);
        if (typeof rootElement === "string")
            this.rootElement = document.querySelector(rootElement);
        else
            this.rootElement = rootElement;
        // Add CSS Identifier:
        this.rootElement.setAttribute("data-dom-canvas", "canvas");
        // Add key press handlers:
        this.on("keydown", function (_a) {
            var code = _a.code;
            return (_this.pressedKeys[code] = true);
        });
        this.on("keyup", function (_a) {
            var code = _a.code;
            return (_this.pressedKeys[code] = false);
        });
    }
    Canvas.prototype.add = function (element) {
        this.rootElement.appendChild(element.rootElement);
    };
    Canvas.prototype.remove = function (element) {
        this.rootElement.removeChild(element.rootElement);
    };
    Canvas.prototype.on = function (eventName, handler) {
        this.rootElement.addEventListener(eventName, handler.bind(this));
    };
    Canvas.prototype.isPressed = function (key) {
        return this.pressedKeys[key];
    };
    Object.defineProperty(Canvas.prototype, "width", {
        get: function () { return this.rootElement.clientWidth; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Canvas.prototype, "height", {
        get: function () { return this.rootElement.clientHeight; },
        enumerable: true,
        configurable: true
    });
    return Canvas;
}());
export { Canvas };
