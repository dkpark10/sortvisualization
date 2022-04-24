import StickComponent from "../atoms/stick";

interface SticksProps {
  color: string[];
  faster: boolean;
  shuffleList: number[]
};

const StickList = ({
  color,
  faster,
  shuffleList }: SticksProps) => {

  return (
    <>
      {shuffleList.map((ele, idx) => {

        const height = (425 / shuffleList.length) * ele;
        const parsedHeight = `${(height / 2).toFixed(1)}px`;

        return (
          <StickComponent
            key={idx}
            height={parsedHeight}
            color={color[ele - 1]}
            faster={faster}
            length={shuffleList.length}
          />
        )
      })}
    </>
  )
};

export default StickList;