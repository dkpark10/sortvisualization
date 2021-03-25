module.exports = function (len) {
  return Array.from({ length: len }, (v, i) => i + 1)
    .map((element, curidx, arr) => {
      const random = Math.floor(Math.random() * arr.length);
      arr[curidx] = arr[random];
      arr[random] = element;
      return arr;
    })[0];
}