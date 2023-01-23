import { SelectionSort } from "./sort_selection";

export class SortFactory {

  constructor(sortType) {
    this.sortType = sortType;
  }

  createSortInstance() {
    switch (this.sortType) {
      case 'selection':
        this.sort = new SelectionSort();
        break;
      case 'insertion':
        this.sort = new InsertionSort();
        break;
      case 'bubble':
        this.sort = new BubbleSort();
        break;
      case 'cocktail':
        this.sort = new CocktailSort();
        break;
      case 'quick':
        this.sort = new QuickSort();
        break;
      case 'heap':
        this.sort = new HeapSort();
        break;
      case 'merge':
        this.sort = new MergeSort();
        break;
      case 'radix':
        this.sort = new RadixSort();
        break;
      case 'shell':
        this.sort = new ShellSOrt();
        break;
    }

    return this.sort;
  }
}
