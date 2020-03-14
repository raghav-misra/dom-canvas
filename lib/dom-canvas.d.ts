declare module DOMCanvas {
    /* Canvas */
    export class Canvas {
        constructor(rootElement: HTMLDivElement);
        rootElement: HTMLDivElement;
    }

    /* Element Props */
    export interface IElementProps {
        [key: string]: any;

        x: number; y: number;
        width: number; height: number;
    }

    /* Element Types */
    type ElementConstructor = (props: IElementProps) => Element;

    export class Element {
        constructor(props: IElementProps);

        rootElement: HTMLDivElement;
        x: number; y: number;
        width: number; height: number;
    }

    export class Text extends Element {
        innerText: string;
    }

    export class Rect extends Element {
        background: string;
        strokeWidth: number;
        strokeColor: string;
    }

    export class Ellipse extends Rect {
        borderRadius: number;
        borderRadiusUnit: "px" | "%";
    }

    /* DefaultExport */
    export interface IDefaultExport {
        createElement(elementType: typeof Element, props: IElementProps): Element;
        Element: typeof Element;
        Text: typeof Text;
        Rect: typeof Rect;
        Ellipse: typeof Ellipse;
        Canvas: typeof Canvas;
    }
}
