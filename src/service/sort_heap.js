import { Sort } from './sort.js';

/**
 * @description 힙정렬
  힙과 완전이진트리는 비슷하나 다르다.
  힙은 왼쪽자식이 오른쪽 자식보다 크면 된다.
  완전이진트리는 왼쪽 자식 < 부모 < 오른쪽 자식 순이다.

  순서
  1. 최대힙 구성 (len / 2 인덱스부터 자신의 자식노드들과 비교 더 큰 자식노드와 스왑)
  2. 트리의 보스와 말단놈 스왑
  3. 스왑된 새로운 트리로 1번 실행
  4. 2,3번 원소 갯수 - 1 만큼 반복
 */
export class HeapSort extends Sort {
  /** 
   * @param {number[]} shuffledList
   */
  run(shuffledList) {
    const len = shuffledList.length;

    for (let i = Math.floor(len / 2); i >= 0; i--) {
      this.heapify(shuffledList, i, len);
    }

    for (let i = len - 1; i > 0; i--) {

      [shuffledList[0], shuffledList[i]] = [shuffledList[i], shuffledList[0]];
      this.swparr.push({ e1: 0, e2: i });
      this.heapify(shuffledList, 0, i);
    }

    return this.swparr;
  }

  /**
   * @param {number[]} shuffledList 
   * @param {number} here 
   * @param {number} len
   */
  heapify(shuffledList, here, len) {

    const leftIdx = here * 2 + 1;
    const rightIdx = here * 2 + 2;
    let bigger = here;

    if (leftIdx < len && shuffledList[bigger] < shuffledList[leftIdx]) {
      bigger = leftIdx;
    }

    if (rightIdx < len && shuffledList[bigger] < shuffledList[rightIdx]) {
      bigger = rightIdx;
    }

    if (bigger !== here) {    // 더 큰 값을 찾았다면
      [shuffledList[bigger], shuffledList[here]] = [shuffledList[here], shuffledList[bigger]];
      this.swparr.push({ e1: bigger, e2: here });
      this.heapify(shuffledList, bigger, len);
    }
  }
}
