let target = null;

export const watcher = (callback) => {
  target = callback;
  target();
  target = null;
};

export class Observer {
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
