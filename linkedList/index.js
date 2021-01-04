const Node = require("../node/Node");
const { defaultEqual } = require("../util/index");
class LinkedList {
  constructor(equalFn = defaultEqual) {
    this.count = 0;
    this.head = null;
    this._equalFn = equalFn;
  }
  push(ele) {
    const node = new Node(ele);
    if (this.head == null) {
      this.head = node;
    } else {
      let current;
      current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
  }
  insert(ele, position) {
    if (position > this.count || position < 0) return undefined;
    const node = new Node(ele);
    if (position == 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let current = this.head,
        count = 0;
      while (count < position - 1) {
        current = current.next;
      }
      node.next = current.next;
      current.next = node;
    }
    this.count++;
  }
  getElementAt(index) {
    if (index < 0 || index >= this.count) {
      return undefined;
    }
    let current = this.head;
    let count = 0;
    while (current && current.next && count < index) {
      current = current.next;
      count++;
    }
    return current;
  }
}

module.exports = {
  LinkedList
}