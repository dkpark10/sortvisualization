'use strict';
exports.__esModule = true;
var isRun = false;
function runSwapElement(swpswapedElementarr) {
    swpswapedElementarr.map(function (element, curidx, self) {
        setTimeout(function () {
            var _a, _b;
            var e1 = document.getElementById(element.e1);
            var e2 = document.getElementById(element.e2);
            var percentage = (((curidx + 1) / self.length) * 100).toFixed(4);
            document.getElementById('comparison').innerText = "comparison: " + curidx;
            document.getElementById('percentage').innerText = "percentage: " + percentage + "% ";
            var e1height = e1.clientHeight;
            var e2height = e2.clientHeight;
            var e1color = window.getComputedStyle(e1).backgroundColor;
            var e2color = window.getComputedStyle(e2).backgroundColor;
            _a = [e2height, e1height], e1height = _a[0], e2height = _a[1];
            _b = [e2color, e1color], e1color = _b[0], e2color = _b[1];
            e1.style.height = e1height + "px";
            e2.style.height = e2height + "px";
            e1.style.backgroundColor = "" + e1color;
            e2.style.backgroundColor = "" + e2color;
            isRun = setComplete(swpswapedElementarr.length, curidx);
        }, 10);
    });
}
function runSubstituteElement(swpswapedElementarr) {
    swpswapedElementarr.map(function (element, curidx, self) {
        setTimeout(function () {
            var e1 = document.getElementById("element" + element.idx);
            var percentage = (((curidx + 1) / self.length) * 100).toFixed(4);
            document.getElementById('comparison').innerText = "comparison: " + curidx;
            document.getElementById('percentage').innerText = "percentage: " + percentage + "% ";
            var e2 = element.height;
            var color = element.color;
            var begin = new Date().getTime();
            var end = begin + 500;
            while (begin < end) {
                e1.style.height = e2 + "px";
                e1.style.background = "" + color;
                begin++;
            }
            isRun = setComplete(swpswapedElementarr.length, curidx);
        }, 10);
    });
}
function setComplete(length, curidx) {
    return !((length - 1) === curidx);
}
function getSortType(selectID) {
    var s = document.getElementById(selectID);
    return s.options[s.selectedIndex].value;
}
function clickRun() {
    if (isRun)
        return; // 돌리는 중이라면 리턴
    isRun = true;
    var xhr = new XMLHttpRequest();
    var sortType = getSortType('sortType');
    xhr.open('post', '/sort');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({ sorttype: sortType }));
    xhr.addEventListener('load', function () {
        if (sortType === 'merge' || sortType === 'radix') {
            var swapedElement = JSON.parse(xhr.responseText);
            runSubstituteElement(swapedElement.ret);
        }
        else {
            var swapedElement = JSON.parse(xhr.responseText);
            runSwapElement(swapedElement.ret);
        }
    });
}
function clickShuffle() {
    if (isRun)
        return; // 돌리는 중이라면 리턴
    isRun = false;
    document.getElementById('comparison').innerText = "comparison: 0";
    document.getElementById('percentage').innerText = "comparison: 0";
    var xhr = new XMLHttpRequest();
    xhr.open('post', '/shuffle');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({}));
    xhr.addEventListener('load', function () {
        var returnedJson = JSON.parse(xhr.responseText);
        var newShuffledList = returnedJson.shf;
        var rainbowColor = returnedJson.rbw;
        newShuffledList.map(function (element, curidx, self) {
            setTimeout(function () {
                var begin = new Date().getTime();
                var end = begin + 500;
                while (begin < end) {
                    var e = document.getElementById("element" + curidx);
                    var ecolor = rainbowColor[self[curidx] - 1];
                    e.style.height = element + "px";
                    e.style.backgroundColor = ecolor;
                    begin++;
                }
            }, 10);
        });
    });
}
window.onload = function () {
    document.getElementById('run').addEventListener('click', clickRun);
    document.getElementById('shuffle').addEventListener('click', clickShuffle);
};
