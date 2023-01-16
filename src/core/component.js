export default class Component {
  $target;

  $state;

  constructor({ target, state }) {
    this.$target = target;
    this.$state = state;
    this.setHtml();
    this.bindEvent();
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

  mounted() {
  }

  bindEvent() {
  }
}
