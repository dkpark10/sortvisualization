import { Sort } from './sort.js';

export class ShellSOrt extends Sort{
  /**
   * @param {number[]} shuffledList 
   */
  run(shuffledList) {
    const len = shuffledList.length;
    let gap = Math.floor(shuffledList.length / 2);
    while (gap > 0) {

      for (let i = gap; i < len; i++) {
        const temp = shuffledList[i];

        let j;
        for (j = i; j >= gap && shuffledList[j - gap] > temp; j -= gap) {
          shuffledList[j] = shuffledList[j - gap];
          this.subarr.push({
            idx: j,
            value: shuffledList[j - gap]
          });
        }
        shuffledList[j] = temp;
        this.subarr.push({
          idx: j,
          value: temp
        });
      }

      gap = Math.floor(gap / 2);
    }
    return this.subarr;
  }
}
