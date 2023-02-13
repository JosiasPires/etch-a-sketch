const grid = document.querySelector('.grid');
for (let i = 0; i < 64**2; i++) {
    const createCell = document.createElement('div');
    createCell.setAttribute('class', 'gridCell');
    grid.appendChild(createCell);
}
