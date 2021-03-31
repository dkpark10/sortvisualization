'use strict';
const express = require('express');
const router = express.Router();
const createRainbowColor = require('../lib/rainbowColor');
const createShuffledList = require('../lib/shuffleList');
const sanitizer = require('sanitize-html');


router.post('/shuffle', (request, response) => {

  sanitizer(request.body); 
  const rainbow = createRainbowColor();
  const shuffle = createShuffledList(rainbow.length);
  const sess = {
    rbw: rainbow,
    shf: shuffle
  };
  request.session.sess = sess;

  response.status(200).json({ shf: shuffle, rbw: rainbow });
});


module.exports = router;