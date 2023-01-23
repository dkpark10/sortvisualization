import Component from '../core/component.js';
import { store, MUTATION_SET_SORTTYPE } from '../store/index.js';

export class Header extends Component {
  constructor({ target }) {
    super({ target });
  }

  render() {
    const sortList = [
      ['selection', 'Selection Sort'],
      ['quick', 'Quick Sort'],
      ['insertion', 'Insertion Sort'],
      ['heap', 'Heap Sort'],
      ['bubble', 'Bubble Sort'],
      ['merge', 'Merge Sort'],
      ['cocktail', 'Cocktail Sort'],
      ['radix', 'Radix Sort'],
      ['shell', 'Shell Sort'],
    ];

    return `
      <aside>
        <div>길이: </div>
        <div>비교횟수: </div>
        <div>진행도: %</div>
      </aside>    
      <aside>
        <div>
          <select name="sort-type" style="width:100%; border-radius: 5px">
            ${sortList.map((sort) => `<option value=${sort[0]}>${sort[1]}</option>`)}
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
    document.querySelector('select').addEventListener('change', (e) => {
      store.commit(MUTATION_SET_SORTTYPE, e.target.value);
    });

    this.$target.addEventListener('click', (e) => {
      const { target } = e;

      if (target.classList.contains('run-btn')) {
        console.log('run');
        console.log(store.state.sortType);
      }

      if (target.classList.contains('shuffle-btn')) {
        console.log('shuffle');
      }
    });
  }
}
