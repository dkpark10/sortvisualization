export default class Component {
  $target;

  $state;

  constructor({ target }) {
    this.$target = target;
    this.render();
  }

  setState(newState) {
    this.$state = { ...this.$state, newState };
  }

  template() {
    return '';
  }

  render() {
    this.$target = this.template();
  }
}
