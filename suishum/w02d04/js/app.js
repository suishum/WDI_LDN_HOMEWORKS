window.addEventListener('DOMContentLoaded', () => {
  // code here
  console.log('js loaded');
  //task one
  const toggleButton = document.getElementById('toggle');
  const circle = document.getElementsByClassName('circle')[0];
  toggleButton.addEventListener('click', () => {
    circle.classList.toggle('pulse');
  });

  //task two
  const citiesDropDown = document.getElementById('cities');
  const citySpan = document.getElementById('city');
  citiesDropDown.addEventListener('change', () => {
    citySpan.innerHTML = `${citiesDropDown.value}`;
  });

  //task three
  //part one
  const nameDivsArr = document.getElementsByClassName('name');
  const currentSpan = document.getElementById('current');
  for (let i=0; i<nameDivsArr.length; i++) {
    nameDivsArr[i].addEventListener('mouseover', () => {
      currentSpan.innerHTML = `${nameDivsArr[i].innerHTML}`;
    });
    //part two
    nameDivsArr[i].addEventListener('mouseout', () => {
      currentSpan.innerHTML = '';
    });
  }

  //task 4
  const subscribeForm = document.getElementById('subscribe');
  const formButton = document.getElementsByClassName('submit')[0];
  subscribeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    formButton.classList.add('submitted');
    formButton.innerHTML = 'Submitted!';
  });

  //task five
  const h1Element = document.getElementsByTagName('h1')[0];
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      h1Element.classList.add('fadeOutUp');
    } else {
      h1Element.classList.remove('fadeOutUp');
    }
  });


//e.preventDefault();
});
