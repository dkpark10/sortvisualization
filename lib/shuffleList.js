"use strict";
exports.__esModule = true;
exports.createShuffledList = void 0;
function createShuffledList(len) {
    return Array.from({ length: len }, function (v, i) { return i + 1; })
        .map(function (element, curidx, arr) {
        var random = Math.floor(Math.random() * arr.length);
        arr[curidx] = arr[random];
        arr[random] = element;
        return arr;
    })[0];
}
exports.createShuffledList = createShuffledList;
