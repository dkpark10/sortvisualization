// 'use strict';

const { json } = require("express");

// function createRainbowColor() {
//   let rainbowColor = new Array();
//   const max = 255, divi = 3;
//   function convertingHex(number) {
//     const hex = number.toString(16);
//     return hex.length > 1 ? hex : `0${hex}`;
//   }

//   // 빨강 -> 노랑
//   (function () {
//     const cvtRedtoYellow = Array.from({ length: max / divi }, (v, index) => index * divi)
//       .map((element, index) => {
//         const hex = convertingHex(element);
//         return `#FF${hex}00`;
//       });
//     rainbowColor = rainbowColor.concat(cvtRedtoYellow);
//   })();

//   // 노랑 -> 초록
//   (function () {
//     const cvtYellowtoGreen = Array.from({ length: max / divi }, (v, index) => ((max / divi) - index) * divi)
//       .map((element, index) => {
//         const hex = convertingHex(element);
//         return `#${hex}FF00`;
//       });
//     rainbowColor = rainbowColor.concat(cvtYellowtoGreen);
//   })();

//   // 초록 -> 아쿠아
//   (function () {
//     const cvtGreentoAqua = Array.from({ length: max / divi }, (v, index) => index * divi)
//       .map((element, index) => {
//         const hex = convertingHex(element);
//         return `#00FF${hex}`;
//       });
//     rainbowColor = rainbowColor.concat(cvtGreentoAqua);
//   })();

//   // 아쿠아 -> 파랑
//   (function () {
//     const cvtAquatoBlue = Array.from({ length: max / divi }, (v, index) => ((max / divi) - index) * divi)
//       .map((element, index) => {
//         const hex = convertingHex(element);
//         return `#00${hex}FF`;
//       });
//     rainbowColor = rainbowColor.concat(cvtAquatoBlue);
//   })();

//   // 파랑 -> 보라
//   (function () {
//     const cvtBluetoViolet = Array.from({ length: max / divi }, (v, index) => index * divi)
//       .map((element, index) => {
//         const hex = convertingHex(element);
//         return `#${hex}00FF`;
//       });
//     rainbowColor = rainbowColor.concat(cvtBluetoViolet);
//   })();

//   return rainbowColor;
// }


// function createShuffledList(len) {
//   return Array.from({ length: len }, (v, i) => i + 1)
//     .map((element, curidx, arr) => {
//       const random = Math.floor(Math.random() * arr.length);
//       arr[curidx] = arr[random];
//       arr[random] = element;
//       return arr;
//     })[0];
// }


// function createSpanElement(len, shuffledList, rainbow) {

//   for (let i = 0; i < len; i++) {
//     const sp = document.createElement('span');
//     sp.id = `element${i}`;
//     sp.style.height = `${shuffledList[i]}px`;
//     sp.style.backgroundColor = rainbow[shuffledList[i] - 1];
//     document.getElementById('sortBoard').appendChild(sp);
//   }
// }

// function sortSelection(shuffledList) {

//   const swparr = Array();
//   const len = shuffledList.length;

//   for (let i = 0; i < len - 1; i++) {
//     for (let j = i + 1; j < len; j++) {
//       const e1 = document.getElementById(`element${i}`);
//       const e2 = document.getElementById(`element${j}`);
//       if (shuffledList[i] > shuffledList[j]) {
//         [shuffledList[i], shuffledList[j]] = [shuffledList[j], shuffledList[i]];
//         swparr.push({ e1: e1.id, e2: e2.id });
//       }
//     }
//   }
//   return swparr;
// }


// function sortBubble(shuffledList) {
//   const swparr = Array();
//   const len = shuffledList.length;

//   for (let i = 1; i <= len - 1; i++) {
//     for (let j = 0; j < len - i; j++) {
//       const e1 = document.getElementById(`element${j}`);
//       const e2 = document.getElementById(`element${j + 1}`);
//       if (shuffledList[j] > shuffledList[j + 1]) {
//         [shuffledList[j], shuffledList[j + 1]] = [shuffledList[j + 1], shuffledList[j]];
//         swparr.push({ e1: e1.id, e2: e2.id });
//       }
//     }
//   }
//   return swparr;
// }


// // 버블소트를 왔다갔다 하는 칵테일 소트
// function sortCocktail(shuffledList) {
  
//   const swparr = Array();
//   const len = shuffledList.length;
//   for(let i=0; i< len-1; i++){
//     for(let j=i; j< len - i - 1; j++){
//       if(shuffledList[j] > shuffledList[j + 1]){
//         [shuffledList[j], shuffledList[j + 1]] = [shuffledList[j + 1], shuffledList[j]];
//         const e1 = document.getElementById(`element${j}`);
//         const e2 = document.getElementById(`element${j + 1}`);
//         swparr.push({ e1: e1.id, e2: e2.id });
//       }
//     }
//     for(let j= len - i - 1; j> i; j--){
//       if(shuffledList[j] < shuffledList[j - 1]){
//         [shuffledList[j], shuffledList[j - 1]] = [shuffledList[j - 1], shuffledList[j]];
//         const e1 = document.getElementById(`element${j}`);
//         const e2 = document.getElementById(`element${j - 1}`);
//         swparr.push({ e1: e1.id, e2: e2.id });
//       }
//     }
//   }
//   return swparr;
// }


