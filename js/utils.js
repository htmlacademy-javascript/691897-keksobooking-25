import { resetApp } from './map.js';

const ALERT_SHOW_TIME = 5000;
function toggleFormDisableStatus(status) {
  const inputs = document.querySelectorAll('.ad-form fieldset');
  inputs.forEach((input) => { input.disabled = status; });
}

const toggleFilterFormDisableStatus = (status) => {
  const inputs = document.querySelectorAll('.map__filters fieldset, .map__filters select');
  inputs.forEach((input) => { input.disabled = status; });
};

const isEscapeKey = (evt) => evt.key === 'Escape';
const isEnterKey = (evt) => evt.key === 'Enter';

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

  const closeUserModal = () => {
    errorMessageTitle.remove('error');
    document.removeEventListener('keydown', onPopupEscKeydown);
  };

  function onPopupEscKeydown(evt) {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeUserModal();
    }
  }

  errorButton.addEventListener('click', closeUserModal);
  document.addEventListener('keydown', onPopupEscKeydown);

  errorMessageTitle.addEventListener('click', (evt) => {
    evt.preventDefault();
    closeUserModal();
  });
};

const showSendDataSuccess = () => {
  const successMessage = document.querySelector('#success').content.querySelector('.success').cloneNode(true);
  document.body.append(successMessage);
  const successMessageTitle = document.querySelector('.success');
  const closeUserModal = () => {
    successMessageTitle.remove('success');
    document.removeEventListener('keydown', onPopupEscKeydown);
  };
  resetApp();
  function onPopupEscKeydown(evt) {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeUserModal();
    }
  }
  document.addEventListener('keydown', onPopupEscKeydown);
  successMessageTitle.addEventListener('click', (evt) => {
    evt.preventDefault();
    closeUserModal();
  });
};

function debounce(callback, timeoutDelay = 500) {

  let timeoutId;

  return (...rest) => {

    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

export { isEscapeKey, isEnterKey, showAlert, showSendDataError, showSendDataSuccess };
export { toggleFormDisableStatus, toggleFilterFormDisableStatus };
export { debounce };
