export const main = function () {
  let navMain = document.querySelector('.nav');
  let navToggle = document.querySelector('.nav__button');

  navMain.classList.remove('nav--nojs');

  navToggle.addEventListener('click', function () {
      navMain.classList.toggle('nav--closed');
      navMain.classList.toggle('nav--opened');
  });
}
