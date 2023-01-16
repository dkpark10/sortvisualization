import Component from './core/component.js';
import { Main } from './components/main.js';
import { Header } from './components/header.js';

export class App extends Component {
  constructor({ target }) {
    super({ target });

    const header = document.querySelector('header');
    const main = document.querySelector('main');

    new Header({ target: header });
    new Main({ target: main });
  }

  render() {
    return `
      <header></header>
      <main></main>
    `;
  }
}
