'use strict';

/** Functions that log to the console **/
function print(...args) {
  console.log(...args);
}
print.info = print;
print.warn = print;
print.error = print;

export default print;
