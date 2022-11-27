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
const eraserBtn = document.getElementById('eraser-btn');
const resetBtn = document.getElementById('reset-btn');
const dbGridSizeValue = document.getElementById('db-size-value');
const dbGridSizeSlider = document.getElementById('db-size-slider');
const dbGrid = document.getElementById('db-grid');

colorPicker.oninput = (e) => setCurrentColor(e.target.value);
colorBtn.onclick = () => setCurrentMode('color');
rainbowBtn.onclick = () => setCurrentMode('rainbow');
eraserBtn.onclick = () => setCurrentMode('eraser');
resetBtn.onclick = () => resetDbGrid();
dbGridSizeSlider.onmousemove = (e) => updateDbGridSizeValue(e.target.value);
dbGridSizeSlider.onchange = (e) => changeDbGridSize(e.target.value); 


