import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../atoms/button'
import Select from '../atoms/select';
import createShuffledList from '../../modules/shuffle';
import SortFactory from '../../modules/sortfactory';
import color from '../../modules/color';
import { ArrayforSwapSort, ArrayforSubstitutionSort } from '../../modules/sorts';
import * as reducer from '../../redux/index';

const isSwapSort = (obj: any): obj is ArrayforSwapSort => {
  return (obj as ArrayforSwapSort).e1 !== undefined;
}

const SelectButton = () => {

  const [sortType, setSortType] = useState<string>('selection');
  const [lock, setLock] = useState<boolean>(false);

  const dispatch = useDispatch();

  // useSelector는 항상 최상단 함수에 작성한다.
  const { shuffleList } = useSelector((state: reducer.State) => ({
    shuffleList: state.shuffleList,
  }));

  const selectChange = (e: React.ChangeEvent<HTMLSelectElement>) => setSortType(prev => e.target.value);

  const sortRun = async () => {

    setLock(prev => true);

    const sortFactory: SortFactory = new SortFactory(sortType);
    const newarr: ArrayforSwapSort[] | ArrayforSubstitutionSort[] = sortFactory.createSortInstance().run([...shuffleList]);

    if (isSwapSort(newarr[0])) {

      newarr.forEach((element) => {

        setTimeout(() => {
          const { e1, e2 } = element as ArrayforSwapSort;
          [shuffleList[e1], shuffleList[e2]] = [shuffleList[e2], shuffleList[e1]];
          dispatch(reducer.setShuffleList(shuffleList));
        }, 10);
      });
    }
    else {

      newarr.forEach((element) => {

        setTimeout(() => {
          const { idx, value } = element as ArrayforSubstitutionSort;
          shuffleList[idx] = value;
          dispatch(reducer.setShuffleList(shuffleList));
        }, 10);
      });
    }
  }

  const shuffle = () => {
    dispatch(reducer.setShuffleList(createShuffledList(color.length)))
    setLock(prev => false);
  }

  return (
    <>
      <Select onChange={selectChange} />
      <Button disabled={lock} onClick={sortRun} text='run' />
      <Button disabled={false} onClick={shuffle} text='shuffle' />
    </>
  )
}

export default SelectButton;