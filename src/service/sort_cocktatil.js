import { Sort } from './sort.js';

export class CocktailSort extends Sort {

  run(shuffledList) {
    const len = shuffledList.length;

    for (let i = 0; i < len - 1; i++) {

      for (let j = i; j < len - i - 1; j++) {

        if (shuffledList[j] > shuffledList[j + 1]) {
          [shuffledList[j], shuffledList[j + 1]] = [shuffledList[j + 1], shuffledList[j]];
          this.swparr.push({ e1: j, e2: j + 1 });
        }
      }

      for (let k = len - i - 1; k > i; k--) {

        if (shuffledList[k] < shuffledList[k - 1]) {
          [shuffledList[k], shuffledList[k - 1]] = [shuffledList[k - 1], shuffledList[k]];
          this.swparr.push({ e1: k, e2: k - 1 });
        }
      }
    }

    return this.swparr;
  }
}
