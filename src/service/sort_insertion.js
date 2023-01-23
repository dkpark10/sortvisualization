import { Sort } from './sort.js';

export class InsertionSort extends Sort {

  run(shuffledList) {
    const len = shuffledList.length;

    for (let i = 1; i < len; i++) {
      for (let j = i; j > 0; j--) {

        if (shuffledList[j] < shuffledList[j - 1]) {

          [shuffledList[j], shuffledList[j - 1]] = [shuffledList[j - 1], shuffledList[j]];
          this.swparr.push({ e1: j, e2: j - 1 });
        }
      }
    }

    return this.swparr;
  }
}
