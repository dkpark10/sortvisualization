export class Hello extends HTMLElement {
  static get observedAttributes() {return ['count']; }

  constructor() {
    super();
    if (!Hello.observedAttributes) {
      this.render();
    }
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    this[attr] = newValue;
    this.render();
  }

  render() {
    this.innerHTML = `<div>hello ${this['count']}</div>`;
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
