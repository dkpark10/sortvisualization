const calculWidth = (sortType: string): number => {

  switch (sortType) {
    case 'selection':
    case 'insertion':
    case 'bubble':
    case 'cocktail':
      return 15;
    case 'quick':
    case 'heap':
    case 'radix':
    case 'merge':
      return 5;
    default: 
      return 15;
  }
}

export default calculWidth;