// function sortInsertion(shuffledList) {

//   const swparr = Array();
//   const len = shuffledList.length;

//   for (let i = 1; i < len; i++) {
//     for (let j = i; j > 0; j--) {
//       const e1 = document.getElementById(`element${j}`);
//       const e2 = document.getElementById(`element${j - 1}`);
//       if (shuffledList[j] < shuffledList[j - 1]) {
//         [shuffledList[j], shuffledList[j - 1]] = [shuffledList[j - 1], shuffledList[j]];
//         swparr.push({ e1: e1.id, e2: e2.id });
//       }
//     }
//   }
//   return swparr;
// }

// // 분할정렬
// // 1. 피봇을 맨 처음 인덱스값으로 설정 
// // 2. 왼쪽은 피봇보다 큰 값을 만나기 까지 돌려 
// // 3. 오른쪽은 피봇보다 작은 값을 만나기 까지 돌려
// // 4. 둘의 값 스왑
// // 5. left 와 right가 교차될 때 까지 루프
// // 6. 피봇과 right 스왑
// // 7. 이중분할로 1 ~ 6 재귀적으로 수행
// function sortQuick(shuffledList) {
//   const swparr = Array();

//   function divide(shuffledList, start, end) {
//     const pivot = shuffledList[start];
//     let left = start + 1;
//     let right = end;

//     while (left <= right) {
//       while (shuffledList[left] < pivot)
//         left++;
//       while (shuffledList[right] > pivot)
//         right--;

//       if (left <= right) {
//         [shuffledList[right], shuffledList[left]] = [shuffledList[left], shuffledList[right]];
//         const e1 = document.getElementById(`element${right}`);
//         const e2 = document.getElementById(`element${left}`);
//         swparr.push({ e1: e1.id, e2: e2.id });
//       }
//     }

//     if (start < end) {
//       [shuffledList[start], shuffledList[right]] = [shuffledList[right], shuffledList[start]];
//       const e1 = document.getElementById(`element${start}`);
//       const e2 = document.getElementById(`element${right}`);
//       swparr.push({ e1: e1.id, e2: e2.id });
//       divide(shuffledList, start, right - 1);
//       divide(shuffledList, right + 1, end);
//     }
//   }

//   divide(shuffledList, 0, shuffledList.length - 1);
//   return swparr;
// }

// // 힙정렬 알고리즘
// // 힙과 완전이진트리는 비슷하나 다르다. ~~ 
// // 힙은 왼쪽자식과 오른쪽 자식보다 크면 된다~
// // 완전이진트리는 왼자 < 부모 < 오자 순이다.
// // 순서
// // 1. 최대힙 구성 (len / 2 인덱스부터 자신의 자식노드들과 비교 더 큰 자식노드와 스왑)
// // 2. 트리의 보스와 말단놈 스왑
// // 3. 스왑된 새로운 트리로 1번 실행
// // 4. 2,3번 원소 갯수 - 1 만큼 반복
// function sortHeap(shuffledList) {
//   const swparr = Array();
//   const len = shuffledList.length;

//   function heapify(shuffledList, here, len) {
//     const leftidx = here * 2 + 1;
//     const rightidx = here * 2 + 2;
//     let bigger = here;

//     if (leftidx < len && shuffledList[bigger] < shuffledList[leftidx]) {
//       bigger = leftidx;
//     }
//     if (rightidx < len && shuffledList[bigger] < shuffledList[rightidx]) {
//       bigger = rightidx;
//     }
//     if (bigger != here) {    // 더 큰 값을 찾았다면
//       [shuffledList[bigger], shuffledList[here]] = [shuffledList[here], shuffledList[bigger]];
//       const e1 = document.getElementById(`element${bigger}`);
//       const e2 = document.getElementById(`element${here}`);
//       swparr.push({ e1: e1.id, e2: e2.id });
//       heapify(shuffledList, bigger, len);
//     }
//   }

//   for (let i = Math.floor(len / 2); i >= 0; i--) {
//     heapify(shuffledList, i, len);
//   }

//   for (let i = len - 1; i > 0; i--) {
//     [shuffledList[0], shuffledList[i]] = [shuffledList[i], shuffledList[0]];
//     const e1 = document.getElementById(`element${0}`);
//     const e2 = document.getElementById(`element${i}`);
//     swparr.push({ e1: e1.id, e2: e2.id });
//     heapify(shuffledList, 0, i);
//   }
//   return swparr;
// }


// // 병합정렬
// // 병합정렬 또한 기본적으로 분할정복 
// // 1. 사이즈가 1일 때 까지 배열을 쪼개준다.
// // 2. 쪼개진 것들을 차곡차곡 졍렬한다.
// // 3. 왼쪽으로 쪼개고 오른쪽으로 쪼갠 배열에서 각각 값을 비교 작은값을 임시 배열에 넣어준다.
// // 4. 어느 한쪽을 다 넣었다면 나머지 한쪽마저 다 넣는다. 
// function sortMerge(shuffledList, rainbow){

