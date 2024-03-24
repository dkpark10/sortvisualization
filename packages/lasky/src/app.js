import { html } from "./shared/html";
import { Component } from "./core/component";
import "./components/hello";

export class App extends Component {
  static properties = {
    count: 123,
  };

  constructor() {
    super();
  }

  onClick() {
    this.count += 1;
  }

  render() {
    const { count } = this.constructor.properties;
    return html`
      <main>
        <button data-testid='${count}' @click="${this.onClick}">inc</button>
        <span>${count}</span>
        <hello-component count="${count}"></hello-component>
      </main>
    `;
  }
}

customElements.define("app-component", App);
