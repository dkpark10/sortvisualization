import React from "react";
import styled from "styled-components";

export interface StickProp {
  height: string;
  color: string;
  length: number;
  faster?: boolean;
}

interface IStickStyle {
  height: string;
  color: string;
  width: string;
}

const StickStyle = styled('span').attrs((props: IStickStyle) => ({
  style: {
    background: props.color,
    height: props.height
  }
})) <IStickStyle>`
  margin-top:auto;
  position: relative;
  width: ${({ width }) => width};
  display: inline-block;

  /* @media screen and (max-width : 768px){
    width:94vw;
    height:82vw;
  } */
`;

const Stick = ({ height, color, length }: StickProp) => {

  return (
    <>
      <StickStyle
        width={`${637.5 / length}px`}
        height={height}
        color={color}
      />
    </>
  )
};

const FasterStick = React.memo(({ height, color, length }: StickProp) => {
  return <Stick height={height} color={color} length={length} />
});

const SlowerStick = ({ height, color, length }: StickProp) => {
  return <Stick height={height} color={color} length={length} />
};

export default function StickComponent({
  height,
  color,
  faster,
  length }: StickProp) {

  if (faster) {
    return <FasterStick
      height={height}
      color={color}
      length={length}
    />
  } else {
    return <SlowerStick
      height={height}
      color={color}
      length={length}
    />
  }
}