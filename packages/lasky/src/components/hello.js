import { Component } from "../core/component";

export class Hello extends Component {
  static get observedAttributes() {
    return ["count"];
  }

  constructor() {
    super();
  }

  render() {
    return `<div>hello ${this["count"]}</div>`;
  }
}

customElements.define("hello-component", Hello);

// export class Hello {
//   data;
//   root = document.createElement("div");

//   constructor(data) {
//     this.data = data;
//     this.render();
//   }

//   render() {
//     return `<div>hello ${this.data}</div>`;
//   }
// }
