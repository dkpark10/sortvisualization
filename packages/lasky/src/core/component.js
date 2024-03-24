let elementId = -1;

export class Component extends HTMLElement {
  shadow;

  constructor() {
    super();
    this.elementId = elementId += 1;
    this.shadow = this.attachShadow({ mode: "open" });
    this.shadow.innerHTML = this.render();
  }

  attributeChangedCallback(attr, _, newValue) {
    this[attr] = newValue;
    this.shadow.innerHTML = this.render();
  }
}
