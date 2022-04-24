import StickComponent from "../atoms/stick";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as reducer from '../../redux/index';
import createShuffledList from '../../modules/shuffle';

interface SticksProps {
  color: string[];
  faster: boolean;
};

const StickList = ({ color, faster }: SticksProps) => {

  const dispatch = useDispatch();

  // useSelector는 항상 최상단 함수에 작성한다.
  const { shuffleList } = useSelector((state: reducer.State) => ({
    shuffleList: state.shuffleList
  }));

  useEffect(() => {
    dispatch(reducer.setShuffleList(createShuffledList(color.length)));
  }, [dispatch, color]);

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