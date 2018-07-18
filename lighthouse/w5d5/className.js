/* jshint esversion: 6 */

const className = function addClass(el, newClass) {
  if(el.className.indexOf(newClass) === -1){
    el.className += newClass;
  }
};

module.exports = className.addClass;