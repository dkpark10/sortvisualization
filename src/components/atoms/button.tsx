import react, { MouseEvent } from 'react';

interface ButtonProps {
  disabled: boolean;
  onClick: react.MouseEventHandler<HTMLButtonElement>;
  text: string;
}

const Button = ({ disabled, onClick, text }: ButtonProps) => {
  
  return (
    <>
      <button disabled={disabled} onClick={onClick}>{text}</button>
    </>
  )
}

export default Button;