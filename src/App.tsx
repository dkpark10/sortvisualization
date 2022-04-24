import './styles/App.css';
import createRainbowColor from './modules/color';
import calculWidth from './modules/calculwidth';
import Sticks from './components/molecules/sticklist';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import Button from './components/atoms/button';
import Select from './components/atoms/select';
import Toggle from './components/atoms/toggle';
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

  const [sortType, setSortType] = useState<string>('selection');
  const [lock, setLock] = useState<boolean>(false);
  const [info, setInfo] = useState<Info>({ cnt: 0, percentage: 0 });
  const [faster, setFaster] = useState<boolean>(false);
  const [colorList, setColorList] = useState<string[]>(createRainbowColor(15));
  const dispatch = useDispatch();

  // useSelector는 항상 최상단 함수에 작성한다.
  const { shuffleList } = useSelector((state: reducer.State) => ({
    shuffleList: state.shuffleList,
  }));

  const selectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {

    setSortType(prev => e.target.value);
    const len = calculWidth(e.target.value);
    setColorList(prev => [...createRainbowColor(len)]);
  }

  const sortRun = () => {

    setLock(true);

    const sortFactory: SortFactory = new SortFactory(sortType);
    const newarr: ArrayforSwapSort[] | ArrayforSubstitutionSort[] = sortFactory.createSortInstance().run([...shuffleList]);
    const size = newarr.length;

    if (isSwapSort(newarr[0])) {

      newarr.forEach((element, idx) => {

        const tid = setTimeout(() => {
          const { e1, e2 } = element as ArrayforSwapSort;
          [shuffleList[e1], shuffleList[e2]] = [shuffleList[e2], shuffleList[e1]];

          dispatch(reducer.setShuffleList(shuffleList));
          setInfo(prev => ({
            ...prev,
            cnt: prev.cnt + 1,
            percentage: Math.floor(((idx + 1) / size) * 100)
          }))
          clearTimeout(tid);
        }, 10);
      });
    }
    else {

      newarr.forEach((element, percentage) => {

        const tid = setTimeout(() => {
          const { idx, value } = element as ArrayforSubstitutionSort;
          shuffleList[idx] = value;

          dispatch(reducer.setShuffleList(shuffleList));
          setInfo(prev => ({
            ...prev,
            cnt: prev.cnt + 1,
            percentage: Math.floor(((percentage + 1) / size) * 100)
          }))
          clearTimeout(tid);
        }, 10);
      });
    }
  }

  const shuffle = () => {

    dispatch(reducer.setShuffleList(createShuffledList(colorList.length)))
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
      <header>
        <aside>
          <div>LENGTH:{colorList.length} </div>
          <div>COMPARISON: {info.cnt}</div>
          <div>PERCENTAGE: {info.percentage}%</div>
        </aside>
        <aside>
        <div>
        <Select onChange={selectChange} disabled={lock} />
      </div>
      <div className='wrapper' >
        <Button disabled={lock} onClick={sortRun}>
          run
        </Button>
        <Button disabled={false} onClick={shuffle}>
          shuffle
        </Button>
      </div>
      <div className='wrapper'>
        <label style={{ color: 'white' }}>slower </label>
        <Toggle onChange={speedToggle} />
        <label style={{ color: 'white' }}> faster</label>
      </div>
        </aside>
      </header>
      <main className='sortboard'>
        <Sticks
          color={colorList}
          faster={faster}
        />
      </main>
    </>
  )
}

export default App;