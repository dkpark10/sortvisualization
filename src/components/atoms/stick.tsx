import React from "react";

export interface StickProp {
  height: number;
  color: string;
  faster?: boolean;
}

const Stick = ({ height, color }: StickProp) => {

  return (
    <>
      <span
        className='stick'
        style={
          {
            background: `${color}`,
            height: `${(height / 2).toFixed(1)}px`
          }
        }
      />
    </>
  )
};

const FasterStick = React.memo(({ height, color }: StickProp) => {
  return <Stick height={height} color={color} />
});

const SlowerStick = ({ height, color }: StickProp) => {
  return <Stick height={height} color={color} />
};

const StickComponent = ({ height, color, faster}: StickProp) => {
  if (faster) {
    return <FasterStick height={height} color={color} />
  } else {
    return <SlowerStick height={height} color={color} />
  }
}

export default StickComponent;