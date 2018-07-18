/* jshint esversion: 6 */
const chai = require('chai');
const assert = chai.assert;
const className = require('../className.js');
  // describe('Array', function(){
  //   it('should start empty', function(){
  //     var arr = [];

  //     assert.equal(arr.length, 1, 'Check the Array length');
  //   });
  // });

  describe('addClass', function(){
    it('should add class to element', ()=>{
      const element = { className1: ''};
     className.addClass(element, 'test-class');
      assert.equal(element.className1, 'test-class');
    });
    it('should not add a class wich already exists');
  });