import React from 'react';
import styled from 'styled-components';

const StyleSelect = styled.select`
  width:150px;
  margin-right: 8px;
  border-radius: 8px;
  font-family: 'Noto Sans JP', sans-serif;
`;

interface SelectProps {
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
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
    <StyleSelect onChange={onChange} name="sorttype" >
      {optionList}
    </StyleSelect>
  )
}

export default Select;