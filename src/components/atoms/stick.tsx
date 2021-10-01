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
            height: `${height}px`
          }
        }
      />
    </>
  )
}

export default Stick;