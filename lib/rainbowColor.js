'use strict';
module.exports = function () {
  let rainbowColor = new Array();
  const max = 255, divi = 3;
  function convertingHex(number) {
    const hex = number.toString(16);
    return hex.length > 1 ? hex : `0${hex}`;
  }

  // 빨강 -> 노랑
  (function () {
    const cvtRedtoYellow = Array.from({ length: max / divi }, (v, index) => index * divi)
      .map((element, index) => {
        const hex = convertingHex(element);
        return `#FF${hex}00`;
      });
    rainbowColor = rainbowColor.concat(cvtRedtoYellow);
  })();

  // 노랑 -> 초록
  (function () {
    const cvtYellowtoGreen = Array.from({ length: max / divi }, (v, index) => ((max / divi) - index) * divi)
      .map((element, index) => {
        const hex = convertingHex(element);
        return `#${hex}FF00`;
      });
    rainbowColor = rainbowColor.concat(cvtYellowtoGreen);
  })();

  // 초록 -> 아쿠아
  (function () {
    const cvtGreentoAqua = Array.from({ length: max / divi }, (v, index) => index * divi)
      .map((element, index) => {
        const hex = convertingHex(element);
        return `#00FF${hex}`;
      });
    rainbowColor = rainbowColor.concat(cvtGreentoAqua);
  })();

  // 아쿠아 -> 파랑
  (function () {
    const cvtAquatoBlue = Array.from({ length: max / divi }, (v, index) => ((max / divi) - index) * divi)
      .map((element, index) => {
        const hex = convertingHex(element);
        return `#00${hex}FF`;
      });
    rainbowColor = rainbowColor.concat(cvtAquatoBlue);
  })();

  // 파랑 -> 보라
  (function () {
    const cvtBluetoViolet = Array.from({ length: max / divi }, (v, index) => index * divi)
      .map((element, index) => {
        const hex = convertingHex(element);
        return `#${hex}00FF`;
      });
    rainbowColor = rainbowColor.concat(cvtBluetoViolet);
  })();

  return rainbowColor;
}
