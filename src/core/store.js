/* eslint-disable no-param-reassign */
import { PubSub } from './observer.js';

export class Store {
  constructor({ state, mutations, actions }) {
    this.state = state;
    this.$mutations = mutations;
    this.$actions = actions;

    Object.keys(state).forEach((key) => {
      let value = state[key];
      const pubSub = new PubSub();

      Object.defineProperty(state, key, {
        get() {
          pubSub.subscribe();
          return value;
        },

        set(newValue) {
          if (value === newValue || JSON.stringify(value) === JSON.stringify(newValue)) {
            return;
          }
          value = newValue;
          pubSub.notify();
        },
      });
    });
  }

  commit(mutationsKey, payload) {
    this.$mutations[mutationsKey](this.state, payload);
  }

  dispatch(actionsKey, payload) {
    this.$actions[actionsKey]({
      state: this.state,
      commit: this.commit.bind(this),
      dispatch: this.dispatch.bind(this),
    }, payload);
  }
}
