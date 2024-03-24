import { html } from "./shared/html";
import { Component } from "./core/component";
import "./components/hello";

export class App extends Component {
  count = 123;

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.render();
  }

  onClick() {
    this.count += 1;
    this.render();
  }

  connectedCallback() {
  }

  getHtml() {
    return html`
      <main>
        <button onclick="${this.onClick}">inc</button>
        <span>${this.count}</span>
        <hello-component count="${this.count}"></hello-component>
      </main>
    `;
  }

  render() {
    this.shadow.innerHTML = this.getHtml();
  }
}

customElements.define("app-component", App);
