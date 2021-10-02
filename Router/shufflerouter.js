'use strict';
const express = require('express');
const router = express.Router();
const sanitizer = require('sanitize-html');
const rainbowColor_1 = require("../lib/rainbowColor");
const shuffleList_1 = require("../lib/shuffleList");
router.post('/shuffle', (request, response) => {
    sanitizer(request.body);
    const rainbow = rainbowColor_1.createRainbowColor();
    const shuffle = shuffleList_1.createShuffledList(rainbow.length);
    const sess = {
        rbw: rainbow,
        shf: shuffle
    };
    request.session.sess = sess;
    response.status(200).json({ shf: shuffle, rbw: rainbow });
});
module.exports = router;
//# sourceMappingURL=shufflerouter.js.map