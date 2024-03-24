import { Sort } from './sort.js';

/**
 * @description 병합정렬
 * 병합정렬 또한 기본적으로 분할정복 
  1. 사이즈가 1일 때 까지 배열을 쪼개준다.
  2. 쪼개진 것들을 차곡차곡 졍렬한다.
  3. 왼쪽으로 쪼개고 오른쪽으로 쪼갠 배열에서 각각 값을 비교 작은값을 임시 배열에 넣어준다.
  4. 어느 한쪽을 다 넣었다면 나머지 한쪽마저 다 넣는다. 
 */
export class MergeSort extends Sort {
  /** 
   * @param {number[]} shuffledList
   */
  run(shuffledList) {
    this.divide(shuffledList, 0, shuffledList.length - 1);
    return this.subarr;
  }

  /**
   * @param {number[]} shuffledList 
   * @param {number} left 
   * @param {number} mid 
   * @param {number} right 
   */
  merge(shuffledList, left, mid, right) {

    const tmp = [];
    let leftIdx = left;
    let rightIdx = mid + 1;

    // 왼쪽 또는 오른쪽 한 인덱스가 끝점에 다다르면 break;
    while (leftIdx <= mid && rightIdx <= right) {
      const value =
        shuffledList[leftIdx] < shuffledList[rightIdx] ?
          shuffledList[leftIdx++] :
          shuffledList[rightIdx++];

      tmp.push(value);
    }

    if (leftIdx <= mid) {
      for (let i = leftIdx; i <= mid; i++)
        tmp.push(shuffledList[i])
    }
    else {
      for (let i = rightIdx; i <= right; i++)
        tmp.push(shuffledList[i]);
    }

    for (let i = left; i <= right; i++) {
      shuffledList[i] = tmp[i - left];

      this.subarr.push({
        idx: i,
        value: shuffledList[i]
      });
    }
  }

  /**
   * @param {number[]} shuffledList 
   * @param {number} left 
   * @param {number} right 
   */
  divide(shuffledList, left, right) {
    if (left < right) {
      const mid = Math.floor((left + right) / 2);
      this.divide(shuffledList, left, mid);
      this.divide(shuffledList, mid + 1, right);
      this.merge(shuffledList, left, mid, right);
    }
  }
}
