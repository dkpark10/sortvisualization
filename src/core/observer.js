let target = null;

export const watcher = (callback) => {
  target = callback;
  target();
  target = null;
};

export class PubSub {
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
