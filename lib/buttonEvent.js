'use strict';
function createRainbowColor() {
  const max = 255, divi = 3;
  let rainbowColor = new Array();

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


function createShuffledList(len) {
  return Array.from({ length: len }, (v, i) => i + 1)
    .map((element, curidx, arr) => {
      const random = Math.floor(Math.random() * arr.length);
      arr[curidx] = arr[random];
      arr[random] = element;
      return arr;
    })[0];
}


function createSpanElement(len, shuffledList, rainbow) {

  for (let i = 0; i < len; i++) {
    const sp = document.createElement('span');
    sp.id = `element${i}`;
    sp.style.height = `${shuffledList[i]}px`;
    sp.style.backgroundColor = rainbow[shuffledList[i] - 1];
    document.getElementById('sortBoard').appendChild(sp);
  }
}

function sortSelection(shuffledList) {

  const swparr = Array();
  const len = shuffledList.length;

  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      const e1 = document.getElementById(`element${i}`);
      const e2 = document.getElementById(`element${j}`);
      if (shuffledList[i] > shuffledList[j]) {
        [shuffledList[i], shuffledList[j]] = [shuffledList[j], shuffledList[i]];
        swparr.push({ e1: e1.id, e2: e2.id });
      }
    }
  }
  return swparr;
}

function sortBubble(shuffledList) {

  const swparr = Array();
  const len = shuffledList.length;

  for (let i = 1; i <= len - 1; i++) {
    for (let j = 0; j < len - i; j++) {
      const e1 = document.getElementById(`element${j}`);
      const e2 = document.getElementById(`element${j + 1}`);
      if (shuffledList[j] > shuffledList[j + 1]) {
        [shuffledList[j], shuffledList[j + 1]] = [shuffledList[j + 1], shuffledList[j]];
        swparr.push({ e1: e1.id, e2: e2.id });
      }
    }
  }
  return swparr;
}

function sortInsertion(shuffledList) {

  const swparr = Array();
  const len = shuffledList.length;

  for (let i = 1; i < len; i++) {
    for (let j = i; j > 0; j--) {
      const e1 = document.getElementById(`element${j}`);
      const e2 = document.getElementById(`element${j - 1}`);
      if (shuffledList[j] < shuffledList[j - 1]) {
        [shuffledList[j], shuffledList[j - 1]] = [shuffledList[j - 1], shuffledList[j]];
        swparr.push({ e1: e1.id, e2: e2.id });
      }
    }
  }
  return swparr;
}

// 힙정렬 알고리즘
// 힙과 완전이진트리는 비슷하나 다르다. ~~ 
// 힙은 왼쪽자식과 오른쪽 자식보다 크면 된다~
// 완전이진트리는 왼자 < 부모 < 오자 순이다.
// 순서
// 1. 최대힙 구성 (len / 2 인덱스부터 자신의 자식노드들과 비교 더 큰 자식노드와 스왑)
// 2. 트리의 보스와 말단놈 스왑
// 3. 스왑된 새로운 트리로 1번 실행
// 4. 2,3번 원소 갯수 - 1 만큼 반복
function sortHeap(shuffledList) {
  const swparr = Array();
  const len = shuffledList.length;

  function heapify(shuffledList, here, len) {
    const leftidx = here * 2 + 1;
    const rightidx = here * 2 + 2;
    let bigger = here;

    if (leftidx < len && shuffledList[bigger] < shuffledList[leftidx]) {
      bigger = leftidx;
    }
    if (rightidx < len && shuffledList[bigger] < shuffledList[rightidx]) {
      bigger = rightidx;
    }
    if (bigger != here) {
      [shuffledList[bigger], shuffledList[here]] = [shuffledList[here], shuffledList[bigger]];
      const e1 = document.getElementById(`element${bigger}`);
      const e2 = document.getElementById(`element${here}`);
      swparr.push({ e1: e1.id, e2: e2.id });
      heapify(shuffledList, bigger, len);
    }
  }

  for (let i = Math.floor(len / 2); i >= 0; i--) {
    heapify(shuffledList, i, len);
  }

  for (let i = len - 1; i > 0; i--) {
    [shuffledList[0], shuffledList[i]] = [shuffledList[i], shuffledList[0]];
    const e1 = document.getElementById(`element${0}`);
    const e2 = document.getElementById(`element${i}`);
    swparr.push({ e1: e1.id, e2: e2.id });
    heapify(shuffledList, 0, i);
  }
  return swparr;
}

window.onload = function () {

  var isRunning = false;
  const rainbow = createRainbowColor();
  const len = rainbow.length;
  const shuffledList = createShuffledList(len);
  createSpanElement(len, shuffledList, rainbow);

  const swparr = sortBubble(shuffledList);

  document.getElementById('run').addEventListener('click', () => {

    if(isRunning) 
      return;
    else
      isRunning = true;

    swparr.map((element, curidx, arr) => {
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
  });
}