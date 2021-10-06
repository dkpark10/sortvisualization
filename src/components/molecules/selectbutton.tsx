import React, { useEffect, useState, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../atoms/button'
import Select from '../atoms/select';
import color from '../../modules/color';

interface SelectButtonProps{
  selectChange: React.ChangeEventHandler<HTMLSelectElement>;
  runClick: React.MouseEventHandler<HTMLButtonElement>;
  shuffle : React.MouseEventHandler<HTMLButtonElement>;
  lock : boolean
};

const SelectButton = ({ selectChange, runClick, shuffle, lock }: SelectButtonProps) => {

  return (
    <>
      <Select onChange={selectChange} />
      <Button disabled={lock} onClick={runClick} text='run' />
      <Button disabled={false} onClick={shuffle} text='shuffle' />
    </>
  )
}

export default SelectButton;