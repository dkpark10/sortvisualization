import Component from './core/component.js';

export class App extends Component {
  constructor({ target }) {
    super({ target });
  }

  template() {
    this.$target.innerHTML = '<button>RUN</button>';
  }
}
