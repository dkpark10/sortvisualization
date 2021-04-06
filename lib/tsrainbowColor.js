'use strict';
exports.__esModule = true;
exports.createRainbowColor = void 0;
function createRainbowColor() {
    var rainbowColor = new Array();
    var max = 255;
    var divi = 3;
    function convertHex(num) {
        var hex = num.toString(16);
        return hex.length > 1 ? hex : "0" + hex;
    }
    // 빨강 -> 노랑
    (function () {
        var cvtRedtoYellow = Array.from({ length: max / divi }, function (v, index) { return index * divi; })
            .map(function (element, index) {
            var hex = convertHex(element);
            return "#FF" + hex + "00";
        });
        rainbowColor = rainbowColor.concat(cvtRedtoYellow);
    })();
    // 노랑 -> 초록
    (function () {
        var cvtYellowtoGreen = Array.from({ length: max / divi }, function (v, index) { return ((max / divi) - index) * divi; })
            .map(function (element, index) {
            var hex = convertHex(element);
            return "#" + hex + "FF00";
        });
        rainbowColor = rainbowColor.concat(cvtYellowtoGreen);
    })();
    // 초록 -> 아쿠아
    (function () {
        var cvtGreentoAqua = Array.from({ length: max / divi }, function (v, index) { return index * divi; })
            .map(function (element, index) {
            var hex = convertHex(element);
            return "#00FF" + hex;
        });
        rainbowColor = rainbowColor.concat(cvtGreentoAqua);
    })();
    // 아쿠아 -> 파랑
    (function () {
        var cvtAquatoBlue = Array.from({ length: max / divi }, function (v, index) { return ((max / divi) - index) * divi; })
            .map(function (element, index) {
            var hex = convertHex(element);
            return "#00" + hex + "FF";
        });
        rainbowColor = rainbowColor.concat(cvtAquatoBlue);
    })();
    // 파랑 -> 보라
    (function () {
        var cvtBluetoViolet = Array.from({ length: max / divi }, function (v, index) { return index * divi; })
            .map(function (element, index) {
            var hex = convertHex(element);
            return hex + "00FF";
        });
        rainbowColor = rainbowColor.concat(cvtBluetoViolet);
    })();
    return rainbowColor;
}
exports.createRainbowColor = createRainbowColor;
