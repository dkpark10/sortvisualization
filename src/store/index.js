/* eslint-disable no-param-reassign */
import { Store } from '../core/store';

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
