let target = null;

export const watcher = (callback) => {
  target = callback;
  target();
  target = null;
};

class PubSub {
  constructor() {
    this.subscribers = [];
  }

  subscribe() {
    if (target && !this.subscribers.includes(target)) {
      this.subscribers.push(target);
    }
  }

  notify() {
    this.subscribers.forEach((run) => run());
  }
}

export const observer = (state) => {
  Object.keys(state).forEach((key) => {
    let value = state[key];
    const pubSub = new PubSub();

    Object.defineProperty(state, key, {
      get() {
        pubSub.subscribe();
        return value;
      },

      set(newValue) {
        if (value === newValue) return;
        if (JSON.stringify(value) === JSON.stringify(newValue)) return;
        value = newValue;
        pubSub.notify();
      },
    });
  });

  return state;
};
