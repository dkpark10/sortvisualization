import Component from '../core/component.js';
import { createRainbowColors } from '../util/create_color.js';

export class Main extends Component {
  constructor({ target }) {
    const state = {
      rainbowColors: createRainbowColors(),
    };

    super({ target, state });
  }

  render() {
    const { rainbowColors } = this.$state;
    const stickStyle = (backgroundColor, height) => `"background-color:${backgroundColor}; height:${height}px"`;

    return `
      ${rainbowColors.map((rainbowColor, idx) => `<span class="stick" style=${stickStyle(rainbowColor, idx * 2)}></span>`).join('')}
    `;
  }
}
