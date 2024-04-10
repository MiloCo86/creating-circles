let board = document.querySelector('.board');

let btn = document.querySelector('.btn');

btn.addEventListener('click', ()=>{
    let circle = document.createElement('div');
    circle.className = 'circle';

    let top = Math.floor(Math.random() * 370);
    let left = Math.floor(Math.random() * 670);

    circle.style.top = `${top}px`;
    circle.style.left = `${left}px`;
    circle.style.backgroundColor = getRandomColor();

    board.appendChild(circle)
    
});

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}