//   const swparr = Array();
//   const len = shuffledList.length;
//   function merge(shuffledList, left, mid, right){

//     const tmp = Array();
//     let leftidx = left;
//     let rightidx = mid + 1;

//     while(leftidx <= mid && rightidx <= right){
//       const value = 
//       shuffledList[leftidx] < shuffledList[rightidx] ?
//       shuffledList[leftidx++] :
//       shuffledList[rightidx++];
      
//       tmp.push(value);
//     }

//     if(leftidx <= mid){
//       for (let i = leftidx; i <= mid; i++)
//         tmp.push(shuffledList[i])
//     }
//     else{
//       for(let i=rightidx; i<= right; i++)
//         tmp.push(shuffledList[i]);
//     }

//     for(let i=left; i<= right; i++){
//       shuffledList[i] = tmp[i-left];
      
//       swparr.push({
//         idx : i,
//         height: shuffledList[i],
//         color : rainbow[shuffledList[i] - 1]
//       });
//     }
//   }

//   function divide(shuffledList, left, right){

//     if(left < right){
//       const mid = Math.floor((left + right) / 2);
//       divide(shuffledList, left, mid);
//       divide(shuffledList, mid + 1, right);
//       merge(shuffledList, left, mid, right);
//     }
//   }
//   divide(shuffledList, 0, len - 1);
//   return swparr;
// }


// // 기수정렬
// // 1. 1의 자리부터 차례대로 열개의 큐 배열에 담는다.
// // 2. 1 -> 10 -> 100의 자리 순서대로 큐의 담는다. 
// // 3. 각 자리수자보다 작은 수는 그냥 0에 담는다.
// // 4. 담은 큐배열은 처음 큐부터 pop해주면서 새로 배열을 담아준다.
// // 5. 최고 자리 숫자까지 반복
// function sortRadix(shuffledList, rainbow) {

//   const swpradix = Array();
//   const queue = Array.from(Array(10), () => Array());
//   const maxlength = 3;

//   for (let digit = 0; digit < maxlength; digit++) {

//     shuffledList.map((element, curidx, self) => {
//       const number = Math.floor(element / Math.pow(10, digit) % 10);
//       queue[number].push(element);
//     });

//     let idx = 0;
//     queue.map((array, arrayidx, selfarr) => {
//       while (array.length) {
//         shuffledList[idx++] = array.shift();
//         swpradix.push({
//           idx : idx - 1,
//           height: shuffledList[idx - 1],
//           color : rainbow[shuffledList[idx - 1] - 1]
//         });
//       }
//     });
//   }
//   return swpradix;
// }


// function runSwapRadix(swpradix) {

//   swpradix.map((element, curidx, self) => {
//     setTimeout(() => {
//       const e1 = document.getElementById(`element${element.idx}`);
//       const e2 = element.height;
//       const color = element.color;

//       let begin = new Date().getTime();
//       const end = begin + 500;

//       // 기수정렬이 너무 빨라 딜레이 시킨다.
//       while (begin < end) {
//         e1.style.height = `${e2}px`;
//         e1.style.background = `${color}`;
//         begin++;
//       }
//     }, 10);
//   });
// }


// function runSwapSort(swparr){

//   swparr.map((element, curidx, arr) => {
//     setTimeout(() => {

//       const e1 = document.getElementById(element.e1);
//       const e2 = document.getElementById(element.e2);

//       let e1height = e1.clientHeight;
//       let e2height = e2.clientHeight;

//       let e1color = window.getComputedStyle(e1).backgroundColor;
//       let e2color = window.getComputedStyle(e2).backgroundColor;

//       [e1height, e2height] = [e2height, e1height];
//       [e1color, e2color] = [e2color, e1color];

//       e1.style.height = `${e1height}px`;
//       e2.style.height = `${e2height}px`;
//       e1.style.backgroundColor = `${e1color}`;
//       e2.style.backgroundColor = `${e2color}`;
//     }, 10);
//   });
// }


// window.onload = function () {

//   var isRunning = false;
//   const rainbow = createRainbowColor();
//   const len = rainbow.length;
//   const shuffledList = createShuffledList(len);
//   createSpanElement(len, shuffledList, rainbow);

//   // const swparr = sortRadix(shuffledList, rainbow);
//   const swparr = sortMerge(shuffledList, rainbow);
//   console.log(swparr.length);

//   document.getElementById('run').addEventListener('click', () => {

//     if (isRunning)
//       return;
//     else
//       isRunning = true;

//     // runSwapSort(swparr);
//     runSwapRadix(swparr);
//   });
// }

window.onload = function(){
 
  document.getElementById('run').addEventListener('click', () => {

    const xhr = new XMLHttpRequest();
    xhr.open('post', '/sortrun');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify());

    xhr.addEventListener('load', function () {
      const swapedElement = JSON.parse(xhr.responseText);
      runSwapElement(swapedElement);
    }
  });
}

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