import React from "react";

interface ToggleProps{
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Toggle = ({onChange}: ToggleProps) => {

  return (
    <>
      <label className='faster-button'>
        <input type='checkbox' onChange={onChange} />
        <span className='onoff-switch' />
      </label>
    </>
  )
}

export default Toggle;