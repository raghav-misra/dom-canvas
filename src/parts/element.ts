/// <reference path="../../lib/dom-canvas.d.ts" />

export class Element implements DOMCanvas.Element {
    rootElement: HTMLDivElement;

    constructor(props: DOMCanvas.IElementProps) {
        this.rootElement = document.createElement("div");

        // Set CSS Identifier:
        this.rootElement.setAttribute("data-dom-canvas", "element");

        // Set position:
        this.x = props.x || 0; this.y = props.y || 0;

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
    }

    // X & Y Position:
    $x: number; $y: number;
    get x() { return this.$x; }
    set x(newX) { this.$x = newX; this.rootElement.style.left = `${newX}px`; }
    get y() { return this.$y; }
    set y(newY) { this.$y = newY; this.rootElement.style.top = `${newY}px`; }

    // Width & Height:
    $width: number; $height: number;
    get width() { return this.$width; }
    set width(newW) { this.$width = newW; this.rootElement.style.width = `${newW}px`; }
    get height() { return this.$height; }
    set height(newH) { this.$height = newH; this.rootElement.style.height = `${newH}px`; }

    // Font color:
    get textColor() { return this.rootElement.style.color; }
    set textColor(newColor) { this.rootElement.style.color = newColor; }

    // background:
    get background() { return this.rootElement.style.background; }
    set background(newBackground) { this.rootElement.style.background = newBackground; }

    // border:
    get border() { return this.rootElement.style.border; }
    set border(newBorder) { this.rootElement.style.border = newBorder; }

    // font:
    get font() { return this.rootElement.style.font; }
    set font(newFont) { this.rootElement.style.font = newFont; }

    // text:
    get text() { return this.rootElement.innerText; }
    set text(newText) { this. rootElement.innerText = newText; }

    // ellipse;
    get ellipse() { return this.rootElement.style.borderRadius.trim() == "100%"; }
    set ellipse(newEllipse) { newEllipse ? 
        this.rootElement.style.borderRadius = "100%" : 
        this.rootElement.style.borderRadius = "0";
    }

    on(eventName: string, handler: Function) {
        this.rootElement.addEventListener(eventName, handler.bind(this));
    }
}