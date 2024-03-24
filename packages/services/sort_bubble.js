import { Sort } from './sort.js';

export class BubbleSort extends Sort {
  /** 
   * @param {number[]} shuffledList
   */
  run(shuffledList) {
    const len = shuffledList.length;

    for (let i = 1; i <= len - 1; i++) {
      for (let j = 0; j < len - i; j++) {

        if (shuffledList[j] > shuffledList[j + 1]) {

          [shuffledList[j], shuffledList[j + 1]] = [shuffledList[j + 1], shuffledList[j]];
          this.swparr.push({ e1: j, e2: j + 1 });
        }
      }
    }

    return this.swparr;
  }
}
