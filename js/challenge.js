const counter = document.getElementById('counter');
let likes = {};
let paused = false;

const plusButton = document
  .getElementById('plus')
  .addEventListener('click', (e) => {
    if (paused === false) {
      countNum++;
    }
  });

const minusButton = document
  .getElementById('minus')
  .addEventListener('click', (e) => {
    if (paused === false) {
      countNum--;
    }
  });

const likeButton = document
  .getElementById('heart')
  .addEventListener('click', (e) => {
    if (paused === false) {
      if (document.getElementById(counter.innerText)) {
        const li = document.getElementById(counter.innerText);
        likes[counter.innerText] += 1;
        li.innerText = `${counter.innerText} has been liked ${
          likes[counter.innerText]
        } times!`;
        // prettier-ignore
      } else {
        likes[counter.innerText] = 1;
        const likeMessage = document.createElement('li');
        likeMessage.id = counter.innerText;
        console.log(likeMessage);
        likeMessage.innerText = `${counter.innerText} has been liked ${
          likes[counter.innerText]
        } times!`;
        document.querySelector('.likes').appendChild(likeMessage);
      }
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

const formSubmit = document
  .getElementById('comment-form')
  .addEventListener('submit', postComment);

function postComment(event) {
  event.preventDefault();
  const comment = document.createElement('p');
  comment.innerText = document.getElementById('comment-input').value;
  document.getElementById('list').appendChild(comment);
}
