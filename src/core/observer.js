export class Watcher {
  constructor() {
    this.subscribers = [];
  }

  subscribe(target) {
    this.subscribers.push(target);
  }

  notify() {
    this.subscribers.forEach((sub) => sub());
  }
}
