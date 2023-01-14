import Component from '../core/component.js';
import { createRainbowColors, shuffle } from '../util/index.js';

export class Main extends Component {
  constructor({ target }) {
    const rainbowColors = createRainbowColors();

    const list = Array.from({ length: rainbowColors.length }, (_, i) => i + 1);

    const shuffledList = shuffle(list);

    const state = {
      rainbowColors,
      shuffledList,
    };

    super({ target, state });
  }

  render() {
    const { rainbowColors, shuffledList } = this.$state;
    const stickStyle = (backgroundColor, height) => `"background-color:${backgroundColor}; height:${height}px"`;

    return `
      ${shuffledList
        .map((item) => `<span class="stick" style=${stickStyle(rainbowColors[item - 1], item * 2)}></span>`)
        .join('')}
    `;
  }
}
