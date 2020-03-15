var style = "\n    [data-dom-canvas] {\n        padding: 0;\n        margin: 0;\n    }\n\n    [data-dom-canvas=canvas] {\n        position: relative;\n    }\n\n    [data-dom-canvas=element] {\n        position: absolute;\n        pointer-events: none;\n    }\n";
// Add to DOM:
var styleElement = document.createElement("style");
styleElement.setAttribute("data-dom-canvas", "stylesheet");
styleElement.innerText = style.trim().replace(/\n/g, "").replace(/\t/g, "");
document.body.appendChild(styleElement);
