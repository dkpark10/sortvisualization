import react from 'react';
import styled from 'styled-components';

interface ButtonProps {
  disabled: boolean;
  onClick: react.MouseEventHandler<HTMLButtonElement>;
  children: JSX.Element | string;
}

export default function Button({
  disabled,
  onClick,
  children }: ButtonProps) {

  return (
    <>
      <button onClick={onClick} disabled={disabled}>
        {children}
      </button>
    </>
  )
}