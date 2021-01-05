const Node = require("../node/Node");
const DoubleNode = require("../node/DoubleNode");
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
      let current = this.head;
      let count = 0;
      while (count < position - 1) {
        current = current.next;
        count++;
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
    return current.element;
  }
  remove(ele) {
    if (this.head == null) {
      return undefined;
    }
    let current = this.head;
    let prev = null;
    let equal = false;
    while (!equal && current) {
      equal = this._equalFn(ele, current.element);
      prev = current;
      current = current.next;
    }
    if (equal) {
      prev.next = current ? current.next : null;
      this.count--;
    }
  }
  indexOf(ele) {
    if (this.head == null) {
      return -1;
    }
    let count = 0;
    let current = this.head;
    while (count < this.count && current != null) {
      if (this._equalFn(ele, current.element)) {
        return count;
      }
      current = current.next;
      count++;
    }
    return -1;
  }
  isEmpty() {
    return this.head == null;
  }
  size() {
    return this.count;
  }
  removeAt(position) {
    if (position >= this.count || position < 0) return undefined;
    if (position === 0) {
      this.head = this.head.next;
    } else {
      let current = this.head;
      let prev = null;
      let count = 0;
      while (position > count) {
        prev = current;
        current = current.next;
        count++;
      }
      prev.next = current.next;
    }
    this.count--;
  }
  toString() {
    if (this.head == null) {
      return "";
    }
    let current = this.head;
    let str = [];
    let i = 0;
    while (i < this.count) {
      const val = current.element;
      const _str =
        val == null
          ? ""
          : Array.isArray(val) ||
            (Object.prototype.toString.call(val) === "[object Object]" &&
              val.toString === Object.prototype.toString)
          ? JSON.stringify(val, null, 2)
          : String(val);

      str.push(_str);
      current = current.next;
      i++;
    }
    return str.join(",");
  }
  getHead() {
    return this.head;
  }
}

class DoubleLinkedList {
  constructor(equalFn = defaultEqual) {
    this._equalFn = equalFn;
    this.count = 0;
    this.head = null;
    this.tail = null;
  }
  push(ele){
    const node = new DoubleNode(ele);
    if(this.head == null){
      this.head = node.prev;
      this.tail = node.next;
    }else{
      
    }
  }
}

module.exports = {
  LinkedList,
};
