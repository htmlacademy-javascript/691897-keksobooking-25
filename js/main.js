import './form.js';
import { toggleFormDisableStatus, toggleFilterFormDisableStatus, showAlert } from './utils.js';
import './slider.js';
import {filterOffers, mapFilters} from './filter.js';
import './avatars.js';
// import {setUserFormSubmit} from './form.js';
import {getData} from './api.js';
import {setMarkers, clearMap, renderPins, initMap} from './map.js';
import {debounce} from './utils.js';

const RERENDER_DELAY = 500;
toggleFilterFormDisableStatus(true);
toggleFormDisableStatus(true);
initMap();
getData((offers) => {
  setMarkers(offers.slice(0, 10));
  mapFilters.addEventListener('change', debounce (() => {
    clearMap();
    renderPins(filterOffers(offers).slice(0, 10));
  }, RERENDER_DELAY)

    // let timeoutId;

    // return (...rest) => {

    //   clearTimeout(timeoutId);
    //   timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
    // };
  );
  toggleFilterFormDisableStatus(false);
}, showAlert);


// toggleFormDisableStatus(true);
// getData((offers) => {
//   setMap(offers.slice(0, 10));
//   mapFilters.addEventListener('change', () => {
//     clearMap();
//     renderPins(filterOffers(offers).slice(0, 10));
//   });
//   toggleFormDisableStatus(false);
// }, showAlert);


// setUserFormSubmit();
// , (error) => {console.log(error);}

