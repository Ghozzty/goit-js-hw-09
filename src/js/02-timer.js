// import libs
import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.min.css';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

// refs

const input = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('button[data-start]');
const textDays = document.querySelector('span[data-days]');
const textHours = document.querySelector('span[data-hours]');
const textMinutes = document.querySelector('span[data-minutes]');
const textSeconds = document.querySelector('span[data-seconds]');
const timer = document.querySelector('.timer');

// create_buttonStop
const btnStop = document.createElement('button');
btnStop.textContent = 'Reset';
btnStop.style.marginLeft = '5px';
btnStart.after(btnStop);
btnStop.disabled = true;
// css
timer.style.display = 'inline-block';
timer.style.marginLeft = '100px';
timer.style.fontSize = '20px';
timer.style.padding = '20px';
timer.style.borderRadius = '20px';
timer.style.backgroundColor = 'tomato';
timer.style.border = '10px solid black';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// css

btnStart.disabled = true;

// variables

let datenow = null;

let dateSelected = null;

let remainedTime = null;

let intervalID = null;

// calendar optoions

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    datenow = new Date().getTime();
    dateSelected = selectedDates[0].getTime();
    selectingTime();
  },
};

// set calendar

flatpickr(input, options);

// check correct dataTime

function selectingTime() {
  if (dateSelected > datenow) {
    btnStart.disabled = false;
    remainedTime = dateSelected - datenow;

    return;
  }
  Notify.failure('Please choose a date in the future');
}

// convert function

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// correct format time function

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

// main func

function onClickStart() {
  if (intervalID) {
    Notify.failure(
      'Sorry, the counter is already run. Please, cut the red wire'
    );
    return;
  }
  intervalID = setInterval(() => {
    remainedTime -= 1000;
    const setTime = convertMs(remainedTime);
    textDays.textContent = addLeadingZero(setTime.days);
    textHours.textContent = addLeadingZero(setTime.hours);
    textMinutes.textContent = addLeadingZero(setTime.minutes);
    textSeconds.textContent = addLeadingZero(setTime.seconds);
    // css
    timer.style.borderColor = getRandomHexColor();
  }, 1000);
  Notify.success(`Ok, let's begin`);

  btnStop.disabled = false;
}

// main event

btnStart.addEventListener('click', onClickStart);

btnStop.addEventListener('click', onClickStop);

// stop click func

function onClickStop() {
  clearInterval(intervalID);

  textDays.textContent = '00';
  textHours.textContent = '00';
  textMinutes.textContent = '00';
  textSeconds.textContent = '00';

  intervalID = null;
  btnStop.disabled = true;
  Notify.info('You stopped the counter');
}
