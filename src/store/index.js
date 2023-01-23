import { Store } from '../core/store.js';

export const MUTATION_RUN_TOGGLE = 'RUN_TOGGLE';
export const MUTATION_SHUFFLE_TOGGLE = 'SHUFFLE_TOGGLE';
export const MUTATION_SET_SORTTYPE = 'SET_SORTTYPE';

export const store = new Store({
  state: {
    runToggle: true,
    shuffleToggle: true,
    sortType: 'select',
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
