const counter = document.getElementById('counter');
let likes = 0;
let paused = false;

const plusButton = document
  .getElementById('plus')
  .addEventListener('click', (e) => {
    if (paused === false) {
      counter.innerText++;
    }
  });

const minusButton = document
  .getElementById('minus')
  .addEventListener('click', (e) => {
    if (paused === false) {
      counter.innerText--;
    }
  });

const likeButton = document
  .getElementById('heart')
  .addEventListener('click', (e) => {
    if (paused === false) {
      likes++;
      const likeMessage = document.createElement('p');
      likeMessage.innerText = `${counter.innerText} has been liked ${likes} times!`;
      document.querySelector('.likes').appendChild(likeMessage);
    }
  });

const pauseButton = document
  .getElementById('pause')
  .addEventListener('click', () => {
    const pauseObj = document.getElementById('pause');
    if (paused === true) {
      pauseObj.innerHTML = 'pause';
      paused = false;
      counterTimer = setInterval(() => {
        counter.innerText++;
      }, 1000);
    } else {
      pauseObj.innerHTML = 'resume';
      paused = true;
      clearInterval(counterTimer);
    }
  });

let counterTimer = setInterval(() => {
  counter.innerText++;
}, 1000);

const comment = document.getElementById('comment-form');

const commentClick = comment.addEventListener('submit', postComment);

function postComment(event) {
  comment.preventDefault();
  console.log(comment.textContent);
}
