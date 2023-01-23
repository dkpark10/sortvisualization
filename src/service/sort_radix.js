/**
 * @description 기수정렬
 * 1. 1의 자리부터 차례대로 열개의 큐 배열에 담는다.
   2. 1 -> 10 -> 100의 자리 순서대로 큐의 담는다. 
   3. 각 자리수자보다 작은 수는 그냥 0에 담는다.
   4. 담은 큐배열은 처음 큐부터 pop해주면서 새로 배열을 담아준다.
   5. 최고 자리 숫자까지 반복
 */

export class RadixSort extends Sort {

   run(shuffledList) {

    const queue = Array.from(Array(10), () => []);
    const maxlength = 3;

    for (let digit = 0; digit < maxlength; digit++) {

      shuffledList.forEach((element) => {
        const num = Math.floor(element / Math.pow(10, digit) % 10);
        queue[num].push(element);
      });

      let idx = 0;

      queue.forEach((array) => {

        while (array.length) {
          shuffledList[idx++] = array.shift();
          
          this.subarr.push({
            idx: idx - 1,
            value: shuffledList[idx - 1]
          });
        }
      });
    }

    return this.subarr;
  }
}
