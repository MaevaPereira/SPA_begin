//5-1 Import
//export const showError = message => console.error(message);
import {hello} from './functions.js';
hello();
import {showError, default as cat} from "./functions.js";

showError();
cat();

// 5-2 Export
const [a, b] = [7, 9];

