import { sendData } from './api.js';
import { showSendDataError, showSendDataSuccess } from './utils.js';

const orderForm = document.querySelector('.ad-form');
const roomNumber = orderForm.querySelector('#room_number');
const capacity = orderForm.querySelector('#capacity');
const priceInput = orderForm.querySelector('#price');
const houseType = orderForm.querySelector('#type');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');
const ROOM_GUEST_AMOUNT = {
  '1': ['1'],
  '2': ['1', '2'],
  '3': ['1', '2', '3'],
  '100': ['0']
};
const HOUSE_MIN_PRICE = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000
};

const pristine = new Pristine(orderForm, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
});

const getHousePriceError = () => `Минимальная цена ${priceInput.min}`;

function validatePrice() {
  priceInput.placeholder = HOUSE_MIN_PRICE[houseType.value];
  priceInput.min = HOUSE_MIN_PRICE[houseType.value];
  return +priceInput.value >= +priceInput.min;
}

pristine.addValidator(
  priceInput,
  validatePrice,
  getHousePriceError
);

houseType.addEventListener('change', () => {
  pristine.validate();
});

pristine.addValidator(
  houseType,
  validatePrice,
);

const getGuestAmountError = () => 'Данные заполнены неверно';

function validateRoomGuest() {
  return ROOM_GUEST_AMOUNT[roomNumber.value].includes(capacity.value);
}

pristine.addValidator(
  roomNumber,
  validateRoomGuest,
  getGuestAmountError
);

capacity.addEventListener('change', () => {
  pristine.validate();
});

orderForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (pristine.validate()) {
    sendData(showSendDataSuccess, showSendDataError, new FormData(orderForm));
  }
});

timeIn.addEventListener('change', () => {
  timeOut.value = timeIn.value;
});
timeOut.addEventListener('change', () => {
  timeIn.value = timeOut.value;
});

