let zoomLevel = 1;

function zoommais() {
    zoomLevel += 0.1;
    const mainElement = document.querySelector('main');
    if (mainElement) {
        mainElement.style.transform = `scale(${zoomLevel})`;
        mainElement.style.transformOrigin = '0 0';
    }
}
function zoommenos() {
    zoomLevel -= 0.1;
    const mainElement = document.querySelector('main');
    if (mainElement) {
        mainElement.style.transform = `scale(${zoomLevel})`;
        mainElement.style.transformOrigin = '0 0';
    }
}

function resetZoom() {
    zoomLevel = 1;
    const mainElement = document.querySelector('main');
    if (mainElement) {
        mainElement.style.transform = `scale(${zoomLevel})`;
        mainElement.style.transformOrigin = '0 0';
    }
}
