import Sort, { SelectionSort, HeapSort, InsertionSort, BubbleSort, CocktailSort, QuickSort } from './sorts';

export default class SortFactory {

  private sort: Sort;
  private readonly sortType: string;

  constructor(sortType: string) {
    this.sortType = sortType;
  }

  public createSortInstance(): Sort {

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
        break;
      case 'radix':
        break;
    }

    return this.sort;
  }
}