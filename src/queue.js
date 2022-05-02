const { NotImplementedError } = require('../extensions/index.js');

class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.arr = null;
  }
  getUnderlyingList() {
    return this.head;
  }
  enqueue(value) {
    if (this.head) {
      let temp = this.head;
      while (temp.next) {
        temp = temp.next;
      }
      temp.next = new ListNode(value);
    }
    if (!this.head) {
      this.head = new ListNode(value);
    }
  }
  dequeue() {
    let temp = this.head.value;
    this.head = this.head.next;
    return temp;
  }
}

module.exports = {
  Queue
};