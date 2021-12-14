import react from 'react';
import styled from 'styled-components';

const StyleButton = styled.button`
  margin-bottom: 2px;
  
  &:hover{
    color: white;
    background-color:  #1a75ff;  
  }

  &:active{
    background-color:   #0047b3;
  }
`;

interface ButtonProps {
  disabled: boolean;
  onClick: react.MouseEventHandler<HTMLButtonElement>;
  text: string;
}

const Button = ({ disabled, onClick, text }: ButtonProps) => {
  
  return (
    <>
      <StyleButton onClick={onClick} disabled={disabled}>
        {text}
      </StyleButton>
    </>
  )
}

export default Button;