const grid = document.querySelector('.grid');

function createGrid(size) {
    while (grid.firstChild) {
        grid.firstChild.remove();
    }
    for (let i = 0; i < size**2; i++) {
        const createCell = document.createElement('div');
        createCell.setAttribute('class', 'gridCell');
        grid.appendChild(createCell);
    }
    const cells = Array.from(document.querySelectorAll('.gridCell'));
    cells.forEach(cell => {
        cell.addEventListener('mouseover', () => {
            let brightness = Number(getComputedStyle(cell).filter.replace(/[^0-9.]/g, '')) - 0.1;
            if (getComputedStyle(cell).backgroundColor !== 'rgb(255, 255, 255)') {
                cell.style.filter = `brightness(${brightness})`;
            }
            else {
                cell.style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 257) + ',' + Math.floor(Math.random() * 257) + ',' + Math.floor(Math.random() * 257) + ')';
            }
        })
    })
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}

createGrid(16)

const sizeButton = document.querySelector('#sizeButton');

sizeButton.addEventListener('click', () => {
    let gridSize = prompt('Change grid size');
    while (gridSize > 100 || isNaN(gridSize)) {
        if (gridSize > 100) {
            alert('Maximum grid size: 100');
        }
        if (typeof gridSize !== 'number') {
            alert('Digit a number')
        }
        gridSize = prompt('Change grid size');
    }
    if (!gridSize) {
        gridSize = 16
    }
    createGrid(gridSize);
})