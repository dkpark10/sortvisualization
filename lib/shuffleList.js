"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createShuffledList = void 0;
function createShuffledList(len) {
    return Array.from({ length: len }, (v, i) => i + 1)
        .map((element, curidx, arr) => {
        const random = Math.floor(Math.random() * arr.length);
        arr[curidx] = arr[random];
        arr[random] = element;
        return arr;
    })[0];
}
exports.createShuffledList = createShuffledList;
//# sourceMappingURL=shuffleList.js.map