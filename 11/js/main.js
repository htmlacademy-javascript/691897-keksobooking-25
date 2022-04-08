import './form.js';
import {setMap} from './map.js';
import './slider.js';
// import {setUserFormSubmit} from './form.js';
import {getData} from './api.js';
import { toggleFormDisableStatus, showAlert } from './utils.js';
toggleFormDisableStatus(true);
getData((offers) => {
  setMap(offers.slice(0, 10));
  toggleFormDisableStatus(false);
}, showAlert);

// setUserFormSubmit();
// , (error) => {console.log(error);}
