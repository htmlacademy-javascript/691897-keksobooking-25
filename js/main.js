import './form.js';
import './avatars.js';
import './slider.js';
import { toggleFormDisableStatus, toggleFilterFormDisableStatus, showAlert } from './utils.js';
import { filterOffers, mapFilters } from './filter.js';
import { getData } from './api.js';
import { setMarkers, clearMap, renderPins, initMap } from './map.js';
import { debounce } from './utils.js';

const RERENDER_DELAY = 500;
let data = [];
toggleFilterFormDisableStatus(true);
toggleFormDisableStatus(true);
initMap();
getData((offers) => {
  setMarkers(offers.slice(0, 10));
  data = offers.slice();
  mapFilters.addEventListener('change', debounce(() => {
    clearMap();
    renderPins(filterOffers(offers).slice(0, 10));
  }, RERENDER_DELAY)
  );
  toggleFilterFormDisableStatus(false);
}, showAlert);

export { data };
