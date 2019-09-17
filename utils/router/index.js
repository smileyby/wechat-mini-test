const { encode, decode, extract } = require('./data.js');
const { push, replace } = require('./forward.js');
const back = require('./back.js');
const relaunch = require('./relaunch.js');
const init = require('./init.js')

module.exports = {
  encode,
  decode,
  extract,
  push,
  replace,
  back,
  relaunch,
  init
};