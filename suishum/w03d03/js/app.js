$(() => {
  console.log('js loaded');

  //DOM ELEMENT VARIABLES
  const $timeBox = $('.timeBox');
  const $timer = $('.timer');
  const $sum = $('.sum');
  const $go = $('.go');
  const $form = $('.form');
  const $answer = $('.answer');
  const $submit = $('.submit');
  const $score = $('.score');
  const $message = $('.message');

  //VARIABLES
  let answer = 0;
  let message = '';
  let score = 0;
  let count = 10;
  // let leaderBoard = {};

  //STOLEN FROM THE INTERNET
  $.fn.shake = function() {
    this.each(function(i) {
      $(this).css({
        backgroundColor: 'red',
        position: 'absolute'
      });
      for (var x = 1; x <= 3; x++) {
        $(this).animate({
          left: 43
        }, 10).animate({
          left: 23
        }, 50).animate({
          left: 23
        }, 10).animate({
          left: 13
        }, 50).animate({
          left: 43
        }, 50).animate({
          left: 33
        }, 50).animate({
          left: 23
        }, 50);
      }
    });
    return this;
  };

  //get timer to start when GO is clicked, also hide GO and reveal input box
  $go.on('click', () => {
    $timeBox.css({ backgroundColor: '#8ACDD4'});
    //insert randomly generated sum
    const randomNum = Math.ceil(Math.random() * 10);
    const randomNum2 = Math.ceil(Math.random() * 10);
    $sum.html(`${randomNum} + ${randomNum2} = ?`);
    answer = randomNum + randomNum2;
    const timerId = setInterval(() => {
      count--;
      $timer.html(count);
      if (count <= 0) {
        clearInterval(timerId);
        $timeBox.shake();
        //store score to add to leaderboard object?
        $go.html('Play again?');
        $go.toggleClass('hidden');
        $form.toggleClass('hidden');
        $message.html(`Game Over! Your score was: ${score}`);
        $score.html('0');
        score = 0;
        count = 10;
      }
    }, 1000);
    $go.toggleClass('hidden');
    $form.toggleClass('hidden');
  });

  $submit.on('click', (e) => {
    e.preventDefault();
    if (parseInt($answer.val()) === answer) {
      score++;
      $message.html('Yes mate!');
      count++;
      $timeBox.css({ backgroundColor: 'lightgreen' });
      setTimeout(() => {
        $timeBox.css({ backgroundColor: '#8ACDD4' });
      }, 500);
    } else {
      $message.html('Try again ):');
      count--;
      $timeBox.css({ backgroundColor: 'orange' });
      setTimeout(() => {
        $timeBox.css({ backgroundColor: '#8ACDD4' });
      }, 500);
    }
    //insert randomly generated sum
    const randomNum = Math.ceil(Math.random() * 10);
    const randomNum2 = Math.ceil(Math.random() * 10);
    $sum.html(`${randomNum} + ${randomNum2} = ?`);
    answer = randomNum + randomNum2;
    $answer.val('');
    $score.html(score);
  });


});
