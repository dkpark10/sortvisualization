import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../atoms/button'
import Select from '../atoms/select';
import createShuffledList from '../../modules/shuffle';
import SortFactory from '../../modules/sortfactory';
import color from '../../modules/color';
import { ArrayforSwapSort, ArrayforSubstitutionSort } from '../../modules/sorts';
import * as reducer from '../../redux/index';

const SelectButton = () => {

  const [sortType, setSortType] = useState<string>('selection');
  const dispatch = useDispatch();

  // useSelector는 항상 최상단 함수에 작성한다.
  const { shuffleList } = useSelector((state: reducer.State) => ({
    shuffleList: state.shuffleList
  }));

  const selectChange = (e: React.ChangeEvent<HTMLSelectElement>) => setSortType(prev => e.target.value);

  const sortRun = () => {

    const sortFactory: SortFactory = new SortFactory(sortType);
    const newarr: ArrayforSwapSort[] = sortFactory.createSortInstance().run([...shuffleList]);

    newarr.forEach(element => {

      setTimeout(() => {
        const { e1, e2 } = element;
        [shuffleList[e1], shuffleList[e2]] = [shuffleList[e2], shuffleList[e1]];
        dispatch(reducer.setShuffleList(shuffleList));
      }, 10);
    });
  }

  const shuffle = () => dispatch(reducer.setShuffleList(createShuffledList(color.length)));

  return (
    <>
      <Select onChange={selectChange} />
      <Button onClick={sortRun} text='run' />
      <Button onClick={shuffle} text='shuffle' />
    </>
  )
}

export default SelectButton;