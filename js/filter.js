const housingType = document.querySelector('#housing-type');
const housingPrice = document.querySelector('#housing-price');
const housingRooms = document.querySelector('#housing-rooms');
const housingGuests = document.querySelector('#housing-guests');
const mapFilters = document.querySelector('.map__filters');

const checkType = ({offer}) => {
  if (housingType.value === 'any') {
    return true;
  }
  return offer.type === housingType.value;
};

const checkPrice = ({offer}) => {
  if (housingPrice.value === 'any') {
    return true;
  }
  return offer.price === housingPrice.value;
};

const checkRooms = ({offer}) => {
  if (housingRooms.value === 'any') {
    return true;
  }
  return offer.rooms === housingRooms.value;
};

const checkGuests = ({offer}) => {
  if (housingGuests.value === 'any') {
    return true;
  }
  return offer.guests === housingGuests.value;
};


const checkFeatures = ({offer}) => {
  const features = document.querySelectorAll('.map__checkbox:checked');
  // console.log(features);
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

export {filterOffers, mapFilters};

