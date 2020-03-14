export function applyStyles() {
    const styleElement = document.createElement("style");
    styleElement.setAttribute("data-dom-canvas", "stylesheet");
    document.body.appendChild(styleElement);
}