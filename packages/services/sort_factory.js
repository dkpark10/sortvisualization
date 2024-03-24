import { SelectionSort } from "./sort_selection.js";
import { InsertionSort } from "./sort_insertion.js";
import { BubbleSort } from "./sort_bubble.js";
import { CocktailSort } from "./sort_cocktatil.js";
import { QuickSort } from "./sort_quick.js";
import { HeapSort } from "./sort_heap.js";
import { MergeSort } from "./sort_merge.js";
import { RadixSort } from "./sort_radix.js";
import { ShellSOrt } from "./sort_shell.js";

export const getSortedList = (sortType) => {
  switch (sortType) {
    case 'selection':
      return new SelectionSort();
    case 'insertion':
      return new InsertionSort();
    case 'bubble':
      return new BubbleSort();
    case 'cocktail':
      return new CocktailSort();
    case 'quick':
      return new QuickSort();
    case 'heap':
      return new HeapSort();
    case 'merge':
      return new MergeSort();
    case 'radix':
      return new RadixSort();
    case 'shell':
      return new ShellSOrt();
    default: return new SelectionSort();
  };
};
