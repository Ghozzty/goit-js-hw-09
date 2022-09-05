const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
let intervalId = null;
const body = document.body;

const disabledBtnStart = () => {
  btnStart.disabled = true;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const onClickStart = () => {
  btnStart.disabled = true;
  intervalId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
};
const onClickStop = () => {
  clearInterval(intervalId);

  btnStart.disabled = false;
};

btnStart.addEventListener('click', onClickStart);

btnStop.addEventListener('click', onClickStop);
