import {sendData} from './api.js';
import {showSendDataError, showSendDataSuccess} from './utils.js';

const orderForm = document.querySelector('.ad-form');
const pristine = new Pristine(orderForm, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
});

const priceInput = orderForm.querySelector('#price');
const houseType = orderForm.querySelector('#type');
const houseMinPrice = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000
};

const getHousePriceError = () => `Минимальная цена ${priceInput.min}`;

function validatePrice () {
  priceInput.placeholder = houseMinPrice[houseType.value];
  priceInput.min = houseMinPrice[houseType.value];
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

const roomNumber = orderForm.querySelector('#room_number');
const capacity = orderForm.querySelector('#capacity');
const roomGuestAmount = {
  '1': ['1'],
  '2': ['1', '2'],
  '3': ['1', '2', '3'],
  '100': ['0']
};

const getGuestAmountError = () => 'Данные заполнены неверно';

function validateRoomGuest () {
  return roomGuestAmount[roomNumber.value].includes(capacity.value);
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
// const setUserFormSubmit = (onSuccess) => {
//   orderForm.addEventListener('submit', (evt) => {
//     evt.preventDefault();
//     const isValid = pristine.validate();
//     if (isValid) {
//       const formData = new FormData (evt.target);
//       fetch(
//         'https://25.javascript.pages.academy/keksobooking',
//         {
//           method: 'POST',
//           body: formData,
//         },
//       )
//         .then((response) => {
//           if (response.ok) {
//             onSuccess();
//           } else {
//             showAlert('Не удалось отправить форму. Попробуйте ещё раз');
//           }
//         })
//         .catch(() => {
//           showAlert('Не удалось отправить форму. Попробуйте ещё раз');
//         });
//     }
//   });
// };

const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');

timeIn.addEventListener('change', () => {
  timeOut.value = timeIn.value;
});
timeOut.addEventListener('change', () => {
  timeIn.value = timeOut.value;
});

// export {setUserFormSubmit};
