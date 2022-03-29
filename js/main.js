import {getOffers} from './data.js';
import './form.js';
import {setMap} from './map.js';
import './slider.js';

const offers = getOffers();

setMap(offers);
