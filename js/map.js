import { toggleFormDisableStatus } from './utils.js';
import { createPopup } from './popup.js';
import { resetPictures } from './avatars.js';
import { resetFilters } from './filter.js';
import { data } from './main.js';

const pinsLayer = L.layerGroup([]);
let map;
const initMap = () => {
  map = L.map('map-canvas').on('load', () => {
    toggleFormDisableStatus(false);
  })
    .setView({
      lat: 35.68950,
      lng: 139.69200,
    }, 10);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);
};

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});
const mainPinMarker = L.marker(
  {
    lat: 35.68950,
    lng: 139.69200,
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

const setMarkers = (offers) => {
  document.querySelector('#address').value = '35.68950, 139.69200';

  const resetButton = document.querySelector('.ad-form__reset');
  renderPins(offers);
  pinsLayer.addTo(map);
  mainPinMarker.addTo(map);

  mainPinMarker.on('move', (evt) => {
    document.querySelector('#address').value = `${evt.target.getLatLng().lat.toFixed(5)}, ${evt.target.getLatLng().lng.toFixed(5)}`;
  });

  resetButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    resetApp();
  });
};

function resetApp ()  {
  document.querySelector('.ad-form').reset();
  document.querySelector('#address').value = '35.68950, 139.69200';
  mainPinMarker.setLatLng({
    lat: 35.68950,
    lng: 139.69200,
  });
  map.closePopup();
  map.setView({
    lat: 35.68950,
    lng: 139.69200,
  }, 10);
  resetPictures();
  resetFilters();
  setMarkers(data.slice(0, 10));
}

const clearMap = () => {
  pinsLayer.clearLayers();
};

export { setMarkers, resetApp, clearMap, renderPins, initMap };
