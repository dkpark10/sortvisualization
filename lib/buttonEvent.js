'use strict';

function runSwapElement(swpswapedElementarr){

  swpswapedElementarr.map((element) => {
    setTimeout(() => {

      const e1 = document.getElementById(element.e1);
      const e2 = document.getElementById(element.e2);

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
    }, 10);
  });
}


function runSubstituteElement(swpswapedElementarr) {

  swpswapedElementarr.map((element) => {
    setTimeout(() => {
      const e1 = document.getElementById(`element${element.idx}`);
      const e2 = element.height;
      const color = element.color;

      let begin = new Date().getTime();
      const end = begin + 500;

      while (begin < end) {
        e1.style.height = `${e2}px`;
        e1.style.background = `${color}`;
        begin++;
      }
    }, 10);
  });
}


function getSortType(selectID){
  const s = document.getElementById(selectID);
  return s.options[s.selectedIndex].value;
}


function clickRun() {

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


function clickShuffle(){

  const xhr = new XMLHttpRequest();

  xhr.open('get', '/');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({}));
}


window.onload = function(){
  document.getElementById('run').addEventListener('click', clickRun);
  document.getElementById('shuffle').addEventListener('click', clickShuffle);
}