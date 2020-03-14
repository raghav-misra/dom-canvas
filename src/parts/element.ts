/// <reference path="../../lib/dom-canvas.d.ts" />

export class Element implements DOMCanvas.Element {
    rootElement: HTMLDivElement;
    x: number; y: number;
    width: number; height: number;

    constructor(props: DOMCanvas.IElementProps) {
        this.rootElement = document.createElement("div");

        // Set CSS Identifier:
        this.rootElement.setAttribute("data-dom-canvas", "element");

        // Set position:
        this.x = props.x; this.y = props.y;
    }
}

export class Text extends Element implements DOMCanvas.Text {
    innerText: string;
}

export class Rect extends Element implements DOMCanvas.Rect{
    background: string;
    strokeColor: string;
    strokeWidth: number;
}

export class Ellipse extends Rect implements DOMCanvas.Ellipse {
    borderRadius: number;
    borderRadiusUnit: "%" | "px";
}