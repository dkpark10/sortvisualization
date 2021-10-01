import react, { MouseEvent } from 'react';

interface ButtonProps {
  onClick: react.MouseEventHandler<HTMLButtonElement>;
  text: string;
}

const Button = ({ onClick, text }: ButtonProps) => {
  
  return (
    <>
      <button onClick={onClick}>{text}</button>
    </>
  )
}

export default Button;