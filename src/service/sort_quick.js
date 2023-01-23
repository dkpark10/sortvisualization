/**
 * @description 퀵정렬
  1. 피봇을 맨 처음 인덱스값으로 설정 
  2. 왼쪽은 피봇보다 큰 값을 만나기 까지 돌려 
  3. 오른쪽은 피봇보다 작은 값을 만나기 까지 돌려
  4. 둘의 값 스왑
  5. left 와 right가 교차될 때 까지 루프
  6. 피봇과 right 스왑
  7. 이중분할로 1 ~ 6 재귀적으로 수행
 */

export class QuickSort extends Sort {

  run(shuffledList) {
    this.divide(shuffledList, 0, shuffledList.length - 1);
    return this.swparr;
  }

  /**
   * 
   * @param {number []} shuffledList 
   * @param {number} start 
   * @param {number} end 
   */
  divide(shuffledList, start, end) {
    const pivot = shuffledList[start];
    let left = start + 1;
    let right = end;

    while (left <= right) {
      while (shuffledList[left] < pivot)
        left++;
      while (shuffledList[right] > pivot)
        right--;

      if (left <= right) {
        [shuffledList[right], shuffledList[left]] = [shuffledList[left], shuffledList[right]];
        this.swparr.push({ e1: right, e2: left });
      }
    }

    if (start < end) {
      [shuffledList[start], shuffledList[right]] = [shuffledList[right], shuffledList[start]];
      this.swparr.push({ e1: start, e2: right });
      this.divide(shuffledList, start, right - 1);
      this.divide(shuffledList, right + 1, end);
    }
  }
}
