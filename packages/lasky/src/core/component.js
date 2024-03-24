let elementId = -1;

export class Component extends HTMLElement {
  constructor() {
    super();
    this.elementId = elementId += 1;
  }
}