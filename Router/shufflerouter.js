'use strict';
var express = require('express');
var router = express.Router();
var sanitizer = require('sanitize-html');
var rainbowColor_1 = require("../lib/rainbowColor");
var shuffleList_1 = require("../lib/shuffleList");
router.post('/shuffle', function (request, response) {
    sanitizer(request.body);
    var rainbow = rainbowColor_1.createRainbowColor();
    var shuffle = shuffleList_1.createShuffledList(rainbow.length);
    var sess = {
        rbw: rainbow,
        shf: shuffle
    };
    request.session.sess = sess;
    response.status(200).json({ shf: shuffle, rbw: rainbow });
});
module.exports = router;
