const { ping } = require('./ping');
const deleteSvg = require('./deleteSvg');
const addSvg = require('./addSvg');
const getSvg = require('./getSvg');
const getSvgs = require('./getSvgs');
const likeSvg = require('./likeSvg');
const home = require('./home');

module.exports = {
    ping,
    home,
    addSvg,
    getSvg,
    deleteSvg,
    getSvgs,
    likeSvg,
};