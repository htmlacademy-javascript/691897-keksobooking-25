import {createPopup} from './popup.js';
const setMap = (offers) => {
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

  const resetButton = document.querySelector('.ad-form__reset');
  const mainPinIcon = L.icon({
    iconUrl: './img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  });
  const PinIcon = L.icon({
    iconUrl: './img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
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
      .addTo(map)
      .bindPopup(createPopup(offer));
  });

  mainPinMarker.addTo(map);

  mainPinMarker.on('move', (evt) => {
    document.querySelector('#address').value = `${evt.target.getLatLng().lat.toFixed(5)}, ${evt.target.getLatLng().lng.toFixed(5)}`;
  });

  resetButton.addEventListener('click', () => {
    mainPinMarker.setLatLng({
      lat: 35.6894,
      lng: 139.692,
    });
    map.setView({
      lat: 35.6894,
      lng: 139.692,
    }, 10);
  });
};

export { setMap };
