import react from 'react';

interface SelectProps{
  onChange : React.ChangeEventHandler<HTMLSelectElement>;
}

const Select = ({ onChange }: SelectProps) => {

  const nameList: string[][] = [
    ['selection', 'Selection Sort'],
    ['insertion', 'Insertion Sort'],
    ['bubble', 'Bubble Sort'],
    ['cocktail', 'Cocktail Sort'],
    ['quick', 'Quick Sort'],
    ['heap', 'Heap Sort'],
    ['merge', 'Merge Sort'],
    ['radix', 'Radix Sort']
  ];

  const optionList: JSX.Element[] = nameList.map((ele, idx) => {

    const [val, ph] = ele;

    return (
      <option
        key={idx}
        value={val}
      >{ph}</option>
    );
  })

  return (

    <select onChange={onChange} name="sorttype" className="selectsort">
      {optionList}
    </select>
  )
}

export default Select;