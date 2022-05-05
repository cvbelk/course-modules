
//CommonJS loads modules synchronously, ES modules are asynchronous
import { addTwo, API_URL as URL } from './math.mjs';
console.log(addTwo(1, 2), URL);

import func from './default.mjs'
console.log(func(5,6));


import * as math from './math.mjs';
console.log(math.addTwo(1, 2), math.multiplyTwo(1, 2));
