import { Sort } from './sort.js';

export class SelectionSort extends Sort {

  run(shuffledList) {
    const len = shuffledList.length;

    for (let i = 0; i < len - 1; i++) {
      for (let j = i + 1; j < len; j++) {

        if (shuffledList[i] > shuffledList[j]) {
          [shuffledList[i], shuffledList[j]] = [shuffledList[j], shuffledList[i]];
          this.swparr.push({ e1: i, e2: j });
        }
      }
    }

    return this.swparr;
  }
}
