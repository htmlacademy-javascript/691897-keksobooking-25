import { createPopup } from './popup.js';
// console.log(L);
const pinsLayer = L.layerGroup([]);
const map = L.map('map-canvas')
  .setView({
    lat: 35.6894,
    lng: 139.692,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);
const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});
const mainPinMarker = L.marker(
  {
    lat: 35.6894,
    lng: 139.692,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);
const renderPins = (offers) => {
  const PinIcon = L.icon({
    iconUrl: './img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });
  offers.forEach((offer) => {
    const marker = L.marker(
      {
        lat: offer.location.lat,
        lng: offer.location.lng,
      },
      {
        PinIcon,
      },
    );

    marker
      .addTo(pinsLayer)
      .bindPopup(createPopup(offer));
  });
};
const resetApp = () => {
  document.querySelector('.ad-form').reset();
  document.querySelector('#address').value = '35.6894, 139.692';
  mainPinMarker.setLatLng({
    lat: 35.6894,
    lng: 139.692,
  });
  map.closePopup();
  map.setView({
    lat: 35.6894,
    lng: 139.692,
  }, 10);
};

const setMap = (offers) => {
  document.querySelector('#address').value = '35.6894, 139.692';

  const resetButton = document.querySelector('.ad-form__reset');
  renderPins(offers);
  pinsLayer.addTo(map);
  mainPinMarker.addTo(map);

  mainPinMarker.on('move', (evt) => {
    document.querySelector('#address').value = `${evt.target.getLatLng().lat.toFixed(4)}, ${evt.target.getLatLng().lng.toFixed(4)}`;
  });

  resetButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    resetApp();
  });
};

const clearMap = () => {
  pinsLayer.clearLayers();
};

export { setMap, resetApp, clearMap, renderPins };
