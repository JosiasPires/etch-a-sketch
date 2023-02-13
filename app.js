const grid = document.querySelector('.grid');
for (let i = 0; i < 25; i++) {
    const createCell = document.createElement('div');
    createCell.setAttribute('class', 'gridCell');
    grid.appendChild(createCell);
}

const cells = Array.from(document.querySelectorAll('.gridCell'));
