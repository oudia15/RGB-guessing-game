const selected = $('#selected');
const reset = $('#reset');
const answer = $('#answer');
const easy = $('#easy');
const hard = $('#hard');
let squares = document.querySelectorAll('.square');
let colors = [];
let pickedColor = '';
let numSquare = 6;
let trials = 0;

function genColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const color = `rgb(${r}, ${g}, ${b})`;
  return color;
}

function setColors() {
    for(let i = 0; i < numSquare; i++) {
      colors[i] = genColor();
      squares[i].style.background = colors[i];
    }

    if(numSquare === 3) {
      for(let i = 3; i < 6; i++) {
        squares[i].style.background = 'white'
      }
    }

    let rnd = Math.floor(Math.random()*numSquare);
    pickedColor = colors[rnd];
    selected.text(pickedColor);
    answer.text('');
    reset.text('Reset');
    trials = 0;
}

squares.forEach((sq) => {
  sq.addEventListener('click', () => {
      trials++;
      if(sq.style.background === pickedColor) {
        answer.text('Correct: ' + trials + ' trials');
        reset.text('Play again?');
        for(let i = 0; i < numSquare; i++) {
          squares[i].style.background = sq.style.background;
        }
      } else {
        sq.style.background = 'white';
        answer.text('Try again: ' + trials + ' trials');
      }
  });
});

reset.click(() => {
  setColors();
});

easy.click(() => {
  numSquare = 3;
  setColors();
});

hard.click(() => {
  numSquare = 6;
  setColors();
  console.log('Hard clicked');
});

setColors();
