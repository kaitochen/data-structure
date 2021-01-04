// 双向队列

class Deque {
  constructor(initData = []) {
    this._deque = {};
    this.first = 0;
    this.last = 0;
    this._init(initData);
  }
  _init(data) {
    if (Array.isArray(data)) {
      data.forEach((item) => {
        this._deque[this.last++] = item;
      });
    } else {
      this._deque[this.last++] = item;
    }
  }
  addFront(ele) {
    if (this.isEmpty()) {
      this.addBack(ele);
    } else if (this.first > 0) {
      this._deque[--this.first] = ele;
    } else {
      // 使用负数的索引
      // this._deque[--this.first] = ele;
      // 不使用负数的索引，后移队列位置
      for (let i = this.last; i > this.first; i--) {
        this._deque[i] = this._deque[i - 1];
      }
      this.last++;
      this._deque[this.first] = ele;
    }
  }
  addBack(ele) {
    this._deque[this.last++] = ele;
  }
  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    const res = this._deque[this.first];
    delete this._deque[this.first];
    this.first++;
    return res;
  }
  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    const res = this._deque[--this.last];
    delete this._deque[this.last];
    return res;
  }
  isEmpty() {
    return this.last - this.first <= 0;
  }
  peekFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this._deque[this.first];
  }
  peekBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this._deque[this.last - 1];
  }
  size() {
    return this.last - this.first;
  }
  clear() {
    this._deque = {};
    this.first = this.last = 0;
  }
  toString() {
    if (this.isEmpty()) {
      return "";
    }
    let str = [];
    Object.values(this._deque).forEach((val) => {
      const _str =
        val == null
          ? ""
          : Array.isArray(val) ||
            (Object.prototype.toString.call(val) === "[object Object]" &&
              val.toString === Object.prototype.toString)
          ? JSON.stringify(val, null, 2)
          : String(val);

      str.push(_str);
    });
    return str.join(",");
  }
}
// 数组实现双向队列
class ArrayDeque {
  constructor(initData = []) {
    this._deque = [];
    this._init(initData);
  }
  _init(data) {
    if (Array.isArray(data)) {
      this._deque = this._deque.concat(data);
    } else {
      this._deque.push(data);
    }
  }
  addFront(ele) {
    this._deque.unshift(ele);
  }
  addBack(ele) {
    this._deque.push(ele);
  }
  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this._deque.shift();
  }
  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this._deque.pop();
  }
  peekFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this._deque[0];
  }
  peekBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this._deque[this._deque.length - 1];
  }
  isEmpty() {
    return this._deque.length <= 0;
  }
  size() {
    return this._deque.length;
  }
  clear() {
    this._deque = [];
  }
  toString() {
    if (this.isEmpty()) {
      return "";
    }
    let str = [];
    Object.values(this._deque).forEach((val) => {
      const _str =
        val == null
          ? ""
          : Array.isArray(val) ||
            (Object.prototype.toString.call(val) === "[object Object]" &&
              val.toString === Object.prototype.toString)
          ? JSON.stringify(val, null, 2)
          : String(val);

      str.push(_str);
    });
    return str.join(",");
  }
}

module.exports = {
  Deque,
  ArrayDeque,
};
