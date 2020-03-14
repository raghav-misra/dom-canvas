/// <reference path="../../lib/dom-canvas.d.ts" />

export class Element implements DOMCanvas.Element {
    rootElement: HTMLDivElement;
    x: number; y: number;
    width: number; height: number;

    constructor(props: DOMCanvas.IElementProps) {
        this.rootElement = document.createElement("div");
        this.rootElement.classList.add("dom-canvas element");

        const { x, y, width, height } = props;
        this.x = x; this.y = y;
        this.width = width; this.height = height;
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