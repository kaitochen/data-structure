class Stack {
  constructor(initData = []) {
    this._stack = [];
    this.count = 0;
    this._init(initData);
  }
  _init(data) {
    this._stack = this._stack.concat(data);
  }
  push(el) {
    this._stack.push(el);
    this.count++;
  }
  pop() {
    if (!this.isEmpty()) {
      this.count--;
      return this._stack.pop();
    } else {
      this.count = 0;
      return undefined;
    }
  }
  peek() {
    if (this.count <= 0) {
      return undefined;
    } else {
      return this._stack[this.count - 1];
    }
  }
  isEmpty() {
    return this.count <= 0;
  }
  clear() {
    this._stack = [];
    this.count = 0;
  }
  size() {
    return this.count;
  }
  toString() {
    if (this.isEmpty()) {
      return "";
    }
    let str = [];
    this._stack.forEach((val) => {
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

class ArrayStack {
  constructor(initData = []) {
    this._stack = [];
    this._init(initData);
  }
  _init(data) {
    if (Array.isArray(data)) {
      this._stack = this._stack.concat(data);
    } else {
      this._stack.push(data);
    }
  }
  push(data) {
    this._stack.push(data);
  }
  pop() {
    return this._stack.pop();
  }
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this._stack[this._stack.length - 1];
  }
  size() {
    return this._stack.length;
  }
  clear() {
    this._stack = [];
  }
  isEmpty() {
    return this._stack.length <= 0;
  }
  toString() {
    if (this.isEmpty()) {
      return "";
    }
    let str = [];
    this._stack.forEach((val) => {
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

class ObjectStack {
  constructor(initData = []) {
    this._stack = {};
    this.count = 0;
    this._init(initData);
  }
  _init(data) {
    if (Array.isArray(data)) {
      data.forEach((item) => {
        this._stack[this.count] = item;
        this.count++;
      });
    } else {
      this._stack[this.count] = data;
      this.count++;
    }
  }
  push(data) {
    this._stack[this.count] = data;
    this.count++;
  }
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const res = this._stack[this.count];
    delete this._stack[this.count];
    return res;
  }
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this._stack[this.count - 1];
  }
  isEmpty() {
    return this.count <= 0;
  }
  size() {
    return this.count;
  }
  clear() {
    this._stack = {};
    this.count = 0;
  }
  toString() {
    if (this.isEmpty()) {
      return "";
    }
    let str = [];
    Object.values(this._stack).forEach((val) => {
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
  Stack,
  ArrayStack,
  ObjectStack,
};
