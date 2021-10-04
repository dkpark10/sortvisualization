import React from "react";

interface StickProp {
  height: number;
  color: string;
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
}

export default React.memo(Stick, (prev: StickProp, next: StickProp) =>
  prev.height === next.height);
