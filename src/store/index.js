import { Store } from '../core/store.js';

export const MUTATION_RUN_TOGGLE = 'RUN_TOGGLE';
export const MUTATION_SHUFFLE_TOGGLE = 'SHUFFLE_TOGGLE';
export const MUTATION_SET_SORTTYPE = 'SET_SORTTYPE';
export const MUTATION_STICK_LENGTH = 'STICK_LENGTH';
export const MUTATION_SHUFFLED_LIST = 'SHUFFED_LIST';

export const store = new Store({
  state: {
    runToggle: true,
    shuffleToggle: true,
    sortType: 'select',
    stickLength: 0,
    shuffledList: [],
  },

  mutations: {
    [MUTATION_RUN_TOGGLE](state) {
      state.runToggle = !state.runToggle;
    },
    [MUTATION_SHUFFLE_TOGGLE](state) {
      state.shuffleToggle = !state.shuffleToggle;
    },
    [MUTATION_SET_SORTTYPE](state, payload) {
      state.sortType = payload;
    },
    [MUTATION_STICK_LENGTH](state, payload) {
      state.stickLength = payload;
    },
    [MUTATION_SHUFFLED_LIST](state, payload) {
      state.shuffledList = payload;
    }
  },

  actions: {},
});
