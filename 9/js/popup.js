import {typeItems} from './data.js';

const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
const createPopup = (data) => {
  const popup = cardTemplate.cloneNode(true);
  popup.querySelector('.popup__title').textContent = data.offer.title;
  popup.querySelector('.popup__avatar').src = data.author.avatar;
  popup.querySelector('.popup__text--address').textContent = data.offer.address;
  popup.querySelector('.popup__text--price').textContent = `${data.offer.price} ₽/ночь`;
  popup.querySelector('.popup__text--capacity').textContent = `${data.offer.rooms} комнаты для ${data.offer.guests} гостей`;
  popup.querySelector('.popup__text--time').textContent = `Заезд после ${data.offer.checkin}, выезд до ${data.offer.checkout}`;
  popup.querySelector('.popup__description').textContent = data.offer.description;
  popup.querySelector('.popup__type').textContent = typeItems[data.offer.type];
  const featuresList = popup.querySelector('.popup__features');
  const feature = featuresList.querySelector('.popup__feature');
  featuresList.innerHTML = '';
  feature.classList.remove('popup__feature--wifi');
  if (data.offer.features) {
    data.offer.features.forEach((element) => {
      const newFeature = feature.cloneNode(true);
      featuresList.appendChild(newFeature);
      newFeature.classList.add(`popup__feature--${element}`);
    });
  } else {
    featuresList.remove();
  }

  const photosList = popup.querySelector('.popup__photos');
  const photo = photosList.querySelector('.popup__photo');
  photosList.innerHTML = '';
  if (data.offer.photos) {
    data.offer.photos.forEach((element) => {
      const newPhoto = photo.cloneNode(true);
      newPhoto.src = element;
      photosList.appendChild(newPhoto);
    });
  } else {
    photosList.remove();
  }
  return popup;
};

export {createPopup};
