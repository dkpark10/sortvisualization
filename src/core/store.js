export class Store {
  constructor(state, mutations, actions) {
    this.$state = state;
    this.mutations = mutations;
    this.action = actions;

    Object.keys(state).forEach((key) => {
      Object.defineProperty(this.state, key, {
        get: () => this.$state[key],
      });
    });
  }

  commit(name, payload) {
    this.mutations[name](this.state, payload);
  }
}
