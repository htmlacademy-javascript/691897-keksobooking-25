
//Функция, возвращающая случайное целое число из переданного диапазона включительно

/*
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (min <= max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return false;
}

getRandomIntInclusive(1, 10);
*/

function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

getRandomPositiveInteger (1, 4);


//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно

/*
function getRandomFloat(min, max, digits) {
  if ((min >= 0) && (min <= max)) {
    return +(Math.random() * (max - min + 1) + min).toFixed(digits);
  }
  return false;
}

getRandomFloat(1, 3, 2);
*/

function getRandomPositiveFloat (a, b, digits = 1) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(digits);
}

getRandomPositiveFloat(1, 3, 2);


const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const getRandomArray = (elements) => elements.sort(() => Math.random() - 0.5).slice(0, getRandomPositiveInteger(0, elements.length - 1));

const TITLES = ['title1', 'title2', 'title3', 'title4', 'title5'];
const DESCRIPTIONS = ['Просторные светлые комнаты', 'Минималистический дизайн', 'Все выполненно в стиле HI-TECH', 'Новая мебель и ковры', 'Высокие потолки и панорамные окна'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECKIN = ['12:00', '13:00', '14:00'];
const CHECKOUT = ['12:00', '13:00', '14:00'];
const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
let i = 1;

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

// eslint-disable-next-line no-console
console.log(Array.from({length: 10}, getOffer));

