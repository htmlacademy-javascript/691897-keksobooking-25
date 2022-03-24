import {getOffers} from './data.js';
import {createPopup} from './popup.js';
import './form.js';

const offers = getOffers();

document.querySelector('#map-canvas').appendChild(createPopup(offers[3]));
