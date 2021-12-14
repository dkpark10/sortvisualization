const calculWidth = (sortType: string): number => {

  switch (sortType) {
    case 'selection':
    case 'insertion':
    case 'bubble':
    case 'cocktail':
      return 15;
    case 'quick':
    case 'radix':
      return 1;
    case 'heap':
    case 'merge':
      return 3;
    default: 
      return 15;
  }
}

export default calculWidth;