const style = `
    [data-dom-canvas] {
        padding: 0;
        margin: 0;
    }

    [data-dom-canvas=canvas] {
        position: relative;
    }

    [data-dom-canvas=element] {
        position: absolute;
    }
`;

// Add to DOM:
const styleElement = document.createElement("style");
styleElement.setAttribute("data-dom-canvas", "stylesheet");
styleElement.innerText = style.trim().replace(/\n/g, "").replace(/\t/g, "");
document.body.appendChild(styleElement);
