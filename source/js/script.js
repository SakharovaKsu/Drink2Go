function onContentLoaded() {
  // Main
  let navMain = document.querySelector('.nav');
  let navToggle = document.querySelector('.nav__button');

  navMain.classList.remove('nav--nojs');

  navToggle.addEventListener('click', function () {
      navMain.classList.toggle('nav--closed');
      navMain.classList.toggle('nav--opened');
  });

  // Map
  const map = L.map('map')
    .setView({
      lat: 59.968137,
      lng: 30.316272,
    }, 17);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  const mainPinIcon = L.icon({
    iconUrl: '../img/map-pin.svg',
    iconSize: [38, 50],
    iconAnchor: [19, 50],
  });

  const marker = L.marker(
    {
      lat: 59.968137,
      lng: 30.316272,
    },
    {
      icon: mainPinIcon,
    },
  );

  marker.addTo(map);

  const buttonPrev = document.querySelector('.slider__prev-button');
  const buttonNext = document.querySelector('.slider__next-button');
  const slides = document.querySelectorAll('.slider__item');
  const sliderCarousel = document.querySelectorAll('.slider__carousel');

  const current = 0;
  
}

window.addEventListener('DOMContentLoaded', onContentLoaded);
