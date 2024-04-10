

let board = document.querySelector('.board');

let btn = document.querySelector('.btn');

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

btn.addEventListener('click', ()=>{
    let circle = document.createElement('div');
    circle.className = 'circle';

    let top = Math.floor(Math.random() * 370);
    let left = Math.floor(Math.random() * 670);
    let color = getRandomColor();

    circle.style.top = `${top}px`;
    circle.style.left = `${left}px`;
    circle.style.backgroundColor = color;

    board.appendChild(circle)
    
})