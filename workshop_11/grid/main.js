const grid = document.querySelector("#grid");

const width = 50;
const height = 50;
const CELL_COUNT_X = 40;

function random(a, b) {
    return Math.floor(Math.random() * (b - a) + a);
}

grid.style.width = `${width * CELL_COUNT_X}px`;
grid.style.gridTemplateColumns = `repeat(${CELL_COUNT_X}, 1fr)`;

for (let i = 0; i < 1000; i++) {
    const cell = document.createElement('div');
    cell.style.width = `100%`;
    cell.style.height = `${height}px`;
    cell.style.background = `rgb(${random(0, 256)}, ${random(0, 256)}, ${random(0, 256)})`;
    cell.addEventListener('mouseenter', () => {
        cell.style.background = `rgb(${random(0, 256)}, ${random(0, 256)}, ${random(0, 256)})`;
    });
    grid.appendChild(cell);
}

// setInterval(() => {
//     for (const cell of grid.children) {
//         cell.style.background = `rgb(${random(0, 256)}, ${random(0, 256)}, ${random(0, 256)})`;
//     }
// }, 100);
