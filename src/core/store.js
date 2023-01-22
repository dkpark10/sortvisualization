/* eslint-disable no-param-reassign */
import { observer, watcher } from './observer.js';

export class Store {
  /**
   * @param {params} 상태, 뮤테이션, 액션 파라미터로 받음
   */
  constructor({ state, mutations, actions }) {
    this.$state = observer(state);
    this.$mutations = mutations;
    this.$action = actions;
  }

  commit(name, payload) {
    this.mutations[name](this.state, payload);
  }
}

const store = new Store({
  state: {
    runToggle: true,
    shuffleToggle: true,
    sortType: 'select',
    price: 100,
    quantity: 5,
  },

  mutations: {
    RUN_TOGGLE(state) {
      state.runToggle = !state.runToggle;
    },
    SHUFFLE_TOGGLE(state) {
      state.shuffleToggle = !state.shuffleToggle;
    },
    SET_SORTTYPE(state, payload) {
      state.sortType = payload;
    },
  },

  actions: {},
});

let total = store.$state.price * store.$state.quantity;
watcher(() => {
  total = store.$state.price * store.$state.quantity;  
})

console.log(total);
store.$state.price = 200;
console.log(total);
