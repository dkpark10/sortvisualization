'use strict';
import { ArrayforSwapSort } from './interface'
import { ArrayforSubstitutionSort } from './interface'
import { returnSHuffleJson } from './interface'
import { returnSortJson } from './interface'

var isRun: boolean = false;


function runSwapElement(swpswapedElementarr: ArrayforSwapSort[]) {

  swpswapedElementarr.map((element: ArrayforSwapSort, curidx: number, self: ArrayforSwapSort[]) => {
    setTimeout(() => {

      const e1: HTMLSpanElement = document.getElementById(element.e1) as HTMLSpanElement;
      const e2: HTMLSpanElement = document.getElementById(element.e2) as HTMLSpanElement;

      const percentage: string = (((curidx + 1) / self.length) * 100).toFixed(4);
      
      const spanComparsion = document.getElementById('comparison') as HTMLSpanElement;
      const spanPercentage = document.getElementById('percentage') as HTMLSpanElement;
      spanComparsion.innerText = `comparison: ${curidx}`;
      spanPercentage.innerText = `percentage: ${percentage}% `;

      let e1height: number = e1.clientHeight;
      let e2height: number = e2.clientHeight;

      let e1color: string = window.getComputedStyle(e1).backgroundColor;
      let e2color: string = window.getComputedStyle(e2).backgroundColor;

      [e1height, e2height] = [e2height, e1height];
      [e1color, e2color] = [e2color, e1color];

      e1.style.height = `${e1height}px`;
      e2.style.height = `${e2height}px`;
      e1.style.backgroundColor = `${e1color}`;
      e2.style.backgroundColor = `${e2color}`;

      new Promise((resolve, reject) => resolve(false))
      .then((arg: boolean) => isRun = arg); 
    }, 10);
  });
}


function runSubstituteElement(swpswapedElementarr: ArrayforSubstitutionSort[]) {

  swpswapedElementarr.map((element: ArrayforSubstitutionSort, curidx: number, self: ArrayforSubstitutionSort[]) => {
    setTimeout(() => {
      const e1: HTMLSpanElement = document.getElementById(`element${element.idx}`) as HTMLSpanElement;

      const percentage: string = (((curidx + 1) / self.length) * 100).toFixed(4);
      
      const spanComparsion = document.getElementById('comparison') as HTMLSpanElement;
      const spanPercentage = document.getElementById('percentage') as HTMLSpanElement;
      spanComparsion.innerText = `comparison: ${curidx}`;
      spanPercentage.innerText = `percentage: ${percentage}% `;

      const e2: number = element.height;
      const color: string = element.color;

      let begin: number = new Date().getTime();
      const end: number = begin + 500;

      while (begin < end) {
        e1.style.height = `${e2}px`;
        e1.style.background = `${color}`;
        begin++;
      }

    }, 10);

    new Promise((resolve, reject) => resolve(false))
      .then((arg: boolean) => isRun = arg); 
  });
}


function getSortType(selectID: string): string {
  const s: HTMLSelectElement = document.getElementById(selectID) as HTMLSelectElement;
  return s.options[s.selectedIndex].value;
}


function clickRun() {

  if (isRun) return;                // 돌리는 중이라면 리턴
  isRun = true;

  const xhr: XMLHttpRequest = new XMLHttpRequest();
  const sortType: string = getSortType('sortType');

  xhr.open('post', '/sort');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({ sorttype: sortType }));

  xhr.addEventListener('load', function () {
    if (sortType === 'merge' || sortType === 'radix') {
      const swapedElement: returnSortJson<ArrayforSubstitutionSort[]> = JSON.parse(xhr.responseText);
      runSubstituteElement(swapedElement.ret);
    } else {
      const swapedElement: returnSortJson<ArrayforSwapSort[]> = JSON.parse(xhr.responseText);
      runSwapElement(swapedElement.ret);
    }
  });
}


function clickShuffle() {

  if (isRun) return;                 // 돌리는 중이라면 리턴
  isRun = false;

  const spanComparsion = document.getElementById('comparison') as HTMLSpanElement;
  const spanPercentage = document.getElementById('percentage') as HTMLSpanElement;
  spanComparsion.innerText = `comparison: 0`;
  spanPercentage.innerText = `comparison: 0`;

  const xhr: XMLHttpRequest = new XMLHttpRequest() as XMLHttpRequest;

  xhr.open('post', '/shuffle');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({}));

  xhr.addEventListener('load', function () {

    const returnedJson: returnSHuffleJson = JSON.parse(xhr.responseText);
    const newShuffledList: number[] = returnedJson.shf;
    const rainbowColor: string[] = returnedJson.rbw;

    newShuffledList.map((element: number, curidx: number, self: number[]) => {

      setTimeout(() => {

        let begin: number = new Date().getTime();
        const end: number = begin + 500;

        while (begin < end) {
          const e: HTMLSpanElement = document.getElementById(`element${curidx}`) as HTMLSpanElement;
          const ecolor: string = rainbowColor[self[curidx] - 1];

          e.style.height = `${element}px`;
          e.style.backgroundColor = ecolor;
          begin++;
        }
      }, 10);
    });
  });
}


window.onload = function () {
  const buttonRun = document.getElementById('run') as HTMLButtonElement;
  const buttonShuffle = document.getElementById('shuffle') as HTMLButtonElement;

  buttonRun.addEventListener('click', clickRun);
  buttonShuffle.addEventListener('click', clickShuffle);

}

console.log('.....');