export function applyStyles() {
    var styleElement = document.createElement("style");
    styleElement.setAttribute("data-dom-canvas", "stylesheet");
    document.body.appendChild(styleElement);
}
