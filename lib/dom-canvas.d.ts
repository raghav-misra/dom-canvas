declare module DOMCanvas {
    /* Canvas */
    export class Canvas {
        constructor(rootElement: HTMLDivElement);
        rootElement: HTMLDivElement;
    }

    /* Element Types */
    export class Element implements IElementProps {
        constructor(props: IElementProps);

        rootElement: HTMLDivElement;
        x: number; y: number;
    }

    export interface IElementProps {
        [key: string]: any;
        x: number; y: number;
    }

    export class Text extends Element implements ITextProps {
        constructor(props: ITextProps);
        text: string;
        font: string;
    }

    export interface ITextProps extends IElementProps {
        text: string;
        font: string;
    }

    export class Rect extends Element implements IShapeProps {
        background: string;
        stroke: string;
    }

    export class Ellipse extends Rect {

    }

    export interface IShapeProps extends IElementProps {
        background: string;
        stroke: string;
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
