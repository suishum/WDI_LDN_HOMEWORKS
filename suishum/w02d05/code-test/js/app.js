window.addEventListener('DOMContentLoaded', () => {
  console.log('js loaded');


  //make progress bar increment when button is clicked
  //starting variables
  let donatedAmount = 0;

  //locate buttons
  const donateOneBtn = document.getElementById('donateOne');
  const donateFiveBtn = document.getElementById('donateFive');
  const donateTenBtn = document.getElementById('donateTen');

  //locate progress bar
  const progress = document.getElementById('progress');

  //add listeners to buttons
  donateOneBtn.addEventListener('click', () => {
    donatedAmount += 1;
    progress.style.width = `${donatedAmount}%`;
    if (donatedAmount > 100) {
      progress.style.width = '100%';
    }

  });
  donateFiveBtn.addEventListener('click', () => {
    donatedAmount += 5;
    progress.style.width = `${donatedAmount}%`;
    if (donatedAmount > 100) {
      progress.style.width = '100%';
    }
  });
  donateTenBtn.addEventListener('click', () => {
    donatedAmount += 10;
    progress.style.width = `${donatedAmount}%`;
    if (donatedAmount > 100) {
      progress.style.width = '100%';
    }
  });

  //change the message whenever an amount is donated.
  //locate all buttons
  const buttons = document.getElementById('donateButtons').children;

  //locate message div
  const message = document.getElementById('message');

  //add listener on all buttons so when they are clicked, update the message div
  for (let i=0; i<buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
      if (donatedAmount < 100) {
        message.innerHTML = `You need £${100 - donatedAmount} more to reach the target of £100`;
      } else if (donatedAmount === 100) {
        message.innerHTML = `You made it to £${donatedAmount}!`;
      } else {
        message.innerHTML = `You're £${donatedAmount - 100} over the target!`;
      }
    });
  }

  //need to code the pointer next but honestly i'm not sure where to start.


});
