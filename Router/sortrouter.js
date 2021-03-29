'use strict';
const express = require('express');
const router = express.Router();
const sortType = ['selection', 'insertion', 'bubble', 'cocktail', 'quick', 'heap', 'merge', 'radix'];
const sort = require('../lib/sort');

router.post('/sort', (request, response) => {
  
  const sorttype = request.body.sorttype;
  const shuffledList = request.session.sess.shf;
  const rainbowColor = request.session.sess.rbw;
  const retJson = {};

  switch (sorttype) {
    case sortType[0]:
      retJson['ret'] = sort.selection(shuffledList);
      break;
    case sortType[1]:
      retJson['ret'] = sort.insertion(shuffledList);
      break;
    case sortType[2]:
      retJson['ret'] = sort.bubble(shuffledList);
      break;
    case sortType[3]:
      retJson['ret'] = sort.cocktail(shuffledList);
      break;
    case sortType[4]:
      retJson['ret'] = sort.quick(shuffledList);
      break;
    case sortType[5]:
      retJson['ret'] = sort.heap(shuffledList);
      break;
    case sortType[6]:
      retJson['ret'] = sort.merge(shuffledList, rainbowColor);
      break;
    case sortType[7]:
      retJson['ret'] = sort.radix(shuffledList, rainbowColor);
      break;
  }

  request.session.destroy(function(){
    request.session;
  });

  response.status(200).json(retJson);
});

module.exports = router;