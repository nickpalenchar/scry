const { Context } = require('../context');
const { print } = require('../print');

module.exports = function createContext(argv, command) {
  return new Context({print, argv, command});
}
