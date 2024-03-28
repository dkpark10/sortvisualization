// eslint-disable-next-line import/no-relative-packages
import { getRainbowColors } from '../../../services/index.js';
import Component from '../core/component.js';
import { shuffle } from '../util/index.js';
import { store, MUTATION_STICK_LENGTH, MUTATION_SHUFFLED_LIST } from '../store/index.js';

export class Main extends Component {
  constructor({ target }) {
    const rainbowColors = getRainbowColors();
    const { length } = rainbowColors;

    const shuffledList = shuffle(Array.from({ length }, (_, i) => i + 1));

    const state = {
      rainbowColors,
    };

    store.commit(MUTATION_STICK_LENGTH, shuffledList.length);
    store.commit(MUTATION_SHUFFLED_LIST, shuffledList);

    super({ target, state });
  }

  render() {
    const { shuffledList } = store.state;
    const { rainbowColors } = this.$state;

    const stickStyle = (backgroundColor, height) => `"background-color:${backgroundColor}; height:${height * 2}px"`;

    return `
      ${shuffledList
    .map((item) => `<span class="stick" style=${stickStyle(rainbowColors[item - 1], item)}></span>`)
    .join('')}
    `;
  }
}
