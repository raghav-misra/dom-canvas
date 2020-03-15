/// <reference path="../../lib/dom-canvas.d.ts" />

export class Canvas implements DOMCanvas.Canvas {
    rootElement: HTMLDivElement;
    pressedKeys: { [key: string]: boolean } = Object.create(null);

    constructor(rootElement: HTMLDivElement | string) {
        if (typeof rootElement === "string") this.rootElement = document.querySelector(rootElement);
        else this.rootElement = rootElement;
        
        // Add CSS Identifier:
        this.rootElement.setAttribute("data-dom-canvas", "canvas");

        // Focusable:
        this.rootElement.setAttribute("tabindex", "-1");

        // Add key press handlers:
        this.on("keydown", ({ code }: KeyboardEvent) => (this.pressedKeys[code] = true));
        this.on("keyup", ({ code }: KeyboardEvent) => (this.pressedKeys[code] = false));
        this.on("blur", () => (this.pressedKeys = Object.create(null)));
    }

    add(element: DOMCanvas.Element) {
        this.rootElement.appendChild(element.rootElement);
    }

    remove(element: DOMCanvas.Element) {
        this.rootElement.removeChild(element.rootElement);
    }

    on(eventName: string, handler: Function) {
        this.rootElement.addEventListener(eventName, handler.bind(this));
    }

    isPressed(key: string) {
        return this.pressedKeys[key];
    }

    get width() { return this.rootElement.clientWidth; }
    get height() { return this.rootElement.clientHeight; }
}