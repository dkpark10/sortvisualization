import './styles/App.css';
import createRainbowColor from './modules/color';
import calculWidth from './modules/calculwidth';
import Sticks from './components/molecules/sticklist';
import React, { useEffect, useRef, useState } from 'react';
import Button from './components/atoms/button';
import Select from './components/atoms/select';
import Toggle from './components/atoms/toggle';
import { ArrayforSwapSort, ArrayforSubstitutionSort } from './modules/sorts';
import createShuffledList from './modules/shuffle';
import SortFactory from './modules/sortfactory';

interface Info {
  cnt: number;
  percentage: number;
}

export default function App() {

  const [sortType, setSortType] = useState<string>('selection');
  const [lock, setLock] = useState<boolean>(false);
  const [info, setInfo] = useState<Info>({ cnt: 0, percentage: 0 });
  const [faster, setFaster] = useState<boolean>(false);
  const [colorList, setColorList] = useState<string[]>(createRainbowColor(15));
  const [shuffleList, setShuffleList] = useState<number[]>(createShuffledList(colorList.length));

  useEffect(() => {
    setShuffleList(createShuffledList(colorList.length));
  }, [colorList])

  const isSwapSort = (obj: any): obj is ArrayforSwapSort => {
    return (obj as ArrayforSwapSort).e1 !== undefined;
  }

  const selectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {

    setSortType(e.target.value);
    const len = calculWidth(e.target.value);
    setColorList(prev => [...createRainbowColor(len)]);
  }

  const sortRun = () => {

    setLock(true);

    const sortFactory: SortFactory = new SortFactory(sortType);
    const newarr: ArrayforSwapSort[] | ArrayforSubstitutionSort[] = sortFactory.createSortInstance().run([...shuffleList]);

    const size = newarr.length;
    newarr.forEach((element, idx) => {

      const tid = setTimeout(() => {

        if (isSwapSort(element)) {
          const { e1, e2 } = element as ArrayforSwapSort;
          [shuffleList[e1], shuffleList[e2]] = [shuffleList[e2], shuffleList[e1]];
        } else {
          const { idx, value } = element as ArrayforSubstitutionSort;
          shuffleList[idx] = value;
        }

        setShuffleList(prev => [...shuffleList]);
        setInfo(prev => ({
          ...prev,
          cnt: prev.cnt + 1,
          percentage: Math.floor(((idx + 1) / size) * 100)
        }))

        if (idx === size - 1) {
          setLock(false);
        }
        clearTimeout(tid);
      }, 10);
    });
  }

  const shuffle = () => {

    setShuffleList(createShuffledList(colorList.length));
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
            <Button disabled={lock} onClick={shuffle}>
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
          shuffleList={shuffleList}
          color={colorList}
          faster={faster}
        />
      </main>
    </>
  )
}