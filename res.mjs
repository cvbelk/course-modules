import { addTwo, API_URL } from './math.mjs';
console.log(addTwo(1, 2), API_URL);

import { addTwo, API_URL as URL } from './math';
console.log(addTwo(1, 2), URL);

import math from './default.js'

import { pi, e } from './math.mjs';

// import addTwo from './math';
// console.log(addTwo(1, 2));

// import * as math from './math';
// console.log(math.addTwo(1, 2), math.multiplyTwo(1, 2));
