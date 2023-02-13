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

  // Slide
  const buttonPrev = document.querySelector('.slider__prev-button');
  const buttonNext = document.querySelector('.slider__next-button');
  const slider = document.querySelector('.slider');
  const slidesItem = document.querySelectorAll('.slider__item');
  const dot = document.querySelector('.slider__dot');
  const sliderCarousel = document.querySelectorAll('.slider__carousel');

  let current = 0;
  
  slider.classList.remove('slider--no-js');

  function showSlide() {
    const sliderActive = document.querySelector('.slider__item--active');
    sliderActive.classList.remove('slider__item--active');
    slidesItem[current].classList.add('slider__item--active');

    const carouselActive = document.querySelector('.slider__carousel--active');
    carouselActive.classList.remove('slider__carousel--active');
    sliderCarousel[current].classList.add('slider__carousel--active');
  }

  buttonNext.addEventListener('click', function() {
    current ++;

    if(current > slidesItem.length - 1) {
      current = 0;
    };

    showSlide();
  })

  buttonPrev.addEventListener('click', function() {
    current --;

    if(current < 0) {
      current = slidesItem.length - 1;
    };

    showSlide();
  })

  dot.addEventListener('click', function(e) {
    if(e.target.dataset.show) {
      current = +e.target.dataset.show;
      
      showSlide();
    }
  })
}

window.addEventListener('DOMContentLoaded', onContentLoaded);
