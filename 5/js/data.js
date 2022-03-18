import {getRandomPositiveInteger} from './utils.js';
import {getRandomPositiveFloat} from './utils.js';
import {getRandomArrayElement} from './utils.js';
import {getRandomArray} from './utils.js';

const TITLES = ['title1', 'title2', 'title3', 'title4', 'title5'];
const DESCRIPTIONS = ['Просторные светлые комнаты', 'Минималистический дизайн', 'Все выполненно в стиле HI-TECH', 'Новая мебель и ковры', 'Высокие потолки и панорамные окна'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECKIN = ['12:00', '13:00', '14:00'];
const CHECKOUT = ['12:00', '13:00', '14:00'];
const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
let i = 1;
const OFFER_COUNT = 10;

const typeItems = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель'
};

const getOffer = () => {
  let avatarNumber = i;
  if (i < 10) {
    avatarNumber = `0${i}`;
  }
  i++;
  const lat = getRandomPositiveFloat (35.65000, 35.70000, 5);
  const lng = getRandomPositiveFloat (139.70000, 139.80000, 5);
  return {
    author: {
      avatar: `img/avatars/user${avatarNumber}.png`
    },
    offer: {
      title: getRandomArrayElement(TITLES),
      address: `${lat} ${lng}`,
      price: getRandomPositiveInteger(0, 200),
      type: getRandomArrayElement(TYPE),
      rooms: getRandomPositiveInteger(1, 3),
      guests: getRandomPositiveInteger(1, 10),
      checkin: getRandomArrayElement(CHECKIN),
      checkout: getRandomArrayElement(CHECKOUT),
      features: getRandomArray(FEATURES),
      description: getRandomArrayElement(DESCRIPTIONS),
      photos: getRandomArray(PHOTOS)
    },
    location: {
      lat: lat,
      lng: lng
    }
  };
};
const getOffers = () => (Array.from({length: OFFER_COUNT}, getOffer));

export {getOffers};
export {typeItems};

