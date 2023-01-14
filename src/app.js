import Component from './core/component.js';
import { Main } from './components/main.js';

export class App extends Component {
  constructor({ target }) {
    super({ target });
  }

  render() {
    return '<main></main>';
  }

  mounted() {
    const main = document.querySelector('main');
    new Main({ target: main });
  }
}
