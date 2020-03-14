/// <reference path="../../lib/dom-canvas.d.ts" />
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Element = /** @class */ (function () {
    function Element(props) {
        this.rootElement = document.createElement("div");
        // Set CSS Identifier:
        this.rootElement.setAttribute("data-dom-canvas", "element");
        var x = props.x, y = props.y, width = props.width, height = props.height;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    return Element;
}());
export { Element };
var Text = /** @class */ (function (_super) {
    __extends(Text, _super);
    function Text() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Text;
}(Element));
export { Text };
var Rect = /** @class */ (function (_super) {
    __extends(Rect, _super);
    function Rect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Rect;
}(Element));
export { Rect };
var Ellipse = /** @class */ (function (_super) {
    __extends(Ellipse, _super);
    function Ellipse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Ellipse;
}(Rect));
export { Ellipse };
