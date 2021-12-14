import React from "react";
import styled from "styled-components";

export interface StickProp {
  height: number;
  color: string;
  length: number;
  faster?: boolean;
}

interface IStickStyle {
  height: string;
  color: string;
  width: number;
}

const StickStyle = styled('span').attrs((props: IStickStyle) => ({
  style: {
    background: props.color,
    height: props.height
  }
})) <IStickStyle>`
  margin-top:auto;
  position: relative;
  width: ${({width}) => width}px;
  display: inline-block;
`;

const Stick = ({ height, color, length }: StickProp) => {

  const width = 637.5 / length;

  return (
    <>
      <StickStyle
        height={`${(height / 2).toFixed(1)}px`}
        color={color}
        width={width}
      />
    </>
  )
};

const StickComponent = ({ height, color, faster, length }: StickProp) => {
  
  if (faster) {
    return <FasterStick height={height} color={color} length={length} />
  } else {
    return <SlowerStick height={height} color={color} length={length}/>
  }
}

const FasterStick = React.memo(({ height, color, length }: StickProp) => {
  return <Stick height={height} color={color} length={length} />
});

const SlowerStick = ({ height, color, length }: StickProp) => {
  return <Stick height={height} color={color} length={length}/>
};

export default StickComponent;