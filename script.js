const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const gameOver = document.querySelector('.opp');
document.addEventListener('F5', replay)


function replay() {
  document.addEventListener('F5')
}
const jump = () => {
  mario.classList.add('jump');

  setTimeout(() => {
    mario.classList.remove('jump');
  }, 500)
}

const loop = setInterval(() => {

  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;

    mario.src = 'img/game-over.png'
    mario.style.width = '80px '
    mario.style.marginLeft = '30px'
    gameOver.style.opacity = '100'
    clearInterval(loop);
  }

}, 10)




document.addEventListener('keydown', jump)
