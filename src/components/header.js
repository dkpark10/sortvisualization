import Component from '../core/component.js';
import { store, MUTATION_SHUFFLED_LIST } from '../store/index.js';
import { shuffle, sleep} from '../util/index.js';
import { getSortedList, getRainbowColors } from '../service/index.js';

export class Header extends Component {
  constructor({ target }) {
    const state = {
      compareCount: 0,
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

    const stickLength = store.state.stickLength;
    const { compareCount } = this.$state;
    const sortType = this.sortType;
    const percentage = compareCount === 0 ? 0 : Math.ceil(100 / (compareCount + 1) * compareCount);

    return `
      <aside>
        <div>길이: ${stickLength}</div>
        <div>비교횟수: ${compareCount}</div>
        <div>진행률: ${percentage}%</div>
      </aside>    
      <aside>
        <div>
          <select name="sort-type" class="select_sort_type" style="width:100%; border-radius: 5px">
            ${sortList.map(([value, sort]) =>  {
              const selected = value === sortType ? true : false;
              return `<option ${selected ? 'selected' : ''} value=${value}>${sort}</option>`
            }).join('')}
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

  onClickRun() {
    const shuffledList = [...store.state.shuffledList];
    const sortedList = getSortedList(this.sortType).run([...shuffledList]);

    sortedList.forEach((element, idx) => {
      const timer = setTimeout(async () => {
        let result;
        if (element.hasOwnProperty('e1') && element.hasOwnProperty('e2')) {
          result = this.sortSwapList(element, shuffledList);
        } else if (element.hasOwnProperty('idx') && element.hasOwnProperty('value')) {
          result = this.sortSubList(element, shuffledList);
        }

        this.setState({
          compareCount: idx,
        });

        store.commit(MUTATION_SHUFFLED_LIST, result);

        clearTimeout(timer);
      }, 10);
    });
  }

  onClickShuffle() {
    const rainbowColors = getRainbowColors();
    const length = rainbowColors.length;

    const newShuffledList = shuffle(Array.from({ length }, (_, i) => i + 1));
    store.commit(MUTATION_SHUFFLED_LIST, newShuffledList);

    this.setState({
      compareCount: 0,
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
