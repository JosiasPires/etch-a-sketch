const grid = document.querySelector('.grid');
for (let i = 0; i < 64**2; i++) {
    const createCell = document.createElement('div');
    createCell.setAttribute('class', 'gridCell');
    grid.appendChild(createCell);
}

const cells = Array.from(document.querySelectorAll('.gridCell'));

cells.forEach(cell => {
    cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = 'black';
    })
})
