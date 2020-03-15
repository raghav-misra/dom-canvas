/// <reference path="../../lib/dom-canvas.d.ts" />
var Element = /** @class */ (function () {
    function Element(props) {
        this.rootElement = document.createElement("div");
        // Set CSS Identifier:
        this.rootElement.setAttribute("data-dom-canvas", "element");
        // Set position:
        this.x = props.x || 0;
        this.y = props.y || 0;
        // Set w/h:
        props.width && (this.width = props.width);
        props.height && (this.height = props.height);
        // Colors:
        props.textColor && (this.textColor = props.textColor);
        props.background && (this.background = props.background);
        props.border && (this.border = props.border);
        // Font/text:
        props.font && (this.font = props.font);
        props.text && (this.text = props.text);
        // Ellipse:
        props.ellipse && (this.ellipse = props.ellipse);
    }
    Object.defineProperty(Element.prototype, "x", {
        get: function () { return this.$x; },
        set: function (newX) { this.$x = newX; this.rootElement.style.left = newX + "px"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "y", {
        get: function () { return this.$y; },
        set: function (newY) { this.$y = newY; this.rootElement.style.top = newY + "px"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "width", {
        get: function () { return this.$width; },
        set: function (newW) { this.$width = newW; this.rootElement.style.width = newW + "px"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "height", {
        get: function () { return this.$height; },
        set: function (newH) { this.$height = newH; this.rootElement.style.height = newH + "px"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "textColor", {
        // Font color:
        get: function () { return this.rootElement.style.color; },
        set: function (newColor) { this.rootElement.style.color = newColor; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "background", {
        // background:
        get: function () { return this.rootElement.style.background; },
        set: function (newBackground) { this.rootElement.style.background = newBackground; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "border", {
        // border:
        get: function () { return this.rootElement.style.border; },
        set: function (newBorder) { this.rootElement.style.border = newBorder; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "font", {
        // font:
        get: function () { return this.rootElement.style.font; },
        set: function (newFont) { this.rootElement.style.font = newFont; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "text", {
        // text:
        get: function () { return this.rootElement.innerText; },
        set: function (newText) { this.rootElement.innerText = newText; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "ellipse", {
        // ellipse;
        get: function () { return this.rootElement.style.borderRadius.trim() == "100%"; },
        set: function (newEllipse) {
            newEllipse ?
                this.rootElement.style.borderRadius = "100%" :
                this.rootElement.style.borderRadius = "0";
        },
        enumerable: true,
        configurable: true
    });
    Element.prototype.on = function (eventName, handler) {
        this.rootElement.addEventListener(eventName, handler.bind(this));
    };
    return Element;
}());
export { Element };
