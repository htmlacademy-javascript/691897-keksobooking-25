import {getOffers} from './data.js';
import {createPopup} from './popup.js';

const offers = getOffers();

document.querySelector('#map-canvas').appendChild(createPopup(offers[1]));
