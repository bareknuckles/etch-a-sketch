const defaultColor = '#33323d';
const defaultMode = 'color';
const defaultDbGridSize = 16;

let currentColor = defaultColor;
let currentMode = defaultMode;
let currentDbGridSize = defaultDbGridSize;

function setCurrentColor(newColor) {
    currentColor = newColor;
}

function setCurrentMode(newMode) {
    currentMode = newMode;
}

function setCurrentDbGridSize(newDbGridSize) {
    currentDbGridSize = newDbGridSize;
}

const colorPicker = document.getElementById('color-picker');
const colorBtn = document.getElementById('color-btn');
const rainbowBtn = document.getElementById('rainbow-color-btn');