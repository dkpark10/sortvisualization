import './css/App.css';
import rainbowColor from './modules/color';
import Sticks from './components/molecules/sticklist';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import SelectButton from './components/molecules/selectbutton';
import { ArrayforSwapSort, ArrayforSubstitutionSort } from './modules/sorts';
import * as reducer from './redux/index';
import createShuffledList from './modules/shuffle';
import SortFactory from './modules/sortfactory';

const isSwapSort = (obj: any): obj is ArrayforSwapSort => {
  return (obj as ArrayforSwapSort).e1 !== undefined;
}

interface Info {
  cnt: number;
  percentage: number;
}

const App = () => {

  console.log('App render');
  const [sortType, setSortType] = useState<string>('selection');
  const [lock, setLock] = useState<boolean>(false);
  const [info, setInfo] = useState<Info>({ cnt: 0, percentage: 0 });
  const [faster, setFaster] = useState<boolean>(false);

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
    const size = newarr.length;

    if (isSwapSort(newarr[0])) {

      newarr.forEach((element, idx) => {

        setTimeout(() => {

          const { e1, e2 } = element as ArrayforSwapSort;
          [shuffleList[e1], shuffleList[e2]] = [shuffleList[e2], shuffleList[e1]];

          dispatch(reducer.setShuffleList(shuffleList));
          setInfo(prev => ({
            ...prev,
            cnt: prev.cnt + 1,
            percentage: Math.floor(((idx + 1) / size) * 100)
          }))
        }, 10);
      });
    }
    else {

      newarr.forEach((element, percentage) => {

        setTimeout(() => {

          const { idx, value } = element as ArrayforSubstitutionSort;
          shuffleList[idx] = value;

          dispatch(reducer.setShuffleList(shuffleList));
          setInfo(prev => ({
            ...prev,
            cnt: prev.cnt + 1,
            percentage: Math.floor(((percentage + 1) / size) * 100)
          }))
        }, 10);
      });
    }
  }

  const shuffle = () => {

    dispatch(reducer.setShuffleList(createShuffledList(rainbowColor.length)))
    setLock(false);
    setInfo(prev => ({
      ...prev,
      cnt: 0,
      percentage: 0
    }))
  }

  const speedToggle = (e: React.ChangeEvent<HTMLInputElement>) => setFaster(e.target.checked);

  return (
    <>
      <nav>
        <p><span>LENGTH:{rainbowColor.length} </span></p>
        <p><span id='comparison'>COMPARISON: {info.cnt}</span></p>
        <p><span id='percentage'>PERCENTAGE: {info.percentage}%</span></p>
      </nav>
      <section className='sortboard'>
        <Sticks 
          color={rainbowColor}
          faster={faster}
        />
      </section>
      <aside>
        <SelectButton
          selectChange={selectChange}
          runClick={sortRun}
          shuffle={shuffle}
          lock={lock}
          toggle={speedToggle}
        />
      </aside>
    </>
  )
}

export default App;