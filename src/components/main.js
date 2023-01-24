import Component from '../core/component.js';
import { getRainbowColors } from '../service/index.js';
import { shuffle } from '../util/index.js';
import { store, MUTATION_STICK_LENGTH, MUTATION_SHUFFLED_LIST } from '../store/index.js';

export class Main extends Component {
  constructor({ target }) {
    const rainbowColors = getRainbowColors();

    const list = Array.from({ length: rainbowColors.length }, (_, i) => i + 1);

    const shuffledList = shuffle(list);

    const state = {
      rainbowColors,
    };

    store.commit(MUTATION_STICK_LENGTH, shuffledList.length);
    store.commit(MUTATION_SHUFFLED_LIST, shuffledList);

    super({ target, state });
  }

  render() {
    const shuffledList = store.state.shuffledList;
    const { rainbowColors} = this.$state;
    const stickStyle = (backgroundColor, height) => `"background-color:${backgroundColor}; height:${height}px"`;

    return `
      ${shuffledList
        .map((item) => `<span class="stick" style=${stickStyle(rainbowColors[item - 1], item * 2)}></span>`)
        .join('')}
    `;
  }
}
