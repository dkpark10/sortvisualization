import Sort,
{
  SelectionSort,
  HeapSort,
  InsertionSort,
  BubbleSort,
  CocktailSort,
  QuickSort,
  MergeSort,
  RadixSort,
} from './sorts';


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
        this.sort = new MergeSort();
        break;
      case 'radix':
        this.sort = new RadixSort();
        break;
    }

    return this.sort;
  }
}