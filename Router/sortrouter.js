'use strict';
const express = require('express');
const router = express.Router();
const sanitizer = require('sanitize-html');
const sort_1 = require("../lib/sort");
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
router.post('/sort', (request, response) => {
    const sorttype = sanitizer(request.body.sorttype);
    const shuffledList = request.session.sess.shf;
    const rainbowColor = request.session.sess.rbw;
    let sortFactory = createSortFactory(shuffledList, rainbowColor);
    const retJson = { ret: sortFactory.getSortType(sorttype) };
    sortFactory = null;
    deleteSess(request);
    response.status(200).json(retJson);
});
module.exports = router;
//# sourceMappingURL=sortrouter.js.map