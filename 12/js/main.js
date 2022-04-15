import './form.js';
import {setMap, clearMap, renderPins} from './map.js';
import './slider.js';
import {filterOffers, mapFilters} from './filter.js';
import './avatars.js';
// import {setUserFormSubmit} from './form.js';
import {getData} from './api.js';
import { toggleFormDisableStatus, showAlert } from './utils.js';
import {debounce} from './utils.js';

const RERENDER_DELAY = 500;

toggleFormDisableStatus(true);
getData((offers) => {
  setMap(offers.slice(0, 10));
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
  toggleFormDisableStatus(false);
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

