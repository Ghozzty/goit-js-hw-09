// lib
import { Notify } from 'notiflix/build/notiflix-notify-aio';
Notify.init({ position: 'center-center' });
// refs
const form = document.querySelector('.form');
// ref__amount
let amount = 0;
document.querySelector('input[name=amount]').addEventListener('input', e => {
  amount = Number(e.currentTarget.value);
});
//  ref__delay
let delay = 0;
const delayItem = document.querySelector('input[name=delay]');

delayItem.addEventListener('input', e => {
  delay = Number(e.currentTarget.value);
});

// ref__step
let step = 0;
document
  .querySelector('input[name=step]')
  .addEventListener('input', e => (step = Number(e.currentTarget.value)));

// main event

form.addEventListener('submit', submitEvent);

// createPromise

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

// check values

function isCorrectValues() {
  if (delay < 0 || step < 0 || amount < 1) {
    return false;
  }
  return true;
}

// function submit event

function submitEvent(e) {
  e.preventDefault();

  if (!isCorrectValues()) {
    return Notify.failure(`Please set correct values`);
  }

  let position = 1;

  for (let i = 0; i < amount; i += 1) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    position += 1;
    delay += step;
  }
  delay = Number(delayItem.value);
}
