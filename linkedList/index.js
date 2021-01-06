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
  push(ele) {
    const node = new DoubleNode(ele);
    if (this.head == null) {
      this.head = node;
      this.tail = node;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
      node.prev = current;
      this.tail = node;
    }
    this.count++;
  }
  insert(ele, position) {
    if (position < 0 || this.count < position) return undefined;
    const node = new DoubleNode(ele);
    if (this.head == null) {
      this.head = node;
      this.tail = node;
    } else {
      let current = this.head;
      if (position == 0) {
        node.next = this.head;
        current.prev = node;
        this.head = node;
      } else if (position === this.count) {
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
      } else {
        let count = 0;
        while (count < position) {
          count++;
          current = current.next;
        }
        const prev = current.prev;
        prev.next = node;
        node.prev = prev;
        node.next = current;
        current.prev = node;
      }
    }
    this.count++;
  }
  removeAt(position) {
    if (position < 0 || position >= this.count || this.head == null)
      return undefined;
    if (position == 0) {
      this.head = this.head.next;
      this.head.prev = null;
      if (this.count == 1) {
        this.tail = null;
      }
    } else if (position === this.count - 1) {
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      let count = 0;
      let current = this.head;
      while (count < position) {
        count++;
        current = current.next;
      }
      const next = current.next;
      const prev = current.prev;
      prev.next = next;
      next.prev = prev;
    }
    this.count--;
  }
  indexOf(ele) {
    if (this.head == null) return -1;
    let current = this.head;
    for (let i = 0; i < this.count; i++) {
      if (this._equalFn(ele, current.element)) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }
  remove(ele) {
    const index = this.indexOf(ele);
    this.removeAt(index);
  }
  getElementAt(index) {
    if (index < 0 || index >= this.count || this.head == null) return undefined;
    let current = this.head;
    for (let i = 0; i < this.count; i++) {
      if (index == i) {
        return current.element;
      }
      current = current.next;
    }
    return undefined;
  }
  size() {
    return this.count;
  }
  isEmpty() {
    return this.count == 0;
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
  getTail() {
    return this.tail;
  }
}

class CircularLinkedList extends LinkedList {
  constructor(equalFn) {
    super(equalFn);
    this.tail = null;
  }
  push(ele) {
    const node = new Node(ele);
    if (this.head == null) {
      this.head = node;
      node.next = this.head;
      this.tail = node;
    } else {
      let current = this.head;
      while (current.next != this.head) {
        current = current.next;
      }
      current.next = node;
      node.next = this.head;
      this.tail = node;
    }
    this.count++;
  }
  insert(ele, position) {
    if (position < 0 || position > this.count) return undefined;
    const node = new Node(ele);
    if (this.head == null) {
      this.head = node;
      node.next = this.head;
    } else {
      if (position == 0) {
        node.next = this.head;
        this.head = node;
        this.tail.next = this.head;
      } else if (position === this.count) {
        this.tail.next = node;
        node.next = this.head;
        this.tail = node;
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
  }
  removeAt(index) {
    if (index < 0 || index >= this.count || this.head == null) return undefined;
    let current = this.head;
    let count = 0;
    if (index == 0) {
      this.head = this.head.next;
      this.tail.next = this.head;
    } else {
      while (count < index - 1) {
        current = current.next;
        count++;
      }
      const prev = current;
      if (index == this.count - 1) {
        prev.next = this.head;
        this.tail = prev;
      } else {
        current = current.next;
        prev.next = current.next;
      }
    }
    this.count--;
  }
  indexOf(ele) {
    if (this.head == null) return -1;
    let current = this.head;
    for (let i = 0; i < this.count; i++) {
      if (this._equalFn(ele, current.element)) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }
  remove(ele) {
    const index = this.indexOf(ele);
    this.removeAt(index);
  }
  size() {
    return this.count;
  }
  isEmpty() {
    return this.count == 0;
  }
  getHead() {
    return this.head;
  }
  getTail() {
    return this.tail;
  }
}
class CircularDoubleLinkedList extends DoubleLinkedList {
  constructor(equalFn) {
    super(equalFn);
  }
  push(ele) {
    const node = new DoubleNode(ele);
    if (this.head == null) {
      this.head = node;
      this.tail = node;
      node.prev = node;
      node.next = node;
    } else {
      let current = this.head;
      while (current.next != this.head) {
        current = current.next;
      }
      current.next = node;
      node.prev = current;
      node.next = this.head;
      this.head.prev = node;
      this.tail = node;
    }
    this.count++;
  }
  insert(ele, position) {
    if (this.position < 0 || this.position > this.count) return undefined;
    const node = new DoubleNode(ele);

    if (position == 0) {
      node.next = this.head;
      node.prev = this.tail;
      this.head.prev = node;
      this.tail.next = node;
      this.head = node;
    } else if (position == this.count) {
      node.prev = this.tail;
      node.next = this.head;
      this.tail.next = node;
      this.head.prev = node;
      this.tail = node;
    } else {
      let count = 0;
      let current = this.head;
      while (count < position) {
        current = current.next;
        count++;
      }
      current.prev.next = node;
      current.prev = node;
      node.next = current;
      node.prev = current.prev;
    }
    this.count++;
  }
  indexOf(ele) {
    if (this.head == null) return -1;
    let current = this.head;
    for (let i = 0; i < this.count; i++) {
      if (this._equalFn(ele, current.element)) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }
  getElementAt(index) {
    if (index < 0 || index >= this.count || this.head == null) return undefined;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current.element;
  }
  removeAt(index) {
    if (index < 0 || index >= this.count || this.head == null) return undefined;
    if (this.count <= 1) {
      this.head = null;
      this.tail = null;
      this.count = 0;
      return;
    } else {
      if (index == 0) {
        const head = this.head;
        head.next.prev = this.tail;
        this.head = head.next;
        this.tail.next = this.head;
      } else if (index == this.count - 1) {
        this.tail.prev.next = this.head;
        this.head.prev = this.tail.prev;
        this.tail = this.tail.prev;
      } else {
        let current = this.head;
        let count = 0;

        while (count < index) {
          current = current.next;
          count++;
        }
        current.prev.next = current.next;
        current.next.prev = current.prev;
      }
      this.count--;
    }
  }
  remove(ele) {
    const index = this.indexOf(ele);
    this.removeAt(index);
  }
  size() {
    return this.count;
  }
  isEmpty() {
    return this.count <= 0;
  }
  getHead() {
    return this.head;
  }
  getTail() {
    return this.tail;
  }
}
module.exports = {
  LinkedList,
  DoubleLinkedList,
  CircularLinkedList,
  CircularDoubleLinkedList,
  CircularDoubleLinkedList
};
