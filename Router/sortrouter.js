'use strict';
const express = require('express');
const router = express.Router();
const sortMachine = require('../lib/sort');

const sanitizer = require('sanitize-html');


function deleteSess(request) {
  request.session.destroy(function () {
    request.session;
  });
}


function createSortFactory(shu, rbw) {
  
  const shuffledList = shu;
  const rainbowColor = rbw;
  
  return {
    getSortType: function (type) {

      switch (type) {
        case 'selection':
          return new sortMachine.selection(shuffledList);
          break;
        case 'insertion':
          return new sortMachine.insertion(shuffledList);
          break;
        case 'bubble':
          return new sortMachine.bubble(shuffledList);
          break;
        case 'cocktail':
          return new sortMachine.cocktail(shuffledList);
          break;
        case 'quick':
          return new sortMachine.quick(shuffledList);
          break;
        case 'heap':
          return new sortMachine.heap(shuffledList);
          break;
        case 'merge':
          return new sortMachine.merge(shuffledList, rainbowColor);
          break;
        case 'radix':
          return new sortMachine.radix(shuffledList, rainbowColor);
          break;
      }
    }
  };
}


router.post('/sort', (request, response) => {

  const sorttype =  sanitizer(request.body.sorttype); 
  const shuffledList = request.session.sess.shf;
  const rainbowColor = request.session.sess.rbw;

  let sortFactory = createSortFactory(shuffledList, rainbowColor);
  const retJson = { ret: sortFactory.getSortType(sorttype) };
  sortFactory = null;

  deleteSess(request);

  response.status(200).json(retJson);
});


module.exports = router;