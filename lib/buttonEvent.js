'use strict';

var isRun = false;

function runSwapElement(swpswapedElementarr) {

  swpswapedElementarr.map((element, curidx) => {
    setTimeout(() => {

      const e1 = document.getElementById(element.e1);
      const e2 = document.getElementById(element.e2);
      document.getElementById('comparison').innerText = `comparison: ${curidx}`;

      let e1height = e1.clientHeight;
      let e2height = e2.clientHeight;

      let e1color = window.getComputedStyle(e1).backgroundColor;
      let e2color = window.getComputedStyle(e2).backgroundColor;

      [e1height, e2height] = [e2height, e1height];
      [e1color, e2color] = [e2color, e1color];

      e1.style.height = `${e1height}px`;
      e2.style.height = `${e2height}px`;
      e1.style.backgroundColor = `${e1color}`;
      e2.style.backgroundColor = `${e2color}`;

      isRun = setComplete(swpswapedElementarr.length, curidx);
    }, 10);
  });
}


function runSubstituteElement(swpswapedElementarr) {

  swpswapedElementarr.map((element, curidx) => {
    setTimeout(() => {
      const e1 = document.getElementById(`element${element.idx}`);
      document.getElementById('comparison').innerText = `comparison: ${curidx}`;

      const e2 = element.height;
      const color = element.color;

      let begin = new Date().getTime();
      const end = begin + 500;

      while (begin < end) {
        e1.style.height = `${e2}px`;
        e1.style.background = `${color}`;
        begin++;
      }

      isRun = setComplete(swpswapedElementarr.length, curidx);
    }, 10);
  });
}


function setComplete(length, curidx){
  return !(length - 1) === curidx;
}


function getSortType(selectID) {
  const s = document.getElementById(selectID);
  return s.options[s.selectedIndex].value;
}


function clickRun() {

  if (isRun) return;                // 돌리는 중이라면 리턴
  isRun = true;

  const xhr = new XMLHttpRequest();
  const sortType = getSortType('sortType');

  xhr.open('post', '/sort');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({ sorttype: sortType }));

  xhr.addEventListener('load', function () {
    const swapedElement = JSON.parse(xhr.responseText);
    if (sortType === 'merge' || sortType === 'radix') {
      runSubstituteElement(swapedElement.ret);
    } else {
      runSwapElement(swapedElement.ret);
    }
  });
}


function clickShuffle() {

  if(isRun) return;                 // 돌리는 중이라면 리턴
  isRun = false;

  document.getElementById('comparison').innerText = `comparison: 0`;

  const xhr = new XMLHttpRequest();

  xhr.open('post', '/shuffle');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({}));

  xhr.addEventListener('load', function () {

    const returnedJson = JSON.parse(xhr.responseText);
    const newShuffledList = returnedJson.shf;
    const rainbowColor = returnedJson.rbw;

    newShuffledList.map((element, curidx, self) => {

      setTimeout(() => {

        let begin = new Date().getTime();
        const end = begin + 500;

        while (begin < end) {
          const e = document.getElementById(`element${curidx}`);
          const ecolor = rainbowColor[self[curidx] - 1];

          e.style.height = `${element}px`;
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
}