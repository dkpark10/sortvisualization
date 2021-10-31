// 스왑 소트는 스왑되는 인덱스를 저장하도록 한다.
export interface ArrayforSwapSort {
  e1: number;
  e2: number;
}

export interface ArrayforSubstitutionSort {
  idx: number;
  value: number;
}

export default abstract class Sort {

  protected swparr: ArrayforSwapSort[];
  protected subarr: ArrayforSubstitutionSort[];

  constructor() {
    this.swparr = [];
    this.subarr = [];
  }

  public abstract run(shuffleList: number[]): ArrayforSwapSort[] | ArrayforSubstitutionSort[];
}

export class SelectionSort extends Sort {

  public run(shuffledList: number[]): ArrayforSwapSort[] {

    const len: number = shuffledList.length;

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

export class InsertionSort extends Sort {

  public run(shuffledList: number[]): ArrayforSwapSort[] {

    const len: number = shuffledList.length;

    for (let i: number = 1; i < len; i++) {
      for (let j: number = i; j > 0; j--) {

        if (shuffledList[j] < shuffledList[j - 1]) {

          [shuffledList[j], shuffledList[j - 1]] = [shuffledList[j - 1], shuffledList[j]];
          this.swparr.push({ e1: j, e2: j - 1 });
        }
      }
    }

    return this.swparr;
  }
}

export class BubbleSort extends Sort {

  public run(shuffledList: number[]): ArrayforSwapSort[] {

    const len: number = shuffledList.length;

    for (let i: number = 1; i <= len - 1; i++) {
      for (let j: number = 0; j < len - i; j++) {

        if (shuffledList[j] > shuffledList[j + 1]) {

          [shuffledList[j], shuffledList[j + 1]] = [shuffledList[j + 1], shuffledList[j]];
          this.swparr.push({ e1: j, e2: j + 1 });
        }
      }
    }

    return this.swparr;
  }
}

export class CocktailSort extends Sort {

  public run(shuffledList: number[]): ArrayforSwapSort[] {

    const len: number = shuffledList.length;

    for (let i: number = 0; i < len - 1; i++) {

      for (let j: number = i; j < len - i - 1; j++) {

        if (shuffledList[j] > shuffledList[j + 1]) {
          [shuffledList[j], shuffledList[j + 1]] = [shuffledList[j + 1], shuffledList[j]];
          this.swparr.push({ e1: j, e2: j + 1 });
        }
      }

      for (let k: number = len - i - 1; k > i; k--) {

        if (shuffledList[k] < shuffledList[k - 1]) {
          [shuffledList[k], shuffledList[k - 1]] = [shuffledList[k - 1], shuffledList[k]];
          this.swparr.push({ e1: k, e2: k - 1 });
        }
      }
    }

    return this.swparr;
  }
}


//   // 퀵정렬
//   // 1. 피봇을 맨 처음 인덱스값으로 설정 
//   // 2. 왼쪽은 피봇보다 큰 값을 만나기 까지 돌려 
//   // 3. 오른쪽은 피봇보다 작은 값을 만나기 까지 돌려
//   // 4. 둘의 값 스왑
//   // 5. left 와 right가 교차될 때 까지 루프
//   // 6. 피봇과 right 스왑
//   // 7. 이중분할로 1 ~ 6 재귀적으로 수행

export class QuickSort extends Sort {

  public run(shuffledList: number[]): ArrayforSwapSort[] {

    this.divide(shuffledList, 0, shuffledList.length - 1);
    return this.swparr;
  }

  public divide(shuffledList: number[], start: number, end: number) {

    const pivot = shuffledList[start];
    let left: number = start + 1;
    let right: number = end;

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


//   // 힙정렬 알고리즘
//   // 힙과 완전이진트리는 비슷하나 다르다. ~~ 
//   // 힙은 왼쪽자식이 오른쪽 자식보다 크면 된다~
//   // 완전이진트리는 왼자 < 부모 < 오자 순이다.
//   // 순서
//   // 1. 최대힙 구성 (len / 2 인덱스부터 자신의 자식노드들과 비교 더 큰 자식노드와 스왑)
//   // 2. 트리의 보스와 말단놈 스왑
//   // 3. 스왑된 새로운 트리로 1번 실행
//   // 4. 2,3번 원소 갯수 - 1 만큼 반복

export class HeapSort extends Sort {

  public run(shuffledList: number[]): ArrayforSwapSort[] {

    const len: number = shuffledList.length;

    for (let i: number = Math.floor(len / 2); i >= 0; i--) {
      this.heapify(shuffledList, i, len);
    }

    for (let i: number = len - 1; i > 0; i--) {

      [shuffledList[0], shuffledList[i]] = [shuffledList[i], shuffledList[0]];
      this.swparr.push({ e1: 0, e2: i });
      this.heapify(shuffledList, 0, i);
    }

    return this.swparr;
  }

  public heapify(shuffledList: number[], here: number, len: number) {

    const leftidx: number = here * 2 + 1;
    const rightidx: number = here * 2 + 2;
    let bigger: number = here;

    if (leftidx < len && shuffledList[bigger] < shuffledList[leftidx]) {
      bigger = leftidx;
    }

    if (rightidx < len && shuffledList[bigger] < shuffledList[rightidx]) {
      bigger = rightidx;
    }

    if (bigger !== here) {    // 더 큰 값을 찾았다면
      [shuffledList[bigger], shuffledList[here]] = [shuffledList[here], shuffledList[bigger]];
      this.swparr.push({ e1: bigger, e2: here });
      this.heapify(shuffledList, bigger, len);
    }
  }
}

// 병합정렬
// 병합정렬 또한 기본적으로 분할정복 
// 1. 사이즈가 1일 때 까지 배열을 쪼개준다.
// 2. 쪼개진 것들을 차곡차곡 졍렬한다.
// 3. 왼쪽으로 쪼개고 오른쪽으로 쪼갠 배열에서 각각 값을 비교 작은값을 임시 배열에 넣어준다.
// 4. 어느 한쪽을 다 넣었다면 나머지 한쪽마저 다 넣는다. 

export class MergeSort extends Sort {

  public run(shuffledList: number[]): ArrayforSubstitutionSort[] {

    this.divide(shuffledList, 0, shuffledList.length - 1);
    return this.subarr;
  }

  public merge(shuffledList: number[], left: number, mid: number, right: number) {

    const tmp: number[] = [];
    let leftidx: number = left;
    let rightidx: number = mid + 1;

    // 왼쪽 또는 오른쪽 한 인덱스가 끝점에 다다르면 break;
    while (leftidx <= mid && rightidx <= right) {
      const value: number =
        shuffledList[leftidx] < shuffledList[rightidx] ?
          shuffledList[leftidx++] :
          shuffledList[rightidx++];

      tmp.push(value);
    }

    if (leftidx <= mid) {
      for (let i: number = leftidx; i <= mid; i++)
        tmp.push(shuffledList[i])
    }
    else {
      for (let i: number = rightidx; i <= right; i++)
        tmp.push(shuffledList[i]);
    }

    for (let i: number = left; i <= right; i++) {
      shuffledList[i] = tmp[i - left];

      this.subarr.push({
        idx: i,
        value: shuffledList[i]
      });
    }
  }

  public divide(shuffledList: number[], left: number, right: number) {

    if (left < right) {
      const mid: number = Math.floor((left + right) / 2);
      this.divide(shuffledList, left, mid);
      this.divide(shuffledList, mid + 1, right);
      this.merge(shuffledList, left, mid, right);
    }
  }
}

// 기수정렬
// 1. 1의 자리부터 차례대로 열개의 큐 배열에 담는다.
// 2. 1 -> 10 -> 100의 자리 순서대로 큐의 담는다. 
// 3. 각 자리수자보다 작은 수는 그냥 0에 담는다.
// 4. 담은 큐배열은 처음 큐부터 pop해주면서 새로 배열을 담아준다.
// 5. 최고 자리 숫자까지 반복

export class RadixSort extends Sort {

  public run(shuffledList: number[]): ArrayforSubstitutionSort[] {

    const queue: number[][] = Array.from(Array(10), () => Array());
    const maxlength: number = 3;

    for (let digit: number = 0; digit < maxlength; digit++) {

      shuffledList.map((element: number, curidx: number, self: number[]) => {
        const num: number = Math.floor(element / Math.pow(10, digit) % 10);
        queue[num].push(element);
      });

      let idx: number = 0;

      queue.map((array: number[], arrayidx: number, selfarr: number[][]) => {

        while (array.length) {
          shuffledList[idx++] = array.shift() as number;      // undefined 대입할 수 있기 때문에 타입단언
          
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