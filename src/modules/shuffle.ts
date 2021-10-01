const createShuffledList = (len: number): number[] => {

  return Array.from({ length: len }, (v: number, i: number) => i + 1)
    .map((element: number, curidx: number, arr: number[]) => {
      const random: number = Math.floor(Math.random() * arr.length);
      arr[curidx] = arr[random];
      arr[random] = element;
      return arr;
    })[0];
}

export default createShuffledList;