const MIDDLE_PRICE_VALUE = 10000;
const MAX_PRICE_VALUE = 50000;
const housingType = document.querySelector('#housing-type');
const housingPrice = document.querySelector('#housing-price');
const housingRooms = document.querySelector('#housing-rooms');
const housingGuests = document.querySelector('#housing-guests');
const mapFilters = document.querySelector('.map__filters');

const resetFilters = () => {
  mapFilters.reset();
};
const checkType = ({ offer }) => {
  if (housingType.value === 'any') {
    return true;
  }
  return offer.type === housingType.value;
};

const checkPrice = ({ offer }) => {
  if (housingPrice.value === 'any') {
    return true;
  }
  if (housingPrice.value === 'low') {
    return offer.price < MIDDLE_PRICE_VALUE;
  }
  if (housingPrice.value === 'middle') {
    return offer.price > MIDDLE_PRICE_VALUE && offer.price < MAX_PRICE_VALUE;
  }
  if (housingPrice.value === 'high') {
    return offer.price > MAX_PRICE_VALUE;
  }
};

const checkRooms = ({ offer }) => {
  if (housingRooms.value === 'any') {
    return true;
  }
  return offer.rooms === +housingRooms.value;
};

const checkGuests = ({ offer }) => {
  if (housingGuests.value === 'any') {
    return true;
  }
  return offer.guests === +housingGuests.value;
};

const checkFeatures = ({ offer }) => {
  const features = document.querySelectorAll('.map__checkbox:checked');
  if (!offer.features && features.length) {
    return false;
  }
  for (let i = 0; i < features.length; i++) {
    if (!offer.features.includes(features[i].value)) {
      return false;
    }
  }
  return true;
};
const filterOffers = (offers) => offers.filter((offer) => checkType(offer) && checkFeatures(offer) && checkPrice(offer) && checkRooms(offer) && checkGuests(offer));

export { filterOffers, mapFilters, resetFilters };

