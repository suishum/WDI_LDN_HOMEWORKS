//VARIABLES
let time = 10;
let timerRunning = false;
let timerId = null;

function domLogic() {
  //CLOCK
  //DOM DEPENDANT VARIABLES
  const watchScreen = document.querySelector('#watch .screen');
  //DOM DEPENDANT FUNCTIONS
  function getTime() {
    //get the time
    const currentDate = new Date;
    //assign hours, minutes and seconds
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    //convert time to HH:MM:SS format
    hours = (hours < 10) ? `0${hours}` : hours;
    minutes = (minutes < 10) ? `0${minutes}` : minutes;
    seconds = (seconds < 10) ? `0${seconds}` : seconds;
    watchScreen.innerHTML = `${hours}:${minutes}:${seconds}`;
  }
  //make clock display time every 1 second
  const clockTimerId = setInterval(getTime, 1000);

  //TIMER
  //DOM DEPENDANT VARIABLES
  const timer = document.querySelector('#timer');
  const resetBtn = document.getElementById('reset');
  const startStopBtn = document.getElementById('startStop');
  const timerScreen = document.querySelector('#timer .screen');

  //add listener on start stop button
  //if timer is not running, decrease time by 1 every 1 second (create function & put within setInterval).
  //if timer is running, stop the timer (clearInterval).
  //make sure timer stop at 0. (if statement)
  //when timer reaches 0, add ringing class.
  //when timer is not 0, remove ringing class.
  //add listener to reset button
  //reset time (to 10) and clearInterval

  //DOM DEPENDANT FUNCTIONS
  function decreaseByOne() {
    if (time > 0) {
      --time;
      timerScreen.innerHTML = time;
    }
    if (time === 0) {
      timer.classList.add('ringing');
    } else {
      timer.classList.remove('ringing');
    }
  }

  function startStop() {
    if (!timerRunning) {
      timerRunning = true;
      timerId = setInterval(decreaseByOne, 1000);
    } else {
      timerRunning = false;
      clearInterval(timerId);
    }
  }

  function reset() {
    timerRunning = false;
    clearInterval(timerId);
    timer.classList.remove('ringing');
    time = 10;
    timerScreen.innerHTML = time;
  }

  //EVENT LISTENERS
  startStopBtn.addEventListener('click', startStop);
  resetBtn.addEventListener('click', reset);

  //BONUS: show date
  const dateBtn = document.querySelector('.date-button');
  const dateScreen = document.querySelector('#date');
  function getDate() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    //get the date
    const currentDate = new Date;
    //assign to variables
    const day = days[currentDate.getDay()];
    const date = currentDate.getDate();
    const month = months[currentDate.getMonth()];
    const year = currentDate.getFullYear();
    //return date as a string
    return `${day} ${date} ${month} ${year}`;
  }

  function showDate() {
    dateScreen.innerHTML = getDate();
  }

  dateBtn.addEventListener('click', showDate);
}

window.addEventListener('DOMContentLoaded', domLogic);
