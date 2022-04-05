//Функция, возвращающая случайное целое число из переданного диапазона включительно

function getRandomPositiveInteger(a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}
getRandomPositiveInteger(1, 4);

//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно

function getRandomPositiveFloat(a, b, digits = 1) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(digits);
}
getRandomPositiveFloat(1, 3, 2);

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];
const getRandomArray = (elements) => elements.sort(() => Math.random() - 0.5).slice(0, getRandomPositiveInteger(0, elements.length - 1));

const isEscapeKey = (evt) => evt.key === 'Escape';
const isEnterKey = (evt) => evt.key === 'Enter';
const isMouseClick = (evt) => evt.which === 1;
const ALERT_SHOW_TIME = 5000;
const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const showSendDataError = () => {
  const errorMessage = document.querySelector('#error').content.querySelector('.error').cloneNode(true);
  document.body.append(errorMessage);
  const errorMessageTitle = document.querySelector('.error');
  const errorButton = document.querySelector('.error__button');
  errorButton.addEventListener('click', () => {
    errorMessageTitle.classList.add('hidden');
  });

  document.removeEventListener('click', () => {
    errorMessageTitle.classList.add('hidden');
  });

  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      errorMessageTitle.classList.add('hidden');
    }
  });

  document.removeEventListener('keydown', () => {
    errorMessageTitle.classList.add('hidden');
  });

  document.addEventListener('mouseup', (evt) => {
    if (isMouseClick(evt)) {
      evt.preventDefault();
      errorMessageTitle.classList.add('hidden');
    }
  });

  document.removeEventListener('mouseup', () => {
    errorMessageTitle.classList.add('hidden');
  });
};

const showSendDataSuccess = () => {
  const successMessage = document.querySelector('#success').content.querySelector('.success').cloneNode(true);
  document.body.append(successMessage);
  const successMessageTitle = document.querySelector('.success');
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      successMessageTitle.classList.add('hidden');
    }
  });

  document.removeEventListener('keydown', () => {
    successMessageTitle.classList.add('hidden');
  });

  document.addEventListener('mouseup', (evt) => {
    if (isMouseClick(evt)) {
      evt.preventDefault();
      successMessageTitle.classList.add('hidden');
    }
  });

  document.removeEventListener('keydown', () => {
    successMessageTitle.classList.add('hidden');
  });
};

// const onPopupEscKeydown = (evt) => {
//   if (isEscapeKey(evt)) {
//     evt.preventDefault();
//     closeUserModal();
//   }
// };

// document.addEventListener('keydown', (evt) => {
//   if (isEscapeKey(evt)) {
//     evt.preventDefault();
//     errorMessageTitle.classList.add('hidden');
//   }
// });


// errorMessageTitle.addEventListener('click', () => {
//   this.classList.remove('hidden');
// });

export { getRandomPositiveInteger };
export { getRandomPositiveFloat };
export { getRandomArrayElement };
export { getRandomArray };
export { isEscapeKey, isEnterKey, showAlert, showSendDataError, showSendDataSuccess };
