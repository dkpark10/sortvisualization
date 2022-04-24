import React from 'react';
import styled from 'styled-components';

const StyleSelect = styled.select`
  width:100%;
  border-radius: 8px;
  font-family: 'Noto Sans JP', sans-serif;
`;

interface SelectProps {
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  disabled: boolean;
}

const Select = ({ onChange, disabled }: SelectProps) => {

  const nameList: string[][] = [
    ['selection', 'Selection Sort'],
    ['quick', 'Quick Sort'],
    ['insertion', 'Insertion Sort'],
    ['heap', 'Heap Sort'],
    ['bubble', 'Bubble Sort'],
    ['merge', 'Merge Sort'],
    ['cocktail', 'Cocktail Sort'],
    ['radix', 'Radix Sort'],
    ['shell', 'Shell Sort']
  ];

  return (
    <StyleSelect onChange={onChange} name="sorttype" disabled={disabled} >
      {nameList.map((ele, idx) =>
        <option
          key={idx}
          value={ele[0]}
        >
          {ele[1]}
        </option>
      )}
    </StyleSelect>
  )
}

export default Select;