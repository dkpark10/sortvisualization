'use strict';
var express = require('express');
var router = express.Router();
var sanitizer = require('sanitize-html');
var sort_1 = require("../lib/sort");
function deleteSess(request) {
    request.session.destroy(function () {
        request.session;
    });
}
function createSortFactory(shu, rbw) {
    var shuffledList = shu;
    var rainbowColor = rbw;
    return {
        getSortType: function (type) {
            switch (type) {
                case 'selection':
                    return sort_1.sortHandler.selection(shuffledList);
                    break;
                case 'insertion':
                    return sort_1.sortHandler.insertion(shuffledList);
                    break;
                case 'bubble':
                    return sort_1.sortHandler.bubble(shuffledList);
                    break;
                case 'cocktail':
                    return sort_1.sortHandler.cocktail(shuffledList);
                    break;
                case 'quick':
                    return sort_1.sortHandler.quick(shuffledList);
                    break;
                case 'heap':
                    return sort_1.sortHandler.heap(shuffledList);
                    break;
                case 'merge':
                    return sort_1.sortHandler.merge(shuffledList, rainbowColor);
                    break;
                case 'radix':
                    return sort_1.sortHandler.radix(shuffledList, rainbowColor);
                    break;
                default:
                    return undefined;
                    break;
            }
        }
    };
}
router.post('/sort', function (request, response) {
    var sorttype = sanitizer(request.body.sorttype);
    var shuffledList = request.session.sess.shf;
    var rainbowColor = request.session.sess.rbw;
    var sortFactory = createSortFactory(shuffledList, rainbowColor);
    var retJson = { ret: sortFactory.getSortType(sorttype) };
    sortFactory = null;
    deleteSess(request);
    response.status(200).json(retJson);
});
module.exports = router;
