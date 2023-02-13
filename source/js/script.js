// getComputedStyle polyfill
window.getComputedStyle = function(e, t) {
  return this.el = e, this.getPropertyValue = function(t) {
    /** @type {RegExp} */
    var n = /(\-([a-z]){1})/g;
    return t == "float" && (t = "styleFloat"), n.test(t) && (t = t.replace(n, function() {
      return arguments[2].toUpperCase();
    })), e.currentStyle[t] ? e.currentStyle[t] : null;
  }, this;
};

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

  $(document).ready(function(){
    $('.slider').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear'
    });
  });
}

window.addEventListener('DOMContentLoaded', onContentLoaded);
