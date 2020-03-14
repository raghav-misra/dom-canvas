declare module DOMCanvas {
    /* Canvas */
    export class Canvas {
        constructor(rootElement: HTMLDivElement);

        add(element: Element): void;
        remove(element: Element): void;

        on(eventName: string, handler: Function): void;

        isPressed(key: string): boolean;
    }

    /* Element Types */
    export class Element implements IElementProps {
        constructor(props: IElementProps);
        on(eventName: string, handler: Function): void;
        rootElement: HTMLDivElement;
        x: number; y: number;
        width: number; height: number;
        background: string; border: string;
        ellipse: boolean;
        text: string; font: string; textColor: string;
    }

    export interface IElementProps {
        [key: string]: any;

        x: number; y: number;
        width?: number; height?: number;
        background?: string; border?: string;
        ellipse?: boolean;
        text?: string; font?: string; textColor?: string;
    }

    /* DefaultExport */
    export interface IDefaultExport {
        Element: typeof Element;
        Canvas: typeof Canvas;
    }
}
