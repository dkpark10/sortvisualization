/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-relative-packages
import { getSortedList, getRainbowColors } from '../../../services/index.js';
import Component from '../core/component.js';
import { store, MUTATION_SHUFFLED_LIST } from '../store/index.js';
import { shuffle, sleep } from '../util/index.js';

export class Header extends Component {
  constructor({ target }) {
    const state = {
      compareCount: 0,
      totalCompareCount: 0,
    };

    super({ target, state });
    this.sortType = 'quick';
  }

  render() {
    const sortList = [
      ['quick', 'Quick Sort'],
      ['selection', 'Selection Sort'],
      ['insertion', 'Insertion Sort'],
      ['heap', 'Heap Sort'],
      ['bubble', 'Bubble Sort'],
      ['merge', 'Merge Sort'],
      ['cocktail', 'Cocktail Sort'],
      ['radix', 'Radix Sort'],
      ['shell', 'Shell Sort'],
    ];

    const { stickLength } = store.state;
    const { compareCount, totalCompareCount } = this.$state;
    const { sortType } = this;
    const percentage = totalCompareCount === 0
      ? 0
      : Math.floor(((compareCount + 1) / totalCompareCount) * 100);

    return `
      <aside>
        <div>길이: ${stickLength}</div>
        <div>비교횟수: ${compareCount}</div>
        <div>진행률: ${percentage}%</div>
      </aside>    
      <aside>
        <div>
          <select name="sort-type" class="select_sort_type" style="width:100%; border-radius: 5px">
            ${sortList
    .map(([value, sort]) => {
      const selected = value === sortType;
      return `<option ${selected ? 'selected' : ''} value=${value}>${sort}</option>`;
    })
    .join('')}
          </select>
        </div>
        <div class='button_wrapper' >
          <button class="run-btn">run</button>
          <button class="shuffle-btn">shuffle</button>
        </div>
      </aside>
    `;
  }

  bindEvent() {
    this.$target.addEventListener('click', (e) => {
      const { target } = e;

      if (target.classList.contains('run-btn')) {
        this.onClickRun();
      }

      if (target.classList.contains('shuffle-btn')) {
        this.onClickShuffle();
      }
    });

    this.$target.addEventListener('change', (e) => {
      const { target } = e;

      const select = document.querySelector('select[name="sort-type"]');
      if (target === select) {
        this.sortType = target.value;
      }
    });
  }

  async onClickRun() {
    const shuffledList = [...store.state.shuffledList];
    const sortedList = getSortedList(this.sortType).run([...shuffledList]);

    const elements = sortedList.entries();
    for (const [idx, element] of elements) {
      // eslint-disable-next-line no-await-in-loop
      await sleep(10);
      let result;
      if (Object.prototype.hasOwnProperty.call(element, 'e1') && Object.prototype.hasOwnProperty.call(element, 'e2')) {
        result = this.sortSwapList(element, shuffledList);
      } else if (
        Object.prototype.hasOwnProperty.call(element, 'idx')
        && Object.prototype.hasOwnProperty.call(element, 'value')
      ) {
        result = this.sortSubList(element, shuffledList);
      }

      this.setState({
        compareCount: idx,
        totalCompareCount: sortedList.length,
      });

      store.commit(MUTATION_SHUFFLED_LIST, result);
    }
  }

  onClickShuffle() {
    const rainbowColors = getRainbowColors();
    const { length } = rainbowColors;

    const newShuffledList = shuffle(Array.from({ length }, (_, i) => i + 1));
    store.commit(MUTATION_SHUFFLED_LIST, newShuffledList);

    this.setState({
      compareCount: 0,
      totalCompareCount: 0,
    });
  }

  sortSwapList({ e1, e2 }, shuffledList) {
    const temp = shuffledList[e1];
    shuffledList[e1] = shuffledList[e2];
    shuffledList[e2] = temp;

    return [...shuffledList];
  }

  sortSubList({ idx, value }, shuffledList) {
    shuffledList[idx] = value;
    return [...shuffledList];
  }
}
