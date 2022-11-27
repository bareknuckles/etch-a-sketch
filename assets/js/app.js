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


let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);


function changeDbGridSize(value) {
    setCurrentDbGridSize(value);
    updateDbGridSizeValue(value);
    resetDbGrid();
}

function updateDbGridSizeValue(value) {
    dbGridSizeValue.innerHTML = `${value} x ${value}`;
}

function resetDbGrid() {
    clearDbGrid();
    setupDbGrid(currentDbGridSize);
}

function clearDbGrid() {
    dbGrid.innerHTML = '';
}

function setupDbGrid(size) {
    dbGrid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    dbGrid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let area = size * size;
    for(let i = 0; i < area; i++) {
        const dbGridElement = document.createElement('div');
        dbGridElement.classList.add('grid_element');
        dbGridElement.addEventListener('mouseover', changeColor);
        dbGridElement.addEventListener('mousedown', changeColor);
        dbGrid.appendChild(dbGridElement);
    }
}

function changeColor(e) {
    if(e.type === 'mouseover' && !mouseDown) return;
    if(currentMode === 'rainbow') {
        let randRed = Math.floor(Math.random() * 256);
        let randGreen = Math.floor(Math.random() * 256);
        let randBlue = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${randRed}, ${randGreen}, ${randBlue})`;
    }else if(currentMode === 'color') {
        e.target.style.backgroundColor = currentColor;
    }else if(currentMode === 'eraser') {
        e.target.style.backgroundColor = '#fefefe';
    }
}

function activateButton(newMode) {
    if(currentMode === 'rainbow') {
        rainbowBtn.classList.remove('active');
    }else if(currentMode === 'color') {
        colorBtn.classList.remove('active');
    }else if(currentMode === 'eraser') {
        eraserBtn.classList.remove('active');
    }

    if(newMode === 'rainbow') {
        rainbowBtn.classList.add('active');
    }else if(newMode === 'color') {
        colorBtn.classList.add('active');
    }else if(newMode === 'eraser') {
        eraserBtn.classList.add('active');
    }
}

window.onload = () => {
    setupDbGrid(defaultDbGridSize);
    activateButton(defaultMode);
}