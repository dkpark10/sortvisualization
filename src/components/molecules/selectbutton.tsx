import React, { useEffect, useState, memo } from 'react';
import Button from '../atoms/button'
import Select from '../atoms/select';
import Toggle from '../atoms/toggle';

interface SelectButtonProps {
  selectChange: React.ChangeEventHandler<HTMLSelectElement>;
  runClick: React.MouseEventHandler<HTMLButtonElement>;
  shuffle: React.MouseEventHandler<HTMLButtonElement>;
  lock: boolean;
  toggle: React.ChangeEventHandler<HTMLInputElement>;
};

const SelectButton = ({
  selectChange,
  runClick,
  shuffle,
  lock,
  toggle }: SelectButtonProps) => {

  return (
    <>
      <div>
        <Select onChange={selectChange} />
      </div>
      <Button disabled={lock} onClick={runClick} text='RUN' />
      <Button disabled={false} onClick={shuffle} text='SHUFFLE' />
      <div>
        <label style = {{color:'white'}}>Slower </label>
        <Toggle onChange={toggle} />
        <label style = {{color:'white'}}> Faster </label>
      </div>
    </>
  )
}

export default SelectButton;