import { watcher } from './observer.js';

export default class Component {
  constructor({ target, state }) {
    this.$target = target;
    this.$state = state;
    this.setHtml();
    this.bindEvent();

    watcher(() => {
      this.setHtml();
    });
  }

  setState(newState) {
    this.$state = { ...this.$state, newState };
    this.render();
  }

  setHtml() {
    this.$target.innerHTML = this.render();
    this.mounted();
  }

  render() {
    return '';
  }

  mounted() {}

  bindEvent() {}
};
