import { main } from "./main.js";
import { slider } from "./slider.js";

main();
slider();

const map = L.map('map')
  .setView({
    lat: 59.968137,
    lng: 30.316272,
  }, 10);

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
