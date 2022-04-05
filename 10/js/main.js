import './form.js';
import {setMap} from './map.js';
import './slider.js';
// import {setUserFormSubmit} from './form.js';
import {getData} from './api.js';

getData((offers) => {
  setMap(offers.slice(0, 10));
});

// setUserFormSubmit();
// , (error) => {console.log(error);}
